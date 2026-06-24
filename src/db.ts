// SQLite-backed store: public/private searches (tiles), per-address accounts
// (free-search counter), and likes.
import Database from "better-sqlite3";
import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { RunResult } from "./runtime.js";

export type Visibility = "public" | "private";

export type SearchRecord = {
  id: string; query: string; result: string;
  sources: RunResult["sources"]; images: RunResult["images"];
  economics: RunResult["economics"] | null;
  visibility: Visibility; owner: string | null; likes: number; ts: number;
};

export type Account = { address: string; freeUsed: number; created: number };

const DIR = path.resolve("data");
fs.mkdirSync(DIR, { recursive: true });
const db = new Database(path.join(DIR, "qgent.db"));
db.pragma("journal_mode = WAL");
db.exec(`CREATE TABLE IF NOT EXISTS searches (
  id TEXT PRIMARY KEY, query TEXT, result TEXT,
  sources TEXT, images TEXT, economics TEXT, ts INTEGER
)`);

// Lightweight migration: add columns to pre-existing DBs.
function ensureColumn(table: string, col: string, decl: string) {
  const cols = db.prepare(`PRAGMA table_info(${table})`).all().map((c: any) => c.name);
  if (!cols.includes(col)) db.exec(`ALTER TABLE ${table} ADD COLUMN ${col} ${decl}`);
}
ensureColumn("searches", "visibility", "TEXT DEFAULT 'public'");
ensureColumn("searches", "owner", "TEXT");
ensureColumn("searches", "likes", "INTEGER DEFAULT 0");

db.exec(`CREATE TABLE IF NOT EXISTS accounts (
  address TEXT PRIMARY KEY, free_used INTEGER DEFAULT 0, created INTEGER
)`);
db.exec(`CREATE TABLE IF NOT EXISTS likes (
  address TEXT, search_id TEXT, ts INTEGER, PRIMARY KEY (address, search_id)
)`);
// Private results: owner + 0G Storage hash only (no content kept here).
db.exec(`CREATE TABLE IF NOT EXISTS private_results (
  id TEXT PRIMARY KEY, owner TEXT, storage_hash TEXT, ts INTEGER
)`);

const hydrate = (row: any): SearchRecord => ({
  id: row.id, query: row.query, result: row.result,
  sources: JSON.parse(row.sources || "[]"), images: JSON.parse(row.images || "[]"),
  economics: JSON.parse(row.economics || "null"),
  visibility: (row.visibility || "public") as Visibility,
  owner: row.owner || null, likes: row.likes || 0, ts: row.ts,
});

// --- searches / tiles ---
export function saveSearch(
  r: Omit<SearchRecord, "id" | "ts" | "likes" | "visibility" | "owner"> &
    Partial<Pick<SearchRecord, "visibility" | "owner">>,
): SearchRecord {
  const rec: SearchRecord = {
    visibility: "public", owner: null, ...r, likes: 0,
    id: randomUUID(), ts: Date.now(),
  };
  db.prepare(`INSERT INTO searches (id,query,result,sources,images,economics,visibility,owner,likes,ts)
    VALUES (@id,@query,@result,@sources,@images,@economics,@visibility,@owner,@likes,@ts)`).run({
    id: rec.id, query: rec.query, result: rec.result,
    sources: JSON.stringify(rec.sources), images: JSON.stringify(rec.images),
    economics: JSON.stringify(rec.economics),
    visibility: rec.visibility, owner: rec.owner, likes: rec.likes, ts: rec.ts,
  });
  return rec;
}

// Public tiles only, by recency or popularity.
export function listSearches(sort: "recent" | "liked" = "recent", limit = 24): SearchRecord[] {
  const order = sort === "liked" ? "likes DESC, ts DESC" : "ts DESC";
  return db.prepare(`SELECT * FROM searches WHERE visibility = 'public' ORDER BY ${order} LIMIT ?`).all(limit).map(hydrate);
}
export function getSearch(id: string): SearchRecord | null {
  const row = db.prepare(`SELECT * FROM searches WHERE id = ?`).get(id);
  return row ? hydrate(row) : null;
}
export function clearSearches(): void { db.prepare(`DELETE FROM searches`).run(); }

// Toggle a like; returns the new count + whether the user now likes it.
export function toggleLike(address: string, searchId: string): { likes: number; liked: boolean } {
  const addr = address.toLowerCase();
  const existing = db.prepare(`SELECT 1 FROM likes WHERE address = ? AND search_id = ?`).get(addr, searchId);
  if (existing) {
    db.prepare(`DELETE FROM likes WHERE address = ? AND search_id = ?`).run(addr, searchId);
    db.prepare(`UPDATE searches SET likes = MAX(0, likes - 1) WHERE id = ?`).run(searchId);
  } else {
    db.prepare(`INSERT INTO likes (address, search_id, ts) VALUES (?,?,?)`).run(addr, searchId, Date.now());
    db.prepare(`UPDATE searches SET likes = likes + 1 WHERE id = ?`).run(searchId);
  }
  const row: any = db.prepare(`SELECT likes FROM searches WHERE id = ?`).get(searchId);
  return { likes: row?.likes ?? 0, liked: !existing };
}
export function likedIds(address: string): string[] {
  return db.prepare(`SELECT search_id FROM likes WHERE address = ?`).all(address.toLowerCase()).map((r: any) => r.search_id);
}

// --- private results (hash-only; content lives on 0G Storage) ---
export function savePrivate(owner: string, storageHash: string): { id: string } {
  const id = randomUUID();
  db.prepare(`INSERT INTO private_results (id, owner, storage_hash, ts) VALUES (?,?,?,?)`)
    .run(id, owner.toLowerCase(), storageHash, Date.now());
  return { id };
}
export function listPrivate(owner: string): { id: string; storageHash: string; ts: number }[] {
  return db.prepare(`SELECT id, storage_hash as storageHash, ts FROM private_results WHERE owner = ? ORDER BY ts DESC LIMIT 50`)
    .all(owner.toLowerCase()) as any[];
}

// --- accounts (free-tier counter, keyed by wallet address) ---
export function getAccount(address: string): Account {
  const addr = address.toLowerCase();
  let row: any = db.prepare(`SELECT * FROM accounts WHERE address = ?`).get(addr);
  if (!row) {
    db.prepare(`INSERT INTO accounts (address, free_used, created) VALUES (?,0,?)`).run(addr, Date.now());
    row = { address: addr, free_used: 0, created: Date.now() };
  }
  return { address: row.address, freeUsed: row.free_used, created: row.created };
}
export function bumpFreeUsed(address: string): number {
  const addr = address.toLowerCase();
  getAccount(addr);
  db.prepare(`UPDATE accounts SET free_used = free_used + 1 WHERE address = ?`).run(addr);
  return (db.prepare(`SELECT free_used FROM accounts WHERE address = ?`).get(addr) as any).free_used;
}
