"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js
  var init_dirname = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js"() {
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
  var init_buffer = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js"() {
      init_buffer2();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/process.js
  function unimplemented(name2) {
    throw new Error("Node.js process " + name2 + " is not supported by JSPM core outside of Node.js");
  }
  function cleanUpNextTick() {
    if (!draining || !currentQueue)
      return;
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length)
      drainQueue();
  }
  function drainQueue() {
    if (draining)
      return;
    var timeout = setTimeout(cleanUpNextTick, 0);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue)
          currentQueue[queueIndex].run();
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++)
        args[i - 1] = arguments[i];
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining)
      setTimeout(drainQueue, 0);
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function noop() {
  }
  function _linkedBinding(name2) {
    unimplemented("_linkedBinding");
  }
  function dlopen(name2) {
    unimplemented("dlopen");
  }
  function _getActiveRequests() {
    return [];
  }
  function _getActiveHandles() {
    return [];
  }
  function assert(condition, message) {
    if (!condition) throw new Error(message || "assertion error");
  }
  function hasUncaughtExceptionCaptureCallback() {
    return false;
  }
  function uptime() {
    return _performance.now() / 1e3;
  }
  function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - _performance.now()) * 1e-3);
    var clocktime = _performance.now() * 1e-3;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += nanoPerSec;
      }
    }
    return [seconds, nanoseconds];
  }
  function on() {
    return process;
  }
  function listeners(name2) {
    return [];
  }
  var queue, draining, currentQueue, queueIndex, title, arch, platform, env, argv, execArgv, version, versions, emitWarning, binding, umask, cwd, chdir, release, browser2, _rawDebug, moduleLoadList, domain, _exiting, config, reallyExit, _kill, cpuUsage, resourceUsage, memoryUsage, kill, exit, openStdin, allowedNodeEnvironmentFlags, features, _fatalExceptions, setUncaughtExceptionCaptureCallback, _tickCallback, _debugProcess, _debugEnd, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, stdout, stderr, stdin, abort, pid, ppid, execPath, debugPort, argv0, _preload_modules, setSourceMapsEnabled, _performance, nowOffset, nanoPerSec, _maxListeners, _events, _eventsCount, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, process;
  var init_process = __esm({
    "node_modules/@jspm/core/nodelibs/browser/process.js"() {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      queue = [];
      draining = false;
      queueIndex = -1;
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      title = "browser";
      arch = "x64";
      platform = "browser";
      env = {
        PATH: "/usr/bin",
        LANG: typeof navigator !== "undefined" ? navigator.language + ".UTF-8" : void 0,
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
      };
      argv = ["/usr/bin/node"];
      execArgv = [];
      version = "v16.8.0";
      versions = {};
      emitWarning = function(message, type) {
        console.warn((type ? type + ": " : "") + message);
      };
      binding = function(name2) {
        unimplemented("binding");
      };
      umask = function(mask) {
        return 0;
      };
      cwd = function() {
        return "/";
      };
      chdir = function(dir) {
      };
      release = {
        name: "node",
        sourceUrl: "",
        headersUrl: "",
        libUrl: ""
      };
      browser2 = true;
      _rawDebug = noop;
      moduleLoadList = [];
      domain = {};
      _exiting = false;
      config = {};
      reallyExit = noop;
      _kill = noop;
      cpuUsage = function() {
        return {};
      };
      resourceUsage = cpuUsage;
      memoryUsage = cpuUsage;
      kill = noop;
      exit = noop;
      openStdin = noop;
      allowedNodeEnvironmentFlags = {};
      features = {
        inspector: false,
        debug: false,
        uv: false,
        ipv6: false,
        tls_alpn: false,
        tls_sni: false,
        tls_ocsp: false,
        tls: false,
        cached_builtins: true
      };
      _fatalExceptions = noop;
      setUncaughtExceptionCaptureCallback = noop;
      _tickCallback = noop;
      _debugProcess = noop;
      _debugEnd = noop;
      _startProfilerIdleNotifier = noop;
      _stopProfilerIdleNotifier = noop;
      stdout = void 0;
      stderr = void 0;
      stdin = void 0;
      abort = noop;
      pid = 2;
      ppid = 1;
      execPath = "/bin/usr/node";
      debugPort = 9229;
      argv0 = "node";
      _preload_modules = [];
      setSourceMapsEnabled = noop;
      _performance = {
        now: typeof performance !== "undefined" ? performance.now.bind(performance) : void 0,
        timing: typeof performance !== "undefined" ? performance.timing : void 0
      };
      if (_performance.now === void 0) {
        nowOffset = Date.now();
        if (_performance.timing && _performance.timing.navigationStart) {
          nowOffset = _performance.timing.navigationStart;
        }
        _performance.now = () => Date.now() - nowOffset;
      }
      nanoPerSec = 1e9;
      hrtime.bigint = function(time) {
        var diff = hrtime(time);
        if (typeof BigInt === "undefined") {
          return diff[0] * nanoPerSec + diff[1];
        }
        return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
      };
      _maxListeners = 10;
      _events = {};
      _eventsCount = 0;
      addListener = on;
      once = on;
      off = on;
      removeListener = on;
      removeAllListeners = on;
      emit = noop;
      prependListener = on;
      prependOnceListener = on;
      process = {
        version,
        versions,
        arch,
        platform,
        browser: browser2,
        release,
        _rawDebug,
        moduleLoadList,
        binding,
        _linkedBinding,
        _events,
        _eventsCount,
        _maxListeners,
        on,
        addListener,
        once,
        off,
        removeListener,
        removeAllListeners,
        emit,
        prependListener,
        prependOnceListener,
        listeners,
        domain,
        _exiting,
        config,
        dlopen,
        uptime,
        _getActiveRequests,
        _getActiveHandles,
        reallyExit,
        _kill,
        cpuUsage,
        resourceUsage,
        memoryUsage,
        kill,
        exit,
        openStdin,
        allowedNodeEnvironmentFlags,
        assert,
        features,
        _fatalExceptions,
        setUncaughtExceptionCaptureCallback,
        hasUncaughtExceptionCaptureCallback,
        emitWarning,
        nextTick,
        _tickCallback,
        _debugProcess,
        _debugEnd,
        _startProfilerIdleNotifier,
        _stopProfilerIdleNotifier,
        stdout,
        stdin,
        stderr,
        abort,
        umask,
        chdir,
        cwd,
        env,
        title,
        argv,
        execArgv,
        pid,
        ppid,
        execPath,
        debugPort,
        hrtime,
        argv0,
        _preload_modules,
        setSourceMapsEnabled
      };
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/process.js
  var init_process2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/process.js"() {
      init_process();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js
  function dew$2() {
    if (_dewExec$2) return exports$2;
    _dewExec$2 = true;
    exports$2.byteLength = byteLength;
    exports$2.toByteArray = toByteArray;
    exports$2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
    return exports$2;
  }
  function dew$1() {
    if (_dewExec$1) return exports$1;
    _dewExec$1 = true;
    exports$1.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports$1.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
    return exports$1;
  }
  function dew() {
    if (_dewExec) return exports;
    _dewExec = true;
    const base64 = dew$2();
    const ieee754 = dew$1();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer4;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer4.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer4.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer4.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer4.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer4.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer4.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer4.prototype);
      return buf;
    }
    function Buffer4(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer4.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer4.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer4.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer4.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer4.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer4, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer4.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer4.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer4.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer4.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer4.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer4.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer4.alloc(+length);
    }
    Buffer4.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer4.prototype;
    };
    Buffer4.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer4.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer4.from(b, b.offset, b.byteLength);
      if (!Buffer4.isBuffer(a) || !Buffer4.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer4.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer4.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer4.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer4.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer4.isBuffer(buf)) buf = Buffer4.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer4.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer4.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer4.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer4.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer4.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer4.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer4.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer4.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer4.prototype.toLocaleString = Buffer4.prototype.toString;
    Buffer4.prototype.equals = function equals(b) {
      if (!Buffer4.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer4.compare(this, b) === 0;
    };
    Buffer4.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer4.prototype[customInspectSymbol] = Buffer4.prototype.inspect;
    }
    Buffer4.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer4.from(target, target.offset, target.byteLength);
      }
      if (!Buffer4.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer4.from(val, encoding);
      }
      if (Buffer4.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    Buffer4.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer4.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer4.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer4.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer4.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer4.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer4.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer4.prototype.readUintLE = Buffer4.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer4.prototype.readUintBE = Buffer4.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer4.prototype.readUint8 = Buffer4.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer4.prototype.readUint16LE = Buffer4.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer4.prototype.readUint16BE = Buffer4.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer4.prototype.readUint32LE = Buffer4.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer4.prototype.readUint32BE = Buffer4.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer4.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer4.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer4.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer4.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer4.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer4.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer4.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer4.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer4.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer4.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer4.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer4.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer4.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer4.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer4.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer4.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer4.prototype.writeUintLE = Buffer4.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer4.prototype.writeUintBE = Buffer4.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer4.prototype.writeUint8 = Buffer4.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer4.prototype.writeUint16LE = Buffer4.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer4.prototype.writeUint16BE = Buffer4.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer4.prototype.writeUint32LE = Buffer4.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer4.prototype.writeUint32BE = Buffer4.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer4.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer4.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer4.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer4.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer4.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer4.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer4.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer4.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer4.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer4.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer4.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer4.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer4.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer4.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer4.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer4.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer4.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer4.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer4.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer4.isBuffer(val) ? val : Buffer4.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    const errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name2) {
      if (name2) {
        return `${name2} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name2, actual) {
      return `The "${name2}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name2) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name2, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE("offset", `>= ${0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = (function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    })();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    return exports;
  }
  var exports$2, _dewExec$2, exports$1, _dewExec$1, exports, _dewExec;
  var init_chunk_DtuTasat = __esm({
    "node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js"() {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      exports$2 = {};
      _dewExec$2 = false;
      exports$1 = {};
      _dewExec$1 = false;
      exports = {};
      _dewExec = false;
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/buffer.js
  var buffer_exports = {};
  __export(buffer_exports, {
    Buffer: () => Buffer2,
    INSPECT_MAX_BYTES: () => INSPECT_MAX_BYTES,
    default: () => exports2,
    kMaxLength: () => kMaxLength
  });
  var exports2, Buffer2, INSPECT_MAX_BYTES, kMaxLength;
  var init_buffer2 = __esm({
    "node_modules/@jspm/core/nodelibs/browser/buffer.js"() {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      init_chunk_DtuTasat();
      exports2 = dew();
      exports2["Buffer"];
      exports2["SlowBuffer"];
      exports2["INSPECT_MAX_BYTES"];
      exports2["kMaxLength"];
      Buffer2 = exports2.Buffer;
      INSPECT_MAX_BYTES = exports2.INSPECT_MAX_BYTES;
      kMaxLength = exports2.kMaxLength;
    }
  });

  // scripts/web/node-shim.js
  var Buffer3, process2;
  var init_node_shim = __esm({
    "scripts/web/node-shim.js"() {
      "use strict";
      init_buffer2();
      init_process();
      Buffer3 = Buffer2;
      process2 = process;
    }
  });

  // node_modules/tslib/tslib.es6.mjs
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __addDisposableResource: () => __addDisposableResource,
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldIn: () => __classPrivateFieldIn,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __disposeResources: () => __disposeResources,
    __esDecorate: () => __esDecorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __propKey: () => __propKey,
    __read: () => __read,
    __rest: () => __rest,
    __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
    __runInitializers: () => __runInitializers,
    __setFunctionName: () => __setFunctionName,
    __spread: () => __spread,
    __spreadArray: () => __spreadArray,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values,
    default: () => tslib_es6_default
  });
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  }
  function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
  }
  function __setFunctionName(f, name2, prefix) {
    if (typeof name2 === "symbol") name2 = name2.description ? "[".concat(name2.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name2) : name2 });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v) {
        return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env2, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env2.stack.push({ value, dispose, async });
    } else if (async) {
      env2.stack.push({ async: true });
    }
    return value;
  }
  function __disposeResources(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new _SuppressedError(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env2.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env2.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env2.hasError ? Promise.reject(env2.error) : Promise.resolve();
      if (env2.hasError) throw env2.error;
    }
    return next();
  }
  function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
      });
    }
    return path;
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      };
      ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      tslib_es6_default = {
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __esDecorate,
        __runInitializers,
        __propKey,
        __setFunctionName,
        __metadata,
        __awaiter,
        __generator,
        __createBinding,
        __exportStar,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn,
        __addDisposableResource,
        __disposeResources,
        __rewriteRelativeImportExtension
      };
    }
  });

  // node_modules/@firebase/util/dist/index.cjs.js
  var require_index_cjs = __commonJS({
    "node_modules/@firebase/util/dist/index.cjs.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", { value: true });
      var CONSTANTS = {
        /**
         * @define {boolean} Whether this is the client Node.js SDK.
         */
        NODE_CLIENT: false,
        /**
         * @define {boolean} Whether this is the Admin Node.js SDK.
         */
        NODE_ADMIN: false,
        /**
         * Firebase SDK Version
         */
        SDK_VERSION: "${JSCORE_VERSION}"
      };
      var assert2 = function(assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      var assertionError = function(message) {
        return new Error("Firebase Database (" + CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
      };
      var stringToByteArray$1 = function(str) {
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      var byteArrayToString = function(bytes) {
        const out = [];
        let pos = 0, c = 0;
        while (pos < bytes.length) {
          const c1 = bytes[pos++];
          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
          } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }
        return out.join("");
      };
      var base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,
        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,
        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,
        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,
        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === "function",
        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error("encodeByteArray takes an array as a parameter");
          }
          this.init_();
          const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          const output = [];
          for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
              outByte4 = 64;
              if (!haveByte2) {
                outByte3 = 64;
              }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join("");
        },
        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray$1(input), webSafe);
        },
        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },
        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray(input, webSafe) {
          this.init_();
          const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          const output = [];
          for (let i = 0; i < input.length; ) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw new DecodeBase64StringError();
            }
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
              const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
              output.push(outByte2);
              if (byte4 !== 64) {
                const outByte3 = byte3 << 6 & 192 | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      var DecodeBase64StringError = class extends Error {
        constructor() {
          super(...arguments);
          this.name = "DecodeBase64StringError";
        }
      };
      var base64Encode = function(str) {
        const utf8Bytes = stringToByteArray$1(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      var base64urlEncodeWithoutPadding = function(str) {
        return base64Encode(str).replace(/\./g, "");
      };
      var base64Decode = function(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      };
      function deepCopy(value) {
        return deepExtend(void 0, value);
      }
      function deepExtend(target, source) {
        if (!(source instanceof Object)) {
          return source;
        }
        switch (source.constructor) {
          case Date:
            const dateValue = source;
            return new Date(dateValue.getTime());
          case Object:
            if (target === void 0) {
              target = {};
            }
            break;
          case Array:
            target = [];
            break;
          default:
            return source;
        }
        for (const prop in source) {
          if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
          }
          target[prop] = deepExtend(target[prop], source[prop]);
        }
        return target;
      }
      function isValidKey(key) {
        return key !== "__proto__";
      }
      function getGlobal() {
        if (typeof self !== "undefined") {
          return self;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof globalThis !== "undefined") {
          return globalThis;
        }
        throw new Error("Unable to locate global object.");
      }
      var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
      var getDefaultsFromEnvVariable = () => {
        if (typeof process2 === "undefined" || typeof process2.env === "undefined") {
          return;
        }
        const defaultsJsonString = process2.env.__FIREBASE_DEFAULTS__;
        if (defaultsJsonString) {
          return JSON.parse(defaultsJsonString);
        }
      };
      var getDefaultsFromCookie = () => {
        if (typeof document === "undefined") {
          return;
        }
        let match;
        try {
          match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
        } catch (e) {
          return;
        }
        const decoded = match && base64Decode(match[1]);
        return decoded && JSON.parse(decoded);
      };
      var getDefaults = () => {
        try {
          return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
        } catch (e) {
          console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
          return;
        }
      };
      var getDefaultEmulatorHost = (productName) => {
        var _a, _b;
        return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
      };
      var getDefaultEmulatorHostnameAndPort = (productName) => {
        const host = getDefaultEmulatorHost(productName);
        if (!host) {
          return void 0;
        }
        const separatorIndex = host.lastIndexOf(":");
        if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
          throw new Error(`Invalid host ${host} with no separate hostname and port!`);
        }
        const port = parseInt(host.substring(separatorIndex + 1), 10);
        if (host[0] === "[") {
          return [host.substring(1, separatorIndex - 1), port];
        } else {
          return [host.substring(0, separatorIndex), port];
        }
      };
      var getDefaultAppConfig = () => {
        var _a;
        return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
      };
      var getExperimentalSetting = (name2) => {
        var _a;
        return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name2}`];
      };
      var Deferred = class {
        constructor() {
          this.reject = () => {
          };
          this.resolve = () => {
          };
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
        /**
         * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */
        wrapCallback(callback) {
          return (error, value) => {
            if (error) {
              this.reject(error);
            } else {
              this.resolve(value);
            }
            if (typeof callback === "function") {
              this.promise.catch(() => {
              });
              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        }
      };
      function createMockUserToken(token, projectId) {
        if (token.uid) {
          throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
        }
        const header = {
          alg: "none",
          type: "JWT"
        };
        const project = projectId || "demo-project";
        const iat = token.iat || 0;
        const sub = token.sub || token.user_id;
        if (!sub) {
          throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
        }
        const payload = Object.assign({
          // Set all required fields to decent defaults
          iss: `https://securetoken.google.com/${project}`,
          aud: project,
          iat,
          exp: iat + 3600,
          auth_time: iat,
          sub,
          user_id: sub,
          firebase: {
            sign_in_provider: "custom",
            identities: {}
          }
        }, token);
        const signature = "";
        return [
          base64urlEncodeWithoutPadding(JSON.stringify(header)),
          base64urlEncodeWithoutPadding(JSON.stringify(payload)),
          signature
        ].join(".");
      }
      function getUA() {
        if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
          return navigator["userAgent"];
        } else {
          return "";
        }
      }
      function isMobileCordova() {
        return typeof window !== "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
      }
      function isNode() {
        var _a;
        const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
        if (forceEnvironment === "node") {
          return true;
        } else if (forceEnvironment === "browser") {
          return false;
        }
        try {
          return Object.prototype.toString.call(globalThis.process) === "[object process]";
        } catch (e) {
          return false;
        }
      }
      function isBrowser() {
        return typeof window !== "undefined" || isWebWorker();
      }
      function isWebWorker() {
        return typeof WorkerGlobalScope !== "undefined" && typeof self !== "undefined" && self instanceof WorkerGlobalScope;
      }
      function isCloudflareWorker() {
        return typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers";
      }
      function isBrowserExtension() {
        const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
        return typeof runtime === "object" && runtime.id !== void 0;
      }
      function isReactNative() {
        return typeof navigator === "object" && navigator["product"] === "ReactNative";
      }
      function isElectron() {
        return getUA().indexOf("Electron/") >= 0;
      }
      function isIE() {
        const ua = getUA();
        return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
      }
      function isUWP() {
        return getUA().indexOf("MSAppHost/") >= 0;
      }
      function isNodeSdk() {
        return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
      }
      function isSafari() {
        return !isNode() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
      }
      function isIndexedDBAvailable() {
        try {
          return typeof indexedDB === "object";
        } catch (e) {
          return false;
        }
      }
      function validateIndexedDBOpenable() {
        return new Promise((resolve, reject) => {
          try {
            let preExist = true;
            const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
              request.result.close();
              if (!preExist) {
                self.indexedDB.deleteDatabase(DB_CHECK_NAME);
              }
              resolve(true);
            };
            request.onupgradeneeded = () => {
              preExist = false;
            };
            request.onerror = () => {
              var _a;
              reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
            };
          } catch (error) {
            reject(error);
          }
        });
      }
      function areCookiesEnabled() {
        if (typeof navigator === "undefined" || !navigator.cookieEnabled) {
          return false;
        }
        return true;
      }
      var ERROR_NAME = "FirebaseError";
      var FirebaseError = class _FirebaseError extends Error {
        constructor(code, message, customData) {
          super(message);
          this.code = code;
          this.customData = customData;
          this.name = ERROR_NAME;
          Object.setPrototypeOf(this, _FirebaseError.prototype);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
          }
        }
      };
      var ErrorFactory = class {
        constructor(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        create(code, ...data) {
          const customData = data[0] || {};
          const fullCode = `${this.service}/${code}`;
          const template = this.errors[code];
          const message = template ? replaceTemplate(template, customData) : "Error";
          const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
          const error = new FirebaseError(fullCode, fullMessage, customData);
          return error;
        }
      };
      function replaceTemplate(template, data) {
        return template.replace(PATTERN, (_, key) => {
          const value = data[key];
          return value != null ? String(value) : `<${key}?>`;
        });
      }
      var PATTERN = /\{\$([^}]+)}/g;
      function jsonEval(str) {
        return JSON.parse(str);
      }
      function stringify(data) {
        return JSON.stringify(data);
      }
      var decode = function(token) {
        let header = {}, claims = {}, data = {}, signature = "";
        try {
          const parts = token.split(".");
          header = jsonEval(base64Decode(parts[0]) || "");
          claims = jsonEval(base64Decode(parts[1]) || "");
          signature = parts[2];
          data = claims["d"] || {};
          delete claims["d"];
        } catch (e) {
        }
        return {
          header,
          claims,
          data,
          signature
        };
      };
      var isValidTimestamp = function(token) {
        const claims = decode(token).claims;
        const now = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
        let validSince = 0, validUntil = 0;
        if (typeof claims === "object") {
          if (claims.hasOwnProperty("nbf")) {
            validSince = claims["nbf"];
          } else if (claims.hasOwnProperty("iat")) {
            validSince = claims["iat"];
          }
          if (claims.hasOwnProperty("exp")) {
            validUntil = claims["exp"];
          } else {
            validUntil = validSince + 86400;
          }
        }
        return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
      };
      var issuedAtTime = function(token) {
        const claims = decode(token).claims;
        if (typeof claims === "object" && claims.hasOwnProperty("iat")) {
          return claims["iat"];
        }
        return null;
      };
      var isValidFormat = function(token) {
        const decoded = decode(token), claims = decoded.claims;
        return !!claims && typeof claims === "object" && claims.hasOwnProperty("iat");
      };
      var isAdmin = function(token) {
        const claims = decode(token).claims;
        return typeof claims === "object" && claims["admin"] === true;
      };
      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      function safeGet(obj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
        } else {
          return void 0;
        }
      }
      function isEmpty(obj) {
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
          }
        }
        return true;
      }
      function map(obj, fn, contextObj) {
        const res = {};
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
          }
        }
        return res;
      }
      function deepEqual(a, b) {
        if (a === b) {
          return true;
        }
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        for (const k of aKeys) {
          if (!bKeys.includes(k)) {
            return false;
          }
          const aProp = a[k];
          const bProp = b[k];
          if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
              return false;
            }
          } else if (aProp !== bProp) {
            return false;
          }
        }
        for (const k of bKeys) {
          if (!aKeys.includes(k)) {
            return false;
          }
        }
        return true;
      }
      function isObject(thing) {
        return thing !== null && typeof thing === "object";
      }
      function promiseWithTimeout(promise, timeInMS = 2e3) {
        const deferredPromise = new Deferred();
        setTimeout(() => deferredPromise.reject("timeout!"), timeInMS);
        promise.then(deferredPromise.resolve, deferredPromise.reject);
        return deferredPromise.promise;
      }
      function querystring(querystringParams) {
        const params = [];
        for (const [key, value] of Object.entries(querystringParams)) {
          if (Array.isArray(value)) {
            value.forEach((arrayVal) => {
              params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
            });
          } else {
            params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
          }
        }
        return params.length ? "&" + params.join("&") : "";
      }
      function querystringDecode(querystring2) {
        const obj = {};
        const tokens = querystring2.replace(/^\?/, "").split("&");
        tokens.forEach((token) => {
          if (token) {
            const [key, value] = token.split("=");
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
          }
        });
        return obj;
      }
      function extractQuerystring(url) {
        const queryStart = url.indexOf("?");
        if (!queryStart) {
          return "";
        }
        const fragmentStart = url.indexOf("#", queryStart);
        return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
      }
      var Sha1 = class {
        constructor() {
          this.chain_ = [];
          this.buf_ = [];
          this.W_ = [];
          this.pad_ = [];
          this.inbuf_ = 0;
          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;
          for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }
          this.reset();
        }
        reset() {
          this.chain_[0] = 1732584193;
          this.chain_[1] = 4023233417;
          this.chain_[2] = 2562383102;
          this.chain_[3] = 271733878;
          this.chain_[4] = 3285377520;
          this.inbuf_ = 0;
          this.total_ = 0;
        }
        /**
         * Internal compress helper function.
         * @param buf Block to compress.
         * @param offset Offset of the block in the buffer.
         * @private
         */
        compress_(buf, offset) {
          if (!offset) {
            offset = 0;
          }
          const W = this.W_;
          if (typeof buf === "string") {
            for (let i = 0; i < 16; i++) {
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (let i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          }
          for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 4294967295;
          }
          let a = this.chain_[0];
          let b = this.chain_[1];
          let c = this.chain_[2];
          let d = this.chain_[3];
          let e = this.chain_[4];
          let f, k;
          for (let i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 1518500249;
              } else {
                f = b ^ c ^ d;
                k = 1859775393;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
              } else {
                f = b ^ c ^ d;
                k = 3395469782;
              }
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
          }
          this.chain_[0] = this.chain_[0] + a & 4294967295;
          this.chain_[1] = this.chain_[1] + b & 4294967295;
          this.chain_[2] = this.chain_[2] + c & 4294967295;
          this.chain_[3] = this.chain_[3] + d & 4294967295;
          this.chain_[4] = this.chain_[4] + e & 4294967295;
        }
        update(bytes, length) {
          if (bytes == null) {
            return;
          }
          if (length === void 0) {
            length = bytes.length;
          }
          const lengthMinusBlock = length - this.blockSize;
          let n = 0;
          const buf = this.buf_;
          let inbuf = this.inbuf_;
          while (n < length) {
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }
            if (typeof bytes === "string") {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            }
          }
          this.inbuf_ = inbuf;
          this.total_ += length;
        }
        /** @override */
        digest() {
          const digest = [];
          let totalBits = this.total_ * 8;
          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          }
          for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256;
          }
          this.compress_(this.buf_);
          let n = 0;
          for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }
          return digest;
        }
      };
      function createSubscribe(executor, onNoObservers) {
        const proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      var ObserverProxy = class {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        constructor(executor, onNoObservers) {
          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0;
          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers;
          this.task.then(() => {
            executor(this);
          }).catch((e) => {
            this.error(e);
          });
        }
        next(value) {
          this.forEachObserver((observer) => {
            observer.next(value);
          });
        }
        error(error) {
          this.forEachObserver((observer) => {
            observer.error(error);
          });
          this.close(error);
        }
        complete() {
          this.forEachObserver((observer) => {
            observer.complete();
          });
          this.close();
        }
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber synchronously to their
         *   call to subscribe().
         */
        subscribe(nextOrObserver, error, complete) {
          let observer;
          if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
            throw new Error("Missing Observer.");
          }
          if (implementsAnyMethods(nextOrObserver, [
            "next",
            "error",
            "complete"
          ])) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error,
              complete
            };
          }
          if (observer.next === void 0) {
            observer.next = noop2;
          }
          if (observer.error === void 0) {
            observer.error = noop2;
          }
          if (observer.complete === void 0) {
            observer.complete = noop2;
          }
          const unsub = this.unsubscribeOne.bind(this, this.observers.length);
          if (this.finalized) {
            this.task.then(() => {
              try {
                if (this.finalError) {
                  observer.error(this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {
              }
              return;
            });
          }
          this.observers.push(observer);
          return unsub;
        }
        // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.
        unsubscribeOne(i) {
          if (this.observers === void 0 || this.observers[i] === void 0) {
            return;
          }
          delete this.observers[i];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== void 0) {
            this.onNoObservers(this);
          }
        }
        forEachObserver(fn) {
          if (this.finalized) {
            return;
          }
          for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        }
        // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.
        sendOne(i, fn) {
          this.task.then(() => {
            if (this.observers !== void 0 && this.observers[i] !== void 0) {
              try {
                fn(this.observers[i]);
              } catch (e) {
                if (typeof console !== "undefined" && console.error) {
                  console.error(e);
                }
              }
            }
          });
        }
        close(err) {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          if (err !== void 0) {
            this.finalError = err;
          }
          this.task.then(() => {
            this.observers = void 0;
            this.onNoObservers = void 0;
          });
        }
      };
      function async(fn, onError) {
        return (...args) => {
          Promise.resolve(true).then(() => {
            fn(...args);
          }).catch((error) => {
            if (onError) {
              onError(error);
            }
          });
        };
      }
      function implementsAnyMethods(obj, methods) {
        if (typeof obj !== "object" || obj === null) {
          return false;
        }
        for (const method of methods) {
          if (method in obj && typeof obj[method] === "function") {
            return true;
          }
        }
        return false;
      }
      function noop2() {
      }
      var validateArgCount = function(fnName, minCount, maxCount, argCount) {
        let argError;
        if (argCount < minCount) {
          argError = "at least " + minCount;
        } else if (argCount > maxCount) {
          argError = maxCount === 0 ? "none" : "no more than " + maxCount;
        }
        if (argError) {
          const error = fnName + " failed: Was called with " + argCount + (argCount === 1 ? " argument." : " arguments.") + " Expects " + argError + ".";
          throw new Error(error);
        }
      };
      function errorPrefix(fnName, argName) {
        return `${fnName} failed: ${argName} argument `;
      }
      function validateNamespace(fnName, namespace, optional) {
        if (optional && !namespace) {
          return;
        }
        if (typeof namespace !== "string") {
          throw new Error(errorPrefix(fnName, "namespace") + "must be a valid firebase namespace.");
        }
      }
      function validateCallback(fnName, argumentName, callback, optional) {
        if (optional && !callback) {
          return;
        }
        if (typeof callback !== "function") {
          throw new Error(errorPrefix(fnName, argumentName) + "must be a valid function.");
        }
      }
      function validateContextObject(fnName, argumentName, context, optional) {
        if (optional && !context) {
          return;
        }
        if (typeof context !== "object" || context === null) {
          throw new Error(errorPrefix(fnName, argumentName) + "must be a valid context object.");
        }
      }
      var stringToByteArray = function(str) {
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c >= 55296 && c <= 56319) {
            const high = c - 55296;
            i++;
            assert2(i < str.length, "Surrogate pair missing trail surrogate.");
            const low = str.charCodeAt(i) - 56320;
            c = 65536 + (high << 10) + low;
          }
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      var stringLength = function(str) {
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          const c = str.charCodeAt(i);
          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 55296 && c <= 56319) {
            p += 4;
            i++;
          } else {
            p += 3;
          }
        }
        return p;
      };
      var uuidv4 = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      };
      var DEFAULT_INTERVAL_MILLIS = 1e3;
      var DEFAULT_BACKOFF_FACTOR = 2;
      var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
      var RANDOM_FACTOR = 0.5;
      function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
        const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
        const randomWait = Math.round(
          // A fraction of the backoff value to add/subtract.
          // Deviation: changes multiplication order to improve readability.
          RANDOM_FACTOR * currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
          // if we add or subtract.
          (Math.random() - 0.5) * 2
        );
        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
      }
      function ordinal(i) {
        if (!Number.isFinite(i)) {
          return `${i}`;
        }
        return i + indicator(i);
      }
      function indicator(i) {
        i = Math.abs(i);
        const cent = i % 100;
        if (cent >= 10 && cent <= 20) {
          return "th";
        }
        const dec = i % 10;
        if (dec === 1) {
          return "st";
        }
        if (dec === 2) {
          return "nd";
        }
        if (dec === 3) {
          return "rd";
        }
        return "th";
      }
      function getModularInstance(service) {
        if (service && service._delegate) {
          return service._delegate;
        } else {
          return service;
        }
      }
      exports4.CONSTANTS = CONSTANTS;
      exports4.DecodeBase64StringError = DecodeBase64StringError;
      exports4.Deferred = Deferred;
      exports4.ErrorFactory = ErrorFactory;
      exports4.FirebaseError = FirebaseError;
      exports4.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
      exports4.RANDOM_FACTOR = RANDOM_FACTOR;
      exports4.Sha1 = Sha1;
      exports4.areCookiesEnabled = areCookiesEnabled;
      exports4.assert = assert2;
      exports4.assertionError = assertionError;
      exports4.async = async;
      exports4.base64 = base64;
      exports4.base64Decode = base64Decode;
      exports4.base64Encode = base64Encode;
      exports4.base64urlEncodeWithoutPadding = base64urlEncodeWithoutPadding;
      exports4.calculateBackoffMillis = calculateBackoffMillis;
      exports4.contains = contains;
      exports4.createMockUserToken = createMockUserToken;
      exports4.createSubscribe = createSubscribe;
      exports4.decode = decode;
      exports4.deepCopy = deepCopy;
      exports4.deepEqual = deepEqual;
      exports4.deepExtend = deepExtend;
      exports4.errorPrefix = errorPrefix;
      exports4.extractQuerystring = extractQuerystring;
      exports4.getDefaultAppConfig = getDefaultAppConfig;
      exports4.getDefaultEmulatorHost = getDefaultEmulatorHost;
      exports4.getDefaultEmulatorHostnameAndPort = getDefaultEmulatorHostnameAndPort;
      exports4.getDefaults = getDefaults;
      exports4.getExperimentalSetting = getExperimentalSetting;
      exports4.getGlobal = getGlobal;
      exports4.getModularInstance = getModularInstance;
      exports4.getUA = getUA;
      exports4.isAdmin = isAdmin;
      exports4.isBrowser = isBrowser;
      exports4.isBrowserExtension = isBrowserExtension;
      exports4.isCloudflareWorker = isCloudflareWorker;
      exports4.isElectron = isElectron;
      exports4.isEmpty = isEmpty;
      exports4.isIE = isIE;
      exports4.isIndexedDBAvailable = isIndexedDBAvailable;
      exports4.isMobileCordova = isMobileCordova;
      exports4.isNode = isNode;
      exports4.isNodeSdk = isNodeSdk;
      exports4.isReactNative = isReactNative;
      exports4.isSafari = isSafari;
      exports4.isUWP = isUWP;
      exports4.isValidFormat = isValidFormat;
      exports4.isValidTimestamp = isValidTimestamp;
      exports4.isWebWorker = isWebWorker;
      exports4.issuedAtTime = issuedAtTime;
      exports4.jsonEval = jsonEval;
      exports4.map = map;
      exports4.ordinal = ordinal;
      exports4.promiseWithTimeout = promiseWithTimeout;
      exports4.querystring = querystring;
      exports4.querystringDecode = querystringDecode;
      exports4.safeGet = safeGet;
      exports4.stringLength = stringLength;
      exports4.stringToByteArray = stringToByteArray;
      exports4.stringify = stringify;
      exports4.uuidv4 = uuidv4;
      exports4.validateArgCount = validateArgCount;
      exports4.validateCallback = validateCallback;
      exports4.validateContextObject = validateContextObject;
      exports4.validateIndexedDBOpenable = validateIndexedDBOpenable;
      exports4.validateNamespace = validateNamespace;
    }
  });

  // node_modules/@firebase/component/dist/index.cjs.js
  var require_index_cjs2 = __commonJS({
    "node_modules/@firebase/component/dist/index.cjs.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", { value: true });
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var util = require_index_cjs();
      var Component = (
        /** @class */
        (function() {
          function Component2(name2, instanceFactory, type) {
            this.name = name2;
            this.instanceFactory = instanceFactory;
            this.type = type;
            this.multipleInstances = false;
            this.serviceProps = {};
            this.instantiationMode = "LAZY";
            this.onInstanceCreated = null;
          }
          Component2.prototype.setInstantiationMode = function(mode) {
            this.instantiationMode = mode;
            return this;
          };
          Component2.prototype.setMultipleInstances = function(multipleInstances) {
            this.multipleInstances = multipleInstances;
            return this;
          };
          Component2.prototype.setServiceProps = function(props) {
            this.serviceProps = props;
            return this;
          };
          Component2.prototype.setInstanceCreatedCallback = function(callback) {
            this.onInstanceCreated = callback;
            return this;
          };
          return Component2;
        })()
      );
      var DEFAULT_ENTRY_NAME = "[DEFAULT]";
      var Provider = (
        /** @class */
        (function() {
          function Provider2(name2, container) {
            this.name = name2;
            this.container = container;
            this.component = null;
            this.instances = /* @__PURE__ */ new Map();
            this.instancesDeferred = /* @__PURE__ */ new Map();
            this.instancesOptions = /* @__PURE__ */ new Map();
            this.onInitCallbacks = /* @__PURE__ */ new Map();
          }
          Provider2.prototype.get = function(identifier) {
            var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
            if (!this.instancesDeferred.has(normalizedIdentifier)) {
              var deferred = new util.Deferred();
              this.instancesDeferred.set(normalizedIdentifier, deferred);
              if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
                try {
                  var instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                  });
                  if (instance) {
                    deferred.resolve(instance);
                  }
                } catch (e) {
                }
              }
            }
            return this.instancesDeferred.get(normalizedIdentifier).promise;
          };
          Provider2.prototype.getImmediate = function(options) {
            var _a;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
            var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
              try {
                return this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier
                });
              } catch (e) {
                if (optional) {
                  return null;
                } else {
                  throw e;
                }
              }
            } else {
              if (optional) {
                return null;
              } else {
                throw Error("Service ".concat(this.name, " is not available"));
              }
            }
          };
          Provider2.prototype.getComponent = function() {
            return this.component;
          };
          Provider2.prototype.setComponent = function(component) {
            var e_1, _a;
            if (component.name !== this.name) {
              throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
            }
            if (this.component) {
              throw Error("Component for ".concat(this.name, " has already been provided"));
            }
            this.component = component;
            if (!this.shouldAutoInitialize()) {
              return;
            }
            if (isComponentEager(component)) {
              try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
              } catch (e) {
              }
            }
            try {
              for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                  var instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                  });
                  instanceDeferred.resolve(instance);
                } catch (e) {
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          };
          Provider2.prototype.clearInstance = function(identifier) {
            if (identifier === void 0) {
              identifier = DEFAULT_ENTRY_NAME;
            }
            this.instancesDeferred.delete(identifier);
            this.instancesOptions.delete(identifier);
            this.instances.delete(identifier);
          };
          Provider2.prototype.delete = function() {
            return tslib.__awaiter(this, void 0, void 0, function() {
              var services;
              return tslib.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    services = Array.from(this.instances.values());
                    return [4, Promise.all(tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(services.filter(function(service) {
                      return "INTERNAL" in service;
                    }).map(function(service) {
                      return service.INTERNAL.delete();
                    })), false), tslib.__read(services.filter(function(service) {
                      return "_delete" in service;
                    }).map(function(service) {
                      return service._delete();
                    })), false))];
                  case 1:
                    _a.sent();
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          Provider2.prototype.isComponentSet = function() {
            return this.component != null;
          };
          Provider2.prototype.isInitialized = function(identifier) {
            if (identifier === void 0) {
              identifier = DEFAULT_ENTRY_NAME;
            }
            return this.instances.has(identifier);
          };
          Provider2.prototype.getOptions = function(identifier) {
            if (identifier === void 0) {
              identifier = DEFAULT_ENTRY_NAME;
            }
            return this.instancesOptions.get(identifier) || {};
          };
          Provider2.prototype.initialize = function(opts) {
            var e_2, _a;
            if (opts === void 0) {
              opts = {};
            }
            var _b = opts.options, options = _b === void 0 ? {} : _b;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
            if (this.isInitialized(normalizedIdentifier)) {
              throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
            }
            if (!this.isComponentSet()) {
              throw Error("Component ".concat(this.name, " has not been registered yet"));
            }
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier,
              options
            });
            try {
              for (var _c = tslib.__values(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = tslib.__read(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                  instanceDeferred.resolve(instance);
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
            return instance;
          };
          Provider2.prototype.onInit = function(callback, identifier) {
            var _a;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
            var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
            existingCallbacks.add(callback);
            this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
            var existingInstance = this.instances.get(normalizedIdentifier);
            if (existingInstance) {
              callback(existingInstance, normalizedIdentifier);
            }
            return function() {
              existingCallbacks.delete(callback);
            };
          };
          Provider2.prototype.invokeOnInitCallbacks = function(instance, identifier) {
            var e_3, _a;
            var callbacks = this.onInitCallbacks.get(identifier);
            if (!callbacks) {
              return;
            }
            try {
              for (var callbacks_1 = tslib.__values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                try {
                  callback(instance, identifier);
                } catch (_b) {
                }
              }
            } catch (e_3_1) {
              e_3 = { error: e_3_1 };
            } finally {
              try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
              } finally {
                if (e_3) throw e_3.error;
              }
            }
          };
          Provider2.prototype.getOrInitializeService = function(_a) {
            var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
            var instance = this.instances.get(instanceIdentifier);
            if (!instance && this.component) {
              instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
              });
              this.instances.set(instanceIdentifier, instance);
              this.instancesOptions.set(instanceIdentifier, options);
              this.invokeOnInitCallbacks(instance, instanceIdentifier);
              if (this.component.onInstanceCreated) {
                try {
                  this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                } catch (_c) {
                }
              }
            }
            return instance || null;
          };
          Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
            if (identifier === void 0) {
              identifier = DEFAULT_ENTRY_NAME;
            }
            if (this.component) {
              return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
            } else {
              return identifier;
            }
          };
          Provider2.prototype.shouldAutoInitialize = function() {
            return !!this.component && this.component.instantiationMode !== "EXPLICIT";
          };
          return Provider2;
        })()
      );
      function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
      }
      function isComponentEager(component) {
        return component.instantiationMode === "EAGER";
      }
      var ComponentContainer = (
        /** @class */
        (function() {
          function ComponentContainer2(name2) {
            this.name = name2;
            this.providers = /* @__PURE__ */ new Map();
          }
          ComponentContainer2.prototype.addComponent = function(component) {
            var provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
              throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
            }
            provider.setComponent(component);
          };
          ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
            var provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
              this.providers.delete(component.name);
            }
            this.addComponent(component);
          };
          ComponentContainer2.prototype.getProvider = function(name2) {
            if (this.providers.has(name2)) {
              return this.providers.get(name2);
            }
            var provider = new Provider(name2, this);
            this.providers.set(name2, provider);
            return provider;
          };
          ComponentContainer2.prototype.getProviders = function() {
            return Array.from(this.providers.values());
          };
          return ComponentContainer2;
        })()
      );
      exports4.Component = Component;
      exports4.ComponentContainer = ComponentContainer;
      exports4.Provider = Provider;
    }
  });

  // node_modules/@firebase/logger/dist/index.cjs.js
  var require_index_cjs3 = __commonJS({
    "node_modules/@firebase/logger/dist/index.cjs.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", { value: true });
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var _a;
      var instances = [];
      exports4.LogLevel = void 0;
      (function(LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
      })(exports4.LogLevel || (exports4.LogLevel = {}));
      var levelStringToEnum = {
        "debug": exports4.LogLevel.DEBUG,
        "verbose": exports4.LogLevel.VERBOSE,
        "info": exports4.LogLevel.INFO,
        "warn": exports4.LogLevel.WARN,
        "error": exports4.LogLevel.ERROR,
        "silent": exports4.LogLevel.SILENT
      };
      var defaultLogLevel = exports4.LogLevel.INFO;
      var ConsoleMethod = (_a = {}, _a[exports4.LogLevel.DEBUG] = "log", _a[exports4.LogLevel.VERBOSE] = "log", _a[exports4.LogLevel.INFO] = "info", _a[exports4.LogLevel.WARN] = "warn", _a[exports4.LogLevel.ERROR] = "error", _a);
      var defaultLogHandler = function(instance, logType) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        if (logType < instance.logLevel) {
          return;
        }
        var now = (/* @__PURE__ */ new Date()).toISOString();
        var method = ConsoleMethod[logType];
        if (method) {
          console[method].apply(console, tslib.__spreadArray(["[".concat(now, "]  ").concat(instance.name, ":")], args, false));
        } else {
          throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
        }
      };
      var Logger = (
        /** @class */
        (function() {
          function Logger2(name2) {
            this.name = name2;
            this._logLevel = defaultLogLevel;
            this._logHandler = defaultLogHandler;
            this._userLogHandler = null;
            instances.push(this);
          }
          Object.defineProperty(Logger2.prototype, "logLevel", {
            get: function() {
              return this._logLevel;
            },
            set: function(val) {
              if (!(val in exports4.LogLevel)) {
                throw new TypeError('Invalid value "'.concat(val, '" assigned to `logLevel`'));
              }
              this._logLevel = val;
            },
            enumerable: false,
            configurable: true
          });
          Logger2.prototype.setLogLevel = function(val) {
            this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
          };
          Object.defineProperty(Logger2.prototype, "logHandler", {
            get: function() {
              return this._logHandler;
            },
            set: function(val) {
              if (typeof val !== "function") {
                throw new TypeError("Value assigned to `logHandler` must be a function");
              }
              this._logHandler = val;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Logger2.prototype, "userLogHandler", {
            get: function() {
              return this._userLogHandler;
            },
            set: function(val) {
              this._userLogHandler = val;
            },
            enumerable: false,
            configurable: true
          });
          Logger2.prototype.debug = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.DEBUG], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.DEBUG], args, false));
          };
          Logger2.prototype.log = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.VERBOSE], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.VERBOSE], args, false));
          };
          Logger2.prototype.info = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.INFO], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.INFO], args, false));
          };
          Logger2.prototype.warn = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.WARN], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.WARN], args, false));
          };
          Logger2.prototype.error = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.ERROR], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports4.LogLevel.ERROR], args, false));
          };
          return Logger2;
        })()
      );
      function setLogLevel(level) {
        instances.forEach(function(inst) {
          inst.setLogLevel(level);
        });
      }
      function setUserLogHandler(logCallback, options) {
        var _loop_1 = function(instance2) {
          var customLogLevel = null;
          if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
          }
          if (logCallback === null) {
            instance2.userLogHandler = null;
          } else {
            instance2.userLogHandler = function(instance3, level) {
              var args = [];
              for (var _i2 = 2; _i2 < arguments.length; _i2++) {
                args[_i2 - 2] = arguments[_i2];
              }
              var message = args.map(function(arg) {
                if (arg == null) {
                  return null;
                } else if (typeof arg === "string") {
                  return arg;
                } else if (typeof arg === "number" || typeof arg === "boolean") {
                  return arg.toString();
                } else if (arg instanceof Error) {
                  return arg.message;
                } else {
                  try {
                    return JSON.stringify(arg);
                  } catch (ignored) {
                    return null;
                  }
                }
              }).filter(function(arg) {
                return arg;
              }).join(" ");
              if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance3.logLevel)) {
                logCallback({
                  level: exports4.LogLevel[level].toLowerCase(),
                  message,
                  args,
                  type: instance3.name
                });
              }
            };
          }
        };
        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
          var instance = instances_1[_i];
          _loop_1(instance);
        }
      }
      exports4.Logger = Logger;
      exports4.setLogLevel = setLogLevel;
      exports4.setUserLogHandler = setUserLogHandler;
    }
  });

  // node_modules/idb/build/wrap-idb-value.js
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
  var init_wrap_idb_value = __esm({
    "node_modules/idb/build/wrap-idb-value.js"() {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
      cursorRequestMap = /* @__PURE__ */ new WeakMap();
      transactionDoneMap = /* @__PURE__ */ new WeakMap();
      transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
      transformCache = /* @__PURE__ */ new WeakMap();
      reverseTransformCache = /* @__PURE__ */ new WeakMap();
      idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            if (prop === "done")
              return transactionDoneMap.get(target);
            if (prop === "objectStoreNames") {
              return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            if (prop === "store") {
              return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          return wrap(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
            return true;
          }
          return prop in target;
        }
      };
      unwrap = (value) => reverseTransformCache.get(value);
    }
  });

  // node_modules/idb/build/index.js
  var build_exports = {};
  __export(build_exports, {
    deleteDB: () => deleteDB,
    openDB: () => openDB,
    unwrap: () => unwrap,
    wrap: () => wrap
  });
  function openDB(name2, version2, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name2, version2);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function deleteDB(name2, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name2);
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event
      ));
    }
    return wrap(request).then(() => void 0);
  }
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  var readMethods, writeMethods, cachedMethods;
  var init_build = __esm({
    "node_modules/idb/build/index.js"() {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      init_wrap_idb_value();
      init_wrap_idb_value();
      readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
      writeMethods = ["put", "add", "delete", "clear"];
      cachedMethods = /* @__PURE__ */ new Map();
      replaceTraps((oldTraps) => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));
    }
  });

  // node_modules/@firebase/app/dist/index.cjs.js
  var require_index_cjs4 = __commonJS({
    "node_modules/@firebase/app/dist/index.cjs.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", { value: true });
      var component = require_index_cjs2();
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var logger$1 = require_index_cjs3();
      var util = require_index_cjs();
      var idb = (init_build(), __toCommonJS(build_exports));
      var PlatformLoggerServiceImpl = (
        /** @class */
        (function() {
          function PlatformLoggerServiceImpl2(container) {
            this.container = container;
          }
          PlatformLoggerServiceImpl2.prototype.getPlatformInfoString = function() {
            var providers = this.container.getProviders();
            return providers.map(function(provider) {
              if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return "".concat(service.library, "/").concat(service.version);
              } else {
                return null;
              }
            }).filter(function(logString) {
              return logString;
            }).join(" ");
          };
          return PlatformLoggerServiceImpl2;
        })()
      );
      function isVersionServiceProvider(provider) {
        var component2 = provider.getComponent();
        return (component2 === null || component2 === void 0 ? void 0 : component2.type) === "VERSION";
      }
      var name$q = "@firebase/app";
      var version$1 = "0.10.13";
      var logger = new logger$1.Logger("@firebase/app");
      var name$p = "@firebase/app-compat";
      var name$o = "@firebase/analytics-compat";
      var name$n = "@firebase/analytics";
      var name$m = "@firebase/app-check-compat";
      var name$l = "@firebase/app-check";
      var name$k = "@firebase/auth";
      var name$j = "@firebase/auth-compat";
      var name$i = "@firebase/database";
      var name$h = "@firebase/data-connect";
      var name$g = "@firebase/database-compat";
      var name$f = "@firebase/functions";
      var name$e = "@firebase/functions-compat";
      var name$d = "@firebase/installations";
      var name$c = "@firebase/installations-compat";
      var name$b = "@firebase/messaging";
      var name$a = "@firebase/messaging-compat";
      var name$9 = "@firebase/performance";
      var name$8 = "@firebase/performance-compat";
      var name$7 = "@firebase/remote-config";
      var name$6 = "@firebase/remote-config-compat";
      var name$5 = "@firebase/storage";
      var name$4 = "@firebase/storage-compat";
      var name$3 = "@firebase/firestore";
      var name$2 = "@firebase/vertexai-preview";
      var name$1 = "@firebase/firestore-compat";
      var name2 = "firebase";
      var version2 = "10.14.1";
      var _a$1;
      var DEFAULT_ENTRY_NAME = "[DEFAULT]";
      var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$q] = "fire-core", _a$1[name$p] = "fire-core-compat", _a$1[name$n] = "fire-analytics", _a$1[name$o] = "fire-analytics-compat", _a$1[name$l] = "fire-app-check", _a$1[name$m] = "fire-app-check-compat", _a$1[name$k] = "fire-auth", _a$1[name$j] = "fire-auth-compat", _a$1[name$i] = "fire-rtdb", _a$1[name$h] = "fire-data-connect", _a$1[name$g] = "fire-rtdb-compat", _a$1[name$f] = "fire-fn", _a$1[name$e] = "fire-fn-compat", _a$1[name$d] = "fire-iid", _a$1[name$c] = "fire-iid-compat", _a$1[name$b] = "fire-fcm", _a$1[name$a] = "fire-fcm-compat", _a$1[name$9] = "fire-perf", _a$1[name$8] = "fire-perf-compat", _a$1[name$7] = "fire-rc", _a$1[name$6] = "fire-rc-compat", _a$1[name$5] = "fire-gcs", _a$1[name$4] = "fire-gcs-compat", _a$1[name$3] = "fire-fst", _a$1[name$1] = "fire-fst-compat", _a$1[name$2] = "fire-vertex", _a$1["fire-js"] = "fire-js", _a$1[name2] = "fire-js-all", _a$1);
      var _apps = /* @__PURE__ */ new Map();
      var _serverApps = /* @__PURE__ */ new Map();
      var _components = /* @__PURE__ */ new Map();
      function _addComponent(app, component2) {
        try {
          app.container.addComponent(component2);
        } catch (e) {
          logger.debug("Component ".concat(component2.name, " failed to register with FirebaseApp ").concat(app.name), e);
        }
      }
      function _addOrOverwriteComponent(app, component2) {
        app.container.addOrOverwriteComponent(component2);
      }
      function _registerComponent(component2) {
        var e_1, _a2, e_2, _b;
        var componentName = component2.name;
        if (_components.has(componentName)) {
          logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
          return false;
        }
        _components.set(componentName, component2);
        try {
          for (var _c = tslib.__values(_apps.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var app = _d.value;
            _addComponent(app, component2);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        try {
          for (var _e = tslib.__values(_serverApps.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var serverApp = _f.value;
            _addComponent(serverApp, component2);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        return true;
      }
      function _getProvider(app, name3) {
        var heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
        if (heartbeatController) {
          void heartbeatController.triggerHeartbeat();
        }
        return app.container.getProvider(name3);
      }
      function _removeServiceInstance(app, name3, instanceIdentifier) {
        if (instanceIdentifier === void 0) {
          instanceIdentifier = DEFAULT_ENTRY_NAME;
        }
        _getProvider(app, name3).clearInstance(instanceIdentifier);
      }
      function _isFirebaseApp(obj) {
        return obj.options !== void 0;
      }
      function _isFirebaseServerApp(obj) {
        return obj.settings !== void 0;
      }
      function _clearComponents() {
        _components.clear();
      }
      var _a;
      var ERRORS = (_a = {}, _a[
        "no-app"
        /* AppError.NO_APP */
      ] = "No Firebase App '{$appName}' has been created - call initializeApp() first", _a[
        "bad-app-name"
        /* AppError.BAD_APP_NAME */
      ] = "Illegal App name: '{$appName}'", _a[
        "duplicate-app"
        /* AppError.DUPLICATE_APP */
      ] = "Firebase App named '{$appName}' already exists with different options or config", _a[
        "app-deleted"
        /* AppError.APP_DELETED */
      ] = "Firebase App named '{$appName}' already deleted", _a[
        "server-app-deleted"
        /* AppError.SERVER_APP_DELETED */
      ] = "Firebase Server App has been deleted", _a[
        "no-options"
        /* AppError.NO_OPTIONS */
      ] = "Need to provide options, when not being deployed to hosting via source.", _a[
        "invalid-app-argument"
        /* AppError.INVALID_APP_ARGUMENT */
      ] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", _a[
        "invalid-log-argument"
        /* AppError.INVALID_LOG_ARGUMENT */
      ] = "First argument to `onLog` must be null or a function.", _a[
        "idb-open"
        /* AppError.IDB_OPEN */
      ] = "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.", _a[
        "idb-get"
        /* AppError.IDB_GET */
      ] = "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.", _a[
        "idb-set"
        /* AppError.IDB_WRITE */
      ] = "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.", _a[
        "idb-delete"
        /* AppError.IDB_DELETE */
      ] = "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.", _a[
        "finalization-registry-not-supported"
        /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
      ] = "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.", _a[
        "invalid-server-app-environment"
        /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
      ] = "FirebaseServerApp is not for use in browser environments.", _a);
      var ERROR_FACTORY = new util.ErrorFactory("app", "Firebase", ERRORS);
      var FirebaseAppImpl = (
        /** @class */
        (function() {
          function FirebaseAppImpl2(options, config2, container) {
            var _this = this;
            this._isDeleted = false;
            this._options = tslib.__assign({}, options);
            this._config = tslib.__assign({}, config2);
            this._name = config2.name;
            this._automaticDataCollectionEnabled = config2.automaticDataCollectionEnabled;
            this._container = container;
            this.container.addComponent(new component.Component(
              "app",
              function() {
                return _this;
              },
              "PUBLIC"
              /* ComponentType.PUBLIC */
            ));
          }
          Object.defineProperty(FirebaseAppImpl2.prototype, "automaticDataCollectionEnabled", {
            get: function() {
              this.checkDestroyed();
              return this._automaticDataCollectionEnabled;
            },
            set: function(val) {
              this.checkDestroyed();
              this._automaticDataCollectionEnabled = val;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "name", {
            get: function() {
              this.checkDestroyed();
              return this._name;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "options", {
            get: function() {
              this.checkDestroyed();
              return this._options;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "config", {
            get: function() {
              this.checkDestroyed();
              return this._config;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "container", {
            get: function() {
              return this._container;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "isDeleted", {
            get: function() {
              return this._isDeleted;
            },
            set: function(val) {
              this._isDeleted = val;
            },
            enumerable: false,
            configurable: true
          });
          FirebaseAppImpl2.prototype.checkDestroyed = function() {
            if (this.isDeleted) {
              throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
            }
          };
          return FirebaseAppImpl2;
        })()
      );
      var FirebaseServerAppImpl = (
        /** @class */
        (function(_super) {
          tslib.__extends(FirebaseServerAppImpl2, _super);
          function FirebaseServerAppImpl2(options, serverConfig, name3, container) {
            var _this = this;
            var automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== void 0 ? serverConfig.automaticDataCollectionEnabled : false;
            var config2 = {
              name: name3,
              automaticDataCollectionEnabled
            };
            if (options.apiKey !== void 0) {
              _this = _super.call(this, options, config2, container) || this;
            } else {
              var appImpl = options;
              _this = _super.call(this, appImpl.options, config2, container) || this;
            }
            _this._serverConfig = tslib.__assign({ automaticDataCollectionEnabled }, serverConfig);
            _this._finalizationRegistry = null;
            if (typeof FinalizationRegistry !== "undefined") {
              _this._finalizationRegistry = new FinalizationRegistry(function() {
                _this.automaticCleanup();
              });
            }
            _this._refCount = 0;
            _this.incRefCount(_this._serverConfig.releaseOnDeref);
            _this._serverConfig.releaseOnDeref = void 0;
            serverConfig.releaseOnDeref = void 0;
            registerVersion(name$q, version$1, "serverapp");
            return _this;
          }
          FirebaseServerAppImpl2.prototype.toJSON = function() {
            return void 0;
          };
          Object.defineProperty(FirebaseServerAppImpl2.prototype, "refCount", {
            get: function() {
              return this._refCount;
            },
            enumerable: false,
            configurable: true
          });
          FirebaseServerAppImpl2.prototype.incRefCount = function(obj) {
            if (this.isDeleted) {
              return;
            }
            this._refCount++;
            if (obj !== void 0 && this._finalizationRegistry !== null) {
              this._finalizationRegistry.register(obj, this);
            }
          };
          FirebaseServerAppImpl2.prototype.decRefCount = function() {
            if (this.isDeleted) {
              return 0;
            }
            return --this._refCount;
          };
          FirebaseServerAppImpl2.prototype.automaticCleanup = function() {
            void deleteApp(this);
          };
          Object.defineProperty(FirebaseServerAppImpl2.prototype, "settings", {
            get: function() {
              this.checkDestroyed();
              return this._serverConfig;
            },
            enumerable: false,
            configurable: true
          });
          FirebaseServerAppImpl2.prototype.checkDestroyed = function() {
            if (this.isDeleted) {
              throw ERROR_FACTORY.create(
                "server-app-deleted"
                /* AppError.SERVER_APP_DELETED */
              );
            }
          };
          return FirebaseServerAppImpl2;
        })(FirebaseAppImpl)
      );
      var SDK_VERSION = version2;
      function initializeApp(_options, rawConfig) {
        var e_1, _a2;
        if (rawConfig === void 0) {
          rawConfig = {};
        }
        var options = _options;
        if (typeof rawConfig !== "object") {
          var name_1 = rawConfig;
          rawConfig = { name: name_1 };
        }
        var config2 = tslib.__assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
        var name3 = config2.name;
        if (typeof name3 !== "string" || !name3) {
          throw ERROR_FACTORY.create("bad-app-name", {
            appName: String(name3)
          });
        }
        options || (options = util.getDefaultAppConfig());
        if (!options) {
          throw ERROR_FACTORY.create(
            "no-options"
            /* AppError.NO_OPTIONS */
          );
        }
        var existingApp = _apps.get(name3);
        if (existingApp) {
          if (util.deepEqual(options, existingApp.options) && util.deepEqual(config2, existingApp.config)) {
            return existingApp;
          } else {
            throw ERROR_FACTORY.create("duplicate-app", { appName: name3 });
          }
        }
        var container = new component.ComponentContainer(name3);
        try {
          for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        var newApp = new FirebaseAppImpl(options, config2, container);
        _apps.set(name3, newApp);
        return newApp;
      }
      function initializeServerApp(_options, _serverAppConfig) {
        var e_2, _a2;
        if (util.isBrowser() && !util.isWebWorker()) {
          throw ERROR_FACTORY.create(
            "invalid-server-app-environment"
            /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
          );
        }
        if (_serverAppConfig.automaticDataCollectionEnabled === void 0) {
          _serverAppConfig.automaticDataCollectionEnabled = false;
        }
        var appOptions;
        if (_isFirebaseApp(_options)) {
          appOptions = _options.options;
        } else {
          appOptions = _options;
        }
        var nameObj = tslib.__assign(tslib.__assign({}, _serverAppConfig), appOptions);
        if (nameObj.releaseOnDeref !== void 0) {
          delete nameObj.releaseOnDeref;
        }
        var hashCode = function(s) {
          return tslib.__spreadArray([], tslib.__read(s), false).reduce(function(hash, c) {
            return Math.imul(31, hash) + c.charCodeAt(0) | 0;
          }, 0);
        };
        if (_serverAppConfig.releaseOnDeref !== void 0) {
          if (typeof FinalizationRegistry === "undefined") {
            throw ERROR_FACTORY.create("finalization-registry-not-supported", {});
          }
        }
        var nameString = "" + hashCode(JSON.stringify(nameObj));
        var existingApp = _serverApps.get(nameString);
        if (existingApp) {
          existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
          return existingApp;
        }
        var container = new component.ComponentContainer(nameString);
        try {
          for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        var newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
        _serverApps.set(nameString, newApp);
        return newApp;
      }
      function getApp(name3) {
        if (name3 === void 0) {
          name3 = DEFAULT_ENTRY_NAME;
        }
        var app = _apps.get(name3);
        if (!app && name3 === DEFAULT_ENTRY_NAME && util.getDefaultAppConfig()) {
          return initializeApp();
        }
        if (!app) {
          throw ERROR_FACTORY.create("no-app", { appName: name3 });
        }
        return app;
      }
      function getApps() {
        return Array.from(_apps.values());
      }
      function deleteApp(app) {
        return tslib.__awaiter(this, void 0, void 0, function() {
          var cleanupProviders, name3, firebaseServerApp;
          return tslib.__generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                cleanupProviders = false;
                name3 = app.name;
                if (_apps.has(name3)) {
                  cleanupProviders = true;
                  _apps.delete(name3);
                } else if (_serverApps.has(name3)) {
                  firebaseServerApp = app;
                  if (firebaseServerApp.decRefCount() <= 0) {
                    _serverApps.delete(name3);
                    cleanupProviders = true;
                  }
                }
                if (!cleanupProviders) return [3, 2];
                return [4, Promise.all(app.container.getProviders().map(function(provider) {
                  return provider.delete();
                }))];
              case 1:
                _a2.sent();
                app.isDeleted = true;
                _a2.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      function registerVersion(libraryKeyOrName, version3, variant) {
        var _a2;
        var library = (_a2 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a2 !== void 0 ? _a2 : libraryKeyOrName;
        if (variant) {
          library += "-".concat(variant);
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version3.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
          var warning = [
            'Unable to register library "'.concat(library, '" with version "').concat(version3, '":')
          ];
          if (libraryMismatch) {
            warning.push('library name "'.concat(library, '" contains illegal characters (whitespace or "/")'));
          }
          if (libraryMismatch && versionMismatch) {
            warning.push("and");
          }
          if (versionMismatch) {
            warning.push('version name "'.concat(version3, '" contains illegal characters (whitespace or "/")'));
          }
          logger.warn(warning.join(" "));
          return;
        }
        _registerComponent(new component.Component(
          "".concat(library, "-version"),
          function() {
            return { library, version: version3 };
          },
          "VERSION"
          /* ComponentType.VERSION */
        ));
      }
      function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== "function") {
          throw ERROR_FACTORY.create(
            "invalid-log-argument"
            /* AppError.INVALID_LOG_ARGUMENT */
          );
        }
        logger$1.setUserLogHandler(logCallback, options);
      }
      function setLogLevel(logLevel) {
        logger$1.setLogLevel(logLevel);
      }
      var DB_NAME = "firebase-heartbeat-database";
      var DB_VERSION = 1;
      var STORE_NAME = "firebase-heartbeat-store";
      var dbPromise = null;
      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = idb.openDB(DB_NAME, DB_VERSION, {
            upgrade: function(db, oldVersion) {
              switch (oldVersion) {
                case 0:
                  try {
                    db.createObjectStore(STORE_NAME);
                  } catch (e) {
                    console.warn(e);
                  }
              }
            }
          }).catch(function(e) {
            throw ERROR_FACTORY.create("idb-open", {
              originalErrorMessage: e.message
            });
          });
        }
        return dbPromise;
      }
      function readHeartbeatsFromIndexedDB(app) {
        return tslib.__awaiter(this, void 0, void 0, function() {
          var db, tx, result, e_1, idbGetError;
          return tslib.__generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                _a2.trys.push([0, 4, , 5]);
                return [4, getDbPromise()];
              case 1:
                db = _a2.sent();
                tx = db.transaction(STORE_NAME);
                return [4, tx.objectStore(STORE_NAME).get(computeKey(app))];
              case 2:
                result = _a2.sent();
                return [4, tx.done];
              case 3:
                _a2.sent();
                return [2, result];
              case 4:
                e_1 = _a2.sent();
                if (e_1 instanceof util.FirebaseError) {
                  logger.warn(e_1.message);
                } else {
                  idbGetError = ERROR_FACTORY.create("idb-get", {
                    originalErrorMessage: e_1 === null || e_1 === void 0 ? void 0 : e_1.message
                  });
                  logger.warn(idbGetError.message);
                }
                return [3, 5];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
        return tslib.__awaiter(this, void 0, void 0, function() {
          var db, tx, objectStore, e_2, idbGetError;
          return tslib.__generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                _a2.trys.push([0, 4, , 5]);
                return [4, getDbPromise()];
              case 1:
                db = _a2.sent();
                tx = db.transaction(STORE_NAME, "readwrite");
                objectStore = tx.objectStore(STORE_NAME);
                return [4, objectStore.put(heartbeatObject, computeKey(app))];
              case 2:
                _a2.sent();
                return [4, tx.done];
              case 3:
                _a2.sent();
                return [3, 5];
              case 4:
                e_2 = _a2.sent();
                if (e_2 instanceof util.FirebaseError) {
                  logger.warn(e_2.message);
                } else {
                  idbGetError = ERROR_FACTORY.create("idb-set", {
                    originalErrorMessage: e_2 === null || e_2 === void 0 ? void 0 : e_2.message
                  });
                  logger.warn(idbGetError.message);
                }
                return [3, 5];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      function computeKey(app) {
        return "".concat(app.name, "!").concat(app.options.appId);
      }
      var MAX_HEADER_BYTES = 1024;
      var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
      var HeartbeatServiceImpl = (
        /** @class */
        (function() {
          function HeartbeatServiceImpl2(container) {
            var _this = this;
            this.container = container;
            this._heartbeatsCache = null;
            var app = this.container.getProvider("app").getImmediate();
            this._storage = new HeartbeatStorageImpl(app);
            this._heartbeatsCachePromise = this._storage.read().then(function(result) {
              _this._heartbeatsCache = result;
              return result;
            });
          }
          HeartbeatServiceImpl2.prototype.triggerHeartbeat = function() {
            var _a2, _b;
            return tslib.__awaiter(this, void 0, void 0, function() {
              var platformLogger, agent, date_1, _c, e_1;
              return tslib.__generator(this, function(_d) {
                switch (_d.label) {
                  case 0:
                    _d.trys.push([0, 3, , 4]);
                    platformLogger = this.container.getProvider("platform-logger").getImmediate();
                    agent = platformLogger.getPlatformInfoString();
                    date_1 = getUTCDateString();
                    if (!(((_a2 = this._heartbeatsCache) === null || _a2 === void 0 ? void 0 : _a2.heartbeats) == null)) return [3, 2];
                    _c = this;
                    return [4, this._heartbeatsCachePromise];
                  case 1:
                    _c._heartbeatsCache = _d.sent();
                    if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    _d.label = 2;
                  case 2:
                    if (this._heartbeatsCache.lastSentHeartbeatDate === date_1 || this._heartbeatsCache.heartbeats.some(function(singleDateHeartbeat) {
                      return singleDateHeartbeat.date === date_1;
                    })) {
                      return [
                        2
                        /*return*/
                      ];
                    } else {
                      this._heartbeatsCache.heartbeats.push({ date: date_1, agent });
                    }
                    this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(function(singleDateHeartbeat) {
                      var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                      var now = Date.now();
                      return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                    });
                    return [2, this._storage.overwrite(this._heartbeatsCache)];
                  case 3:
                    e_1 = _d.sent();
                    logger.warn(e_1);
                    return [3, 4];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          HeartbeatServiceImpl2.prototype.getHeartbeatsHeader = function() {
            var _a2;
            return tslib.__awaiter(this, void 0, void 0, function() {
              var date, _b, heartbeatsToSend, unsentEntries, headerString, e_2;
              return tslib.__generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    _c.trys.push([0, 6, , 7]);
                    if (!(this._heartbeatsCache === null)) return [3, 2];
                    return [4, this._heartbeatsCachePromise];
                  case 1:
                    _c.sent();
                    _c.label = 2;
                  case 2:
                    if (((_a2 = this._heartbeatsCache) === null || _a2 === void 0 ? void 0 : _a2.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
                      return [2, ""];
                    }
                    date = getUTCDateString();
                    _b = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _b.heartbeatsToSend, unsentEntries = _b.unsentEntries;
                    headerString = util.base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
                    this._heartbeatsCache.lastSentHeartbeatDate = date;
                    if (!(unsentEntries.length > 0)) return [3, 4];
                    this._heartbeatsCache.heartbeats = unsentEntries;
                    return [4, this._storage.overwrite(this._heartbeatsCache)];
                  case 3:
                    _c.sent();
                    return [3, 5];
                  case 4:
                    this._heartbeatsCache.heartbeats = [];
                    void this._storage.overwrite(this._heartbeatsCache);
                    _c.label = 5;
                  case 5:
                    return [2, headerString];
                  case 6:
                    e_2 = _c.sent();
                    logger.warn(e_2);
                    return [2, ""];
                  case 7:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          return HeartbeatServiceImpl2;
        })()
      );
      function getUTCDateString() {
        var today = /* @__PURE__ */ new Date();
        return today.toISOString().substring(0, 10);
      }
      function extractHeartbeatsForHeader(heartbeatsCache, maxSize) {
        var e_3, _a2;
        if (maxSize === void 0) {
          maxSize = MAX_HEADER_BYTES;
        }
        var heartbeatsToSend = [];
        var unsentEntries = heartbeatsCache.slice();
        var _loop_1 = function(singleDateHeartbeat2) {
          var heartbeatEntry = heartbeatsToSend.find(function(hb) {
            return hb.agent === singleDateHeartbeat2.agent;
          });
          if (!heartbeatEntry) {
            heartbeatsToSend.push({
              agent: singleDateHeartbeat2.agent,
              dates: [singleDateHeartbeat2.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
              heartbeatsToSend.pop();
              return "break";
            }
          } else {
            heartbeatEntry.dates.push(singleDateHeartbeat2.date);
            if (countBytes(heartbeatsToSend) > maxSize) {
              heartbeatEntry.dates.pop();
              return "break";
            }
          }
          unsentEntries = unsentEntries.slice(1);
        };
        try {
          for (var heartbeatsCache_1 = tslib.__values(heartbeatsCache), heartbeatsCache_1_1 = heartbeatsCache_1.next(); !heartbeatsCache_1_1.done; heartbeatsCache_1_1 = heartbeatsCache_1.next()) {
            var singleDateHeartbeat = heartbeatsCache_1_1.value;
            var state_1 = _loop_1(singleDateHeartbeat);
            if (state_1 === "break")
              break;
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (heartbeatsCache_1_1 && !heartbeatsCache_1_1.done && (_a2 = heartbeatsCache_1.return)) _a2.call(heartbeatsCache_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return {
          heartbeatsToSend,
          unsentEntries
        };
      }
      var HeartbeatStorageImpl = (
        /** @class */
        (function() {
          function HeartbeatStorageImpl2(app) {
            this.app = app;
            this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
          }
          HeartbeatStorageImpl2.prototype.runIndexedDBEnvironmentCheck = function() {
            return tslib.__awaiter(this, void 0, void 0, function() {
              return tslib.__generator(this, function(_a2) {
                if (!util.isIndexedDBAvailable()) {
                  return [2, false];
                } else {
                  return [2, util.validateIndexedDBOpenable().then(function() {
                    return true;
                  }).catch(function() {
                    return false;
                  })];
                }
              });
            });
          };
          HeartbeatStorageImpl2.prototype.read = function() {
            return tslib.__awaiter(this, void 0, void 0, function() {
              var canUseIndexedDB, idbHeartbeatObject;
              return tslib.__generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, this._canUseIndexedDBPromise];
                  case 1:
                    canUseIndexedDB = _a2.sent();
                    if (!!canUseIndexedDB) return [3, 2];
                    return [2, { heartbeats: [] }];
                  case 2:
                    return [4, readHeartbeatsFromIndexedDB(this.app)];
                  case 3:
                    idbHeartbeatObject = _a2.sent();
                    if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                      return [2, idbHeartbeatObject];
                    } else {
                      return [2, { heartbeats: [] }];
                    }
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          HeartbeatStorageImpl2.prototype.overwrite = function(heartbeatsObject) {
            var _a2;
            return tslib.__awaiter(this, void 0, void 0, function() {
              var canUseIndexedDB, existingHeartbeatsObject;
              return tslib.__generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, this._canUseIndexedDBPromise];
                  case 1:
                    canUseIndexedDB = _b.sent();
                    if (!!canUseIndexedDB) return [3, 2];
                    return [
                      2
                      /*return*/
                    ];
                  case 2:
                    return [4, this.read()];
                  case 3:
                    existingHeartbeatsObject = _b.sent();
                    return [2, writeHeartbeatsToIndexedDB(this.app, {
                      lastSentHeartbeatDate: (_a2 = heartbeatsObject.lastSentHeartbeatDate) !== null && _a2 !== void 0 ? _a2 : existingHeartbeatsObject.lastSentHeartbeatDate,
                      heartbeats: heartbeatsObject.heartbeats
                    })];
                }
              });
            });
          };
          HeartbeatStorageImpl2.prototype.add = function(heartbeatsObject) {
            var _a2;
            return tslib.__awaiter(this, void 0, void 0, function() {
              var canUseIndexedDB, existingHeartbeatsObject;
              return tslib.__generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, this._canUseIndexedDBPromise];
                  case 1:
                    canUseIndexedDB = _b.sent();
                    if (!!canUseIndexedDB) return [3, 2];
                    return [
                      2
                      /*return*/
                    ];
                  case 2:
                    return [4, this.read()];
                  case 3:
                    existingHeartbeatsObject = _b.sent();
                    return [2, writeHeartbeatsToIndexedDB(this.app, {
                      lastSentHeartbeatDate: (_a2 = heartbeatsObject.lastSentHeartbeatDate) !== null && _a2 !== void 0 ? _a2 : existingHeartbeatsObject.lastSentHeartbeatDate,
                      heartbeats: tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(existingHeartbeatsObject.heartbeats), false), tslib.__read(heartbeatsObject.heartbeats), false)
                    })];
                }
              });
            });
          };
          return HeartbeatStorageImpl2;
        })()
      );
      function countBytes(heartbeatsCache) {
        return util.base64urlEncodeWithoutPadding(
          // heartbeatsCache wrapper properties
          JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
        ).length;
      }
      function registerCoreComponents(variant) {
        _registerComponent(new component.Component(
          "platform-logger",
          function(container) {
            return new PlatformLoggerServiceImpl(container);
          },
          "PRIVATE"
          /* ComponentType.PRIVATE */
        ));
        _registerComponent(new component.Component(
          "heartbeat",
          function(container) {
            return new HeartbeatServiceImpl(container);
          },
          "PRIVATE"
          /* ComponentType.PRIVATE */
        ));
        registerVersion(name$q, version$1, variant);
        registerVersion(name$q, version$1, "cjs5");
        registerVersion("fire-js", "");
      }
      registerCoreComponents("node");
      Object.defineProperty(exports4, "FirebaseError", {
        enumerable: true,
        get: function() {
          return util.FirebaseError;
        }
      });
      exports4.SDK_VERSION = SDK_VERSION;
      exports4._DEFAULT_ENTRY_NAME = DEFAULT_ENTRY_NAME;
      exports4._addComponent = _addComponent;
      exports4._addOrOverwriteComponent = _addOrOverwriteComponent;
      exports4._apps = _apps;
      exports4._clearComponents = _clearComponents;
      exports4._components = _components;
      exports4._getProvider = _getProvider;
      exports4._isFirebaseApp = _isFirebaseApp;
      exports4._isFirebaseServerApp = _isFirebaseServerApp;
      exports4._registerComponent = _registerComponent;
      exports4._removeServiceInstance = _removeServiceInstance;
      exports4._serverApps = _serverApps;
      exports4.deleteApp = deleteApp;
      exports4.getApp = getApp;
      exports4.getApps = getApps;
      exports4.initializeApp = initializeApp;
      exports4.initializeServerApp = initializeServerApp;
      exports4.onLog = onLog;
      exports4.registerVersion = registerVersion;
      exports4.setLogLevel = setLogLevel;
    }
  });

  // node_modules/firebase/app/dist/index.cjs.js
  var require_index_cjs5 = __commonJS({
    "node_modules/firebase/app/dist/index.cjs.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", { value: true });
      var app = require_index_cjs4();
      var name2 = "firebase";
      var version2 = "10.14.1";
      app.registerVersion(name2, version2, "app");
      Object.keys(app).forEach(function(k) {
        if (k !== "default" && !exports4.hasOwnProperty(k)) Object.defineProperty(exports4, k, {
          enumerable: true,
          get: function() {
            return app[k];
          }
        });
      });
    }
  });

  // node_modules/@firebase/auth/dist/browser-cjs/index-e2e765e6.js
  var require_index_e2e765e6 = __commonJS({
    "node_modules/@firebase/auth/dist/browser-cjs/index-e2e765e6.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var app = require_index_cjs4();
      var util = require_index_cjs();
      var logger = require_index_cjs3();
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var component = require_index_cjs2();
      var FactorId = {
        /** Phone as second factor */
        PHONE: "phone",
        TOTP: "totp"
      };
      var ProviderId = {
        /** Facebook provider ID */
        FACEBOOK: "facebook.com",
        /** GitHub provider ID */
        GITHUB: "github.com",
        /** Google provider ID */
        GOOGLE: "google.com",
        /** Password provider */
        PASSWORD: "password",
        /** Phone provider */
        PHONE: "phone",
        /** Twitter provider ID */
        TWITTER: "twitter.com"
      };
      var SignInMethod = {
        /** Email link sign in method */
        EMAIL_LINK: "emailLink",
        /** Email/password sign in method */
        EMAIL_PASSWORD: "password",
        /** Facebook sign in method */
        FACEBOOK: "facebook.com",
        /** GitHub sign in method */
        GITHUB: "github.com",
        /** Google sign in method */
        GOOGLE: "google.com",
        /** Phone sign in method */
        PHONE: "phone",
        /** Twitter sign in method */
        TWITTER: "twitter.com"
      };
      var OperationType = {
        /** Operation involving linking an additional provider to an already signed-in user. */
        LINK: "link",
        /** Operation involving using a provider to reauthenticate an already signed-in user. */
        REAUTHENTICATE: "reauthenticate",
        /** Operation involving signing in a user. */
        SIGN_IN: "signIn"
      };
      var ActionCodeOperation = {
        /** The email link sign-in action. */
        EMAIL_SIGNIN: "EMAIL_SIGNIN",
        /** The password reset action. */
        PASSWORD_RESET: "PASSWORD_RESET",
        /** The email revocation action. */
        RECOVER_EMAIL: "RECOVER_EMAIL",
        /** The revert second factor addition email action. */
        REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
        /** The revert second factor addition email action. */
        VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
        /** The email verification action. */
        VERIFY_EMAIL: "VERIFY_EMAIL"
      };
      function _debugErrorMap() {
        return {
          [
            "admin-restricted-operation"
            /* AuthErrorCode.ADMIN_ONLY_OPERATION */
          ]: "This operation is restricted to administrators only.",
          [
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          ]: "",
          [
            "app-not-authorized"
            /* AuthErrorCode.APP_NOT_AUTHORIZED */
          ]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
          [
            "app-not-installed"
            /* AuthErrorCode.APP_NOT_INSTALLED */
          ]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
          [
            "captcha-check-failed"
            /* AuthErrorCode.CAPTCHA_CHECK_FAILED */
          ]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
          [
            "code-expired"
            /* AuthErrorCode.CODE_EXPIRED */
          ]: "The SMS code has expired. Please re-send the verification code to try again.",
          [
            "cordova-not-ready"
            /* AuthErrorCode.CORDOVA_NOT_READY */
          ]: "Cordova framework is not ready.",
          [
            "cors-unsupported"
            /* AuthErrorCode.CORS_UNSUPPORTED */
          ]: "This browser is not supported.",
          [
            "credential-already-in-use"
            /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */
          ]: "This credential is already associated with a different user account.",
          [
            "custom-token-mismatch"
            /* AuthErrorCode.CREDENTIAL_MISMATCH */
          ]: "The custom token corresponds to a different audience.",
          [
            "requires-recent-login"
            /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
          ]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
          [
            "dependent-sdk-initialized-before-auth"
            /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
          ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
          [
            "dynamic-link-not-activated"
            /* AuthErrorCode.DYNAMIC_LINK_NOT_ACTIVATED */
          ]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
          [
            "email-change-needs-verification"
            /* AuthErrorCode.EMAIL_CHANGE_NEEDS_VERIFICATION */
          ]: "Multi-factor users must always have a verified email.",
          [
            "email-already-in-use"
            /* AuthErrorCode.EMAIL_EXISTS */
          ]: "The email address is already in use by another account.",
          [
            "emulator-config-failed"
            /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
          ]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
          [
            "expired-action-code"
            /* AuthErrorCode.EXPIRED_OOB_CODE */
          ]: "The action code has expired.",
          [
            "cancelled-popup-request"
            /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
          ]: "This operation has been cancelled due to another conflicting popup being opened.",
          [
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          ]: "An internal AuthError has occurred.",
          [
            "invalid-app-credential"
            /* AuthErrorCode.INVALID_APP_CREDENTIAL */
          ]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
          [
            "invalid-app-id"
            /* AuthErrorCode.INVALID_APP_ID */
          ]: "The mobile app identifier is not registered for the current project.",
          [
            "invalid-user-token"
            /* AuthErrorCode.INVALID_AUTH */
          ]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
          [
            "invalid-auth-event"
            /* AuthErrorCode.INVALID_AUTH_EVENT */
          ]: "An internal AuthError has occurred.",
          [
            "invalid-verification-code"
            /* AuthErrorCode.INVALID_CODE */
          ]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
          [
            "invalid-continue-uri"
            /* AuthErrorCode.INVALID_CONTINUE_URI */
          ]: "The continue URL provided in the request is invalid.",
          [
            "invalid-cordova-configuration"
            /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
          ]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
          [
            "invalid-custom-token"
            /* AuthErrorCode.INVALID_CUSTOM_TOKEN */
          ]: "The custom token format is incorrect. Please check the documentation.",
          [
            "invalid-dynamic-link-domain"
            /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
          ]: "The provided dynamic link domain is not configured or authorized for the current project.",
          [
            "invalid-email"
            /* AuthErrorCode.INVALID_EMAIL */
          ]: "The email address is badly formatted.",
          [
            "invalid-emulator-scheme"
            /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
          ]: "Emulator URL must start with a valid scheme (http:// or https://).",
          [
            "invalid-api-key"
            /* AuthErrorCode.INVALID_API_KEY */
          ]: "Your API key is invalid, please check you have copied it correctly.",
          [
            "invalid-cert-hash"
            /* AuthErrorCode.INVALID_CERT_HASH */
          ]: "The SHA-1 certificate hash provided is invalid.",
          [
            "invalid-credential"
            /* AuthErrorCode.INVALID_CREDENTIAL */
          ]: "The supplied auth credential is incorrect, malformed or has expired.",
          [
            "invalid-message-payload"
            /* AuthErrorCode.INVALID_MESSAGE_PAYLOAD */
          ]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
          [
            "invalid-multi-factor-session"
            /* AuthErrorCode.INVALID_MFA_SESSION */
          ]: "The request does not contain a valid proof of first factor successful sign-in.",
          [
            "invalid-oauth-provider"
            /* AuthErrorCode.INVALID_OAUTH_PROVIDER */
          ]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
          [
            "invalid-oauth-client-id"
            /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */
          ]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
          [
            "unauthorized-domain"
            /* AuthErrorCode.INVALID_ORIGIN */
          ]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
          [
            "invalid-action-code"
            /* AuthErrorCode.INVALID_OOB_CODE */
          ]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
          [
            "wrong-password"
            /* AuthErrorCode.INVALID_PASSWORD */
          ]: "The password is invalid or the user does not have a password.",
          [
            "invalid-persistence-type"
            /* AuthErrorCode.INVALID_PERSISTENCE */
          ]: "The specified persistence type is invalid. It can only be local, session or none.",
          [
            "invalid-phone-number"
            /* AuthErrorCode.INVALID_PHONE_NUMBER */
          ]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
          [
            "invalid-provider-id"
            /* AuthErrorCode.INVALID_PROVIDER_ID */
          ]: "The specified provider ID is invalid.",
          [
            "invalid-recipient-email"
            /* AuthErrorCode.INVALID_RECIPIENT_EMAIL */
          ]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
          [
            "invalid-sender"
            /* AuthErrorCode.INVALID_SENDER */
          ]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
          [
            "invalid-verification-id"
            /* AuthErrorCode.INVALID_SESSION_INFO */
          ]: "The verification ID used to create the phone auth credential is invalid.",
          [
            "invalid-tenant-id"
            /* AuthErrorCode.INVALID_TENANT_ID */
          ]: "The Auth instance's tenant ID is invalid.",
          [
            "login-blocked"
            /* AuthErrorCode.LOGIN_BLOCKED */
          ]: "Login blocked by user-provided method: {$originalMessage}",
          [
            "missing-android-pkg-name"
            /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
          ]: "An Android Package Name must be provided if the Android App is required to be installed.",
          [
            "auth-domain-config-required"
            /* AuthErrorCode.MISSING_AUTH_DOMAIN */
          ]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
          [
            "missing-app-credential"
            /* AuthErrorCode.MISSING_APP_CREDENTIAL */
          ]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
          [
            "missing-verification-code"
            /* AuthErrorCode.MISSING_CODE */
          ]: "The phone auth credential was created with an empty SMS verification code.",
          [
            "missing-continue-uri"
            /* AuthErrorCode.MISSING_CONTINUE_URI */
          ]: "A continue URL must be provided in the request.",
          [
            "missing-iframe-start"
            /* AuthErrorCode.MISSING_IFRAME_START */
          ]: "An internal AuthError has occurred.",
          [
            "missing-ios-bundle-id"
            /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
          ]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
          [
            "missing-or-invalid-nonce"
            /* AuthErrorCode.MISSING_OR_INVALID_NONCE */
          ]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
          [
            "missing-password"
            /* AuthErrorCode.MISSING_PASSWORD */
          ]: "A non-empty password must be provided",
          [
            "missing-multi-factor-info"
            /* AuthErrorCode.MISSING_MFA_INFO */
          ]: "No second factor identifier is provided.",
          [
            "missing-multi-factor-session"
            /* AuthErrorCode.MISSING_MFA_SESSION */
          ]: "The request is missing proof of first factor successful sign-in.",
          [
            "missing-phone-number"
            /* AuthErrorCode.MISSING_PHONE_NUMBER */
          ]: "To send verification codes, provide a phone number for the recipient.",
          [
            "missing-verification-id"
            /* AuthErrorCode.MISSING_SESSION_INFO */
          ]: "The phone auth credential was created with an empty verification ID.",
          [
            "app-deleted"
            /* AuthErrorCode.MODULE_DESTROYED */
          ]: "This instance of FirebaseApp has been deleted.",
          [
            "multi-factor-info-not-found"
            /* AuthErrorCode.MFA_INFO_NOT_FOUND */
          ]: "The user does not have a second factor matching the identifier provided.",
          [
            "multi-factor-auth-required"
            /* AuthErrorCode.MFA_REQUIRED */
          ]: "Proof of ownership of a second factor is required to complete sign-in.",
          [
            "account-exists-with-different-credential"
            /* AuthErrorCode.NEED_CONFIRMATION */
          ]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
          [
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
          [
            "no-auth-event"
            /* AuthErrorCode.NO_AUTH_EVENT */
          ]: "An internal AuthError has occurred.",
          [
            "no-such-provider"
            /* AuthErrorCode.NO_SUCH_PROVIDER */
          ]: "User was not linked to an account with the given provider.",
          [
            "null-user"
            /* AuthErrorCode.NULL_USER */
          ]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
          [
            "operation-not-allowed"
            /* AuthErrorCode.OPERATION_NOT_ALLOWED */
          ]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
          [
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          ]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
          [
            "popup-blocked"
            /* AuthErrorCode.POPUP_BLOCKED */
          ]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
          [
            "popup-closed-by-user"
            /* AuthErrorCode.POPUP_CLOSED_BY_USER */
          ]: "The popup has been closed by the user before finalizing the operation.",
          [
            "provider-already-linked"
            /* AuthErrorCode.PROVIDER_ALREADY_LINKED */
          ]: "User can only be linked to one identity for the given provider.",
          [
            "quota-exceeded"
            /* AuthErrorCode.QUOTA_EXCEEDED */
          ]: "The project's quota for this operation has been exceeded.",
          [
            "redirect-cancelled-by-user"
            /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */
          ]: "The redirect operation has been cancelled by the user before finalizing.",
          [
            "redirect-operation-pending"
            /* AuthErrorCode.REDIRECT_OPERATION_PENDING */
          ]: "A redirect sign-in operation is already pending.",
          [
            "rejected-credential"
            /* AuthErrorCode.REJECTED_CREDENTIAL */
          ]: "The request contains malformed or mismatching credentials.",
          [
            "second-factor-already-in-use"
            /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */
          ]: "The second factor is already enrolled on this account.",
          [
            "maximum-second-factor-count-exceeded"
            /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */
          ]: "The maximum allowed number of second factors on a user has been exceeded.",
          [
            "tenant-id-mismatch"
            /* AuthErrorCode.TENANT_ID_MISMATCH */
          ]: "The provided tenant ID does not match the Auth instance's tenant ID",
          [
            "timeout"
            /* AuthErrorCode.TIMEOUT */
          ]: "The operation has timed out.",
          [
            "user-token-expired"
            /* AuthErrorCode.TOKEN_EXPIRED */
          ]: "The user's credential is no longer valid. The user must sign in again.",
          [
            "too-many-requests"
            /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */
          ]: "We have blocked all requests from this device due to unusual activity. Try again later.",
          [
            "unauthorized-continue-uri"
            /* AuthErrorCode.UNAUTHORIZED_DOMAIN */
          ]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
          [
            "unsupported-first-factor"
            /* AuthErrorCode.UNSUPPORTED_FIRST_FACTOR */
          ]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
          [
            "unsupported-persistence-type"
            /* AuthErrorCode.UNSUPPORTED_PERSISTENCE */
          ]: "The current environment does not support the specified persistence type.",
          [
            "unsupported-tenant-operation"
            /* AuthErrorCode.UNSUPPORTED_TENANT_OPERATION */
          ]: "This operation is not supported in a multi-tenant context.",
          [
            "unverified-email"
            /* AuthErrorCode.UNVERIFIED_EMAIL */
          ]: "The operation requires a verified email.",
          [
            "user-cancelled"
            /* AuthErrorCode.USER_CANCELLED */
          ]: "The user did not grant your application the permissions it requested.",
          [
            "user-not-found"
            /* AuthErrorCode.USER_DELETED */
          ]: "There is no user record corresponding to this identifier. The user may have been deleted.",
          [
            "user-disabled"
            /* AuthErrorCode.USER_DISABLED */
          ]: "The user account has been disabled by an administrator.",
          [
            "user-mismatch"
            /* AuthErrorCode.USER_MISMATCH */
          ]: "The supplied credentials do not correspond to the previously signed in user.",
          [
            "user-signed-out"
            /* AuthErrorCode.USER_SIGNED_OUT */
          ]: "",
          [
            "weak-password"
            /* AuthErrorCode.WEAK_PASSWORD */
          ]: "The password must be 6 characters long or more.",
          [
            "web-storage-unsupported"
            /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
          ]: "This browser is not supported or 3rd party cookies and data may be disabled.",
          [
            "already-initialized"
            /* AuthErrorCode.ALREADY_INITIALIZED */
          ]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
          [
            "missing-recaptcha-token"
            /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
          ]: "The reCAPTCHA token is missing when sending request to the backend.",
          [
            "invalid-recaptcha-token"
            /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */
          ]: "The reCAPTCHA token is invalid when sending request to the backend.",
          [
            "invalid-recaptcha-action"
            /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */
          ]: "The reCAPTCHA action is invalid when sending request to the backend.",
          [
            "recaptcha-not-enabled"
            /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */
          ]: "reCAPTCHA Enterprise integration is not enabled for this project.",
          [
            "missing-client-type"
            /* AuthErrorCode.MISSING_CLIENT_TYPE */
          ]: "The reCAPTCHA client type is missing when sending request to the backend.",
          [
            "missing-recaptcha-version"
            /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */
          ]: "The reCAPTCHA version is missing when sending request to the backend.",
          [
            "invalid-req-type"
            /* AuthErrorCode.INVALID_REQ_TYPE */
          ]: "Invalid request parameters.",
          [
            "invalid-recaptcha-version"
            /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */
          ]: "The reCAPTCHA version is invalid when sending request to the backend.",
          [
            "unsupported-password-policy-schema-version"
            /* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */
          ]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
          [
            "password-does-not-meet-requirements"
            /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
          ]: "The password does not meet the requirements."
        };
      }
      function _prodErrorMap() {
        return {
          [
            "dependent-sdk-initialized-before-auth"
            /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
          ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
        };
      }
      var debugErrorMap = _debugErrorMap;
      var prodErrorMap = _prodErrorMap;
      var _DEFAULT_AUTH_ERROR_FACTORY = new util.ErrorFactory("auth", "Firebase", _prodErrorMap());
      var AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
        ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
        ARGUMENT_ERROR: "auth/argument-error",
        APP_NOT_AUTHORIZED: "auth/app-not-authorized",
        APP_NOT_INSTALLED: "auth/app-not-installed",
        CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
        CODE_EXPIRED: "auth/code-expired",
        CORDOVA_NOT_READY: "auth/cordova-not-ready",
        CORS_UNSUPPORTED: "auth/cors-unsupported",
        CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
        CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
        DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
        DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
        EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
        EMAIL_EXISTS: "auth/email-already-in-use",
        EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
        EXPIRED_OOB_CODE: "auth/expired-action-code",
        EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
        INTERNAL_ERROR: "auth/internal-error",
        INVALID_API_KEY: "auth/invalid-api-key",
        INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
        INVALID_APP_ID: "auth/invalid-app-id",
        INVALID_AUTH: "auth/invalid-user-token",
        INVALID_AUTH_EVENT: "auth/invalid-auth-event",
        INVALID_CERT_HASH: "auth/invalid-cert-hash",
        INVALID_CODE: "auth/invalid-verification-code",
        INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
        INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
        INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
        INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
        INVALID_EMAIL: "auth/invalid-email",
        INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
        INVALID_IDP_RESPONSE: "auth/invalid-credential",
        INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential",
        INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
        INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
        INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
        INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
        INVALID_OOB_CODE: "auth/invalid-action-code",
        INVALID_ORIGIN: "auth/unauthorized-domain",
        INVALID_PASSWORD: "auth/wrong-password",
        INVALID_PERSISTENCE: "auth/invalid-persistence-type",
        INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
        INVALID_PROVIDER_ID: "auth/invalid-provider-id",
        INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
        INVALID_SENDER: "auth/invalid-sender",
        INVALID_SESSION_INFO: "auth/invalid-verification-id",
        INVALID_TENANT_ID: "auth/invalid-tenant-id",
        MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
        MFA_REQUIRED: "auth/multi-factor-auth-required",
        MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
        MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
        MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
        MISSING_CODE: "auth/missing-verification-code",
        MISSING_CONTINUE_URI: "auth/missing-continue-uri",
        MISSING_IFRAME_START: "auth/missing-iframe-start",
        MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
        MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
        MISSING_MFA_INFO: "auth/missing-multi-factor-info",
        MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
        MISSING_PHONE_NUMBER: "auth/missing-phone-number",
        MISSING_SESSION_INFO: "auth/missing-verification-id",
        MODULE_DESTROYED: "auth/app-deleted",
        NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
        NETWORK_REQUEST_FAILED: "auth/network-request-failed",
        NULL_USER: "auth/null-user",
        NO_AUTH_EVENT: "auth/no-auth-event",
        NO_SUCH_PROVIDER: "auth/no-such-provider",
        OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
        OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
        POPUP_BLOCKED: "auth/popup-blocked",
        POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
        PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
        QUOTA_EXCEEDED: "auth/quota-exceeded",
        REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
        REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
        REJECTED_CREDENTIAL: "auth/rejected-credential",
        SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
        TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
        TIMEOUT: "auth/timeout",
        TOKEN_EXPIRED: "auth/user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
        UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
        UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
        UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
        UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
        UNVERIFIED_EMAIL: "auth/unverified-email",
        USER_CANCELLED: "auth/user-cancelled",
        USER_DELETED: "auth/user-not-found",
        USER_DISABLED: "auth/user-disabled",
        USER_MISMATCH: "auth/user-mismatch",
        USER_SIGNED_OUT: "auth/user-signed-out",
        WEAK_PASSWORD: "auth/weak-password",
        WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
        ALREADY_INITIALIZED: "auth/already-initialized",
        RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
        MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
        INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
        INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
        MISSING_CLIENT_TYPE: "auth/missing-client-type",
        MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
        INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
        INVALID_REQ_TYPE: "auth/invalid-req-type"
      };
      var logClient = new logger.Logger("@firebase/auth");
      function _logWarn(msg, ...args) {
        if (logClient.logLevel <= logger.LogLevel.WARN) {
          logClient.warn(`Auth (${app.SDK_VERSION}): ${msg}`, ...args);
        }
      }
      function _logError(msg, ...args) {
        if (logClient.logLevel <= logger.LogLevel.ERROR) {
          logClient.error(`Auth (${app.SDK_VERSION}): ${msg}`, ...args);
        }
      }
      function _fail(authOrCode, ...rest) {
        throw createErrorInternal(authOrCode, ...rest);
      }
      function _createError(authOrCode, ...rest) {
        return createErrorInternal(authOrCode, ...rest);
      }
      function _errorWithCustomMessage(auth, code, message) {
        const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
        const factory = new util.ErrorFactory("auth", "Firebase", errorMap);
        return factory.create(code, {
          appName: auth.name
        });
      }
      function _serverAppCurrentUserOperationNotSupportedError(auth) {
        return _errorWithCustomMessage(auth, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
      }
      function _assertInstanceOf(auth, object, instance) {
        const constructorInstance = instance;
        if (!(object instanceof constructorInstance)) {
          if (constructorInstance.name !== object.constructor.name) {
            _fail(
              auth,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
          }
          throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
        }
      }
      function createErrorInternal(authOrCode, ...rest) {
        if (typeof authOrCode !== "string") {
          const code = rest[0];
          const fullParams = [...rest.slice(1)];
          if (fullParams[0]) {
            fullParams[0].appName = authOrCode.name;
          }
          return authOrCode._errorFactory.create(code, ...fullParams);
        }
        return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
      }
      function _assert(assertion, authOrCode, ...rest) {
        if (!assertion) {
          throw createErrorInternal(authOrCode, ...rest);
        }
      }
      function debugFail(failure) {
        const message = `INTERNAL ASSERTION FAILED: ` + failure;
        _logError(message);
        throw new Error(message);
      }
      function debugAssert(assertion, message) {
        if (!assertion) {
          debugFail(message);
        }
      }
      function _getCurrentUrl() {
        var _a;
        return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
      }
      function _isHttpOrHttps() {
        return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
      }
      function _getCurrentScheme() {
        var _a;
        return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
      }
      function _isOnline() {
        if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && // Apply only for traditional web apps and Chrome extensions.
        // This is especially true for Cordova apps which have unreliable
        // navigator.onLine behavior unless cordova-plugin-network-information is
        // installed which overwrites the native navigator.onLine value and
        // defines navigator.connection.
        (_isHttpOrHttps() || util.isBrowserExtension() || "connection" in navigator)) {
          return navigator.onLine;
        }
        return true;
      }
      function _getUserLanguage() {
        if (typeof navigator === "undefined") {
          return null;
        }
        const navigatorLanguage = navigator;
        return (
          // Most reliable, but only supported in Chrome/Firefox.
          navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
          // UI, not the language set in browser settings.
          navigatorLanguage.language || // Couldn't determine language.
          null
        );
      }
      var Delay = class {
        constructor(shortDelay, longDelay) {
          this.shortDelay = shortDelay;
          this.longDelay = longDelay;
          debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
          this.isMobile = util.isMobileCordova() || util.isReactNative();
        }
        get() {
          if (!_isOnline()) {
            return Math.min(5e3, this.shortDelay);
          }
          return this.isMobile ? this.longDelay : this.shortDelay;
        }
      };
      function _emulatorUrl(config2, path) {
        debugAssert(config2.emulator, "Emulator should always be set here");
        const { url } = config2.emulator;
        if (!path) {
          return url;
        }
        return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
      }
      var FetchProvider = class {
        static initialize(fetchImpl, headersImpl, responseImpl) {
          this.fetchImpl = fetchImpl;
          if (headersImpl) {
            this.headersImpl = headersImpl;
          }
          if (responseImpl) {
            this.responseImpl = responseImpl;
          }
        }
        static fetch() {
          if (this.fetchImpl) {
            return this.fetchImpl;
          }
          if (typeof self !== "undefined" && "fetch" in self) {
            return self.fetch;
          }
          if (typeof globalThis !== "undefined" && globalThis.fetch) {
            return globalThis.fetch;
          }
          if (typeof fetch !== "undefined") {
            return fetch;
          }
          debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
        static headers() {
          if (this.headersImpl) {
            return this.headersImpl;
          }
          if (typeof self !== "undefined" && "Headers" in self) {
            return self.Headers;
          }
          if (typeof globalThis !== "undefined" && globalThis.Headers) {
            return globalThis.Headers;
          }
          if (typeof Headers !== "undefined") {
            return Headers;
          }
          debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
        static response() {
          if (this.responseImpl) {
            return this.responseImpl;
          }
          if (typeof self !== "undefined" && "Response" in self) {
            return self.Response;
          }
          if (typeof globalThis !== "undefined" && globalThis.Response) {
            return globalThis.Response;
          }
          if (typeof Response !== "undefined") {
            return Response;
          }
          debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
      };
      var SERVER_ERROR_MAP = {
        // Custom token errors.
        [
          "CREDENTIAL_MISMATCH"
          /* ServerError.CREDENTIAL_MISMATCH */
        ]: "custom-token-mismatch",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_CUSTOM_TOKEN"
          /* ServerError.MISSING_CUSTOM_TOKEN */
        ]: "internal-error",
        // Create Auth URI errors.
        [
          "INVALID_IDENTIFIER"
          /* ServerError.INVALID_IDENTIFIER */
        ]: "invalid-email",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_CONTINUE_URI"
          /* ServerError.MISSING_CONTINUE_URI */
        ]: "internal-error",
        // Sign in with email and password errors (some apply to sign up too).
        [
          "INVALID_PASSWORD"
          /* ServerError.INVALID_PASSWORD */
        ]: "wrong-password",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_PASSWORD"
          /* ServerError.MISSING_PASSWORD */
        ]: "missing-password",
        // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
        // invalid.
        [
          "INVALID_LOGIN_CREDENTIALS"
          /* ServerError.INVALID_LOGIN_CREDENTIALS */
        ]: "invalid-credential",
        // Sign up with email and password errors.
        [
          "EMAIL_EXISTS"
          /* ServerError.EMAIL_EXISTS */
        ]: "email-already-in-use",
        [
          "PASSWORD_LOGIN_DISABLED"
          /* ServerError.PASSWORD_LOGIN_DISABLED */
        ]: "operation-not-allowed",
        // Verify assertion for sign in with credential errors:
        [
          "INVALID_IDP_RESPONSE"
          /* ServerError.INVALID_IDP_RESPONSE */
        ]: "invalid-credential",
        [
          "INVALID_PENDING_TOKEN"
          /* ServerError.INVALID_PENDING_TOKEN */
        ]: "invalid-credential",
        [
          "FEDERATED_USER_ID_ALREADY_LINKED"
          /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
        ]: "credential-already-in-use",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_REQ_TYPE"
          /* ServerError.MISSING_REQ_TYPE */
        ]: "internal-error",
        // Send Password reset email errors:
        [
          "EMAIL_NOT_FOUND"
          /* ServerError.EMAIL_NOT_FOUND */
        ]: "user-not-found",
        [
          "RESET_PASSWORD_EXCEED_LIMIT"
          /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */
        ]: "too-many-requests",
        [
          "EXPIRED_OOB_CODE"
          /* ServerError.EXPIRED_OOB_CODE */
        ]: "expired-action-code",
        [
          "INVALID_OOB_CODE"
          /* ServerError.INVALID_OOB_CODE */
        ]: "invalid-action-code",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_OOB_CODE"
          /* ServerError.MISSING_OOB_CODE */
        ]: "internal-error",
        // Operations that require ID token in request:
        [
          "CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
          /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
        ]: "requires-recent-login",
        [
          "INVALID_ID_TOKEN"
          /* ServerError.INVALID_ID_TOKEN */
        ]: "invalid-user-token",
        [
          "TOKEN_EXPIRED"
          /* ServerError.TOKEN_EXPIRED */
        ]: "user-token-expired",
        [
          "USER_NOT_FOUND"
          /* ServerError.USER_NOT_FOUND */
        ]: "user-token-expired",
        // Other errors.
        [
          "TOO_MANY_ATTEMPTS_TRY_LATER"
          /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */
        ]: "too-many-requests",
        [
          "PASSWORD_DOES_NOT_MEET_REQUIREMENTS"
          /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
        ]: "password-does-not-meet-requirements",
        // Phone Auth related errors.
        [
          "INVALID_CODE"
          /* ServerError.INVALID_CODE */
        ]: "invalid-verification-code",
        [
          "INVALID_SESSION_INFO"
          /* ServerError.INVALID_SESSION_INFO */
        ]: "invalid-verification-id",
        [
          "INVALID_TEMPORARY_PROOF"
          /* ServerError.INVALID_TEMPORARY_PROOF */
        ]: "invalid-credential",
        [
          "MISSING_SESSION_INFO"
          /* ServerError.MISSING_SESSION_INFO */
        ]: "missing-verification-id",
        [
          "SESSION_EXPIRED"
          /* ServerError.SESSION_EXPIRED */
        ]: "code-expired",
        // Other action code errors when additional settings passed.
        // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
        // This is OK as this error will be caught by client side validation.
        [
          "MISSING_ANDROID_PACKAGE_NAME"
          /* ServerError.MISSING_ANDROID_PACKAGE_NAME */
        ]: "missing-android-pkg-name",
        [
          "UNAUTHORIZED_DOMAIN"
          /* ServerError.UNAUTHORIZED_DOMAIN */
        ]: "unauthorized-continue-uri",
        // getProjectConfig errors when clientId is passed.
        [
          "INVALID_OAUTH_CLIENT_ID"
          /* ServerError.INVALID_OAUTH_CLIENT_ID */
        ]: "invalid-oauth-client-id",
        // User actions (sign-up or deletion) disabled errors.
        [
          "ADMIN_ONLY_OPERATION"
          /* ServerError.ADMIN_ONLY_OPERATION */
        ]: "admin-restricted-operation",
        // Multi factor related errors.
        [
          "INVALID_MFA_PENDING_CREDENTIAL"
          /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */
        ]: "invalid-multi-factor-session",
        [
          "MFA_ENROLLMENT_NOT_FOUND"
          /* ServerError.MFA_ENROLLMENT_NOT_FOUND */
        ]: "multi-factor-info-not-found",
        [
          "MISSING_MFA_ENROLLMENT_ID"
          /* ServerError.MISSING_MFA_ENROLLMENT_ID */
        ]: "missing-multi-factor-info",
        [
          "MISSING_MFA_PENDING_CREDENTIAL"
          /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */
        ]: "missing-multi-factor-session",
        [
          "SECOND_FACTOR_EXISTS"
          /* ServerError.SECOND_FACTOR_EXISTS */
        ]: "second-factor-already-in-use",
        [
          "SECOND_FACTOR_LIMIT_EXCEEDED"
          /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */
        ]: "maximum-second-factor-count-exceeded",
        // Blocking functions related errors.
        [
          "BLOCKING_FUNCTION_ERROR_RESPONSE"
          /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */
        ]: "internal-error",
        // Recaptcha related errors.
        [
          "RECAPTCHA_NOT_ENABLED"
          /* ServerError.RECAPTCHA_NOT_ENABLED */
        ]: "recaptcha-not-enabled",
        [
          "MISSING_RECAPTCHA_TOKEN"
          /* ServerError.MISSING_RECAPTCHA_TOKEN */
        ]: "missing-recaptcha-token",
        [
          "INVALID_RECAPTCHA_TOKEN"
          /* ServerError.INVALID_RECAPTCHA_TOKEN */
        ]: "invalid-recaptcha-token",
        [
          "INVALID_RECAPTCHA_ACTION"
          /* ServerError.INVALID_RECAPTCHA_ACTION */
        ]: "invalid-recaptcha-action",
        [
          "MISSING_CLIENT_TYPE"
          /* ServerError.MISSING_CLIENT_TYPE */
        ]: "missing-client-type",
        [
          "MISSING_RECAPTCHA_VERSION"
          /* ServerError.MISSING_RECAPTCHA_VERSION */
        ]: "missing-recaptcha-version",
        [
          "INVALID_RECAPTCHA_VERSION"
          /* ServerError.INVALID_RECAPTCHA_VERSION */
        ]: "invalid-recaptcha-version",
        [
          "INVALID_REQ_TYPE"
          /* ServerError.INVALID_REQ_TYPE */
        ]: "invalid-req-type"
        /* AuthErrorCode.INVALID_REQ_TYPE */
      };
      var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
      function _addTidIfNecessary(auth, request) {
        if (auth.tenantId && !request.tenantId) {
          return Object.assign(Object.assign({}, request), { tenantId: auth.tenantId });
        }
        return request;
      }
      async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
        return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
          let body = {};
          let params = {};
          if (request) {
            if (method === "GET") {
              params = request;
            } else {
              body = {
                body: JSON.stringify(request)
              };
            }
          }
          const query = util.querystring(Object.assign({ key: auth.config.apiKey }, params)).slice(1);
          const headers = await auth._getAdditionalHeaders();
          headers[
            "Content-Type"
            /* HttpHeader.CONTENT_TYPE */
          ] = "application/json";
          if (auth.languageCode) {
            headers[
              "X-Firebase-Locale"
              /* HttpHeader.X_FIREBASE_LOCALE */
            ] = auth.languageCode;
          }
          const fetchArgs = Object.assign({
            method,
            headers
          }, body);
          if (!util.isCloudflareWorker()) {
            fetchArgs.referrerPolicy = "no-referrer";
          }
          return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), fetchArgs);
        });
      }
      async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
        auth._canInitEmulator = false;
        const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
        try {
          const networkTimeout = new NetworkTimeout(auth);
          const response = await Promise.race([
            fetchFn(),
            networkTimeout.promise
          ]);
          networkTimeout.clearNetworkTimeout();
          const json = await response.json();
          if ("needConfirmation" in json) {
            throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
          }
          if (response.ok && !("errorMessage" in json)) {
            return json;
          } else {
            const errorMessage = response.ok ? json.errorMessage : json.error.message;
            const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
            if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
              throw _makeTaggedError(auth, "credential-already-in-use", json);
            } else if (serverErrorCode === "EMAIL_EXISTS") {
              throw _makeTaggedError(auth, "email-already-in-use", json);
            } else if (serverErrorCode === "USER_DISABLED") {
              throw _makeTaggedError(auth, "user-disabled", json);
            }
            const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
            if (serverErrorMessage) {
              throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
            } else {
              _fail(auth, authError);
            }
          }
        } catch (e) {
          if (e instanceof util.FirebaseError) {
            throw e;
          }
          _fail(auth, "network-request-failed", { "message": String(e) });
        }
      }
      async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
        const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
        if ("mfaPendingCredential" in serverResponse) {
          _fail(auth, "multi-factor-auth-required", {
            _serverResponse: serverResponse
          });
        }
        return serverResponse;
      }
      function _getFinalTarget(auth, host, path, query) {
        const base = `${host}${path}?${query}`;
        if (!auth.config.emulator) {
          return `${auth.config.apiScheme}://${base}`;
        }
        return _emulatorUrl(auth.config, base);
      }
      function _parseEnforcementState(enforcementStateStr) {
        switch (enforcementStateStr) {
          case "ENFORCE":
            return "ENFORCE";
          case "AUDIT":
            return "AUDIT";
          case "OFF":
            return "OFF";
          default:
            return "ENFORCEMENT_STATE_UNSPECIFIED";
        }
      }
      var NetworkTimeout = class {
        constructor(auth) {
          this.auth = auth;
          this.timer = null;
          this.promise = new Promise((_, reject) => {
            this.timer = setTimeout(() => {
              return reject(_createError(
                this.auth,
                "network-request-failed"
                /* AuthErrorCode.NETWORK_REQUEST_FAILED */
              ));
            }, DEFAULT_API_TIMEOUT_MS.get());
          });
        }
        clearNetworkTimeout() {
          clearTimeout(this.timer);
        }
      };
      function _makeTaggedError(auth, code, response) {
        const errorParams = {
          appName: auth.name
        };
        if (response.email) {
          errorParams.email = response.email;
        }
        if (response.phoneNumber) {
          errorParams.phoneNumber = response.phoneNumber;
        }
        const error = _createError(auth, code, errorParams);
        error.customData._tokenResponse = response;
        return error;
      }
      function isV2(grecaptcha) {
        return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
      }
      function isEnterprise(grecaptcha) {
        return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
      }
      var RecaptchaConfig = class {
        constructor(response) {
          this.siteKey = "";
          this.recaptchaEnforcementState = [];
          if (response.recaptchaKey === void 0) {
            throw new Error("recaptchaKey undefined");
          }
          this.siteKey = response.recaptchaKey.split("/")[3];
          this.recaptchaEnforcementState = response.recaptchaEnforcementState;
        }
        /**
         * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
         *
         * @param providerStr - The provider whose enforcement state is to be returned.
         * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
         */
        getProviderEnforcementState(providerStr) {
          if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) {
            return null;
          }
          for (const recaptchaEnforcementState of this.recaptchaEnforcementState) {
            if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) {
              return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
            }
          }
          return null;
        }
        /**
         * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
         *
         * @param providerStr - The provider whose enablement state is to be returned.
         * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
         */
        isProviderEnabled(providerStr) {
          return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
        }
      };
      async function getRecaptchaParams(auth) {
        return (await _performApiRequest(
          auth,
          "GET",
          "/v1/recaptchaParams"
          /* Endpoint.GET_RECAPTCHA_PARAM */
        )).recaptchaSiteKey || "";
      }
      async function getRecaptchaConfig(auth, request) {
        return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
      }
      async function deleteAccount(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
      }
      async function deleteLinkedAccounts(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
      }
      async function getAccountInfo(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
      }
      function utcTimestampToDateString(utcTimestamp) {
        if (!utcTimestamp) {
          return void 0;
        }
        try {
          const date = new Date(Number(utcTimestamp));
          if (!isNaN(date.getTime())) {
            return date.toUTCString();
          }
        } catch (e) {
        }
        return void 0;
      }
      function getIdToken(user, forceRefresh = false) {
        return util.getModularInstance(user).getIdToken(forceRefresh);
      }
      async function getIdTokenResult(user, forceRefresh = false) {
        const userInternal = util.getModularInstance(user);
        const token = await userInternal.getIdToken(forceRefresh);
        const claims = _parseToken(token);
        _assert(
          claims && claims.exp && claims.auth_time && claims.iat,
          userInternal.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
        const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
        return {
          claims,
          token,
          authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
          issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
          expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
          signInProvider: signInProvider || null,
          signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
        };
      }
      function secondsStringToMilliseconds(seconds) {
        return Number(seconds) * 1e3;
      }
      function _parseToken(token) {
        const [algorithm, payload, signature] = token.split(".");
        if (algorithm === void 0 || payload === void 0 || signature === void 0) {
          _logError("JWT malformed, contained fewer than 3 sections");
          return null;
        }
        try {
          const decoded = util.base64Decode(payload);
          if (!decoded) {
            _logError("Failed to decode base64 JWT payload");
            return null;
          }
          return JSON.parse(decoded);
        } catch (e) {
          _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
          return null;
        }
      }
      function _tokenExpiresIn(token) {
        const parsedToken = _parseToken(token);
        _assert(
          parsedToken,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        _assert(
          typeof parsedToken.exp !== "undefined",
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        _assert(
          typeof parsedToken.iat !== "undefined",
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        return Number(parsedToken.exp) - Number(parsedToken.iat);
      }
      async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
        if (bypassAuthState) {
          return promise;
        }
        try {
          return await promise;
        } catch (e) {
          if (e instanceof util.FirebaseError && isUserInvalidated(e)) {
            if (user.auth.currentUser === user) {
              await user.auth.signOut();
            }
          }
          throw e;
        }
      }
      function isUserInvalidated({ code }) {
        return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
      }
      var ProactiveRefresh = class {
        constructor(user) {
          this.user = user;
          this.isRunning = false;
          this.timerId = null;
          this.errorBackoff = 3e4;
        }
        _start() {
          if (this.isRunning) {
            return;
          }
          this.isRunning = true;
          this.schedule();
        }
        _stop() {
          if (!this.isRunning) {
            return;
          }
          this.isRunning = false;
          if (this.timerId !== null) {
            clearTimeout(this.timerId);
          }
        }
        getInterval(wasError) {
          var _a;
          if (wasError) {
            const interval = this.errorBackoff;
            this.errorBackoff = Math.min(
              this.errorBackoff * 2,
              96e4
              /* Duration.RETRY_BACKOFF_MAX */
            );
            return interval;
          } else {
            this.errorBackoff = 3e4;
            const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
            const interval = expTime - Date.now() - 3e5;
            return Math.max(0, interval);
          }
        }
        schedule(wasError = false) {
          if (!this.isRunning) {
            return;
          }
          const interval = this.getInterval(wasError);
          this.timerId = setTimeout(async () => {
            await this.iteration();
          }, interval);
        }
        async iteration() {
          try {
            await this.user.getIdToken(true);
          } catch (e) {
            if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
              this.schedule(
                /* wasError */
                true
              );
            }
            return;
          }
          this.schedule();
        }
      };
      var UserMetadata = class {
        constructor(createdAt, lastLoginAt) {
          this.createdAt = createdAt;
          this.lastLoginAt = lastLoginAt;
          this._initializeTime();
        }
        _initializeTime() {
          this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
          this.creationTime = utcTimestampToDateString(this.createdAt);
        }
        _copy(metadata) {
          this.createdAt = metadata.createdAt;
          this.lastLoginAt = metadata.lastLoginAt;
          this._initializeTime();
        }
        toJSON() {
          return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
          };
        }
      };
      async function _reloadWithoutSaving(user) {
        var _a;
        const auth = user.auth;
        const idToken = await user.getIdToken();
        const response = await _logoutIfInvalidated(user, getAccountInfo(auth, { idToken }));
        _assert(
          response === null || response === void 0 ? void 0 : response.users.length,
          auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const coreAccount = response.users[0];
        user._notifyReloadListener(coreAccount);
        const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
        const providerData = mergeProviderData(user.providerData, newProviderData);
        const oldIsAnonymous = user.isAnonymous;
        const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
        const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
        const updates = {
          uid: coreAccount.localId,
          displayName: coreAccount.displayName || null,
          photoURL: coreAccount.photoUrl || null,
          email: coreAccount.email || null,
          emailVerified: coreAccount.emailVerified || false,
          phoneNumber: coreAccount.phoneNumber || null,
          tenantId: coreAccount.tenantId || null,
          providerData,
          metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
          isAnonymous
        };
        Object.assign(user, updates);
      }
      async function reload(user) {
        const userInternal = util.getModularInstance(user);
        await _reloadWithoutSaving(userInternal);
        await userInternal.auth._persistUserIfCurrent(userInternal);
        userInternal.auth._notifyListenersIfCurrent(userInternal);
      }
      function mergeProviderData(original, newData) {
        const deduped = original.filter((o) => !newData.some((n) => n.providerId === o.providerId));
        return [...deduped, ...newData];
      }
      function extractProviderData(providers) {
        return providers.map((_a) => {
          var { providerId } = _a, provider = tslib.__rest(_a, ["providerId"]);
          return {
            providerId,
            uid: provider.rawId || "",
            displayName: provider.displayName || null,
            email: provider.email || null,
            phoneNumber: provider.phoneNumber || null,
            photoURL: provider.photoUrl || null
          };
        });
      }
      async function requestStsToken(auth, refreshToken) {
        const response = await _performFetchWithErrorHandling(auth, {}, async () => {
          const body = util.querystring({
            "grant_type": "refresh_token",
            "refresh_token": refreshToken
          }).slice(1);
          const { tokenApiHost, apiKey } = auth.config;
          const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
          const headers = await auth._getAdditionalHeaders();
          headers[
            "Content-Type"
            /* HttpHeader.CONTENT_TYPE */
          ] = "application/x-www-form-urlencoded";
          return FetchProvider.fetch()(url, {
            method: "POST",
            headers,
            body
          });
        });
        return {
          accessToken: response.access_token,
          expiresIn: response.expires_in,
          refreshToken: response.refresh_token
        };
      }
      async function revokeToken(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(auth, request));
      }
      var StsTokenManager = class _StsTokenManager {
        constructor() {
          this.refreshToken = null;
          this.accessToken = null;
          this.expirationTime = null;
        }
        get isExpired() {
          return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
        }
        updateFromServerResponse(response) {
          _assert(
            response.idToken,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof response.idToken !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof response.refreshToken !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
          this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
        }
        updateFromIdToken(idToken) {
          _assert(
            idToken.length !== 0,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const expiresIn = _tokenExpiresIn(idToken);
          this.updateTokensAndExpiration(idToken, null, expiresIn);
        }
        async getToken(auth, forceRefresh = false) {
          if (!forceRefresh && this.accessToken && !this.isExpired) {
            return this.accessToken;
          }
          _assert(
            this.refreshToken,
            auth,
            "user-token-expired"
            /* AuthErrorCode.TOKEN_EXPIRED */
          );
          if (this.refreshToken) {
            await this.refresh(auth, this.refreshToken);
            return this.accessToken;
          }
          return null;
        }
        clearRefreshToken() {
          this.refreshToken = null;
        }
        async refresh(auth, oldToken) {
          const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth, oldToken);
          this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
        }
        updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
          this.refreshToken = refreshToken || null;
          this.accessToken = accessToken || null;
          this.expirationTime = Date.now() + expiresInSec * 1e3;
        }
        static fromJSON(appName, object) {
          const { refreshToken, accessToken, expirationTime } = object;
          const manager = new _StsTokenManager();
          if (refreshToken) {
            _assert(typeof refreshToken === "string", "internal-error", {
              appName
            });
            manager.refreshToken = refreshToken;
          }
          if (accessToken) {
            _assert(typeof accessToken === "string", "internal-error", {
              appName
            });
            manager.accessToken = accessToken;
          }
          if (expirationTime) {
            _assert(typeof expirationTime === "number", "internal-error", {
              appName
            });
            manager.expirationTime = expirationTime;
          }
          return manager;
        }
        toJSON() {
          return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
          };
        }
        _assign(stsTokenManager) {
          this.accessToken = stsTokenManager.accessToken;
          this.refreshToken = stsTokenManager.refreshToken;
          this.expirationTime = stsTokenManager.expirationTime;
        }
        _clone() {
          return Object.assign(new _StsTokenManager(), this.toJSON());
        }
        _performRefresh() {
          return debugFail("not implemented");
        }
      };
      function assertStringOrUndefined(assertion, appName) {
        _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
      }
      var UserImpl = class _UserImpl {
        constructor(_a) {
          var { uid, auth, stsTokenManager } = _a, opt = tslib.__rest(_a, ["uid", "auth", "stsTokenManager"]);
          this.providerId = "firebase";
          this.proactiveRefresh = new ProactiveRefresh(this);
          this.reloadUserInfo = null;
          this.reloadListener = null;
          this.uid = uid;
          this.auth = auth;
          this.stsTokenManager = stsTokenManager;
          this.accessToken = stsTokenManager.accessToken;
          this.displayName = opt.displayName || null;
          this.email = opt.email || null;
          this.emailVerified = opt.emailVerified || false;
          this.phoneNumber = opt.phoneNumber || null;
          this.photoURL = opt.photoURL || null;
          this.isAnonymous = opt.isAnonymous || false;
          this.tenantId = opt.tenantId || null;
          this.providerData = opt.providerData ? [...opt.providerData] : [];
          this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
        }
        async getIdToken(forceRefresh) {
          const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
          _assert(
            accessToken,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          if (this.accessToken !== accessToken) {
            this.accessToken = accessToken;
            await this.auth._persistUserIfCurrent(this);
            this.auth._notifyListenersIfCurrent(this);
          }
          return accessToken;
        }
        getIdTokenResult(forceRefresh) {
          return getIdTokenResult(this, forceRefresh);
        }
        reload() {
          return reload(this);
        }
        _assign(user) {
          if (this === user) {
            return;
          }
          _assert(
            this.uid === user.uid,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          this.email = user.email;
          this.emailVerified = user.emailVerified;
          this.phoneNumber = user.phoneNumber;
          this.isAnonymous = user.isAnonymous;
          this.tenantId = user.tenantId;
          this.providerData = user.providerData.map((userInfo) => Object.assign({}, userInfo));
          this.metadata._copy(user.metadata);
          this.stsTokenManager._assign(user.stsTokenManager);
        }
        _clone(auth) {
          const newUser = new _UserImpl(Object.assign(Object.assign({}, this), { auth, stsTokenManager: this.stsTokenManager._clone() }));
          newUser.metadata._copy(this.metadata);
          return newUser;
        }
        _onReload(callback) {
          _assert(
            !this.reloadListener,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.reloadListener = callback;
          if (this.reloadUserInfo) {
            this._notifyReloadListener(this.reloadUserInfo);
            this.reloadUserInfo = null;
          }
        }
        _notifyReloadListener(userInfo) {
          if (this.reloadListener) {
            this.reloadListener(userInfo);
          } else {
            this.reloadUserInfo = userInfo;
          }
        }
        _startProactiveRefresh() {
          this.proactiveRefresh._start();
        }
        _stopProactiveRefresh() {
          this.proactiveRefresh._stop();
        }
        async _updateTokensIfNecessary(response, reload2 = false) {
          let tokensRefreshed = false;
          if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
            this.stsTokenManager.updateFromServerResponse(response);
            tokensRefreshed = true;
          }
          if (reload2) {
            await _reloadWithoutSaving(this);
          }
          await this.auth._persistUserIfCurrent(this);
          if (tokensRefreshed) {
            this.auth._notifyListenersIfCurrent(this);
          }
        }
        async delete() {
          if (app._isFirebaseServerApp(this.auth.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
          }
          const idToken = await this.getIdToken();
          await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
          this.stsTokenManager.clearRefreshToken();
          return this.auth.signOut();
        }
        toJSON() {
          return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            // Redirect event ID must be maintained in case there is a pending
            // redirect event.
            _redirectEventId: this._redirectEventId
          }, this.metadata.toJSON()), {
            // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
          });
        }
        get refreshToken() {
          return this.stsTokenManager.refreshToken || "";
        }
        static _fromJSON(auth, object) {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
          const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
          const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
          const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
          const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
          const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
          const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
          const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
          const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
          _assert(
            uid && plainObjectTokenManager,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
          _assert(
            typeof uid === "string",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          assertStringOrUndefined(displayName, auth.name);
          assertStringOrUndefined(email, auth.name);
          _assert(
            typeof emailVerified === "boolean",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof isAnonymous === "boolean",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          assertStringOrUndefined(phoneNumber, auth.name);
          assertStringOrUndefined(photoURL, auth.name);
          assertStringOrUndefined(tenantId, auth.name);
          assertStringOrUndefined(_redirectEventId, auth.name);
          assertStringOrUndefined(createdAt, auth.name);
          assertStringOrUndefined(lastLoginAt, auth.name);
          const user = new _UserImpl({
            uid,
            auth,
            email,
            emailVerified,
            displayName,
            isAnonymous,
            photoURL,
            phoneNumber,
            tenantId,
            stsTokenManager,
            createdAt,
            lastLoginAt
          });
          if (providerData && Array.isArray(providerData)) {
            user.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
          }
          if (_redirectEventId) {
            user._redirectEventId = _redirectEventId;
          }
          return user;
        }
        /**
         * Initialize a User from an idToken server response
         * @param auth
         * @param idTokenResponse
         */
        static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
          const stsTokenManager = new StsTokenManager();
          stsTokenManager.updateFromServerResponse(idTokenResponse);
          const user = new _UserImpl({
            uid: idTokenResponse.localId,
            auth,
            stsTokenManager,
            isAnonymous
          });
          await _reloadWithoutSaving(user);
          return user;
        }
        /**
         * Initialize a User from an idToken server response
         * @param auth
         * @param idTokenResponse
         */
        static async _fromGetAccountInfoResponse(auth, response, idToken) {
          const coreAccount = response.users[0];
          _assert(
            coreAccount.localId !== void 0,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
          const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
          const stsTokenManager = new StsTokenManager();
          stsTokenManager.updateFromIdToken(idToken);
          const user = new _UserImpl({
            uid: coreAccount.localId,
            auth,
            stsTokenManager,
            isAnonymous
          });
          const updates = {
            uid: coreAccount.localId,
            displayName: coreAccount.displayName || null,
            photoURL: coreAccount.photoUrl || null,
            email: coreAccount.email || null,
            emailVerified: coreAccount.emailVerified || false,
            phoneNumber: coreAccount.phoneNumber || null,
            tenantId: coreAccount.tenantId || null,
            providerData,
            metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
            isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
          };
          Object.assign(user, updates);
          return user;
        }
      };
      var instanceCache = /* @__PURE__ */ new Map();
      function _getInstance(cls) {
        debugAssert(cls instanceof Function, "Expected a class definition");
        let instance = instanceCache.get(cls);
        if (instance) {
          debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
          return instance;
        }
        instance = new cls();
        instanceCache.set(cls, instance);
        return instance;
      }
      var InMemoryPersistence = class {
        constructor() {
          this.type = "NONE";
          this.storage = {};
        }
        async _isAvailable() {
          return true;
        }
        async _set(key, value) {
          this.storage[key] = value;
        }
        async _get(key) {
          const value = this.storage[key];
          return value === void 0 ? null : value;
        }
        async _remove(key) {
          delete this.storage[key];
        }
        _addListener(_key, _listener) {
          return;
        }
        _removeListener(_key, _listener) {
          return;
        }
      };
      InMemoryPersistence.type = "NONE";
      var inMemoryPersistence = InMemoryPersistence;
      function _persistenceKeyName(key, apiKey, appName) {
        return `${"firebase"}:${key}:${apiKey}:${appName}`;
      }
      var PersistenceUserManager = class _PersistenceUserManager {
        constructor(persistence, auth, userKey) {
          this.persistence = persistence;
          this.auth = auth;
          this.userKey = userKey;
          const { config: config2, name: name3 } = this.auth;
          this.fullUserKey = _persistenceKeyName(this.userKey, config2.apiKey, name3);
          this.fullPersistenceKey = _persistenceKeyName("persistence", config2.apiKey, name3);
          this.boundEventHandler = auth._onStorageEvent.bind(auth);
          this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
        }
        setCurrentUser(user) {
          return this.persistence._set(this.fullUserKey, user.toJSON());
        }
        async getCurrentUser() {
          const blob = await this.persistence._get(this.fullUserKey);
          return blob ? UserImpl._fromJSON(this.auth, blob) : null;
        }
        removeCurrentUser() {
          return this.persistence._remove(this.fullUserKey);
        }
        savePersistenceForRedirect() {
          return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
        }
        async setPersistence(newPersistence) {
          if (this.persistence === newPersistence) {
            return;
          }
          const currentUser = await this.getCurrentUser();
          await this.removeCurrentUser();
          this.persistence = newPersistence;
          if (currentUser) {
            return this.setCurrentUser(currentUser);
          }
        }
        delete() {
          this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
        }
        static async create(auth, persistenceHierarchy, userKey = "authUser") {
          if (!persistenceHierarchy.length) {
            return new _PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
          }
          const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
            if (await persistence._isAvailable()) {
              return persistence;
            }
            return void 0;
          }))).filter((persistence) => persistence);
          let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
          const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
          let userToMigrate = null;
          for (const persistence of persistenceHierarchy) {
            try {
              const blob = await persistence._get(key);
              if (blob) {
                const user = UserImpl._fromJSON(auth, blob);
                if (persistence !== selectedPersistence) {
                  userToMigrate = user;
                }
                selectedPersistence = persistence;
                break;
              }
            } catch (_a) {
            }
          }
          const migrationHierarchy = availablePersistences.filter((p) => p._shouldAllowMigration);
          if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
            return new _PersistenceUserManager(selectedPersistence, auth, userKey);
          }
          selectedPersistence = migrationHierarchy[0];
          if (userToMigrate) {
            await selectedPersistence._set(key, userToMigrate.toJSON());
          }
          await Promise.all(persistenceHierarchy.map(async (persistence) => {
            if (persistence !== selectedPersistence) {
              try {
                await persistence._remove(key);
              } catch (_a) {
              }
            }
          }));
          return new _PersistenceUserManager(selectedPersistence, auth, userKey);
        }
      };
      function _getBrowserName(userAgent) {
        const ua = userAgent.toLowerCase();
        if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
          return "Opera";
        } else if (_isIEMobile(ua)) {
          return "IEMobile";
        } else if (ua.includes("msie") || ua.includes("trident/")) {
          return "IE";
        } else if (ua.includes("edge/")) {
          return "Edge";
        } else if (_isFirefox(ua)) {
          return "Firefox";
        } else if (ua.includes("silk/")) {
          return "Silk";
        } else if (_isBlackBerry(ua)) {
          return "Blackberry";
        } else if (_isWebOS(ua)) {
          return "Webos";
        } else if (_isSafari(ua)) {
          return "Safari";
        } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
          return "Chrome";
        } else if (_isAndroid(ua)) {
          return "Android";
        } else {
          const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
          const matches = userAgent.match(re);
          if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
            return matches[1];
          }
        }
        return "Other";
      }
      function _isFirefox(ua = util.getUA()) {
        return /firefox\//i.test(ua);
      }
      function _isSafari(userAgent = util.getUA()) {
        const ua = userAgent.toLowerCase();
        return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
      }
      function _isChromeIOS(ua = util.getUA()) {
        return /crios\//i.test(ua);
      }
      function _isIEMobile(ua = util.getUA()) {
        return /iemobile/i.test(ua);
      }
      function _isAndroid(ua = util.getUA()) {
        return /android/i.test(ua);
      }
      function _isBlackBerry(ua = util.getUA()) {
        return /blackberry/i.test(ua);
      }
      function _isWebOS(ua = util.getUA()) {
        return /webos/i.test(ua);
      }
      function _isIOS(ua = util.getUA()) {
        return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
      }
      function _isIOS7Or8(ua = util.getUA()) {
        return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
      }
      function _isIOSStandalone(ua = util.getUA()) {
        var _a;
        return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
      }
      function _isIE10() {
        return util.isIE() && document.documentMode === 10;
      }
      function _isMobileBrowser(ua = util.getUA()) {
        return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
      }
      function _getClientVersion(clientPlatform, frameworks = []) {
        let reportedPlatform;
        switch (clientPlatform) {
          case "Browser":
            reportedPlatform = _getBrowserName(util.getUA());
            break;
          case "Worker":
            reportedPlatform = `${_getBrowserName(util.getUA())}-${clientPlatform}`;
            break;
          default:
            reportedPlatform = clientPlatform;
        }
        const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
        return `${reportedPlatform}/${"JsCore"}/${app.SDK_VERSION}/${reportedFrameworks}`;
      }
      var AuthMiddlewareQueue = class {
        constructor(auth) {
          this.auth = auth;
          this.queue = [];
        }
        pushCallback(callback, onAbort) {
          const wrappedCallback = (user) => new Promise((resolve, reject) => {
            try {
              const result = callback(user);
              resolve(result);
            } catch (e) {
              reject(e);
            }
          });
          wrappedCallback.onAbort = onAbort;
          this.queue.push(wrappedCallback);
          const index = this.queue.length - 1;
          return () => {
            this.queue[index] = () => Promise.resolve();
          };
        }
        async runMiddleware(nextUser) {
          if (this.auth.currentUser === nextUser) {
            return;
          }
          const onAbortStack = [];
          try {
            for (const beforeStateCallback of this.queue) {
              await beforeStateCallback(nextUser);
              if (beforeStateCallback.onAbort) {
                onAbortStack.push(beforeStateCallback.onAbort);
              }
            }
          } catch (e) {
            onAbortStack.reverse();
            for (const onAbort of onAbortStack) {
              try {
                onAbort();
              } catch (_) {
              }
            }
            throw this.auth._errorFactory.create("login-blocked", {
              originalMessage: e === null || e === void 0 ? void 0 : e.message
            });
          }
        }
      };
      async function _getPasswordPolicy(auth, request = {}) {
        return _performApiRequest(auth, "GET", "/v2/passwordPolicy", _addTidIfNecessary(auth, request));
      }
      var MINIMUM_MIN_PASSWORD_LENGTH = 6;
      var PasswordPolicyImpl = class {
        constructor(response) {
          var _a, _b, _c, _d;
          const responseOptions = response.customStrengthOptions;
          this.customStrengthOptions = {};
          this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;
          if (responseOptions.maxPasswordLength) {
            this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
          }
          if (responseOptions.containsLowercaseCharacter !== void 0) {
            this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
          }
          if (responseOptions.containsUppercaseCharacter !== void 0) {
            this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
          }
          if (responseOptions.containsNumericCharacter !== void 0) {
            this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
          }
          if (responseOptions.containsNonAlphanumericCharacter !== void 0) {
            this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
          }
          this.enforcementState = response.enforcementState;
          if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") {
            this.enforcementState = "OFF";
          }
          this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join("")) !== null && _c !== void 0 ? _c : "";
          this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
          this.schemaVersion = response.schemaVersion;
        }
        validatePassword(password) {
          var _a, _b, _c, _d, _e, _f;
          const status = {
            isValid: true,
            passwordPolicy: this
          };
          this.validatePasswordLengthOptions(password, status);
          this.validatePasswordCharacterOptions(password, status);
          status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
          status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
          status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
          status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
          status.isValid && (status.isValid = (_e = status.containsNumericCharacter) !== null && _e !== void 0 ? _e : true);
          status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
          return status;
        }
        /**
         * Validates that the password meets the length options for the policy.
         *
         * @param password Password to validate.
         * @param status Validation status.
         */
        validatePasswordLengthOptions(password, status) {
          const minPasswordLength = this.customStrengthOptions.minPasswordLength;
          const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
          if (minPasswordLength) {
            status.meetsMinPasswordLength = password.length >= minPasswordLength;
          }
          if (maxPasswordLength) {
            status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
          }
        }
        /**
         * Validates that the password meets the character options for the policy.
         *
         * @param password Password to validate.
         * @param status Validation status.
         */
        validatePasswordCharacterOptions(password, status) {
          this.updatePasswordCharacterOptionsStatuses(
            status,
            /* containsLowercaseCharacter= */
            false,
            /* containsUppercaseCharacter= */
            false,
            /* containsNumericCharacter= */
            false,
            /* containsNonAlphanumericCharacter= */
            false
          );
          let passwordChar;
          for (let i = 0; i < password.length; i++) {
            passwordChar = password.charAt(i);
            this.updatePasswordCharacterOptionsStatuses(
              status,
              /* containsLowercaseCharacter= */
              passwordChar >= "a" && passwordChar <= "z",
              /* containsUppercaseCharacter= */
              passwordChar >= "A" && passwordChar <= "Z",
              /* containsNumericCharacter= */
              passwordChar >= "0" && passwordChar <= "9",
              /* containsNonAlphanumericCharacter= */
              this.allowedNonAlphanumericCharacters.includes(passwordChar)
            );
          }
        }
        /**
         * Updates the running validation status with the statuses for the character options.
         * Expected to be called each time a character is processed to update each option status
         * based on the current character.
         *
         * @param status Validation status.
         * @param containsLowercaseCharacter Whether the character is a lowercase letter.
         * @param containsUppercaseCharacter Whether the character is an uppercase letter.
         * @param containsNumericCharacter Whether the character is a numeric character.
         * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
         */
        updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
          if (this.customStrengthOptions.containsLowercaseLetter) {
            status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
          }
          if (this.customStrengthOptions.containsUppercaseLetter) {
            status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
          }
          if (this.customStrengthOptions.containsNumericCharacter) {
            status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
          }
          if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
            status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
          }
        }
      };
      var AuthImpl = class {
        constructor(app2, heartbeatServiceProvider, appCheckServiceProvider, config2) {
          this.app = app2;
          this.heartbeatServiceProvider = heartbeatServiceProvider;
          this.appCheckServiceProvider = appCheckServiceProvider;
          this.config = config2;
          this.currentUser = null;
          this.emulatorConfig = null;
          this.operations = Promise.resolve();
          this.authStateSubscription = new Subscription(this);
          this.idTokenSubscription = new Subscription(this);
          this.beforeStateQueue = new AuthMiddlewareQueue(this);
          this.redirectUser = null;
          this.isProactiveRefreshEnabled = false;
          this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
          this._canInitEmulator = true;
          this._isInitialized = false;
          this._deleted = false;
          this._initializationPromise = null;
          this._popupRedirectResolver = null;
          this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
          this._agentRecaptchaConfig = null;
          this._tenantRecaptchaConfigs = {};
          this._projectPasswordPolicy = null;
          this._tenantPasswordPolicies = {};
          this.lastNotifiedUid = void 0;
          this.languageCode = null;
          this.tenantId = null;
          this.settings = { appVerificationDisabledForTesting: false };
          this.frameworks = [];
          this.name = app2.name;
          this.clientVersion = config2.sdkClientVersion;
        }
        _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
          if (popupRedirectResolver) {
            this._popupRedirectResolver = _getInstance(popupRedirectResolver);
          }
          this._initializationPromise = this.queue(async () => {
            var _a, _b;
            if (this._deleted) {
              return;
            }
            this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
            if (this._deleted) {
              return;
            }
            if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch (e) {
              }
            }
            await this.initializeCurrentUser(popupRedirectResolver);
            this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
            if (this._deleted) {
              return;
            }
            this._isInitialized = true;
          });
          return this._initializationPromise;
        }
        /**
         * If the persistence is changed in another window, the user manager will let us know
         */
        async _onStorageEvent() {
          if (this._deleted) {
            return;
          }
          const user = await this.assertedPersistence.getCurrentUser();
          if (!this.currentUser && !user) {
            return;
          }
          if (this.currentUser && user && this.currentUser.uid === user.uid) {
            this._currentUser._assign(user);
            await this.currentUser.getIdToken();
            return;
          }
          await this._updateCurrentUser(
            user,
            /* skipBeforeStateCallbacks */
            true
          );
        }
        async initializeCurrentUserFromIdToken(idToken) {
          try {
            const response = await getAccountInfo(this, { idToken });
            const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
            await this.directlySetCurrentUser(user);
          } catch (err) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
            await this.directlySetCurrentUser(null);
          }
        }
        async initializeCurrentUser(popupRedirectResolver) {
          var _a;
          if (app._isFirebaseServerApp(this.app)) {
            const idToken = this.app.settings.authIdToken;
            if (idToken) {
              return new Promise((resolve) => {
                setTimeout(() => this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
              });
            } else {
              return this.directlySetCurrentUser(null);
            }
          }
          const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
          let futureCurrentUser = previouslyStoredUser;
          let needsTocheckMiddleware = false;
          if (popupRedirectResolver && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
            const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
            const result = await this.tryRedirectSignIn(popupRedirectResolver);
            if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
              futureCurrentUser = result.user;
              needsTocheckMiddleware = true;
            }
          }
          if (!futureCurrentUser) {
            return this.directlySetCurrentUser(null);
          }
          if (!futureCurrentUser._redirectEventId) {
            if (needsTocheckMiddleware) {
              try {
                await this.beforeStateQueue.runMiddleware(futureCurrentUser);
              } catch (e) {
                futureCurrentUser = previouslyStoredUser;
                this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
              }
            }
            if (futureCurrentUser) {
              return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
            } else {
              return this.directlySetCurrentUser(null);
            }
          }
          _assert(
            this._popupRedirectResolver,
            this,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          await this.getOrInitRedirectPersistenceManager();
          if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
            return this.directlySetCurrentUser(futureCurrentUser);
          }
          return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
        }
        async tryRedirectSignIn(redirectResolver) {
          let result = null;
          try {
            result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
          } catch (e) {
            await this._setRedirectUser(null);
          }
          return result;
        }
        async reloadAndSetCurrentUserOrClear(user) {
          try {
            await _reloadWithoutSaving(user);
          } catch (e) {
            if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
              return this.directlySetCurrentUser(null);
            }
          }
          return this.directlySetCurrentUser(user);
        }
        useDeviceLanguage() {
          this.languageCode = _getUserLanguage();
        }
        async _delete() {
          this._deleted = true;
        }
        async updateCurrentUser(userExtern) {
          if (app._isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          const user = userExtern ? util.getModularInstance(userExtern) : null;
          if (user) {
            _assert(
              user.auth.config.apiKey === this.config.apiKey,
              this,
              "invalid-user-token"
              /* AuthErrorCode.INVALID_AUTH */
            );
          }
          return this._updateCurrentUser(user && user._clone(this));
        }
        async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
          if (this._deleted) {
            return;
          }
          if (user) {
            _assert(
              this.tenantId === user.tenantId,
              this,
              "tenant-id-mismatch"
              /* AuthErrorCode.TENANT_ID_MISMATCH */
            );
          }
          if (!skipBeforeStateCallbacks) {
            await this.beforeStateQueue.runMiddleware(user);
          }
          return this.queue(async () => {
            await this.directlySetCurrentUser(user);
            this.notifyAuthListeners();
          });
        }
        async signOut() {
          if (app._isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          await this.beforeStateQueue.runMiddleware(null);
          if (this.redirectPersistenceManager || this._popupRedirectResolver) {
            await this._setRedirectUser(null);
          }
          return this._updateCurrentUser(
            null,
            /* skipBeforeStateCallbacks */
            true
          );
        }
        setPersistence(persistence) {
          if (app._isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          return this.queue(async () => {
            await this.assertedPersistence.setPersistence(_getInstance(persistence));
          });
        }
        _getRecaptchaConfig() {
          if (this.tenantId == null) {
            return this._agentRecaptchaConfig;
          } else {
            return this._tenantRecaptchaConfigs[this.tenantId];
          }
        }
        async validatePassword(password) {
          if (!this._getPasswordPolicyInternal()) {
            await this._updatePasswordPolicy();
          }
          const passwordPolicy = this._getPasswordPolicyInternal();
          if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) {
            return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
          }
          return passwordPolicy.validatePassword(password);
        }
        _getPasswordPolicyInternal() {
          if (this.tenantId === null) {
            return this._projectPasswordPolicy;
          } else {
            return this._tenantPasswordPolicies[this.tenantId];
          }
        }
        async _updatePasswordPolicy() {
          const response = await _getPasswordPolicy(this);
          const passwordPolicy = new PasswordPolicyImpl(response);
          if (this.tenantId === null) {
            this._projectPasswordPolicy = passwordPolicy;
          } else {
            this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
          }
        }
        _getPersistence() {
          return this.assertedPersistence.persistence.type;
        }
        _updateErrorMap(errorMap) {
          this._errorFactory = new util.ErrorFactory("auth", "Firebase", errorMap());
        }
        onAuthStateChanged(nextOrObserver, error, completed) {
          return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
        }
        beforeAuthStateChanged(callback, onAbort) {
          return this.beforeStateQueue.pushCallback(callback, onAbort);
        }
        onIdTokenChanged(nextOrObserver, error, completed) {
          return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
        }
        authStateReady() {
          return new Promise((resolve, reject) => {
            if (this.currentUser) {
              resolve();
            } else {
              const unsubscribe = this.onAuthStateChanged(() => {
                unsubscribe();
                resolve();
              }, reject);
            }
          });
        }
        /**
         * Revokes the given access token. Currently only supports Apple OAuth access tokens.
         */
        async revokeAccessToken(token) {
          if (this.currentUser) {
            const idToken = await this.currentUser.getIdToken();
            const request = {
              providerId: "apple.com",
              tokenType: "ACCESS_TOKEN",
              token,
              idToken
            };
            if (this.tenantId != null) {
              request.tenantId = this.tenantId;
            }
            await revokeToken(this, request);
          }
        }
        toJSON() {
          var _a;
          return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
          };
        }
        async _setRedirectUser(user, popupRedirectResolver) {
          const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
          return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
        }
        async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
          if (!this.redirectPersistenceManager) {
            const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
            _assert(
              resolver,
              this,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            this.redirectPersistenceManager = await PersistenceUserManager.create(
              this,
              [_getInstance(resolver._redirectPersistence)],
              "redirectUser"
              /* KeyName.REDIRECT_USER */
            );
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
          }
          return this.redirectPersistenceManager;
        }
        async _redirectUserForId(id) {
          var _a, _b;
          if (this._isInitialized) {
            await this.queue(async () => {
            });
          }
          if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
            return this._currentUser;
          }
          if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
            return this.redirectUser;
          }
          return null;
        }
        async _persistUserIfCurrent(user) {
          if (user === this.currentUser) {
            return this.queue(async () => this.directlySetCurrentUser(user));
          }
        }
        /** Notifies listeners only if the user is current */
        _notifyListenersIfCurrent(user) {
          if (user === this.currentUser) {
            this.notifyAuthListeners();
          }
        }
        _key() {
          return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
        }
        _startProactiveRefresh() {
          this.isProactiveRefreshEnabled = true;
          if (this.currentUser) {
            this._currentUser._startProactiveRefresh();
          }
        }
        _stopProactiveRefresh() {
          this.isProactiveRefreshEnabled = false;
          if (this.currentUser) {
            this._currentUser._stopProactiveRefresh();
          }
        }
        /** Returns the current user cast as the internal type */
        get _currentUser() {
          return this.currentUser;
        }
        notifyAuthListeners() {
          var _a, _b;
          if (!this._isInitialized) {
            return;
          }
          this.idTokenSubscription.next(this.currentUser);
          const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
          if (this.lastNotifiedUid !== currentUid) {
            this.lastNotifiedUid = currentUid;
            this.authStateSubscription.next(this.currentUser);
          }
        }
        registerStateListener(subscription, nextOrObserver, error, completed) {
          if (this._deleted) {
            return () => {
            };
          }
          const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
          let isUnsubscribed = false;
          const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
          _assert(
            promise,
            this,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          promise.then(() => {
            if (isUnsubscribed) {
              return;
            }
            cb(this.currentUser);
          });
          if (typeof nextOrObserver === "function") {
            const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
            return () => {
              isUnsubscribed = true;
              unsubscribe();
            };
          } else {
            const unsubscribe = subscription.addObserver(nextOrObserver);
            return () => {
              isUnsubscribed = true;
              unsubscribe();
            };
          }
        }
        /**
         * Unprotected (from race conditions) method to set the current user. This
         * should only be called from within a queued callback. This is necessary
         * because the queue shouldn't rely on another queued callback.
         */
        async directlySetCurrentUser(user) {
          if (this.currentUser && this.currentUser !== user) {
            this._currentUser._stopProactiveRefresh();
          }
          if (user && this.isProactiveRefreshEnabled) {
            user._startProactiveRefresh();
          }
          this.currentUser = user;
          if (user) {
            await this.assertedPersistence.setCurrentUser(user);
          } else {
            await this.assertedPersistence.removeCurrentUser();
          }
        }
        queue(action) {
          this.operations = this.operations.then(action, action);
          return this.operations;
        }
        get assertedPersistence() {
          _assert(
            this.persistenceManager,
            this,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.persistenceManager;
        }
        _logFramework(framework) {
          if (!framework || this.frameworks.includes(framework)) {
            return;
          }
          this.frameworks.push(framework);
          this.frameworks.sort();
          this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
        }
        _getFrameworks() {
          return this.frameworks;
        }
        async _getAdditionalHeaders() {
          var _a;
          const headers = {
            [
              "X-Client-Version"
              /* HttpHeader.X_CLIENT_VERSION */
            ]: this.clientVersion
          };
          if (this.app.options.appId) {
            headers[
              "X-Firebase-gmpid"
              /* HttpHeader.X_FIREBASE_GMPID */
            ] = this.app.options.appId;
          }
          const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
            optional: true
          })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
          if (heartbeatsHeader) {
            headers[
              "X-Firebase-Client"
              /* HttpHeader.X_FIREBASE_CLIENT */
            ] = heartbeatsHeader;
          }
          const appCheckToken = await this._getAppCheckToken();
          if (appCheckToken) {
            headers[
              "X-Firebase-AppCheck"
              /* HttpHeader.X_FIREBASE_APP_CHECK */
            ] = appCheckToken;
          }
          return headers;
        }
        async _getAppCheckToken() {
          var _a;
          const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({ optional: true })) === null || _a === void 0 ? void 0 : _a.getToken());
          if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
            _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
          }
          return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
        }
      };
      function _castAuth(auth) {
        return util.getModularInstance(auth);
      }
      var Subscription = class {
        constructor(auth) {
          this.auth = auth;
          this.observer = null;
          this.addObserver = util.createSubscribe((observer) => this.observer = observer);
        }
        get next() {
          _assert(
            this.observer,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.observer.next.bind(this.observer);
        }
      };
      var externalJSProvider = {
        async loadJS() {
          throw new Error("Unable to load external scripts");
        },
        recaptchaV2Script: "",
        recaptchaEnterpriseScript: "",
        gapiScript: ""
      };
      function _setExternalJSProvider(p) {
        externalJSProvider = p;
      }
      function _loadJS(url) {
        return externalJSProvider.loadJS(url);
      }
      function _recaptchaV2ScriptUrl() {
        return externalJSProvider.recaptchaV2Script;
      }
      function _recaptchaEnterpriseScriptUrl() {
        return externalJSProvider.recaptchaEnterpriseScript;
      }
      function _gapiScriptUrl() {
        return externalJSProvider.gapiScript;
      }
      function _generateCallbackName(prefix) {
        return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
      }
      var RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
      var FAKE_TOKEN = "NO_RECAPTCHA";
      var RecaptchaEnterpriseVerifier = class {
        /**
         *
         * @param authExtern - The corresponding Firebase {@link Auth} instance.
         *
         */
        constructor(authExtern) {
          this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
          this.auth = _castAuth(authExtern);
        }
        /**
         * Executes the verification process.
         *
         * @returns A Promise for a token that can be used to assert the validity of a request.
         */
        async verify(action = "verify", forceRefresh = false) {
          async function retrieveSiteKey(auth) {
            if (!forceRefresh) {
              if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
                return auth._agentRecaptchaConfig.siteKey;
              }
              if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== void 0) {
                return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
              }
            }
            return new Promise(async (resolve, reject) => {
              getRecaptchaConfig(auth, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
                /* RecaptchaVersion.ENTERPRISE */
              }).then((response) => {
                if (response.recaptchaKey === void 0) {
                  reject(new Error("recaptcha Enterprise site key undefined"));
                } else {
                  const config2 = new RecaptchaConfig(response);
                  if (auth.tenantId == null) {
                    auth._agentRecaptchaConfig = config2;
                  } else {
                    auth._tenantRecaptchaConfigs[auth.tenantId] = config2;
                  }
                  return resolve(config2.siteKey);
                }
              }).catch((error) => {
                reject(error);
              });
            });
          }
          function retrieveRecaptchaToken(siteKey, resolve, reject) {
            const grecaptcha = window.grecaptcha;
            if (isEnterprise(grecaptcha)) {
              grecaptcha.enterprise.ready(() => {
                grecaptcha.enterprise.execute(siteKey, { action }).then((token) => {
                  resolve(token);
                }).catch(() => {
                  resolve(FAKE_TOKEN);
                });
              });
            } else {
              reject(Error("No reCAPTCHA enterprise script loaded."));
            }
          }
          return new Promise((resolve, reject) => {
            retrieveSiteKey(this.auth).then((siteKey) => {
              if (!forceRefresh && isEnterprise(window.grecaptcha)) {
                retrieveRecaptchaToken(siteKey, resolve, reject);
              } else {
                if (typeof window === "undefined") {
                  reject(new Error("RecaptchaVerifier is only supported in browser"));
                  return;
                }
                let url = _recaptchaEnterpriseScriptUrl();
                if (url.length !== 0) {
                  url += siteKey;
                }
                _loadJS(url).then(() => {
                  retrieveRecaptchaToken(siteKey, resolve, reject);
                }).catch((error) => {
                  reject(error);
                });
              }
            }).catch((error) => {
              reject(error);
            });
          });
        }
      };
      async function injectRecaptchaFields(auth, request, action, captchaResp = false) {
        const verifier = new RecaptchaEnterpriseVerifier(auth);
        let captchaResponse;
        try {
          captchaResponse = await verifier.verify(action);
        } catch (error) {
          captchaResponse = await verifier.verify(action, true);
        }
        const newRequest = Object.assign({}, request);
        if (!captchaResp) {
          Object.assign(newRequest, { captchaResponse });
        } else {
          Object.assign(newRequest, { "captchaResp": captchaResponse });
        }
        Object.assign(newRequest, {
          "clientType": "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        });
        Object.assign(newRequest, {
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        });
        return newRequest;
      }
      async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod) {
        var _a;
        if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled(
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
        )) {
          const requestWithRecaptcha = await injectRecaptchaFields(
            authInstance,
            request,
            actionName,
            actionName === "getOobCode"
            /* RecaptchaActionName.GET_OOB_CODE */
          );
          return actionMethod(authInstance, requestWithRecaptcha);
        } else {
          return actionMethod(authInstance, request).catch(async (error) => {
            if (error.code === `auth/${"missing-recaptcha-token"}`) {
              console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
              const requestWithRecaptcha = await injectRecaptchaFields(
                authInstance,
                request,
                actionName,
                actionName === "getOobCode"
                /* RecaptchaActionName.GET_OOB_CODE */
              );
              return actionMethod(authInstance, requestWithRecaptcha);
            } else {
              return Promise.reject(error);
            }
          });
        }
      }
      async function _initializeRecaptchaConfig(auth) {
        const authInternal = _castAuth(auth);
        const response = await getRecaptchaConfig(authInternal, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        });
        const config2 = new RecaptchaConfig(response);
        if (authInternal.tenantId == null) {
          authInternal._agentRecaptchaConfig = config2;
        } else {
          authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config2;
        }
        if (config2.isProviderEnabled(
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
        )) {
          const verifier = new RecaptchaEnterpriseVerifier(authInternal);
          void verifier.verify();
        }
      }
      function initializeAuth(app$1, deps) {
        const provider = app._getProvider(app$1, "auth");
        if (provider.isInitialized()) {
          const auth2 = provider.getImmediate();
          const initialOptions = provider.getOptions();
          if (util.deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
            return auth2;
          } else {
            _fail(
              auth2,
              "already-initialized"
              /* AuthErrorCode.ALREADY_INITIALIZED */
            );
          }
        }
        const auth = provider.initialize({ options: deps });
        return auth;
      }
      function _initializeAuthInstance(auth, deps) {
        const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
        const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
        if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
          auth._updateErrorMap(deps.errorMap);
        }
        auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
      }
      function connectAuthEmulator(auth, url, options) {
        const authInternal = _castAuth(auth);
        _assert(
          authInternal._canInitEmulator,
          authInternal,
          "emulator-config-failed"
          /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
        );
        _assert(
          /^https?:\/\//.test(url),
          authInternal,
          "invalid-emulator-scheme"
          /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
        );
        const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
        const protocol = extractProtocol(url);
        const { host, port } = extractHostAndPort(url);
        const portStr = port === null ? "" : `:${port}`;
        authInternal.config.emulator = { url: `${protocol}//${host}${portStr}/` };
        authInternal.settings.appVerificationDisabledForTesting = true;
        authInternal.emulatorConfig = Object.freeze({
          host,
          port,
          protocol: protocol.replace(":", ""),
          options: Object.freeze({ disableWarnings })
        });
        if (!disableWarnings) {
          emitEmulatorWarning();
        }
      }
      function extractProtocol(url) {
        const protocolEnd = url.indexOf(":");
        return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
      }
      function extractHostAndPort(url) {
        const protocol = extractProtocol(url);
        const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
        if (!authority) {
          return { host: "", port: null };
        }
        const hostAndPort = authority[2].split("@").pop() || "";
        const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
        if (bracketedIPv6) {
          const host = bracketedIPv6[1];
          return { host, port: parsePort(hostAndPort.substr(host.length + 1)) };
        } else {
          const [host, port] = hostAndPort.split(":");
          return { host, port: parsePort(port) };
        }
      }
      function parsePort(portStr) {
        if (!portStr) {
          return null;
        }
        const port = Number(portStr);
        if (isNaN(port)) {
          return null;
        }
        return port;
      }
      function emitEmulatorWarning() {
        function attachBanner() {
          const el = document.createElement("p");
          const sty = el.style;
          el.innerText = "Running in emulator mode. Do not use with production credentials.";
          sty.position = "fixed";
          sty.width = "100%";
          sty.backgroundColor = "#ffffff";
          sty.border = ".1em solid #000000";
          sty.color = "#b50000";
          sty.bottom = "0px";
          sty.left = "0px";
          sty.margin = "0px";
          sty.zIndex = "10000";
          sty.textAlign = "center";
          el.classList.add("firebase-emulator-warning");
          document.body.appendChild(el);
        }
        if (typeof console !== "undefined" && typeof console.info === "function") {
          console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
        }
        if (typeof window !== "undefined" && typeof document !== "undefined") {
          if (document.readyState === "loading") {
            window.addEventListener("DOMContentLoaded", attachBanner);
          } else {
            attachBanner();
          }
        }
      }
      var AuthCredential = class {
        /** @internal */
        constructor(providerId, signInMethod) {
          this.providerId = providerId;
          this.signInMethod = signInMethod;
        }
        /**
         * Returns a JSON-serializable representation of this object.
         *
         * @returns a JSON-serializable representation of this object.
         */
        toJSON() {
          return debugFail("not implemented");
        }
        /** @internal */
        _getIdTokenResponse(_auth) {
          return debugFail("not implemented");
        }
        /** @internal */
        _linkToIdToken(_auth, _idToken) {
          return debugFail("not implemented");
        }
        /** @internal */
        _getReauthenticationResolver(_auth) {
          return debugFail("not implemented");
        }
      };
      async function resetPassword(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(auth, request));
      }
      async function updateEmailPassword(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
      }
      async function linkEmailPassword(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:signUp", request);
      }
      async function applyActionCode$1(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:update", _addTidIfNecessary(auth, request));
      }
      async function signInWithPassword(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
      }
      async function sendOobCode(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
      }
      async function sendEmailVerification$1(auth, request) {
        return sendOobCode(auth, request);
      }
      async function sendPasswordResetEmail$1(auth, request) {
        return sendOobCode(auth, request);
      }
      async function sendSignInLinkToEmail$1(auth, request) {
        return sendOobCode(auth, request);
      }
      async function verifyAndChangeEmail(auth, request) {
        return sendOobCode(auth, request);
      }
      async function signInWithEmailLink$1(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
      }
      async function signInWithEmailLinkForLinking(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
      }
      var EmailAuthCredential = class _EmailAuthCredential extends AuthCredential {
        /** @internal */
        constructor(_email, _password, signInMethod, _tenantId = null) {
          super("password", signInMethod);
          this._email = _email;
          this._password = _password;
          this._tenantId = _tenantId;
        }
        /** @internal */
        static _fromEmailAndPassword(email, password) {
          return new _EmailAuthCredential(
            email,
            password,
            "password"
            /* SignInMethod.EMAIL_PASSWORD */
          );
        }
        /** @internal */
        static _fromEmailAndCode(email, oobCode, tenantId = null) {
          return new _EmailAuthCredential(email, oobCode, "emailLink", tenantId);
        }
        /** {@inheritdoc AuthCredential.toJSON} */
        toJSON() {
          return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
         *
         * @param json - Either `object` or the stringified representation of the object. When string is
         * provided, `JSON.parse` would be called first.
         *
         * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
            if (obj.signInMethod === "password") {
              return this._fromEmailAndPassword(obj.email, obj.password);
            } else if (obj.signInMethod === "emailLink") {
              return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
            }
          }
          return null;
        }
        /** @internal */
        async _getIdTokenResponse(auth) {
          switch (this.signInMethod) {
            case "password":
              const request = {
                returnSecureToken: true,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
                /* RecaptchaClientType.WEB */
              };
              return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword);
            case "emailLink":
              return signInWithEmailLink$1(auth, {
                email: this._email,
                oobCode: this._password
              });
            default:
              _fail(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        /** @internal */
        async _linkToIdToken(auth, idToken) {
          switch (this.signInMethod) {
            case "password":
              const request = {
                idToken,
                returnSecureToken: true,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
                /* RecaptchaClientType.WEB */
              };
              return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword);
            case "emailLink":
              return signInWithEmailLinkForLinking(auth, {
                idToken,
                email: this._email,
                oobCode: this._password
              });
            default:
              _fail(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          return this._getIdTokenResponse(auth);
        }
      };
      async function signInWithIdp(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
      }
      var IDP_REQUEST_URI$1 = "http://localhost";
      var OAuthCredential = class _OAuthCredential extends AuthCredential {
        constructor() {
          super(...arguments);
          this.pendingToken = null;
        }
        /** @internal */
        static _fromParams(params) {
          const cred = new _OAuthCredential(params.providerId, params.signInMethod);
          if (params.idToken || params.accessToken) {
            if (params.idToken) {
              cred.idToken = params.idToken;
            }
            if (params.accessToken) {
              cred.accessToken = params.accessToken;
            }
            if (params.nonce && !params.pendingToken) {
              cred.nonce = params.nonce;
            }
            if (params.pendingToken) {
              cred.pendingToken = params.pendingToken;
            }
          } else if (params.oauthToken && params.oauthTokenSecret) {
            cred.accessToken = params.oauthToken;
            cred.secret = params.oauthTokenSecret;
          } else {
            _fail(
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
          }
          return cred;
        }
        /** {@inheritdoc AuthCredential.toJSON}  */
        toJSON() {
          return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an
         * {@link  AuthCredential}.
         *
         * @param json - Input can be either Object or the stringified representation of the object.
         * When string is provided, JSON.parse would be called first.
         *
         * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          const { providerId, signInMethod } = obj, rest = tslib.__rest(obj, ["providerId", "signInMethod"]);
          if (!providerId || !signInMethod) {
            return null;
          }
          const cred = new _OAuthCredential(providerId, signInMethod);
          cred.idToken = rest.idToken || void 0;
          cred.accessToken = rest.accessToken || void 0;
          cred.secret = rest.secret;
          cred.nonce = rest.nonce;
          cred.pendingToken = rest.pendingToken || null;
          return cred;
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          const request = this.buildRequest();
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          const request = this.buildRequest();
          request.idToken = idToken;
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          const request = this.buildRequest();
          request.autoCreate = false;
          return signInWithIdp(auth, request);
        }
        buildRequest() {
          const request = {
            requestUri: IDP_REQUEST_URI$1,
            returnSecureToken: true
          };
          if (this.pendingToken) {
            request.pendingToken = this.pendingToken;
          } else {
            const postBody = {};
            if (this.idToken) {
              postBody["id_token"] = this.idToken;
            }
            if (this.accessToken) {
              postBody["access_token"] = this.accessToken;
            }
            if (this.secret) {
              postBody["oauth_token_secret"] = this.secret;
            }
            postBody["providerId"] = this.providerId;
            if (this.nonce && !this.pendingToken) {
              postBody["nonce"] = this.nonce;
            }
            request.postBody = util.querystring(postBody);
          }
          return request;
        }
      };
      async function sendPhoneVerificationCode(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
      }
      async function signInWithPhoneNumber$1(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
      }
      async function linkWithPhoneNumber$1(auth, request) {
        const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
        if (response.temporaryProof) {
          throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
        }
        return response;
      }
      var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
        [
          "USER_NOT_FOUND"
          /* ServerError.USER_NOT_FOUND */
        ]: "user-not-found"
        /* AuthErrorCode.USER_DELETED */
      };
      async function verifyPhoneNumberForExisting(auth, request) {
        const apiRequest = Object.assign(Object.assign({}, request), { operation: "REAUTH" });
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
      }
      var PhoneAuthCredential = class _PhoneAuthCredential extends AuthCredential {
        constructor(params) {
          super(
            "phone",
            "phone"
            /* SignInMethod.PHONE */
          );
          this.params = params;
        }
        /** @internal */
        static _fromVerification(verificationId, verificationCode) {
          return new _PhoneAuthCredential({ verificationId, verificationCode });
        }
        /** @internal */
        static _fromTokenResponse(phoneNumber, temporaryProof) {
          return new _PhoneAuthCredential({ phoneNumber, temporaryProof });
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          return linkWithPhoneNumber$1(auth, Object.assign({ idToken }, this._makeVerificationRequest()));
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
        }
        /** @internal */
        _makeVerificationRequest() {
          const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
          if (temporaryProof && phoneNumber) {
            return { temporaryProof, phoneNumber };
          }
          return {
            sessionInfo: verificationId,
            code: verificationCode
          };
        }
        /** {@inheritdoc AuthCredential.toJSON} */
        toJSON() {
          const obj = {
            providerId: this.providerId
          };
          if (this.params.phoneNumber) {
            obj.phoneNumber = this.params.phoneNumber;
          }
          if (this.params.temporaryProof) {
            obj.temporaryProof = this.params.temporaryProof;
          }
          if (this.params.verificationCode) {
            obj.verificationCode = this.params.verificationCode;
          }
          if (this.params.verificationId) {
            obj.verificationId = this.params.verificationId;
          }
          return obj;
        }
        /** Generates a phone credential based on a plain object or a JSON string. */
        static fromJSON(json) {
          if (typeof json === "string") {
            json = JSON.parse(json);
          }
          const { verificationId, verificationCode, phoneNumber, temporaryProof } = json;
          if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
            return null;
          }
          return new _PhoneAuthCredential({
            verificationId,
            verificationCode,
            phoneNumber,
            temporaryProof
          });
        }
      };
      function parseMode(mode) {
        switch (mode) {
          case "recoverEmail":
            return "RECOVER_EMAIL";
          case "resetPassword":
            return "PASSWORD_RESET";
          case "signIn":
            return "EMAIL_SIGNIN";
          case "verifyEmail":
            return "VERIFY_EMAIL";
          case "verifyAndChangeEmail":
            return "VERIFY_AND_CHANGE_EMAIL";
          case "revertSecondFactorAddition":
            return "REVERT_SECOND_FACTOR_ADDITION";
          default:
            return null;
        }
      }
      function parseDeepLink(url) {
        const link = util.querystringDecode(util.extractQuerystring(url))["link"];
        const doubleDeepLink = link ? util.querystringDecode(util.extractQuerystring(link))["deep_link_id"] : null;
        const iOSDeepLink = util.querystringDecode(util.extractQuerystring(url))["deep_link_id"];
        const iOSDoubleDeepLink = iOSDeepLink ? util.querystringDecode(util.extractQuerystring(iOSDeepLink))["link"] : null;
        return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
      }
      var ActionCodeURL = class _ActionCodeURL {
        /**
         * @param actionLink - The link from which to extract the URL.
         * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
         *
         * @internal
         */
        constructor(actionLink) {
          var _a, _b, _c, _d, _e, _f;
          const searchParams = util.querystringDecode(util.extractQuerystring(actionLink));
          const apiKey = (_a = searchParams[
            "apiKey"
            /* QueryField.API_KEY */
          ]) !== null && _a !== void 0 ? _a : null;
          const code = (_b = searchParams[
            "oobCode"
            /* QueryField.CODE */
          ]) !== null && _b !== void 0 ? _b : null;
          const operation = parseMode((_c = searchParams[
            "mode"
            /* QueryField.MODE */
          ]) !== null && _c !== void 0 ? _c : null);
          _assert(
            apiKey && code && operation,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          this.apiKey = apiKey;
          this.operation = operation;
          this.code = code;
          this.continueUrl = (_d = searchParams[
            "continueUrl"
            /* QueryField.CONTINUE_URL */
          ]) !== null && _d !== void 0 ? _d : null;
          this.languageCode = (_e = searchParams[
            "languageCode"
            /* QueryField.LANGUAGE_CODE */
          ]) !== null && _e !== void 0 ? _e : null;
          this.tenantId = (_f = searchParams[
            "tenantId"
            /* QueryField.TENANT_ID */
          ]) !== null && _f !== void 0 ? _f : null;
        }
        /**
         * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
         * otherwise returns null.
         *
         * @param link  - The email action link string.
         * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
         *
         * @public
         */
        static parseLink(link) {
          const actionLink = parseDeepLink(link);
          try {
            return new _ActionCodeURL(actionLink);
          } catch (_a) {
            return null;
          }
        }
      };
      function parseActionCodeURL(link) {
        return ActionCodeURL.parseLink(link);
      }
      var EmailAuthProvider = class _EmailAuthProvider {
        constructor() {
          this.providerId = _EmailAuthProvider.PROVIDER_ID;
        }
        /**
         * Initialize an {@link AuthCredential} using an email and password.
         *
         * @example
         * ```javascript
         * const authCredential = EmailAuthProvider.credential(email, password);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * ```javascript
         * const userCredential = await signInWithEmailAndPassword(auth, email, password);
         * ```
         *
         * @param email - Email address.
         * @param password - User account password.
         * @returns The auth provider credential.
         */
        static credential(email, password) {
          return EmailAuthCredential._fromEmailAndPassword(email, password);
        }
        /**
         * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
         * email link operation.
         *
         * @example
         * ```javascript
         * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * ```javascript
         * await sendSignInLinkToEmail(auth, email);
         * // Obtain emailLink from user.
         * const userCredential = await signInWithEmailLink(auth, email, emailLink);
         * ```
         *
         * @param auth - The {@link Auth} instance used to verify the link.
         * @param email - Email address.
         * @param emailLink - Sign-in email link.
         * @returns - The auth provider credential.
         */
        static credentialWithLink(email, emailLink) {
          const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
          _assert(
            actionCodeUrl,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
        }
      };
      EmailAuthProvider.PROVIDER_ID = "password";
      EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
      EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
      var FederatedAuthProvider = class {
        /**
         * Constructor for generic OAuth providers.
         *
         * @param providerId - Provider for which credentials should be generated.
         */
        constructor(providerId) {
          this.providerId = providerId;
          this.defaultLanguageCode = null;
          this.customParameters = {};
        }
        /**
         * Set the language gode.
         *
         * @param languageCode - language code
         */
        setDefaultLanguage(languageCode) {
          this.defaultLanguageCode = languageCode;
        }
        /**
         * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
         * operations.
         *
         * @remarks
         * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
         * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
         *
         * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
         */
        setCustomParameters(customOAuthParameters) {
          this.customParameters = customOAuthParameters;
          return this;
        }
        /**
         * Retrieve the current list of {@link CustomParameters}.
         */
        getCustomParameters() {
          return this.customParameters;
        }
      };
      var BaseOAuthProvider = class extends FederatedAuthProvider {
        constructor() {
          super(...arguments);
          this.scopes = [];
        }
        /**
         * Add an OAuth scope to the credential.
         *
         * @param scope - Provider OAuth scope to add.
         */
        addScope(scope) {
          if (!this.scopes.includes(scope)) {
            this.scopes.push(scope);
          }
          return this;
        }
        /**
         * Retrieve the current list of OAuth scopes.
         */
        getScopes() {
          return [...this.scopes];
        }
      };
      var OAuthProvider = class _OAuthProvider extends BaseOAuthProvider {
        /**
         * Creates an {@link OAuthCredential} from a JSON string or a plain object.
         * @param json - A plain object or a JSON string
         */
        static credentialFromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          _assert(
            "providerId" in obj && "signInMethod" in obj,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return OAuthCredential._fromParams(obj);
        }
        /**
         * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
         *
         * @remarks
         * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
         * the raw nonce must match the nonce field in the ID token.
         *
         * @example
         * ```javascript
         * // `googleUser` from the onsuccess Google Sign In callback.
         * // Initialize a generate OAuth provider with a `google.com` providerId.
         * const provider = new OAuthProvider('google.com');
         * const credential = provider.credential({
         *   idToken: googleUser.getAuthResponse().id_token,
         * });
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param params - Either the options object containing the ID token, access token and raw nonce
         * or the ID token string.
         */
        credential(params) {
          return this._credential(Object.assign(Object.assign({}, params), { nonce: params.rawNonce }));
        }
        /** An internal credential method that accepts more permissive options */
        _credential(params) {
          _assert(
            params.idToken || params.accessToken,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), { providerId: this.providerId, signInMethod: this.providerId }));
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
        }
        static oauthCredentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthIdToken, oauthAccessToken, oauthTokenSecret, pendingToken, nonce, providerId } = tokenResponse;
          if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
            return null;
          }
          if (!providerId) {
            return null;
          }
          try {
            return new _OAuthProvider(providerId)._credential({
              idToken: oauthIdToken,
              accessToken: oauthAccessToken,
              nonce,
              pendingToken
            });
          } catch (e) {
            return null;
          }
        }
      };
      var FacebookAuthProvider = class _FacebookAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "facebook.com"
            /* ProviderId.FACEBOOK */
          );
        }
        /**
         * Creates a credential for Facebook.
         *
         * @example
         * ```javascript
         * // `event` from the Facebook auth.authResponseChange callback.
         * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param accessToken - Facebook access token.
         */
        static credential(accessToken) {
          return OAuthCredential._fromParams({
            providerId: _FacebookAuthProvider.PROVIDER_ID,
            signInMethod: _FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _FacebookAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
            return null;
          }
          if (!tokenResponse.oauthAccessToken) {
            return null;
          }
          try {
            return _FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
      FacebookAuthProvider.PROVIDER_ID = "facebook.com";
      var GoogleAuthProvider = class _GoogleAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "google.com"
            /* ProviderId.GOOGLE */
          );
          this.addScope("profile");
        }
        /**
         * Creates a credential for Google. At least one of ID token and access token is required.
         *
         * @example
         * ```javascript
         * // \`googleUser\` from the onsuccess Google Sign In callback.
         * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param idToken - Google ID token.
         * @param accessToken - Google access token.
         */
        static credential(idToken, accessToken) {
          return OAuthCredential._fromParams({
            providerId: _GoogleAuthProvider.PROVIDER_ID,
            signInMethod: _GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
            idToken,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _GoogleAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthIdToken, oauthAccessToken } = tokenResponse;
          if (!oauthIdToken && !oauthAccessToken) {
            return null;
          }
          try {
            return _GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
      GoogleAuthProvider.PROVIDER_ID = "google.com";
      var GithubAuthProvider = class _GithubAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "github.com"
            /* ProviderId.GITHUB */
          );
        }
        /**
         * Creates a credential for GitHub.
         *
         * @param accessToken - GitHub access token.
         */
        static credential(accessToken) {
          return OAuthCredential._fromParams({
            providerId: _GithubAuthProvider.PROVIDER_ID,
            signInMethod: _GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _GithubAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
            return null;
          }
          if (!tokenResponse.oauthAccessToken) {
            return null;
          }
          try {
            return _GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
      GithubAuthProvider.PROVIDER_ID = "github.com";
      var IDP_REQUEST_URI = "http://localhost";
      var SAMLAuthCredential = class _SAMLAuthCredential extends AuthCredential {
        /** @internal */
        constructor(providerId, pendingToken) {
          super(providerId, providerId);
          this.pendingToken = pendingToken;
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          const request = this.buildRequest();
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          const request = this.buildRequest();
          request.idToken = idToken;
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          const request = this.buildRequest();
          request.autoCreate = false;
          return signInWithIdp(auth, request);
        }
        /** {@inheritdoc AuthCredential.toJSON}  */
        toJSON() {
          return {
            signInMethod: this.signInMethod,
            providerId: this.providerId,
            pendingToken: this.pendingToken
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an
         * {@link  AuthCredential}.
         *
         * @param json - Input can be either Object or the stringified representation of the object.
         * When string is provided, JSON.parse would be called first.
         *
         * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          const { providerId, signInMethod, pendingToken } = obj;
          if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
            return null;
          }
          return new _SAMLAuthCredential(providerId, pendingToken);
        }
        /**
         * Helper static method to avoid exposing the constructor to end users.
         *
         * @internal
         */
        static _create(providerId, pendingToken) {
          return new _SAMLAuthCredential(providerId, pendingToken);
        }
        buildRequest() {
          return {
            requestUri: IDP_REQUEST_URI,
            returnSecureToken: true,
            pendingToken: this.pendingToken
          };
        }
      };
      var SAML_PROVIDER_PREFIX = "saml.";
      var SAMLAuthProvider = class _SAMLAuthProvider extends FederatedAuthProvider {
        /**
         * Constructor. The providerId must start with "saml."
         * @param providerId - SAML provider ID.
         */
        constructor(providerId) {
          _assert(
            providerId.startsWith(SAML_PROVIDER_PREFIX),
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          super(providerId);
        }
        /**
         * Generates an {@link AuthCredential} from a {@link UserCredential} after a
         * successful SAML flow completes.
         *
         * @remarks
         *
         * For example, to get an {@link AuthCredential}, you could write the
         * following code:
         *
         * ```js
         * const userCredential = await signInWithPopup(auth, samlProvider);
         * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
         * ```
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
        }
        /**
         * Creates an {@link AuthCredential} from a JSON string or a plain object.
         * @param json - A plain object or a JSON string
         */
        static credentialFromJSON(json) {
          const credential = SAMLAuthCredential.fromJSON(json);
          _assert(
            credential,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return credential;
        }
        static samlCredentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { pendingToken, providerId } = tokenResponse;
          if (!pendingToken || !providerId) {
            return null;
          }
          try {
            return SAMLAuthCredential._create(providerId, pendingToken);
          } catch (e) {
            return null;
          }
        }
      };
      var TwitterAuthProvider = class _TwitterAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "twitter.com"
            /* ProviderId.TWITTER */
          );
        }
        /**
         * Creates a credential for Twitter.
         *
         * @param token - Twitter access token.
         * @param secret - Twitter secret.
         */
        static credential(token, secret) {
          return OAuthCredential._fromParams({
            providerId: _TwitterAuthProvider.PROVIDER_ID,
            signInMethod: _TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
            oauthToken: token,
            oauthTokenSecret: secret
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _TwitterAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
          if (!oauthAccessToken || !oauthTokenSecret) {
            return null;
          }
          try {
            return _TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
          } catch (_a) {
            return null;
          }
        }
      };
      TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
      TwitterAuthProvider.PROVIDER_ID = "twitter.com";
      async function signUp(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
      }
      var UserCredentialImpl = class _UserCredentialImpl {
        constructor(params) {
          this.user = params.user;
          this.providerId = params.providerId;
          this._tokenResponse = params._tokenResponse;
          this.operationType = params.operationType;
        }
        static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
          const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
          const providerId = providerIdForResponse(idTokenResponse);
          const userCred = new _UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: idTokenResponse,
            operationType
          });
          return userCred;
        }
        static async _forOperation(user, operationType, response) {
          await user._updateTokensIfNecessary(
            response,
            /* reload */
            true
          );
          const providerId = providerIdForResponse(response);
          return new _UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: response,
            operationType
          });
        }
      };
      function providerIdForResponse(response) {
        if (response.providerId) {
          return response.providerId;
        }
        if ("phoneNumber" in response) {
          return "phone";
        }
        return null;
      }
      async function signInAnonymously(auth) {
        var _a;
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        await authInternal._initializationPromise;
        if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
          return new UserCredentialImpl({
            user: authInternal.currentUser,
            providerId: null,
            operationType: "signIn"
            /* OperationType.SIGN_IN */
          });
        }
        const response = await signUp(authInternal, {
          returnSecureToken: true
        });
        const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
        await authInternal._updateCurrentUser(userCredential.user);
        return userCredential;
      }
      var MultiFactorError = class _MultiFactorError extends util.FirebaseError {
        constructor(auth, error, operationType, user) {
          var _a;
          super(error.code, error.message);
          this.operationType = operationType;
          this.user = user;
          Object.setPrototypeOf(this, _MultiFactorError.prototype);
          this.customData = {
            appName: auth.name,
            tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
            _serverResponse: error.customData._serverResponse,
            operationType
          };
        }
        static _fromErrorAndOperation(auth, error, operationType, user) {
          return new _MultiFactorError(auth, error, operationType, user);
        }
      };
      function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
        const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
        return idTokenProvider.catch((error) => {
          if (error.code === `auth/${"multi-factor-auth-required"}`) {
            throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
          }
          throw error;
        });
      }
      function providerDataAsNames(providerData) {
        return new Set(providerData.map(({ providerId }) => providerId).filter((pid2) => !!pid2));
      }
      async function unlink(user, providerId) {
        const userInternal = util.getModularInstance(user);
        await _assertLinkedStatus(true, userInternal, providerId);
        const { providerUserInfo } = await deleteLinkedAccounts(userInternal.auth, {
          idToken: await userInternal.getIdToken(),
          deleteProvider: [providerId]
        });
        const providersLeft = providerDataAsNames(providerUserInfo || []);
        userInternal.providerData = userInternal.providerData.filter((pd) => providersLeft.has(pd.providerId));
        if (!providersLeft.has(
          "phone"
          /* ProviderId.PHONE */
        )) {
          userInternal.phoneNumber = null;
        }
        await userInternal.auth._persistUserIfCurrent(userInternal);
        return userInternal;
      }
      async function _link$1(user, credential, bypassAuthState = false) {
        const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
        return UserCredentialImpl._forOperation(user, "link", response);
      }
      async function _assertLinkedStatus(expected, user, provider) {
        await _reloadWithoutSaving(user);
        const providerIds = providerDataAsNames(user.providerData);
        const code = expected === false ? "provider-already-linked" : "no-such-provider";
        _assert(providerIds.has(provider) === expected, user.auth, code);
      }
      async function _reauthenticate(user, credential, bypassAuthState = false) {
        const { auth } = user;
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const operationType = "reauthenticate";
        try {
          const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
          _assert(
            response.idToken,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const parsed = _parseToken(response.idToken);
          _assert(
            parsed,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const { sub: localId } = parsed;
          _assert(
            user.uid === localId,
            auth,
            "user-mismatch"
            /* AuthErrorCode.USER_MISMATCH */
          );
          return UserCredentialImpl._forOperation(user, operationType, response);
        } catch (e) {
          if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
            _fail(
              auth,
              "user-mismatch"
              /* AuthErrorCode.USER_MISMATCH */
            );
          }
          throw e;
        }
      }
      async function _signInWithCredential(auth, credential, bypassAuthState = false) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const operationType = "signIn";
        const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
        const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
        if (!bypassAuthState) {
          await auth._updateCurrentUser(userCredential.user);
        }
        return userCredential;
      }
      async function signInWithCredential(auth, credential) {
        return _signInWithCredential(_castAuth(auth), credential);
      }
      async function linkWithCredential(user, credential) {
        const userInternal = util.getModularInstance(user);
        await _assertLinkedStatus(false, userInternal, credential.providerId);
        return _link$1(userInternal, credential);
      }
      async function reauthenticateWithCredential(user, credential) {
        return _reauthenticate(util.getModularInstance(user), credential);
      }
      async function signInWithCustomToken$1(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(auth, request));
      }
      async function signInWithCustomToken(auth, customToken) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        const response = await signInWithCustomToken$1(authInternal, {
          token: customToken,
          returnSecureToken: true
        });
        const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
        await authInternal._updateCurrentUser(cred.user);
        return cred;
      }
      var MultiFactorInfoImpl = class {
        constructor(factorId, response) {
          this.factorId = factorId;
          this.uid = response.mfaEnrollmentId;
          this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
          this.displayName = response.displayName;
        }
        static _fromServerResponse(auth, enrollment) {
          if ("phoneInfo" in enrollment) {
            return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
          } else if ("totpInfo" in enrollment) {
            return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
          }
          return _fail(
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
        }
      };
      var PhoneMultiFactorInfoImpl = class _PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl {
        constructor(response) {
          super("phone", response);
          this.phoneNumber = response.phoneInfo;
        }
        static _fromServerResponse(_auth, enrollment) {
          return new _PhoneMultiFactorInfoImpl(enrollment);
        }
      };
      var TotpMultiFactorInfoImpl = class _TotpMultiFactorInfoImpl extends MultiFactorInfoImpl {
        constructor(response) {
          super("totp", response);
        }
        static _fromServerResponse(_auth, enrollment) {
          return new _TotpMultiFactorInfoImpl(enrollment);
        }
      };
      function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
        var _a;
        _assert(
          ((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0,
          auth,
          "invalid-continue-uri"
          /* AuthErrorCode.INVALID_CONTINUE_URI */
        );
        _assert(
          typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0,
          auth,
          "invalid-dynamic-link-domain"
          /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
        );
        request.continueUrl = actionCodeSettings.url;
        request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
        request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
        if (actionCodeSettings.iOS) {
          _assert(
            actionCodeSettings.iOS.bundleId.length > 0,
            auth,
            "missing-ios-bundle-id"
            /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
          );
          request.iOSBundleId = actionCodeSettings.iOS.bundleId;
        }
        if (actionCodeSettings.android) {
          _assert(
            actionCodeSettings.android.packageName.length > 0,
            auth,
            "missing-android-pkg-name"
            /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
          );
          request.androidInstallApp = actionCodeSettings.android.installApp;
          request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
          request.androidPackageName = actionCodeSettings.android.packageName;
        }
      }
      async function recachePasswordPolicy(auth) {
        const authInternal = _castAuth(auth);
        if (authInternal._getPasswordPolicyInternal()) {
          await authInternal._updatePasswordPolicy();
        }
      }
      async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
        const authInternal = _castAuth(auth);
        const request = {
          requestType: "PASSWORD_RESET",
          email,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
        }
        await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1);
      }
      async function confirmPasswordReset(auth, oobCode, newPassword) {
        await resetPassword(util.getModularInstance(auth), {
          oobCode,
          newPassword
        }).catch(async (error) => {
          if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
            void recachePasswordPolicy(auth);
          }
          throw error;
        });
      }
      async function applyActionCode(auth, oobCode) {
        await applyActionCode$1(util.getModularInstance(auth), { oobCode });
      }
      async function checkActionCode(auth, oobCode) {
        const authModular = util.getModularInstance(auth);
        const response = await resetPassword(authModular, { oobCode });
        const operation = response.requestType;
        _assert(
          operation,
          authModular,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        switch (operation) {
          case "EMAIL_SIGNIN":
            break;
          case "VERIFY_AND_CHANGE_EMAIL":
            _assert(
              response.newEmail,
              authModular,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
            break;
          case "REVERT_SECOND_FACTOR_ADDITION":
            _assert(
              response.mfaInfo,
              authModular,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
          // fall through
          default:
            _assert(
              response.email,
              authModular,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
        }
        let multiFactorInfo = null;
        if (response.mfaInfo) {
          multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
        }
        return {
          data: {
            email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.newEmail : response.email) || null,
            previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.email : response.newEmail) || null,
            multiFactorInfo
          },
          operation
        };
      }
      async function verifyPasswordResetCode(auth, code) {
        const { data } = await checkActionCode(util.getModularInstance(auth), code);
        return data.email;
      }
      async function createUserWithEmailAndPassword(auth, email, password) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        const request = {
          returnSecureToken: true,
          email,
          password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp);
        const response = await signUpResponse.catch((error) => {
          if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
            void recachePasswordPolicy(auth);
          }
          throw error;
        });
        const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
        await authInternal._updateCurrentUser(userCredential.user);
        return userCredential;
      }
      function signInWithEmailAndPassword(auth, email, password) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        return signInWithCredential(util.getModularInstance(auth), EmailAuthProvider.credential(email, password)).catch(async (error) => {
          if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
            void recachePasswordPolicy(auth);
          }
          throw error;
        });
      }
      async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
        const authInternal = _castAuth(auth);
        const request = {
          requestType: "EMAIL_SIGNIN",
          email,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        function setActionCodeSettings(request2, actionCodeSettings2) {
          _assert(
            actionCodeSettings2.handleCodeInApp,
            authInternal,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          if (actionCodeSettings2) {
            _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
          }
        }
        setActionCodeSettings(request, actionCodeSettings);
        await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1);
      }
      function isSignInWithEmailLink(auth, emailLink) {
        const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
        return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
      }
      async function signInWithEmailLink(auth, email, emailLink) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authModular = util.getModularInstance(auth);
        const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
        _assert(
          credential._tenantId === (authModular.tenantId || null),
          authModular,
          "tenant-id-mismatch"
          /* AuthErrorCode.TENANT_ID_MISMATCH */
        );
        return signInWithCredential(authModular, credential);
      }
      async function createAuthUri(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(auth, request));
      }
      async function fetchSignInMethodsForEmail(auth, email) {
        const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
        const request = {
          identifier: email,
          continueUri
        };
        const { signinMethods } = await createAuthUri(util.getModularInstance(auth), request);
        return signinMethods || [];
      }
      async function sendEmailVerification(user, actionCodeSettings) {
        const userInternal = util.getModularInstance(user);
        const idToken = await user.getIdToken();
        const request = {
          requestType: "VERIFY_EMAIL",
          idToken
        };
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
        }
        const { email } = await sendEmailVerification$1(userInternal.auth, request);
        if (email !== user.email) {
          await user.reload();
        }
      }
      async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
        const userInternal = util.getModularInstance(user);
        const idToken = await user.getIdToken();
        const request = {
          requestType: "VERIFY_AND_CHANGE_EMAIL",
          idToken,
          newEmail
        };
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
        }
        const { email } = await verifyAndChangeEmail(userInternal.auth, request);
        if (email !== user.email) {
          await user.reload();
        }
      }
      async function updateProfile$1(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
      }
      async function updateProfile(user, { displayName, photoURL: photoUrl }) {
        if (displayName === void 0 && photoUrl === void 0) {
          return;
        }
        const userInternal = util.getModularInstance(user);
        const idToken = await userInternal.getIdToken();
        const profileRequest = {
          idToken,
          displayName,
          photoUrl,
          returnSecureToken: true
        };
        const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
        userInternal.displayName = response.displayName || null;
        userInternal.photoURL = response.photoUrl || null;
        const passwordProvider = userInternal.providerData.find(
          ({ providerId }) => providerId === "password"
          /* ProviderId.PASSWORD */
        );
        if (passwordProvider) {
          passwordProvider.displayName = userInternal.displayName;
          passwordProvider.photoURL = userInternal.photoURL;
        }
        await userInternal._updateTokensIfNecessary(response);
      }
      function updateEmail(user, newEmail) {
        const userInternal = util.getModularInstance(user);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
        }
        return updateEmailOrPassword(userInternal, newEmail, null);
      }
      function updatePassword(user, newPassword) {
        return updateEmailOrPassword(util.getModularInstance(user), null, newPassword);
      }
      async function updateEmailOrPassword(user, email, password) {
        const { auth } = user;
        const idToken = await user.getIdToken();
        const request = {
          idToken,
          returnSecureToken: true
        };
        if (email) {
          request.email = email;
        }
        if (password) {
          request.password = password;
        }
        const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
        await user._updateTokensIfNecessary(
          response,
          /* reload */
          true
        );
      }
      function _fromIdTokenResponse(idTokenResponse) {
        var _a, _b;
        if (!idTokenResponse) {
          return null;
        }
        const { providerId } = idTokenResponse;
        const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
        const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse";
        if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
          const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
          if (signInProvider) {
            const filteredProviderId = signInProvider !== "anonymous" && signInProvider !== "custom" ? signInProvider : null;
            return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
          }
        }
        if (!providerId) {
          return null;
        }
        switch (providerId) {
          case "facebook.com":
            return new FacebookAdditionalUserInfo(isNewUser, profile);
          case "github.com":
            return new GithubAdditionalUserInfo(isNewUser, profile);
          case "google.com":
            return new GoogleAdditionalUserInfo(isNewUser, profile);
          case "twitter.com":
            return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
          case "custom":
          case "anonymous":
            return new GenericAdditionalUserInfo(isNewUser, null);
          default:
            return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
        }
      }
      var GenericAdditionalUserInfo = class {
        constructor(isNewUser, providerId, profile = {}) {
          this.isNewUser = isNewUser;
          this.providerId = providerId;
          this.profile = profile;
        }
      };
      var FederatedAdditionalUserInfoWithUsername = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, providerId, profile, username) {
          super(isNewUser, providerId, profile);
          this.username = username;
        }
      };
      var FacebookAdditionalUserInfo = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, profile) {
          super(isNewUser, "facebook.com", profile);
        }
      };
      var GithubAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
        constructor(isNewUser, profile) {
          super(isNewUser, "github.com", profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
        }
      };
      var GoogleAdditionalUserInfo = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, profile) {
          super(isNewUser, "google.com", profile);
        }
      };
      var TwitterAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
        constructor(isNewUser, profile, screenName) {
          super(isNewUser, "twitter.com", profile, screenName);
        }
      };
      function getAdditionalUserInfo(userCredential) {
        const { user, _tokenResponse } = userCredential;
        if (user.isAnonymous && !_tokenResponse) {
          return {
            providerId: null,
            isNewUser: false,
            profile: null
          };
        }
        return _fromIdTokenResponse(_tokenResponse);
      }
      function setPersistence(auth, persistence) {
        return util.getModularInstance(auth).setPersistence(persistence);
      }
      function initializeRecaptchaConfig(auth) {
        return _initializeRecaptchaConfig(auth);
      }
      async function validatePassword(auth, password) {
        const authInternal = _castAuth(auth);
        return authInternal.validatePassword(password);
      }
      function onIdTokenChanged(auth, nextOrObserver, error, completed) {
        return util.getModularInstance(auth).onIdTokenChanged(nextOrObserver, error, completed);
      }
      function beforeAuthStateChanged(auth, callback, onAbort) {
        return util.getModularInstance(auth).beforeAuthStateChanged(callback, onAbort);
      }
      function onAuthStateChanged(auth, nextOrObserver, error, completed) {
        return util.getModularInstance(auth).onAuthStateChanged(nextOrObserver, error, completed);
      }
      function useDeviceLanguage(auth) {
        util.getModularInstance(auth).useDeviceLanguage();
      }
      function updateCurrentUser(auth, user) {
        return util.getModularInstance(auth).updateCurrentUser(user);
      }
      function signOut(auth) {
        return util.getModularInstance(auth).signOut();
      }
      function revokeAccessToken(auth, token) {
        const authInternal = _castAuth(auth);
        return authInternal.revokeAccessToken(token);
      }
      async function deleteUser(user) {
        return util.getModularInstance(user).delete();
      }
      var MultiFactorSessionImpl = class _MultiFactorSessionImpl {
        constructor(type, credential, user) {
          this.type = type;
          this.credential = credential;
          this.user = user;
        }
        static _fromIdtoken(idToken, user) {
          return new _MultiFactorSessionImpl("enroll", idToken, user);
        }
        static _fromMfaPendingCredential(mfaPendingCredential) {
          return new _MultiFactorSessionImpl("signin", mfaPendingCredential);
        }
        toJSON() {
          const key = this.type === "enroll" ? "idToken" : "pendingCredential";
          return {
            multiFactorSession: {
              [key]: this.credential
            }
          };
        }
        static fromJSON(obj) {
          var _a, _b;
          if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
            if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
              return _MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
            } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
              return _MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
            }
          }
          return null;
        }
      };
      var MultiFactorResolverImpl = class _MultiFactorResolverImpl {
        constructor(session, hints, signInResolver) {
          this.session = session;
          this.hints = hints;
          this.signInResolver = signInResolver;
        }
        /** @internal */
        static _fromError(authExtern, error) {
          const auth = _castAuth(authExtern);
          const serverResponse = error.customData._serverResponse;
          const hints = (serverResponse.mfaInfo || []).map((enrollment) => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
          _assert(
            serverResponse.mfaPendingCredential,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
          return new _MultiFactorResolverImpl(session, hints, async (assertion) => {
            const mfaResponse = await assertion._process(auth, session);
            delete serverResponse.mfaInfo;
            delete serverResponse.mfaPendingCredential;
            const idTokenResponse = Object.assign(Object.assign({}, serverResponse), { idToken: mfaResponse.idToken, refreshToken: mfaResponse.refreshToken });
            switch (error.operationType) {
              case "signIn":
                const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
                await auth._updateCurrentUser(userCredential.user);
                return userCredential;
              case "reauthenticate":
                _assert(
                  error.user,
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                );
                return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
              default:
                _fail(
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                );
            }
          });
        }
        async resolveSignIn(assertionExtern) {
          const assertion = assertionExtern;
          return this.signInResolver(assertion);
        }
      };
      function getMultiFactorResolver(auth, error) {
        var _a;
        const authModular = util.getModularInstance(auth);
        const errorInternal = error;
        _assert(
          error.customData.operationType,
          authModular,
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
        _assert(
          (_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential,
          authModular,
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
        return MultiFactorResolverImpl._fromError(authModular, errorInternal);
      }
      function startEnrollPhoneMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
      }
      function finalizeEnrollPhoneMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
      }
      function startEnrollTotpMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
      }
      function finalizeEnrollTotpMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
      }
      function withdrawMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(auth, request));
      }
      var MultiFactorUserImpl = class _MultiFactorUserImpl {
        constructor(user) {
          this.user = user;
          this.enrolledFactors = [];
          user._onReload((userInfo) => {
            if (userInfo.mfaInfo) {
              this.enrolledFactors = userInfo.mfaInfo.map((enrollment) => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
            }
          });
        }
        static _fromUser(user) {
          return new _MultiFactorUserImpl(user);
        }
        async getSession() {
          return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user);
        }
        async enroll(assertionExtern, displayName) {
          const assertion = assertionExtern;
          const session = await this.getSession();
          const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
          await this.user._updateTokensIfNecessary(finalizeMfaResponse);
          return this.user.reload();
        }
        async unenroll(infoOrUid) {
          const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
          const idToken = await this.user.getIdToken();
          try {
            const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
              idToken,
              mfaEnrollmentId
            }));
            this.enrolledFactors = this.enrolledFactors.filter(({ uid }) => uid !== mfaEnrollmentId);
            await this.user._updateTokensIfNecessary(idTokenResponse);
            await this.user.reload();
          } catch (e) {
            throw e;
          }
        }
      };
      var multiFactorUserCache = /* @__PURE__ */ new WeakMap();
      function multiFactor(user) {
        const userModular = util.getModularInstance(user);
        if (!multiFactorUserCache.has(userModular)) {
          multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
        }
        return multiFactorUserCache.get(userModular);
      }
      var STORAGE_AVAILABLE_KEY = "__sak";
      var BrowserPersistenceClass = class {
        constructor(storageRetriever, type) {
          this.storageRetriever = storageRetriever;
          this.type = type;
        }
        _isAvailable() {
          try {
            if (!this.storage) {
              return Promise.resolve(false);
            }
            this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
            this.storage.removeItem(STORAGE_AVAILABLE_KEY);
            return Promise.resolve(true);
          } catch (_a) {
            return Promise.resolve(false);
          }
        }
        _set(key, value) {
          this.storage.setItem(key, JSON.stringify(value));
          return Promise.resolve();
        }
        _get(key) {
          const json = this.storage.getItem(key);
          return Promise.resolve(json ? JSON.parse(json) : null);
        }
        _remove(key) {
          this.storage.removeItem(key);
          return Promise.resolve();
        }
        get storage() {
          return this.storageRetriever();
        }
      };
      var _POLLING_INTERVAL_MS$1 = 1e3;
      var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
      var BrowserLocalPersistence = class extends BrowserPersistenceClass {
        constructor() {
          super(
            () => window.localStorage,
            "LOCAL"
            /* PersistenceType.LOCAL */
          );
          this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
          this.listeners = {};
          this.localCache = {};
          this.pollTimer = null;
          this.fallbackToPolling = _isMobileBrowser();
          this._shouldAllowMigration = true;
        }
        forAllChangedKeys(cb) {
          for (const key of Object.keys(this.listeners)) {
            const newValue = this.storage.getItem(key);
            const oldValue = this.localCache[key];
            if (newValue !== oldValue) {
              cb(key, oldValue, newValue);
            }
          }
        }
        onStorageEvent(event, poll = false) {
          if (!event.key) {
            this.forAllChangedKeys((key2, _oldValue, newValue) => {
              this.notifyListeners(key2, newValue);
            });
            return;
          }
          const key = event.key;
          if (poll) {
            this.detachListener();
          } else {
            this.stopPolling();
          }
          const triggerListeners = () => {
            const storedValue2 = this.storage.getItem(key);
            if (!poll && this.localCache[key] === storedValue2) {
              return;
            }
            this.notifyListeners(key, storedValue2);
          };
          const storedValue = this.storage.getItem(key);
          if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
            setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
          } else {
            triggerListeners();
          }
        }
        notifyListeners(key, value) {
          this.localCache[key] = value;
          const listeners2 = this.listeners[key];
          if (listeners2) {
            for (const listener of Array.from(listeners2)) {
              listener(value ? JSON.parse(value) : value);
            }
          }
        }
        startPolling() {
          this.stopPolling();
          this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((key, oldValue, newValue) => {
              this.onStorageEvent(
                new StorageEvent("storage", {
                  key,
                  oldValue,
                  newValue
                }),
                /* poll */
                true
              );
            });
          }, _POLLING_INTERVAL_MS$1);
        }
        stopPolling() {
          if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
          }
        }
        attachListener() {
          window.addEventListener("storage", this.boundEventHandler);
        }
        detachListener() {
          window.removeEventListener("storage", this.boundEventHandler);
        }
        _addListener(key, listener) {
          if (Object.keys(this.listeners).length === 0) {
            if (this.fallbackToPolling) {
              this.startPolling();
            } else {
              this.attachListener();
            }
          }
          if (!this.listeners[key]) {
            this.listeners[key] = /* @__PURE__ */ new Set();
            this.localCache[key] = this.storage.getItem(key);
          }
          this.listeners[key].add(listener);
        }
        _removeListener(key, listener) {
          if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) {
              delete this.listeners[key];
            }
          }
          if (Object.keys(this.listeners).length === 0) {
            this.detachListener();
            this.stopPolling();
          }
        }
        // Update local cache on base operations:
        async _set(key, value) {
          await super._set(key, value);
          this.localCache[key] = JSON.stringify(value);
        }
        async _get(key) {
          const value = await super._get(key);
          this.localCache[key] = JSON.stringify(value);
          return value;
        }
        async _remove(key) {
          await super._remove(key);
          delete this.localCache[key];
        }
      };
      BrowserLocalPersistence.type = "LOCAL";
      var browserLocalPersistence = BrowserLocalPersistence;
      var BrowserSessionPersistence = class extends BrowserPersistenceClass {
        constructor() {
          super(
            () => window.sessionStorage,
            "SESSION"
            /* PersistenceType.SESSION */
          );
        }
        _addListener(_key, _listener) {
          return;
        }
        _removeListener(_key, _listener) {
          return;
        }
      };
      BrowserSessionPersistence.type = "SESSION";
      var browserSessionPersistence = BrowserSessionPersistence;
      function _allSettled(promises) {
        return Promise.all(promises.map(async (promise) => {
          try {
            const value = await promise;
            return {
              fulfilled: true,
              value
            };
          } catch (reason) {
            return {
              fulfilled: false,
              reason
            };
          }
        }));
      }
      var Receiver = class _Receiver {
        constructor(eventTarget) {
          this.eventTarget = eventTarget;
          this.handlersMap = {};
          this.boundEventHandler = this.handleEvent.bind(this);
        }
        /**
         * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
         *
         * @param eventTarget - An event target (such as window or self) through which the underlying
         * messages will be received.
         */
        static _getInstance(eventTarget) {
          const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
          if (existingInstance) {
            return existingInstance;
          }
          const newInstance = new _Receiver(eventTarget);
          this.receivers.push(newInstance);
          return newInstance;
        }
        isListeningto(eventTarget) {
          return this.eventTarget === eventTarget;
        }
        /**
         * Fans out a MessageEvent to the appropriate listeners.
         *
         * @remarks
         * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
         * finished processing.
         *
         * @param event - The MessageEvent.
         *
         */
        async handleEvent(event) {
          const messageEvent = event;
          const { eventId, eventType, data } = messageEvent.data;
          const handlers = this.handlersMap[eventType];
          if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
            return;
          }
          messageEvent.ports[0].postMessage({
            status: "ack",
            eventId,
            eventType
          });
          const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
          const response = await _allSettled(promises);
          messageEvent.ports[0].postMessage({
            status: "done",
            eventId,
            eventType,
            response
          });
        }
        /**
         * Subscribe an event handler for a particular event.
         *
         * @param eventType - Event name to subscribe to.
         * @param eventHandler - The event handler which should receive the events.
         *
         */
        _subscribe(eventType, eventHandler) {
          if (Object.keys(this.handlersMap).length === 0) {
            this.eventTarget.addEventListener("message", this.boundEventHandler);
          }
          if (!this.handlersMap[eventType]) {
            this.handlersMap[eventType] = /* @__PURE__ */ new Set();
          }
          this.handlersMap[eventType].add(eventHandler);
        }
        /**
         * Unsubscribe an event handler from a particular event.
         *
         * @param eventType - Event name to unsubscribe from.
         * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
         *
         */
        _unsubscribe(eventType, eventHandler) {
          if (this.handlersMap[eventType] && eventHandler) {
            this.handlersMap[eventType].delete(eventHandler);
          }
          if (!eventHandler || this.handlersMap[eventType].size === 0) {
            delete this.handlersMap[eventType];
          }
          if (Object.keys(this.handlersMap).length === 0) {
            this.eventTarget.removeEventListener("message", this.boundEventHandler);
          }
        }
      };
      Receiver.receivers = [];
      function _generateEventId(prefix = "", digits = 10) {
        let random = "";
        for (let i = 0; i < digits; i++) {
          random += Math.floor(Math.random() * 10);
        }
        return prefix + random;
      }
      var Sender = class {
        constructor(target) {
          this.target = target;
          this.handlers = /* @__PURE__ */ new Set();
        }
        /**
         * Unsubscribe the handler and remove it from our tracking Set.
         *
         * @param handler - The handler to unsubscribe.
         */
        removeMessageHandler(handler) {
          if (handler.messageChannel) {
            handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
            handler.messageChannel.port1.close();
          }
          this.handlers.delete(handler);
        }
        /**
         * Send a message to the Receiver located at {@link target}.
         *
         * @remarks
         * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
         * receiver has had a chance to fully process the event.
         *
         * @param eventType - Type of event to send.
         * @param data - The payload of the event.
         * @param timeout - Timeout for waiting on an ACK from the receiver.
         *
         * @returns An array of settled promises from all the handlers that were listening on the receiver.
         */
        async _send(eventType, data, timeout = 50) {
          const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
          if (!messageChannel) {
            throw new Error(
              "connection_unavailable"
              /* _MessageError.CONNECTION_UNAVAILABLE */
            );
          }
          let completionTimer;
          let handler;
          return new Promise((resolve, reject) => {
            const eventId = _generateEventId("", 20);
            messageChannel.port1.start();
            const ackTimer = setTimeout(() => {
              reject(new Error(
                "unsupported_event"
                /* _MessageError.UNSUPPORTED_EVENT */
              ));
            }, timeout);
            handler = {
              messageChannel,
              onMessage(event) {
                const messageEvent = event;
                if (messageEvent.data.eventId !== eventId) {
                  return;
                }
                switch (messageEvent.data.status) {
                  case "ack":
                    clearTimeout(ackTimer);
                    completionTimer = setTimeout(
                      () => {
                        reject(new Error(
                          "timeout"
                          /* _MessageError.TIMEOUT */
                        ));
                      },
                      3e3
                      /* _TimeoutDuration.COMPLETION */
                    );
                    break;
                  case "done":
                    clearTimeout(completionTimer);
                    resolve(messageEvent.data.response);
                    break;
                  default:
                    clearTimeout(ackTimer);
                    clearTimeout(completionTimer);
                    reject(new Error(
                      "invalid_response"
                      /* _MessageError.INVALID_RESPONSE */
                    ));
                    break;
                }
              }
            };
            this.handlers.add(handler);
            messageChannel.port1.addEventListener("message", handler.onMessage);
            this.target.postMessage({
              eventType,
              eventId,
              data
            }, [messageChannel.port2]);
          }).finally(() => {
            if (handler) {
              this.removeMessageHandler(handler);
            }
          });
        }
      };
      function _window() {
        return window;
      }
      function _setWindowLocation(url) {
        _window().location.href = url;
      }
      function _isWorker() {
        return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
      }
      async function _getActiveServiceWorker() {
        if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
          return null;
        }
        try {
          const registration = await navigator.serviceWorker.ready;
          return registration.active;
        } catch (_a) {
          return null;
        }
      }
      function _getServiceWorkerController() {
        var _a;
        return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
      }
      function _getWorkerGlobalScope() {
        return _isWorker() ? self : null;
      }
      var DB_NAME = "firebaseLocalStorageDb";
      var DB_VERSION = 1;
      var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
      var DB_DATA_KEYPATH = "fbase_key";
      var DBPromise = class {
        constructor(request) {
          this.request = request;
        }
        toPromise() {
          return new Promise((resolve, reject) => {
            this.request.addEventListener("success", () => {
              resolve(this.request.result);
            });
            this.request.addEventListener("error", () => {
              reject(this.request.error);
            });
          });
        }
      };
      function getObjectStore(db, isReadWrite) {
        return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
      }
      function _deleteDatabase() {
        const request = indexedDB.deleteDatabase(DB_NAME);
        return new DBPromise(request).toPromise();
      }
      function _openDatabase() {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        return new Promise((resolve, reject) => {
          request.addEventListener("error", () => {
            reject(request.error);
          });
          request.addEventListener("upgradeneeded", () => {
            const db = request.result;
            try {
              db.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
            } catch (e) {
              reject(e);
            }
          });
          request.addEventListener("success", async () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
              db.close();
              await _deleteDatabase();
              resolve(await _openDatabase());
            } else {
              resolve(db);
            }
          });
        });
      }
      async function _putObject(db, key, value) {
        const request = getObjectStore(db, true).put({
          [DB_DATA_KEYPATH]: key,
          value
        });
        return new DBPromise(request).toPromise();
      }
      async function getObject(db, key) {
        const request = getObjectStore(db, false).get(key);
        const data = await new DBPromise(request).toPromise();
        return data === void 0 ? null : data.value;
      }
      function _deleteObject(db, key) {
        const request = getObjectStore(db, true).delete(key);
        return new DBPromise(request).toPromise();
      }
      var _POLLING_INTERVAL_MS = 800;
      var _TRANSACTION_RETRY_COUNT = 3;
      var IndexedDBLocalPersistence = class {
        constructor() {
          this.type = "LOCAL";
          this._shouldAllowMigration = true;
          this.listeners = {};
          this.localCache = {};
          this.pollTimer = null;
          this.pendingWrites = 0;
          this.receiver = null;
          this.sender = null;
          this.serviceWorkerReceiverAvailable = false;
          this.activeServiceWorker = null;
          this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
          }, () => {
          });
        }
        async _openDb() {
          if (this.db) {
            return this.db;
          }
          this.db = await _openDatabase();
          return this.db;
        }
        async _withRetries(op) {
          let numAttempts = 0;
          while (true) {
            try {
              const db = await this._openDb();
              return await op(db);
            } catch (e) {
              if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
                throw e;
              }
              if (this.db) {
                this.db.close();
                this.db = void 0;
              }
            }
          }
        }
        /**
         * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
         * postMessage interface to send these events to the worker ourselves.
         */
        async initializeServiceWorkerMessaging() {
          return _isWorker() ? this.initializeReceiver() : this.initializeSender();
        }
        /**
         * As the worker we should listen to events from the main window.
         */
        async initializeReceiver() {
          this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
          this.receiver._subscribe("keyChanged", async (_origin, data) => {
            const keys = await this._poll();
            return {
              keyProcessed: keys.includes(data.key)
            };
          });
          this.receiver._subscribe("ping", async (_origin, _data) => {
            return [
              "keyChanged"
              /* _EventType.KEY_CHANGED */
            ];
          });
        }
        /**
         * As the main window, we should let the worker know when keys change (set and remove).
         *
         * @remarks
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
         * may not resolve.
         */
        async initializeSender() {
          var _a, _b;
          this.activeServiceWorker = await _getActiveServiceWorker();
          if (!this.activeServiceWorker) {
            return;
          }
          this.sender = new Sender(this.activeServiceWorker);
          const results = await this.sender._send(
            "ping",
            {},
            800
            /* _TimeoutDuration.LONG_ACK */
          );
          if (!results) {
            return;
          }
          if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes(
            "keyChanged"
            /* _EventType.KEY_CHANGED */
          ))) {
            this.serviceWorkerReceiverAvailable = true;
          }
        }
        /**
         * Let the worker know about a changed key, the exact key doesn't technically matter since the
         * worker will just trigger a full sync anyway.
         *
         * @remarks
         * For now, we only support one service worker per page.
         *
         * @param key - Storage key which changed.
         */
        async notifyServiceWorker(key) {
          if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
            return;
          }
          try {
            await this.sender._send(
              "keyChanged",
              { key },
              // Use long timeout if receiver has previously responded to a ping from us.
              this.serviceWorkerReceiverAvailable ? 800 : 50
              /* _TimeoutDuration.ACK */
            );
          } catch (_a) {
          }
        }
        async _isAvailable() {
          try {
            if (!indexedDB) {
              return false;
            }
            const db = await _openDatabase();
            await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
            await _deleteObject(db, STORAGE_AVAILABLE_KEY);
            return true;
          } catch (_a) {
          }
          return false;
        }
        async _withPendingWrite(write) {
          this.pendingWrites++;
          try {
            await write();
          } finally {
            this.pendingWrites--;
          }
        }
        async _set(key, value) {
          return this._withPendingWrite(async () => {
            await this._withRetries((db) => _putObject(db, key, value));
            this.localCache[key] = value;
            return this.notifyServiceWorker(key);
          });
        }
        async _get(key) {
          const obj = await this._withRetries((db) => getObject(db, key));
          this.localCache[key] = obj;
          return obj;
        }
        async _remove(key) {
          return this._withPendingWrite(async () => {
            await this._withRetries((db) => _deleteObject(db, key));
            delete this.localCache[key];
            return this.notifyServiceWorker(key);
          });
        }
        async _poll() {
          const result = await this._withRetries((db) => {
            const getAllRequest = getObjectStore(db, false).getAll();
            return new DBPromise(getAllRequest).toPromise();
          });
          if (!result) {
            return [];
          }
          if (this.pendingWrites !== 0) {
            return [];
          }
          const keys = [];
          const keysInResult = /* @__PURE__ */ new Set();
          if (result.length !== 0) {
            for (const { fbase_key: key, value } of result) {
              keysInResult.add(key);
              if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
                this.notifyListeners(key, value);
                keys.push(key);
              }
            }
          }
          for (const localKey of Object.keys(this.localCache)) {
            if (this.localCache[localKey] && !keysInResult.has(localKey)) {
              this.notifyListeners(localKey, null);
              keys.push(localKey);
            }
          }
          return keys;
        }
        notifyListeners(key, newValue) {
          this.localCache[key] = newValue;
          const listeners2 = this.listeners[key];
          if (listeners2) {
            for (const listener of Array.from(listeners2)) {
              listener(newValue);
            }
          }
        }
        startPolling() {
          this.stopPolling();
          this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
        }
        stopPolling() {
          if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
          }
        }
        _addListener(key, listener) {
          if (Object.keys(this.listeners).length === 0) {
            this.startPolling();
          }
          if (!this.listeners[key]) {
            this.listeners[key] = /* @__PURE__ */ new Set();
            void this._get(key);
          }
          this.listeners[key].add(listener);
        }
        _removeListener(key, listener) {
          if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) {
              delete this.listeners[key];
            }
          }
          if (Object.keys(this.listeners).length === 0) {
            this.stopPolling();
          }
        }
      };
      IndexedDBLocalPersistence.type = "LOCAL";
      var indexedDBLocalPersistence = IndexedDBLocalPersistence;
      function startSignInPhoneMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
      }
      function finalizeSignInPhoneMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
      }
      function finalizeSignInTotpMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
      }
      var _SOLVE_TIME_MS = 500;
      var _EXPIRATION_TIME_MS = 6e4;
      var _WIDGET_ID_START = 1e12;
      var MockReCaptcha = class {
        constructor(auth) {
          this.auth = auth;
          this.counter = _WIDGET_ID_START;
          this._widgets = /* @__PURE__ */ new Map();
        }
        render(container, parameters) {
          const id = this.counter;
          this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
          this.counter++;
          return id;
        }
        reset(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());
          this._widgets.delete(id);
        }
        getResponse(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
        }
        async execute(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
          return "";
        }
      };
      var MockWidget = class {
        constructor(containerOrId, appName, params) {
          this.params = params;
          this.timerId = null;
          this.deleted = false;
          this.responseToken = null;
          this.clickHandler = () => {
            this.execute();
          };
          const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
          _assert(container, "argument-error", { appName });
          this.container = container;
          this.isVisible = this.params.size !== "invisible";
          if (this.isVisible) {
            this.execute();
          } else {
            this.container.addEventListener("click", this.clickHandler);
          }
        }
        getResponse() {
          this.checkIfDeleted();
          return this.responseToken;
        }
        delete() {
          this.checkIfDeleted();
          this.deleted = true;
          if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
          }
          this.container.removeEventListener("click", this.clickHandler);
        }
        execute() {
          this.checkIfDeleted();
          if (this.timerId) {
            return;
          }
          this.timerId = window.setTimeout(() => {
            this.responseToken = generateRandomAlphaNumericString(50);
            const { callback, "expired-callback": expiredCallback } = this.params;
            if (callback) {
              try {
                callback(this.responseToken);
              } catch (e) {
              }
            }
            this.timerId = window.setTimeout(() => {
              this.timerId = null;
              this.responseToken = null;
              if (expiredCallback) {
                try {
                  expiredCallback();
                } catch (e) {
                }
              }
              if (this.isVisible) {
                this.execute();
              }
            }, _EXPIRATION_TIME_MS);
          }, _SOLVE_TIME_MS);
        }
        checkIfDeleted() {
          if (this.deleted) {
            throw new Error("reCAPTCHA mock was already deleted!");
          }
        }
      };
      function generateRandomAlphaNumericString(len) {
        const chars = [];
        const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < len; i++) {
          chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
        }
        return chars.join("");
      }
      var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
      var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
      var ReCaptchaLoaderImpl = class {
        constructor() {
          var _a;
          this.hostLanguage = "";
          this.counter = 0;
          this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
        }
        load(auth, hl = "") {
          _assert(
            isHostLanguageValid(hl),
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
            return Promise.resolve(_window().grecaptcha);
          }
          return new Promise((resolve, reject) => {
            const networkTimeout = _window().setTimeout(() => {
              reject(_createError(
                auth,
                "network-request-failed"
                /* AuthErrorCode.NETWORK_REQUEST_FAILED */
              ));
            }, NETWORK_TIMEOUT_DELAY.get());
            _window()[_JSLOAD_CALLBACK] = () => {
              _window().clearTimeout(networkTimeout);
              delete _window()[_JSLOAD_CALLBACK];
              const recaptcha = _window().grecaptcha;
              if (!recaptcha || !isV2(recaptcha)) {
                reject(_createError(
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                ));
                return;
              }
              const render = recaptcha.render;
              recaptcha.render = (container, params) => {
                const widgetId = render(container, params);
                this.counter++;
                return widgetId;
              };
              this.hostLanguage = hl;
              resolve(recaptcha);
            };
            const url = `${_recaptchaV2ScriptUrl()}?${util.querystring({
              onload: _JSLOAD_CALLBACK,
              render: "explicit",
              hl
            })}`;
            _loadJS(url).catch(() => {
              clearTimeout(networkTimeout);
              reject(_createError(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              ));
            });
          });
        }
        clearedOneInstance() {
          this.counter--;
        }
        shouldResolveImmediately(hl) {
          var _a;
          return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
        }
      };
      function isHostLanguageValid(hl) {
        return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
      }
      var MockReCaptchaLoaderImpl = class {
        async load(auth) {
          return new MockReCaptcha(auth);
        }
        clearedOneInstance() {
        }
      };
      var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
      var DEFAULT_PARAMS = {
        theme: "light",
        type: "image"
      };
      var RecaptchaVerifier = class {
        /**
         * @param authExtern - The corresponding Firebase {@link Auth} instance.
         *
         * @param containerOrId - The reCAPTCHA container parameter.
         *
         * @remarks
         * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
         * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
         * an element ID. The corresponding element must also must be in the DOM at the time of
         * initialization.
         *
         * @param parameters - The optional reCAPTCHA parameters.
         *
         * @remarks
         * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
         * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
         * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
         * 'invisible'.
         */
        constructor(authExtern, containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS)) {
          this.parameters = parameters;
          this.type = RECAPTCHA_VERIFIER_TYPE;
          this.destroyed = false;
          this.widgetId = null;
          this.tokenChangeListeners = /* @__PURE__ */ new Set();
          this.renderPromise = null;
          this.recaptcha = null;
          this.auth = _castAuth(authExtern);
          this.isInvisible = this.parameters.size === "invisible";
          _assert(
            typeof document !== "undefined",
            this.auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          );
          const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
          _assert(
            container,
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          this.container = container;
          this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
          this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
          this.validateStartingState();
        }
        /**
         * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
         *
         * @returns A Promise for the reCAPTCHA token.
         */
        async verify() {
          this.assertNotDestroyed();
          const id = await this.render();
          const recaptcha = this.getAssertedRecaptcha();
          const response = recaptcha.getResponse(id);
          if (response) {
            return response;
          }
          return new Promise((resolve) => {
            const tokenChange = (token) => {
              if (!token) {
                return;
              }
              this.tokenChangeListeners.delete(tokenChange);
              resolve(token);
            };
            this.tokenChangeListeners.add(tokenChange);
            if (this.isInvisible) {
              recaptcha.execute(id);
            }
          });
        }
        /**
         * Renders the reCAPTCHA widget on the page.
         *
         * @returns A Promise that resolves with the reCAPTCHA widget ID.
         */
        render() {
          try {
            this.assertNotDestroyed();
          } catch (e) {
            return Promise.reject(e);
          }
          if (this.renderPromise) {
            return this.renderPromise;
          }
          this.renderPromise = this.makeRenderPromise().catch((e) => {
            this.renderPromise = null;
            throw e;
          });
          return this.renderPromise;
        }
        /** @internal */
        _reset() {
          this.assertNotDestroyed();
          if (this.widgetId !== null) {
            this.getAssertedRecaptcha().reset(this.widgetId);
          }
        }
        /**
         * Clears the reCAPTCHA widget from the page and destroys the instance.
         */
        clear() {
          this.assertNotDestroyed();
          this.destroyed = true;
          this._recaptchaLoader.clearedOneInstance();
          if (!this.isInvisible) {
            this.container.childNodes.forEach((node) => {
              this.container.removeChild(node);
            });
          }
        }
        validateStartingState() {
          _assert(
            !this.parameters.sitekey,
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          _assert(
            this.isInvisible || !this.container.hasChildNodes(),
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          _assert(
            typeof document !== "undefined",
            this.auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          );
        }
        makeTokenCallback(existing) {
          return (token) => {
            this.tokenChangeListeners.forEach((listener) => listener(token));
            if (typeof existing === "function") {
              existing(token);
            } else if (typeof existing === "string") {
              const globalFunc = _window()[existing];
              if (typeof globalFunc === "function") {
                globalFunc(token);
              }
            }
          };
        }
        assertNotDestroyed() {
          _assert(
            !this.destroyed,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
        }
        async makeRenderPromise() {
          await this.init();
          if (!this.widgetId) {
            let container = this.container;
            if (!this.isInvisible) {
              const guaranteedEmpty = document.createElement("div");
              container.appendChild(guaranteedEmpty);
              container = guaranteedEmpty;
            }
            this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
          }
          return this.widgetId;
        }
        async init() {
          _assert(
            _isHttpOrHttps() && !_isWorker(),
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          await domReady();
          this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
          const siteKey = await getRecaptchaParams(this.auth);
          _assert(
            siteKey,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.parameters.sitekey = siteKey;
        }
        getAssertedRecaptcha() {
          _assert(
            this.recaptcha,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.recaptcha;
        }
      };
      function domReady() {
        let resolver = null;
        return new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve();
            return;
          }
          resolver = () => resolve();
          window.addEventListener("load", resolver);
        }).catch((e) => {
          if (resolver) {
            window.removeEventListener("load", resolver);
          }
          throw e;
        });
      }
      var ConfirmationResultImpl = class {
        constructor(verificationId, onConfirmation) {
          this.verificationId = verificationId;
          this.onConfirmation = onConfirmation;
        }
        confirm(verificationCode) {
          const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
          return this.onConfirmation(authCredential);
        }
      };
      async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, util.getModularInstance(appVerifier));
        return new ConfirmationResultImpl(verificationId, (cred) => signInWithCredential(authInternal, cred));
      }
      async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
        const userInternal = util.getModularInstance(user);
        await _assertLinkedStatus(
          false,
          userInternal,
          "phone"
          /* ProviderId.PHONE */
        );
        const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, util.getModularInstance(appVerifier));
        return new ConfirmationResultImpl(verificationId, (cred) => linkWithCredential(userInternal, cred));
      }
      async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
        const userInternal = util.getModularInstance(user);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
        }
        const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, util.getModularInstance(appVerifier));
        return new ConfirmationResultImpl(verificationId, (cred) => reauthenticateWithCredential(userInternal, cred));
      }
      async function _verifyPhoneNumber(auth, options, verifier) {
        var _a;
        const recaptchaToken = await verifier.verify();
        try {
          _assert(
            typeof recaptchaToken === "string",
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          _assert(
            verifier.type === RECAPTCHA_VERIFIER_TYPE,
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          let phoneInfoOptions;
          if (typeof options === "string") {
            phoneInfoOptions = {
              phoneNumber: options
            };
          } else {
            phoneInfoOptions = options;
          }
          if ("session" in phoneInfoOptions) {
            const session = phoneInfoOptions.session;
            if ("phoneNumber" in phoneInfoOptions) {
              _assert(
                session.type === "enroll",
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
              const response = await startEnrollPhoneMfa(auth, {
                idToken: session.credential,
                phoneEnrollmentInfo: {
                  phoneNumber: phoneInfoOptions.phoneNumber,
                  recaptchaToken
                }
              });
              return response.phoneSessionInfo.sessionInfo;
            } else {
              _assert(
                session.type === "signin",
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
              const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
              _assert(
                mfaEnrollmentId,
                auth,
                "missing-multi-factor-info"
                /* AuthErrorCode.MISSING_MFA_INFO */
              );
              const response = await startSignInPhoneMfa(auth, {
                mfaPendingCredential: session.credential,
                mfaEnrollmentId,
                phoneSignInInfo: {
                  recaptchaToken
                }
              });
              return response.phoneResponseInfo.sessionInfo;
            }
          } else {
            const { sessionInfo } = await sendPhoneVerificationCode(auth, {
              phoneNumber: phoneInfoOptions.phoneNumber,
              recaptchaToken
            });
            return sessionInfo;
          }
        } finally {
          verifier._reset();
        }
      }
      async function updatePhoneNumber(user, credential) {
        const userInternal = util.getModularInstance(user);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
        }
        await _link$1(userInternal, credential);
      }
      var PhoneAuthProvider = class _PhoneAuthProvider {
        /**
         * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
         *
         */
        constructor(auth) {
          this.providerId = _PhoneAuthProvider.PROVIDER_ID;
          this.auth = _castAuth(auth);
        }
        /**
         *
         * Starts a phone number authentication flow by sending a verification code to the given phone
         * number.
         *
         * @example
         * ```javascript
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * An alternative flow is provided using the `signInWithPhoneNumber` method.
         * ```javascript
         * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const userCredential = confirmationResult.confirm(verificationCode);
         * ```
         *
         * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
         * E.164 format (e.g. +16505550101).
         * @param applicationVerifier - For abuse prevention, this method also requires a
         * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
         * {@link RecaptchaVerifier}.
         *
         * @returns A Promise for a verification ID that can be passed to
         * {@link PhoneAuthProvider.credential} to identify this flow..
         */
        verifyPhoneNumber(phoneOptions, applicationVerifier) {
          return _verifyPhoneNumber(this.auth, phoneOptions, util.getModularInstance(applicationVerifier));
        }
        /**
         * Creates a phone auth credential, given the verification ID from
         * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
         * mobile device.
         *
         * @example
         * ```javascript
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
         * const userCredential = signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * An alternative flow is provided using the `signInWithPhoneNumber` method.
         * ```javascript
         * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const userCredential = await confirmationResult.confirm(verificationCode);
         * ```
         *
         * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
         * @param verificationCode - The verification code sent to the user's mobile device.
         *
         * @returns The auth provider credential.
         */
        static credential(verificationId, verificationCode) {
          return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
        }
        /**
         * Generates an {@link AuthCredential} from a {@link UserCredential}.
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          const credential = userCredential;
          return _PhoneAuthProvider.credentialFromTaggedObject(credential);
        }
        /**
         * Returns an {@link AuthCredential} when passed an error.
         *
         * @remarks
         *
         * This method works for errors like
         * `auth/account-exists-with-different-credentials`. This is useful for
         * recovering when attempting to set a user's phone number but the number
         * in question is already tied to another account. For example, the following
         * code tries to update the current user's phone number, and if that
         * fails, links the user with the account associated with that number:
         *
         * ```js
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = await provider.verifyPhoneNumber(number, verifier);
         * try {
         *   const code = ''; // Prompt the user for the verification code
         *   await updatePhoneNumber(
         *       auth.currentUser,
         *       PhoneAuthProvider.credential(verificationId, code));
         * } catch (e) {
         *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
         *     const cred = PhoneAuthProvider.credentialFromError(e);
         *     await linkWithCredential(auth.currentUser, cred);
         *   }
         * }
         *
         * // At this point, auth.currentUser.phoneNumber === number.
         * ```
         *
         * @param error - The error to generate a credential from.
         */
        static credentialFromError(error) {
          return _PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { phoneNumber, temporaryProof } = tokenResponse;
          if (phoneNumber && temporaryProof) {
            return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
          }
          return null;
        }
      };
      PhoneAuthProvider.PROVIDER_ID = "phone";
      PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
      function _withDefaultResolver(auth, resolverOverride) {
        if (resolverOverride) {
          return _getInstance(resolverOverride);
        }
        _assert(
          auth._popupRedirectResolver,
          auth,
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
        return auth._popupRedirectResolver;
      }
      var IdpCredential = class extends AuthCredential {
        constructor(params) {
          super(
            "custom",
            "custom"
            /* ProviderId.CUSTOM */
          );
          this.params = params;
        }
        _getIdTokenResponse(auth) {
          return signInWithIdp(auth, this._buildIdpRequest());
        }
        _linkToIdToken(auth, idToken) {
          return signInWithIdp(auth, this._buildIdpRequest(idToken));
        }
        _getReauthenticationResolver(auth) {
          return signInWithIdp(auth, this._buildIdpRequest());
        }
        _buildIdpRequest(idToken) {
          const request = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: true,
            returnIdpCredential: true
          };
          if (idToken) {
            request.idToken = idToken;
          }
          return request;
        }
      };
      function _signIn(params) {
        return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
      }
      function _reauth(params) {
        const { auth, user } = params;
        _assert(
          user,
          auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
      }
      async function _link(params) {
        const { auth, user } = params;
        _assert(
          user,
          auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        return _link$1(user, new IdpCredential(params), params.bypassAuthState);
      }
      var AbstractPopupRedirectOperation = class {
        constructor(auth, filter, resolver, user, bypassAuthState = false) {
          this.auth = auth;
          this.resolver = resolver;
          this.user = user;
          this.bypassAuthState = bypassAuthState;
          this.pendingPromise = null;
          this.eventManager = null;
          this.filter = Array.isArray(filter) ? filter : [filter];
        }
        execute() {
          return new Promise(async (resolve, reject) => {
            this.pendingPromise = { resolve, reject };
            try {
              this.eventManager = await this.resolver._initialize(this.auth);
              await this.onExecution();
              this.eventManager.registerConsumer(this);
            } catch (e) {
              this.reject(e);
            }
          });
        }
        async onAuthEvent(event) {
          const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
          if (error) {
            this.reject(error);
            return;
          }
          const params = {
            auth: this.auth,
            requestUri: urlResponse,
            sessionId,
            tenantId: tenantId || void 0,
            postBody: postBody || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
          };
          try {
            this.resolve(await this.getIdpTask(type)(params));
          } catch (e) {
            this.reject(e);
          }
        }
        onError(error) {
          this.reject(error);
        }
        getIdpTask(type) {
          switch (type) {
            case "signInViaPopup":
            case "signInViaRedirect":
              return _signIn;
            case "linkViaPopup":
            case "linkViaRedirect":
              return _link;
            case "reauthViaPopup":
            case "reauthViaRedirect":
              return _reauth;
            default:
              _fail(
                this.auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        resolve(cred) {
          debugAssert(this.pendingPromise, "Pending promise was never set");
          this.pendingPromise.resolve(cred);
          this.unregisterAndCleanUp();
        }
        reject(error) {
          debugAssert(this.pendingPromise, "Pending promise was never set");
          this.pendingPromise.reject(error);
          this.unregisterAndCleanUp();
        }
        unregisterAndCleanUp() {
          if (this.eventManager) {
            this.eventManager.unregisterConsumer(this);
          }
          this.pendingPromise = null;
          this.cleanUp();
        }
      };
      var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
      async function signInWithPopup(auth, provider, resolver) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_createError(
            auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          ));
        }
        const authInternal = _castAuth(auth);
        _assertInstanceOf(auth, provider, FederatedAuthProvider);
        const resolverInternal = _withDefaultResolver(authInternal, resolver);
        const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
        return action.executeNotNull();
      }
      async function reauthenticateWithPopup(user, provider, resolver) {
        const userInternal = util.getModularInstance(user);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_createError(
            userInternal.auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          ));
        }
        _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
        const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
        const action = new PopupOperation(userInternal.auth, "reauthViaPopup", provider, resolverInternal, userInternal);
        return action.executeNotNull();
      }
      async function linkWithPopup(user, provider, resolver) {
        const userInternal = util.getModularInstance(user);
        _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
        const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
        const action = new PopupOperation(userInternal.auth, "linkViaPopup", provider, resolverInternal, userInternal);
        return action.executeNotNull();
      }
      var PopupOperation = class _PopupOperation extends AbstractPopupRedirectOperation {
        constructor(auth, filter, provider, resolver, user) {
          super(auth, filter, resolver, user);
          this.provider = provider;
          this.authWindow = null;
          this.pollId = null;
          if (_PopupOperation.currentPopupAction) {
            _PopupOperation.currentPopupAction.cancel();
          }
          _PopupOperation.currentPopupAction = this;
        }
        async executeNotNull() {
          const result = await this.execute();
          _assert(
            result,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return result;
        }
        async onExecution() {
          debugAssert(this.filter.length === 1, "Popup operations only handle one event");
          const eventId = _generateEventId();
          this.authWindow = await this.resolver._openPopup(
            this.auth,
            this.provider,
            this.filter[0],
            // There's always one, see constructor
            eventId
          );
          this.authWindow.associatedEvent = eventId;
          this.resolver._originValidation(this.auth).catch((e) => {
            this.reject(e);
          });
          this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
            if (!isSupported) {
              this.reject(_createError(
                this.auth,
                "web-storage-unsupported"
                /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
              ));
            }
          });
          this.pollUserCancellation();
        }
        get eventId() {
          var _a;
          return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
        }
        cancel() {
          this.reject(_createError(
            this.auth,
            "cancelled-popup-request"
            /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
          ));
        }
        cleanUp() {
          if (this.authWindow) {
            this.authWindow.close();
          }
          if (this.pollId) {
            window.clearTimeout(this.pollId);
          }
          this.authWindow = null;
          this.pollId = null;
          _PopupOperation.currentPopupAction = null;
        }
        pollUserCancellation() {
          const poll = () => {
            var _a, _b;
            if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
              this.pollId = window.setTimeout(
                () => {
                  this.pollId = null;
                  this.reject(_createError(
                    this.auth,
                    "popup-closed-by-user"
                    /* AuthErrorCode.POPUP_CLOSED_BY_USER */
                  ));
                },
                8e3
                /* _Timeout.AUTH_EVENT */
              );
              return;
            }
            this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
          };
          poll();
        }
      };
      PopupOperation.currentPopupAction = null;
      var PENDING_REDIRECT_KEY = "pendingRedirect";
      var redirectOutcomeMap = /* @__PURE__ */ new Map();
      var RedirectAction = class extends AbstractPopupRedirectOperation {
        constructor(auth, resolver, bypassAuthState = false) {
          super(auth, [
            "signInViaRedirect",
            "linkViaRedirect",
            "reauthViaRedirect",
            "unknown"
            /* AuthEventType.UNKNOWN */
          ], resolver, void 0, bypassAuthState);
          this.eventId = null;
        }
        /**
         * Override the execute function; if we already have a redirect result, then
         * just return it.
         */
        async execute() {
          let readyOutcome = redirectOutcomeMap.get(this.auth._key());
          if (!readyOutcome) {
            try {
              const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
              const result = hasPendingRedirect ? await super.execute() : null;
              readyOutcome = () => Promise.resolve(result);
            } catch (e) {
              readyOutcome = () => Promise.reject(e);
            }
            redirectOutcomeMap.set(this.auth._key(), readyOutcome);
          }
          if (!this.bypassAuthState) {
            redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
          }
          return readyOutcome();
        }
        async onAuthEvent(event) {
          if (event.type === "signInViaRedirect") {
            return super.onAuthEvent(event);
          } else if (event.type === "unknown") {
            this.resolve(null);
            return;
          }
          if (event.eventId) {
            const user = await this.auth._redirectUserForId(event.eventId);
            if (user) {
              this.user = user;
              return super.onAuthEvent(event);
            } else {
              this.resolve(null);
            }
          }
        }
        async onExecution() {
        }
        cleanUp() {
        }
      };
      async function _getAndClearPendingRedirectStatus(resolver, auth) {
        const key = pendingRedirectKey(auth);
        const persistence = resolverPersistence(resolver);
        if (!await persistence._isAvailable()) {
          return false;
        }
        const hasPendingRedirect = await persistence._get(key) === "true";
        await persistence._remove(key);
        return hasPendingRedirect;
      }
      async function _setPendingRedirectStatus(resolver, auth) {
        return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
      }
      function _clearRedirectOutcomes() {
        redirectOutcomeMap.clear();
      }
      function _overrideRedirectResult(auth, result) {
        redirectOutcomeMap.set(auth._key(), result);
      }
      function resolverPersistence(resolver) {
        return _getInstance(resolver._redirectPersistence);
      }
      function pendingRedirectKey(auth) {
        return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
      }
      function signInWithRedirect(auth, provider, resolver) {
        return _signInWithRedirect(auth, provider, resolver);
      }
      async function _signInWithRedirect(auth, provider, resolver) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        _assertInstanceOf(auth, provider, FederatedAuthProvider);
        await authInternal._initializationPromise;
        const resolverInternal = _withDefaultResolver(authInternal, resolver);
        await _setPendingRedirectStatus(resolverInternal, authInternal);
        return resolverInternal._openRedirect(
          authInternal,
          provider,
          "signInViaRedirect"
          /* AuthEventType.SIGN_IN_VIA_REDIRECT */
        );
      }
      function reauthenticateWithRedirect(user, provider, resolver) {
        return _reauthenticateWithRedirect(user, provider, resolver);
      }
      async function _reauthenticateWithRedirect(user, provider, resolver) {
        const userInternal = util.getModularInstance(user);
        _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
        }
        await userInternal.auth._initializationPromise;
        const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
        await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
        const eventId = await prepareUserForRedirect(userInternal);
        return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect", eventId);
      }
      function linkWithRedirect(user, provider, resolver) {
        return _linkWithRedirect(user, provider, resolver);
      }
      async function _linkWithRedirect(user, provider, resolver) {
        const userInternal = util.getModularInstance(user);
        _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
        await userInternal.auth._initializationPromise;
        const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
        await _assertLinkedStatus(false, userInternal, provider.providerId);
        await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
        const eventId = await prepareUserForRedirect(userInternal);
        return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect", eventId);
      }
      async function getRedirectResult(auth, resolver) {
        await _castAuth(auth)._initializationPromise;
        return _getRedirectResult(auth, resolver, false);
      }
      async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        const resolver = _withDefaultResolver(authInternal, resolverExtern);
        const action = new RedirectAction(authInternal, resolver, bypassAuthState);
        const result = await action.execute();
        if (result && !bypassAuthState) {
          delete result.user._redirectEventId;
          await authInternal._persistUserIfCurrent(result.user);
          await authInternal._setRedirectUser(null, resolverExtern);
        }
        return result;
      }
      async function prepareUserForRedirect(user) {
        const eventId = _generateEventId(`${user.uid}:::`);
        user._redirectEventId = eventId;
        await user.auth._setRedirectUser(user);
        await user.auth._persistUserIfCurrent(user);
        return eventId;
      }
      var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
      var AuthEventManager = class {
        constructor(auth) {
          this.auth = auth;
          this.cachedEventUids = /* @__PURE__ */ new Set();
          this.consumers = /* @__PURE__ */ new Set();
          this.queuedRedirectEvent = null;
          this.hasHandledPotentialRedirect = false;
          this.lastProcessedEventTime = Date.now();
        }
        registerConsumer(authEventConsumer) {
          this.consumers.add(authEventConsumer);
          if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
            this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
            this.saveEventToCache(this.queuedRedirectEvent);
            this.queuedRedirectEvent = null;
          }
        }
        unregisterConsumer(authEventConsumer) {
          this.consumers.delete(authEventConsumer);
        }
        onEvent(event) {
          if (this.hasEventBeenHandled(event)) {
            return false;
          }
          let handled = false;
          this.consumers.forEach((consumer) => {
            if (this.isEventForConsumer(event, consumer)) {
              handled = true;
              this.sendToConsumer(event, consumer);
              this.saveEventToCache(event);
            }
          });
          if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
            return handled;
          }
          this.hasHandledPotentialRedirect = true;
          if (!handled) {
            this.queuedRedirectEvent = event;
            handled = true;
          }
          return handled;
        }
        sendToConsumer(event, consumer) {
          var _a;
          if (event.error && !isNullRedirectEvent(event)) {
            const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
            consumer.onError(_createError(this.auth, code));
          } else {
            consumer.onAuthEvent(event);
          }
        }
        isEventForConsumer(event, consumer) {
          const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
          return consumer.filter.includes(event.type) && eventIdMatches;
        }
        hasEventBeenHandled(event) {
          if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
            this.cachedEventUids.clear();
          }
          return this.cachedEventUids.has(eventUid(event));
        }
        saveEventToCache(event) {
          this.cachedEventUids.add(eventUid(event));
          this.lastProcessedEventTime = Date.now();
        }
      };
      function eventUid(e) {
        return [e.type, e.eventId, e.sessionId, e.tenantId].filter((v) => v).join("-");
      }
      function isNullRedirectEvent({ type, error }) {
        return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
      }
      function isRedirectEvent(event) {
        switch (event.type) {
          case "signInViaRedirect":
          case "linkViaRedirect":
          case "reauthViaRedirect":
            return true;
          case "unknown":
            return isNullRedirectEvent(event);
          default:
            return false;
        }
      }
      async function _getProjectConfig(auth, request = {}) {
        return _performApiRequest(auth, "GET", "/v1/projects", request);
      }
      var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
      var HTTP_REGEX = /^https?/;
      async function _validateOrigin(auth) {
        if (auth.config.emulator) {
          return;
        }
        const { authorizedDomains } = await _getProjectConfig(auth);
        for (const domain2 of authorizedDomains) {
          try {
            if (matchDomain(domain2)) {
              return;
            }
          } catch (_a) {
          }
        }
        _fail(
          auth,
          "unauthorized-domain"
          /* AuthErrorCode.INVALID_ORIGIN */
        );
      }
      function matchDomain(expected) {
        const currentUrl = _getCurrentUrl();
        const { protocol, hostname } = new URL(currentUrl);
        if (expected.startsWith("chrome-extension://")) {
          const ceUrl = new URL(expected);
          if (ceUrl.hostname === "" && hostname === "") {
            return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
          }
          return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
        }
        if (!HTTP_REGEX.test(protocol)) {
          return false;
        }
        if (IP_ADDRESS_REGEX.test(expected)) {
          return hostname === expected;
        }
        const escapedDomainPattern = expected.replace(/\./g, "\\.");
        const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
        return re.test(hostname);
      }
      var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
      function resetUnloadedGapiModules() {
        const beacon = _window().___jsl;
        if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
          for (const hint of Object.keys(beacon.H)) {
            beacon.H[hint].r = beacon.H[hint].r || [];
            beacon.H[hint].L = beacon.H[hint].L || [];
            beacon.H[hint].r = [...beacon.H[hint].L];
            if (beacon.CP) {
              for (let i = 0; i < beacon.CP.length; i++) {
                beacon.CP[i] = null;
              }
            }
          }
        }
      }
      function loadGapi(auth) {
        return new Promise((resolve, reject) => {
          var _a, _b, _c;
          function loadGapiIframe() {
            resetUnloadedGapiModules();
            gapi.load("gapi.iframes", {
              callback: () => {
                resolve(gapi.iframes.getContext());
              },
              ontimeout: () => {
                resetUnloadedGapiModules();
                reject(_createError(
                  auth,
                  "network-request-failed"
                  /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                ));
              },
              timeout: NETWORK_TIMEOUT.get()
            });
          }
          if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
            resolve(gapi.iframes.getContext());
          } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
            loadGapiIframe();
          } else {
            const cbName = _generateCallbackName("iframefcb");
            _window()[cbName] = () => {
              if (!!gapi.load) {
                loadGapiIframe();
              } else {
                reject(_createError(
                  auth,
                  "network-request-failed"
                  /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                ));
              }
            };
            return _loadJS(`${_gapiScriptUrl()}?onload=${cbName}`).catch((e) => reject(e));
          }
        }).catch((error) => {
          cachedGApiLoader = null;
          throw error;
        });
      }
      var cachedGApiLoader = null;
      function _loadGapi(auth) {
        cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
        return cachedGApiLoader;
      }
      var PING_TIMEOUT = new Delay(5e3, 15e3);
      var IFRAME_PATH = "__/auth/iframe";
      var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
      var IFRAME_ATTRIBUTES = {
        style: {
          position: "absolute",
          top: "-100px",
          width: "1px",
          height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
      };
      var EID_FROM_APIHOST = /* @__PURE__ */ new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"]
        // test
      ]);
      function getIframeUrl(auth) {
        const config2 = auth.config;
        _assert(
          config2.authDomain,
          auth,
          "auth-domain-config-required"
          /* AuthErrorCode.MISSING_AUTH_DOMAIN */
        );
        const url = config2.emulator ? _emulatorUrl(config2, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
        const params = {
          apiKey: config2.apiKey,
          appName: auth.name,
          v: app.SDK_VERSION
        };
        const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
        if (eid) {
          params.eid = eid;
        }
        const frameworks = auth._getFrameworks();
        if (frameworks.length) {
          params.fw = frameworks.join(",");
        }
        return `${url}?${util.querystring(params).slice(1)}`;
      }
      async function _openIframe(auth) {
        const context = await _loadGapi(auth);
        const gapi2 = _window().gapi;
        _assert(
          gapi2,
          auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        return context.open({
          where: document.body,
          url: getIframeUrl(auth),
          messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: IFRAME_ATTRIBUTES,
          dontclear: true
        }, (iframe) => new Promise(async (resolve, reject) => {
          await iframe.restyle({
            // Prevent iframe from closing on mouse out.
            setHideOnLeave: false
          });
          const networkError = _createError(
            auth,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          );
          const networkErrorTimer = _window().setTimeout(() => {
            reject(networkError);
          }, PING_TIMEOUT.get());
          function clearTimerAndResolve() {
            _window().clearTimeout(networkErrorTimer);
            resolve(iframe);
          }
          iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
            reject(networkError);
          });
        }));
      }
      var BASE_POPUP_OPTIONS = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no"
      };
      var DEFAULT_WIDTH = 500;
      var DEFAULT_HEIGHT = 600;
      var TARGET_BLANK = "_blank";
      var FIREFOX_EMPTY_URL = "http://localhost";
      var AuthPopup = class {
        constructor(window2) {
          this.window = window2;
          this.associatedEvent = null;
        }
        close() {
          if (this.window) {
            try {
              this.window.close();
            } catch (e) {
            }
          }
        }
      };
      function _open(auth, url, name3, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
        const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
        const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
        let target = "";
        const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
          width: width.toString(),
          height: height.toString(),
          top,
          left
        });
        const ua = util.getUA().toLowerCase();
        if (name3) {
          target = _isChromeIOS(ua) ? TARGET_BLANK : name3;
        }
        if (_isFirefox(ua)) {
          url = url || FIREFOX_EMPTY_URL;
          options.scrollbars = "yes";
        }
        const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
        if (_isIOSStandalone(ua) && target !== "_self") {
          openAsNewWindowIOS(url || "", target);
          return new AuthPopup(null);
        }
        const newWin = window.open(url || "", target, optionsString);
        _assert(
          newWin,
          auth,
          "popup-blocked"
          /* AuthErrorCode.POPUP_BLOCKED */
        );
        try {
          newWin.focus();
        } catch (e) {
        }
        return new AuthPopup(newWin);
      }
      function openAsNewWindowIOS(url, target) {
        const el = document.createElement("a");
        el.href = url;
        el.target = target;
        const click = document.createEvent("MouseEvent");
        click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
        el.dispatchEvent(click);
      }
      var WIDGET_PATH = "__/auth/handler";
      var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
      var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
      async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
        _assert(
          auth.config.authDomain,
          auth,
          "auth-domain-config-required"
          /* AuthErrorCode.MISSING_AUTH_DOMAIN */
        );
        _assert(
          auth.config.apiKey,
          auth,
          "invalid-api-key"
          /* AuthErrorCode.INVALID_API_KEY */
        );
        const params = {
          apiKey: auth.config.apiKey,
          appName: auth.name,
          authType,
          redirectUrl,
          v: app.SDK_VERSION,
          eventId
        };
        if (provider instanceof FederatedAuthProvider) {
          provider.setDefaultLanguage(auth.languageCode);
          params.providerId = provider.providerId || "";
          if (!util.isEmpty(provider.getCustomParameters())) {
            params.customParameters = JSON.stringify(provider.getCustomParameters());
          }
          for (const [key, value] of Object.entries(additionalParams || {})) {
            params[key] = value;
          }
        }
        if (provider instanceof BaseOAuthProvider) {
          const scopes = provider.getScopes().filter((scope) => scope !== "");
          if (scopes.length > 0) {
            params.scopes = scopes.join(",");
          }
        }
        if (auth.tenantId) {
          params.tid = auth.tenantId;
        }
        const paramsDict = params;
        for (const key of Object.keys(paramsDict)) {
          if (paramsDict[key] === void 0) {
            delete paramsDict[key];
          }
        }
        const appCheckToken = await auth._getAppCheckToken();
        const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
        return `${getHandlerBase(auth)}?${util.querystring(paramsDict).slice(1)}${appCheckTokenFragment}`;
      }
      function getHandlerBase({ config: config2 }) {
        if (!config2.emulator) {
          return `https://${config2.authDomain}/${WIDGET_PATH}`;
        }
        return _emulatorUrl(config2, EMULATOR_WIDGET_PATH);
      }
      var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
      var BrowserPopupRedirectResolver = class {
        constructor() {
          this.eventManagers = {};
          this.iframes = {};
          this.originValidationPromises = {};
          this._redirectPersistence = browserSessionPersistence;
          this._completeRedirectFn = _getRedirectResult;
          this._overrideRedirectResult = _overrideRedirectResult;
        }
        // Wrapping in async even though we don't await anywhere in order
        // to make sure errors are raised as promise rejections
        async _openPopup(auth, provider, authType, eventId) {
          var _a;
          debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
          const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
          return _open(auth, url, _generateEventId());
        }
        async _openRedirect(auth, provider, authType, eventId) {
          await this._originValidation(auth);
          const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
          _setWindowLocation(url);
          return new Promise(() => {
          });
        }
        _initialize(auth) {
          const key = auth._key();
          if (this.eventManagers[key]) {
            const { manager, promise: promise2 } = this.eventManagers[key];
            if (manager) {
              return Promise.resolve(manager);
            } else {
              debugAssert(promise2, "If manager is not set, promise should be");
              return promise2;
            }
          }
          const promise = this.initAndGetManager(auth);
          this.eventManagers[key] = { promise };
          promise.catch(() => {
            delete this.eventManagers[key];
          });
          return promise;
        }
        async initAndGetManager(auth) {
          const iframe = await _openIframe(auth);
          const manager = new AuthEventManager(auth);
          iframe.register("authEvent", (iframeEvent) => {
            _assert(
              iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent,
              auth,
              "invalid-auth-event"
              /* AuthErrorCode.INVALID_AUTH_EVENT */
            );
            const handled = manager.onEvent(iframeEvent.authEvent);
            return {
              status: handled ? "ACK" : "ERROR"
              /* GapiOutcome.ERROR */
            };
          }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
          this.eventManagers[auth._key()] = { manager };
          this.iframes[auth._key()] = iframe;
          return manager;
        }
        _isIframeWebStorageSupported(auth, cb) {
          const iframe = this.iframes[auth._key()];
          iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
            var _a;
            const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
            if (isSupported !== void 0) {
              cb(!!isSupported);
            }
            _fail(
              auth,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
          }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        }
        _originValidation(auth) {
          const key = auth._key();
          if (!this.originValidationPromises[key]) {
            this.originValidationPromises[key] = _validateOrigin(auth);
          }
          return this.originValidationPromises[key];
        }
        get _shouldInitProactively() {
          return _isMobileBrowser() || _isSafari() || _isIOS();
        }
      };
      var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
      var MultiFactorAssertionImpl = class {
        constructor(factorId) {
          this.factorId = factorId;
        }
        _process(auth, session, displayName) {
          switch (session.type) {
            case "enroll":
              return this._finalizeEnroll(auth, session.credential, displayName);
            case "signin":
              return this._finalizeSignIn(auth, session.credential);
            default:
              return debugFail("unexpected MultiFactorSessionType");
          }
        }
      };
      var PhoneMultiFactorAssertionImpl = class _PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
        constructor(credential) {
          super(
            "phone"
            /* FactorId.PHONE */
          );
          this.credential = credential;
        }
        /** @internal */
        static _fromCredential(credential) {
          return new _PhoneMultiFactorAssertionImpl(credential);
        }
        /** @internal */
        _finalizeEnroll(auth, idToken, displayName) {
          return finalizeEnrollPhoneMfa(auth, {
            idToken,
            displayName,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
          });
        }
        /** @internal */
        _finalizeSignIn(auth, mfaPendingCredential) {
          return finalizeSignInPhoneMfa(auth, {
            mfaPendingCredential,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
          });
        }
      };
      var PhoneMultiFactorGenerator = class {
        constructor() {
        }
        /**
         * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
         *
         * @remarks
         * This method does not work in a Node.js environment.
         *
         * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
         * @returns A {@link PhoneMultiFactorAssertion} which can be used with
         * {@link MultiFactorResolver.resolveSignIn}
         */
        static assertion(credential) {
          return PhoneMultiFactorAssertionImpl._fromCredential(credential);
        }
      };
      PhoneMultiFactorGenerator.FACTOR_ID = "phone";
      var TotpMultiFactorGenerator = class {
        /**
         * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
         * the TOTP (time-based one-time password) second factor.
         * This assertion is used to complete enrollment in TOTP second factor.
         *
         * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
         * @param oneTimePassword One-time password from TOTP App.
         * @returns A {@link TotpMultiFactorAssertion} which can be used with
         * {@link MultiFactorUser.enroll}.
         */
        static assertionForEnrollment(secret, oneTimePassword) {
          return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
        }
        /**
         * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
         * This assertion is used to complete signIn with TOTP as the second factor.
         *
         * @param enrollmentId identifies the enrolled TOTP second factor.
         * @param oneTimePassword One-time password from TOTP App.
         * @returns A {@link TotpMultiFactorAssertion} which can be used with
         * {@link MultiFactorResolver.resolveSignIn}.
         */
        static assertionForSignIn(enrollmentId, oneTimePassword) {
          return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
        }
        /**
         * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
         * Creates a TOTP secret as part of enrolling a TOTP second factor.
         * Used for generating a QR code URL or inputting into a TOTP app.
         * This method uses the auth instance corresponding to the user in the multiFactorSession.
         *
         * @param session The {@link MultiFactorSession} that the user is part of.
         * @returns A promise to {@link TotpSecret}.
         */
        static async generateSecret(session) {
          var _a;
          const mfaSession = session;
          _assert(
            typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const response = await startEnrollTotpMfa(mfaSession.user.auth, {
            idToken: mfaSession.credential,
            totpEnrollmentInfo: {}
          });
          return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
        }
      };
      TotpMultiFactorGenerator.FACTOR_ID = "totp";
      var TotpMultiFactorAssertionImpl = class _TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
        constructor(otp, enrollmentId, secret) {
          super(
            "totp"
            /* FactorId.TOTP */
          );
          this.otp = otp;
          this.enrollmentId = enrollmentId;
          this.secret = secret;
        }
        /** @internal */
        static _fromSecret(secret, otp) {
          return new _TotpMultiFactorAssertionImpl(otp, void 0, secret);
        }
        /** @internal */
        static _fromEnrollmentId(enrollmentId, otp) {
          return new _TotpMultiFactorAssertionImpl(otp, enrollmentId);
        }
        /** @internal */
        async _finalizeEnroll(auth, idToken, displayName) {
          _assert(
            typeof this.secret !== "undefined",
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return finalizeEnrollTotpMfa(auth, {
            idToken,
            displayName,
            totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
          });
        }
        /** @internal */
        async _finalizeSignIn(auth, mfaPendingCredential) {
          _assert(
            this.enrollmentId !== void 0 && this.otp !== void 0,
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          const totpVerificationInfo = { verificationCode: this.otp };
          return finalizeSignInTotpMfa(auth, {
            mfaPendingCredential,
            mfaEnrollmentId: this.enrollmentId,
            totpVerificationInfo
          });
        }
      };
      var TotpSecret = class _TotpSecret {
        // The public members are declared outside the constructor so the docs can be generated.
        constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
          this.sessionInfo = sessionInfo;
          this.auth = auth;
          this.secretKey = secretKey;
          this.hashingAlgorithm = hashingAlgorithm;
          this.codeLength = codeLength;
          this.codeIntervalSeconds = codeIntervalSeconds;
          this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
        }
        /** @internal */
        static _fromStartTotpMfaEnrollmentResponse(response, auth) {
          return new _TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
        }
        /** @internal */
        _makeTotpVerificationInfo(otp) {
          return { sessionInfo: this.sessionInfo, verificationCode: otp };
        }
        /**
         * Returns a QR code URL as described in
         * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
         * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
         * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
         *
         * @param accountName the name of the account/app along with a user identifier.
         * @param issuer issuer of the TOTP (likely the app name).
         * @returns A QR code URL string.
         */
        generateQrCodeUrl(accountName, issuer) {
          var _a;
          let useDefaults = false;
          if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
            useDefaults = true;
          }
          if (useDefaults) {
            if (_isEmptyString(accountName)) {
              accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
            }
            if (_isEmptyString(issuer)) {
              issuer = this.auth.name;
            }
          }
          return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
        }
      };
      function _isEmptyString(input) {
        return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
      }
      var name2 = "@firebase/auth";
      var version2 = "1.7.9";
      var AuthInterop = class {
        constructor(auth) {
          this.auth = auth;
          this.internalListeners = /* @__PURE__ */ new Map();
        }
        getUid() {
          var _a;
          this.assertAuthConfigured();
          return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
        }
        async getToken(forceRefresh) {
          this.assertAuthConfigured();
          await this.auth._initializationPromise;
          if (!this.auth.currentUser) {
            return null;
          }
          const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
          return { accessToken };
        }
        addAuthTokenListener(listener) {
          this.assertAuthConfigured();
          if (this.internalListeners.has(listener)) {
            return;
          }
          const unsubscribe = this.auth.onIdTokenChanged((user) => {
            listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
          });
          this.internalListeners.set(listener, unsubscribe);
          this.updateProactiveRefresh();
        }
        removeAuthTokenListener(listener) {
          this.assertAuthConfigured();
          const unsubscribe = this.internalListeners.get(listener);
          if (!unsubscribe) {
            return;
          }
          this.internalListeners.delete(listener);
          unsubscribe();
          this.updateProactiveRefresh();
        }
        assertAuthConfigured() {
          _assert(
            this.auth._initializationPromise,
            "dependent-sdk-initialized-before-auth"
            /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
          );
        }
        updateProactiveRefresh() {
          if (this.internalListeners.size > 0) {
            this.auth._startProactiveRefresh();
          } else {
            this.auth._stopProactiveRefresh();
          }
        }
      };
      function getVersionForPlatform(clientPlatform) {
        switch (clientPlatform) {
          case "Node":
            return "node";
          case "ReactNative":
            return "rn";
          case "Worker":
            return "webworker";
          case "Cordova":
            return "cordova";
          case "WebExtension":
            return "web-extension";
          default:
            return void 0;
        }
      }
      function registerAuth(clientPlatform) {
        app._registerComponent(new component.Component(
          "auth",
          (container, { options: deps }) => {
            const app2 = container.getProvider("app").getImmediate();
            const heartbeatServiceProvider = container.getProvider("heartbeat");
            const appCheckServiceProvider = container.getProvider("app-check-internal");
            const { apiKey, authDomain } = app2.options;
            _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app2.name });
            const config2 = {
              apiKey,
              authDomain,
              clientPlatform,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: _getClientVersion(clientPlatform)
            };
            const authInstance = new AuthImpl(app2, heartbeatServiceProvider, appCheckServiceProvider, config2);
            _initializeAuthInstance(authInstance, deps);
            return authInstance;
          },
          "PUBLIC"
          /* ComponentType.PUBLIC */
        ).setInstantiationMode(
          "EXPLICIT"
          /* InstantiationMode.EXPLICIT */
        ).setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
          const authInternalProvider = container.getProvider(
            "auth-internal"
            /* _ComponentName.AUTH_INTERNAL */
          );
          authInternalProvider.initialize();
        }));
        app._registerComponent(new component.Component(
          "auth-internal",
          (container) => {
            const auth = _castAuth(container.getProvider(
              "auth"
              /* _ComponentName.AUTH */
            ).getImmediate());
            return ((auth2) => new AuthInterop(auth2))(auth);
          },
          "PRIVATE"
          /* ComponentType.PRIVATE */
        ).setInstantiationMode(
          "EXPLICIT"
          /* InstantiationMode.EXPLICIT */
        ));
        app.registerVersion(name2, version2, getVersionForPlatform(clientPlatform));
        app.registerVersion(name2, version2, "cjs2017");
      }
      var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
      var authIdTokenMaxAge = util.getExperimentalSetting("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
      var lastPostedIdToken = null;
      var mintCookieFactory = (url) => async (user) => {
        const idTokenResult = user && await user.getIdTokenResult();
        const idTokenAge = idTokenResult && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
        if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
          return;
        }
        const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
        if (lastPostedIdToken === idToken) {
          return;
        }
        lastPostedIdToken = idToken;
        await fetch(url, {
          method: idToken ? "POST" : "DELETE",
          headers: idToken ? {
            "Authorization": `Bearer ${idToken}`
          } : {}
        });
      };
      function getAuth(app$1 = app.getApp()) {
        const provider = app._getProvider(app$1, "auth");
        if (provider.isInitialized()) {
          return provider.getImmediate();
        }
        const auth = initializeAuth(app$1, {
          popupRedirectResolver: browserPopupRedirectResolver,
          persistence: [
            indexedDBLocalPersistence,
            browserLocalPersistence,
            browserSessionPersistence
          ]
        });
        const authTokenSyncPath = util.getExperimentalSetting("authTokenSyncURL");
        if (authTokenSyncPath && typeof isSecureContext === "boolean" && isSecureContext) {
          const authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);
          if (location.origin === authTokenSyncUrl.origin) {
            const mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
            beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
            onIdTokenChanged(auth, (user) => mintCookie(user));
          }
        }
        const authEmulatorHost = util.getDefaultEmulatorHost("auth");
        if (authEmulatorHost) {
          connectAuthEmulator(auth, `http://${authEmulatorHost}`);
        }
        return auth;
      }
      function getScriptParentElement() {
        var _a, _b;
        return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
      }
      _setExternalJSProvider({
        loadJS(url) {
          return new Promise((resolve, reject) => {
            const el = document.createElement("script");
            el.setAttribute("src", url);
            el.onload = resolve;
            el.onerror = (e) => {
              const error = _createError(
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
              error.customData = e;
              reject(error);
            };
            el.type = "text/javascript";
            el.charset = "UTF-8";
            getScriptParentElement().appendChild(el);
          });
        },
        gapiScript: "https://apis.google.com/js/api.js",
        recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
        recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
      });
      registerAuth(
        "Browser"
        /* ClientPlatform.BROWSER */
      );
      exports4.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY;
      exports4.ActionCodeOperation = ActionCodeOperation;
      exports4.ActionCodeURL = ActionCodeURL;
      exports4.AuthCredential = AuthCredential;
      exports4.AuthEventManager = AuthEventManager;
      exports4.AuthImpl = AuthImpl;
      exports4.AuthPopup = AuthPopup;
      exports4.EmailAuthCredential = EmailAuthCredential;
      exports4.EmailAuthProvider = EmailAuthProvider;
      exports4.FacebookAuthProvider = FacebookAuthProvider;
      exports4.FactorId = FactorId;
      exports4.FetchProvider = FetchProvider;
      exports4.GithubAuthProvider = GithubAuthProvider;
      exports4.GoogleAuthProvider = GoogleAuthProvider;
      exports4.OAuthCredential = OAuthCredential;
      exports4.OAuthProvider = OAuthProvider;
      exports4.OperationType = OperationType;
      exports4.PhoneAuthCredential = PhoneAuthCredential;
      exports4.PhoneAuthProvider = PhoneAuthProvider;
      exports4.PhoneMultiFactorGenerator = PhoneMultiFactorGenerator;
      exports4.ProviderId = ProviderId;
      exports4.RecaptchaVerifier = RecaptchaVerifier;
      exports4.SAMLAuthCredential = SAMLAuthCredential;
      exports4.SAMLAuthProvider = SAMLAuthProvider;
      exports4.SignInMethod = SignInMethod;
      exports4.TotpMultiFactorGenerator = TotpMultiFactorGenerator;
      exports4.TotpSecret = TotpSecret;
      exports4.TwitterAuthProvider = TwitterAuthProvider;
      exports4.UserImpl = UserImpl;
      exports4._assert = _assert;
      exports4._castAuth = _castAuth;
      exports4._clearRedirectOutcomes = _clearRedirectOutcomes;
      exports4._createError = _createError;
      exports4._fail = _fail;
      exports4._generateEventId = _generateEventId;
      exports4._getClientVersion = _getClientVersion;
      exports4._getInstance = _getInstance;
      exports4._getProjectConfig = _getProjectConfig;
      exports4._getRedirectResult = _getRedirectResult;
      exports4._getRedirectUrl = _getRedirectUrl;
      exports4._isAndroid = _isAndroid;
      exports4._isIOS = _isIOS;
      exports4._isIOS7Or8 = _isIOS7Or8;
      exports4._overrideRedirectResult = _overrideRedirectResult;
      exports4._persistenceKeyName = _persistenceKeyName;
      exports4.applyActionCode = applyActionCode;
      exports4.beforeAuthStateChanged = beforeAuthStateChanged;
      exports4.browserLocalPersistence = browserLocalPersistence;
      exports4.browserPopupRedirectResolver = browserPopupRedirectResolver;
      exports4.browserSessionPersistence = browserSessionPersistence;
      exports4.checkActionCode = checkActionCode;
      exports4.confirmPasswordReset = confirmPasswordReset;
      exports4.connectAuthEmulator = connectAuthEmulator;
      exports4.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
      exports4.debugAssert = debugAssert;
      exports4.debugErrorMap = debugErrorMap;
      exports4.deleteUser = deleteUser;
      exports4.fetchSignInMethodsForEmail = fetchSignInMethodsForEmail;
      exports4.getAdditionalUserInfo = getAdditionalUserInfo;
      exports4.getAuth = getAuth;
      exports4.getIdToken = getIdToken;
      exports4.getIdTokenResult = getIdTokenResult;
      exports4.getMultiFactorResolver = getMultiFactorResolver;
      exports4.getRedirectResult = getRedirectResult;
      exports4.inMemoryPersistence = inMemoryPersistence;
      exports4.indexedDBLocalPersistence = indexedDBLocalPersistence;
      exports4.initializeAuth = initializeAuth;
      exports4.initializeRecaptchaConfig = initializeRecaptchaConfig;
      exports4.isSignInWithEmailLink = isSignInWithEmailLink;
      exports4.linkWithCredential = linkWithCredential;
      exports4.linkWithPhoneNumber = linkWithPhoneNumber;
      exports4.linkWithPopup = linkWithPopup;
      exports4.linkWithRedirect = linkWithRedirect;
      exports4.multiFactor = multiFactor;
      exports4.onAuthStateChanged = onAuthStateChanged;
      exports4.onIdTokenChanged = onIdTokenChanged;
      exports4.parseActionCodeURL = parseActionCodeURL;
      exports4.prodErrorMap = prodErrorMap;
      exports4.reauthenticateWithCredential = reauthenticateWithCredential;
      exports4.reauthenticateWithPhoneNumber = reauthenticateWithPhoneNumber;
      exports4.reauthenticateWithPopup = reauthenticateWithPopup;
      exports4.reauthenticateWithRedirect = reauthenticateWithRedirect;
      exports4.reload = reload;
      exports4.revokeAccessToken = revokeAccessToken;
      exports4.sendEmailVerification = sendEmailVerification;
      exports4.sendPasswordResetEmail = sendPasswordResetEmail;
      exports4.sendSignInLinkToEmail = sendSignInLinkToEmail;
      exports4.setPersistence = setPersistence;
      exports4.signInAnonymously = signInAnonymously;
      exports4.signInWithCredential = signInWithCredential;
      exports4.signInWithCustomToken = signInWithCustomToken;
      exports4.signInWithEmailAndPassword = signInWithEmailAndPassword;
      exports4.signInWithEmailLink = signInWithEmailLink;
      exports4.signInWithPhoneNumber = signInWithPhoneNumber;
      exports4.signInWithPopup = signInWithPopup;
      exports4.signInWithRedirect = signInWithRedirect;
      exports4.signOut = signOut;
      exports4.unlink = unlink;
      exports4.updateCurrentUser = updateCurrentUser;
      exports4.updateEmail = updateEmail;
      exports4.updatePassword = updatePassword;
      exports4.updatePhoneNumber = updatePhoneNumber;
      exports4.updateProfile = updateProfile;
      exports4.useDeviceLanguage = useDeviceLanguage;
      exports4.validatePassword = validatePassword;
      exports4.verifyBeforeUpdateEmail = verifyBeforeUpdateEmail;
      exports4.verifyPasswordResetCode = verifyPasswordResetCode;
    }
  });

  // node_modules/@firebase/auth/dist/browser-cjs/index.js
  var require_browser_cjs = __commonJS({
    "node_modules/@firebase/auth/dist/browser-cjs/index.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", { value: true });
      var index = require_index_e2e765e6();
      require_index_cjs4();
      require_index_cjs();
      require_index_cjs3();
      init_tslib_es6();
      require_index_cjs2();
      exports4.ActionCodeOperation = index.ActionCodeOperation;
      exports4.ActionCodeURL = index.ActionCodeURL;
      exports4.AuthCredential = index.AuthCredential;
      exports4.AuthErrorCodes = index.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY;
      exports4.EmailAuthCredential = index.EmailAuthCredential;
      exports4.EmailAuthProvider = index.EmailAuthProvider;
      exports4.FacebookAuthProvider = index.FacebookAuthProvider;
      exports4.FactorId = index.FactorId;
      exports4.GithubAuthProvider = index.GithubAuthProvider;
      exports4.GoogleAuthProvider = index.GoogleAuthProvider;
      exports4.OAuthCredential = index.OAuthCredential;
      exports4.OAuthProvider = index.OAuthProvider;
      exports4.OperationType = index.OperationType;
      exports4.PhoneAuthCredential = index.PhoneAuthCredential;
      exports4.PhoneAuthProvider = index.PhoneAuthProvider;
      exports4.PhoneMultiFactorGenerator = index.PhoneMultiFactorGenerator;
      exports4.ProviderId = index.ProviderId;
      exports4.RecaptchaVerifier = index.RecaptchaVerifier;
      exports4.SAMLAuthProvider = index.SAMLAuthProvider;
      exports4.SignInMethod = index.SignInMethod;
      exports4.TotpMultiFactorGenerator = index.TotpMultiFactorGenerator;
      exports4.TotpSecret = index.TotpSecret;
      exports4.TwitterAuthProvider = index.TwitterAuthProvider;
      exports4.applyActionCode = index.applyActionCode;
      exports4.beforeAuthStateChanged = index.beforeAuthStateChanged;
      exports4.browserLocalPersistence = index.browserLocalPersistence;
      exports4.browserPopupRedirectResolver = index.browserPopupRedirectResolver;
      exports4.browserSessionPersistence = index.browserSessionPersistence;
      exports4.checkActionCode = index.checkActionCode;
      exports4.confirmPasswordReset = index.confirmPasswordReset;
      exports4.connectAuthEmulator = index.connectAuthEmulator;
      exports4.createUserWithEmailAndPassword = index.createUserWithEmailAndPassword;
      exports4.debugErrorMap = index.debugErrorMap;
      exports4.deleteUser = index.deleteUser;
      exports4.fetchSignInMethodsForEmail = index.fetchSignInMethodsForEmail;
      exports4.getAdditionalUserInfo = index.getAdditionalUserInfo;
      exports4.getAuth = index.getAuth;
      exports4.getIdToken = index.getIdToken;
      exports4.getIdTokenResult = index.getIdTokenResult;
      exports4.getMultiFactorResolver = index.getMultiFactorResolver;
      exports4.getRedirectResult = index.getRedirectResult;
      exports4.inMemoryPersistence = index.inMemoryPersistence;
      exports4.indexedDBLocalPersistence = index.indexedDBLocalPersistence;
      exports4.initializeAuth = index.initializeAuth;
      exports4.initializeRecaptchaConfig = index.initializeRecaptchaConfig;
      exports4.isSignInWithEmailLink = index.isSignInWithEmailLink;
      exports4.linkWithCredential = index.linkWithCredential;
      exports4.linkWithPhoneNumber = index.linkWithPhoneNumber;
      exports4.linkWithPopup = index.linkWithPopup;
      exports4.linkWithRedirect = index.linkWithRedirect;
      exports4.multiFactor = index.multiFactor;
      exports4.onAuthStateChanged = index.onAuthStateChanged;
      exports4.onIdTokenChanged = index.onIdTokenChanged;
      exports4.parseActionCodeURL = index.parseActionCodeURL;
      exports4.prodErrorMap = index.prodErrorMap;
      exports4.reauthenticateWithCredential = index.reauthenticateWithCredential;
      exports4.reauthenticateWithPhoneNumber = index.reauthenticateWithPhoneNumber;
      exports4.reauthenticateWithPopup = index.reauthenticateWithPopup;
      exports4.reauthenticateWithRedirect = index.reauthenticateWithRedirect;
      exports4.reload = index.reload;
      exports4.revokeAccessToken = index.revokeAccessToken;
      exports4.sendEmailVerification = index.sendEmailVerification;
      exports4.sendPasswordResetEmail = index.sendPasswordResetEmail;
      exports4.sendSignInLinkToEmail = index.sendSignInLinkToEmail;
      exports4.setPersistence = index.setPersistence;
      exports4.signInAnonymously = index.signInAnonymously;
      exports4.signInWithCredential = index.signInWithCredential;
      exports4.signInWithCustomToken = index.signInWithCustomToken;
      exports4.signInWithEmailAndPassword = index.signInWithEmailAndPassword;
      exports4.signInWithEmailLink = index.signInWithEmailLink;
      exports4.signInWithPhoneNumber = index.signInWithPhoneNumber;
      exports4.signInWithPopup = index.signInWithPopup;
      exports4.signInWithRedirect = index.signInWithRedirect;
      exports4.signOut = index.signOut;
      exports4.unlink = index.unlink;
      exports4.updateCurrentUser = index.updateCurrentUser;
      exports4.updateEmail = index.updateEmail;
      exports4.updatePassword = index.updatePassword;
      exports4.updatePhoneNumber = index.updatePhoneNumber;
      exports4.updateProfile = index.updateProfile;
      exports4.useDeviceLanguage = index.useDeviceLanguage;
      exports4.validatePassword = index.validatePassword;
      exports4.verifyBeforeUpdateEmail = index.verifyBeforeUpdateEmail;
      exports4.verifyPasswordResetCode = index.verifyPasswordResetCode;
    }
  });

  // node_modules/firebase/auth/dist/index.cjs.js
  var require_index_cjs6 = __commonJS({
    "node_modules/firebase/auth/dist/index.cjs.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", { value: true });
      var auth = require_browser_cjs();
      Object.keys(auth).forEach(function(k) {
        if (k !== "default" && !exports4.hasOwnProperty(k)) Object.defineProperty(exports4, k, {
          enumerable: true,
          get: function() {
            return auth[k];
          }
        });
      });
    }
  });

  // node_modules/safe-buffer/index.js
  var require_safe_buffer = __commonJS({
    "node_modules/safe-buffer/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var buffer = (init_buffer2(), __toCommonJS(buffer_exports));
      var Buffer4 = buffer.Buffer;
      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer4.from && Buffer4.alloc && Buffer4.allocUnsafe && Buffer4.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        copyProps(buffer, exports4);
        exports4.Buffer = SafeBuffer;
      }
      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer4(arg, encodingOrOffset, length);
      }
      SafeBuffer.prototype = Object.create(Buffer4.prototype);
      copyProps(Buffer4, SafeBuffer);
      SafeBuffer.from = function(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          throw new TypeError("Argument must not be a number");
        }
        return Buffer4(arg, encodingOrOffset, length);
      };
      SafeBuffer.alloc = function(size, fill, encoding) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        var buf = Buffer4(size);
        if (fill !== void 0) {
          if (typeof encoding === "string") {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };
      SafeBuffer.allocUnsafe = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return Buffer4(size);
      };
      SafeBuffer.allocUnsafeSlow = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return buffer.SlowBuffer(size);
      };
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/events.js
  var events_exports = {};
  __export(events_exports, {
    EventEmitter: () => EventEmitter,
    default: () => exports3,
    defaultMaxListeners: () => defaultMaxListeners,
    init: () => init,
    listenerCount: () => listenerCount,
    on: () => on2,
    once: () => once2
  });
  function dew2() {
    if (_dewExec2) return exports$12;
    _dewExec2 = true;
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter2() {
      EventEmitter2.init.call(this);
    }
    exports$12 = EventEmitter2;
    exports$12.once = once3;
    EventEmitter2.EventEmitter = EventEmitter2;
    EventEmitter2.prototype._events = void 0;
    EventEmitter2.prototype._eventsCount = 0;
    EventEmitter2.prototype._maxListeners = void 0;
    var defaultMaxListeners2 = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter2, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners2;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners2 = arg;
      }
    });
    EventEmitter2.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter2.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0) return EventEmitter2.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter2.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter2.prototype.emit = function emit2(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0) doError = doError && events.error === void 0;
      else if (!doError) return false;
      if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0) return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners2 = arrayClone(handler, len);
        for (var i = 0; i < len; ++i) ReflectApply(listeners2[i], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit("newListener", type, listener.listener ? listener.listener : listener);
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter2.prototype.addListener = function addListener2(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter2.prototype.on = EventEmitter2.prototype.addListener;
    EventEmitter2.prototype.prependListener = function prependListener2(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = {
        fired: false,
        wrapFn: void 0,
        target,
        type,
        listener
      };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter2.prototype.once = function once4(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter2.prototype.prependOnceListener = function prependOnceListener2(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter2.prototype.removeListener = function removeListener2(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0) return this;
      list = events[type];
      if (list === void 0) return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== void 0) this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners2(type) {
      var listeners2, events, i;
      events = this._events;
      if (events === void 0) return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
          else delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners2 = events[type];
      if (typeof listeners2 === "function") {
        this.removeListener(type, listeners2);
      } else if (listeners2 !== void 0) {
        for (i = listeners2.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners2[i]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap2) {
      var events = target._events;
      if (events === void 0) return [];
      var evlistener = events[type];
      if (evlistener === void 0) return [];
      if (typeof evlistener === "function") return unwrap2 ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap2 ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter2.prototype.listeners = function listeners2(type) {
      return _listeners(this, type, true);
    };
    EventEmitter2.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter2.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount2.call(emitter, type);
      }
    };
    EventEmitter2.prototype.listenerCount = listenerCount2;
    function listenerCount2(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i) copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once3(emitter, name2) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name2, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name2, resolver, {
          once: true
        });
        if (name2 !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
          });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name2, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name2, listener);
        } else {
          emitter.on(name2, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name2, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name2, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
    return exports$12;
  }
  var exports$12, _dewExec2, exports3, EventEmitter, defaultMaxListeners, init, listenerCount, on2, once2;
  var init_events = __esm({
    "node_modules/@jspm/core/nodelibs/browser/events.js"() {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      exports$12 = {};
      _dewExec2 = false;
      exports3 = dew2();
      exports3["once"];
      exports3.once = function(emitter, event) {
        return new Promise((resolve, reject) => {
          function eventListener(...args) {
            if (errorListener !== void 0) {
              emitter.removeListener("error", errorListener);
            }
            resolve(args);
          }
          let errorListener;
          if (event !== "error") {
            errorListener = (err) => {
              emitter.removeListener(name, eventListener);
              reject(err);
            };
            emitter.once("error", errorListener);
          }
          emitter.once(event, eventListener);
        });
      };
      exports3.on = function(emitter, event) {
        const unconsumedEventValues = [];
        const unconsumedPromises = [];
        let error = null;
        let finished = false;
        const iterator = {
          async next() {
            const value = unconsumedEventValues.shift();
            if (value) {
              return createIterResult(value, false);
            }
            if (error) {
              const p = Promise.reject(error);
              error = null;
              return p;
            }
            if (finished) {
              return createIterResult(void 0, true);
            }
            return new Promise((resolve, reject) => unconsumedPromises.push({ resolve, reject }));
          },
          async return() {
            emitter.removeListener(event, eventHandler);
            emitter.removeListener("error", errorHandler);
            finished = true;
            for (const promise of unconsumedPromises) {
              promise.resolve(createIterResult(void 0, true));
            }
            return createIterResult(void 0, true);
          },
          throw(err) {
            error = err;
            emitter.removeListener(event, eventHandler);
            emitter.removeListener("error", errorHandler);
          },
          [Symbol.asyncIterator]() {
            return this;
          }
        };
        emitter.on(event, eventHandler);
        emitter.on("error", errorHandler);
        return iterator;
        function eventHandler(...args) {
          const promise = unconsumedPromises.shift();
          if (promise) {
            promise.resolve(createIterResult(args, false));
          } else {
            unconsumedEventValues.push(args);
          }
        }
        function errorHandler(err) {
          finished = true;
          const toError = unconsumedPromises.shift();
          if (toError) {
            toError.reject(err);
          } else {
            error = err;
          }
          iterator.return();
        }
      };
      ({
        EventEmitter,
        defaultMaxListeners,
        init,
        listenerCount,
        on: on2,
        once: once2
      } = exports3);
    }
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/inherits/inherits_browser.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // node_modules/readable-stream/lib/internal/streams/stream-browser.js
  var require_stream_browser = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/stream-browser.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = (init_events(), __toCommonJS(events_exports)).EventEmitter;
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = /* @__PURE__ */ Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (var _ in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = (
            /** @type {PropertyDescriptor} */
            Object.getOwnPropertyDescriptor(obj, sym)
          );
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-tostringtag/shams.js
  var require_shams2 = __commonJS({
    "node_modules/has-tostringtag/shams.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var hasSymbols = require_shams();
      module.exports = function hasToStringTagShams() {
        return hasSymbols() && !!Symbol.toStringTag;
      };
    }
  });

  // node_modules/es-object-atoms/index.js
  var require_es_object_atoms = __commonJS({
    "node_modules/es-object-atoms/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Object;
    }
  });

  // node_modules/es-errors/index.js
  var require_es_errors = __commonJS({
    "node_modules/es-errors/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Error;
    }
  });

  // node_modules/es-errors/eval.js
  var require_eval = __commonJS({
    "node_modules/es-errors/eval.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = EvalError;
    }
  });

  // node_modules/es-errors/range.js
  var require_range = __commonJS({
    "node_modules/es-errors/range.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = RangeError;
    }
  });

  // node_modules/es-errors/ref.js
  var require_ref = __commonJS({
    "node_modules/es-errors/ref.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = ReferenceError;
    }
  });

  // node_modules/es-errors/syntax.js
  var require_syntax = __commonJS({
    "node_modules/es-errors/syntax.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = SyntaxError;
    }
  });

  // node_modules/es-errors/type.js
  var require_type = __commonJS({
    "node_modules/es-errors/type.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = TypeError;
    }
  });

  // node_modules/es-errors/uri.js
  var require_uri = __commonJS({
    "node_modules/es-errors/uri.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = URIError;
    }
  });

  // node_modules/math-intrinsics/abs.js
  var require_abs = __commonJS({
    "node_modules/math-intrinsics/abs.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Math.abs;
    }
  });

  // node_modules/math-intrinsics/floor.js
  var require_floor = __commonJS({
    "node_modules/math-intrinsics/floor.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Math.floor;
    }
  });

  // node_modules/math-intrinsics/max.js
  var require_max = __commonJS({
    "node_modules/math-intrinsics/max.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Math.max;
    }
  });

  // node_modules/math-intrinsics/min.js
  var require_min = __commonJS({
    "node_modules/math-intrinsics/min.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Math.min;
    }
  });

  // node_modules/math-intrinsics/pow.js
  var require_pow = __commonJS({
    "node_modules/math-intrinsics/pow.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Math.pow;
    }
  });

  // node_modules/math-intrinsics/round.js
  var require_round = __commonJS({
    "node_modules/math-intrinsics/round.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Math.round;
    }
  });

  // node_modules/math-intrinsics/isNaN.js
  var require_isNaN = __commonJS({
    "node_modules/math-intrinsics/isNaN.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Number.isNaN || function isNaN2(a) {
        return a !== a;
      };
    }
  });

  // node_modules/math-intrinsics/sign.js
  var require_sign = __commonJS({
    "node_modules/math-intrinsics/sign.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var $isNaN = require_isNaN();
      module.exports = function sign(number) {
        if ($isNaN(number) || number === 0) {
          return number;
        }
        return number < 0 ? -1 : 1;
      };
    }
  });

  // node_modules/gopd/gOPD.js
  var require_gOPD = __commonJS({
    "node_modules/gopd/gOPD.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Object.getOwnPropertyDescriptor;
    }
  });

  // node_modules/gopd/index.js
  var require_gopd = __commonJS({
    "node_modules/gopd/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var $gOPD = require_gOPD();
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // node_modules/es-define-property/index.js
  var require_es_define_property = __commonJS({
    "node_modules/es-define-property/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var $defineProperty = Object.defineProperty || false;
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = false;
        }
      }
      module.exports = $defineProperty;
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/get-proto/Reflect.getPrototypeOf.js
  var require_Reflect_getPrototypeOf = __commonJS({
    "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
    }
  });

  // node_modules/get-proto/Object.getPrototypeOf.js
  var require_Object_getPrototypeOf = __commonJS({
    "node_modules/get-proto/Object.getPrototypeOf.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var $Object = require_es_object_atoms();
      module.exports = $Object.getPrototypeOf || null;
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var toStr = Object.prototype.toString;
      var max = Math.max;
      var funcType = "[object Function]";
      var concatty = function concatty2(a, b) {
        var arr = [];
        for (var i = 0; i < a.length; i += 1) {
          arr[i] = a[i];
        }
        for (var j = 0; j < b.length; j += 1) {
          arr[j + a.length] = b[j];
        }
        return arr;
      };
      var slicy = function slicy2(arrLike, offset) {
        var arr = [];
        for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
          arr[j] = arrLike[i];
        }
        return arr;
      };
      var joiny = function(arr, joiner) {
        var str = "";
        for (var i = 0; i < arr.length; i += 1) {
          str += arr[i];
          if (i + 1 < arr.length) {
            str += joiner;
          }
        }
        return str;
      };
      module.exports = function bind(that) {
        var target = this;
        if (typeof target !== "function" || toStr.apply(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slicy(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(
              this,
              concatty(args, arguments)
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          }
          return target.apply(
            that,
            concatty(args, arguments)
          );
        };
        var boundLength = max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs[i] = "$" + i;
        }
        bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/call-bind-apply-helpers/functionCall.js
  var require_functionCall = __commonJS({
    "node_modules/call-bind-apply-helpers/functionCall.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Function.prototype.call;
    }
  });

  // node_modules/call-bind-apply-helpers/functionApply.js
  var require_functionApply = __commonJS({
    "node_modules/call-bind-apply-helpers/functionApply.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Function.prototype.apply;
    }
  });

  // node_modules/call-bind-apply-helpers/reflectApply.js
  var require_reflectApply = __commonJS({
    "node_modules/call-bind-apply-helpers/reflectApply.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
    }
  });

  // node_modules/call-bind-apply-helpers/actualApply.js
  var require_actualApply = __commonJS({
    "node_modules/call-bind-apply-helpers/actualApply.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var bind = require_function_bind();
      var $apply = require_functionApply();
      var $call = require_functionCall();
      var $reflectApply = require_reflectApply();
      module.exports = $reflectApply || bind.call($call, $apply);
    }
  });

  // node_modules/call-bind-apply-helpers/index.js
  var require_call_bind_apply_helpers = __commonJS({
    "node_modules/call-bind-apply-helpers/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var bind = require_function_bind();
      var $TypeError = require_type();
      var $call = require_functionCall();
      var $actualApply = require_actualApply();
      module.exports = function callBindBasic(args) {
        if (args.length < 1 || typeof args[0] !== "function") {
          throw new $TypeError("a function is required");
        }
        return $actualApply(bind, $call, args);
      };
    }
  });

  // node_modules/dunder-proto/get.js
  var require_get = __commonJS({
    "node_modules/dunder-proto/get.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var callBind = require_call_bind_apply_helpers();
      var gOPD = require_gopd();
      var hasProtoAccessor;
      try {
        hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
        [].__proto__ === Array.prototype;
      } catch (e) {
        if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
          throw e;
        }
      }
      var desc = !!hasProtoAccessor && gOPD && gOPD(
        Object.prototype,
        /** @type {keyof typeof Object.prototype} */
        "__proto__"
      );
      var $Object = Object;
      var $getPrototypeOf = $Object.getPrototypeOf;
      module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
        /** @type {import('./get')} */
        function getDunder(value) {
          return $getPrototypeOf(value == null ? value : $Object(value));
        }
      ) : false;
    }
  });

  // node_modules/get-proto/index.js
  var require_get_proto = __commonJS({
    "node_modules/get-proto/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var reflectGetProto = require_Reflect_getPrototypeOf();
      var originalGetProto = require_Object_getPrototypeOf();
      var getDunderProto = require_get();
      module.exports = reflectGetProto ? function getProto(O) {
        return reflectGetProto(O);
      } : originalGetProto ? function getProto(O) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new TypeError("getProto: not an object");
        }
        return originalGetProto(O);
      } : getDunderProto ? function getProto(O) {
        return getDunderProto(O);
      } : null;
    }
  });

  // node_modules/hasown/index.js
  var require_hasown = __commonJS({
    "node_modules/hasown/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var call = Function.prototype.call;
      var $hasOwn = Object.prototype.hasOwnProperty;
      var bind = require_function_bind();
      module.exports = bind.call(call, $hasOwn);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var undefined2;
      var $Object = require_es_object_atoms();
      var $Error = require_es_errors();
      var $EvalError = require_eval();
      var $RangeError = require_range();
      var $ReferenceError = require_ref();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var $URIError = require_uri();
      var abs = require_abs();
      var floor = require_floor();
      var max = require_max();
      var min = require_min();
      var pow = require_pow();
      var round = require_round();
      var sign = require_sign();
      var $Function = Function;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = require_gopd();
      var $defineProperty = require_es_define_property();
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? (function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      })() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var getProto = require_get_proto();
      var $ObjectGPO = require_Object_getPrototypeOf();
      var $ReflectGPO = require_Reflect_getPrototypeOf();
      var $apply = require_functionApply();
      var $call = require_functionCall();
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": $Error,
        "%eval%": eval,
        // eslint-disable-line no-eval
        "%EvalError%": $EvalError,
        "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": $Object,
        "%Object.getOwnPropertyDescriptor%": $gOPD,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": $RangeError,
        "%ReferenceError%": $ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": $URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
        "%Function.prototype.call%": $call,
        "%Function.prototype.apply%": $apply,
        "%Object.defineProperty%": $defineProperty,
        "%Object.getPrototypeOf%": $ObjectGPO,
        "%Math.abs%": abs,
        "%Math.floor%": floor,
        "%Math.max%": max,
        "%Math.min%": min,
        "%Math.pow%": pow,
        "%Math.round%": round,
        "%Math.sign%": sign,
        "%Reflect.getPrototypeOf%": $ReflectGPO
      };
      if (getProto) {
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
      }
      var errorProto;
      var doEval = function doEval2(name2) {
        var value;
        if (name2 === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name2 === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name2 === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name2 === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name2 === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen && getProto) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name2] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind = require_function_bind();
      var hasOwn = require_hasown();
      var $concat = bind.call($call, Array.prototype.concat);
      var $spliceApply = bind.call($apply, Array.prototype.splice);
      var $replace = bind.call($call, String.prototype.replace);
      var $strSlice = bind.call($call, String.prototype.slice);
      var $exec = bind.call($call, RegExp.prototype.exec);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
        var intrinsicName = name2;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
      };
      module.exports = function GetIntrinsic(name2, allowMissing) {
        if (typeof name2 !== "string" || name2.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name2) === null) {
          throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        var parts = stringToPath(name2);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
              }
              return void undefined2;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/call-bound/index.js
  var require_call_bound = __commonJS({
    "node_modules/call-bound/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var GetIntrinsic = require_get_intrinsic();
      var callBindBasic = require_call_bind_apply_helpers();
      var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
      module.exports = function callBoundIntrinsic(name2, allowMissing) {
        var intrinsic = (
          /** @type {(this: unknown, ...args: unknown[]) => unknown} */
          GetIntrinsic(name2, !!allowMissing)
        );
        if (typeof intrinsic === "function" && $indexOf(name2, ".prototype.") > -1) {
          return callBindBasic(
            /** @type {const} */
            [intrinsic]
          );
        }
        return intrinsic;
      };
    }
  });

  // node_modules/is-arguments/index.js
  var require_is_arguments = __commonJS({
    "node_modules/is-arguments/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var hasToStringTag = require_shams2()();
      var callBound = require_call_bound();
      var $toString = callBound("Object.prototype.toString");
      var isStandardArguments = function isArguments(value) {
        if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
          return false;
        }
        return $toString(value) === "[object Arguments]";
      };
      var isLegacyArguments = function isArguments(value) {
        if (isStandardArguments(value)) {
          return true;
        }
        return value !== null && typeof value === "object" && "length" in value && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && "callee" in value && $toString(value.callee) === "[object Function]";
      };
      var supportsStandardArguments = (function() {
        return isStandardArguments(arguments);
      })();
      isStandardArguments.isLegacyArguments = isLegacyArguments;
      module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
    }
  });

  // node_modules/is-regex/index.js
  var require_is_regex = __commonJS({
    "node_modules/is-regex/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var callBound = require_call_bound();
      var hasToStringTag = require_shams2()();
      var hasOwn = require_hasown();
      var gOPD = require_gopd();
      var fn;
      if (hasToStringTag) {
        $exec = callBound("RegExp.prototype.exec");
        isRegexMarker = {};
        throwRegexMarker = function() {
          throw isRegexMarker;
        };
        badStringifier = {
          toString: throwRegexMarker,
          valueOf: throwRegexMarker
        };
        if (typeof Symbol.toPrimitive === "symbol") {
          badStringifier[Symbol.toPrimitive] = throwRegexMarker;
        }
        fn = function isRegex(value) {
          if (!value || typeof value !== "object") {
            return false;
          }
          var descriptor = (
            /** @type {NonNullable<typeof gOPD>} */
            gOPD(
              /** @type {{ lastIndex?: unknown }} */
              value,
              "lastIndex"
            )
          );
          var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, "value");
          if (!hasLastIndexDataProperty) {
            return false;
          }
          try {
            $exec(
              value,
              /** @type {string} */
              /** @type {unknown} */
              badStringifier
            );
          } catch (e) {
            return e === isRegexMarker;
          }
        };
      } else {
        $toString = callBound("Object.prototype.toString");
        regexClass = "[object RegExp]";
        fn = function isRegex(value) {
          if (!value || typeof value !== "object" && typeof value !== "function") {
            return false;
          }
          return $toString(value) === regexClass;
        };
      }
      var $exec;
      var isRegexMarker;
      var throwRegexMarker;
      var badStringifier;
      var $toString;
      var regexClass;
      module.exports = fn;
    }
  });

  // node_modules/safe-regex-test/index.js
  var require_safe_regex_test = __commonJS({
    "node_modules/safe-regex-test/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var callBound = require_call_bound();
      var isRegex = require_is_regex();
      var $exec = callBound("RegExp.prototype.exec");
      var $TypeError = require_type();
      module.exports = function regexTester(regex) {
        if (!isRegex(regex)) {
          throw new $TypeError("`regex` must be a RegExp");
        }
        return function test(s) {
          return $exec(regex, s) !== null;
        };
      };
    }
  });

  // node_modules/generator-function/index.js
  var require_generator_function = __commonJS({
    "node_modules/generator-function/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var cached = (
        /** @type {GeneratorFunctionConstructor} */
        function* () {
        }.constructor
      );
      module.exports = () => cached;
    }
  });

  // node_modules/is-generator-function/index.js
  var require_is_generator_function = __commonJS({
    "node_modules/is-generator-function/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var callBound = require_call_bound();
      var safeRegexTest = require_safe_regex_test();
      var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
      var hasToStringTag = require_shams2()();
      var getProto = require_get_proto();
      var toStr = callBound("Object.prototype.toString");
      var fnToStr = callBound("Function.prototype.toString");
      var getGeneratorFunction = require_generator_function();
      module.exports = function isGeneratorFunction(fn) {
        if (typeof fn !== "function") {
          return false;
        }
        if (isFnRegex(fnToStr(fn))) {
          return true;
        }
        if (!hasToStringTag) {
          var str = toStr(fn);
          return str === "[object GeneratorFunction]";
        }
        if (!getProto) {
          return false;
        }
        var GeneratorFunction = getGeneratorFunction();
        return GeneratorFunction && getProto(fn) === GeneratorFunction.prototype;
      };
    }
  });

  // node_modules/is-callable/index.js
  var require_is_callable = __commonJS({
    "node_modules/is-callable/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var fnToStr = Function.prototype.toString;
      var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
      var badArrayLike;
      var isCallableMarker;
      if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
        try {
          badArrayLike = Object.defineProperty({}, "length", {
            get: function() {
              throw isCallableMarker;
            }
          });
          isCallableMarker = {};
          reflectApply(function() {
            throw 42;
          }, null, badArrayLike);
        } catch (_) {
          if (_ !== isCallableMarker) {
            reflectApply = null;
          }
        }
      } else {
        reflectApply = null;
      }
      var constructorRegex = /^\s*class\b/;
      var isES6ClassFn = function isES6ClassFunction(value) {
        try {
          var fnStr = fnToStr.call(value);
          return constructorRegex.test(fnStr);
        } catch (e) {
          return false;
        }
      };
      var tryFunctionObject = function tryFunctionToStr(value) {
        try {
          if (isES6ClassFn(value)) {
            return false;
          }
          fnToStr.call(value);
          return true;
        } catch (e) {
          return false;
        }
      };
      var toStr = Object.prototype.toString;
      var objectClass = "[object Object]";
      var fnClass = "[object Function]";
      var genClass = "[object GeneratorFunction]";
      var ddaClass = "[object HTMLAllCollection]";
      var ddaClass2 = "[object HTML document.all class]";
      var ddaClass3 = "[object HTMLCollection]";
      var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
      var isIE68 = !(0 in [,]);
      var isDDA = function isDocumentDotAll() {
        return false;
      };
      if (typeof document === "object") {
        all = document.all;
        if (toStr.call(all) === toStr.call(document.all)) {
          isDDA = function isDocumentDotAll(value) {
            if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
              try {
                var str = toStr.call(value);
                return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
              } catch (e) {
              }
            }
            return false;
          };
        }
      }
      var all;
      module.exports = reflectApply ? function isCallable(value) {
        if (isDDA(value)) {
          return true;
        }
        if (!value) {
          return false;
        }
        if (typeof value !== "function" && typeof value !== "object") {
          return false;
        }
        try {
          reflectApply(value, null, badArrayLike);
        } catch (e) {
          if (e !== isCallableMarker) {
            return false;
          }
        }
        return !isES6ClassFn(value) && tryFunctionObject(value);
      } : function isCallable(value) {
        if (isDDA(value)) {
          return true;
        }
        if (!value) {
          return false;
        }
        if (typeof value !== "function" && typeof value !== "object") {
          return false;
        }
        if (hasToStringTag) {
          return tryFunctionObject(value);
        }
        if (isES6ClassFn(value)) {
          return false;
        }
        var strClass = toStr.call(value);
        if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
          return false;
        }
        return tryFunctionObject(value);
      };
    }
  });

  // node_modules/for-each/index.js
  var require_for_each = __commonJS({
    "node_modules/for-each/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var isCallable = require_is_callable();
      var toStr = Object.prototype.toString;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var forEachArray = function forEachArray2(array, iterator, receiver) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
              iterator(array[i], i, array);
            } else {
              iterator.call(receiver, array[i], i, array);
            }
          }
        }
      };
      var forEachString = function forEachString2(string, iterator, receiver) {
        for (var i = 0, len = string.length; i < len; i++) {
          if (receiver == null) {
            iterator(string.charAt(i), i, string);
          } else {
            iterator.call(receiver, string.charAt(i), i, string);
          }
        }
      };
      var forEachObject = function forEachObject2(object, iterator, receiver) {
        for (var k in object) {
          if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
              iterator(object[k], k, object);
            } else {
              iterator.call(receiver, object[k], k, object);
            }
          }
        }
      };
      function isArray(x) {
        return toStr.call(x) === "[object Array]";
      }
      module.exports = function forEach(list, iterator, thisArg) {
        if (!isCallable(iterator)) {
          throw new TypeError("iterator must be a function");
        }
        var receiver;
        if (arguments.length >= 3) {
          receiver = thisArg;
        }
        if (isArray(list)) {
          forEachArray(list, iterator, receiver);
        } else if (typeof list === "string") {
          forEachString(list, iterator, receiver);
        } else {
          forEachObject(list, iterator, receiver);
        }
      };
    }
  });

  // node_modules/possible-typed-array-names/index.js
  var require_possible_typed_array_names = __commonJS({
    "node_modules/possible-typed-array-names/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = [
        "Float16Array",
        "Float32Array",
        "Float64Array",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "BigInt64Array",
        "BigUint64Array"
      ];
    }
  });

  // node_modules/available-typed-arrays/index.js
  var require_available_typed_arrays = __commonJS({
    "node_modules/available-typed-arrays/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var possibleNames = require_possible_typed_array_names();
      var g = typeof globalThis === "undefined" ? globalThis : globalThis;
      module.exports = function availableTypedArrays() {
        var out = [];
        for (var i = 0; i < possibleNames.length; i++) {
          if (typeof g[possibleNames[i]] === "function") {
            out[out.length] = possibleNames[i];
          }
        }
        return out;
      };
    }
  });

  // node_modules/define-data-property/index.js
  var require_define_data_property = __commonJS({
    "node_modules/define-data-property/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var $defineProperty = require_es_define_property();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var gopd = require_gopd();
      module.exports = function defineDataProperty(obj, property, value) {
        if (!obj || typeof obj !== "object" && typeof obj !== "function") {
          throw new $TypeError("`obj` must be an object or a function`");
        }
        if (typeof property !== "string" && typeof property !== "symbol") {
          throw new $TypeError("`property` must be a string or a symbol`");
        }
        if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
          throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
          throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
          throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
          throw new $TypeError("`loose`, if provided, must be a boolean");
        }
        var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
        var nonWritable = arguments.length > 4 ? arguments[4] : null;
        var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
        var loose = arguments.length > 6 ? arguments[6] : false;
        var desc = !!gopd && gopd(obj, property);
        if ($defineProperty) {
          $defineProperty(obj, property, {
            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
            value,
            writable: nonWritable === null && desc ? desc.writable : !nonWritable
          });
        } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
          obj[property] = value;
        } else {
          throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        }
      };
    }
  });

  // node_modules/has-property-descriptors/index.js
  var require_has_property_descriptors = __commonJS({
    "node_modules/has-property-descriptors/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var $defineProperty = require_es_define_property();
      var hasPropertyDescriptors = function hasPropertyDescriptors2() {
        return !!$defineProperty;
      };
      hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
        if (!$defineProperty) {
          return null;
        }
        try {
          return $defineProperty([], "length", { value: 1 }).length !== 1;
        } catch (e) {
          return true;
        }
      };
      module.exports = hasPropertyDescriptors;
    }
  });

  // node_modules/set-function-length/index.js
  var require_set_function_length = __commonJS({
    "node_modules/set-function-length/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var GetIntrinsic = require_get_intrinsic();
      var define = require_define_data_property();
      var hasDescriptors = require_has_property_descriptors()();
      var gOPD = require_gopd();
      var $TypeError = require_type();
      var $floor = GetIntrinsic("%Math.floor%");
      module.exports = function setFunctionLength(fn, length) {
        if (typeof fn !== "function") {
          throw new $TypeError("`fn` is not a function");
        }
        if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
          throw new $TypeError("`length` must be a positive 32-bit integer");
        }
        var loose = arguments.length > 2 && !!arguments[2];
        var functionLengthIsConfigurable = true;
        var functionLengthIsWritable = true;
        if ("length" in fn && gOPD) {
          var desc = gOPD(fn, "length");
          if (desc && !desc.configurable) {
            functionLengthIsConfigurable = false;
          }
          if (desc && !desc.writable) {
            functionLengthIsWritable = false;
          }
        }
        if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
          if (hasDescriptors) {
            define(
              /** @type {Parameters<define>[0]} */
              fn,
              "length",
              length,
              true,
              true
            );
          } else {
            define(
              /** @type {Parameters<define>[0]} */
              fn,
              "length",
              length
            );
          }
        }
        return fn;
      };
    }
  });

  // node_modules/call-bind-apply-helpers/applyBind.js
  var require_applyBind = __commonJS({
    "node_modules/call-bind-apply-helpers/applyBind.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var bind = require_function_bind();
      var $apply = require_functionApply();
      var actualApply = require_actualApply();
      module.exports = function applyBind() {
        return actualApply(bind, $apply, arguments);
      };
    }
  });

  // node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var setFunctionLength = require_set_function_length();
      var $defineProperty = require_es_define_property();
      var callBindBasic = require_call_bind_apply_helpers();
      var applyBind = require_applyBind();
      module.exports = function callBind(originalFunction) {
        var func = callBindBasic(arguments);
        var adjustedLength = 1 + originalFunction.length - (arguments.length - 1);
        return setFunctionLength(
          func,
          adjustedLength > 0 ? adjustedLength : 0,
          true
        );
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/which-typed-array/index.js
  var require_which_typed_array = __commonJS({
    "node_modules/which-typed-array/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var forEach = require_for_each();
      var availableTypedArrays = require_available_typed_arrays();
      var callBind = require_call_bind();
      var callBound = require_call_bound();
      var gOPD = require_gopd();
      var getProto = require_get_proto();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? globalThis : globalThis;
      var typedArrays = availableTypedArrays();
      var $slice = callBound("String.prototype.slice");
      var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var cache = { __proto__: null };
      if (hasToStringTag && gOPD && getProto) {
        forEach(typedArrays, function(typedArray) {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr && getProto) {
            var proto = getProto(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor && proto) {
              var superProto = getProto(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            if (descriptor && descriptor.get) {
              var bound = callBind(descriptor.get);
              cache[
                /** @type {`$${TypedArrayName}`} */
                "$" + typedArray
              ] = bound;
            }
          }
        });
      } else {
        forEach(typedArrays, function(typedArray) {
          var arr = new g[typedArray]();
          var fn = arr.slice || arr.set;
          if (fn) {
            var bound = (
              /** @type {BoundSlice | BoundSet} */
              // @ts-expect-error TODO FIXME
              callBind(fn)
            );
            cache[
              /** @type {`$${TypedArrayName}`} */
              "$" + typedArray
            ] = bound;
          }
        });
      }
      function tryTypedArrays(value) {
        var found = false;
        forEach(
          /** @type {Record<`$${TypedArrayName}`, Getter>} */
          cache,
          /** @param {Getter} getter @param {`$${TypedArrayName}`} typedArray */
          function(getter, typedArray) {
            if (!found) {
              try {
                if ("$" + getter(value) === typedArray) {
                  found = /** @type {TypedArrayName} */
                  $slice(typedArray, 1);
                }
              } catch (e) {
              }
            }
          }
        );
        return found;
      }
      function trySlices(value) {
        var found = false;
        forEach(
          /** @type {Record<`$${TypedArrayName}`, Getter>} */
          cache,
          /** @param {Getter} getter @param {`$${TypedArrayName}`} name */
          function(getter, name2) {
            if (!found) {
              try {
                getter(value);
                found = /** @type {TypedArrayName} */
                $slice(name2, 1);
              } catch (e) {
              }
            }
          }
        );
        return found;
      }
      function isTATag(tag) {
        return $indexOf(typedArrays, tag) > -1;
      }
      module.exports = function whichTypedArray(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        if (!hasToStringTag) {
          var tag = $slice($toString(value), 8, -1);
          if (isTATag(tag)) {
            return tag;
          }
          if (tag !== "Object") {
            return false;
          }
          return trySlices(value);
        }
        if (!gOPD) {
          return null;
        }
        return tryTypedArrays(value);
      };
    }
  });

  // node_modules/is-typed-array/index.js
  var require_is_typed_array = __commonJS({
    "node_modules/is-typed-array/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var whichTypedArray = require_which_typed_array();
      module.exports = function isTypedArray(value) {
        return !!whichTypedArray(value);
      };
    }
  });

  // node_modules/util/support/types.js
  var require_types = __commonJS({
    "node_modules/util/support/types.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var isArgumentsObject = require_is_arguments();
      var isGeneratorFunction = require_is_generator_function();
      var whichTypedArray = require_which_typed_array();
      var isTypedArray = require_is_typed_array();
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== "undefined";
      var SymbolSupported = typeof Symbol !== "undefined";
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      var bigIntValue;
      if (SymbolSupported) {
        symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      var symbolValue;
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (typeof value !== "object") {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports4.isArgumentsObject = isArgumentsObject;
      exports4.isGeneratorFunction = isGeneratorFunction;
      exports4.isTypedArray = isTypedArray;
      function isPromise(input) {
        return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
      }
      exports4.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray(value) || isDataView(value);
      }
      exports4.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray(value) === "Uint8Array";
      }
      exports4.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray(value) === "Uint8ClampedArray";
      }
      exports4.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray(value) === "Uint16Array";
      }
      exports4.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray(value) === "Uint32Array";
      }
      exports4.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray(value) === "Int8Array";
      }
      exports4.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray(value) === "Int16Array";
      }
      exports4.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray(value) === "Int32Array";
      }
      exports4.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray(value) === "Float32Array";
      }
      exports4.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray(value) === "Float64Array";
      }
      exports4.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray(value) === "BigInt64Array";
      }
      exports4.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray(value) === "BigUint64Array";
      }
      exports4.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === "[object Map]";
      }
      isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
      function isMap(value) {
        if (typeof Map === "undefined") {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports4.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === "[object Set]";
      }
      isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
      function isSet(value) {
        if (typeof Set === "undefined") {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports4.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === "[object WeakMap]";
      }
      isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === "undefined") {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports4.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === "[object WeakSet]";
      }
      isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports4.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === "[object ArrayBuffer]";
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === "undefined") {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports4.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === "[object DataView]";
      }
      isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === "undefined") {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports4.isDataView = isDataView;
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === "[object SharedArrayBuffer]";
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === "undefined") {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === "undefined") {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports4.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === "[object AsyncFunction]";
      }
      exports4.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === "[object Map Iterator]";
      }
      exports4.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === "[object Set Iterator]";
      }
      exports4.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === "[object Generator]";
      }
      exports4.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === "[object WebAssembly.Module]";
      }
      exports4.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports4.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports4.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports4.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports4.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports4.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports4.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports4.isAnyArrayBuffer = isAnyArrayBuffer;
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
        Object.defineProperty(exports4, method, {
          enumerable: false,
          value: function() {
            throw new Error(method + " is not supported in userland");
          }
        });
      });
    }
  });

  // node_modules/util/support/isBufferBrowser.js
  var require_isBufferBrowser = __commonJS({
    "node_modules/util/support/isBufferBrowser.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
      };
    }
  });

  // node_modules/util/util.js
  var require_util = __commonJS({
    "node_modules/util/util.js"(exports4) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
        var keys = Object.keys(obj);
        var descriptors = {};
        for (var i = 0; i < keys.length; i++) {
          descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
        }
        return descriptors;
      };
      var formatRegExp = /%[sdj%]/g;
      exports4.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
          }
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x2) {
          if (x2 === "%%") return "%";
          if (i >= len) return x2;
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject(x)) {
            str += " " + x;
          } else {
            str += " " + inspect(x);
          }
        }
        return str;
      };
      exports4.deprecate = function(fn, msg) {
        if (typeof process2 !== "undefined" && process2.noDeprecation === true) {
          return fn;
        }
        if (typeof process2 === "undefined") {
          return function() {
            return exports4.deprecate(fn, msg).apply(this, arguments);
          };
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process2.throwDeprecation) {
              throw new Error(msg);
            } else if (process2.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnvRegex = /^$/;
      if (process2.env.NODE_DEBUG) {
        debugEnv = process2.env.NODE_DEBUG;
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
        debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
      }
      var debugEnv;
      exports4.debuglog = function(set) {
        set = set.toUpperCase();
        if (!debugs[set]) {
          if (debugEnvRegex.test(set)) {
            var pid2 = process2.pid;
            debugs[set] = function() {
              var msg = exports4.format.apply(exports4, arguments);
              console.error("%s %d: %s", set, pid2, msg);
            };
          } else {
            debugs[set] = function() {
            };
          }
        }
        return debugs[set];
      };
      function inspect(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        if (arguments.length >= 3) ctx.depth = arguments[2];
        if (arguments.length >= 4) ctx.colors = arguments[3];
        if (isBoolean(opts)) {
          ctx.showHidden = opts;
        } else if (opts) {
          exports4._extend(ctx, opts);
        }
        if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
        if (isUndefined(ctx.depth)) ctx.depth = 2;
        if (isUndefined(ctx.colors)) ctx.colors = false;
        if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
        if (ctx.colors) ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
      }
      exports4.inspect = inspect;
      inspect.colors = {
        "bold": [1, 22],
        "italic": [3, 23],
        "underline": [4, 24],
        "inverse": [7, 27],
        "white": [37, 39],
        "grey": [90, 39],
        "black": [30, 39],
        "blue": [34, 39],
        "cyan": [36, 39],
        "green": [32, 39],
        "magenta": [35, 39],
        "red": [31, 39],
        "yellow": [33, 39]
      };
      inspect.styles = {
        "special": "cyan",
        "number": "yellow",
        "boolean": "yellow",
        "undefined": "grey",
        "null": "bold",
        "string": "green",
        "date": "magenta",
        // "name": intentionally not styling
        "regexp": "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
        if (style) {
          return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
        value.inspect !== exports4.inspect && // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) {
          return primitive;
        }
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        if (ctx.showHidden) {
          keys = Object.getOwnPropertyNames(value);
        }
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys.length === 0) {
          if (isFunction(value)) {
            var name2 = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name2 + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        var base = "", array = false, braces = ["{", "}"];
        if (isArray(value)) {
          array = true;
          braces = ["[", "]"];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx.stylize("[Object]", "special");
          }
        }
        ctx.seen.push(value);
        var output;
        if (array) {
          output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function(key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
          });
        }
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value))
          return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value))
          return ctx.stylize("" + value, "number");
        if (isBoolean(value))
          return ctx.stylize("" + value, "boolean");
        if (isNull(value))
          return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(
              ctx,
              value,
              recurseTimes,
              visibleKeys,
              String(i),
              true
            ));
          } else {
            output.push("");
          }
        }
        keys.forEach(function(key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(
              ctx,
              value,
              recurseTimes,
              visibleKeys,
              key,
              true
            ));
          }
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name2, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(visibleKeys, key)) {
          name2 = "[" + key + "]";
        }
        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx, desc.value, null);
            } else {
              str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").slice(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(name2)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }
          name2 = JSON.stringify("" + key);
          if (name2.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name2 = name2.slice(1, -1);
            name2 = ctx.stylize(name2, "name");
          } else {
            name2 = name2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name2 = ctx.stylize(name2, "string");
          }
        }
        return name2 + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          if (cur.indexOf("\n") >= 0) numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      exports4.types = require_types();
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports4.isArray = isArray;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports4.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports4.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports4.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports4.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports4.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports4.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports4.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject(re) && objectToString(re) === "[object RegExp]";
      }
      exports4.isRegExp = isRegExp;
      exports4.types.isRegExp = isRegExp;
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports4.isObject = isObject;
      function isDate(d) {
        return isObject(d) && objectToString(d) === "[object Date]";
      }
      exports4.isDate = isDate;
      exports4.types.isDate = isDate;
      function isError(e) {
        return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      exports4.isError = isError;
      exports4.types.isNativeError = isError;
      function isFunction(arg) {
        return typeof arg === "function";
      }
      exports4.isFunction = isFunction;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
        typeof arg === "undefined";
      }
      exports4.isPrimitive = isPrimitive;
      exports4.isBuffer = require_isBufferBrowser();
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function timestamp() {
        var d = /* @__PURE__ */ new Date();
        var time = [
          pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())
        ].join(":");
        return [d.getDate(), months[d.getMonth()], time].join(" ");
      }
      exports4.log = function() {
        console.log("%s - %s", timestamp(), exports4.format.apply(exports4, arguments));
      };
      exports4.inherits = require_inherits_browser();
      exports4._extend = function(origin, add) {
        if (!add || !isObject(add)) return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
      exports4.promisify = function promisify(original) {
        if (typeof original !== "function")
          throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];
          if (typeof fn !== "function") {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }
        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
          });
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          args.push(function(err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return Object.defineProperties(
          fn,
          getOwnPropertyDescriptors(original)
        );
      };
      exports4.promisify.custom = kCustomPromisifiedSymbol;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error("Promise was rejected with a falsy value");
          newReason.reason = reason;
          reason = newReason;
        }
        return cb(reason);
      }
      function callbackify(original) {
        if (typeof original !== "function") {
          throw new TypeError('The "original" argument must be of type Function');
        }
        function callbackified() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          var maybeCb = args.pop();
          if (typeof maybeCb !== "function") {
            throw new TypeError("The last argument must be of type Function");
          }
          var self2 = this;
          var cb = function() {
            return maybeCb.apply(self2, arguments);
          };
          original.apply(this, args).then(
            function(ret) {
              process2.nextTick(cb.bind(null, null, ret));
            },
            function(rej) {
              process2.nextTick(callbackifyOnRejected.bind(null, rej, cb));
            }
          );
        }
        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(
          callbackified,
          getOwnPropertyDescriptors(original)
        );
        return callbackified;
      }
      exports4.callbackify = callbackify;
    }
  });

  // node_modules/readable-stream/lib/internal/streams/buffer_list.js
  var require_buffer_list = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      function ownKeys2(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      var _require = (init_buffer2(), __toCommonJS(buffer_exports));
      var Buffer4 = _require.Buffer;
      var _require2 = require_util();
      var inspect = _require2.inspect;
      var custom = inspect && inspect.custom || "inspect";
      function copyBuffer(src, target, offset) {
        Buffer4.prototype.copy.call(src, target, offset);
      }
      module.exports = /* @__PURE__ */ (function() {
        function BufferList() {
          _classCallCheck(this, BufferList);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        _createClass(BufferList, [{
          key: "push",
          value: function push(v) {
            var entry = {
              data: v,
              next: null
            };
            if (this.length > 0) this.tail.next = entry;
            else this.head = entry;
            this.tail = entry;
            ++this.length;
          }
        }, {
          key: "unshift",
          value: function unshift(v) {
            var entry = {
              data: v,
              next: this.head
            };
            if (this.length === 0) this.tail = entry;
            this.head = entry;
            ++this.length;
          }
        }, {
          key: "shift",
          value: function shift() {
            if (this.length === 0) return;
            var ret = this.head.data;
            if (this.length === 1) this.head = this.tail = null;
            else this.head = this.head.next;
            --this.length;
            return ret;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }
        }, {
          key: "join",
          value: function join(s) {
            if (this.length === 0) return "";
            var p = this.head;
            var ret = "" + p.data;
            while (p = p.next) ret += s + p.data;
            return ret;
          }
        }, {
          key: "concat",
          value: function concat(n) {
            if (this.length === 0) return Buffer4.alloc(0);
            var ret = Buffer4.allocUnsafe(n >>> 0);
            var p = this.head;
            var i = 0;
            while (p) {
              copyBuffer(p.data, ret, i);
              i += p.data.length;
              p = p.next;
            }
            return ret;
          }
          // Consumes a specified amount of bytes or characters from the buffered data.
        }, {
          key: "consume",
          value: function consume(n, hasStrings) {
            var ret;
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n);
              this.head.data = this.head.data.slice(n);
            } else if (n === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n);
            }
            return ret;
          }
        }, {
          key: "first",
          value: function first() {
            return this.head.data;
          }
          // Consumes a specified amount of characters from the buffered data.
        }, {
          key: "_getString",
          value: function _getString(n) {
            var p = this.head;
            var c = 1;
            var ret = p.data;
            n -= ret.length;
            while (p = p.next) {
              var str = p.data;
              var nb = n > str.length ? str.length : n;
              if (nb === str.length) ret += str;
              else ret += str.slice(0, n);
              n -= nb;
              if (n === 0) {
                if (nb === str.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = str.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
          // Consumes a specified amount of bytes from the buffered data.
        }, {
          key: "_getBuffer",
          value: function _getBuffer(n) {
            var ret = Buffer4.allocUnsafe(n);
            var p = this.head;
            var c = 1;
            p.data.copy(ret);
            n -= p.data.length;
            while (p = p.next) {
              var buf = p.data;
              var nb = n > buf.length ? buf.length : n;
              buf.copy(ret, ret.length - n, 0, nb);
              n -= nb;
              if (n === 0) {
                if (nb === buf.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = buf.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
          // Make sure the linked list only shows the minimal necessary information.
        }, {
          key: custom,
          value: function value(_, options) {
            return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
              // Only inspect one level.
              depth: 0,
              // It should not recurse.
              customInspect: false
            }));
          }
        }]);
        return BufferList;
      })();
    }
  });

  // node_modules/readable-stream/lib/internal/streams/destroy.js
  var require_destroy = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      function destroy(err, cb) {
        var _this = this;
        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;
        if (readableDestroyed || writableDestroyed) {
          if (cb) {
            cb(err);
          } else if (err) {
            if (!this._writableState) {
              process2.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              process2.nextTick(emitErrorNT, this, err);
            }
          }
          return this;
        }
        if (this._readableState) {
          this._readableState.destroyed = true;
        }
        if (this._writableState) {
          this._writableState.destroyed = true;
        }
        this._destroy(err || null, function(err2) {
          if (!cb && err2) {
            if (!_this._writableState) {
              process2.nextTick(emitErrorAndCloseNT, _this, err2);
            } else if (!_this._writableState.errorEmitted) {
              _this._writableState.errorEmitted = true;
              process2.nextTick(emitErrorAndCloseNT, _this, err2);
            } else {
              process2.nextTick(emitCloseNT, _this);
            }
          } else if (cb) {
            process2.nextTick(emitCloseNT, _this);
            cb(err2);
          } else {
            process2.nextTick(emitCloseNT, _this);
          }
        });
        return this;
      }
      function emitErrorAndCloseNT(self2, err) {
        emitErrorNT(self2, err);
        emitCloseNT(self2);
      }
      function emitCloseNT(self2) {
        if (self2._writableState && !self2._writableState.emitClose) return;
        if (self2._readableState && !self2._readableState.emitClose) return;
        self2.emit("close");
      }
      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }
        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finalCalled = false;
          this._writableState.prefinished = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      }
      function emitErrorNT(self2, err) {
        self2.emit("error", err);
      }
      function errorOrDestroy(stream, err) {
        var rState = stream._readableState;
        var wState = stream._writableState;
        if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
        else stream.emit("error", err);
      }
      module.exports = {
        destroy,
        undestroy,
        errorOrDestroy
      };
    }
  });

  // node_modules/readable-stream/errors-browser.js
  var require_errors_browser = __commonJS({
    "node_modules/readable-stream/errors-browser.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      var codes = {};
      function createErrorType(code, message, Base) {
        if (!Base) {
          Base = Error;
        }
        function getMessage(arg1, arg2, arg3) {
          if (typeof message === "string") {
            return message;
          } else {
            return message(arg1, arg2, arg3);
          }
        }
        var NodeError = /* @__PURE__ */ (function(_Base) {
          _inheritsLoose(NodeError2, _Base);
          function NodeError2(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
          }
          return NodeError2;
        })(Base);
        NodeError.prototype.name = Base.name;
        NodeError.prototype.code = code;
        codes[code] = NodeError;
      }
      function oneOf(expected, thing) {
        if (Array.isArray(expected)) {
          var len = expected.length;
          expected = expected.map(function(i) {
            return String(i);
          });
          if (len > 2) {
            return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
          } else if (len === 2) {
            return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
          } else {
            return "of ".concat(thing, " ").concat(expected[0]);
          }
        } else {
          return "of ".concat(thing, " ").concat(String(expected));
        }
      }
      function startsWith(str, search, pos) {
        return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
      }
      function endsWith(str, search, this_len) {
        if (this_len === void 0 || this_len > str.length) {
          this_len = str.length;
        }
        return str.substring(this_len - search.length, this_len) === search;
      }
      function includes(str, search, start) {
        if (typeof start !== "number") {
          start = 0;
        }
        if (start + search.length > str.length) {
          return false;
        } else {
          return str.indexOf(search, start) !== -1;
        }
      }
      createErrorType("ERR_INVALID_OPT_VALUE", function(name2, value) {
        return 'The value "' + value + '" is invalid for option "' + name2 + '"';
      }, TypeError);
      createErrorType("ERR_INVALID_ARG_TYPE", function(name2, expected, actual) {
        var determiner;
        if (typeof expected === "string" && startsWith(expected, "not ")) {
          determiner = "must not be";
          expected = expected.replace(/^not /, "");
        } else {
          determiner = "must be";
        }
        var msg;
        if (endsWith(name2, " argument")) {
          msg = "The ".concat(name2, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
        } else {
          var type = includes(name2, ".") ? "property" : "argument";
          msg = 'The "'.concat(name2, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
        }
        msg += ". Received type ".concat(typeof actual);
        return msg;
      }, TypeError);
      createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
      createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name2) {
        return "The " + name2 + " method is not implemented";
      });
      createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
      createErrorType("ERR_STREAM_DESTROYED", function(name2) {
        return "Cannot call " + name2 + " after a stream was destroyed";
      });
      createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
      createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
      createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
      createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
      createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
        return "Unknown encoding: " + arg;
      }, TypeError);
      createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
      module.exports.codes = codes;
    }
  });

  // node_modules/readable-stream/lib/internal/streams/state.js
  var require_state = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/state.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var ERR_INVALID_OPT_VALUE = require_errors_browser().codes.ERR_INVALID_OPT_VALUE;
      function highWaterMarkFrom(options, isDuplex, duplexKey) {
        return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
      }
      function getHighWaterMark(state, options, duplexKey, isDuplex) {
        var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
        if (hwm != null) {
          if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name2 = isDuplex ? duplexKey : "highWaterMark";
            throw new ERR_INVALID_OPT_VALUE(name2, hwm);
          }
          return Math.floor(hwm);
        }
        return state.objectMode ? 16 : 16 * 1024;
      }
      module.exports = {
        getHighWaterMark
      };
    }
  });

  // node_modules/util-deprecate/browser.js
  var require_browser = __commonJS({
    "node_modules/util-deprecate/browser.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = deprecate;
      function deprecate(fn, msg) {
        if (config2("noDeprecation")) {
          return fn;
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (config2("throwDeprecation")) {
              throw new Error(msg);
            } else if (config2("traceDeprecation")) {
              console.trace(msg);
            } else {
              console.warn(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      }
      function config2(name2) {
        try {
          if (!globalThis.localStorage) return false;
        } catch (_) {
          return false;
        }
        var val = globalThis.localStorage[name2];
        if (null == val) return false;
        return String(val).toLowerCase() === "true";
      }
    }
  });

  // node_modules/readable-stream/lib/_stream_writable.js
  var require_stream_writable = __commonJS({
    "node_modules/readable-stream/lib/_stream_writable.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Writable;
      function CorkedRequest(state) {
        var _this = this;
        this.next = null;
        this.entry = null;
        this.finish = function() {
          onCorkedFinish(_this, state);
        };
      }
      var Duplex;
      Writable.WritableState = WritableState;
      var internalUtil = {
        deprecate: require_browser()
      };
      var Stream = require_stream_browser();
      var Buffer4 = (init_buffer2(), __toCommonJS(buffer_exports)).Buffer;
      var OurUint8Array = (typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer4.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer4.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var destroyImpl = require_destroy();
      var _require = require_state();
      var getHighWaterMark = _require.getHighWaterMark;
      var _require$codes = require_errors_browser().codes;
      var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
      var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
      var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
      var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
      var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
      var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
      var errorOrDestroy = destroyImpl.errorOrDestroy;
      require_inherits_browser()(Writable, Stream);
      function nop() {
      }
      function WritableState(options, stream, isDuplex) {
        Duplex = Duplex || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
        this.finalCalled = false;
        this.needDrain = false;
        this.ending = false;
        this.ended = false;
        this.finished = false;
        this.destroyed = false;
        var noDecode = options.decodeStrings === false;
        this.decodeStrings = !noDecode;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.length = 0;
        this.writing = false;
        this.corked = 0;
        this.sync = true;
        this.bufferProcessing = false;
        this.onwrite = function(er) {
          onwrite(stream, er);
        };
        this.writecb = null;
        this.writelen = 0;
        this.bufferedRequest = null;
        this.lastBufferedRequest = null;
        this.pendingcb = 0;
        this.prefinished = false;
        this.errorEmitted = false;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.bufferedRequestCount = 0;
        this.corkedRequestsFree = new CorkedRequest(this);
      }
      WritableState.prototype.getBuffer = function getBuffer() {
        var current = this.bufferedRequest;
        var out = [];
        while (current) {
          out.push(current);
          current = current.next;
        }
        return out;
      };
      (function() {
        try {
          Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (_) {
        }
      })();
      var realHasInstance;
      if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
        realHasInstance = Function.prototype[Symbol.hasInstance];
        Object.defineProperty(Writable, Symbol.hasInstance, {
          value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
          }
        });
      } else {
        realHasInstance = function realHasInstance2(object) {
          return object instanceof this;
        };
      }
      function Writable(options) {
        Duplex = Duplex || require_stream_duplex();
        var isDuplex = this instanceof Duplex;
        if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
        this._writableState = new WritableState(options, this, isDuplex);
        this.writable = true;
        if (options) {
          if (typeof options.write === "function") this._write = options.write;
          if (typeof options.writev === "function") this._writev = options.writev;
          if (typeof options.destroy === "function") this._destroy = options.destroy;
          if (typeof options.final === "function") this._final = options.final;
        }
        Stream.call(this);
      }
      Writable.prototype.pipe = function() {
        errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
      };
      function writeAfterEnd(stream, cb) {
        var er = new ERR_STREAM_WRITE_AFTER_END();
        errorOrDestroy(stream, er);
        process2.nextTick(cb, er);
      }
      function validChunk(stream, state, chunk, cb) {
        var er;
        if (chunk === null) {
          er = new ERR_STREAM_NULL_VALUES();
        } else if (typeof chunk !== "string" && !state.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
        }
        if (er) {
          errorOrDestroy(stream, er);
          process2.nextTick(cb, er);
          return false;
        }
        return true;
      }
      Writable.prototype.write = function(chunk, encoding, cb) {
        var state = this._writableState;
        var ret = false;
        var isBuf = !state.objectMode && _isUint8Array(chunk);
        if (isBuf && !Buffer4.isBuffer(chunk)) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (isBuf) encoding = "buffer";
        else if (!encoding) encoding = state.defaultEncoding;
        if (typeof cb !== "function") cb = nop;
        if (state.ending) writeAfterEnd(this, cb);
        else if (isBuf || validChunk(this, state, chunk, cb)) {
          state.pendingcb++;
          ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
        }
        return ret;
      };
      Writable.prototype.cork = function() {
        this._writableState.corked++;
      };
      Writable.prototype.uncork = function() {
        var state = this._writableState;
        if (state.corked) {
          state.corked--;
          if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
        }
      };
      Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
        if (typeof encoding === "string") encoding = encoding.toLowerCase();
        if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
        this._writableState.defaultEncoding = encoding;
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      function decodeChunk(state, chunk, encoding) {
        if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
          chunk = Buffer4.from(chunk, encoding);
        }
        return chunk;
      }
      Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
        if (!isBuf) {
          var newChunk = decodeChunk(state, chunk, encoding);
          if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
          }
        }
        var len = state.objectMode ? 1 : chunk.length;
        state.length += len;
        var ret = state.length < state.highWaterMark;
        if (!ret) state.needDrain = true;
        if (state.writing || state.corked) {
          var last = state.lastBufferedRequest;
          state.lastBufferedRequest = {
            chunk,
            encoding,
            isBuf,
            callback: cb,
            next: null
          };
          if (last) {
            last.next = state.lastBufferedRequest;
          } else {
            state.bufferedRequest = state.lastBufferedRequest;
          }
          state.bufferedRequestCount += 1;
        } else {
          doWrite(stream, state, false, len, chunk, encoding, cb);
        }
        return ret;
      }
      function doWrite(stream, state, writev, len, chunk, encoding, cb) {
        state.writelen = len;
        state.writecb = cb;
        state.writing = true;
        state.sync = true;
        if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
        else if (writev) stream._writev(chunk, state.onwrite);
        else stream._write(chunk, encoding, state.onwrite);
        state.sync = false;
      }
      function onwriteError(stream, state, sync, er, cb) {
        --state.pendingcb;
        if (sync) {
          process2.nextTick(cb, er);
          process2.nextTick(finishMaybe, stream, state);
          stream._writableState.errorEmitted = true;
          errorOrDestroy(stream, er);
        } else {
          cb(er);
          stream._writableState.errorEmitted = true;
          errorOrDestroy(stream, er);
          finishMaybe(stream, state);
        }
      }
      function onwriteStateUpdate(state) {
        state.writing = false;
        state.writecb = null;
        state.length -= state.writelen;
        state.writelen = 0;
      }
      function onwrite(stream, er) {
        var state = stream._writableState;
        var sync = state.sync;
        var cb = state.writecb;
        if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
        onwriteStateUpdate(state);
        if (er) onwriteError(stream, state, sync, er, cb);
        else {
          var finished = needFinish(state) || stream.destroyed;
          if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
          }
          if (sync) {
            process2.nextTick(afterWrite, stream, state, finished, cb);
          } else {
            afterWrite(stream, state, finished, cb);
          }
        }
      }
      function afterWrite(stream, state, finished, cb) {
        if (!finished) onwriteDrain(stream, state);
        state.pendingcb--;
        cb();
        finishMaybe(stream, state);
      }
      function onwriteDrain(stream, state) {
        if (state.length === 0 && state.needDrain) {
          state.needDrain = false;
          stream.emit("drain");
        }
      }
      function clearBuffer(stream, state) {
        state.bufferProcessing = true;
        var entry = state.bufferedRequest;
        if (stream._writev && entry && entry.next) {
          var l = state.bufferedRequestCount;
          var buffer = new Array(l);
          var holder = state.corkedRequestsFree;
          holder.entry = entry;
          var count = 0;
          var allBuffers = true;
          while (entry) {
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
          }
          buffer.allBuffers = allBuffers;
          doWrite(stream, state, true, state.length, buffer, "", holder.finish);
          state.pendingcb++;
          state.lastBufferedRequest = null;
          if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
          } else {
            state.corkedRequestsFree = new CorkedRequest(state);
          }
          state.bufferedRequestCount = 0;
        } else {
          while (entry) {
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            if (state.writing) {
              break;
            }
          }
          if (entry === null) state.lastBufferedRequest = null;
        }
        state.bufferedRequest = entry;
        state.bufferProcessing = false;
      }
      Writable.prototype._write = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
      };
      Writable.prototype._writev = null;
      Writable.prototype.end = function(chunk, encoding, cb) {
        var state = this._writableState;
        if (typeof chunk === "function") {
          cb = chunk;
          chunk = null;
          encoding = null;
        } else if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
        if (state.corked) {
          state.corked = 1;
          this.uncork();
        }
        if (!state.ending) endWritable(this, state, cb);
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function needFinish(state) {
        return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
      }
      function callFinal(stream, state) {
        stream._final(function(err) {
          state.pendingcb--;
          if (err) {
            errorOrDestroy(stream, err);
          }
          state.prefinished = true;
          stream.emit("prefinish");
          finishMaybe(stream, state);
        });
      }
      function prefinish(stream, state) {
        if (!state.prefinished && !state.finalCalled) {
          if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process2.nextTick(callFinal, stream, state);
          } else {
            state.prefinished = true;
            stream.emit("prefinish");
          }
        }
      }
      function finishMaybe(stream, state) {
        var need = needFinish(state);
        if (need) {
          prefinish(stream, state);
          if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
              var rState = stream._readableState;
              if (!rState || rState.autoDestroy && rState.endEmitted) {
                stream.destroy();
              }
            }
          }
        }
        return need;
      }
      function endWritable(stream, state, cb) {
        state.ending = true;
        finishMaybe(stream, state);
        if (cb) {
          if (state.finished) process2.nextTick(cb);
          else stream.once("finish", cb);
        }
        state.ended = true;
        stream.writable = false;
      }
      function onCorkedFinish(corkReq, state, err) {
        var entry = corkReq.entry;
        corkReq.entry = null;
        while (entry) {
          var cb = entry.callback;
          state.pendingcb--;
          cb(err);
          entry = entry.next;
        }
        state.corkedRequestsFree.next = corkReq;
      }
      Object.defineProperty(Writable.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          if (this._writableState === void 0) {
            return false;
          }
          return this._writableState.destroyed;
        },
        set: function set(value) {
          if (!this._writableState) {
            return;
          }
          this._writableState.destroyed = value;
        }
      });
      Writable.prototype.destroy = destroyImpl.destroy;
      Writable.prototype._undestroy = destroyImpl.undestroy;
      Writable.prototype._destroy = function(err, cb) {
        cb(err);
      };
    }
  });

  // node_modules/readable-stream/lib/_stream_duplex.js
  var require_stream_duplex = __commonJS({
    "node_modules/readable-stream/lib/_stream_duplex.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var objectKeys = Object.keys || function(obj) {
        var keys2 = [];
        for (var key in obj) keys2.push(key);
        return keys2;
      };
      module.exports = Duplex;
      var Readable = require_stream_readable();
      var Writable = require_stream_writable();
      require_inherits_browser()(Duplex, Readable);
      {
        keys = objectKeys(Writable.prototype);
        for (v = 0; v < keys.length; v++) {
          method = keys[v];
          if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
        }
      }
      var keys;
      var method;
      var v;
      function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);
        Readable.call(this, options);
        Writable.call(this, options);
        this.allowHalfOpen = true;
        if (options) {
          if (options.readable === false) this.readable = false;
          if (options.writable === false) this.writable = false;
          if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", onend);
          }
        }
      }
      Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      Object.defineProperty(Duplex.prototype, "writableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      Object.defineProperty(Duplex.prototype, "writableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function onend() {
        if (this._writableState.ended) return;
        process2.nextTick(onEndNT, this);
      }
      function onEndNT(self2) {
        self2.end();
      }
      Object.defineProperty(Duplex.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function set(value) {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return;
          }
          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      });
    }
  });

  // node_modules/string_decoder/lib/string_decoder.js
  var require_string_decoder = __commonJS({
    "node_modules/string_decoder/lib/string_decoder.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Buffer4 = require_safe_buffer().Buffer;
      var isEncoding = Buffer4.isEncoding || function(encoding) {
        encoding = "" + encoding;
        switch (encoding && encoding.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return true;
          default:
            return false;
        }
      };
      function _normalizeEncoding(enc) {
        if (!enc) return "utf8";
        var retried;
        while (true) {
          switch (enc) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return enc;
            default:
              if (retried) return;
              enc = ("" + enc).toLowerCase();
              retried = true;
          }
        }
      }
      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== "string" && (Buffer4.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
        return nenc || enc;
      }
      exports4.StringDecoder = StringDecoder;
      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
          case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
          case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
          case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer4.allocUnsafe(nb);
      }
      StringDecoder.prototype.write = function(buf) {
        if (buf.length === 0) return "";
        var r;
        var i;
        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === void 0) return "";
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }
        if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || "";
      };
      StringDecoder.prototype.end = utf8End;
      StringDecoder.prototype.text = utf8Text;
      StringDecoder.prototype.fillLast = function(buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      };
      function utf8CheckByte(byte) {
        if (byte <= 127) return 0;
        else if (byte >> 5 === 6) return 2;
        else if (byte >> 4 === 14) return 3;
        else if (byte >> 3 === 30) return 4;
        return byte >> 6 === 2 ? -1 : -2;
      }
      function utf8CheckIncomplete(self2, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) self2.lastNeed = nb - 1;
          return nb;
        }
        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) self2.lastNeed = nb - 2;
          return nb;
        }
        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2) nb = 0;
            else self2.lastNeed = nb - 3;
          }
          return nb;
        }
        return 0;
      }
      function utf8CheckExtraBytes(self2, buf, p) {
        if ((buf[0] & 192) !== 128) {
          self2.lastNeed = 0;
          return "\uFFFD";
        }
        if (self2.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 192) !== 128) {
            self2.lastNeed = 1;
            return "\uFFFD";
          }
          if (self2.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
              self2.lastNeed = 2;
              return "\uFFFD";
            }
          }
        }
      }
      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== void 0) return r;
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      }
      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString("utf8", i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString("utf8", i, end);
      }
      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) return r + "\uFFFD";
        return r;
      }
      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString("utf16le", i);
          if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 55296 && c <= 56319) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString("utf16le", i, buf.length - 1);
      }
      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString("utf16le", 0, end);
        }
        return r;
      }
      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0) return buf.toString("base64", i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;
        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString("base64", i, buf.length - n);
      }
      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
        return r;
      }
      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }
      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : "";
      }
    }
  });

  // node_modules/readable-stream/lib/internal/streams/end-of-stream.js
  var require_end_of_stream = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var ERR_STREAM_PREMATURE_CLOSE = require_errors_browser().codes.ERR_STREAM_PREMATURE_CLOSE;
      function once3(callback) {
        var called = false;
        return function() {
          if (called) return;
          called = true;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          callback.apply(this, args);
        };
      }
      function noop2() {
      }
      function isRequest(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      }
      function eos(stream, opts, callback) {
        if (typeof opts === "function") return eos(stream, null, opts);
        if (!opts) opts = {};
        callback = once3(callback || noop2);
        var readable = opts.readable || opts.readable !== false && stream.readable;
        var writable = opts.writable || opts.writable !== false && stream.writable;
        var onlegacyfinish = function onlegacyfinish2() {
          if (!stream.writable) onfinish();
        };
        var writableEnded = stream._writableState && stream._writableState.finished;
        var onfinish = function onfinish2() {
          writable = false;
          writableEnded = true;
          if (!readable) callback.call(stream);
        };
        var readableEnded = stream._readableState && stream._readableState.endEmitted;
        var onend = function onend2() {
          readable = false;
          readableEnded = true;
          if (!writable) callback.call(stream);
        };
        var onerror = function onerror2(err) {
          callback.call(stream, err);
        };
        var onclose = function onclose2() {
          var err;
          if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
          }
          if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
          }
        };
        var onrequest = function onrequest2() {
          stream.req.on("finish", onfinish);
        };
        if (isRequest(stream)) {
          stream.on("complete", onfinish);
          stream.on("abort", onclose);
          if (stream.req) onrequest();
          else stream.on("request", onrequest);
        } else if (writable && !stream._writableState) {
          stream.on("end", onlegacyfinish);
          stream.on("close", onlegacyfinish);
        }
        stream.on("end", onend);
        stream.on("finish", onfinish);
        if (opts.error !== false) stream.on("error", onerror);
        stream.on("close", onclose);
        return function() {
          stream.removeListener("complete", onfinish);
          stream.removeListener("abort", onclose);
          stream.removeListener("request", onrequest);
          if (stream.req) stream.req.removeListener("finish", onfinish);
          stream.removeListener("end", onlegacyfinish);
          stream.removeListener("close", onlegacyfinish);
          stream.removeListener("finish", onfinish);
          stream.removeListener("end", onend);
          stream.removeListener("error", onerror);
          stream.removeListener("close", onclose);
        };
      }
      module.exports = eos;
    }
  });

  // node_modules/readable-stream/lib/internal/streams/async_iterator.js
  var require_async_iterator = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var _Object$setPrototypeO;
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      var finished = require_end_of_stream();
      var kLastResolve = /* @__PURE__ */ Symbol("lastResolve");
      var kLastReject = /* @__PURE__ */ Symbol("lastReject");
      var kError = /* @__PURE__ */ Symbol("error");
      var kEnded = /* @__PURE__ */ Symbol("ended");
      var kLastPromise = /* @__PURE__ */ Symbol("lastPromise");
      var kHandlePromise = /* @__PURE__ */ Symbol("handlePromise");
      var kStream = /* @__PURE__ */ Symbol("stream");
      function createIterResult2(value, done) {
        return {
          value,
          done
        };
      }
      function readAndResolve(iter) {
        var resolve = iter[kLastResolve];
        if (resolve !== null) {
          var data = iter[kStream].read();
          if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult2(data, false));
          }
        }
      }
      function onReadable(iter) {
        process2.nextTick(readAndResolve, iter);
      }
      function wrapForNext(lastPromise, iter) {
        return function(resolve, reject) {
          lastPromise.then(function() {
            if (iter[kEnded]) {
              resolve(createIterResult2(void 0, true));
              return;
            }
            iter[kHandlePromise](resolve, reject);
          }, reject);
        };
      }
      var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
      });
      var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
        get stream() {
          return this[kStream];
        },
        next: function next() {
          var _this = this;
          var error = this[kError];
          if (error !== null) {
            return Promise.reject(error);
          }
          if (this[kEnded]) {
            return Promise.resolve(createIterResult2(void 0, true));
          }
          if (this[kStream].destroyed) {
            return new Promise(function(resolve, reject) {
              process2.nextTick(function() {
                if (_this[kError]) {
                  reject(_this[kError]);
                } else {
                  resolve(createIterResult2(void 0, true));
                }
              });
            });
          }
          var lastPromise = this[kLastPromise];
          var promise;
          if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this));
          } else {
            var data = this[kStream].read();
            if (data !== null) {
              return Promise.resolve(createIterResult2(data, false));
            }
            promise = new Promise(this[kHandlePromise]);
          }
          this[kLastPromise] = promise;
          return promise;
        }
      }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
        return this;
      }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          _this2[kStream].destroy(null, function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve(createIterResult2(void 0, true));
          });
        });
      }), _Object$setPrototypeO), AsyncIteratorPrototype);
      var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
        var _Object$create;
        var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
          value: stream,
          writable: true
        }), _defineProperty(_Object$create, kLastResolve, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kLastReject, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kError, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kEnded, {
          value: stream._readableState.endEmitted,
          writable: true
        }), _defineProperty(_Object$create, kHandlePromise, {
          value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              resolve(createIterResult2(data, false));
            } else {
              iterator[kLastResolve] = resolve;
              iterator[kLastReject] = reject;
            }
          },
          writable: true
        }), _Object$create));
        iterator[kLastPromise] = null;
        finished(stream, function(err) {
          if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[kLastReject];
            if (reject !== null) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              reject(err);
            }
            iterator[kError] = err;
            return;
          }
          var resolve = iterator[kLastResolve];
          if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult2(void 0, true));
          }
          iterator[kEnded] = true;
        });
        stream.on("readable", onReadable.bind(null, iterator));
        return iterator;
      };
      module.exports = createReadableStreamAsyncIterator;
    }
  });

  // node_modules/readable-stream/lib/internal/streams/from-browser.js
  var require_from_browser = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/from-browser.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = function() {
        throw new Error("Readable.from is not available in the browser");
      };
    }
  });

  // node_modules/readable-stream/lib/_stream_readable.js
  var require_stream_readable = __commonJS({
    "node_modules/readable-stream/lib/_stream_readable.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Readable;
      var Duplex;
      Readable.ReadableState = ReadableState;
      var EE = (init_events(), __toCommonJS(events_exports)).EventEmitter;
      var EElistenerCount = function EElistenerCount2(emitter, type) {
        return emitter.listeners(type).length;
      };
      var Stream = require_stream_browser();
      var Buffer4 = (init_buffer2(), __toCommonJS(buffer_exports)).Buffer;
      var OurUint8Array = (typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer4.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer4.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var debugUtil = require_util();
      var debug;
      if (debugUtil && debugUtil.debuglog) {
        debug = debugUtil.debuglog("stream");
      } else {
        debug = function debug2() {
        };
      }
      var BufferList = require_buffer_list();
      var destroyImpl = require_destroy();
      var _require = require_state();
      var getHighWaterMark = _require.getHighWaterMark;
      var _require$codes = require_errors_browser().codes;
      var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
      var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      var StringDecoder;
      var createReadableStreamAsyncIterator;
      var from;
      require_inherits_browser()(Readable, Stream);
      var errorOrDestroy = destroyImpl.errorOrDestroy;
      var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
      function prependListener2(emitter, event, fn) {
        if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
        if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
        else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
        else emitter._events[event] = [fn, emitter._events[event]];
      }
      function ReadableState(options, stream, isDuplex) {
        Duplex = Duplex || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
        this.buffer = new BufferList();
        this.length = 0;
        this.pipes = null;
        this.pipesCount = 0;
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
        this.sync = true;
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
        this.paused = true;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.destroyed = false;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.awaitDrain = 0;
        this.readingMore = false;
        this.decoder = null;
        this.encoding = null;
        if (options.encoding) {
          if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
          this.decoder = new StringDecoder(options.encoding);
          this.encoding = options.encoding;
        }
      }
      function Readable(options) {
        Duplex = Duplex || require_stream_duplex();
        if (!(this instanceof Readable)) return new Readable(options);
        var isDuplex = this instanceof Duplex;
        this._readableState = new ReadableState(options, this, isDuplex);
        this.readable = true;
        if (options) {
          if (typeof options.read === "function") this._read = options.read;
          if (typeof options.destroy === "function") this._destroy = options.destroy;
        }
        Stream.call(this);
      }
      Object.defineProperty(Readable.prototype, "destroyed", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0) {
            return false;
          }
          return this._readableState.destroyed;
        },
        set: function set(value) {
          if (!this._readableState) {
            return;
          }
          this._readableState.destroyed = value;
        }
      });
      Readable.prototype.destroy = destroyImpl.destroy;
      Readable.prototype._undestroy = destroyImpl.undestroy;
      Readable.prototype._destroy = function(err, cb) {
        cb(err);
      };
      Readable.prototype.push = function(chunk, encoding) {
        var state = this._readableState;
        var skipChunkCheck;
        if (!state.objectMode) {
          if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
              chunk = Buffer4.from(chunk, encoding);
              encoding = "";
            }
            skipChunkCheck = true;
          }
        } else {
          skipChunkCheck = true;
        }
        return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
      };
      Readable.prototype.unshift = function(chunk) {
        return readableAddChunk(this, chunk, null, true, false);
      };
      function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
        debug("readableAddChunk", chunk);
        var state = stream._readableState;
        if (chunk === null) {
          state.reading = false;
          onEofChunk(stream, state);
        } else {
          var er;
          if (!skipChunkCheck) er = chunkInvalid(state, chunk);
          if (er) {
            errorOrDestroy(stream, er);
          } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer4.prototype) {
              chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
              if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
              else addChunk(stream, state, chunk, true);
            } else if (state.ended) {
              errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            } else if (state.destroyed) {
              return false;
            } else {
              state.reading = false;
              if (state.decoder && !encoding) {
                chunk = state.decoder.write(chunk);
                if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                else maybeReadMore(stream, state);
              } else {
                addChunk(stream, state, chunk, false);
              }
            }
          } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
          }
        }
        return !state.ended && (state.length < state.highWaterMark || state.length === 0);
      }
      function addChunk(stream, state, chunk, addToFront) {
        if (state.flowing && state.length === 0 && !state.sync) {
          state.awaitDrain = 0;
          stream.emit("data", chunk);
        } else {
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);
          else state.buffer.push(chunk);
          if (state.needReadable) emitReadable(stream);
        }
        maybeReadMore(stream, state);
      }
      function chunkInvalid(state, chunk) {
        var er;
        if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
        }
        return er;
      }
      Readable.prototype.isPaused = function() {
        return this._readableState.flowing === false;
      };
      Readable.prototype.setEncoding = function(enc) {
        if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
        var decoder = new StringDecoder(enc);
        this._readableState.decoder = decoder;
        this._readableState.encoding = this._readableState.decoder.encoding;
        var p = this._readableState.buffer.head;
        var content = "";
        while (p !== null) {
          content += decoder.write(p.data);
          p = p.next;
        }
        this._readableState.buffer.clear();
        if (content !== "") this._readableState.buffer.push(content);
        this._readableState.length = content.length;
        return this;
      };
      var MAX_HWM = 1073741824;
      function computeNewHighWaterMark(n) {
        if (n >= MAX_HWM) {
          n = MAX_HWM;
        } else {
          n--;
          n |= n >>> 1;
          n |= n >>> 2;
          n |= n >>> 4;
          n |= n >>> 8;
          n |= n >>> 16;
          n++;
        }
        return n;
      }
      function howMuchToRead(n, state) {
        if (n <= 0 || state.length === 0 && state.ended) return 0;
        if (state.objectMode) return 1;
        if (n !== n) {
          if (state.flowing && state.length) return state.buffer.head.data.length;
          else return state.length;
        }
        if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
        if (n <= state.length) return n;
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        }
        return state.length;
      }
      Readable.prototype.read = function(n) {
        debug("read", n);
        n = parseInt(n, 10);
        var state = this._readableState;
        var nOrig = n;
        if (n !== 0) state.emittedReadable = false;
        if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
          debug("read: emitReadable", state.length, state.ended);
          if (state.length === 0 && state.ended) endReadable(this);
          else emitReadable(this);
          return null;
        }
        n = howMuchToRead(n, state);
        if (n === 0 && state.ended) {
          if (state.length === 0) endReadable(this);
          return null;
        }
        var doRead = state.needReadable;
        debug("need readable", doRead);
        if (state.length === 0 || state.length - n < state.highWaterMark) {
          doRead = true;
          debug("length less than watermark", doRead);
        }
        if (state.ended || state.reading) {
          doRead = false;
          debug("reading or ended", doRead);
        } else if (doRead) {
          debug("do read");
          state.reading = true;
          state.sync = true;
          if (state.length === 0) state.needReadable = true;
          this._read(state.highWaterMark);
          state.sync = false;
          if (!state.reading) n = howMuchToRead(nOrig, state);
        }
        var ret;
        if (n > 0) ret = fromList(n, state);
        else ret = null;
        if (ret === null) {
          state.needReadable = state.length <= state.highWaterMark;
          n = 0;
        } else {
          state.length -= n;
          state.awaitDrain = 0;
        }
        if (state.length === 0) {
          if (!state.ended) state.needReadable = true;
          if (nOrig !== n && state.ended) endReadable(this);
        }
        if (ret !== null) this.emit("data", ret);
        return ret;
      };
      function onEofChunk(stream, state) {
        debug("onEofChunk");
        if (state.ended) return;
        if (state.decoder) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
          }
        }
        state.ended = true;
        if (state.sync) {
          emitReadable(stream);
        } else {
          state.needReadable = false;
          if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
          }
        }
      }
      function emitReadable(stream) {
        var state = stream._readableState;
        debug("emitReadable", state.needReadable, state.emittedReadable);
        state.needReadable = false;
        if (!state.emittedReadable) {
          debug("emitReadable", state.flowing);
          state.emittedReadable = true;
          process2.nextTick(emitReadable_, stream);
        }
      }
      function emitReadable_(stream) {
        var state = stream._readableState;
        debug("emitReadable_", state.destroyed, state.length, state.ended);
        if (!state.destroyed && (state.length || state.ended)) {
          stream.emit("readable");
          state.emittedReadable = false;
        }
        state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
        flow(stream);
      }
      function maybeReadMore(stream, state) {
        if (!state.readingMore) {
          state.readingMore = true;
          process2.nextTick(maybeReadMore_, stream, state);
        }
      }
      function maybeReadMore_(stream, state) {
        while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
          var len = state.length;
          debug("maybeReadMore read 0");
          stream.read(0);
          if (len === state.length)
            break;
        }
        state.readingMore = false;
      }
      Readable.prototype._read = function(n) {
        errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
      };
      Readable.prototype.pipe = function(dest, pipeOpts) {
        var src = this;
        var state = this._readableState;
        switch (state.pipesCount) {
          case 0:
            state.pipes = dest;
            break;
          case 1:
            state.pipes = [state.pipes, dest];
            break;
          default:
            state.pipes.push(dest);
            break;
        }
        state.pipesCount += 1;
        debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
        var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process2.stdout && dest !== process2.stderr;
        var endFn = doEnd ? onend : unpipe;
        if (state.endEmitted) process2.nextTick(endFn);
        else src.once("end", endFn);
        dest.on("unpipe", onunpipe);
        function onunpipe(readable, unpipeInfo) {
          debug("onunpipe");
          if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
              unpipeInfo.hasUnpiped = true;
              cleanup();
            }
          }
        }
        function onend() {
          debug("onend");
          dest.end();
        }
        var ondrain = pipeOnDrain(src);
        dest.on("drain", ondrain);
        var cleanedUp = false;
        function cleanup() {
          debug("cleanup");
          dest.removeListener("close", onclose);
          dest.removeListener("finish", onfinish);
          dest.removeListener("drain", ondrain);
          dest.removeListener("error", onerror);
          dest.removeListener("unpipe", onunpipe);
          src.removeListener("end", onend);
          src.removeListener("end", unpipe);
          src.removeListener("data", ondata);
          cleanedUp = true;
          if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
        }
        src.on("data", ondata);
        function ondata(chunk) {
          debug("ondata");
          var ret = dest.write(chunk);
          debug("dest.write", ret);
          if (ret === false) {
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
              debug("false write response, pause", state.awaitDrain);
              state.awaitDrain++;
            }
            src.pause();
          }
        }
        function onerror(er) {
          debug("onerror", er);
          unpipe();
          dest.removeListener("error", onerror);
          if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
        }
        prependListener2(dest, "error", onerror);
        function onclose() {
          dest.removeListener("finish", onfinish);
          unpipe();
        }
        dest.once("close", onclose);
        function onfinish() {
          debug("onfinish");
          dest.removeListener("close", onclose);
          unpipe();
        }
        dest.once("finish", onfinish);
        function unpipe() {
          debug("unpipe");
          src.unpipe(dest);
        }
        dest.emit("pipe", src);
        if (!state.flowing) {
          debug("pipe resume");
          src.resume();
        }
        return dest;
      };
      function pipeOnDrain(src) {
        return function pipeOnDrainFunctionResult() {
          var state = src._readableState;
          debug("pipeOnDrain", state.awaitDrain);
          if (state.awaitDrain) state.awaitDrain--;
          if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
          }
        };
      }
      Readable.prototype.unpipe = function(dest) {
        var state = this._readableState;
        var unpipeInfo = {
          hasUnpiped: false
        };
        if (state.pipesCount === 0) return this;
        if (state.pipesCount === 1) {
          if (dest && dest !== state.pipes) return this;
          if (!dest) dest = state.pipes;
          state.pipes = null;
          state.pipesCount = 0;
          state.flowing = false;
          if (dest) dest.emit("unpipe", this, unpipeInfo);
          return this;
        }
        if (!dest) {
          var dests = state.pipes;
          var len = state.pipesCount;
          state.pipes = null;
          state.pipesCount = 0;
          state.flowing = false;
          for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
          return this;
        }
        var index = indexOf(state.pipes, dest);
        if (index === -1) return this;
        state.pipes.splice(index, 1);
        state.pipesCount -= 1;
        if (state.pipesCount === 1) state.pipes = state.pipes[0];
        dest.emit("unpipe", this, unpipeInfo);
        return this;
      };
      Readable.prototype.on = function(ev, fn) {
        var res = Stream.prototype.on.call(this, ev, fn);
        var state = this._readableState;
        if (ev === "data") {
          state.readableListening = this.listenerCount("readable") > 0;
          if (state.flowing !== false) this.resume();
        } else if (ev === "readable") {
          if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug("on readable", state.length, state.reading);
            if (state.length) {
              emitReadable(this);
            } else if (!state.reading) {
              process2.nextTick(nReadingNextTick, this);
            }
          }
        }
        return res;
      };
      Readable.prototype.addListener = Readable.prototype.on;
      Readable.prototype.removeListener = function(ev, fn) {
        var res = Stream.prototype.removeListener.call(this, ev, fn);
        if (ev === "readable") {
          process2.nextTick(updateReadableListening, this);
        }
        return res;
      };
      Readable.prototype.removeAllListeners = function(ev) {
        var res = Stream.prototype.removeAllListeners.apply(this, arguments);
        if (ev === "readable" || ev === void 0) {
          process2.nextTick(updateReadableListening, this);
        }
        return res;
      };
      function updateReadableListening(self2) {
        var state = self2._readableState;
        state.readableListening = self2.listenerCount("readable") > 0;
        if (state.resumeScheduled && !state.paused) {
          state.flowing = true;
        } else if (self2.listenerCount("data") > 0) {
          self2.resume();
        }
      }
      function nReadingNextTick(self2) {
        debug("readable nexttick read 0");
        self2.read(0);
      }
      Readable.prototype.resume = function() {
        var state = this._readableState;
        if (!state.flowing) {
          debug("resume");
          state.flowing = !state.readableListening;
          resume(this, state);
        }
        state.paused = false;
        return this;
      };
      function resume(stream, state) {
        if (!state.resumeScheduled) {
          state.resumeScheduled = true;
          process2.nextTick(resume_, stream, state);
        }
      }
      function resume_(stream, state) {
        debug("resume", state.reading);
        if (!state.reading) {
          stream.read(0);
        }
        state.resumeScheduled = false;
        stream.emit("resume");
        flow(stream);
        if (state.flowing && !state.reading) stream.read(0);
      }
      Readable.prototype.pause = function() {
        debug("call pause flowing=%j", this._readableState.flowing);
        if (this._readableState.flowing !== false) {
          debug("pause");
          this._readableState.flowing = false;
          this.emit("pause");
        }
        this._readableState.paused = true;
        return this;
      };
      function flow(stream) {
        var state = stream._readableState;
        debug("flow", state.flowing);
        while (state.flowing && stream.read() !== null) ;
      }
      Readable.prototype.wrap = function(stream) {
        var _this = this;
        var state = this._readableState;
        var paused = false;
        stream.on("end", function() {
          debug("wrapped end");
          if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
          }
          _this.push(null);
        });
        stream.on("data", function(chunk) {
          debug("wrapped data");
          if (state.decoder) chunk = state.decoder.write(chunk);
          if (state.objectMode && (chunk === null || chunk === void 0)) return;
          else if (!state.objectMode && (!chunk || !chunk.length)) return;
          var ret = _this.push(chunk);
          if (!ret) {
            paused = true;
            stream.pause();
          }
        });
        for (var i in stream) {
          if (this[i] === void 0 && typeof stream[i] === "function") {
            this[i] = /* @__PURE__ */ (function methodWrap(method) {
              return function methodWrapReturnFunction() {
                return stream[method].apply(stream, arguments);
              };
            })(i);
          }
        }
        for (var n = 0; n < kProxyEvents.length; n++) {
          stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
        }
        this._read = function(n2) {
          debug("wrapped _read", n2);
          if (paused) {
            paused = false;
            stream.resume();
          }
        };
        return this;
      };
      if (typeof Symbol === "function") {
        Readable.prototype[Symbol.asyncIterator] = function() {
          if (createReadableStreamAsyncIterator === void 0) {
            createReadableStreamAsyncIterator = require_async_iterator();
          }
          return createReadableStreamAsyncIterator(this);
        };
      }
      Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._readableState.highWaterMark;
        }
      });
      Object.defineProperty(Readable.prototype, "readableBuffer", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._readableState && this._readableState.buffer;
        }
      });
      Object.defineProperty(Readable.prototype, "readableFlowing", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._readableState.flowing;
        },
        set: function set(state) {
          if (this._readableState) {
            this._readableState.flowing = state;
          }
        }
      });
      Readable._fromList = fromList;
      Object.defineProperty(Readable.prototype, "readableLength", {
        // making it explicit this property is not enumerable
        // because otherwise some prototype manipulation in
        // userland will fail
        enumerable: false,
        get: function get() {
          return this._readableState.length;
        }
      });
      function fromList(n, state) {
        if (state.length === 0) return null;
        var ret;
        if (state.objectMode) ret = state.buffer.shift();
        else if (!n || n >= state.length) {
          if (state.decoder) ret = state.buffer.join("");
          else if (state.buffer.length === 1) ret = state.buffer.first();
          else ret = state.buffer.concat(state.length);
          state.buffer.clear();
        } else {
          ret = state.buffer.consume(n, state.decoder);
        }
        return ret;
      }
      function endReadable(stream) {
        var state = stream._readableState;
        debug("endReadable", state.endEmitted);
        if (!state.endEmitted) {
          state.ended = true;
          process2.nextTick(endReadableNT, state, stream);
        }
      }
      function endReadableNT(state, stream) {
        debug("endReadableNT", state.endEmitted, state.length);
        if (!state.endEmitted && state.length === 0) {
          state.endEmitted = true;
          stream.readable = false;
          stream.emit("end");
          if (state.autoDestroy) {
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) {
              stream.destroy();
            }
          }
        }
      }
      if (typeof Symbol === "function") {
        Readable.from = function(iterable, opts) {
          if (from === void 0) {
            from = require_from_browser();
          }
          return from(Readable, iterable, opts);
        };
      }
      function indexOf(xs, x) {
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) return i;
        }
        return -1;
      }
    }
  });

  // node_modules/readable-stream/lib/_stream_transform.js
  var require_stream_transform = __commonJS({
    "node_modules/readable-stream/lib/_stream_transform.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Transform;
      var _require$codes = require_errors_browser().codes;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
      var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
      var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
      var Duplex = require_stream_duplex();
      require_inherits_browser()(Transform, Duplex);
      function afterTransform(er, data) {
        var ts = this._transformState;
        ts.transforming = false;
        var cb = ts.writecb;
        if (cb === null) {
          return this.emit("error", new ERR_MULTIPLE_CALLBACK());
        }
        ts.writechunk = null;
        ts.writecb = null;
        if (data != null)
          this.push(data);
        cb(er);
        var rs = this._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
          this._read(rs.highWaterMark);
        }
      }
      function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);
        Duplex.call(this, options);
        this._transformState = {
          afterTransform: afterTransform.bind(this),
          needTransform: false,
          transforming: false,
          writecb: null,
          writechunk: null,
          writeencoding: null
        };
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        if (options) {
          if (typeof options.transform === "function") this._transform = options.transform;
          if (typeof options.flush === "function") this._flush = options.flush;
        }
        this.on("prefinish", prefinish);
      }
      function prefinish() {
        var _this = this;
        if (typeof this._flush === "function" && !this._readableState.destroyed) {
          this._flush(function(er, data) {
            done(_this, er, data);
          });
        } else {
          done(this, null, null);
        }
      }
      Transform.prototype.push = function(chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
      };
      Transform.prototype._transform = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
      };
      Transform.prototype._write = function(chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
          var rs = this._readableState;
          if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
        }
      };
      Transform.prototype._read = function(n) {
        var ts = this._transformState;
        if (ts.writechunk !== null && !ts.transforming) {
          ts.transforming = true;
          this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
          ts.needTransform = true;
        }
      };
      Transform.prototype._destroy = function(err, cb) {
        Duplex.prototype._destroy.call(this, err, function(err2) {
          cb(err2);
        });
      };
      function done(stream, er, data) {
        if (er) return stream.emit("error", er);
        if (data != null)
          stream.push(data);
        if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
        if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
        return stream.push(null);
      }
    }
  });

  // node_modules/readable-stream/lib/_stream_passthrough.js
  var require_stream_passthrough = __commonJS({
    "node_modules/readable-stream/lib/_stream_passthrough.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = PassThrough;
      var Transform = require_stream_transform();
      require_inherits_browser()(PassThrough, Transform);
      function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);
        Transform.call(this, options);
      }
      PassThrough.prototype._transform = function(chunk, encoding, cb) {
        cb(null, chunk);
      };
    }
  });

  // node_modules/readable-stream/lib/internal/streams/pipeline.js
  var require_pipeline = __commonJS({
    "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var eos;
      function once3(callback) {
        var called = false;
        return function() {
          if (called) return;
          called = true;
          callback.apply(void 0, arguments);
        };
      }
      var _require$codes = require_errors_browser().codes;
      var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
      var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
      function noop2(err) {
        if (err) throw err;
      }
      function isRequest(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      }
      function destroyer(stream, reading, writing, callback) {
        callback = once3(callback);
        var closed = false;
        stream.on("close", function() {
          closed = true;
        });
        if (eos === void 0) eos = require_end_of_stream();
        eos(stream, {
          readable: reading,
          writable: writing
        }, function(err) {
          if (err) return callback(err);
          closed = true;
          callback();
        });
        var destroyed = false;
        return function(err) {
          if (closed) return;
          if (destroyed) return;
          destroyed = true;
          if (isRequest(stream)) return stream.abort();
          if (typeof stream.destroy === "function") return stream.destroy();
          callback(err || new ERR_STREAM_DESTROYED("pipe"));
        };
      }
      function call(fn) {
        fn();
      }
      function pipe(from, to) {
        return from.pipe(to);
      }
      function popCallback(streams) {
        if (!streams.length) return noop2;
        if (typeof streams[streams.length - 1] !== "function") return noop2;
        return streams.pop();
      }
      function pipeline() {
        for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
          streams[_key] = arguments[_key];
        }
        var callback = popCallback(streams);
        if (Array.isArray(streams[0])) streams = streams[0];
        if (streams.length < 2) {
          throw new ERR_MISSING_ARGS("streams");
        }
        var error;
        var destroys = streams.map(function(stream, i) {
          var reading = i < streams.length - 1;
          var writing = i > 0;
          return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
          });
        });
        return streams.reduce(pipe);
      }
      module.exports = pipeline;
    }
  });

  // node_modules/stream-browserify/index.js
  var require_stream_browserify = __commonJS({
    "node_modules/stream-browserify/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = Stream;
      var EE = (init_events(), __toCommonJS(events_exports)).EventEmitter;
      var inherits = require_inherits_browser();
      inherits(Stream, EE);
      Stream.Readable = require_stream_readable();
      Stream.Writable = require_stream_writable();
      Stream.Duplex = require_stream_duplex();
      Stream.Transform = require_stream_transform();
      Stream.PassThrough = require_stream_passthrough();
      Stream.finished = require_end_of_stream();
      Stream.pipeline = require_pipeline();
      Stream.Stream = Stream;
      function Stream() {
        EE.call(this);
      }
      Stream.prototype.pipe = function(dest, options) {
        var source = this;
        function ondata(chunk) {
          if (dest.writable) {
            if (false === dest.write(chunk) && source.pause) {
              source.pause();
            }
          }
        }
        source.on("data", ondata);
        function ondrain() {
          if (source.readable && source.resume) {
            source.resume();
          }
        }
        dest.on("drain", ondrain);
        if (!dest._isStdio && (!options || options.end !== false)) {
          source.on("end", onend);
          source.on("close", onclose);
        }
        var didOnEnd = false;
        function onend() {
          if (didOnEnd) return;
          didOnEnd = true;
          dest.end();
        }
        function onclose() {
          if (didOnEnd) return;
          didOnEnd = true;
          if (typeof dest.destroy === "function") dest.destroy();
        }
        function onerror(er) {
          cleanup();
          if (EE.listenerCount(this, "error") === 0) {
            throw er;
          }
        }
        source.on("error", onerror);
        dest.on("error", onerror);
        function cleanup() {
          source.removeListener("data", ondata);
          dest.removeListener("drain", ondrain);
          source.removeListener("end", onend);
          source.removeListener("close", onclose);
          source.removeListener("error", onerror);
          dest.removeListener("error", onerror);
          source.removeListener("end", cleanup);
          source.removeListener("close", cleanup);
          dest.removeListener("close", cleanup);
        }
        source.on("end", cleanup);
        source.on("close", cleanup);
        dest.on("close", cleanup);
        dest.emit("pipe", source);
        return dest;
      };
    }
  });

  // node_modules/jws/lib/data-stream.js
  var require_data_stream = __commonJS({
    "node_modules/jws/lib/data-stream.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Buffer4 = require_safe_buffer().Buffer;
      var Stream = require_stream_browserify();
      var util = require_util();
      function DataStream(data) {
        this.buffer = null;
        this.writable = true;
        this.readable = true;
        if (!data) {
          this.buffer = Buffer4.alloc(0);
          return this;
        }
        if (typeof data.pipe === "function") {
          this.buffer = Buffer4.alloc(0);
          data.pipe(this);
          return this;
        }
        if (data.length || typeof data === "object") {
          this.buffer = data;
          this.writable = false;
          process2.nextTick(function() {
            this.emit("end", data);
            this.readable = false;
            this.emit("close");
          }.bind(this));
          return this;
        }
        throw new TypeError("Unexpected data type (" + typeof data + ")");
      }
      util.inherits(DataStream, Stream);
      DataStream.prototype.write = function write(data) {
        this.buffer = Buffer4.concat([this.buffer, Buffer4.from(data)]);
        this.emit("data", data);
      };
      DataStream.prototype.end = function end(data) {
        if (data)
          this.write(data);
        this.emit("end", data);
        this.emit("close");
        this.writable = false;
        this.readable = false;
      };
      module.exports = DataStream;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/empty.js
  var empty_exports = {};
  __export(empty_exports, {
    default: () => empty_default
  });
  var empty_default;
  var init_empty = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/empty.js"() {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      empty_default = {};
    }
  });

  // node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
  var require_param_bytes_for_alg = __commonJS({
    "node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      function getParamSize(keySize) {
        var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
        return result;
      }
      var paramBytesForAlg = {
        ES256: getParamSize(256),
        ES384: getParamSize(384),
        ES512: getParamSize(521)
      };
      function getParamBytesForAlg(alg) {
        var paramBytes = paramBytesForAlg[alg];
        if (paramBytes) {
          return paramBytes;
        }
        throw new Error('Unknown algorithm "' + alg + '"');
      }
      module.exports = getParamBytesForAlg;
    }
  });

  // node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
  var require_ecdsa_sig_formatter = __commonJS({
    "node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Buffer4 = require_safe_buffer().Buffer;
      var getParamBytesForAlg = require_param_bytes_for_alg();
      var MAX_OCTET = 128;
      var CLASS_UNIVERSAL = 0;
      var PRIMITIVE_BIT = 32;
      var TAG_SEQ = 16;
      var TAG_INT = 2;
      var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
      var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
      function base64Url(base64) {
        return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function signatureAsBuffer(signature) {
        if (Buffer4.isBuffer(signature)) {
          return signature;
        } else if ("string" === typeof signature) {
          return Buffer4.from(signature, "base64");
        }
        throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
      }
      function derToJose(signature, alg) {
        signature = signatureAsBuffer(signature);
        var paramBytes = getParamBytesForAlg(alg);
        var maxEncodedParamLength = paramBytes + 1;
        var inputLength = signature.length;
        var offset = 0;
        if (signature[offset++] !== ENCODED_TAG_SEQ) {
          throw new Error('Could not find expected "seq"');
        }
        var seqLength = signature[offset++];
        if (seqLength === (MAX_OCTET | 1)) {
          seqLength = signature[offset++];
        }
        if (inputLength - offset < seqLength) {
          throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
        }
        if (signature[offset++] !== ENCODED_TAG_INT) {
          throw new Error('Could not find expected "int" for "r"');
        }
        var rLength = signature[offset++];
        if (inputLength - offset - 2 < rLength) {
          throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
        }
        if (maxEncodedParamLength < rLength) {
          throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
        }
        var rOffset = offset;
        offset += rLength;
        if (signature[offset++] !== ENCODED_TAG_INT) {
          throw new Error('Could not find expected "int" for "s"');
        }
        var sLength = signature[offset++];
        if (inputLength - offset !== sLength) {
          throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
        }
        if (maxEncodedParamLength < sLength) {
          throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
        }
        var sOffset = offset;
        offset += sLength;
        if (offset !== inputLength) {
          throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
        }
        var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
        var dst = Buffer4.allocUnsafe(rPadding + rLength + sPadding + sLength);
        for (offset = 0; offset < rPadding; ++offset) {
          dst[offset] = 0;
        }
        signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
        offset = paramBytes;
        for (var o = offset; offset < o + sPadding; ++offset) {
          dst[offset] = 0;
        }
        signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
        dst = dst.toString("base64");
        dst = base64Url(dst);
        return dst;
      }
      function countPadding(buf, start, stop) {
        var padding = 0;
        while (start + padding < stop && buf[start + padding] === 0) {
          ++padding;
        }
        var needsSign = buf[start + padding] >= MAX_OCTET;
        if (needsSign) {
          --padding;
        }
        return padding;
      }
      function joseToDer(signature, alg) {
        signature = signatureAsBuffer(signature);
        var paramBytes = getParamBytesForAlg(alg);
        var signatureBytes = signature.length;
        if (signatureBytes !== paramBytes * 2) {
          throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
        }
        var rPadding = countPadding(signature, 0, paramBytes);
        var sPadding = countPadding(signature, paramBytes, signature.length);
        var rLength = paramBytes - rPadding;
        var sLength = paramBytes - sPadding;
        var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
        var shortLength = rsBytes < MAX_OCTET;
        var dst = Buffer4.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
        var offset = 0;
        dst[offset++] = ENCODED_TAG_SEQ;
        if (shortLength) {
          dst[offset++] = rsBytes;
        } else {
          dst[offset++] = MAX_OCTET | 1;
          dst[offset++] = rsBytes & 255;
        }
        dst[offset++] = ENCODED_TAG_INT;
        dst[offset++] = rLength;
        if (rPadding < 0) {
          dst[offset++] = 0;
          offset += signature.copy(dst, offset, 0, paramBytes);
        } else {
          offset += signature.copy(dst, offset, rPadding, paramBytes);
        }
        dst[offset++] = ENCODED_TAG_INT;
        dst[offset++] = sLength;
        if (sPadding < 0) {
          dst[offset++] = 0;
          signature.copy(dst, offset, paramBytes);
        } else {
          signature.copy(dst, offset, paramBytes + sPadding);
        }
        return dst;
      }
      module.exports = {
        derToJose,
        joseToDer
      };
    }
  });

  // node_modules/buffer-equal-constant-time/index.js
  var require_buffer_equal_constant_time = __commonJS({
    "node_modules/buffer-equal-constant-time/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Buffer4 = (init_buffer2(), __toCommonJS(buffer_exports)).Buffer;
      var SlowBuffer = (init_buffer2(), __toCommonJS(buffer_exports)).SlowBuffer;
      module.exports = bufferEq;
      function bufferEq(a, b) {
        if (!Buffer4.isBuffer(a) || !Buffer4.isBuffer(b)) {
          return false;
        }
        if (a.length !== b.length) {
          return false;
        }
        var c = 0;
        for (var i = 0; i < a.length; i++) {
          c |= a[i] ^ b[i];
        }
        return c === 0;
      }
      bufferEq.install = function() {
        Buffer4.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
          return bufferEq(this, that);
        };
      };
      var origBufEqual = Buffer4.prototype.equal;
      var origSlowBufEqual = SlowBuffer.prototype.equal;
      bufferEq.restore = function() {
        Buffer4.prototype.equal = origBufEqual;
        SlowBuffer.prototype.equal = origSlowBufEqual;
      };
    }
  });

  // node_modules/jwa/index.js
  var require_jwa = __commonJS({
    "node_modules/jwa/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Buffer4 = require_safe_buffer().Buffer;
      var crypto2 = (init_empty(), __toCommonJS(empty_exports));
      var formatEcdsa = require_ecdsa_sig_formatter();
      var util = require_util();
      var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
      var MSG_INVALID_SECRET = "secret must be a string or buffer";
      var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
      var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
      var supportsKeyObjects = typeof crypto2.createPublicKey === "function";
      if (supportsKeyObjects) {
        MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
        MSG_INVALID_SECRET += "or a KeyObject";
      }
      function checkIsPublicKey(key) {
        if (Buffer4.isBuffer(key)) {
          return;
        }
        if (typeof key === "string") {
          return;
        }
        if (!supportsKeyObjects) {
          throw typeError(MSG_INVALID_VERIFIER_KEY);
        }
        if (typeof key !== "object") {
          throw typeError(MSG_INVALID_VERIFIER_KEY);
        }
        if (typeof key.type !== "string") {
          throw typeError(MSG_INVALID_VERIFIER_KEY);
        }
        if (typeof key.asymmetricKeyType !== "string") {
          throw typeError(MSG_INVALID_VERIFIER_KEY);
        }
        if (typeof key.export !== "function") {
          throw typeError(MSG_INVALID_VERIFIER_KEY);
        }
      }
      function checkIsPrivateKey(key) {
        if (Buffer4.isBuffer(key)) {
          return;
        }
        if (typeof key === "string") {
          return;
        }
        if (typeof key === "object") {
          return;
        }
        throw typeError(MSG_INVALID_SIGNER_KEY);
      }
      function checkIsSecretKey(key) {
        if (Buffer4.isBuffer(key)) {
          return;
        }
        if (typeof key === "string") {
          return key;
        }
        if (!supportsKeyObjects) {
          throw typeError(MSG_INVALID_SECRET);
        }
        if (typeof key !== "object") {
          throw typeError(MSG_INVALID_SECRET);
        }
        if (key.type !== "secret") {
          throw typeError(MSG_INVALID_SECRET);
        }
        if (typeof key.export !== "function") {
          throw typeError(MSG_INVALID_SECRET);
        }
      }
      function fromBase64(base64) {
        return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function toBase64(base64url) {
        base64url = base64url.toString();
        var padding = 4 - base64url.length % 4;
        if (padding !== 4) {
          for (var i = 0; i < padding; ++i) {
            base64url += "=";
          }
        }
        return base64url.replace(/\-/g, "+").replace(/_/g, "/");
      }
      function typeError(template) {
        var args = [].slice.call(arguments, 1);
        var errMsg = util.format.bind(util, template).apply(null, args);
        return new TypeError(errMsg);
      }
      function bufferOrString(obj) {
        return Buffer4.isBuffer(obj) || typeof obj === "string";
      }
      function normalizeInput(thing) {
        if (!bufferOrString(thing))
          thing = JSON.stringify(thing);
        return thing;
      }
      function createHmacSigner(bits) {
        return function sign(thing, secret) {
          checkIsSecretKey(secret);
          thing = normalizeInput(thing);
          var hmac = crypto2.createHmac("sha" + bits, secret);
          var sig = (hmac.update(thing), hmac.digest("base64"));
          return fromBase64(sig);
        };
      }
      var bufferEqual;
      var timingSafeEqual = "timingSafeEqual" in crypto2 ? function timingSafeEqual2(a, b) {
        if (a.byteLength !== b.byteLength) {
          return false;
        }
        return crypto2.timingSafeEqual(a, b);
      } : function timingSafeEqual2(a, b) {
        if (!bufferEqual) {
          bufferEqual = require_buffer_equal_constant_time();
        }
        return bufferEqual(a, b);
      };
      function createHmacVerifier(bits) {
        return function verify(thing, signature, secret) {
          var computedSig = createHmacSigner(bits)(thing, secret);
          return timingSafeEqual(Buffer4.from(signature), Buffer4.from(computedSig));
        };
      }
      function createKeySigner(bits) {
        return function sign(thing, privateKey) {
          checkIsPrivateKey(privateKey);
          thing = normalizeInput(thing);
          var signer = crypto2.createSign("RSA-SHA" + bits);
          var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
          return fromBase64(sig);
        };
      }
      function createKeyVerifier(bits) {
        return function verify(thing, signature, publicKey) {
          checkIsPublicKey(publicKey);
          thing = normalizeInput(thing);
          signature = toBase64(signature);
          var verifier = crypto2.createVerify("RSA-SHA" + bits);
          verifier.update(thing);
          return verifier.verify(publicKey, signature, "base64");
        };
      }
      function createPSSKeySigner(bits) {
        return function sign(thing, privateKey) {
          checkIsPrivateKey(privateKey);
          thing = normalizeInput(thing);
          var signer = crypto2.createSign("RSA-SHA" + bits);
          var sig = (signer.update(thing), signer.sign({
            key: privateKey,
            padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
          }, "base64"));
          return fromBase64(sig);
        };
      }
      function createPSSKeyVerifier(bits) {
        return function verify(thing, signature, publicKey) {
          checkIsPublicKey(publicKey);
          thing = normalizeInput(thing);
          signature = toBase64(signature);
          var verifier = crypto2.createVerify("RSA-SHA" + bits);
          verifier.update(thing);
          return verifier.verify({
            key: publicKey,
            padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
          }, signature, "base64");
        };
      }
      function createECDSASigner(bits) {
        var inner = createKeySigner(bits);
        return function sign() {
          var signature = inner.apply(null, arguments);
          signature = formatEcdsa.derToJose(signature, "ES" + bits);
          return signature;
        };
      }
      function createECDSAVerifer(bits) {
        var inner = createKeyVerifier(bits);
        return function verify(thing, signature, publicKey) {
          signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
          var result = inner(thing, signature, publicKey);
          return result;
        };
      }
      function createNoneSigner() {
        return function sign() {
          return "";
        };
      }
      function createNoneVerifier() {
        return function verify(thing, signature) {
          return signature === "";
        };
      }
      module.exports = function jwa(algorithm) {
        var signerFactories = {
          hs: createHmacSigner,
          rs: createKeySigner,
          ps: createPSSKeySigner,
          es: createECDSASigner,
          none: createNoneSigner
        };
        var verifierFactories = {
          hs: createHmacVerifier,
          rs: createKeyVerifier,
          ps: createPSSKeyVerifier,
          es: createECDSAVerifer,
          none: createNoneVerifier
        };
        var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
        if (!match)
          throw typeError(MSG_INVALID_ALGORITHM, algorithm);
        var algo = (match[1] || match[3]).toLowerCase();
        var bits = match[2];
        return {
          sign: signerFactories[algo](bits),
          verify: verifierFactories[algo](bits)
        };
      };
    }
  });

  // node_modules/jws/lib/tostring.js
  var require_tostring = __commonJS({
    "node_modules/jws/lib/tostring.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Buffer4 = (init_buffer2(), __toCommonJS(buffer_exports)).Buffer;
      module.exports = function toString(obj) {
        if (typeof obj === "string")
          return obj;
        if (typeof obj === "number" || Buffer4.isBuffer(obj))
          return obj.toString();
        return JSON.stringify(obj);
      };
    }
  });

  // node_modules/jws/lib/sign-stream.js
  var require_sign_stream = __commonJS({
    "node_modules/jws/lib/sign-stream.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Buffer4 = require_safe_buffer().Buffer;
      var DataStream = require_data_stream();
      var jwa = require_jwa();
      var Stream = require_stream_browserify();
      var toString = require_tostring();
      var util = require_util();
      function base64url(string, encoding) {
        return Buffer4.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function jwsSecuredInput(header, payload, encoding) {
        encoding = encoding || "utf8";
        var encodedHeader = base64url(toString(header), "binary");
        var encodedPayload = base64url(toString(payload), encoding);
        return util.format("%s.%s", encodedHeader, encodedPayload);
      }
      function jwsSign(opts) {
        var header = opts.header;
        var payload = opts.payload;
        var secretOrKey = opts.secret || opts.privateKey;
        var encoding = opts.encoding;
        var algo = jwa(header.alg);
        var securedInput = jwsSecuredInput(header, payload, encoding);
        var signature = algo.sign(securedInput, secretOrKey);
        return util.format("%s.%s", securedInput, signature);
      }
      function SignStream(opts) {
        var secret = opts.secret;
        secret = secret == null ? opts.privateKey : secret;
        secret = secret == null ? opts.key : secret;
        if (/^hs/i.test(opts.header.alg) === true && secret == null) {
          throw new TypeError("secret must be a string or buffer or a KeyObject");
        }
        var secretStream = new DataStream(secret);
        this.readable = true;
        this.header = opts.header;
        this.encoding = opts.encoding;
        this.secret = this.privateKey = this.key = secretStream;
        this.payload = new DataStream(opts.payload);
        this.secret.once("close", function() {
          if (!this.payload.writable && this.readable)
            this.sign();
        }.bind(this));
        this.payload.once("close", function() {
          if (!this.secret.writable && this.readable)
            this.sign();
        }.bind(this));
      }
      util.inherits(SignStream, Stream);
      SignStream.prototype.sign = function sign() {
        try {
          var signature = jwsSign({
            header: this.header,
            payload: this.payload.buffer,
            secret: this.secret.buffer,
            encoding: this.encoding
          });
          this.emit("done", signature);
          this.emit("data", signature);
          this.emit("end");
          this.readable = false;
          return signature;
        } catch (e) {
          this.readable = false;
          this.emit("error", e);
          this.emit("close");
        }
      };
      SignStream.sign = jwsSign;
      module.exports = SignStream;
    }
  });

  // node_modules/jws/lib/verify-stream.js
  var require_verify_stream = __commonJS({
    "node_modules/jws/lib/verify-stream.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Buffer4 = require_safe_buffer().Buffer;
      var DataStream = require_data_stream();
      var jwa = require_jwa();
      var Stream = require_stream_browserify();
      var toString = require_tostring();
      var util = require_util();
      var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
      function isObject(thing) {
        return Object.prototype.toString.call(thing) === "[object Object]";
      }
      function safeJsonParse(thing) {
        if (isObject(thing))
          return thing;
        try {
          return JSON.parse(thing);
        } catch (e) {
          return void 0;
        }
      }
      function headerFromJWS(jwsSig) {
        var encodedHeader = jwsSig.split(".", 1)[0];
        return safeJsonParse(Buffer4.from(encodedHeader, "base64").toString("binary"));
      }
      function securedInputFromJWS(jwsSig) {
        return jwsSig.split(".", 2).join(".");
      }
      function signatureFromJWS(jwsSig) {
        return jwsSig.split(".")[2];
      }
      function payloadFromJWS(jwsSig, encoding) {
        encoding = encoding || "utf8";
        var payload = jwsSig.split(".")[1];
        return Buffer4.from(payload, "base64").toString(encoding);
      }
      function isValidJws(string) {
        return JWS_REGEX.test(string) && !!headerFromJWS(string);
      }
      function jwsVerify(jwsSig, algorithm, secretOrKey) {
        if (!algorithm) {
          var err = new Error("Missing algorithm parameter for jws.verify");
          err.code = "MISSING_ALGORITHM";
          throw err;
        }
        jwsSig = toString(jwsSig);
        var signature = signatureFromJWS(jwsSig);
        var securedInput = securedInputFromJWS(jwsSig);
        var algo = jwa(algorithm);
        return algo.verify(securedInput, signature, secretOrKey);
      }
      function jwsDecode(jwsSig, opts) {
        opts = opts || {};
        jwsSig = toString(jwsSig);
        if (!isValidJws(jwsSig))
          return null;
        var header = headerFromJWS(jwsSig);
        if (!header)
          return null;
        var payload = payloadFromJWS(jwsSig);
        if (header.typ === "JWT" || opts.json)
          payload = JSON.parse(payload, opts.encoding);
        return {
          header,
          payload,
          signature: signatureFromJWS(jwsSig)
        };
      }
      function VerifyStream(opts) {
        opts = opts || {};
        var secretOrKey = opts.secret;
        secretOrKey = secretOrKey == null ? opts.publicKey : secretOrKey;
        secretOrKey = secretOrKey == null ? opts.key : secretOrKey;
        if (/^hs/i.test(opts.algorithm) === true && secretOrKey == null) {
          throw new TypeError("secret must be a string or buffer or a KeyObject");
        }
        var secretStream = new DataStream(secretOrKey);
        this.readable = true;
        this.algorithm = opts.algorithm;
        this.encoding = opts.encoding;
        this.secret = this.publicKey = this.key = secretStream;
        this.signature = new DataStream(opts.signature);
        this.secret.once("close", function() {
          if (!this.signature.writable && this.readable)
            this.verify();
        }.bind(this));
        this.signature.once("close", function() {
          if (!this.secret.writable && this.readable)
            this.verify();
        }.bind(this));
      }
      util.inherits(VerifyStream, Stream);
      VerifyStream.prototype.verify = function verify() {
        try {
          var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
          var obj = jwsDecode(this.signature.buffer, this.encoding);
          this.emit("done", valid, obj);
          this.emit("data", valid);
          this.emit("end");
          this.readable = false;
          return valid;
        } catch (e) {
          this.readable = false;
          this.emit("error", e);
          this.emit("close");
        }
      };
      VerifyStream.decode = jwsDecode;
      VerifyStream.isValid = isValidJws;
      VerifyStream.verify = jwsVerify;
      module.exports = VerifyStream;
    }
  });

  // node_modules/jws/index.js
  var require_jws = __commonJS({
    "node_modules/jws/index.js"(exports4) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SignStream = require_sign_stream();
      var VerifyStream = require_verify_stream();
      var ALGORITHMS = [
        "HS256",
        "HS384",
        "HS512",
        "RS256",
        "RS384",
        "RS512",
        "PS256",
        "PS384",
        "PS512",
        "ES256",
        "ES384",
        "ES512"
      ];
      exports4.ALGORITHMS = ALGORITHMS;
      exports4.sign = SignStream.sign;
      exports4.verify = VerifyStream.verify;
      exports4.decode = VerifyStream.decode;
      exports4.isValid = VerifyStream.isValid;
      exports4.createSign = function createSign(opts) {
        return new SignStream(opts);
      };
      exports4.createVerify = function createVerify(opts) {
        return new VerifyStream(opts);
      };
    }
  });

  // node_modules/jsonwebtoken/decode.js
  var require_decode = __commonJS({
    "node_modules/jsonwebtoken/decode.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var jws = require_jws();
      module.exports = function(jwt, options) {
        options = options || {};
        var decoded = jws.decode(jwt, options);
        if (!decoded) {
          return null;
        }
        var payload = decoded.payload;
        if (typeof payload === "string") {
          try {
            var obj = JSON.parse(payload);
            if (obj !== null && typeof obj === "object") {
              payload = obj;
            }
          } catch (e) {
          }
        }
        if (options.complete === true) {
          return {
            header: decoded.header,
            payload,
            signature: decoded.signature
          };
        }
        return payload;
      };
    }
  });

  // node_modules/jsonwebtoken/lib/JsonWebTokenError.js
  var require_JsonWebTokenError = __commonJS({
    "node_modules/jsonwebtoken/lib/JsonWebTokenError.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var JsonWebTokenError = function(message, error) {
        Error.call(this, message);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
        this.name = "JsonWebTokenError";
        this.message = message;
        if (error) this.inner = error;
      };
      JsonWebTokenError.prototype = Object.create(Error.prototype);
      JsonWebTokenError.prototype.constructor = JsonWebTokenError;
      module.exports = JsonWebTokenError;
    }
  });

  // node_modules/jsonwebtoken/lib/NotBeforeError.js
  var require_NotBeforeError = __commonJS({
    "node_modules/jsonwebtoken/lib/NotBeforeError.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var JsonWebTokenError = require_JsonWebTokenError();
      var NotBeforeError = function(message, date) {
        JsonWebTokenError.call(this, message);
        this.name = "NotBeforeError";
        this.date = date;
      };
      NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
      NotBeforeError.prototype.constructor = NotBeforeError;
      module.exports = NotBeforeError;
    }
  });

  // node_modules/jsonwebtoken/lib/TokenExpiredError.js
  var require_TokenExpiredError = __commonJS({
    "node_modules/jsonwebtoken/lib/TokenExpiredError.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var JsonWebTokenError = require_JsonWebTokenError();
      var TokenExpiredError = function(message, expiredAt) {
        JsonWebTokenError.call(this, message);
        this.name = "TokenExpiredError";
        this.expiredAt = expiredAt;
      };
      TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
      TokenExpiredError.prototype.constructor = TokenExpiredError;
      module.exports = TokenExpiredError;
    }
  });

  // node_modules/ms/index.js
  var require_ms = __commonJS({
    "node_modules/ms/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var s = 1e3;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
        );
      };
      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str
        );
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "weeks":
          case "week":
          case "w":
            return n * w;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return void 0;
        }
      }
      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + "h";
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }
      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, "hour");
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, "minute");
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, "second");
        }
        return ms + " ms";
      }
      function plural(ms, msAbs, n, name2) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + " " + name2 + (isPlural ? "s" : "");
      }
    }
  });

  // node_modules/jsonwebtoken/lib/timespan.js
  var require_timespan = __commonJS({
    "node_modules/jsonwebtoken/lib/timespan.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var ms = require_ms();
      module.exports = function(time, iat) {
        var timestamp = iat || Math.floor(Date.now() / 1e3);
        if (typeof time === "string") {
          var milliseconds = ms(time);
          if (typeof milliseconds === "undefined") {
            return;
          }
          return Math.floor(timestamp + milliseconds / 1e3);
        } else if (typeof time === "number") {
          return timestamp + time;
        } else {
          return;
        }
      };
    }
  });

  // node_modules/semver/internal/constants.js
  var require_constants = __commonJS({
    "node_modules/semver/internal/constants.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SEMVER_SPEC_VERSION = "2.0.0";
      var MAX_LENGTH = 256;
      var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
      9007199254740991;
      var MAX_SAFE_COMPONENT_LENGTH = 16;
      var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
      var RELEASE_TYPES = [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease"
      ];
      module.exports = {
        MAX_LENGTH,
        MAX_SAFE_COMPONENT_LENGTH,
        MAX_SAFE_BUILD_LENGTH,
        MAX_SAFE_INTEGER,
        RELEASE_TYPES,
        SEMVER_SPEC_VERSION,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
      };
    }
  });

  // node_modules/semver/internal/debug.js
  var require_debug = __commonJS({
    "node_modules/semver/internal/debug.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var debug = typeof process2 === "object" && process2.env && process2.env.NODE_DEBUG && /\bsemver\b/i.test(process2.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
      };
      module.exports = debug;
    }
  });

  // node_modules/semver/internal/re.js
  var require_re = __commonJS({
    "node_modules/semver/internal/re.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var {
        MAX_SAFE_COMPONENT_LENGTH,
        MAX_SAFE_BUILD_LENGTH,
        MAX_LENGTH
      } = require_constants();
      var debug = require_debug();
      exports4 = module.exports = {};
      var re = exports4.re = [];
      var safeRe = exports4.safeRe = [];
      var src = exports4.src = [];
      var safeSrc = exports4.safeSrc = [];
      var t = exports4.t = {};
      var R = 0;
      var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
      var safeRegexReplacements = [
        ["\\s", 1],
        ["\\d", MAX_LENGTH],
        [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
      ];
      var makeSafeRegex = (value) => {
        for (const [token, max] of safeRegexReplacements) {
          value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
        }
        return value;
      };
      var createToken = (name2, value, isGlobal) => {
        const safe = makeSafeRegex(value);
        const index = R++;
        debug(name2, index, value);
        t[name2] = index;
        src[index] = value;
        safeSrc[index] = safe;
        re[index] = new RegExp(value, isGlobal ? "g" : void 0);
        safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
      };
      createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
      createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
      createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
      createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
      createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
      createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
      createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
      createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
      createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
      createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
      createToken("FULL", `^${src[t.FULLPLAIN]}$`);
      createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
      createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
      createToken("GTLT", "((?:<|>)?=?)");
      createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
      createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
      createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
      createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
      createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
      createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
      createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
      createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
      createToken("COERCERTL", src[t.COERCE], true);
      createToken("COERCERTLFULL", src[t.COERCEFULL], true);
      createToken("LONETILDE", "(?:~>?)");
      createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
      exports4.tildeTrimReplace = "$1~";
      createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
      createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("LONECARET", "(?:\\^)");
      createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
      exports4.caretTrimReplace = "$1^";
      createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
      createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
      createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
      createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
      exports4.comparatorTrimReplace = "$1$2$3";
      createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
      createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
      createToken("STAR", "(<|>)?=?\\s*\\*");
      createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
      createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    }
  });

  // node_modules/semver/internal/parse-options.js
  var require_parse_options = __commonJS({
    "node_modules/semver/internal/parse-options.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var looseOption = Object.freeze({ loose: true });
      var emptyOpts = Object.freeze({});
      var parseOptions = (options) => {
        if (!options) {
          return emptyOpts;
        }
        if (typeof options !== "object") {
          return looseOption;
        }
        return options;
      };
      module.exports = parseOptions;
    }
  });

  // node_modules/semver/internal/identifiers.js
  var require_identifiers = __commonJS({
    "node_modules/semver/internal/identifiers.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var numeric = /^[0-9]+$/;
      var compareIdentifiers = (a, b) => {
        if (typeof a === "number" && typeof b === "number") {
          return a === b ? 0 : a < b ? -1 : 1;
        }
        const anum = numeric.test(a);
        const bnum = numeric.test(b);
        if (anum && bnum) {
          a = +a;
          b = +b;
        }
        return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
      };
      var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
      module.exports = {
        compareIdentifiers,
        rcompareIdentifiers
      };
    }
  });

  // node_modules/semver/classes/semver.js
  var require_semver = __commonJS({
    "node_modules/semver/classes/semver.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var debug = require_debug();
      var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
      var { safeRe: re, t } = require_re();
      var parseOptions = require_parse_options();
      var { compareIdentifiers } = require_identifiers();
      var isPrereleaseIdentifier = (prerelease, identifier) => {
        const identifiers = identifier.split(".");
        if (identifiers.length > prerelease.length) {
          return false;
        }
        for (let i = 0; i < identifiers.length; i++) {
          if (compareIdentifiers(prerelease[i], identifiers[i]) !== 0) {
            return false;
          }
        }
        return true;
      };
      var SemVer = class _SemVer {
        constructor(version2, options) {
          options = parseOptions(options);
          if (version2 instanceof _SemVer) {
            if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
              return version2;
            } else {
              version2 = version2.version;
            }
          } else if (typeof version2 !== "string") {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
          }
          if (version2.length > MAX_LENGTH) {
            throw new TypeError(
              `version is longer than ${MAX_LENGTH} characters`
            );
          }
          debug("SemVer", version2, options);
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          const m = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
          if (!m) {
            throw new TypeError(`Invalid Version: ${version2}`);
          }
          this.raw = version2;
          this.major = +m[1];
          this.minor = +m[2];
          this.patch = +m[3];
          if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError("Invalid major version");
          }
          if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError("Invalid minor version");
          }
          if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError("Invalid patch version");
          }
          if (!m[4]) {
            this.prerelease = [];
          } else {
            this.prerelease = m[4].split(".").map((id) => {
              if (/^[0-9]+$/.test(id)) {
                const num = +id;
                if (num >= 0 && num < MAX_SAFE_INTEGER) {
                  return num;
                }
              }
              return id;
            });
          }
          this.build = m[5] ? m[5].split(".") : [];
          this.format();
        }
        format() {
          this.version = `${this.major}.${this.minor}.${this.patch}`;
          if (this.prerelease.length) {
            this.version += `-${this.prerelease.join(".")}`;
          }
          return this.version;
        }
        toString() {
          return this.version;
        }
        compare(other) {
          debug("SemVer.compare", this.version, this.options, other);
          if (!(other instanceof _SemVer)) {
            if (typeof other === "string" && other === this.version) {
              return 0;
            }
            other = new _SemVer(other, this.options);
          }
          if (other.version === this.version) {
            return 0;
          }
          return this.compareMain(other) || this.comparePre(other);
        }
        compareMain(other) {
          if (!(other instanceof _SemVer)) {
            other = new _SemVer(other, this.options);
          }
          if (this.major < other.major) {
            return -1;
          }
          if (this.major > other.major) {
            return 1;
          }
          if (this.minor < other.minor) {
            return -1;
          }
          if (this.minor > other.minor) {
            return 1;
          }
          if (this.patch < other.patch) {
            return -1;
          }
          if (this.patch > other.patch) {
            return 1;
          }
          return 0;
        }
        comparePre(other) {
          if (!(other instanceof _SemVer)) {
            other = new _SemVer(other, this.options);
          }
          if (this.prerelease.length && !other.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
          }
          let i = 0;
          do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug("prerelease compare", i, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
        compareBuild(other) {
          if (!(other instanceof _SemVer)) {
            other = new _SemVer(other, this.options);
          }
          let i = 0;
          do {
            const a = this.build[i];
            const b = other.build[i];
            debug("build compare", i, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
        // preminor will bump the version up to the next minor release, and immediately
        // down to pre-release. premajor and prepatch work the same way.
        inc(release2, identifier, identifierBase) {
          if (release2.startsWith("pre")) {
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (identifier) {
              const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
              if (!match || match[1] !== identifier) {
                throw new Error(`invalid identifier: ${identifier}`);
              }
            }
          }
          switch (release2) {
            case "premajor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc("pre", identifier, identifierBase);
              break;
            case "preminor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc("pre", identifier, identifierBase);
              break;
            case "prepatch":
              this.prerelease.length = 0;
              this.inc("patch", identifier, identifierBase);
              this.inc("pre", identifier, identifierBase);
              break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case "prerelease":
              if (this.prerelease.length === 0) {
                this.inc("patch", identifier, identifierBase);
              }
              this.inc("pre", identifier, identifierBase);
              break;
            case "release":
              if (this.prerelease.length === 0) {
                throw new Error(`version ${this.raw} is not a prerelease`);
              }
              this.prerelease.length = 0;
              break;
            case "major":
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case "minor":
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case "patch":
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case "pre": {
              const base = Number(identifierBase) ? 1 : 0;
              if (this.prerelease.length === 0) {
                this.prerelease = [base];
              } else {
                let i = this.prerelease.length;
                while (--i >= 0) {
                  if (typeof this.prerelease[i] === "number") {
                    this.prerelease[i]++;
                    i = -2;
                  }
                }
                if (i === -1) {
                  if (identifier === this.prerelease.join(".") && identifierBase === false) {
                    throw new Error("invalid increment argument: identifier already exists");
                  }
                  this.prerelease.push(base);
                }
              }
              if (identifier) {
                let prerelease = [identifier, base];
                if (identifierBase === false) {
                  prerelease = [identifier];
                }
                if (isPrereleaseIdentifier(this.prerelease, identifier)) {
                  const prereleaseBase = this.prerelease[identifier.split(".").length];
                  if (isNaN(prereleaseBase)) {
                    this.prerelease = prerelease;
                  }
                } else {
                  this.prerelease = prerelease;
                }
              }
              break;
            }
            default:
              throw new Error(`invalid increment argument: ${release2}`);
          }
          this.raw = this.format();
          if (this.build.length) {
            this.raw += `+${this.build.join(".")}`;
          }
          return this;
        }
      };
      module.exports = SemVer;
    }
  });

  // node_modules/semver/functions/parse.js
  var require_parse = __commonJS({
    "node_modules/semver/functions/parse.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var parse = (version2, options, throwErrors = false) => {
        if (version2 instanceof SemVer) {
          return version2;
        }
        try {
          return new SemVer(version2, options);
        } catch (er) {
          if (!throwErrors) {
            return null;
          }
          throw er;
        }
      };
      module.exports = parse;
    }
  });

  // node_modules/semver/functions/valid.js
  var require_valid = __commonJS({
    "node_modules/semver/functions/valid.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var parse = require_parse();
      var valid = (version2, options) => {
        const v = parse(version2, options);
        return v ? v.version : null;
      };
      module.exports = valid;
    }
  });

  // node_modules/semver/functions/clean.js
  var require_clean = __commonJS({
    "node_modules/semver/functions/clean.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var parse = require_parse();
      var clean = (version2, options) => {
        const s = parse(version2.trim().replace(/^[=v]+/, ""), options);
        return s ? s.version : null;
      };
      module.exports = clean;
    }
  });

  // node_modules/semver/functions/inc.js
  var require_inc = __commonJS({
    "node_modules/semver/functions/inc.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var inc = (version2, release2, options, identifier, identifierBase) => {
        if (typeof options === "string") {
          identifierBase = identifier;
          identifier = options;
          options = void 0;
        }
        try {
          return new SemVer(
            version2 instanceof SemVer ? version2.version : version2,
            options
          ).inc(release2, identifier, identifierBase).version;
        } catch (er) {
          return null;
        }
      };
      module.exports = inc;
    }
  });

  // node_modules/semver/functions/diff.js
  var require_diff = __commonJS({
    "node_modules/semver/functions/diff.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var parse = require_parse();
      var diff = (version1, version2) => {
        const v1 = parse(version1, null, true);
        const v2 = parse(version2, null, true);
        const comparison = v1.compare(v2);
        if (comparison === 0) {
          return null;
        }
        const v1Higher = comparison > 0;
        const highVersion = v1Higher ? v1 : v2;
        const lowVersion = v1Higher ? v2 : v1;
        const highHasPre = !!highVersion.prerelease.length;
        const lowHasPre = !!lowVersion.prerelease.length;
        if (lowHasPre && !highHasPre) {
          if (!lowVersion.patch && !lowVersion.minor) {
            return "major";
          }
          if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
              return "minor";
            }
            return "patch";
          }
        }
        const prefix = highHasPre ? "pre" : "";
        if (v1.major !== v2.major) {
          return prefix + "major";
        }
        if (v1.minor !== v2.minor) {
          return prefix + "minor";
        }
        if (v1.patch !== v2.patch) {
          return prefix + "patch";
        }
        return "prerelease";
      };
      module.exports = diff;
    }
  });

  // node_modules/semver/functions/major.js
  var require_major = __commonJS({
    "node_modules/semver/functions/major.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var major = (a, loose) => new SemVer(a, loose).major;
      module.exports = major;
    }
  });

  // node_modules/semver/functions/minor.js
  var require_minor = __commonJS({
    "node_modules/semver/functions/minor.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var minor = (a, loose) => new SemVer(a, loose).minor;
      module.exports = minor;
    }
  });

  // node_modules/semver/functions/patch.js
  var require_patch = __commonJS({
    "node_modules/semver/functions/patch.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var patch = (a, loose) => new SemVer(a, loose).patch;
      module.exports = patch;
    }
  });

  // node_modules/semver/functions/prerelease.js
  var require_prerelease = __commonJS({
    "node_modules/semver/functions/prerelease.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var parse = require_parse();
      var prerelease = (version2, options) => {
        const parsed = parse(version2, options);
        return parsed && parsed.prerelease.length ? parsed.prerelease : null;
      };
      module.exports = prerelease;
    }
  });

  // node_modules/semver/functions/compare.js
  var require_compare = __commonJS({
    "node_modules/semver/functions/compare.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
      module.exports = compare;
    }
  });

  // node_modules/semver/functions/rcompare.js
  var require_rcompare = __commonJS({
    "node_modules/semver/functions/rcompare.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compare = require_compare();
      var rcompare = (a, b, loose) => compare(b, a, loose);
      module.exports = rcompare;
    }
  });

  // node_modules/semver/functions/compare-loose.js
  var require_compare_loose = __commonJS({
    "node_modules/semver/functions/compare-loose.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compare = require_compare();
      var compareLoose = (a, b) => compare(a, b, true);
      module.exports = compareLoose;
    }
  });

  // node_modules/semver/functions/compare-build.js
  var require_compare_build = __commonJS({
    "node_modules/semver/functions/compare-build.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var compareBuild = (a, b, loose) => {
        const versionA = new SemVer(a, loose);
        const versionB = new SemVer(b, loose);
        return versionA.compare(versionB) || versionA.compareBuild(versionB);
      };
      module.exports = compareBuild;
    }
  });

  // node_modules/semver/functions/sort.js
  var require_sort = __commonJS({
    "node_modules/semver/functions/sort.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compareBuild = require_compare_build();
      var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
      module.exports = sort;
    }
  });

  // node_modules/semver/functions/rsort.js
  var require_rsort = __commonJS({
    "node_modules/semver/functions/rsort.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compareBuild = require_compare_build();
      var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
      module.exports = rsort;
    }
  });

  // node_modules/semver/functions/gt.js
  var require_gt = __commonJS({
    "node_modules/semver/functions/gt.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compare = require_compare();
      var gt = (a, b, loose) => compare(a, b, loose) > 0;
      module.exports = gt;
    }
  });

  // node_modules/semver/functions/lt.js
  var require_lt = __commonJS({
    "node_modules/semver/functions/lt.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compare = require_compare();
      var lt = (a, b, loose) => compare(a, b, loose) < 0;
      module.exports = lt;
    }
  });

  // node_modules/semver/functions/eq.js
  var require_eq = __commonJS({
    "node_modules/semver/functions/eq.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compare = require_compare();
      var eq = (a, b, loose) => compare(a, b, loose) === 0;
      module.exports = eq;
    }
  });

  // node_modules/semver/functions/neq.js
  var require_neq = __commonJS({
    "node_modules/semver/functions/neq.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compare = require_compare();
      var neq = (a, b, loose) => compare(a, b, loose) !== 0;
      module.exports = neq;
    }
  });

  // node_modules/semver/functions/gte.js
  var require_gte = __commonJS({
    "node_modules/semver/functions/gte.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compare = require_compare();
      var gte = (a, b, loose) => compare(a, b, loose) >= 0;
      module.exports = gte;
    }
  });

  // node_modules/semver/functions/lte.js
  var require_lte = __commonJS({
    "node_modules/semver/functions/lte.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var compare = require_compare();
      var lte = (a, b, loose) => compare(a, b, loose) <= 0;
      module.exports = lte;
    }
  });

  // node_modules/semver/functions/cmp.js
  var require_cmp = __commonJS({
    "node_modules/semver/functions/cmp.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var eq = require_eq();
      var neq = require_neq();
      var gt = require_gt();
      var gte = require_gte();
      var lt = require_lt();
      var lte = require_lte();
      var cmp = (a, op, b, loose) => {
        switch (op) {
          case "===":
            if (typeof a === "object") {
              a = a.version;
            }
            if (typeof b === "object") {
              b = b.version;
            }
            return a === b;
          case "!==":
            if (typeof a === "object") {
              a = a.version;
            }
            if (typeof b === "object") {
              b = b.version;
            }
            return a !== b;
          case "":
          case "=":
          case "==":
            return eq(a, b, loose);
          case "!=":
            return neq(a, b, loose);
          case ">":
            return gt(a, b, loose);
          case ">=":
            return gte(a, b, loose);
          case "<":
            return lt(a, b, loose);
          case "<=":
            return lte(a, b, loose);
          default:
            throw new TypeError(`Invalid operator: ${op}`);
        }
      };
      module.exports = cmp;
    }
  });

  // node_modules/semver/functions/coerce.js
  var require_coerce = __commonJS({
    "node_modules/semver/functions/coerce.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var parse = require_parse();
      var { safeRe: re, t } = require_re();
      var coerce = (version2, options) => {
        if (version2 instanceof SemVer) {
          return version2;
        }
        if (typeof version2 === "number") {
          version2 = String(version2);
        }
        if (typeof version2 !== "string") {
          return null;
        }
        options = options || {};
        let match = null;
        if (!options.rtl) {
          match = version2.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
        } else {
          const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
          let next;
          while ((next = coerceRtlRegex.exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
              match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
          }
          coerceRtlRegex.lastIndex = -1;
        }
        if (match === null) {
          return null;
        }
        const major = match[2];
        const minor = match[3] || "0";
        const patch = match[4] || "0";
        const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
        const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
        return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
      };
      module.exports = coerce;
    }
  });

  // node_modules/semver/functions/truncate.js
  var require_truncate = __commonJS({
    "node_modules/semver/functions/truncate.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var parse = require_parse();
      var constants = require_constants();
      var SemVer = require_semver();
      var truncate = (version2, truncation, options) => {
        if (!constants.RELEASE_TYPES.includes(truncation)) {
          return null;
        }
        const clonedVersion = cloneInputVersion(version2, options);
        return clonedVersion && doTruncation(clonedVersion, truncation);
      };
      var cloneInputVersion = (version2, options) => {
        const versionStringToParse = version2 instanceof SemVer ? version2.version : version2;
        return parse(versionStringToParse, options);
      };
      var doTruncation = (version2, truncation) => {
        if (isPrerelease(truncation)) {
          return version2.version;
        }
        version2.prerelease = [];
        switch (truncation) {
          case "major":
            version2.minor = 0;
            version2.patch = 0;
            break;
          case "minor":
            version2.patch = 0;
            break;
        }
        return version2.format();
      };
      var isPrerelease = (type) => {
        return type.startsWith("pre");
      };
      module.exports = truncate;
    }
  });

  // node_modules/semver/internal/lrucache.js
  var require_lrucache = __commonJS({
    "node_modules/semver/internal/lrucache.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var LRUCache = class {
        constructor() {
          this.max = 1e3;
          this.map = /* @__PURE__ */ new Map();
        }
        get(key) {
          const value = this.map.get(key);
          if (value === void 0) {
            return void 0;
          } else {
            this.map.delete(key);
            this.map.set(key, value);
            return value;
          }
        }
        delete(key) {
          return this.map.delete(key);
        }
        set(key, value) {
          const deleted = this.delete(key);
          if (!deleted && value !== void 0) {
            if (this.map.size >= this.max) {
              const firstKey = this.map.keys().next().value;
              this.delete(firstKey);
            }
            this.map.set(key, value);
          }
          return this;
        }
      };
      module.exports = LRUCache;
    }
  });

  // node_modules/semver/classes/range.js
  var require_range2 = __commonJS({
    "node_modules/semver/classes/range.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SPACE_CHARACTERS = /\s+/g;
      var Range = class _Range {
        constructor(range, options) {
          options = parseOptions(options);
          if (range instanceof _Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
              return range;
            } else {
              return new _Range(range.raw, options);
            }
          }
          if (range instanceof Comparator) {
            this.raw = range.value;
            this.set = [[range]];
            this.formatted = void 0;
            return this;
          }
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
          this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
          if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
          }
          if (this.set.length > 1) {
            const first = this.set[0];
            this.set = this.set.filter((c) => !isNullSet(c[0]));
            if (this.set.length === 0) {
              this.set = [first];
            } else if (this.set.length > 1) {
              for (const c of this.set) {
                if (c.length === 1 && isAny(c[0])) {
                  this.set = [c];
                  break;
                }
              }
            }
          }
          this.formatted = void 0;
        }
        get range() {
          if (this.formatted === void 0) {
            this.formatted = "";
            for (let i = 0; i < this.set.length; i++) {
              if (i > 0) {
                this.formatted += "||";
              }
              const comps = this.set[i];
              for (let k = 0; k < comps.length; k++) {
                if (k > 0) {
                  this.formatted += " ";
                }
                this.formatted += comps[k].toString().trim();
              }
            }
          }
          return this.formatted;
        }
        format() {
          return this.range;
        }
        toString() {
          return this.range;
        }
        parseRange(range) {
          range = range.replace(BUILDSTRIPRE, "");
          const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
          const memoKey = memoOpts + ":" + range;
          const cached = cache.get(memoKey);
          if (cached) {
            return cached;
          }
          const loose = this.options.loose;
          const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
          range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
          debug("hyphen replace", range);
          range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
          debug("comparator trim", range);
          range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
          debug("tilde trim", range);
          range = range.replace(re[t.CARETTRIM], caretTrimReplace);
          debug("caret trim", range);
          let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
          if (loose) {
            rangeList = rangeList.filter((comp) => {
              debug("loose invalid filter", comp, this.options);
              return !!comp.match(re[t.COMPARATORLOOSE]);
            });
          }
          debug("range list", rangeList);
          const rangeMap = /* @__PURE__ */ new Map();
          const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
          for (const comp of comparators) {
            if (isNullSet(comp)) {
              return [comp];
            }
            rangeMap.set(comp.value, comp);
          }
          if (rangeMap.size > 1 && rangeMap.has("")) {
            rangeMap.delete("");
          }
          const result = [...rangeMap.values()];
          cache.set(memoKey, result);
          return result;
        }
        intersects(range, options) {
          if (!(range instanceof _Range)) {
            throw new TypeError("a Range is required");
          }
          return this.set.some((thisComparators) => {
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
              return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
                return rangeComparators.every((rangeComparator) => {
                  return thisComparator.intersects(rangeComparator, options);
                });
              });
            });
          });
        }
        // if ANY of the sets match ALL of its comparators, then pass
        test(version2) {
          if (!version2) {
            return false;
          }
          if (typeof version2 === "string") {
            try {
              version2 = new SemVer(version2, this.options);
            } catch (er) {
              return false;
            }
          }
          for (let i = 0; i < this.set.length; i++) {
            if (testSet(this.set[i], version2, this.options)) {
              return true;
            }
          }
          return false;
        }
      };
      module.exports = Range;
      var LRU = require_lrucache();
      var cache = new LRU();
      var parseOptions = require_parse_options();
      var Comparator = require_comparator();
      var debug = require_debug();
      var SemVer = require_semver();
      var {
        safeRe: re,
        src,
        t,
        comparatorTrimReplace,
        tildeTrimReplace,
        caretTrimReplace
      } = require_re();
      var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
      var BUILDSTRIPRE = new RegExp(src[t.BUILD], "g");
      var isNullSet = (c) => c.value === "<0.0.0-0";
      var isAny = (c) => c.value === "";
      var isSatisfiable = (comparators, options) => {
        let result = true;
        const remainingComparators = comparators.slice();
        let testComparator = remainingComparators.pop();
        while (result && remainingComparators.length) {
          result = remainingComparators.every((otherComparator) => {
            return testComparator.intersects(otherComparator, options);
          });
          testComparator = remainingComparators.pop();
        }
        return result;
      };
      var parseComparator = (comp, options) => {
        comp = comp.replace(re[t.BUILD], "");
        debug("comp", comp, options);
        comp = replaceCarets(comp, options);
        debug("caret", comp);
        comp = replaceTildes(comp, options);
        debug("tildes", comp);
        comp = replaceXRanges(comp, options);
        debug("xrange", comp);
        comp = replaceStars(comp, options);
        debug("stars", comp);
        return comp;
      };
      var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
      var invalidXRangeOrder = (M, m, p) => isX(M) && !isX(m) || isX(m) && p && !isX(p);
      var replaceTildes = (comp, options) => {
        return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
      };
      var replaceTilde = (comp, options) => {
        const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
        const z = options.includePrerelease ? "-0" : "";
        return comp.replace(r, (_, M, m, p, pr) => {
          debug("tilde", comp, _, M, m, p, pr);
          let ret;
          if (isX(M)) {
            ret = "";
          } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
          } else if (isX(p)) {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else if (pr) {
            debug("replaceTilde pr", pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
          }
          debug("tilde return", ret);
          return ret;
        });
      };
      var replaceCarets = (comp, options) => {
        return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
      };
      var replaceCaret = (comp, options) => {
        debug("caret", comp, options);
        const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
        const z = options.includePrerelease ? "-0" : "";
        return comp.replace(r, (_, M, m, p, pr) => {
          debug("caret", comp, _, M, m, p, pr);
          let ret;
          if (isX(M)) {
            ret = "";
          } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
          } else if (isX(p)) {
            if (M === "0") {
              ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
              ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
          } else if (pr) {
            debug("replaceCaret pr", pr);
            if (M === "0") {
              if (m === "0") {
                ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
              } else {
                ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
              }
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
          } else {
            debug("no pr");
            if (M === "0") {
              if (m === "0") {
                ret = `>=${M}.${m}.${p} <${M}.${m}.${+p + 1}-0`;
              } else {
                ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
              }
            } else {
              ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
          }
          debug("caret return", ret);
          return ret;
        });
      };
      var replaceXRanges = (comp, options) => {
        debug("replaceXRanges", comp, options);
        return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
      };
      var replaceXRange = (comp, options) => {
        comp = comp.trim();
        const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
        return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
          debug("xRange", comp, ret, gtlt, M, m, p, pr);
          if (invalidXRangeOrder(M, m, p)) {
            return comp;
          }
          const xM = isX(M);
          const xm = xM || isX(m);
          const xp = xm || isX(p);
          const anyX = xp;
          if (gtlt === "=" && anyX) {
            gtlt = "";
          }
          pr = options.includePrerelease ? "-0" : "";
          if (xM) {
            if (gtlt === ">" || gtlt === "<") {
              ret = "<0.0.0-0";
            } else {
              ret = "*";
            }
          } else if (gtlt && anyX) {
            if (xm) {
              m = 0;
            }
            p = 0;
            if (gtlt === ">") {
              gtlt = ">=";
              if (xm) {
                M = +M + 1;
                m = 0;
                p = 0;
              } else {
                m = +m + 1;
                p = 0;
              }
            } else if (gtlt === "<=") {
              gtlt = "<";
              if (xm) {
                M = +M + 1;
              } else {
                m = +m + 1;
              }
            }
            if (gtlt === "<") {
              pr = "-0";
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
          } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
          } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
          }
          debug("xRange return", ret);
          return ret;
        });
      };
      var replaceStars = (comp, options) => {
        debug("replaceStars", comp, options);
        return comp.trim().replace(re[t.STAR], "");
      };
      var replaceGTE0 = (comp, options) => {
        debug("replaceGTE0", comp, options);
        return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
      };
      var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
        if (isX(fM)) {
          from = "";
        } else if (isX(fm)) {
          from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
        } else if (isX(fp)) {
          from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
        } else if (fpr) {
          from = `>=${from}`;
        } else {
          from = `>=${from}${incPr ? "-0" : ""}`;
        }
        if (isX(tM)) {
          to = "";
        } else if (isX(tm)) {
          to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
          to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
          to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
          to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
          to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
      };
      var testSet = (set, version2, options) => {
        for (let i = 0; i < set.length; i++) {
          if (!set[i].test(version2)) {
            return false;
          }
        }
        if (version2.prerelease.length && !options.includePrerelease) {
          for (let i = 0; i < set.length; i++) {
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
              continue;
            }
            if (set[i].semver.prerelease.length > 0) {
              const allowed = set[i].semver;
              if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
                return true;
              }
            }
          }
          return false;
        }
        return true;
      };
    }
  });

  // node_modules/semver/classes/comparator.js
  var require_comparator = __commonJS({
    "node_modules/semver/classes/comparator.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var ANY = /* @__PURE__ */ Symbol("SemVer ANY");
      var Comparator = class _Comparator {
        static get ANY() {
          return ANY;
        }
        constructor(comp, options) {
          options = parseOptions(options);
          if (comp instanceof _Comparator) {
            if (comp.loose === !!options.loose) {
              return comp;
            } else {
              comp = comp.value;
            }
          }
          comp = comp.trim().split(/\s+/).join(" ");
          debug("comparator", comp, options);
          this.options = options;
          this.loose = !!options.loose;
          this.parse(comp);
          if (this.semver === ANY) {
            this.value = "";
          } else {
            this.value = this.operator + this.semver.version;
          }
          debug("comp", this);
        }
        parse(comp) {
          const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
          const m = comp.match(r);
          if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
          }
          this.operator = m[1] !== void 0 ? m[1] : "";
          if (this.operator === "=") {
            this.operator = "";
          }
          if (!m[2]) {
            this.semver = ANY;
          } else {
            this.semver = new SemVer(m[2], this.options.loose);
          }
        }
        toString() {
          return this.value;
        }
        test(version2) {
          debug("Comparator.test", version2, this.options.loose);
          if (this.semver === ANY || version2 === ANY) {
            return true;
          }
          if (typeof version2 === "string") {
            try {
              version2 = new SemVer(version2, this.options);
            } catch (er) {
              return false;
            }
          }
          return cmp(version2, this.operator, this.semver, this.options);
        }
        intersects(comp, options) {
          if (!(comp instanceof _Comparator)) {
            throw new TypeError("a Comparator is required");
          }
          if (this.operator === "") {
            if (this.value === "") {
              return true;
            }
            return new Range(comp.value, options).test(this.value);
          } else if (comp.operator === "") {
            if (comp.value === "") {
              return true;
            }
            return new Range(this.value, options).test(comp.semver);
          }
          options = parseOptions(options);
          if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
            return false;
          }
          if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
            return false;
          }
          if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
            return true;
          }
          if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
            return true;
          }
          if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
            return true;
          }
          if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
            return true;
          }
          if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
            return true;
          }
          return false;
        }
      };
      module.exports = Comparator;
      var parseOptions = require_parse_options();
      var { safeRe: re, t } = require_re();
      var cmp = require_cmp();
      var debug = require_debug();
      var SemVer = require_semver();
      var Range = require_range2();
    }
  });

  // node_modules/semver/functions/satisfies.js
  var require_satisfies = __commonJS({
    "node_modules/semver/functions/satisfies.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Range = require_range2();
      var satisfies = (version2, range, options) => {
        try {
          range = new Range(range, options);
        } catch (er) {
          return false;
        }
        return range.test(version2);
      };
      module.exports = satisfies;
    }
  });

  // node_modules/semver/ranges/to-comparators.js
  var require_to_comparators = __commonJS({
    "node_modules/semver/ranges/to-comparators.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Range = require_range2();
      var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
      module.exports = toComparators;
    }
  });

  // node_modules/semver/ranges/max-satisfying.js
  var require_max_satisfying = __commonJS({
    "node_modules/semver/ranges/max-satisfying.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var Range = require_range2();
      var maxSatisfying = (versions2, range, options) => {
        let max = null;
        let maxSV = null;
        let rangeObj = null;
        try {
          rangeObj = new Range(range, options);
        } catch (er) {
          return null;
        }
        versions2.forEach((v) => {
          if (rangeObj.test(v)) {
            if (!max || maxSV.compare(v) === -1) {
              max = v;
              maxSV = new SemVer(max, options);
            }
          }
        });
        return max;
      };
      module.exports = maxSatisfying;
    }
  });

  // node_modules/semver/ranges/min-satisfying.js
  var require_min_satisfying = __commonJS({
    "node_modules/semver/ranges/min-satisfying.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var Range = require_range2();
      var minSatisfying = (versions2, range, options) => {
        let min = null;
        let minSV = null;
        let rangeObj = null;
        try {
          rangeObj = new Range(range, options);
        } catch (er) {
          return null;
        }
        versions2.forEach((v) => {
          if (rangeObj.test(v)) {
            if (!min || minSV.compare(v) === 1) {
              min = v;
              minSV = new SemVer(min, options);
            }
          }
        });
        return min;
      };
      module.exports = minSatisfying;
    }
  });

  // node_modules/semver/ranges/min-version.js
  var require_min_version = __commonJS({
    "node_modules/semver/ranges/min-version.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var Range = require_range2();
      var gt = require_gt();
      var minVersion = (range, loose) => {
        range = new Range(range, loose);
        let minver = new SemVer("0.0.0");
        if (range.test(minver)) {
          return minver;
        }
        minver = new SemVer("0.0.0-0");
        if (range.test(minver)) {
          return minver;
        }
        minver = null;
        for (let i = 0; i < range.set.length; ++i) {
          const comparators = range.set[i];
          let setMin = null;
          comparators.forEach((comparator) => {
            const compver = new SemVer(comparator.semver.version);
            switch (comparator.operator) {
              case ">":
                if (compver.prerelease.length === 0) {
                  compver.patch++;
                } else {
                  compver.prerelease.push(0);
                }
                compver.raw = compver.format();
              /* fallthrough */
              case "":
              case ">=":
                if (!setMin || gt(compver, setMin)) {
                  setMin = compver;
                }
                break;
              case "<":
              case "<=":
                break;
              /* istanbul ignore next */
              default:
                throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
          });
          if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
          }
        }
        if (minver && range.test(minver)) {
          return minver;
        }
        return null;
      };
      module.exports = minVersion;
    }
  });

  // node_modules/semver/ranges/valid.js
  var require_valid2 = __commonJS({
    "node_modules/semver/ranges/valid.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Range = require_range2();
      var validRange = (range, options) => {
        try {
          return new Range(range, options).range || "*";
        } catch (er) {
          return null;
        }
      };
      module.exports = validRange;
    }
  });

  // node_modules/semver/ranges/outside.js
  var require_outside = __commonJS({
    "node_modules/semver/ranges/outside.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var SemVer = require_semver();
      var Comparator = require_comparator();
      var { ANY } = Comparator;
      var Range = require_range2();
      var satisfies = require_satisfies();
      var gt = require_gt();
      var lt = require_lt();
      var lte = require_lte();
      var gte = require_gte();
      var outside = (version2, range, hilo, options) => {
        version2 = new SemVer(version2, options);
        range = new Range(range, options);
        let gtfn, ltefn, ltfn, comp, ecomp;
        switch (hilo) {
          case ">":
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = ">";
            ecomp = ">=";
            break;
          case "<":
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = "<";
            ecomp = "<=";
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (satisfies(version2, range, options)) {
          return false;
        }
        for (let i = 0; i < range.set.length; ++i) {
          const comparators = range.set[i];
          let high = null;
          let low = null;
          comparators.forEach((comparator) => {
            if (comparator.semver === ANY) {
              comparator = new Comparator(">=0.0.0");
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
              high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
              low = comparator;
            }
          });
          if (high.operator === comp || high.operator === ecomp) {
            return false;
          }
          if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
            return false;
          } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
            return false;
          }
        }
        return true;
      };
      module.exports = outside;
    }
  });

  // node_modules/semver/ranges/gtr.js
  var require_gtr = __commonJS({
    "node_modules/semver/ranges/gtr.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var outside = require_outside();
      var gtr = (version2, range, options) => outside(version2, range, ">", options);
      module.exports = gtr;
    }
  });

  // node_modules/semver/ranges/ltr.js
  var require_ltr = __commonJS({
    "node_modules/semver/ranges/ltr.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var outside = require_outside();
      var ltr = (version2, range, options) => outside(version2, range, "<", options);
      module.exports = ltr;
    }
  });

  // node_modules/semver/ranges/intersects.js
  var require_intersects = __commonJS({
    "node_modules/semver/ranges/intersects.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Range = require_range2();
      var intersects = (r1, r2, options) => {
        r1 = new Range(r1, options);
        r2 = new Range(r2, options);
        return r1.intersects(r2, options);
      };
      module.exports = intersects;
    }
  });

  // node_modules/semver/ranges/simplify.js
  var require_simplify = __commonJS({
    "node_modules/semver/ranges/simplify.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var satisfies = require_satisfies();
      var compare = require_compare();
      module.exports = (versions2, range, options) => {
        const set = [];
        let first = null;
        let prev = null;
        const v = versions2.sort((a, b) => compare(a, b, options));
        for (const version2 of v) {
          const included = satisfies(version2, range, options);
          if (included) {
            prev = version2;
            if (!first) {
              first = version2;
            }
          } else {
            if (prev) {
              set.push([first, prev]);
            }
            prev = null;
            first = null;
          }
        }
        if (first) {
          set.push([first, null]);
        }
        const ranges = [];
        for (const [min, max] of set) {
          if (min === max) {
            ranges.push(min);
          } else if (!max && min === v[0]) {
            ranges.push("*");
          } else if (!max) {
            ranges.push(`>=${min}`);
          } else if (min === v[0]) {
            ranges.push(`<=${max}`);
          } else {
            ranges.push(`${min} - ${max}`);
          }
        }
        const simplified = ranges.join(" || ");
        const original = typeof range.raw === "string" ? range.raw : String(range);
        return simplified.length < original.length ? simplified : range;
      };
    }
  });

  // node_modules/semver/ranges/subset.js
  var require_subset = __commonJS({
    "node_modules/semver/ranges/subset.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var Range = require_range2();
      var Comparator = require_comparator();
      var { ANY } = Comparator;
      var satisfies = require_satisfies();
      var compare = require_compare();
      var subset = (sub, dom, options = {}) => {
        if (sub === dom) {
          return true;
        }
        sub = new Range(sub, options);
        dom = new Range(dom, options);
        let sawNonNull = false;
        OUTER: for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
        return true;
      };
      var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
      var minimumVersion = [new Comparator(">=0.0.0")];
      var simpleSubset = (sub, dom, options) => {
        if (sub === dom) {
          return true;
        }
        if (sub.length === 1 && sub[0].semver === ANY) {
          if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
          } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
          } else {
            sub = minimumVersion;
          }
        }
        if (dom.length === 1 && dom[0].semver === ANY) {
          if (options.includePrerelease) {
            return true;
          } else {
            dom = minimumVersion;
          }
        }
        const eqSet = /* @__PURE__ */ new Set();
        let gt, lt;
        for (const c of sub) {
          if (c.operator === ">" || c.operator === ">=") {
            gt = higherGT(gt, c, options);
          } else if (c.operator === "<" || c.operator === "<=") {
            lt = lowerLT(lt, c, options);
          } else {
            eqSet.add(c.semver);
          }
        }
        if (eqSet.size > 1) {
          return null;
        }
        let gtltComp;
        if (gt && lt) {
          gtltComp = compare(gt.semver, lt.semver, options);
          if (gtltComp > 0) {
            return null;
          } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
            return null;
          }
        }
        for (const eq of eqSet) {
          if (gt && !satisfies(eq, String(gt), options)) {
            return null;
          }
          if (lt && !satisfies(eq, String(lt), options)) {
            return null;
          }
          for (const c of dom) {
            if (!satisfies(eq, String(c), options)) {
              return false;
            }
          }
          return true;
        }
        let higher, lower;
        let hasDomLT, hasDomGT;
        let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
        let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
        if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
          needDomLTPre = false;
        }
        for (const c of dom) {
          hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
          hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
          if (gt) {
            if (needDomGTPre) {
              if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                needDomGTPre = false;
              }
            }
            if (c.operator === ">" || c.operator === ">=") {
              higher = higherGT(gt, c, options);
              if (higher === c && higher !== gt) {
                return false;
              }
            } else if (gt.operator === ">=" && !c.test(gt.semver)) {
              return false;
            }
          }
          if (lt) {
            if (needDomLTPre) {
              if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                needDomLTPre = false;
              }
            }
            if (c.operator === "<" || c.operator === "<=") {
              lower = lowerLT(lt, c, options);
              if (lower === c && lower !== lt) {
                return false;
              }
            } else if (lt.operator === "<=" && !c.test(lt.semver)) {
              return false;
            }
          }
          if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
          }
        }
        if (gt && hasDomLT && !lt && gtltComp !== 0) {
          return false;
        }
        if (lt && hasDomGT && !gt && gtltComp !== 0) {
          return false;
        }
        if (needDomGTPre || needDomLTPre) {
          return false;
        }
        return true;
      };
      var higherGT = (a, b, options) => {
        if (!a) {
          return b;
        }
        const comp = compare(a.semver, b.semver, options);
        return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
      };
      var lowerLT = (a, b, options) => {
        if (!a) {
          return b;
        }
        const comp = compare(a.semver, b.semver, options);
        return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
      };
      module.exports = subset;
    }
  });

  // node_modules/semver/index.js
  var require_semver2 = __commonJS({
    "node_modules/semver/index.js"(exports4, module) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var internalRe = require_re();
      var constants = require_constants();
      var SemVer = require_semver();
      var identifiers = require_identifiers();
      var parse = require_parse();
      var valid = require_valid();
      var clean = require_clean();
      var inc = require_inc();
      var diff = require_diff();
      var major = require_major();
      var minor = require_minor();
      var patch = require_patch();
      var prerelease = require_prerelease();
      var compare = require_compare();
      var rcompare = require_rcompare();
      var compareLoose = require_compare_loose();
      var compareBuild = require_compare_build();
      var sort = require_sort();
      var rsort = require_rsort();
      var gt = require_gt();
      var lt = require_lt();
      var eq = require_eq();
      var neq = require_neq();
      var gte = require_gte();
      var lte = require_lte();
      var cmp = require_cmp();
      var coerce = require_coerce();
      var truncate = require_truncate();
      var Comparator = require_comparator();
      var Range = require_range2();
      var satisfies = require_satisfies();
      var toComparators = require_to_comparators();
      var maxSatisfying = require_max_satisfying();
      var minSatisfying = require_min_satisfying();
      var minVersion = require_min_version();
      var validRange = require_valid2();
      var outside = require_outside();
      var gtr = require_gtr();
      var ltr = require_ltr();
      var intersects = require_intersects();
      var simplifyRange = require_simplify();
      var subset = require_subset();
      module.exports = {
        parse,
        valid,
        clean,
        inc,
        diff,
        major,
        minor,
        patch,
        prerelease,
        compare,
        rcompare,
        compareLoose,
        compareBuild,
        sort,
        rsort,
        gt,
        lt,
        eq,
        neq,
        gte,
        lte,
        cmp,
        coerce,
        truncate,
        Comparator,
        Range,
        satisfies,
        toComparators,
        maxSatisfying,
        minSatisfying,
        minVersion,
        validRange,
        outside,
        gtr,
        ltr,
        intersects,
        simplifyRange,
        subset,
        SemVer,
        re: internalRe.re,
        src: internalRe.src,
        tokens: internalRe.t,
        SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: constants.RELEASE_TYPES,
        compareIdentifiers: identifiers.compareIdentifiers,
        rcompareIdentifiers: identifiers.rcompareIdentifiers
      };
    }
  });

  // node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js
  var require_asymmetricKeyDetailsSupported = __commonJS({
    "node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var semver = require_semver2();
      module.exports = semver.satisfies(process2.version, ">=15.7.0");
    }
  });

  // node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js
  var require_rsaPssKeyDetailsSupported = __commonJS({
    "node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var semver = require_semver2();
      module.exports = semver.satisfies(process2.version, ">=16.9.0");
    }
  });

  // node_modules/jsonwebtoken/lib/validateAsymmetricKey.js
  var require_validateAsymmetricKey = __commonJS({
    "node_modules/jsonwebtoken/lib/validateAsymmetricKey.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var ASYMMETRIC_KEY_DETAILS_SUPPORTED = require_asymmetricKeyDetailsSupported();
      var RSA_PSS_KEY_DETAILS_SUPPORTED = require_rsaPssKeyDetailsSupported();
      var allowedAlgorithmsForKeys = {
        "ec": ["ES256", "ES384", "ES512"],
        "rsa": ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
        "rsa-pss": ["PS256", "PS384", "PS512"]
      };
      var allowedCurves = {
        ES256: "prime256v1",
        ES384: "secp384r1",
        ES512: "secp521r1"
      };
      module.exports = function(algorithm, key) {
        if (!algorithm || !key) return;
        const keyType = key.asymmetricKeyType;
        if (!keyType) return;
        const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
        if (!allowedAlgorithms) {
          throw new Error(`Unknown key type "${keyType}".`);
        }
        if (!allowedAlgorithms.includes(algorithm)) {
          throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(", ")}.`);
        }
        if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
          switch (keyType) {
            case "ec":
              const keyCurve = key.asymmetricKeyDetails.namedCurve;
              const allowedCurve = allowedCurves[algorithm];
              if (keyCurve !== allowedCurve) {
                throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
              }
              break;
            case "rsa-pss":
              if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
                const length = parseInt(algorithm.slice(-3), 10);
                const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
                if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                  throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
                }
                if (saltLength !== void 0 && saltLength > length >> 3) {
                  throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
                }
              }
              break;
          }
        }
      };
    }
  });

  // node_modules/jsonwebtoken/lib/psSupported.js
  var require_psSupported = __commonJS({
    "node_modules/jsonwebtoken/lib/psSupported.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var semver = require_semver2();
      module.exports = semver.satisfies(process2.version, "^6.12.0 || >=8.0.0");
    }
  });

  // node_modules/jsonwebtoken/verify.js
  var require_verify = __commonJS({
    "node_modules/jsonwebtoken/verify.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var JsonWebTokenError = require_JsonWebTokenError();
      var NotBeforeError = require_NotBeforeError();
      var TokenExpiredError = require_TokenExpiredError();
      var decode = require_decode();
      var timespan = require_timespan();
      var validateAsymmetricKey = require_validateAsymmetricKey();
      var PS_SUPPORTED = require_psSupported();
      var jws = require_jws();
      var { KeyObject, createSecretKey, createPublicKey } = (init_empty(), __toCommonJS(empty_exports));
      var PUB_KEY_ALGS = ["RS256", "RS384", "RS512"];
      var EC_KEY_ALGS = ["ES256", "ES384", "ES512"];
      var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
      var HS_ALGS = ["HS256", "HS384", "HS512"];
      if (PS_SUPPORTED) {
        PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
        RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
      }
      module.exports = function(jwtString, secretOrPublicKey, options, callback) {
        if (typeof options === "function" && !callback) {
          callback = options;
          options = {};
        }
        if (!options) {
          options = {};
        }
        options = Object.assign({}, options);
        let done;
        if (callback) {
          done = callback;
        } else {
          done = function(err, data) {
            if (err) throw err;
            return data;
          };
        }
        if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
          return done(new JsonWebTokenError("clockTimestamp must be a number"));
        }
        if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
          return done(new JsonWebTokenError("nonce must be a non-empty string"));
        }
        if (options.allowInvalidAsymmetricKeyTypes !== void 0 && typeof options.allowInvalidAsymmetricKeyTypes !== "boolean") {
          return done(new JsonWebTokenError("allowInvalidAsymmetricKeyTypes must be a boolean"));
        }
        const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
        if (!jwtString) {
          return done(new JsonWebTokenError("jwt must be provided"));
        }
        if (typeof jwtString !== "string") {
          return done(new JsonWebTokenError("jwt must be a string"));
        }
        const parts = jwtString.split(".");
        if (parts.length !== 3) {
          return done(new JsonWebTokenError("jwt malformed"));
        }
        let decodedToken;
        try {
          decodedToken = decode(jwtString, { complete: true });
        } catch (err) {
          return done(err);
        }
        if (!decodedToken) {
          return done(new JsonWebTokenError("invalid token"));
        }
        const header = decodedToken.header;
        let getSecret;
        if (typeof secretOrPublicKey === "function") {
          if (!callback) {
            return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
          }
          getSecret = secretOrPublicKey;
        } else {
          getSecret = function(header2, secretCallback) {
            return secretCallback(null, secretOrPublicKey);
          };
        }
        return getSecret(header, function(err, secretOrPublicKey2) {
          if (err) {
            return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
          }
          const hasSignature = parts[2].trim() !== "";
          if (!hasSignature && secretOrPublicKey2) {
            return done(new JsonWebTokenError("jwt signature is required"));
          }
          if (hasSignature && !secretOrPublicKey2) {
            return done(new JsonWebTokenError("secret or public key must be provided"));
          }
          if (!hasSignature && !options.algorithms) {
            return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
          }
          if (secretOrPublicKey2 != null && !(secretOrPublicKey2 instanceof KeyObject)) {
            try {
              secretOrPublicKey2 = createPublicKey(secretOrPublicKey2);
            } catch (_) {
              try {
                secretOrPublicKey2 = createSecretKey(typeof secretOrPublicKey2 === "string" ? Buffer3.from(secretOrPublicKey2) : secretOrPublicKey2);
              } catch (_2) {
                return done(new JsonWebTokenError("secretOrPublicKey is not valid key material"));
              }
            }
          }
          if (!options.algorithms) {
            if (secretOrPublicKey2.type === "secret") {
              options.algorithms = HS_ALGS;
            } else if (["rsa", "rsa-pss"].includes(secretOrPublicKey2.asymmetricKeyType)) {
              options.algorithms = RSA_KEY_ALGS;
            } else if (secretOrPublicKey2.asymmetricKeyType === "ec") {
              options.algorithms = EC_KEY_ALGS;
            } else {
              options.algorithms = PUB_KEY_ALGS;
            }
          }
          if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
            return done(new JsonWebTokenError("invalid algorithm"));
          }
          if (header.alg.startsWith("HS") && secretOrPublicKey2.type !== "secret") {
            return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
          } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey2.type !== "public") {
            return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
          }
          if (!options.allowInvalidAsymmetricKeyTypes) {
            try {
              validateAsymmetricKey(header.alg, secretOrPublicKey2);
            } catch (e) {
              return done(e);
            }
          }
          let valid;
          try {
            valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
          } catch (e) {
            return done(e);
          }
          if (!valid) {
            return done(new JsonWebTokenError("invalid signature"));
          }
          const payload = decodedToken.payload;
          if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
            if (typeof payload.nbf !== "number") {
              return done(new JsonWebTokenError("invalid nbf value"));
            }
            if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
              return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
            }
          }
          if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
            if (typeof payload.exp !== "number") {
              return done(new JsonWebTokenError("invalid exp value"));
            }
            if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
              return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
            }
          }
          if (options.audience) {
            const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
            const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
            const match = target.some(function(targetAudience) {
              return audiences.some(function(audience) {
                return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
              });
            });
            if (!match) {
              return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
            }
          }
          if (options.issuer) {
            const invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
            if (invalid_issuer) {
              return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
            }
          }
          if (options.subject) {
            if (payload.sub !== options.subject) {
              return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
            }
          }
          if (options.jwtid) {
            if (payload.jti !== options.jwtid) {
              return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
            }
          }
          if (options.nonce) {
            if (payload.nonce !== options.nonce) {
              return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
            }
          }
          if (options.maxAge) {
            if (typeof payload.iat !== "number") {
              return done(new JsonWebTokenError("iat required when maxAge is specified"));
            }
            const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
            if (typeof maxAgeTimestamp === "undefined") {
              return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            }
            if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
              return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
            }
          }
          if (options.complete === true) {
            const signature = decodedToken.signature;
            return done(null, {
              header,
              payload,
              signature
            });
          }
          return done(null, payload);
        });
      };
    }
  });

  // node_modules/lodash.includes/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.includes/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var INFINITY = 1 / 0;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var MAX_INTEGER = 17976931348623157e292;
      var NAN = 0 / 0;
      var argsTag = "[object Arguments]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var freeParseInt = parseInt;
      function arrayMap(array, iteratee) {
        var index = -1, length = array ? array.length : 0, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        if (value !== value) {
          return baseFindIndex(array, baseIsNaN, fromIndex);
        }
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeKeys = overArg(Object.keys, Object);
      var nativeMax = Math.max;
      function arrayLikeKeys(value, inherited) {
        var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
        var length = result.length, skipIndexes = !!length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      function isArguments(value) {
        return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
      }
      var isArray = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isFunction(value) {
        var tag = isObject(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function values(object) {
        return object ? baseValues(object, keys(object)) : [];
      }
      module.exports = includes;
    }
  });

  // node_modules/lodash.isboolean/index.js
  var require_lodash2 = __commonJS({
    "node_modules/lodash.isboolean/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var boolTag = "[object Boolean]";
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      module.exports = isBoolean;
    }
  });

  // node_modules/lodash.isinteger/index.js
  var require_lodash3 = __commonJS({
    "node_modules/lodash.isinteger/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = isInteger;
    }
  });

  // node_modules/lodash.isnumber/index.js
  var require_lodash4 = __commonJS({
    "node_modules/lodash.isnumber/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var numberTag = "[object Number]";
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && objectToString.call(value) == numberTag;
      }
      module.exports = isNumber;
    }
  });

  // node_modules/lodash.isplainobject/index.js
  var require_lodash5 = __commonJS({
    "node_modules/lodash.isplainobject/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var objectTag = "[object Object]";
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != "function") {
          try {
            result = !!(value + "");
          } catch (e) {
          }
        }
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      var objectToString = objectProto.toString;
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/lodash.isstring/index.js
  var require_lodash6 = __commonJS({
    "node_modules/lodash.isstring/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var stringTag = "[object String]";
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var isArray = Array.isArray;
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
      }
      module.exports = isString;
    }
  });

  // node_modules/lodash.once/index.js
  var require_lodash7 = __commonJS({
    "node_modules/lodash.once/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var FUNC_ERROR_TEXT = "Expected a function";
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      function before(n, func) {
        var result;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = void 0;
          }
          return result;
        };
      }
      function once3(func) {
        return before(2, func);
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = once3;
    }
  });

  // node_modules/jsonwebtoken/sign.js
  var require_sign2 = __commonJS({
    "node_modules/jsonwebtoken/sign.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var timespan = require_timespan();
      var PS_SUPPORTED = require_psSupported();
      var validateAsymmetricKey = require_validateAsymmetricKey();
      var jws = require_jws();
      var includes = require_lodash();
      var isBoolean = require_lodash2();
      var isInteger = require_lodash3();
      var isNumber = require_lodash4();
      var isPlainObject = require_lodash5();
      var isString = require_lodash6();
      var once3 = require_lodash7();
      var { KeyObject, createSecretKey, createPrivateKey } = (init_empty(), __toCommonJS(empty_exports));
      var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
      if (PS_SUPPORTED) {
        SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
      }
      var sign_options_schema = {
        expiresIn: { isValid: function(value) {
          return isInteger(value) || isString(value) && value;
        }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
        notBefore: { isValid: function(value) {
          return isInteger(value) || isString(value) && value;
        }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
        audience: { isValid: function(value) {
          return isString(value) || Array.isArray(value);
        }, message: '"audience" must be a string or array' },
        algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
        header: { isValid: isPlainObject, message: '"header" must be an object' },
        encoding: { isValid: isString, message: '"encoding" must be a string' },
        issuer: { isValid: isString, message: '"issuer" must be a string' },
        subject: { isValid: isString, message: '"subject" must be a string' },
        jwtid: { isValid: isString, message: '"jwtid" must be a string' },
        noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
        keyid: { isValid: isString, message: '"keyid" must be a string' },
        mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
        allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean' },
        allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
      };
      var registered_claims_schema = {
        iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
        exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
        nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
      };
      function validate(schema, allowUnknown, object, parameterName) {
        if (!isPlainObject(object)) {
          throw new Error('Expected "' + parameterName + '" to be a plain object.');
        }
        Object.keys(object).forEach(function(key) {
          const validator = schema[key];
          if (!validator) {
            if (!allowUnknown) {
              throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
            }
            return;
          }
          if (!validator.isValid(object[key])) {
            throw new Error(validator.message);
          }
        });
      }
      function validateOptions(options) {
        return validate(sign_options_schema, false, options, "options");
      }
      function validatePayload(payload) {
        return validate(registered_claims_schema, true, payload, "payload");
      }
      var options_to_payload = {
        "audience": "aud",
        "issuer": "iss",
        "subject": "sub",
        "jwtid": "jti"
      };
      var options_for_objects = [
        "expiresIn",
        "notBefore",
        "noTimestamp",
        "audience",
        "issuer",
        "subject",
        "jwtid"
      ];
      module.exports = function(payload, secretOrPrivateKey, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        } else {
          options = options || {};
        }
        const isObjectPayload = typeof payload === "object" && !Buffer3.isBuffer(payload);
        const header = Object.assign({
          alg: options.algorithm || "HS256",
          typ: isObjectPayload ? "JWT" : void 0,
          kid: options.keyid
        }, options.header);
        function failure(err) {
          if (callback) {
            return callback(err);
          }
          throw err;
        }
        if (!secretOrPrivateKey && options.algorithm !== "none") {
          return failure(new Error("secretOrPrivateKey must have a value"));
        }
        if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
          try {
            secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
          } catch (_) {
            try {
              secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === "string" ? Buffer3.from(secretOrPrivateKey) : secretOrPrivateKey);
            } catch (_2) {
              return failure(new Error("secretOrPrivateKey is not valid key material"));
            }
          }
        }
        if (header.alg.startsWith("HS") && secretOrPrivateKey.type !== "secret") {
          return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
          if (secretOrPrivateKey.type !== "private") {
            return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
          }
          if (!options.allowInsecureKeySizes && !header.alg.startsWith("ES") && secretOrPrivateKey.asymmetricKeyDetails !== void 0 && //KeyObject.asymmetricKeyDetails is supported in Node 15+
          secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
            return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
          }
        }
        if (typeof payload === "undefined") {
          return failure(new Error("payload is required"));
        } else if (isObjectPayload) {
          try {
            validatePayload(payload);
          } catch (error) {
            return failure(error);
          }
          if (!options.mutatePayload) {
            payload = Object.assign({}, payload);
          }
        } else {
          const invalid_options = options_for_objects.filter(function(opt) {
            return typeof options[opt] !== "undefined";
          });
          if (invalid_options.length > 0) {
            return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
          }
        }
        if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
          return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
        }
        if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
          return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
        }
        try {
          validateOptions(options);
        } catch (error) {
          return failure(error);
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
          try {
            validateAsymmetricKey(header.alg, secretOrPrivateKey);
          } catch (error) {
            return failure(error);
          }
        }
        const timestamp = payload.iat || Math.floor(Date.now() / 1e3);
        if (options.noTimestamp) {
          delete payload.iat;
        } else if (isObjectPayload) {
          payload.iat = timestamp;
        }
        if (typeof options.notBefore !== "undefined") {
          try {
            payload.nbf = timespan(options.notBefore, timestamp);
          } catch (err) {
            return failure(err);
          }
          if (typeof payload.nbf === "undefined") {
            return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
          }
        }
        if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
          try {
            payload.exp = timespan(options.expiresIn, timestamp);
          } catch (err) {
            return failure(err);
          }
          if (typeof payload.exp === "undefined") {
            return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
          }
        }
        Object.keys(options_to_payload).forEach(function(key) {
          const claim = options_to_payload[key];
          if (typeof options[key] !== "undefined") {
            if (typeof payload[claim] !== "undefined") {
              return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
            }
            payload[claim] = options[key];
          }
        });
        const encoding = options.encoding || "utf8";
        if (typeof callback === "function") {
          callback = callback && once3(callback);
          jws.createSign({
            header,
            privateKey: secretOrPrivateKey,
            payload,
            encoding
          }).once("error", callback).once("done", function(signature) {
            if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
              return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
            }
            callback(null, signature);
          });
        } else {
          let signature = jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
          if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
          }
          return signature;
        }
      };
    }
  });

  // node_modules/jsonwebtoken/index.js
  var require_jsonwebtoken = __commonJS({
    "node_modules/jsonwebtoken/index.js"(exports4, module) {
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      module.exports = {
        decode: require_decode(),
        verify: require_verify(),
        sign: require_sign2(),
        JsonWebTokenError: require_JsonWebTokenError(),
        NotBeforeError: require_NotBeforeError(),
        TokenExpiredError: require_TokenExpiredError()
      };
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/rng.js
  var require_rng = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/rng.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = rng;
      var getRandomValues;
      var rnds8 = new Uint8Array(16);
      function rng() {
        if (!getRandomValues) {
          getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
          if (!getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          }
        }
        return getRandomValues(rnds8);
      }
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/regex.js
  var require_regex = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/regex.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/validate.js
  var require_validate = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/validate.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _regex = _interopRequireDefault(require_regex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function validate(uuid) {
        return typeof uuid === "string" && _regex.default.test(uuid);
      }
      var _default = validate;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/stringify.js
  var require_stringify = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/stringify.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      exports4.unsafeStringify = unsafeStringify;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var byteToHex = [];
      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).slice(1));
      }
      function unsafeStringify(arr, offset = 0) {
        return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
      }
      function stringify(arr, offset = 0) {
        const uuid = unsafeStringify(arr, offset);
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Stringified UUID is invalid");
        }
        return uuid;
      }
      var _default = stringify;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v1.js
  var require_v1 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v1.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1(options, buf, offset) {
        let i = buf && offset || 0;
        const b = buf || new Array(16);
        options = options || {};
        let node = options.node || _nodeId;
        let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
        if (node == null || clockseq == null) {
          const seedBytes = options.random || (options.rng || _rng.default)();
          if (node == null) {
            node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }
          if (clockseq == null) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          }
        }
        let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
        let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
        const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && options.clockseq === void 0) {
          clockseq = clockseq + 1 & 16383;
        }
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
          nsecs = 0;
        }
        if (nsecs >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 122192928e5;
        const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255;
        b[i++] = tl >>> 16 & 255;
        b[i++] = tl >>> 8 & 255;
        b[i++] = tl & 255;
        const tmh = msecs / 4294967296 * 1e4 & 268435455;
        b[i++] = tmh >>> 8 & 255;
        b[i++] = tmh & 255;
        b[i++] = tmh >>> 24 & 15 | 16;
        b[i++] = tmh >>> 16 & 255;
        b[i++] = clockseq >>> 8 | 128;
        b[i++] = clockseq & 255;
        for (let n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf || (0, _stringify.unsafeStringify)(b);
      }
      var _default = v1;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/parse.js
  var require_parse2 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/parse.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function parse(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        let v;
        const arr = new Uint8Array(16);
        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 255;
        arr[2] = v >>> 8 & 255;
        arr[3] = v & 255;
        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 255;
        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 255;
        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 255;
        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
        arr[11] = v / 4294967296 & 255;
        arr[12] = v >>> 24 & 255;
        arr[13] = v >>> 16 & 255;
        arr[14] = v >>> 8 & 255;
        arr[15] = v & 255;
        return arr;
      }
      var _default = parse;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v35.js
  var require_v35 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v35.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.URL = exports4.DNS = void 0;
      exports4.default = v35;
      var _stringify = require_stringify();
      var _parse = _interopRequireDefault(require_parse2());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str));
        const bytes = [];
        for (let i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }
        return bytes;
      }
      var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      exports4.DNS = DNS;
      var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
      exports4.URL = URL2;
      function v35(name2, version2, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          var _namespace;
          if (typeof value === "string") {
            value = stringToBytes(value);
          }
          if (typeof namespace === "string") {
            namespace = (0, _parse.default)(namespace);
          }
          if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          }
          let bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 15 | version2;
          bytes[8] = bytes[8] & 63 | 128;
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }
            return buf;
          }
          return (0, _stringify.unsafeStringify)(bytes);
        }
        try {
          generateUUID.name = name2;
        } catch (err) {
        }
        generateUUID.DNS = DNS;
        generateUUID.URL = URL2;
        return generateUUID;
      }
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/md5.js
  var require_md5 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/md5.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      function md5(bytes) {
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = new Uint8Array(msg.length);
          for (let i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }
        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      function md5ToHexEncodedArray(input) {
        const output = [];
        const length32 = input.length * 32;
        const hexTab = "0123456789abcdef";
        for (let i = 0; i < length32; i += 8) {
          const x = input[i >> 5] >>> i % 32 & 255;
          const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
          output.push(hex);
        }
        return output;
      }
      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      function wordsToMd5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[getOutputLength(len) - 1] = len;
        let a = 1732584193;
        let b = -271733879;
        let c = -1732584194;
        let d = 271733878;
        for (let i = 0; i < x.length; i += 16) {
          const olda = a;
          const oldb = b;
          const oldc = c;
          const oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }
        return [a, b, c, d];
      }
      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }
        const length8 = input.length * 8;
        const output = new Uint32Array(getOutputLength(length8));
        for (let i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 255) << i % 32;
        }
        return output;
      }
      function safeAdd(x, y) {
        const lsw = (x & 65535) + (y & 65535);
        const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      }
      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }
      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }
      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }
      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }
      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      var _default = md5;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v3.js
  var require_v3 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v3.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _md = _interopRequireDefault(require_md5());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v3 = (0, _v.default)("v3", 48, _md.default);
      var _default = v3;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/native.js
  var require_native = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/native.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      var _default = {
        randomUUID
      };
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v4.js
  var require_v4 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v4.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _native = _interopRequireDefault(require_native());
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function v4(options, buf, offset) {
        if (_native.default.randomUUID && !buf && !options) {
          return _native.default.randomUUID();
        }
        options = options || {};
        const rnds = options.random || (options.rng || _rng.default)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(rnds);
      }
      var _default = v4;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/sha1.js
  var require_sha1 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/sha1.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;
          case 1:
            return x ^ y ^ z;
          case 2:
            return x & y ^ x & z ^ y & z;
          case 3:
            return x ^ y ^ z;
        }
      }
      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }
      function sha1(bytes) {
        const K = [1518500249, 1859775393, 2400959708, 3395469782];
        const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = [];
          for (let i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          bytes = Array.prototype.slice.call(bytes);
        }
        bytes.push(128);
        const l = bytes.length / 4 + 2;
        const N = Math.ceil(l / 16);
        const M = new Array(N);
        for (let i = 0; i < N; ++i) {
          const arr = new Uint32Array(16);
          for (let j = 0; j < 16; ++j) {
            arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
          }
          M[i] = arr;
        }
        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
        for (let i = 0; i < N; ++i) {
          const W = new Uint32Array(80);
          for (let t = 0; t < 16; ++t) {
            W[t] = M[i][t];
          }
          for (let t = 16; t < 80; ++t) {
            W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
          }
          let a = H[0];
          let b = H[1];
          let c = H[2];
          let d = H[3];
          let e = H[4];
          for (let t = 0; t < 80; ++t) {
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }
          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }
        return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
      }
      var _default = sha1;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v5.js
  var require_v5 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v5.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _sha = _interopRequireDefault(require_sha1());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v5 = (0, _v.default)("v5", 80, _sha.default);
      var _default = v5;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/nil.js
  var require_nil = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/nil.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _default = "00000000-0000-0000-0000-000000000000";
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/version.js
  var require_version = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/version.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      exports4.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function version2(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(uuid.slice(14, 15), 16);
      }
      var _default = version2;
      exports4.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/index.js
  var require_commonjs_browser = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/index.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", {
        value: true
      });
      Object.defineProperty(exports4, "NIL", {
        enumerable: true,
        get: function get() {
          return _nil.default;
        }
      });
      Object.defineProperty(exports4, "parse", {
        enumerable: true,
        get: function get() {
          return _parse.default;
        }
      });
      Object.defineProperty(exports4, "stringify", {
        enumerable: true,
        get: function get() {
          return _stringify.default;
        }
      });
      Object.defineProperty(exports4, "v1", {
        enumerable: true,
        get: function get() {
          return _v.default;
        }
      });
      Object.defineProperty(exports4, "v3", {
        enumerable: true,
        get: function get() {
          return _v2.default;
        }
      });
      Object.defineProperty(exports4, "v4", {
        enumerable: true,
        get: function get() {
          return _v3.default;
        }
      });
      Object.defineProperty(exports4, "v5", {
        enumerable: true,
        get: function get() {
          return _v4.default;
        }
      });
      Object.defineProperty(exports4, "validate", {
        enumerable: true,
        get: function get() {
          return _validate.default;
        }
      });
      Object.defineProperty(exports4, "version", {
        enumerable: true,
        get: function get() {
          return _version.default;
        }
      });
      var _v = _interopRequireDefault(require_v1());
      var _v2 = _interopRequireDefault(require_v3());
      var _v3 = _interopRequireDefault(require_v4());
      var _v4 = _interopRequireDefault(require_v5());
      var _nil = _interopRequireDefault(require_nil());
      var _version = _interopRequireDefault(require_version());
      var _validate = _interopRequireDefault(require_validate());
      var _stringify = _interopRequireDefault(require_stringify());
      var _parse = _interopRequireDefault(require_parse2());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/dist/package.json
  var require_package = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/dist/package.json"(exports4, module) {
      module.exports = {
        name: "@circle-fin/w3s-pw-web-sdk",
        version: "1.1.11",
        description: "Javascript/Typescript SDK for Circle Programmable Wallets",
        main: "dist/src/index.js",
        types: "dist/src/index.d.ts",
        scripts: {
          build: "npx tsc",
          test: "jest --env=jsdom",
          "test:watch": "jest --watch --env=jsdom",
          lint: "eslint . --ext .ts",
          "lint-fix": "eslint . --ext .ts --fix",
          format: "prettier --write .",
          "format-check": "prettier --check src/"
        },
        repository: {
          type: "git",
          url: "git+https://github.com/circlefin/w3s-pw-web-sdk.git"
        },
        keywords: [
          "circle",
          "circle.com",
          "usdc",
          "euroc",
          "stablecoins",
          "programmable wallets"
        ],
        homepage: "https://github.com/circlefin/w3s-pw-web-sdk#readme",
        publishConfig: {
          registry: "https://registry.npmjs.com/"
        },
        license: "Apache-2.0",
        bugs: {
          url: "https://github.com/circlefin/w3s-pw-web-sdk/issues"
        },
        engines: {
          node: ">=10.0.0"
        },
        dependencies: {
          dotenv: "^16.3.1",
          firebase: "^10.12.1",
          jsonwebtoken: "^9.0.2",
          uuid: "^9.0.1"
        },
        devDependencies: {
          "@types/jest": "^28.1.7",
          "@types/node": "^14.14.14",
          "@typescript-eslint/eslint-plugin": "^5.0.0",
          eslint: "^8.0.1",
          "eslint-config-standard-with-typescript": "^22.0.0",
          "eslint-plugin-import": "^2.25.2",
          "eslint-plugin-n": "^16.3.0",
          "eslint-plugin-promise": "^6.1.1",
          jest: "^29.6.1",
          "jest-environment-jsdom": "^29.6.1",
          prettier: "^2.7.1",
          "ts-jest": "^29.1.1",
          typescript: "^4.9.5"
        }
      };
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/dist/src/types.js
  var require_types2 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/dist/src/types.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      Object.defineProperty(exports4, "__esModule", { value: true });
      exports4.SocialLoginProvider = exports4.ErrorCode = exports4.QuestionType = exports4.ChallengeStatus = exports4.ChallengeType = void 0;
      var ChallengeType;
      (function(ChallengeType2) {
        ChallengeType2["INITIALIZE"] = "INITIALIZE";
        ChallengeType2["SET_PIN"] = "SET_PIN";
        ChallengeType2["CHANGE_PIN"] = "CHANGE_PIN";
        ChallengeType2["RESTORE_PIN"] = "RESTORE_PIN";
        ChallengeType2["SET_SECURITY_QUESTIONS"] = "SET_SECURITY_QUESTIONS";
        ChallengeType2["CREATE_WALLET"] = "CREATE_WALLET";
        ChallengeType2["CREATE_TRANSACTION"] = "CREATE_TRANSACTION";
        ChallengeType2["ACCELERATE_TRANSACTION"] = "ACCELERATE_TRANSACTION";
        ChallengeType2["CANCEL_TRANSACTION"] = "CANCEL_TRANSACTION";
        ChallengeType2["SIGN_MESSAGE"] = "SIGN_MESSAGE";
        ChallengeType2["SIGN_TYPEDDATA"] = "SIGN_TYPEDDATA";
        ChallengeType2["SIGN_TRANSACTION"] = "SIGN_TRANSACTION";
        ChallengeType2["UNKNOWN"] = "UNKNOWN";
      })(ChallengeType = exports4.ChallengeType || (exports4.ChallengeType = {}));
      var ChallengeStatus;
      (function(ChallengeStatus2) {
        ChallengeStatus2["COMPLETE"] = "COMPLETE";
        ChallengeStatus2["EXPIRED"] = "EXPIRED";
        ChallengeStatus2["FAILED"] = "FAILED";
        ChallengeStatus2["IN_PROGRESS"] = "IN_PROGRESS";
        ChallengeStatus2["PENDING"] = "PENDING";
      })(ChallengeStatus = exports4.ChallengeStatus || (exports4.ChallengeStatus = {}));
      var QuestionType;
      (function(QuestionType2) {
        QuestionType2["DATE"] = "DATE";
        QuestionType2["TEXT"] = "TEXT";
      })(QuestionType = exports4.QuestionType || (exports4.QuestionType = {}));
      var ErrorCode;
      (function(ErrorCode2) {
        ErrorCode2[ErrorCode2["unknown"] = -1] = "unknown";
        ErrorCode2[ErrorCode2["success"] = 0] = "success";
        ErrorCode2[ErrorCode2["apiParameterMissing"] = 1] = "apiParameterMissing";
        ErrorCode2[ErrorCode2["apiParameterInvalid"] = 2] = "apiParameterInvalid";
        ErrorCode2[ErrorCode2["forbidden"] = 3] = "forbidden";
        ErrorCode2[ErrorCode2["unauthorized"] = 4] = "unauthorized";
        ErrorCode2[ErrorCode2["retry"] = 9] = "retry";
        ErrorCode2[ErrorCode2["customerSuspended"] = 10] = "customerSuspended";
        ErrorCode2[ErrorCode2["pending"] = 11] = "pending";
        ErrorCode2[ErrorCode2["invalidSession"] = 12] = "invalidSession";
        ErrorCode2[ErrorCode2["invalidPartnerId"] = 13] = "invalidPartnerId";
        ErrorCode2[ErrorCode2["invalidMessage"] = 14] = "invalidMessage";
        ErrorCode2[ErrorCode2["invalidPhone"] = 15] = "invalidPhone";
        ErrorCode2[ErrorCode2["userAlreadyExisted"] = 155101] = "userAlreadyExisted";
        ErrorCode2[ErrorCode2["userNotFound"] = 155102] = "userNotFound";
        ErrorCode2[ErrorCode2["userTokenNotFound"] = 155103] = "userTokenNotFound";
        ErrorCode2[ErrorCode2["userTokenExpired"] = 155104] = "userTokenExpired";
        ErrorCode2[ErrorCode2["invalidUserToken"] = 155105] = "invalidUserToken";
        ErrorCode2[ErrorCode2["userWasInitialized"] = 155106] = "userWasInitialized";
        ErrorCode2[ErrorCode2["userHasSetPin"] = 155107] = "userHasSetPin";
        ErrorCode2[ErrorCode2["userHasSetSecurityQuestion"] = 155108] = "userHasSetSecurityQuestion";
        ErrorCode2[ErrorCode2["userWasDisabled"] = 155109] = "userWasDisabled";
        ErrorCode2[ErrorCode2["userDoesNotSetPinYet"] = 155110] = "userDoesNotSetPinYet";
        ErrorCode2[ErrorCode2["userDoesNotSetSecurityQuestionYet"] = 155111] = "userDoesNotSetSecurityQuestionYet";
        ErrorCode2[ErrorCode2["incorrectUserPin"] = 155112] = "incorrectUserPin";
        ErrorCode2[ErrorCode2["incorrectDeviceId"] = 155113] = "incorrectDeviceId";
        ErrorCode2[ErrorCode2["incorrectAppId"] = 155114] = "incorrectAppId";
        ErrorCode2[ErrorCode2["incorrectSecurityAnswers"] = 155115] = "incorrectSecurityAnswers";
        ErrorCode2[ErrorCode2["invalidChallengeId"] = 155116] = "invalidChallengeId";
        ErrorCode2[ErrorCode2["invalidApproveContent"] = 155117] = "invalidApproveContent";
        ErrorCode2[ErrorCode2["invalidEncryptionKey"] = 155118] = "invalidEncryptionKey";
        ErrorCode2[ErrorCode2["userPinLocked"] = 155119] = "userPinLocked";
        ErrorCode2[ErrorCode2["securityAnswersLocked"] = 155120] = "securityAnswersLocked";
        ErrorCode2[ErrorCode2["userOTPTokenExpiredError"] = 155130] = "userOTPTokenExpiredError";
        ErrorCode2[ErrorCode2["userOTPTokenInvalidError"] = 155131] = "userOTPTokenInvalidError";
        ErrorCode2[ErrorCode2["userOTPNotFoundError"] = 155132] = "userOTPNotFoundError";
        ErrorCode2[ErrorCode2["userOTPInvalidError"] = 155133] = "userOTPInvalidError";
        ErrorCode2[ErrorCode2["userOTPNotMatchError"] = 155134] = "userOTPNotMatchError";
        ErrorCode2[ErrorCode2["userEmailInvalidError"] = 155135] = "userEmailInvalidError";
        ErrorCode2[ErrorCode2["userEmailMismatchError"] = 155136] = "userEmailMismatchError";
        ErrorCode2[ErrorCode2["deviceIDInvalidError"] = 155137] = "deviceIDInvalidError";
        ErrorCode2[ErrorCode2["emailSendingFailedError"] = 155138] = "emailSendingFailedError";
        ErrorCode2[ErrorCode2["socialLoginTokenExpiredError"] = 155139] = "socialLoginTokenExpiredError";
        ErrorCode2[ErrorCode2["socialLoginProviderAppIDNotMatchError"] = 155140] = "socialLoginProviderAppIDNotMatchError";
        ErrorCode2[ErrorCode2["userOTPIsLockedError"] = 155141] = "userOTPIsLockedError";
        ErrorCode2[ErrorCode2["userOTPSendCountsOverLimitError"] = 155142] = "userOTPSendCountsOverLimitError";
        ErrorCode2[ErrorCode2["deviceTokenExpiredError"] = 155143] = "deviceTokenExpiredError";
        ErrorCode2[ErrorCode2["deviceTokenInvalidError"] = 155144] = "deviceTokenInvalidError";
        ErrorCode2[ErrorCode2["deviceTokenNotFoundError"] = 155145] = "deviceTokenNotFoundError";
        ErrorCode2[ErrorCode2["notEnoughFunds"] = 155201] = "notEnoughFunds";
        ErrorCode2[ErrorCode2["notEnoughBalance"] = 155202] = "notEnoughBalance";
        ErrorCode2[ErrorCode2["exceedWithdrawLimit"] = 155203] = "exceedWithdrawLimit";
        ErrorCode2[ErrorCode2["minimumFundsRequired"] = 155204] = "minimumFundsRequired";
        ErrorCode2[ErrorCode2["invalidTransactionFee"] = 155205] = "invalidTransactionFee";
        ErrorCode2[ErrorCode2["rejectedOnAmlScreening"] = 155206] = "rejectedOnAmlScreening";
        ErrorCode2[ErrorCode2["tagRequired"] = 155207] = "tagRequired";
        ErrorCode2[ErrorCode2["gasLimitTooLow"] = 155208] = "gasLimitTooLow";
        ErrorCode2[ErrorCode2["transactionDataNotEncodedProperly"] = 155209] = "transactionDataNotEncodedProperly";
        ErrorCode2[ErrorCode2["fullNodeReturnedError"] = 155210] = "fullNodeReturnedError";
        ErrorCode2[ErrorCode2["walletSetupRequired"] = 155211] = "walletSetupRequired";
        ErrorCode2[ErrorCode2["lowerThenMinimumAccountBalance"] = 155212] = "lowerThenMinimumAccountBalance";
        ErrorCode2[ErrorCode2["rejectedByBlockchain"] = 155213] = "rejectedByBlockchain";
        ErrorCode2[ErrorCode2["droppedAsPartOfReorg"] = 155214] = "droppedAsPartOfReorg";
        ErrorCode2[ErrorCode2["operationNotSupport"] = 155215] = "operationNotSupport";
        ErrorCode2[ErrorCode2["amountBelowMinimum"] = 155216] = "amountBelowMinimum";
        ErrorCode2[ErrorCode2["wrongNftTokenIdNumber"] = 155217] = "wrongNftTokenIdNumber";
        ErrorCode2[ErrorCode2["invalidDestinationAddress"] = 155218] = "invalidDestinationAddress";
        ErrorCode2[ErrorCode2["tokenWalletChainMismatch"] = 155219] = "tokenWalletChainMismatch";
        ErrorCode2[ErrorCode2["wrongAmountsNumber"] = 155220] = "wrongAmountsNumber";
        ErrorCode2[ErrorCode2["walletIsFrozen"] = 155501] = "walletIsFrozen";
        ErrorCode2[ErrorCode2["maxWalletLimitReached"] = 155502] = "maxWalletLimitReached";
        ErrorCode2[ErrorCode2["walletSetIdMutuallyExclusive"] = 155503] = "walletSetIdMutuallyExclusive";
        ErrorCode2[ErrorCode2["metadataUnmatched"] = 155504] = "metadataUnmatched";
        ErrorCode2[ErrorCode2["userCanceled"] = 155701] = "userCanceled";
        ErrorCode2[ErrorCode2["launchUiFailed"] = 155702] = "launchUiFailed";
        ErrorCode2[ErrorCode2["pinCodeNotMatched"] = 155703] = "pinCodeNotMatched";
        ErrorCode2[ErrorCode2["insecurePinCode"] = 155704] = "insecurePinCode";
        ErrorCode2[ErrorCode2["hintsMatchAnswers"] = 155705] = "hintsMatchAnswers";
        ErrorCode2[ErrorCode2["networkError"] = 155706] = "networkError";
        ErrorCode2[ErrorCode2["userSecretMissing"] = 155717] = "userSecretMissing";
        ErrorCode2[ErrorCode2["invalidUserTokenFormat"] = 155718] = "invalidUserTokenFormat";
        ErrorCode2[ErrorCode2["userTokenMismatch"] = 155719] = "userTokenMismatch";
        ErrorCode2[ErrorCode2["walletIdNotFound"] = 156001] = "walletIdNotFound";
        ErrorCode2[ErrorCode2["tokenIdNotFound"] = 156002] = "tokenIdNotFound";
        ErrorCode2[ErrorCode2["transactionIdNotFound"] = 156003] = "transactionIdNotFound";
        ErrorCode2[ErrorCode2["entityCredentialNotFound"] = 156004] = "entityCredentialNotFound";
        ErrorCode2[ErrorCode2["walletSetIdNotFound"] = 156005] = "walletSetIdNotFound";
      })(ErrorCode = exports4.ErrorCode || (exports4.ErrorCode = {}));
      var SocialLoginProvider;
      (function(SocialLoginProvider2) {
        SocialLoginProvider2["APPLE"] = "Apple";
        SocialLoginProvider2["FACEBOOK"] = "Facebook";
        SocialLoginProvider2["GOOGLE"] = "Google";
      })(SocialLoginProvider = exports4.SocialLoginProvider || (exports4.SocialLoginProvider = {}));
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/dist/src/index.js
  var require_src = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/dist/src/index.js"(exports4) {
      "use strict";
      init_node_shim();
      init_dirname();
      init_buffer();
      init_process2();
      var __awaiter2 = exports4 && exports4.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __importDefault2 = exports4 && exports4.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports4, "__esModule", { value: true });
      exports4.W3SSdk = void 0;
      var app_1 = require_index_cjs5();
      var auth_1 = require_index_cjs6();
      var jsonwebtoken_1 = require_jsonwebtoken();
      var uuid_1 = require_commonjs_browser();
      var package_json_1 = __importDefault2(require_package());
      var types_1 = require_types2();
      var W3SSdk2 = class _W3SSdk {
        constructor(configs, onLoginComplete) {
          this.serviceUrl = "https://pw-auth.circle.com";
          this.window = window;
          this.securityQuestionsRequiredCount = 2;
          this.shouldCloseModalOnForgotPin = false;
          this.receivedResponseFromService = false;
          this.messageHandler = (event) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
            if (event.origin !== this.serviceUrl) {
              return;
            }
            if ((_a = event.data) === null || _a === void 0 ? void 0 : _a.onFrameReady) {
              this.receivedResponseFromService = true;
              const iframe = this.window.document.getElementById("sdkIframe");
              (_b = iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
                w3s: {
                  appSettings: (_c = this.configs) === null || _c === void 0 ? void 0 : _c.appSettings,
                  auth: (_d = this.configs) === null || _d === void 0 ? void 0 : _d.authentication,
                  challenge: this.challenge,
                  customizations: {
                    securityQuestions: {
                      questions: this.securityQuestions,
                      requiredCount: this.securityQuestionsRequiredCount,
                      securityConfirmItems: this.securityConfirmItems
                    },
                    themeColor: this.themeColor,
                    localizations: this.localizations,
                    resources: this.resources,
                    customLinks: this.customLinks
                  },
                  deviceInfo: this.deviceInfo,
                  socialVerification: {
                    token: this.socialLoginToken,
                    deviceToken: (_f = (_e = this.configs) === null || _e === void 0 ? void 0 : _e.loginConfigs) === null || _f === void 0 ? void 0 : _f.deviceToken,
                    deviceEncryptionKey: (_h = (_g = this.configs) === null || _g === void 0 ? void 0 : _g.loginConfigs) === null || _h === void 0 ? void 0 : _h.deviceEncryptionKey,
                    socialLoginProvider: this.socialLoginProvider
                  },
                  emailVerification: {
                    deviceToken: (_k = (_j = this.configs) === null || _j === void 0 ? void 0 : _j.loginConfigs) === null || _k === void 0 ? void 0 : _k.deviceToken,
                    deviceEncryptionKey: (_m = (_l = this.configs) === null || _l === void 0 ? void 0 : _l.loginConfigs) === null || _m === void 0 ? void 0 : _m.deviceEncryptionKey,
                    otpToken: (_p = (_o = this.configs) === null || _o === void 0 ? void 0 : _o.loginConfigs) === null || _p === void 0 ? void 0 : _p.otpToken
                  }
                }
              }, this.serviceUrl);
            } else if ((_q = event.data) === null || _q === void 0 ? void 0 : _q.onForgotPin) {
              (_r = this.onForgotPin) === null || _r === void 0 ? void 0 : _r.call(this);
            } else if ((_s = event.data) === null || _s === void 0 ? void 0 : _s.onComplete) {
              const iframe = this.window.document.getElementById("sdkIframe");
              (_t = iframe === null || iframe === void 0 ? void 0 : iframe.parentNode) === null || _t === void 0 ? void 0 : _t.removeChild(iframe);
              void ((_u = this.onComplete) === null || _u === void 0 ? void 0 : _u.call(this, void 0, (_v = event.data) === null || _v === void 0 ? void 0 : _v.result));
            } else if ((_w = event.data) === null || _w === void 0 ? void 0 : _w.deviceId) {
              (_x = this.resolveDeviceIdPromise) === null || _x === void 0 ? void 0 : _x.call(this, event.data.deviceId);
              this.closeModal();
              this.unSubscribeMessage();
            } else if ((_y = event.data) === null || _y === void 0 ? void 0 : _y.showUi) {
              this.iframe.width = "100%";
              this.iframe.height = "100%";
              this.iframe.style.zIndex = "2147483647";
              this.iframe.style.position = "fixed";
              this.iframe.style.top = "50%";
              this.iframe.style.left = "50%";
              this.iframe.style.transform = "translate(-50%, -50%)";
              this.iframe.style.display = "";
            } else if ((_z = event.data) === null || _z === void 0 ? void 0 : _z.onSocialLoginVerified) {
              void ((_0 = this.onLoginComplete) === null || _0 === void 0 ? void 0 : _0.call(this, event.data.onSocialLoginVerified.error, event.data.onSocialLoginVerified.result));
              this.closeModal();
              this.unSubscribeMessage();
            } else if ((_1 = event.data) === null || _1 === void 0 ? void 0 : _1.onEmailLoginVerified) {
              void ((_2 = this.onLoginComplete) === null || _2 === void 0 ? void 0 : _2.call(this, event.data.onEmailLoginVerified.error, event.data.onEmailLoginVerified.result));
              if (event.data.onEmailLoginVerified.result && !event.data.onEmailLoginVerified.error) {
                this.unSubscribeMessage();
                this.closeModal();
              }
            } else if ((_3 = event.data) === null || _3 === void 0 ? void 0 : _3.onResendOtpEmail) {
              (_4 = this.onResendOtpEmail) === null || _4 === void 0 ? void 0 : _4.call(this);
            } else if ((_5 = event.data) === null || _5 === void 0 ? void 0 : _5.onError) {
              void ((_6 = this.onComplete) === null || _6 === void 0 ? void 0 : _6.call(this, (_7 = event.data) === null || _7 === void 0 ? void 0 : _7.error, void 0));
            } else if ((_8 = event.data) === null || _8 === void 0 ? void 0 : _8.onClose) {
              this.closeModal();
              this.unSubscribeMessage();
            }
          };
          if (_W3SSdk.instance != null) {
            this.setupInstance(configs, onLoginComplete);
            return _W3SSdk.instance;
          }
          this.iframe = document.createElement("iframe");
          this.setupInstance(configs, onLoginComplete);
          _W3SSdk.instance = this;
        }
        /**
         * Sets the application settings.
         * This method will be deprecated in the future. Please use the constructor to set the application settings.
         * @param appSettings - Application settings.
         */
        setAppSettings(appSettings) {
          if (this.configs) {
            this.configs.appSettings = appSettings;
          } else {
            this.configs = { appSettings };
          }
        }
        /**
         * Sets the authentication information.
         * @param auth - Authentication information.
         */
        setAuthentication(auth) {
          if (this.configs) {
            this.configs.authentication = auth;
          } else {
            this.configs = {
              appSettings: {
                appId: ""
              },
              authentication: auth
            };
          }
        }
        /**
         * Updates the configurations.
         * @param configs - Configurations.
         * @param onLoginComplete - Callback function that is called when the page is redirected back from the social login provider and receives the verification result.
         */
        updateConfigs(configs, onLoginComplete) {
          this.setupInstance(configs, onLoginComplete !== null && onLoginComplete !== void 0 ? onLoginComplete : this.onLoginComplete);
        }
        /**
         * Gets the device ID.
         * @returns Promise<string> - Device ID.
         */
        getDeviceId() {
          return new Promise((resolve, reject) => {
            this.resolveDeviceIdPromise = resolve;
            this.rejectDeviceIdPromise = reject;
            this.subscribeMessage();
            this.appendIframe(false, "device-id");
            setTimeout(() => {
              var _a;
              if (!this.receivedResponseFromService) {
                (_a = this.rejectDeviceIdPromise) === null || _a === void 0 ? void 0 : _a.call(this, "Failed to receive deviceId");
                this.closeModal();
                this.unSubscribeMessage();
              }
            }, 1e3 * 10);
          });
        }
        /**
         * Performs social login.
         * @param provider - Social login provider.
         */
        performLogin(provider) {
          var _a;
          return __awaiter2(this, void 0, void 0, function* () {
            if (provider === types_1.SocialLoginProvider.GOOGLE) {
              this.performGoogleLogin();
            } else if (provider === types_1.SocialLoginProvider.FACEBOOK) {
              this.performFacebookLogin();
            } else if (provider === types_1.SocialLoginProvider.APPLE) {
              yield this.performAppleLogin();
            } else {
              void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155140,
                message: "Invalid social login provider"
              }, void 0));
            }
          });
        }
        /**
         * Executes email OTP verification.
         */
        verifyOtp() {
          this.subscribeMessage();
          this.appendIframe(true, "social/verify-email");
          setTimeout(() => {
            var _a;
            if (!this.receivedResponseFromService) {
              void ((_a = this.onComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155706,
                message: "Network error"
              }, void 0));
            }
          }, 1e3 * 10);
        }
        /**
         * Executes the challenge.
         * @param challengeId - Challenge ID.
         * @param onCompleted - Callback function that is called when the challenge is completed.
         */
        execute(challengeId, onCompleted) {
          this.subscribeMessage();
          this.setChallenge({ challengeId });
          this.exec(onCompleted, false);
        }
        /**
         * Sets the custom security questions. If the user doesn't provide the custom security questions, the default security questions will be used.
         * @param questions - Custom security questions.
         * @param requiredCount - Required number of security questions.
         * @param securityConfirmItems - Security confirm disclaimer items.
         */
        setCustomSecurityQuestions(questions, requiredCount = 2, securityConfirmItems) {
          this.securityQuestions = questions;
          this.securityConfirmItems = securityConfirmItems;
          if (requiredCount <= 0) {
            this.securityQuestionsRequiredCount = 2;
          } else {
            this.securityQuestionsRequiredCount = requiredCount;
          }
        }
        /**
         * Sets the localizations.
         * @param localizations - Localizations.
         */
        setLocalizations(localizations) {
          this.localizations = localizations;
        }
        /**
         * Sets the resources.
         * @param resources - Resources.
         */
        setResources(resources) {
          this.resources = resources;
        }
        /**
         * Sets the theme color.
         * @param themeColor - Theme color.
         */
        setThemeColor(themeColor) {
          this.themeColor = themeColor;
        }
        /**
         * Sets the custom links.
         * @param customLinks - Custom links.
         */
        setCustomLinks(customLinks) {
          this.customLinks = customLinks;
        }
        /**
         * Sets the callback function that is called when the user clicks the forgot pin button.
         * @param onForgotPin - Callback function that is called when the user clicks the forgot pin button.
         * @param shouldCloseModalOnForgotPin - Indicates whether the modal should be closed when the user clicks the forgot pin button.  Default is false.
         */
        setOnForgotPin(onForgotPin, shouldCloseModalOnForgotPin = false) {
          this.shouldCloseModalOnForgotPin = shouldCloseModalOnForgotPin;
          this.onForgotPin = () => {
            if (this.shouldCloseModalOnForgotPin) {
              this.closeModal();
            }
            onForgotPin === null || onForgotPin === void 0 ? void 0 : onForgotPin();
          };
        }
        /**
         * Sets the callback function that is called when the user clicks the resend OTP email button.
         * @param onResendOtpEmail - Callback function that is called when the user clicks the resend OTP email button.
         */
        setOnResendOtpEmail(onResendOtpEmail) {
          this.onResendOtpEmail = onResendOtpEmail;
        }
        /**
         * Sets up the instance.
         * @param configs - Configurations.
         * @param onLoginComplete - Callback function that is called when the page is redirected back from the social login provider and receives the verification result.
         */
        setupInstance(configs, onLoginComplete) {
          var _a;
          if (((_a = configs === null || configs === void 0 ? void 0 : configs.loginConfigs) === null || _a === void 0 ? void 0 : _a.apple) && (0, app_1.getApps)().length === 0) {
            this.firebaseApp = (0, app_1.initializeApp)(configs.loginConfigs.apple);
          } else if ((0, app_1.getApps)().length !== 0) {
            this.firebaseApp = (0, app_1.getApps)()[0];
          }
          this.onLoginComplete = onLoginComplete;
          this.configs = configs;
          this.deviceInfo = {
            model: "Web",
            version: package_json_1.default.version
          };
          void this.execSocialLoginStatusCheck();
        }
        /**
         * Sets the challenge.
         * @param challenge - Challenge.
         */
        setChallenge(challenge) {
          this.challenge = challenge;
        }
        /**
         * Appends the iframe to the document body.
         * @param showIframe - Indicates whether the iframe should be shown. Default is true.
         * @param subRoute - Sub route.
         */
        appendIframe(showIframe = true, subRoute = "") {
          const protocol = this.window.location.protocol;
          const host = this.window.location.host;
          const fullDomainWithProtocol = `${protocol}//${host}`;
          this.iframe.src = `${this.serviceUrl}/${subRoute}?origin=${fullDomainWithProtocol}`;
          this.iframe.id = "sdkIframe";
          this.iframe.width = showIframe ? "100%" : "0%";
          this.iframe.height = showIframe ? "100%" : "0%";
          this.iframe.style.zIndex = showIframe ? "2147483647" : "-1";
          this.iframe.style.display = "none";
          if (showIframe) {
            this.iframe.style.position = "fixed";
            this.iframe.style.top = "50%";
            this.iframe.style.left = "50%";
            this.iframe.style.transform = "translate(-50%, -50%)";
            this.iframe.style.display = "";
          }
          document.body.appendChild(this.iframe);
        }
        /**
         * Executes the challenge.
         * @param onCompleted - Callback function that is called when the challenge is completed.
         * @param showIframe - Indicates whether the iframe should be shown. Default is true.
         */
        exec(onCompleted, showIframe = true) {
          this.appendIframe(showIframe);
          this.onComplete = onCompleted;
          setTimeout(() => {
            var _a;
            if (!this.receivedResponseFromService) {
              void ((_a = this.onComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155706,
                message: "Network error"
              }, void 0));
            }
          }, 1e3 * 10);
        }
        performAppleLogin() {
          var _a;
          return __awaiter2(this, void 0, void 0, function* () {
            if (!this.firebaseApp) {
              void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155140,
                message: "Please provide the Apple social login configurations."
              }, void 0));
              return;
            }
            this.saveOAuthInfo(types_1.SocialLoginProvider.APPLE);
            const provider = new auth_1.OAuthProvider("apple.com");
            const auth = (0, auth_1.getAuth)(this.firebaseApp);
            try {
              const cred = yield (0, auth_1.signInWithPopup)(auth, provider);
              if (!this.extractTokenFromResultAndSave(cred)) {
                return;
              }
              this.verifyTokenViaService();
              this.window.localStorage.setItem("socialLoginProvider", "");
            } catch (error) {
              if (error instanceof app_1.FirebaseError && error.code !== "auth/cancelled-popup-request" && error.code !== "auth/popup-closed-by-user") {
                yield this.handleFirebaseFailure(error);
              } else if (!(error instanceof app_1.FirebaseError)) {
                this.handleLoginFailure();
              }
            }
          });
        }
        performFacebookLogin() {
          var _a, _b, _c;
          if (!((_b = (_a = this === null || this === void 0 ? void 0 : this.configs) === null || _a === void 0 ? void 0 : _a.loginConfigs) === null || _b === void 0 ? void 0 : _b.facebook)) {
            void ((_c = this.onLoginComplete) === null || _c === void 0 ? void 0 : _c.call(this, {
              code: 155140,
              message: "Please provide the Facebook social login configurations."
            }, void 0));
            return;
          }
          const { appId, redirectUri } = this.configs.loginConfigs.facebook;
          const { url = "", state = "" } = this.generateOauthUrlWithParams(types_1.SocialLoginProvider.FACEBOOK, appId, redirectUri) || {};
          this.saveOAuthInfo(types_1.SocialLoginProvider.FACEBOOK, state);
          this.window.location.href = url;
        }
        performGoogleLogin() {
          var _a, _b, _c;
          if (!((_b = (_a = this.configs) === null || _a === void 0 ? void 0 : _a.loginConfigs) === null || _b === void 0 ? void 0 : _b.google)) {
            void ((_c = this.onLoginComplete) === null || _c === void 0 ? void 0 : _c.call(this, {
              code: 155140,
              message: "Please provide the Google social login configurations."
            }, void 0));
            return;
          }
          const { clientId, redirectUri, selectAccountPrompt } = this.configs.loginConfigs.google;
          const { url = "", state = "", nonce = "" } = this.generateOauthUrlWithParams(types_1.SocialLoginProvider.GOOGLE, clientId, redirectUri, selectAccountPrompt) || {};
          this.saveOAuthInfo(types_1.SocialLoginProvider.GOOGLE, state, nonce);
          this.window.location.href = url;
        }
        /**
         * Generates the OAuth URL with the necessary parameters.
         * @param provider - Social login provider.
         * @param id - Client ID or Application ID.
         * @param redirectUri - Redirect URI.
         * @param selectAccountPrompt - Indicates whether the user should select the account. Default is false.
         * @returns OAuth URL with the necessary parameters.
         */
        generateOauthUrlWithParams(provider, id, redirectUri, selectAccountPrompt = false) {
          const state = (0, uuid_1.v4)();
          if (provider === types_1.SocialLoginProvider.GOOGLE) {
            const scope = encodeURIComponent("openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email");
            const responseType = encodeURIComponent("id_token token");
            const nonce = (0, uuid_1.v4)();
            return {
              url: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${id}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${state}&response_type=${responseType}&nonce=${nonce}&prompt=${selectAccountPrompt ? "select_account" : "none"}`,
              state,
              nonce
            };
          } else if (provider === types_1.SocialLoginProvider.FACEBOOK) {
            const scope = encodeURIComponent("email");
            return {
              url: `https://www.facebook.com/v13.0/dialog/oauth?client_id=${id}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${state}&response_type=token`,
              state
            };
          }
        }
        /**
         * Executes the social login status check before sending the token to the verification service.
         */
        execSocialLoginStatusCheck() {
          return __awaiter2(this, void 0, void 0, function* () {
            const socialLoginProvider = this.window.localStorage.getItem("socialLoginProvider");
            if (socialLoginProvider === types_1.SocialLoginProvider.APPLE) {
              yield this.handleAppleLoginResponse();
            } else if (this.isValidHash(this.window.location.hash)) {
              this.handleHashLoginResponse(socialLoginProvider);
            }
          });
        }
        /**
         * Handles the Apple login response.
         * @returns Promise<void>.
         */
        handleAppleLoginResponse() {
          return __awaiter2(this, void 0, void 0, function* () {
            const auth = (0, auth_1.getAuth)(this.firebaseApp);
            try {
              const result = yield (0, auth_1.getRedirectResult)(auth);
              if (!result || !this.extractTokenFromResultAndSave(result)) {
                return;
              }
              this.verifyTokenViaService();
              this.window.localStorage.setItem("socialLoginProvider", "");
            } catch (error) {
              this.handleLoginFailure();
            }
          });
        }
        /**
         * Handles the hash login responses.
         * @param socialLoginProvider - Social login provider.
         */
        handleHashLoginResponse(socialLoginProvider) {
          const hashParams = new URLSearchParams(window.location.hash.slice(1));
          if (socialLoginProvider === types_1.SocialLoginProvider.GOOGLE) {
            this.handleGoogleLogin(hashParams);
          } else if (socialLoginProvider === types_1.SocialLoginProvider.FACEBOOK) {
            this.handleFacebookLogin(hashParams);
          }
          this.verifyTokenViaService();
          history.replaceState(null, "", window.location.href.split("#")[0]);
        }
        handleGoogleLogin(hashParams) {
          if (this.isLoginStateValid(hashParams) && this.isLoginNonceValid(hashParams)) {
            this.socialLoginToken = hashParams.get("id_token");
            this.socialLoginProvider = types_1.SocialLoginProvider.GOOGLE;
          }
        }
        handleFacebookLogin(hashParams) {
          if (this.isLoginStateValid(hashParams)) {
            this.socialLoginToken = hashParams.get("access_token");
            this.socialLoginProvider = types_1.SocialLoginProvider.FACEBOOK;
          }
        }
        isLoginStateValid(hashParams) {
          return this.checkSocialLoginState(hashParams);
        }
        isLoginNonceValid(hashParams) {
          return this.checkSocialLoginNonce(hashParams);
        }
        isValidHash(hash) {
          const validHashPattern = /^#(?:[a-zA-Z0-9-_.%]+=[^&]*&)*[a-zA-Z0-9-_.%]+=[^&]*$/;
          return validHashPattern.test(hash);
        }
        extractTokenFromResultAndSave(result) {
          const credential = auth_1.OAuthProvider.credentialFromResult(result);
          if (credential && credential.idToken) {
            this.socialLoginToken = credential.idToken;
            this.socialLoginProvider = types_1.SocialLoginProvider.APPLE;
            return true;
          }
          return false;
        }
        handleFirebaseFailure(error) {
          var _a;
          return __awaiter2(this, void 0, void 0, function* () {
            yield (_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
              code: -1,
              message: error.message
            }, void 0);
          });
        }
        handleLoginFailure() {
          var _a;
          void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
            code: 155140,
            message: "Failed to validate the idToken / accessToken"
          }, void 0));
        }
        verifyTokenViaService() {
          this.subscribeMessage();
          this.appendIframe(false, "social/verify-token");
          setTimeout(() => {
            var _a;
            if (!this.receivedResponseFromService) {
              void ((_a = this.onComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155706,
                message: "Network error"
              }, void 0));
            }
          }, 1e3 * 10);
        }
        /**
         * Saves the OAuth information to the local storage in order to check the state and nonce value later.
         * @param provider - Social login provider.
         * @param state - State value.
         * @param nonce - Nonce value.
         */
        saveOAuthInfo(provider, state, nonce) {
          this.window.localStorage.setItem("socialLoginProvider", provider);
          this.window.localStorage.setItem("state", state !== null && state !== void 0 ? state : "");
          this.window.localStorage.setItem("nonce", nonce !== null && nonce !== void 0 ? nonce : "");
        }
        /**
         * Checks the state value from the social login response.
         * @param hashParams - Hash parameters.
         * @returns Indicates whether the state value is valid.
         */
        checkSocialLoginState(hashParams) {
          var _a;
          const state = hashParams.get("state");
          const storedState = this.window.localStorage.getItem("state");
          if (!storedState || state !== storedState) {
            void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
              code: 155140,
              message: "Failed to validate the idToken / accessToken"
            }, void 0));
            return false;
          }
          return true;
        }
        /**
         * Checks the nonce value from the social login response. Only id token is going to have nonce value.
         * @param hashParams - Hash parameters.
         * @returns Indicates whether the nonce value is valid.
         */
        checkSocialLoginNonce(hashParams) {
          var _a, _b, _c;
          const token = hashParams.get("id_token");
          const decodedToken = (0, jsonwebtoken_1.decode)(token || "");
          const errorPayload = {
            code: 155140,
            message: "Failed to validate the idToken/ accessToken"
          };
          if (decodedToken === null) {
            void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, errorPayload, void 0));
            return false;
          }
          try {
            const storedNonce = this.window.localStorage.getItem("nonce");
            if (!storedNonce || (decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.nonce) !== storedNonce) {
              void ((_b = this.onLoginComplete) === null || _b === void 0 ? void 0 : _b.call(this, errorPayload, void 0));
              return false;
            }
          } catch (_d) {
            void ((_c = this.onLoginComplete) === null || _c === void 0 ? void 0 : _c.call(this, errorPayload, void 0));
            return false;
          }
          return true;
        }
        /**
         * Closes the modal.
         */
        closeModal() {
          var _a;
          const iframe = this.window.document.getElementById("sdkIframe");
          (_a = iframe === null || iframe === void 0 ? void 0 : iframe.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(iframe);
        }
        /**
         * Subscribes to the postMessage event.
         */
        subscribeMessage() {
          this.window.addEventListener("message", this.messageHandler, false);
        }
        /**
         * Unsubscribes to the postMessage event.
         */
        unSubscribeMessage() {
          this.window.removeEventListener("message", this.messageHandler, false);
        }
      };
      exports4.W3SSdk = W3SSdk2;
      W3SSdk2.instance = null;
    }
  });

  // scripts/web/w3s-entry.js
  init_node_shim();
  init_dirname();
  init_buffer();
  init_process2();
  var import_w3s_pw_web_sdk = __toESM(require_src(), 1);
  window.W3SSdk = import_w3s_pw_web_sdk.W3SSdk;
})();
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-DtuTasat.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@firebase/util/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/browser-cjs/index-e2e765e6.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
