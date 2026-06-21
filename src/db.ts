// SQLite-backed store for past searches (tiles + reopenable results/decks).
import Database from "better-sqlite3";
import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { RunResult } from "./runtime.js";

const DIR = path.resolve("data");
fs.mkdirSync(DIR, { recursive: true });
const db = new Database(path.join(DIR, "qgent.db"));
db.pragma("journal_mode = WAL");
db.exec(`CREATE TABLE IF NOT EXISTS searches (
  id TEXT PRIMARY KEY,
  query TEXT,
  result TEXT,
  sources TEXT,
  images TEXT,
  economics TEXT,
  ts INTEGER
)`);

export type SearchRecord = {
  id: string; query: string; result: string;
  sources: RunResult["sources"]; images: RunResult["images"];
  economics: RunResult["economics"] | null; ts: number;
};

export function saveSearch(r: Omit<SearchRecord, "id" | "ts">): SearchRecord {
  const rec: SearchRecord = { ...r, id: randomUUID(), ts: Date.now() };
  db.prepare(`INSERT INTO searches (id,query,result,sources,images,economics,ts)
    VALUES (@id,@query,@result,@sources,@images,@economics,@ts)`).run({
    id: rec.id, query: rec.query, result: rec.result,
    sources: JSON.stringify(rec.sources), images: JSON.stringify(rec.images),
    economics: JSON.stringify(rec.economics), ts: rec.ts,
  });
  return rec;
}

const hydrate = (row: any): SearchRecord => ({
  id: row.id, query: row.query, result: row.result,
  sources: JSON.parse(row.sources || "[]"), images: JSON.parse(row.images || "[]"),
  economics: JSON.parse(row.economics || "null"), ts: row.ts,
});

export function listSearches(limit = 24): SearchRecord[] {
  return db.prepare(`SELECT * FROM searches ORDER BY ts DESC LIMIT ?`).all(limit).map(hydrate);
}
export function getSearch(id: string): SearchRecord | null {
  const row = db.prepare(`SELECT * FROM searches WHERE id = ?`).get(id);
  return row ? hydrate(row) : null;
}
export function clearSearches(): void {
  db.prepare(`DELETE FROM searches`).run();
}
