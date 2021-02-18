(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["THREE", "Vue"], factory);
	else if(typeof exports === 'object')
		exports["VglSpine"] = factory(require("three"), require("vue"));
	else
		root["VglSpine"] = factory(root[undefined], root[undefined]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__5fda__, __WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0b25":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "145e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "170b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");
var speciesConstructor = __webpack_require__("4840");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),

/***/ "182d":
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__("f8cd");

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "219c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort;

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "25a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $reduceRight = __webpack_require__("d58f").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2954":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var speciesConstructor = __webpack_require__("4840");
var fails = __webpack_require__("d039");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "3280":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $lastIndexOf = __webpack_require__("e58c");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $findIndex = __webpack_require__("b727").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3c5d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var toLength = __webpack_require__("50c4");
var toOffset = __webpack_require__("182d");
var toObject = __webpack_require__("7b0b");
var fails = __webpack_require__("d039");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "3fcc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $map = __webpack_require__("b727").map;
var speciesConstructor = __webpack_require__("4840");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5cc6":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "5f96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join;

// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "5fda":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5fda__;

/***/ }),

/***/ "60bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var ArrayIterators = __webpack_require__("e260");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


/***/ }),

/***/ "621a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_ARRAY_BUFFER = __webpack_require__("a981");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefineAll = __webpack_require__("e2cc");
var fails = __webpack_require__("d039");
var anInstance = __webpack_require__("19aa");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toIndex = __webpack_require__("0b25");
var IEEE754 = __webpack_require__("77a7");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var getOwnPropertyNames = __webpack_require__("241c").f;
var defineProperty = __webpack_require__("9bf2").f;
var arrayFill = __webpack_require__("81d5");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError = global.RangeError;

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new
    new NativeArrayBuffer(1.5); // eslint-disable-line no-new
    new NativeArrayBuffer(NaN); // eslint-disable-line no-new
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf($DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "649e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $some = __webpack_require__("b727").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "72f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__("ebb5").exportTypedArrayMethod;
var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "735e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $fill = __webpack_require__("81d5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  return $fill.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "74e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var DESCRIPTORS = __webpack_require__("83ab");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__("8aa7");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var ArrayBufferModule = __webpack_require__("621a");
var anInstance = __webpack_require__("19aa");
var createPropertyDescriptor = __webpack_require__("5c6c");
var createNonEnumerableProperty = __webpack_require__("9112");
var toLength = __webpack_require__("50c4");
var toIndex = __webpack_require__("0b25");
var toOffset = __webpack_require__("182d");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var classof = __webpack_require__("f5df");
var isObject = __webpack_require__("861d");
var create = __webpack_require__("7c73");
var setPrototypeOf = __webpack_require__("d2bb");
var getOwnPropertyNames = __webpack_require__("241c").f;
var typedArrayFrom = __webpack_require__("a078");
var forEach = __webpack_require__("b727").forEach;
var setSpecies = __webpack_require__("2626");
var definePropertyModule = __webpack_require__("9bf2");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var InternalStateModule = __webpack_require__("69f3");
var inheritIfRequired = __webpack_require__("7156");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && typeof key != 'symbol'
    && key in target
    && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true))
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
    && isObject(descriptor)
    && has(descriptor, 'value')
    && !has(descriptor, 'get')
    && !has(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!has(descriptor, 'writable') || descriptor.writable)
    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "77a7":
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "82f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $includes = __webpack_require__("4d64").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "84c3":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8aa7":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__("ebb5").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "8b09":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9a8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $copyWithin = __webpack_require__("145e");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a078":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var getIteratorMethod = __webpack_require__("35a1");
var isArrayIteratorMethod = __webpack_require__("e95a");
var bind = __webpack_require__("0366");
var aTypedArrayConstructor = __webpack_require__("ebb5").aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];
    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }
  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $every = __webpack_require__("b727").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "a981":
/***/ (function(module, exports) {

module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b39a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var fails = __webpack_require__("d039");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "baa5":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var lastIndexOf = __webpack_require__("e58c");

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "be8e":
/***/ (function(module, exports, __webpack_require__) {

var sign = __webpack_require__("f748");

var abs = Math.abs;
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
module.exports = Math.fround || function fround(x) {
  var $abs = abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c1ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $filter = __webpack_require__("b727").filter;
var speciesConstructor = __webpack_require__("4840");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
});


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ca91":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $reduce = __webpack_require__("d58f").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cd26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cfc3":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d139":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $find = __webpack_require__("b727").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d5d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $forEach = __webpack_require__("b727").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e58c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e91f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $indexOf = __webpack_require__("4d64").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "ebb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("a981");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var classof = __webpack_require__("f5df");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var defineProperty = __webpack_require__("9bf2").f;
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var wellKnownSymbol = __webpack_require__("b622");
var uid = __webpack_require__("90e3");

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || has(TypedArrayConstructorsList, klass)
    || has(BigIntArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return has(TypedArrayConstructorsList, klass)
    || has(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  } throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f664":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fround = __webpack_require__("be8e");

// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
$({ target: 'Math', stat: true }, { fround: fround });


/***/ }),

/***/ "f748":
/***/ (function(module, exports) {

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f8cd":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

module.exports = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "spine", function() { return /* reexport */ VglSpine_spine; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: external {"commonjs":"three","commonjs2":"three","amd":"THREE","umd":"THREE"}
var external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_ = __webpack_require__("5fda");

// CONCATENATED MODULE: ./node_modules/vue-gl/src/core/tree.js
/* harmony default export */ var tree = (class {
  constructor(parent, getter) {
    this.listeners = parent ? parent.listeners : [];
    this.inst = getter || (() => {});
  }

  listen(fn) {
    if (!this.listeners.includes(fn)) this.listeners.push(fn);
  }

  unlisten(fn) {
    const index = this.listeners.indexOf(fn);
    if (index >= 0) this.listeners.splice(index, 1);
  }

  emit() {
    this.listeners.forEach((fn) => fn());
  }
});

// CONCATENATED MODULE: ./node_modules/vue-gl/src/parsers.js


/**
 * Parses a prop value as names type.
 *
 * @param {string|string[]} names - Prop value.
 * @return {string[]} Parsed array of names.
 */
function parseNames(names) {
  return Array.isArray(names) ? names : names.trim().split(/\s+/);
}

/**
 * Parses a prop value as color type.
 *
 * @param {string|number|Color} color - Prop value.
 * @return {Color} Parsed THREE.Color instance.
 */
function parseColor(color) {
  return color.isColor ? color : new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Color"](color);
}

/**
 * Parses a prop value as vector2 type.
 *
 * @param {string|(string|number)[]|Vector2} vector - Prop value.
 * @return {Vector2} Parsed THREE.Vector2 instance.
 */
function parseVector2(vector) {
  if (vector.isVector2) return vector;
  const coods = Array.isArray(vector) ? vector : vector.trim().split(/\s+/);
  return new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Vector2"](...coods.map(parseFloat));
}

/**
 * Parses a prop value as vector3 type.
 *
 * @param {string|(string|number)[]|Vector3} vector - Prop value.
 * @return {Vector3} Parsed THREE.Vector3 instance.
 */
function parseVector3(vector) {
  if (vector.isVector3) return vector;
  const coods = Array.isArray(vector) ? vector : vector.trim().split(/\s+/);
  return new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Vector3"](...coods.map(parseFloat));
}

/**
 * Parses a prop value as euler type.
 *
 * @param {string|(string|number)[]|Euler} euler - Prop value.
 * @return {Euler} Parsed THREE.Euler instance.
 */
function parseEuler(euler) {
  if (euler.isEuler) return euler;
  const coods = Array.isArray(euler) ? euler : euler.trim().split(/\s+/);
  return new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Euler"](...coods.slice(0, 3).map(parseFloat), coods[3]);
}

/**
 * Parses a prop value as quaternion type.
 *
 * @param {string|(string|number)[]|Quaternion} quaternion - Prop value.
 * @return {Quaternion} Parsed THREE.Quaternion instance.
 */
function parseQuaternion(quaternion) {
  if (quaternion.isQuaternion) return quaternion;
  const coods = Array.isArray(quaternion) ? quaternion : quaternion.trim().split(/\s+/);
  return new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Quaternion"](...coods.map(parseFloat));
}

/**
 * Parses a prop value as spherical type.
 *
 * @param {string|(string|number)[]|Spherical} spherical - Prop value.
 * @return {Spherical} Parsed THREE.Spherical instance.
 */
function parseSpherical(spherical) {
  if (spherical instanceof external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Spherical"]) return spherical;
  const coods = Array.isArray(spherical) ? spherical : spherical.trim().split(/\s+/);
  return new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Spherical"](...coods.map(parseFloat)).makeSafe();
}

/**
 * Parses a prop value as generic array type.
 *
 * @param {string|*[]} array - Prop value.
 * @return {*[]} Parsed array.
 */
function parseArray(array) {
  return Array.isArray(array) ? array : array.split(',');
}

/**
 * Parses a prop value as integer array type.
 *
 * @param {string|*[]} array - Prop value.
 * @return {number[]} Parsed array of integers.
 */
function parseIntArray(array) {
  return parseArray(array).map((i) => parseInt(i, 10));
}

/**
 * Parses a prop value as float array type.
 *
 * @param {string|*[]} array - Prop value.
 * @return {number[]} Parsed array of floats.
 */
function parseFloatArray(array) {
  return parseArray(array).map(parseFloat);
}

/**
 * Parses a prop value as vector2array type.
 *
 * @param {string|(string|Vector2)[]} array - Prop value.
 * @return {Vector2[]} Parsed array of THREE.Vector2 instances.
 */
function parseVector2Array(array) {
  const isArray = Array.isArray(array);
  if (isArray && array.every((v) => v.isVector2)) return array;
  return (isArray ? array : array.split(',')).map(parseVector2);
}

/**
 * Returns a parsed fog object
 */
function parseFog(str) {
  return str.isFog ? str : new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Fog"](...str.trim().split(/\s+/).map((elm, i) => (i === 0 ? elm : parseFloat(elm))));
}

// CONCATENATED MODULE: ./node_modules/vue-gl/src/types.js


const types_boolean = Boolean;
const types_int = [String, Number];
const types_float = [String, Number];
const string = String;
const types_name = String;
const names = [String, Array];
const types_color = [String, external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Color"], Number];
const vector2 = [String, external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Vector2"]];
const vector3 = [String, external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Vector3"]];
const types_euler = [String, external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Euler"]];
const types_quaternion = [String, external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Quaternion"]];
const types_spherical = [String, external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Spherical"]];
const floatArray = [String, Array];
const intArray = [String, Array];
const vector2Array = [String, Array];
const fog = [String, external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Fog"]];

// CONCATENATED MODULE: ./node_modules/vue-gl/src/validators.js


function isFloat(value) {
  return !Number.isNaN(parseFloat(value));
}

function isInt(value) {
  return !Number.isNaN(parseInt(value, 10));
}

/**
 * Validates a name type prop.
 *
 * @param {string} name - Prop value.
 * @return {boolean} Whether value is valid or not.
 */
function validateName(name) {
  return /^\s*\S+\s*$/.test(name);
}

/**
 * Validates a names type prop.
 *
 * @param {string|string[]} names - Prop value.
 * @return {boolean} Whether value is valid or not.
 */
function validateNames(names) {
  return Array.isArray(names) ? names.every(validateName) : /\S+/.test(names);
}

/**
 * Validates a vector2 type prop.
 *
 * @param  {string|(string|number)[]|Vector2} vector - The prop value.
 * @return {boolean} Whether value is valid or not.
 */
function validateVector2(vector) {
  if (vector instanceof external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Vector2"]) return true;
  const v = Array.isArray(vector) ? vector : vector.trim().split(/\s+/);
  return v.length === 2 && v.every(isFloat);
}

/**
 * Validates a vector3 type prop.
 *
 * @param  {string|(string|number)[]|Vector3} vector - The prop value.
 * @return {boolean} Whether value is valid or not.
 */
function validateVector3(vector) {
  if (vector instanceof external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Vector3"]) return true;
  const v = Array.isArray(vector) ? vector : vector.trim().split(/\s+/);
  return v.length === 3 && v.every(isFloat);
}

/**
 * Validates a euler type prop.
 *
 * @param  {string|(string|number)[]|Euler} euler - The prop value.
 * @return {boolean} Whether value is valid or not.
 */
function validateEuler(euler) {
  if (euler instanceof external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Euler"]) return true;
  const v = Array.isArray(euler) ? euler : euler.trim().split(/\s+/);
  return v.length === 4 && v.slice(0, 3).every(isFloat) && /[XYZ]{3}/.test(v[3]);
}

/**
 * Validates a quaternion type prop.
 *
 * @param  {string|(string|number)[]|Quaternion} quaternion - The prop value.
 * @return {boolean} Whether value is valid or not.
 */
function validateQuaternion(quaternion) {
  if (quaternion instanceof external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Quaternion"]) return true;
  const q = Array.isArray(quaternion) ? quaternion : quaternion.trim().split(/\s+/);
  return q.length === 4 && q.every(isFloat);
}

/**
 * Validates a spherical type prop.
 *
 * @param  {string|(string|number)[]|Spherical} spherical - The prop value.
 * @return {boolean} Whether value is valid or not.
 */
function validateSpherical(spherical) {
  if (spherical instanceof external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Spherical"]) return true;
  const s = Array.isArray(spherical) ? spherical : spherical.trim().split(/\s+/);
  return s.length === 3 && s.every(isFloat);
}

/**
 * Validates a intArray type prop.
 *
 * @param {string|(string|number)[]} array - The prop value.
 * @return {boolean} Wheter value is valid or not.
 */
function validateIntArray(array) {
  return (Array.isArray(array) ? array : array.split(',')).every(isInt);
}

/**
 * Validates a floatArray type prop.
 *
 * @param {string|(string|number)[]} array - The prop value.
 * @return {boolean} Wheter value is valid or not.
 */
function validateFloatArray(array) {
  return (Array.isArray(array) ? array : array.split(',')).every(isFloat);
}

/**
 * Validates a vector2Array type prop.
 *
 * @param {string|(string|Vector2)[]} array - The prop value.
 * @return {boolean} Wheter value is valid or not.
 */
function validateVector2Array(array) {
  return (Array.isArray(array) ? array : array.split(',')).every(validateVector2);
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"Vue","umd":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_Vue_umd_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-gl/src/core/vgl-object3d.js







/**
 * This is the base mixin component for most object components in VueGL,
 * corresponding [THREE.Object3D](https://threejs.org/docs/index.html#api/core/Object3D).
 * Object3d components inside a object3d component are added
 * as children via THREE.Object3D.prototype.add() method.
 *
 * VglObject3d components inside default slots are added as children.
 */

/* harmony default export */ var vgl_object3d = ({
  props: {
    /** The object's local position as a 3D vector. */
    position: { type: vector3, validator: validateVector3 },
    /** The object's local rotation as a euler angle. */
    rotation: { type: types_euler, validator: validateEuler },
    /**
     * The object's local rotation as a quaternion (specified in x, y, z, w order).
     * Do not use in conjunction with the rotation prop, since they both control the same property
     * of the underlying THREE.Object3D object.
     */
    rotationQuaternion: { type: types_quaternion, validator: validateQuaternion },
    /** The object's local scale as a 3D vector. */
    scale: { type: vector3, validator: validateVector3 },
    /** Whether the object gets rendered into shadow map. */
    castShadow: types_boolean,
    /** Whether the material receives shadows. */
    receiveShadow: types_boolean,
    /** Optional name of the object. */
    name: { type: types_name, validator: validateName },
    /** Whether the object is visible. */
    hidden: types_boolean,
  },
  inject: {
    vglObject3d: {
      default: () => new tree(),
    },
    vglNamespace: {
      default() { throw new Error('VueGL components must be wraped by VglNamespace component.'); },
    },
  },
  provide() {
    return {
      vglObject3d: new tree(this.vglObject3d, () => this.inst),
    };
  },
  computed: {
    /** The THREE.Object3D instance. */
    inst: () => new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Object3D"](),
    /** The parent THREE.Object3D instance.  */
    parent() { return this.vglObject3d.inst(); },
  },
  methods: {
    /** Emit an event in the `object3ds` namespace. */
    emitAsObject3d() { this.vglNamespace.object3ds.emit(this.name, this.inst); },
  },
  beforeUnmount() {
    if (this.inst.parent) this.inst.parent.remove(this.inst);
    if (this.name !== undefined) {
      this.vglObject3d.unlisten(this.emitAsObject3d);
      this.vglNamespace.object3ds.delete(this.name, this.inst);
    }
  },
  watch: {
    inst: {
      handler(inst, oldInst) {
        if (oldInst && oldInst.parent) oldInst.parent.remove(oldInst);
        if (this.parent) this.parent.add(inst);
        if (this.position) inst.position.copy(parseVector3(this.position));
        if (this.rotation) inst.rotation.copy(parseEuler(this.rotation));
        if (this.rotationQuaternion) inst.quaternion.copy(parseQuaternion(this.rotationQuaternion));
        if (this.scale) inst.scale.copy(parseVector3(this.scale));
        Object.assign(inst, {
          castShadow: this.castShadow,
          receiveShadow: this.receiveShadow,
          visible: !this.hidden,
          name: this.name,
        });
        if (this.name !== undefined) this.vglNamespace.object3ds.set(this.name, inst);
        if (oldInst) this.vglObject3d.emit();
      },
      immediate: true,
    },
    parent(parent) { parent.add(this.inst); },
    name: [
      function handler(newName) { this.inst.name = newName; },
      {
        handler(newName, oldName) {
          if (oldName !== undefined) {
            this.vglNamespace.object3ds.delete(oldName, this.inst);
            if (newName === undefined) this.vglObject3d.unlisten(this.emitAsObject3d);
          }
          if (newName !== undefined) {
            this.vglNamespace.object3ds.set(newName, this.inst);
            if (oldName === undefined) this.vglObject3d.listen(this.emitAsObject3d);
          }
        },
        immediate: true,
      },
    ],
    position(position) {
      this.inst.position.copy(parseVector3(position));
      this.vglObject3d.emit();
    },
    rotation(rotation) {
      this.inst.rotation.copy(parseEuler(rotation));
      this.vglObject3d.emit();
    },
    rotationQuaternion(rotationQuaternion) {
      this.inst.quaternion.copy(parseQuaternion(rotationQuaternion));
      this.vglObject3d.emit();
    },
    scale(scale) {
      this.inst.scale.copy(parseVector3(scale));
      this.vglObject3d.emit();
    },
    castShadow(castShadow) {
      this.inst.castShadow = castShadow;
      this.vglObject3d.emit();
    },
    receiveShadow(receiveShadow) {
      this.inst.receiveShadow = receiveShadow;
      this.vglObject3d.emit();
    },
    hidden(hidden) {
      this.inst.visible = !hidden;
      this.vglObject3d.emit();
    },
  },
  render() {
    if (!this.$slots.default) return undefined;
    return Object(external_commonjs_vue_commonjs2_vue_amd_Vue_umd_Vue_["h"])('div', { style: { display: 'none' } }, this.$slots.default());
  },
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.last-index-of.js
var es_array_last_index_of = __webpack_require__("baa5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.fround.js
var es_math_fround = __webpack_require__("f664");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.float32-array.js
var es_typed_array_float32_array = __webpack_require__("cfc3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.int16-array.js
var es_typed_array_int16_array = __webpack_require__("8b09");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__("5cc6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint16-array.js
var es_typed_array_uint16_array = __webpack_require__("84c3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
var es_typed_array_copy_within = __webpack_require__("9a8c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
var es_typed_array_every = __webpack_require__("a975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
var es_typed_array_fill = __webpack_require__("735e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
var es_typed_array_filter = __webpack_require__("c1ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
var es_typed_array_find = __webpack_require__("d139");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
var es_typed_array_find_index = __webpack_require__("3a7b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
var es_typed_array_for_each = __webpack_require__("d5d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
var es_typed_array_includes = __webpack_require__("82f8");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
var es_typed_array_index_of = __webpack_require__("e91f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
var es_typed_array_iterator = __webpack_require__("60bd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
var es_typed_array_join = __webpack_require__("5f96");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
var es_typed_array_last_index_of = __webpack_require__("3280");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
var es_typed_array_map = __webpack_require__("3fcc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
var es_typed_array_reduce = __webpack_require__("ca91");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
var es_typed_array_reduce_right = __webpack_require__("25a1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
var es_typed_array_reverse = __webpack_require__("cd26");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__("3c5d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
var es_typed_array_slice = __webpack_require__("2954");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
var es_typed_array_some = __webpack_require__("649e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__("219c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js
var es_typed_array_subarray = __webpack_require__("170b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
var es_typed_array_to_locale_string = __webpack_require__("b39a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
var es_typed_array_to_string = __webpack_require__("72f7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./src/spine-threejs/spine-threejs.js











































/* eslint-disable */


var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var spine_threejs_spine;

(function (spine) {
  var Animation = function () {
    function Animation(name, timelines, duration) {
      if (name == null) throw new Error("name cannot be null.");
      if (timelines == null) throw new Error("timelines cannot be null.");
      this.name = name;
      this.timelines = timelines;
      this.timelineIds = [];

      for (var i = 0; i < timelines.length; i++) {
        this.timelineIds[timelines[i].getPropertyId()] = true;
      }

      this.duration = duration;
    }

    Animation.prototype.hasTimeline = function (id) {
      return this.timelineIds[id] == true;
    };

    Animation.prototype.apply = function (skeleton, lastTime, time, loop, events, alpha, blend, direction) {
      if (skeleton == null) throw new Error("skeleton cannot be null.");

      if (loop && this.duration != 0) {
        time %= this.duration;
        if (lastTime > 0) lastTime %= this.duration;
      }

      var timelines = this.timelines;

      for (var i = 0, n = timelines.length; i < n; i++) {
        timelines[i].apply(skeleton, lastTime, time, events, alpha, blend, direction);
      }
    };

    Animation.binarySearch = function (values, target, step) {
      if (step === void 0) {
        step = 1;
      }

      var low = 0;
      var high = values.length / step - 2;
      if (high == 0) return step;
      var current = high >>> 1;

      while (true) {
        if (values[(current + 1) * step] <= target) low = current + 1;else high = current;
        if (low == high) return (low + 1) * step;
        current = low + high >>> 1;
      }
    };

    Animation.linearSearch = function (values, target, step) {
      for (var i = 0, last = values.length - step; i <= last; i += step) {
        if (values[i] > target) return i;
      }

      return -1;
    };

    return Animation;
  }();

  spine.Animation = Animation;
  var MixBlend;

  (function (MixBlend) {
    MixBlend[MixBlend["setup"] = 0] = "setup";
    MixBlend[MixBlend["first"] = 1] = "first";
    MixBlend[MixBlend["replace"] = 2] = "replace";
    MixBlend[MixBlend["add"] = 3] = "add";
  })(MixBlend = spine.MixBlend || (spine.MixBlend = {}));

  var MixDirection;

  (function (MixDirection) {
    MixDirection[MixDirection["mixIn"] = 0] = "mixIn";
    MixDirection[MixDirection["mixOut"] = 1] = "mixOut";
  })(MixDirection = spine.MixDirection || (spine.MixDirection = {}));

  var TimelineType;

  (function (TimelineType) {
    TimelineType[TimelineType["rotate"] = 0] = "rotate";
    TimelineType[TimelineType["translate"] = 1] = "translate";
    TimelineType[TimelineType["scale"] = 2] = "scale";
    TimelineType[TimelineType["shear"] = 3] = "shear";
    TimelineType[TimelineType["attachment"] = 4] = "attachment";
    TimelineType[TimelineType["color"] = 5] = "color";
    TimelineType[TimelineType["deform"] = 6] = "deform";
    TimelineType[TimelineType["event"] = 7] = "event";
    TimelineType[TimelineType["drawOrder"] = 8] = "drawOrder";
    TimelineType[TimelineType["ikConstraint"] = 9] = "ikConstraint";
    TimelineType[TimelineType["transformConstraint"] = 10] = "transformConstraint";
    TimelineType[TimelineType["pathConstraintPosition"] = 11] = "pathConstraintPosition";
    TimelineType[TimelineType["pathConstraintSpacing"] = 12] = "pathConstraintSpacing";
    TimelineType[TimelineType["pathConstraintMix"] = 13] = "pathConstraintMix";
    TimelineType[TimelineType["twoColor"] = 14] = "twoColor";
  })(TimelineType = spine.TimelineType || (spine.TimelineType = {}));

  var CurveTimeline = function () {
    function CurveTimeline(frameCount) {
      if (frameCount <= 0) throw new Error("frameCount must be > 0: " + frameCount);
      this.curves = spine.Utils.newFloatArray((frameCount - 1) * CurveTimeline.BEZIER_SIZE);
    }

    CurveTimeline.prototype.getFrameCount = function () {
      return this.curves.length / CurveTimeline.BEZIER_SIZE + 1;
    };

    CurveTimeline.prototype.setLinear = function (frameIndex) {
      this.curves[frameIndex * CurveTimeline.BEZIER_SIZE] = CurveTimeline.LINEAR;
    };

    CurveTimeline.prototype.setStepped = function (frameIndex) {
      this.curves[frameIndex * CurveTimeline.BEZIER_SIZE] = CurveTimeline.STEPPED;
    };

    CurveTimeline.prototype.getCurveType = function (frameIndex) {
      var index = frameIndex * CurveTimeline.BEZIER_SIZE;
      if (index == this.curves.length) return CurveTimeline.LINEAR;
      var type = this.curves[index];
      if (type == CurveTimeline.LINEAR) return CurveTimeline.LINEAR;
      if (type == CurveTimeline.STEPPED) return CurveTimeline.STEPPED;
      return CurveTimeline.BEZIER;
    };

    CurveTimeline.prototype.setCurve = function (frameIndex, cx1, cy1, cx2, cy2) {
      var tmpx = (-cx1 * 2 + cx2) * 0.03,
          tmpy = (-cy1 * 2 + cy2) * 0.03;
      var dddfx = ((cx1 - cx2) * 3 + 1) * 0.006,
          dddfy = ((cy1 - cy2) * 3 + 1) * 0.006;
      var ddfx = tmpx * 2 + dddfx,
          ddfy = tmpy * 2 + dddfy;
      var dfx = cx1 * 0.3 + tmpx + dddfx * 0.16666667,
          dfy = cy1 * 0.3 + tmpy + dddfy * 0.16666667;
      var i = frameIndex * CurveTimeline.BEZIER_SIZE;
      var curves = this.curves;
      curves[i++] = CurveTimeline.BEZIER;
      var x = dfx,
          y = dfy;

      for (var n = i + CurveTimeline.BEZIER_SIZE - 1; i < n; i += 2) {
        curves[i] = x;
        curves[i + 1] = y;
        dfx += ddfx;
        dfy += ddfy;
        ddfx += dddfx;
        ddfy += dddfy;
        x += dfx;
        y += dfy;
      }
    };

    CurveTimeline.prototype.getCurvePercent = function (frameIndex, percent) {
      percent = spine.MathUtils.clamp(percent, 0, 1);
      var curves = this.curves;
      var i = frameIndex * CurveTimeline.BEZIER_SIZE;
      var type = curves[i];
      if (type == CurveTimeline.LINEAR) return percent;
      if (type == CurveTimeline.STEPPED) return 0;
      i++;
      var x = 0;

      for (var start = i, n = i + CurveTimeline.BEZIER_SIZE - 1; i < n; i += 2) {
        x = curves[i];

        if (x >= percent) {
          var prevX = void 0,
              prevY = void 0;

          if (i == start) {
            prevX = 0;
            prevY = 0;
          } else {
            prevX = curves[i - 2];
            prevY = curves[i - 1];
          }

          return prevY + (curves[i + 1] - prevY) * (percent - prevX) / (x - prevX);
        }
      }

      var y = curves[i - 1];
      return y + (1 - y) * (percent - x) / (1 - x);
    };

    CurveTimeline.LINEAR = 0;
    CurveTimeline.STEPPED = 1;
    CurveTimeline.BEZIER = 2;
    CurveTimeline.BEZIER_SIZE = 10 * 2 - 1;
    return CurveTimeline;
  }();

  spine.CurveTimeline = CurveTimeline;

  var RotateTimeline = function (_super) {
    __extends(RotateTimeline, _super);

    function RotateTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount << 1);
      return _this;
    }

    RotateTimeline.prototype.getPropertyId = function () {
      return (TimelineType.rotate << 24) + this.boneIndex;
    };

    RotateTimeline.prototype.setFrame = function (frameIndex, time, degrees) {
      frameIndex <<= 1;
      this.frames[frameIndex] = time;
      this.frames[frameIndex + RotateTimeline.ROTATION] = degrees;
    };

    RotateTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
      var frames = this.frames;
      var bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            bone.rotation = bone.data.rotation;
            return;

          case MixBlend.first:
            var r_1 = bone.data.rotation - bone.rotation;
            bone.rotation += (r_1 - (16384 - (16384.499999999996 - r_1 / 360 | 0)) * 360) * alpha;
        }

        return;
      }

      if (time >= frames[frames.length - RotateTimeline.ENTRIES]) {
        var r_2 = frames[frames.length + RotateTimeline.PREV_ROTATION];

        switch (blend) {
          case MixBlend.setup:
            bone.rotation = bone.data.rotation + r_2 * alpha;
            break;

          case MixBlend.first:
          case MixBlend.replace:
            r_2 += bone.data.rotation - bone.rotation;
            r_2 -= (16384 - (16384.499999999996 - r_2 / 360 | 0)) * 360;

          case MixBlend.add:
            bone.rotation += r_2 * alpha;
        }

        return;
      }

      var frame = Animation.binarySearch(frames, time, RotateTimeline.ENTRIES);
      var prevRotation = frames[frame + RotateTimeline.PREV_ROTATION];
      var frameTime = frames[frame];
      var percent = this.getCurvePercent((frame >> 1) - 1, 1 - (time - frameTime) / (frames[frame + RotateTimeline.PREV_TIME] - frameTime));
      var r = frames[frame + RotateTimeline.ROTATION] - prevRotation;
      r = prevRotation + (r - (16384 - (16384.499999999996 - r / 360 | 0)) * 360) * percent;

      switch (blend) {
        case MixBlend.setup:
          bone.rotation = bone.data.rotation + (r - (16384 - (16384.499999999996 - r / 360 | 0)) * 360) * alpha;
          break;

        case MixBlend.first:
        case MixBlend.replace:
          r += bone.data.rotation - bone.rotation;

        case MixBlend.add:
          bone.rotation += (r - (16384 - (16384.499999999996 - r / 360 | 0)) * 360) * alpha;
      }
    };

    RotateTimeline.ENTRIES = 2;
    RotateTimeline.PREV_TIME = -2;
    RotateTimeline.PREV_ROTATION = -1;
    RotateTimeline.ROTATION = 1;
    return RotateTimeline;
  }(CurveTimeline);

  spine.RotateTimeline = RotateTimeline;

  var TranslateTimeline = function (_super) {
    __extends(TranslateTimeline, _super);

    function TranslateTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount * TranslateTimeline.ENTRIES);
      return _this;
    }

    TranslateTimeline.prototype.getPropertyId = function () {
      return (TimelineType.translate << 24) + this.boneIndex;
    };

    TranslateTimeline.prototype.setFrame = function (frameIndex, time, x, y) {
      frameIndex *= TranslateTimeline.ENTRIES;
      this.frames[frameIndex] = time;
      this.frames[frameIndex + TranslateTimeline.X] = x;
      this.frames[frameIndex + TranslateTimeline.Y] = y;
    };

    TranslateTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
      var frames = this.frames;
      var bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            bone.x = bone.data.x;
            bone.y = bone.data.y;
            return;

          case MixBlend.first:
            bone.x += (bone.data.x - bone.x) * alpha;
            bone.y += (bone.data.y - bone.y) * alpha;
        }

        return;
      }

      var x = 0,
          y = 0;

      if (time >= frames[frames.length - TranslateTimeline.ENTRIES]) {
        x = frames[frames.length + TranslateTimeline.PREV_X];
        y = frames[frames.length + TranslateTimeline.PREV_Y];
      } else {
        var frame = Animation.binarySearch(frames, time, TranslateTimeline.ENTRIES);
        x = frames[frame + TranslateTimeline.PREV_X];
        y = frames[frame + TranslateTimeline.PREV_Y];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / TranslateTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TranslateTimeline.PREV_TIME] - frameTime));
        x += (frames[frame + TranslateTimeline.X] - x) * percent;
        y += (frames[frame + TranslateTimeline.Y] - y) * percent;
      }

      switch (blend) {
        case MixBlend.setup:
          bone.x = bone.data.x + x * alpha;
          bone.y = bone.data.y + y * alpha;
          break;

        case MixBlend.first:
        case MixBlend.replace:
          bone.x += (bone.data.x + x - bone.x) * alpha;
          bone.y += (bone.data.y + y - bone.y) * alpha;
          break;

        case MixBlend.add:
          bone.x += x * alpha;
          bone.y += y * alpha;
      }
    };

    TranslateTimeline.ENTRIES = 3;
    TranslateTimeline.PREV_TIME = -3;
    TranslateTimeline.PREV_X = -2;
    TranslateTimeline.PREV_Y = -1;
    TranslateTimeline.X = 1;
    TranslateTimeline.Y = 2;
    return TranslateTimeline;
  }(CurveTimeline);

  spine.TranslateTimeline = TranslateTimeline;

  var ScaleTimeline = function (_super) {
    __extends(ScaleTimeline, _super);

    function ScaleTimeline(frameCount) {
      return _super.call(this, frameCount) || this;
    }

    ScaleTimeline.prototype.getPropertyId = function () {
      return (TimelineType.scale << 24) + this.boneIndex;
    };

    ScaleTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
      var frames = this.frames;
      var bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            bone.scaleX = bone.data.scaleX;
            bone.scaleY = bone.data.scaleY;
            return;

          case MixBlend.first:
            bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
            bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
        }

        return;
      }

      var x = 0,
          y = 0;

      if (time >= frames[frames.length - ScaleTimeline.ENTRIES]) {
        x = frames[frames.length + ScaleTimeline.PREV_X] * bone.data.scaleX;
        y = frames[frames.length + ScaleTimeline.PREV_Y] * bone.data.scaleY;
      } else {
        var frame = Animation.binarySearch(frames, time, ScaleTimeline.ENTRIES);
        x = frames[frame + ScaleTimeline.PREV_X];
        y = frames[frame + ScaleTimeline.PREV_Y];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / ScaleTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ScaleTimeline.PREV_TIME] - frameTime));
        x = (x + (frames[frame + ScaleTimeline.X] - x) * percent) * bone.data.scaleX;
        y = (y + (frames[frame + ScaleTimeline.Y] - y) * percent) * bone.data.scaleY;
      }

      if (alpha == 1) {
        if (blend == MixBlend.add) {
          bone.scaleX += x - bone.data.scaleX;
          bone.scaleY += y - bone.data.scaleY;
        } else {
          bone.scaleX = x;
          bone.scaleY = y;
        }
      } else {
        var bx = 0,
            by = 0;

        if (direction == MixDirection.mixOut) {
          switch (blend) {
            case MixBlend.setup:
              bx = bone.data.scaleX;
              by = bone.data.scaleY;
              bone.scaleX = bx + (Math.abs(x) * spine.MathUtils.signum(bx) - bx) * alpha;
              bone.scaleY = by + (Math.abs(y) * spine.MathUtils.signum(by) - by) * alpha;
              break;

            case MixBlend.first:
            case MixBlend.replace:
              bx = bone.scaleX;
              by = bone.scaleY;
              bone.scaleX = bx + (Math.abs(x) * spine.MathUtils.signum(bx) - bx) * alpha;
              bone.scaleY = by + (Math.abs(y) * spine.MathUtils.signum(by) - by) * alpha;
              break;

            case MixBlend.add:
              bx = bone.scaleX;
              by = bone.scaleY;
              bone.scaleX = bx + (Math.abs(x) * spine.MathUtils.signum(bx) - bone.data.scaleX) * alpha;
              bone.scaleY = by + (Math.abs(y) * spine.MathUtils.signum(by) - bone.data.scaleY) * alpha;
          }
        } else {
          switch (blend) {
            case MixBlend.setup:
              bx = Math.abs(bone.data.scaleX) * spine.MathUtils.signum(x);
              by = Math.abs(bone.data.scaleY) * spine.MathUtils.signum(y);
              bone.scaleX = bx + (x - bx) * alpha;
              bone.scaleY = by + (y - by) * alpha;
              break;

            case MixBlend.first:
            case MixBlend.replace:
              bx = Math.abs(bone.scaleX) * spine.MathUtils.signum(x);
              by = Math.abs(bone.scaleY) * spine.MathUtils.signum(y);
              bone.scaleX = bx + (x - bx) * alpha;
              bone.scaleY = by + (y - by) * alpha;
              break;

            case MixBlend.add:
              bx = spine.MathUtils.signum(x);
              by = spine.MathUtils.signum(y);
              bone.scaleX = Math.abs(bone.scaleX) * bx + (x - Math.abs(bone.data.scaleX) * bx) * alpha;
              bone.scaleY = Math.abs(bone.scaleY) * by + (y - Math.abs(bone.data.scaleY) * by) * alpha;
          }
        }
      }
    };

    return ScaleTimeline;
  }(TranslateTimeline);

  spine.ScaleTimeline = ScaleTimeline;

  var ShearTimeline = function (_super) {
    __extends(ShearTimeline, _super);

    function ShearTimeline(frameCount) {
      return _super.call(this, frameCount) || this;
    }

    ShearTimeline.prototype.getPropertyId = function () {
      return (TimelineType.shear << 24) + this.boneIndex;
    };

    ShearTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
      var frames = this.frames;
      var bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            bone.shearX = bone.data.shearX;
            bone.shearY = bone.data.shearY;
            return;

          case MixBlend.first:
            bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
            bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
        }

        return;
      }

      var x = 0,
          y = 0;

      if (time >= frames[frames.length - ShearTimeline.ENTRIES]) {
        x = frames[frames.length + ShearTimeline.PREV_X];
        y = frames[frames.length + ShearTimeline.PREV_Y];
      } else {
        var frame = Animation.binarySearch(frames, time, ShearTimeline.ENTRIES);
        x = frames[frame + ShearTimeline.PREV_X];
        y = frames[frame + ShearTimeline.PREV_Y];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / ShearTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ShearTimeline.PREV_TIME] - frameTime));
        x = x + (frames[frame + ShearTimeline.X] - x) * percent;
        y = y + (frames[frame + ShearTimeline.Y] - y) * percent;
      }

      switch (blend) {
        case MixBlend.setup:
          bone.shearX = bone.data.shearX + x * alpha;
          bone.shearY = bone.data.shearY + y * alpha;
          break;

        case MixBlend.first:
        case MixBlend.replace:
          bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
          bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
          break;

        case MixBlend.add:
          bone.shearX += x * alpha;
          bone.shearY += y * alpha;
      }
    };

    return ShearTimeline;
  }(TranslateTimeline);

  spine.ShearTimeline = ShearTimeline;

  var ColorTimeline = function (_super) {
    __extends(ColorTimeline, _super);

    function ColorTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount * ColorTimeline.ENTRIES);
      return _this;
    }

    ColorTimeline.prototype.getPropertyId = function () {
      return (TimelineType.color << 24) + this.slotIndex;
    };

    ColorTimeline.prototype.setFrame = function (frameIndex, time, r, g, b, a) {
      frameIndex *= ColorTimeline.ENTRIES;
      this.frames[frameIndex] = time;
      this.frames[frameIndex + ColorTimeline.R] = r;
      this.frames[frameIndex + ColorTimeline.G] = g;
      this.frames[frameIndex + ColorTimeline.B] = b;
      this.frames[frameIndex + ColorTimeline.A] = a;
    };

    ColorTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
      var slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      var frames = this.frames;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            slot.color.setFromColor(slot.data.color);
            return;

          case MixBlend.first:
            var color = slot.color,
                setup = slot.data.color;
            color.add((setup.r - color.r) * alpha, (setup.g - color.g) * alpha, (setup.b - color.b) * alpha, (setup.a - color.a) * alpha);
        }

        return;
      }

      var r = 0,
          g = 0,
          b = 0,
          a = 0;

      if (time >= frames[frames.length - ColorTimeline.ENTRIES]) {
        var i = frames.length;
        r = frames[i + ColorTimeline.PREV_R];
        g = frames[i + ColorTimeline.PREV_G];
        b = frames[i + ColorTimeline.PREV_B];
        a = frames[i + ColorTimeline.PREV_A];
      } else {
        var frame = Animation.binarySearch(frames, time, ColorTimeline.ENTRIES);
        r = frames[frame + ColorTimeline.PREV_R];
        g = frames[frame + ColorTimeline.PREV_G];
        b = frames[frame + ColorTimeline.PREV_B];
        a = frames[frame + ColorTimeline.PREV_A];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / ColorTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ColorTimeline.PREV_TIME] - frameTime));
        r += (frames[frame + ColorTimeline.R] - r) * percent;
        g += (frames[frame + ColorTimeline.G] - g) * percent;
        b += (frames[frame + ColorTimeline.B] - b) * percent;
        a += (frames[frame + ColorTimeline.A] - a) * percent;
      }

      if (alpha == 1) slot.color.set(r, g, b, a);else {
        var color = slot.color;
        if (blend == MixBlend.setup) color.setFromColor(slot.data.color);
        color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
      }
    };

    ColorTimeline.ENTRIES = 5;
    ColorTimeline.PREV_TIME = -5;
    ColorTimeline.PREV_R = -4;
    ColorTimeline.PREV_G = -3;
    ColorTimeline.PREV_B = -2;
    ColorTimeline.PREV_A = -1;
    ColorTimeline.R = 1;
    ColorTimeline.G = 2;
    ColorTimeline.B = 3;
    ColorTimeline.A = 4;
    return ColorTimeline;
  }(CurveTimeline);

  spine.ColorTimeline = ColorTimeline;

  var TwoColorTimeline = function (_super) {
    __extends(TwoColorTimeline, _super);

    function TwoColorTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount * TwoColorTimeline.ENTRIES);
      return _this;
    }

    TwoColorTimeline.prototype.getPropertyId = function () {
      return (TimelineType.twoColor << 24) + this.slotIndex;
    };

    TwoColorTimeline.prototype.setFrame = function (frameIndex, time, r, g, b, a, r2, g2, b2) {
      frameIndex *= TwoColorTimeline.ENTRIES;
      this.frames[frameIndex] = time;
      this.frames[frameIndex + TwoColorTimeline.R] = r;
      this.frames[frameIndex + TwoColorTimeline.G] = g;
      this.frames[frameIndex + TwoColorTimeline.B] = b;
      this.frames[frameIndex + TwoColorTimeline.A] = a;
      this.frames[frameIndex + TwoColorTimeline.R2] = r2;
      this.frames[frameIndex + TwoColorTimeline.G2] = g2;
      this.frames[frameIndex + TwoColorTimeline.B2] = b2;
    };

    TwoColorTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
      var slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      var frames = this.frames;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            slot.color.setFromColor(slot.data.color);
            slot.darkColor.setFromColor(slot.data.darkColor);
            return;

          case MixBlend.first:
            var light = slot.color,
                dark = slot.darkColor,
                setupLight = slot.data.color,
                setupDark = slot.data.darkColor;
            light.add((setupLight.r - light.r) * alpha, (setupLight.g - light.g) * alpha, (setupLight.b - light.b) * alpha, (setupLight.a - light.a) * alpha);
            dark.add((setupDark.r - dark.r) * alpha, (setupDark.g - dark.g) * alpha, (setupDark.b - dark.b) * alpha, 0);
        }

        return;
      }

      var r = 0,
          g = 0,
          b = 0,
          a = 0,
          r2 = 0,
          g2 = 0,
          b2 = 0;

      if (time >= frames[frames.length - TwoColorTimeline.ENTRIES]) {
        var i = frames.length;
        r = frames[i + TwoColorTimeline.PREV_R];
        g = frames[i + TwoColorTimeline.PREV_G];
        b = frames[i + TwoColorTimeline.PREV_B];
        a = frames[i + TwoColorTimeline.PREV_A];
        r2 = frames[i + TwoColorTimeline.PREV_R2];
        g2 = frames[i + TwoColorTimeline.PREV_G2];
        b2 = frames[i + TwoColorTimeline.PREV_B2];
      } else {
        var frame = Animation.binarySearch(frames, time, TwoColorTimeline.ENTRIES);
        r = frames[frame + TwoColorTimeline.PREV_R];
        g = frames[frame + TwoColorTimeline.PREV_G];
        b = frames[frame + TwoColorTimeline.PREV_B];
        a = frames[frame + TwoColorTimeline.PREV_A];
        r2 = frames[frame + TwoColorTimeline.PREV_R2];
        g2 = frames[frame + TwoColorTimeline.PREV_G2];
        b2 = frames[frame + TwoColorTimeline.PREV_B2];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / TwoColorTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TwoColorTimeline.PREV_TIME] - frameTime));
        r += (frames[frame + TwoColorTimeline.R] - r) * percent;
        g += (frames[frame + TwoColorTimeline.G] - g) * percent;
        b += (frames[frame + TwoColorTimeline.B] - b) * percent;
        a += (frames[frame + TwoColorTimeline.A] - a) * percent;
        r2 += (frames[frame + TwoColorTimeline.R2] - r2) * percent;
        g2 += (frames[frame + TwoColorTimeline.G2] - g2) * percent;
        b2 += (frames[frame + TwoColorTimeline.B2] - b2) * percent;
      }

      if (alpha == 1) {
        slot.color.set(r, g, b, a);
        slot.darkColor.set(r2, g2, b2, 1);
      } else {
        var light = slot.color,
            dark = slot.darkColor;

        if (blend == MixBlend.setup) {
          light.setFromColor(slot.data.color);
          dark.setFromColor(slot.data.darkColor);
        }

        light.add((r - light.r) * alpha, (g - light.g) * alpha, (b - light.b) * alpha, (a - light.a) * alpha);
        dark.add((r2 - dark.r) * alpha, (g2 - dark.g) * alpha, (b2 - dark.b) * alpha, 0);
      }
    };

    TwoColorTimeline.ENTRIES = 8;
    TwoColorTimeline.PREV_TIME = -8;
    TwoColorTimeline.PREV_R = -7;
    TwoColorTimeline.PREV_G = -6;
    TwoColorTimeline.PREV_B = -5;
    TwoColorTimeline.PREV_A = -4;
    TwoColorTimeline.PREV_R2 = -3;
    TwoColorTimeline.PREV_G2 = -2;
    TwoColorTimeline.PREV_B2 = -1;
    TwoColorTimeline.R = 1;
    TwoColorTimeline.G = 2;
    TwoColorTimeline.B = 3;
    TwoColorTimeline.A = 4;
    TwoColorTimeline.R2 = 5;
    TwoColorTimeline.G2 = 6;
    TwoColorTimeline.B2 = 7;
    return TwoColorTimeline;
  }(CurveTimeline);

  spine.TwoColorTimeline = TwoColorTimeline;

  var AttachmentTimeline = function () {
    function AttachmentTimeline(frameCount) {
      this.frames = spine.Utils.newFloatArray(frameCount);
      this.attachmentNames = new Array(frameCount);
    }

    AttachmentTimeline.prototype.getPropertyId = function () {
      return (TimelineType.attachment << 24) + this.slotIndex;
    };

    AttachmentTimeline.prototype.getFrameCount = function () {
      return this.frames.length;
    };

    AttachmentTimeline.prototype.setFrame = function (frameIndex, time, attachmentName) {
      this.frames[frameIndex] = time;
      this.attachmentNames[frameIndex] = attachmentName;
    };

    AttachmentTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
      var slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;

      if (direction == MixDirection.mixOut) {
        if (blend == MixBlend.setup) this.setAttachment(skeleton, slot, slot.data.attachmentName);
        return;
      }

      var frames = this.frames;

      if (time < frames[0]) {
        if (blend == MixBlend.setup || blend == MixBlend.first) this.setAttachment(skeleton, slot, slot.data.attachmentName);
        return;
      }

      var frameIndex = 0;
      if (time >= frames[frames.length - 1]) frameIndex = frames.length - 1;else frameIndex = Animation.binarySearch(frames, time, 1) - 1;
      var attachmentName = this.attachmentNames[frameIndex];
      skeleton.slots[this.slotIndex].setAttachment(attachmentName == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
    };

    AttachmentTimeline.prototype.setAttachment = function (skeleton, slot, attachmentName) {
      slot.attachment = attachmentName == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName);
    };

    return AttachmentTimeline;
  }();

  spine.AttachmentTimeline = AttachmentTimeline;
  var zeros = null;

  var DeformTimeline = function (_super) {
    __extends(DeformTimeline, _super);

    function DeformTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount);
      _this.frameVertices = new Array(frameCount);
      if (zeros == null) zeros = spine.Utils.newFloatArray(64);
      return _this;
    }

    DeformTimeline.prototype.getPropertyId = function () {
      return (TimelineType.deform << 27) + +this.attachment.id + this.slotIndex;
    };

    DeformTimeline.prototype.setFrame = function (frameIndex, time, vertices) {
      this.frames[frameIndex] = time;
      this.frameVertices[frameIndex] = vertices;
    };

    DeformTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      var slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      var slotAttachment = slot.getAttachment();
      if (!(slotAttachment instanceof spine.VertexAttachment) || !(slotAttachment.deformAttachment == this.attachment)) return;
      var deformArray = slot.deform;
      if (deformArray.length == 0) blend = MixBlend.setup;
      var frameVertices = this.frameVertices;
      var vertexCount = frameVertices[0].length;
      var frames = this.frames;

      if (time < frames[0]) {
        var vertexAttachment = slotAttachment;

        switch (blend) {
          case MixBlend.setup:
            deformArray.length = 0;
            return;

          case MixBlend.first:
            if (alpha == 1) {
              deformArray.length = 0;
              break;
            }

            var deform_1 = spine.Utils.setArraySize(deformArray, vertexCount);

            if (vertexAttachment.bones == null) {
              var setupVertices = vertexAttachment.vertices;

              for (var i = 0; i < vertexCount; i++) {
                deform_1[i] += (setupVertices[i] - deform_1[i]) * alpha;
              }
            } else {
              alpha = 1 - alpha;

              for (var i = 0; i < vertexCount; i++) {
                deform_1[i] *= alpha;
              }
            }

        }

        return;
      }

      var deform = spine.Utils.setArraySize(deformArray, vertexCount);

      if (time >= frames[frames.length - 1]) {
        var lastVertices = frameVertices[frames.length - 1];

        if (alpha == 1) {
          if (blend == MixBlend.add) {
            var vertexAttachment = slotAttachment;

            if (vertexAttachment.bones == null) {
              var setupVertices = vertexAttachment.vertices;

              for (var i_1 = 0; i_1 < vertexCount; i_1++) {
                deform[i_1] += lastVertices[i_1] - setupVertices[i_1];
              }
            } else {
              for (var i_2 = 0; i_2 < vertexCount; i_2++) {
                deform[i_2] += lastVertices[i_2];
              }
            }
          } else {
            spine.Utils.arrayCopy(lastVertices, 0, deform, 0, vertexCount);
          }
        } else {
          switch (blend) {
            case MixBlend.setup:
              {
                var vertexAttachment_1 = slotAttachment;

                if (vertexAttachment_1.bones == null) {
                  var setupVertices = vertexAttachment_1.vertices;

                  for (var i_3 = 0; i_3 < vertexCount; i_3++) {
                    var setup = setupVertices[i_3];
                    deform[i_3] = setup + (lastVertices[i_3] - setup) * alpha;
                  }
                } else {
                  for (var i_4 = 0; i_4 < vertexCount; i_4++) {
                    deform[i_4] = lastVertices[i_4] * alpha;
                  }
                }

                break;
              }

            case MixBlend.first:
            case MixBlend.replace:
              for (var i_5 = 0; i_5 < vertexCount; i_5++) {
                deform[i_5] += (lastVertices[i_5] - deform[i_5]) * alpha;
              }

              break;

            case MixBlend.add:
              var vertexAttachment = slotAttachment;

              if (vertexAttachment.bones == null) {
                var setupVertices = vertexAttachment.vertices;

                for (var i_6 = 0; i_6 < vertexCount; i_6++) {
                  deform[i_6] += (lastVertices[i_6] - setupVertices[i_6]) * alpha;
                }
              } else {
                for (var i_7 = 0; i_7 < vertexCount; i_7++) {
                  deform[i_7] += lastVertices[i_7] * alpha;
                }
              }

          }
        }

        return;
      }

      var frame = Animation.binarySearch(frames, time);
      var prevVertices = frameVertices[frame - 1];
      var nextVertices = frameVertices[frame];
      var frameTime = frames[frame];
      var percent = this.getCurvePercent(frame - 1, 1 - (time - frameTime) / (frames[frame - 1] - frameTime));

      if (alpha == 1) {
        if (blend == MixBlend.add) {
          var vertexAttachment = slotAttachment;

          if (vertexAttachment.bones == null) {
            var setupVertices = vertexAttachment.vertices;

            for (var i_8 = 0; i_8 < vertexCount; i_8++) {
              var prev = prevVertices[i_8];
              deform[i_8] += prev + (nextVertices[i_8] - prev) * percent - setupVertices[i_8];
            }
          } else {
            for (var i_9 = 0; i_9 < vertexCount; i_9++) {
              var prev = prevVertices[i_9];
              deform[i_9] += prev + (nextVertices[i_9] - prev) * percent;
            }
          }
        } else {
          for (var i_10 = 0; i_10 < vertexCount; i_10++) {
            var prev = prevVertices[i_10];
            deform[i_10] = prev + (nextVertices[i_10] - prev) * percent;
          }
        }
      } else {
        switch (blend) {
          case MixBlend.setup:
            {
              var vertexAttachment_2 = slotAttachment;

              if (vertexAttachment_2.bones == null) {
                var setupVertices = vertexAttachment_2.vertices;

                for (var i_11 = 0; i_11 < vertexCount; i_11++) {
                  var prev = prevVertices[i_11],
                      setup = setupVertices[i_11];
                  deform[i_11] = setup + (prev + (nextVertices[i_11] - prev) * percent - setup) * alpha;
                }
              } else {
                for (var i_12 = 0; i_12 < vertexCount; i_12++) {
                  var prev = prevVertices[i_12];
                  deform[i_12] = (prev + (nextVertices[i_12] - prev) * percent) * alpha;
                }
              }

              break;
            }

          case MixBlend.first:
          case MixBlend.replace:
            for (var i_13 = 0; i_13 < vertexCount; i_13++) {
              var prev = prevVertices[i_13];
              deform[i_13] += (prev + (nextVertices[i_13] - prev) * percent - deform[i_13]) * alpha;
            }

            break;

          case MixBlend.add:
            var vertexAttachment = slotAttachment;

            if (vertexAttachment.bones == null) {
              var setupVertices = vertexAttachment.vertices;

              for (var i_14 = 0; i_14 < vertexCount; i_14++) {
                var prev = prevVertices[i_14];
                deform[i_14] += (prev + (nextVertices[i_14] - prev) * percent - setupVertices[i_14]) * alpha;
              }
            } else {
              for (var i_15 = 0; i_15 < vertexCount; i_15++) {
                var prev = prevVertices[i_15];
                deform[i_15] += (prev + (nextVertices[i_15] - prev) * percent) * alpha;
              }
            }

        }
      }
    };

    return DeformTimeline;
  }(CurveTimeline);

  spine.DeformTimeline = DeformTimeline;

  var EventTimeline = function () {
    function EventTimeline(frameCount) {
      this.frames = spine.Utils.newFloatArray(frameCount);
      this.events = new Array(frameCount);
    }

    EventTimeline.prototype.getPropertyId = function () {
      return TimelineType.event << 24;
    };

    EventTimeline.prototype.getFrameCount = function () {
      return this.frames.length;
    };

    EventTimeline.prototype.setFrame = function (frameIndex, event) {
      this.frames[frameIndex] = event.time;
      this.events[frameIndex] = event;
    };

    EventTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      if (firedEvents == null) return;
      var frames = this.frames;
      var frameCount = this.frames.length;

      if (lastTime > time) {
        this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, blend, direction);
        lastTime = -1;
      } else if (lastTime >= frames[frameCount - 1]) return;

      if (time < frames[0]) return;
      var frame = 0;
      if (lastTime < frames[0]) frame = 0;else {
        frame = Animation.binarySearch(frames, lastTime);
        var frameTime = frames[frame];

        while (frame > 0) {
          if (frames[frame - 1] != frameTime) break;
          frame--;
        }
      }

      for (; frame < frameCount && time >= frames[frame]; frame++) {
        firedEvents.push(this.events[frame]);
      }
    };

    return EventTimeline;
  }();

  spine.EventTimeline = EventTimeline;

  var DrawOrderTimeline = function () {
    function DrawOrderTimeline(frameCount) {
      this.frames = spine.Utils.newFloatArray(frameCount);
      this.drawOrders = new Array(frameCount);
    }

    DrawOrderTimeline.prototype.getPropertyId = function () {
      return TimelineType.drawOrder << 24;
    };

    DrawOrderTimeline.prototype.getFrameCount = function () {
      return this.frames.length;
    };

    DrawOrderTimeline.prototype.setFrame = function (frameIndex, time, drawOrder) {
      this.frames[frameIndex] = time;
      this.drawOrders[frameIndex] = drawOrder;
    };

    DrawOrderTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      var drawOrder = skeleton.drawOrder;
      var slots = skeleton.slots;

      if (direction == MixDirection.mixOut) {
        if (blend == MixBlend.setup) spine.Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
        return;
      }

      var frames = this.frames;

      if (time < frames[0]) {
        if (blend == MixBlend.setup || blend == MixBlend.first) spine.Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
        return;
      }

      var frame = 0;
      if (time >= frames[frames.length - 1]) frame = frames.length - 1;else frame = Animation.binarySearch(frames, time) - 1;
      var drawOrderToSetupIndex = this.drawOrders[frame];
      if (drawOrderToSetupIndex == null) spine.Utils.arrayCopy(slots, 0, drawOrder, 0, slots.length);else {
        for (var i = 0, n = drawOrderToSetupIndex.length; i < n; i++) {
          drawOrder[i] = slots[drawOrderToSetupIndex[i]];
        }
      }
    };

    return DrawOrderTimeline;
  }();

  spine.DrawOrderTimeline = DrawOrderTimeline;

  var IkConstraintTimeline = function (_super) {
    __extends(IkConstraintTimeline, _super);

    function IkConstraintTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount * IkConstraintTimeline.ENTRIES);
      return _this;
    }

    IkConstraintTimeline.prototype.getPropertyId = function () {
      return (TimelineType.ikConstraint << 24) + this.ikConstraintIndex;
    };

    IkConstraintTimeline.prototype.setFrame = function (frameIndex, time, mix, softness, bendDirection, compress, stretch) {
      frameIndex *= IkConstraintTimeline.ENTRIES;
      this.frames[frameIndex] = time;
      this.frames[frameIndex + IkConstraintTimeline.MIX] = mix;
      this.frames[frameIndex + IkConstraintTimeline.SOFTNESS] = softness;
      this.frames[frameIndex + IkConstraintTimeline.BEND_DIRECTION] = bendDirection;
      this.frames[frameIndex + IkConstraintTimeline.COMPRESS] = compress ? 1 : 0;
      this.frames[frameIndex + IkConstraintTimeline.STRETCH] = stretch ? 1 : 0;
    };

    IkConstraintTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      var frames = this.frames;
      var constraint = skeleton.ikConstraints[this.ikConstraintIndex];
      if (!constraint.active) return;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            constraint.mix = constraint.data.mix;
            constraint.softness = constraint.data.softness;
            constraint.bendDirection = constraint.data.bendDirection;
            constraint.compress = constraint.data.compress;
            constraint.stretch = constraint.data.stretch;
            return;

          case MixBlend.first:
            constraint.mix += (constraint.data.mix - constraint.mix) * alpha;
            constraint.softness += (constraint.data.softness - constraint.softness) * alpha;
            constraint.bendDirection = constraint.data.bendDirection;
            constraint.compress = constraint.data.compress;
            constraint.stretch = constraint.data.stretch;
        }

        return;
      }

      if (time >= frames[frames.length - IkConstraintTimeline.ENTRIES]) {
        if (blend == MixBlend.setup) {
          constraint.mix = constraint.data.mix + (frames[frames.length + IkConstraintTimeline.PREV_MIX] - constraint.data.mix) * alpha;
          constraint.softness = constraint.data.softness + (frames[frames.length + IkConstraintTimeline.PREV_SOFTNESS] - constraint.data.softness) * alpha;

          if (direction == MixDirection.mixOut) {
            constraint.bendDirection = constraint.data.bendDirection;
            constraint.compress = constraint.data.compress;
            constraint.stretch = constraint.data.stretch;
          } else {
            constraint.bendDirection = frames[frames.length + IkConstraintTimeline.PREV_BEND_DIRECTION];
            constraint.compress = frames[frames.length + IkConstraintTimeline.PREV_COMPRESS] != 0;
            constraint.stretch = frames[frames.length + IkConstraintTimeline.PREV_STRETCH] != 0;
          }
        } else {
          constraint.mix += (frames[frames.length + IkConstraintTimeline.PREV_MIX] - constraint.mix) * alpha;
          constraint.softness += (frames[frames.length + IkConstraintTimeline.PREV_SOFTNESS] - constraint.softness) * alpha;

          if (direction == MixDirection.mixIn) {
            constraint.bendDirection = frames[frames.length + IkConstraintTimeline.PREV_BEND_DIRECTION];
            constraint.compress = frames[frames.length + IkConstraintTimeline.PREV_COMPRESS] != 0;
            constraint.stretch = frames[frames.length + IkConstraintTimeline.PREV_STRETCH] != 0;
          }
        }

        return;
      }

      var frame = Animation.binarySearch(frames, time, IkConstraintTimeline.ENTRIES);
      var mix = frames[frame + IkConstraintTimeline.PREV_MIX];
      var softness = frames[frame + IkConstraintTimeline.PREV_SOFTNESS];
      var frameTime = frames[frame];
      var percent = this.getCurvePercent(frame / IkConstraintTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + IkConstraintTimeline.PREV_TIME] - frameTime));

      if (blend == MixBlend.setup) {
        constraint.mix = constraint.data.mix + (mix + (frames[frame + IkConstraintTimeline.MIX] - mix) * percent - constraint.data.mix) * alpha;
        constraint.softness = constraint.data.softness + (softness + (frames[frame + IkConstraintTimeline.SOFTNESS] - softness) * percent - constraint.data.softness) * alpha;

        if (direction == MixDirection.mixOut) {
          constraint.bendDirection = constraint.data.bendDirection;
          constraint.compress = constraint.data.compress;
          constraint.stretch = constraint.data.stretch;
        } else {
          constraint.bendDirection = frames[frame + IkConstraintTimeline.PREV_BEND_DIRECTION];
          constraint.compress = frames[frame + IkConstraintTimeline.PREV_COMPRESS] != 0;
          constraint.stretch = frames[frame + IkConstraintTimeline.PREV_STRETCH] != 0;
        }
      } else {
        constraint.mix += (mix + (frames[frame + IkConstraintTimeline.MIX] - mix) * percent - constraint.mix) * alpha;
        constraint.softness += (softness + (frames[frame + IkConstraintTimeline.SOFTNESS] - softness) * percent - constraint.softness) * alpha;

        if (direction == MixDirection.mixIn) {
          constraint.bendDirection = frames[frame + IkConstraintTimeline.PREV_BEND_DIRECTION];
          constraint.compress = frames[frame + IkConstraintTimeline.PREV_COMPRESS] != 0;
          constraint.stretch = frames[frame + IkConstraintTimeline.PREV_STRETCH] != 0;
        }
      }
    };

    IkConstraintTimeline.ENTRIES = 6;
    IkConstraintTimeline.PREV_TIME = -6;
    IkConstraintTimeline.PREV_MIX = -5;
    IkConstraintTimeline.PREV_SOFTNESS = -4;
    IkConstraintTimeline.PREV_BEND_DIRECTION = -3;
    IkConstraintTimeline.PREV_COMPRESS = -2;
    IkConstraintTimeline.PREV_STRETCH = -1;
    IkConstraintTimeline.MIX = 1;
    IkConstraintTimeline.SOFTNESS = 2;
    IkConstraintTimeline.BEND_DIRECTION = 3;
    IkConstraintTimeline.COMPRESS = 4;
    IkConstraintTimeline.STRETCH = 5;
    return IkConstraintTimeline;
  }(CurveTimeline);

  spine.IkConstraintTimeline = IkConstraintTimeline;

  var TransformConstraintTimeline = function (_super) {
    __extends(TransformConstraintTimeline, _super);

    function TransformConstraintTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount * TransformConstraintTimeline.ENTRIES);
      return _this;
    }

    TransformConstraintTimeline.prototype.getPropertyId = function () {
      return (TimelineType.transformConstraint << 24) + this.transformConstraintIndex;
    };

    TransformConstraintTimeline.prototype.setFrame = function (frameIndex, time, rotateMix, translateMix, scaleMix, shearMix) {
      frameIndex *= TransformConstraintTimeline.ENTRIES;
      this.frames[frameIndex] = time;
      this.frames[frameIndex + TransformConstraintTimeline.ROTATE] = rotateMix;
      this.frames[frameIndex + TransformConstraintTimeline.TRANSLATE] = translateMix;
      this.frames[frameIndex + TransformConstraintTimeline.SCALE] = scaleMix;
      this.frames[frameIndex + TransformConstraintTimeline.SHEAR] = shearMix;
    };

    TransformConstraintTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      var frames = this.frames;
      var constraint = skeleton.transformConstraints[this.transformConstraintIndex];
      if (!constraint.active) return;

      if (time < frames[0]) {
        var data = constraint.data;

        switch (blend) {
          case MixBlend.setup:
            constraint.rotateMix = data.rotateMix;
            constraint.translateMix = data.translateMix;
            constraint.scaleMix = data.scaleMix;
            constraint.shearMix = data.shearMix;
            return;

          case MixBlend.first:
            constraint.rotateMix += (data.rotateMix - constraint.rotateMix) * alpha;
            constraint.translateMix += (data.translateMix - constraint.translateMix) * alpha;
            constraint.scaleMix += (data.scaleMix - constraint.scaleMix) * alpha;
            constraint.shearMix += (data.shearMix - constraint.shearMix) * alpha;
        }

        return;
      }

      var rotate = 0,
          translate = 0,
          scale = 0,
          shear = 0;

      if (time >= frames[frames.length - TransformConstraintTimeline.ENTRIES]) {
        var i = frames.length;
        rotate = frames[i + TransformConstraintTimeline.PREV_ROTATE];
        translate = frames[i + TransformConstraintTimeline.PREV_TRANSLATE];
        scale = frames[i + TransformConstraintTimeline.PREV_SCALE];
        shear = frames[i + TransformConstraintTimeline.PREV_SHEAR];
      } else {
        var frame = Animation.binarySearch(frames, time, TransformConstraintTimeline.ENTRIES);
        rotate = frames[frame + TransformConstraintTimeline.PREV_ROTATE];
        translate = frames[frame + TransformConstraintTimeline.PREV_TRANSLATE];
        scale = frames[frame + TransformConstraintTimeline.PREV_SCALE];
        shear = frames[frame + TransformConstraintTimeline.PREV_SHEAR];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / TransformConstraintTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TransformConstraintTimeline.PREV_TIME] - frameTime));
        rotate += (frames[frame + TransformConstraintTimeline.ROTATE] - rotate) * percent;
        translate += (frames[frame + TransformConstraintTimeline.TRANSLATE] - translate) * percent;
        scale += (frames[frame + TransformConstraintTimeline.SCALE] - scale) * percent;
        shear += (frames[frame + TransformConstraintTimeline.SHEAR] - shear) * percent;
      }

      if (blend == MixBlend.setup) {
        var data = constraint.data;
        constraint.rotateMix = data.rotateMix + (rotate - data.rotateMix) * alpha;
        constraint.translateMix = data.translateMix + (translate - data.translateMix) * alpha;
        constraint.scaleMix = data.scaleMix + (scale - data.scaleMix) * alpha;
        constraint.shearMix = data.shearMix + (shear - data.shearMix) * alpha;
      } else {
        constraint.rotateMix += (rotate - constraint.rotateMix) * alpha;
        constraint.translateMix += (translate - constraint.translateMix) * alpha;
        constraint.scaleMix += (scale - constraint.scaleMix) * alpha;
        constraint.shearMix += (shear - constraint.shearMix) * alpha;
      }
    };

    TransformConstraintTimeline.ENTRIES = 5;
    TransformConstraintTimeline.PREV_TIME = -5;
    TransformConstraintTimeline.PREV_ROTATE = -4;
    TransformConstraintTimeline.PREV_TRANSLATE = -3;
    TransformConstraintTimeline.PREV_SCALE = -2;
    TransformConstraintTimeline.PREV_SHEAR = -1;
    TransformConstraintTimeline.ROTATE = 1;
    TransformConstraintTimeline.TRANSLATE = 2;
    TransformConstraintTimeline.SCALE = 3;
    TransformConstraintTimeline.SHEAR = 4;
    return TransformConstraintTimeline;
  }(CurveTimeline);

  spine.TransformConstraintTimeline = TransformConstraintTimeline;

  var PathConstraintPositionTimeline = function (_super) {
    __extends(PathConstraintPositionTimeline, _super);

    function PathConstraintPositionTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount * PathConstraintPositionTimeline.ENTRIES);
      return _this;
    }

    PathConstraintPositionTimeline.prototype.getPropertyId = function () {
      return (TimelineType.pathConstraintPosition << 24) + this.pathConstraintIndex;
    };

    PathConstraintPositionTimeline.prototype.setFrame = function (frameIndex, time, value) {
      frameIndex *= PathConstraintPositionTimeline.ENTRIES;
      this.frames[frameIndex] = time;
      this.frames[frameIndex + PathConstraintPositionTimeline.VALUE] = value;
    };

    PathConstraintPositionTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      var frames = this.frames;
      var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
      if (!constraint.active) return;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            constraint.position = constraint.data.position;
            return;

          case MixBlend.first:
            constraint.position += (constraint.data.position - constraint.position) * alpha;
        }

        return;
      }

      var position = 0;
      if (time >= frames[frames.length - PathConstraintPositionTimeline.ENTRIES]) position = frames[frames.length + PathConstraintPositionTimeline.PREV_VALUE];else {
        var frame = Animation.binarySearch(frames, time, PathConstraintPositionTimeline.ENTRIES);
        position = frames[frame + PathConstraintPositionTimeline.PREV_VALUE];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / PathConstraintPositionTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintPositionTimeline.PREV_TIME] - frameTime));
        position += (frames[frame + PathConstraintPositionTimeline.VALUE] - position) * percent;
      }
      if (blend == MixBlend.setup) constraint.position = constraint.data.position + (position - constraint.data.position) * alpha;else constraint.position += (position - constraint.position) * alpha;
    };

    PathConstraintPositionTimeline.ENTRIES = 2;
    PathConstraintPositionTimeline.PREV_TIME = -2;
    PathConstraintPositionTimeline.PREV_VALUE = -1;
    PathConstraintPositionTimeline.VALUE = 1;
    return PathConstraintPositionTimeline;
  }(CurveTimeline);

  spine.PathConstraintPositionTimeline = PathConstraintPositionTimeline;

  var PathConstraintSpacingTimeline = function (_super) {
    __extends(PathConstraintSpacingTimeline, _super);

    function PathConstraintSpacingTimeline(frameCount) {
      return _super.call(this, frameCount) || this;
    }

    PathConstraintSpacingTimeline.prototype.getPropertyId = function () {
      return (TimelineType.pathConstraintSpacing << 24) + this.pathConstraintIndex;
    };

    PathConstraintSpacingTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      var frames = this.frames;
      var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
      if (!constraint.active) return;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            constraint.spacing = constraint.data.spacing;
            return;

          case MixBlend.first:
            constraint.spacing += (constraint.data.spacing - constraint.spacing) * alpha;
        }

        return;
      }

      var spacing = 0;
      if (time >= frames[frames.length - PathConstraintSpacingTimeline.ENTRIES]) spacing = frames[frames.length + PathConstraintSpacingTimeline.PREV_VALUE];else {
        var frame = Animation.binarySearch(frames, time, PathConstraintSpacingTimeline.ENTRIES);
        spacing = frames[frame + PathConstraintSpacingTimeline.PREV_VALUE];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / PathConstraintSpacingTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintSpacingTimeline.PREV_TIME] - frameTime));
        spacing += (frames[frame + PathConstraintSpacingTimeline.VALUE] - spacing) * percent;
      }
      if (blend == MixBlend.setup) constraint.spacing = constraint.data.spacing + (spacing - constraint.data.spacing) * alpha;else constraint.spacing += (spacing - constraint.spacing) * alpha;
    };

    return PathConstraintSpacingTimeline;
  }(PathConstraintPositionTimeline);

  spine.PathConstraintSpacingTimeline = PathConstraintSpacingTimeline;

  var PathConstraintMixTimeline = function (_super) {
    __extends(PathConstraintMixTimeline, _super);

    function PathConstraintMixTimeline(frameCount) {
      var _this = _super.call(this, frameCount) || this;

      _this.frames = spine.Utils.newFloatArray(frameCount * PathConstraintMixTimeline.ENTRIES);
      return _this;
    }

    PathConstraintMixTimeline.prototype.getPropertyId = function () {
      return (TimelineType.pathConstraintMix << 24) + this.pathConstraintIndex;
    };

    PathConstraintMixTimeline.prototype.setFrame = function (frameIndex, time, rotateMix, translateMix) {
      frameIndex *= PathConstraintMixTimeline.ENTRIES;
      this.frames[frameIndex] = time;
      this.frames[frameIndex + PathConstraintMixTimeline.ROTATE] = rotateMix;
      this.frames[frameIndex + PathConstraintMixTimeline.TRANSLATE] = translateMix;
    };

    PathConstraintMixTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      var frames = this.frames;
      var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
      if (!constraint.active) return;

      if (time < frames[0]) {
        switch (blend) {
          case MixBlend.setup:
            constraint.rotateMix = constraint.data.rotateMix;
            constraint.translateMix = constraint.data.translateMix;
            return;

          case MixBlend.first:
            constraint.rotateMix += (constraint.data.rotateMix - constraint.rotateMix) * alpha;
            constraint.translateMix += (constraint.data.translateMix - constraint.translateMix) * alpha;
        }

        return;
      }

      var rotate = 0,
          translate = 0;

      if (time >= frames[frames.length - PathConstraintMixTimeline.ENTRIES]) {
        rotate = frames[frames.length + PathConstraintMixTimeline.PREV_ROTATE];
        translate = frames[frames.length + PathConstraintMixTimeline.PREV_TRANSLATE];
      } else {
        var frame = Animation.binarySearch(frames, time, PathConstraintMixTimeline.ENTRIES);
        rotate = frames[frame + PathConstraintMixTimeline.PREV_ROTATE];
        translate = frames[frame + PathConstraintMixTimeline.PREV_TRANSLATE];
        var frameTime = frames[frame];
        var percent = this.getCurvePercent(frame / PathConstraintMixTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintMixTimeline.PREV_TIME] - frameTime));
        rotate += (frames[frame + PathConstraintMixTimeline.ROTATE] - rotate) * percent;
        translate += (frames[frame + PathConstraintMixTimeline.TRANSLATE] - translate) * percent;
      }

      if (blend == MixBlend.setup) {
        constraint.rotateMix = constraint.data.rotateMix + (rotate - constraint.data.rotateMix) * alpha;
        constraint.translateMix = constraint.data.translateMix + (translate - constraint.data.translateMix) * alpha;
      } else {
        constraint.rotateMix += (rotate - constraint.rotateMix) * alpha;
        constraint.translateMix += (translate - constraint.translateMix) * alpha;
      }
    };

    PathConstraintMixTimeline.ENTRIES = 3;
    PathConstraintMixTimeline.PREV_TIME = -3;
    PathConstraintMixTimeline.PREV_ROTATE = -2;
    PathConstraintMixTimeline.PREV_TRANSLATE = -1;
    PathConstraintMixTimeline.ROTATE = 1;
    PathConstraintMixTimeline.TRANSLATE = 2;
    return PathConstraintMixTimeline;
  }(CurveTimeline);

  spine.PathConstraintMixTimeline = PathConstraintMixTimeline;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var AnimationState = function () {
    function AnimationState(data) {
      this.tracks = new Array();
      this.timeScale = 1;
      this.unkeyedState = 0;
      this.events = new Array();
      this.listeners = new Array();
      this.queue = new EventQueue(this);
      this.propertyIDs = new spine.IntSet();
      this.animationsChanged = false;
      this.trackEntryPool = new spine.Pool(function () {
        return new TrackEntry();
      });
      this.data = data;
    }

    AnimationState.prototype.update = function (delta) {
      delta *= this.timeScale;
      var tracks = this.tracks;

      for (var i = 0, n = tracks.length; i < n; i++) {
        var current = tracks[i];
        if (current == null) continue;
        current.animationLast = current.nextAnimationLast;
        current.trackLast = current.nextTrackLast;
        var currentDelta = delta * current.timeScale;

        if (current.delay > 0) {
          current.delay -= currentDelta;
          if (current.delay > 0) continue;
          currentDelta = -current.delay;
          current.delay = 0;
        }

        var next = current.next;

        if (next != null) {
          var nextTime = current.trackLast - next.delay;

          if (nextTime >= 0) {
            next.delay = 0;
            next.trackTime += current.timeScale == 0 ? 0 : (nextTime / current.timeScale + delta) * next.timeScale;
            current.trackTime += currentDelta;
            this.setCurrent(i, next, true);

            while (next.mixingFrom != null) {
              next.mixTime += delta;
              next = next.mixingFrom;
            }

            continue;
          }
        } else if (current.trackLast >= current.trackEnd && current.mixingFrom == null) {
          tracks[i] = null;
          this.queue.end(current);
          this.disposeNext(current);
          continue;
        }

        if (current.mixingFrom != null && this.updateMixingFrom(current, delta)) {
          var from = current.mixingFrom;
          current.mixingFrom = null;
          if (from != null) from.mixingTo = null;

          while (from != null) {
            this.queue.end(from);
            from = from.mixingFrom;
          }
        }

        current.trackTime += currentDelta;
      }

      this.queue.drain();
    };

    AnimationState.prototype.updateMixingFrom = function (to, delta) {
      var from = to.mixingFrom;
      if (from == null) return true;
      var finished = this.updateMixingFrom(from, delta);
      from.animationLast = from.nextAnimationLast;
      from.trackLast = from.nextTrackLast;

      if (to.mixTime > 0 && to.mixTime >= to.mixDuration) {
        if (from.totalAlpha == 0 || to.mixDuration == 0) {
          to.mixingFrom = from.mixingFrom;
          if (from.mixingFrom != null) from.mixingFrom.mixingTo = to;
          to.interruptAlpha = from.interruptAlpha;
          this.queue.end(from);
        }

        return finished;
      }

      from.trackTime += delta * from.timeScale;
      to.mixTime += delta;
      return false;
    };

    AnimationState.prototype.apply = function (skeleton) {
      if (skeleton == null) throw new Error("skeleton cannot be null.");
      if (this.animationsChanged) this._animationsChanged();
      var events = this.events;
      var tracks = this.tracks;
      var applied = false;

      for (var i_16 = 0, n_1 = tracks.length; i_16 < n_1; i_16++) {
        var current = tracks[i_16];
        if (current == null || current.delay > 0) continue;
        applied = true;
        var blend = i_16 == 0 ? spine.MixBlend.first : current.mixBlend;
        var mix = current.alpha;
        if (current.mixingFrom != null) mix *= this.applyMixingFrom(current, skeleton, blend);else if (current.trackTime >= current.trackEnd && current.next == null) mix = 0;
        var animationLast = current.animationLast,
            animationTime = current.getAnimationTime();
        var timelineCount = current.animation.timelines.length;
        var timelines = current.animation.timelines;

        if (i_16 == 0 && mix == 1 || blend == spine.MixBlend.add) {
          for (var ii = 0; ii < timelineCount; ii++) {
            spine.Utils.webkit602BugfixHelper(mix, blend);
            var timeline = timelines[ii];
            if (timeline instanceof spine.AttachmentTimeline) this.applyAttachmentTimeline(timeline, skeleton, animationTime, blend, true);else timeline.apply(skeleton, animationLast, animationTime, events, mix, blend, spine.MixDirection.mixIn);
          }
        } else {
          var timelineMode = current.timelineMode;
          var firstFrame = current.timelinesRotation.length == 0;
          if (firstFrame) spine.Utils.setArraySize(current.timelinesRotation, timelineCount << 1, null);
          var timelinesRotation = current.timelinesRotation;

          for (var ii = 0; ii < timelineCount; ii++) {
            var timeline_1 = timelines[ii];
            var timelineBlend = timelineMode[ii] == AnimationState.SUBSEQUENT ? blend : spine.MixBlend.setup;

            if (timeline_1 instanceof spine.RotateTimeline) {
              this.applyRotateTimeline(timeline_1, skeleton, animationTime, mix, timelineBlend, timelinesRotation, ii << 1, firstFrame);
            } else if (timeline_1 instanceof spine.AttachmentTimeline) {
              this.applyAttachmentTimeline(timeline_1, skeleton, animationTime, blend, true);
            } else {
              spine.Utils.webkit602BugfixHelper(mix, blend);
              timeline_1.apply(skeleton, animationLast, animationTime, events, mix, timelineBlend, spine.MixDirection.mixIn);
            }
          }
        }

        this.queueEvents(current, animationTime);
        events.length = 0;
        current.nextAnimationLast = animationTime;
        current.nextTrackLast = current.trackTime;
      }

      var setupState = this.unkeyedState + AnimationState.SETUP;
      var slots = skeleton.slots;

      for (var i = 0, n = skeleton.slots.length; i < n; i++) {
        var slot = slots[i];

        if (slot.attachmentState == setupState) {
          var attachmentName = slot.data.attachmentName;
          slot.attachment = attachmentName == null ? null : skeleton.getAttachment(slot.data.index, attachmentName);
        }
      }

      this.unkeyedState += 2;
      this.queue.drain();
      return applied;
    };

    AnimationState.prototype.applyMixingFrom = function (to, skeleton, blend) {
      var from = to.mixingFrom;
      if (from.mixingFrom != null) this.applyMixingFrom(from, skeleton, blend);
      var mix = 0;

      if (to.mixDuration == 0) {
        mix = 1;
        if (blend == spine.MixBlend.first) blend = spine.MixBlend.setup;
      } else {
        mix = to.mixTime / to.mixDuration;
        if (mix > 1) mix = 1;
        if (blend != spine.MixBlend.first) blend = from.mixBlend;
      }

      var events = mix < from.eventThreshold ? this.events : null;
      var attachments = mix < from.attachmentThreshold,
          drawOrder = mix < from.drawOrderThreshold;
      var animationLast = from.animationLast,
          animationTime = from.getAnimationTime();
      var timelineCount = from.animation.timelines.length;
      var timelines = from.animation.timelines;
      var alphaHold = from.alpha * to.interruptAlpha,
          alphaMix = alphaHold * (1 - mix);

      if (blend == spine.MixBlend.add) {
        for (var i = 0; i < timelineCount; i++) {
          timelines[i].apply(skeleton, animationLast, animationTime, events, alphaMix, blend, spine.MixDirection.mixOut);
        }
      } else {
        var timelineMode = from.timelineMode;
        var timelineHoldMix = from.timelineHoldMix;
        var firstFrame = from.timelinesRotation.length == 0;
        if (firstFrame) spine.Utils.setArraySize(from.timelinesRotation, timelineCount << 1, null);
        var timelinesRotation = from.timelinesRotation;
        from.totalAlpha = 0;

        for (var i = 0; i < timelineCount; i++) {
          var timeline = timelines[i];
          var direction = spine.MixDirection.mixOut;
          var timelineBlend = void 0;
          var alpha = 0;

          switch (timelineMode[i]) {
            case AnimationState.SUBSEQUENT:
              if (!drawOrder && timeline instanceof spine.DrawOrderTimeline) continue;
              timelineBlend = blend;
              alpha = alphaMix;
              break;

            case AnimationState.FIRST:
              timelineBlend = spine.MixBlend.setup;
              alpha = alphaMix;
              break;

            case AnimationState.HOLD:
              timelineBlend = spine.MixBlend.setup;
              alpha = alphaHold;
              break;

            default:
              timelineBlend = spine.MixBlend.setup;
              var holdMix = timelineHoldMix[i];
              alpha = alphaHold * Math.max(0, 1 - holdMix.mixTime / holdMix.mixDuration);
              break;
          }

          from.totalAlpha += alpha;
          if (timeline instanceof spine.RotateTimeline) this.applyRotateTimeline(timeline, skeleton, animationTime, alpha, timelineBlend, timelinesRotation, i << 1, firstFrame);else if (timeline instanceof spine.AttachmentTimeline) this.applyAttachmentTimeline(timeline, skeleton, animationTime, timelineBlend, attachments);else {
            spine.Utils.webkit602BugfixHelper(alpha, blend);
            if (drawOrder && timeline instanceof spine.DrawOrderTimeline && timelineBlend == spine.MixBlend.setup) direction = spine.MixDirection.mixIn;
            timeline.apply(skeleton, animationLast, animationTime, events, alpha, timelineBlend, direction);
          }
        }
      }

      if (to.mixDuration > 0) this.queueEvents(from, animationTime);
      this.events.length = 0;
      from.nextAnimationLast = animationTime;
      from.nextTrackLast = from.trackTime;
      return mix;
    };

    AnimationState.prototype.applyAttachmentTimeline = function (timeline, skeleton, time, blend, attachments) {
      var slot = skeleton.slots[timeline.slotIndex];
      if (!slot.bone.active) return;
      var frames = timeline.frames;

      if (time < frames[0]) {
        if (blend == spine.MixBlend.setup || blend == spine.MixBlend.first) this.setAttachment(skeleton, slot, slot.data.attachmentName, attachments);
      } else {
        var frameIndex;
        if (time >= frames[frames.length - 1]) frameIndex = frames.length - 1;else frameIndex = spine.Animation.binarySearch(frames, time) - 1;
        this.setAttachment(skeleton, slot, timeline.attachmentNames[frameIndex], attachments);
      }

      if (slot.attachmentState <= this.unkeyedState) slot.attachmentState = this.unkeyedState + AnimationState.SETUP;
    };

    AnimationState.prototype.setAttachment = function (skeleton, slot, attachmentName, attachments) {
      slot.attachment = attachmentName == null ? null : skeleton.getAttachment(slot.data.index, attachmentName);
      if (attachments) slot.attachmentState = this.unkeyedState + AnimationState.CURRENT;
    };

    AnimationState.prototype.applyRotateTimeline = function (timeline, skeleton, time, alpha, blend, timelinesRotation, i, firstFrame) {
      if (firstFrame) timelinesRotation[i] = 0;

      if (alpha == 1) {
        timeline.apply(skeleton, 0, time, null, 1, blend, spine.MixDirection.mixIn);
        return;
      }

      var rotateTimeline = timeline;
      var frames = rotateTimeline.frames;
      var bone = skeleton.bones[rotateTimeline.boneIndex];
      if (!bone.active) return;
      var r1 = 0,
          r2 = 0;

      if (time < frames[0]) {
        switch (blend) {
          case spine.MixBlend.setup:
            bone.rotation = bone.data.rotation;

          default:
            return;

          case spine.MixBlend.first:
            r1 = bone.rotation;
            r2 = bone.data.rotation;
        }
      } else {
        r1 = blend == spine.MixBlend.setup ? bone.data.rotation : bone.rotation;
        if (time >= frames[frames.length - spine.RotateTimeline.ENTRIES]) r2 = bone.data.rotation + frames[frames.length + spine.RotateTimeline.PREV_ROTATION];else {
          var frame = spine.Animation.binarySearch(frames, time, spine.RotateTimeline.ENTRIES);
          var prevRotation = frames[frame + spine.RotateTimeline.PREV_ROTATION];
          var frameTime = frames[frame];
          var percent = rotateTimeline.getCurvePercent((frame >> 1) - 1, 1 - (time - frameTime) / (frames[frame + spine.RotateTimeline.PREV_TIME] - frameTime));
          r2 = frames[frame + spine.RotateTimeline.ROTATION] - prevRotation;
          r2 -= (16384 - (16384.499999999996 - r2 / 360 | 0)) * 360;
          r2 = prevRotation + r2 * percent + bone.data.rotation;
          r2 -= (16384 - (16384.499999999996 - r2 / 360 | 0)) * 360;
        }
      }

      var total = 0,
          diff = r2 - r1;
      diff -= (16384 - (16384.499999999996 - diff / 360 | 0)) * 360;

      if (diff == 0) {
        total = timelinesRotation[i];
      } else {
        var lastTotal = 0,
            lastDiff = 0;

        if (firstFrame) {
          lastTotal = 0;
          lastDiff = diff;
        } else {
          lastTotal = timelinesRotation[i];
          lastDiff = timelinesRotation[i + 1];
        }

        var current = diff > 0,
            dir = lastTotal >= 0;

        if (spine.MathUtils.signum(lastDiff) != spine.MathUtils.signum(diff) && Math.abs(lastDiff) <= 90) {
          if (Math.abs(lastTotal) > 180) lastTotal += 360 * spine.MathUtils.signum(lastTotal);
          dir = current;
        }

        total = diff + lastTotal - lastTotal % 360;
        if (dir != current) total += 360 * spine.MathUtils.signum(lastTotal);
        timelinesRotation[i] = total;
      }

      timelinesRotation[i + 1] = diff;
      r1 += total * alpha;
      bone.rotation = r1 - (16384 - (16384.499999999996 - r1 / 360 | 0)) * 360;
    };

    AnimationState.prototype.queueEvents = function (entry, animationTime) {
      var animationStart = entry.animationStart,
          animationEnd = entry.animationEnd;
      var duration = animationEnd - animationStart;
      var trackLastWrapped = entry.trackLast % duration;
      var events = this.events;
      var i = 0,
          n = events.length;

      for (; i < n; i++) {
        var event_1 = events[i];
        if (event_1.time < trackLastWrapped) break;
        if (event_1.time > animationEnd) continue;
        this.queue.event(entry, event_1);
      }

      var complete = false;
      if (entry.loop) complete = duration == 0 || trackLastWrapped > entry.trackTime % duration;else complete = animationTime >= animationEnd && entry.animationLast < animationEnd;
      if (complete) this.queue.complete(entry);

      for (; i < n; i++) {
        var event_2 = events[i];
        if (event_2.time < animationStart) continue;
        this.queue.event(entry, events[i]);
      }
    };

    AnimationState.prototype.clearTracks = function () {
      var oldDrainDisabled = this.queue.drainDisabled;
      this.queue.drainDisabled = true;

      for (var i = 0, n = this.tracks.length; i < n; i++) {
        this.clearTrack(i);
      }

      this.tracks.length = 0;
      this.queue.drainDisabled = oldDrainDisabled;
      this.queue.drain();
    };

    AnimationState.prototype.clearTrack = function (trackIndex) {
      if (trackIndex >= this.tracks.length) return;
      var current = this.tracks[trackIndex];
      if (current == null) return;
      this.queue.end(current);
      this.disposeNext(current);
      var entry = current;

      while (true) {
        var from = entry.mixingFrom;
        if (from == null) break;
        this.queue.end(from);
        entry.mixingFrom = null;
        entry.mixingTo = null;
        entry = from;
      }

      this.tracks[current.trackIndex] = null;
      this.queue.drain();
    };

    AnimationState.prototype.setCurrent = function (index, current, interrupt) {
      var from = this.expandToIndex(index);
      this.tracks[index] = current;

      if (from != null) {
        if (interrupt) this.queue.interrupt(from);
        current.mixingFrom = from;
        from.mixingTo = current;
        current.mixTime = 0;
        if (from.mixingFrom != null && from.mixDuration > 0) current.interruptAlpha *= Math.min(1, from.mixTime / from.mixDuration);
        from.timelinesRotation.length = 0;
      }

      this.queue.start(current);
    };

    AnimationState.prototype.setAnimation = function (trackIndex, animationName, loop) {
      var animation = this.data.skeletonData.findAnimation(animationName);
      if (animation == null) throw new Error("Animation not found: " + animationName);
      return this.setAnimationWith(trackIndex, animation, loop);
    };

    AnimationState.prototype.setAnimationWith = function (trackIndex, animation, loop) {
      if (animation == null) throw new Error("animation cannot be null.");
      var interrupt = true;
      var current = this.expandToIndex(trackIndex);

      if (current != null) {
        if (current.nextTrackLast == -1) {
          this.tracks[trackIndex] = current.mixingFrom;
          this.queue.interrupt(current);
          this.queue.end(current);
          this.disposeNext(current);
          current = current.mixingFrom;
          interrupt = false;
        } else this.disposeNext(current);
      }

      var entry = this.trackEntry(trackIndex, animation, loop, current);
      this.setCurrent(trackIndex, entry, interrupt);
      this.queue.drain();
      return entry;
    };

    AnimationState.prototype.addAnimation = function (trackIndex, animationName, loop, delay) {
      var animation = this.data.skeletonData.findAnimation(animationName);
      if (animation == null) throw new Error("Animation not found: " + animationName);
      return this.addAnimationWith(trackIndex, animation, loop, delay);
    };

    AnimationState.prototype.addAnimationWith = function (trackIndex, animation, loop, delay) {
      if (animation == null) throw new Error("animation cannot be null.");
      var last = this.expandToIndex(trackIndex);

      if (last != null) {
        while (last.next != null) {
          last = last.next;
        }
      }

      var entry = this.trackEntry(trackIndex, animation, loop, last);

      if (last == null) {
        this.setCurrent(trackIndex, entry, true);
        this.queue.drain();
      } else {
        last.next = entry;

        if (delay <= 0) {
          var duration = last.animationEnd - last.animationStart;

          if (duration != 0) {
            if (last.loop) delay += duration * (1 + (last.trackTime / duration | 0));else delay += Math.max(duration, last.trackTime);
            delay -= this.data.getMix(last.animation, animation);
          } else delay = last.trackTime;
        }
      }

      entry.delay = delay;
      return entry;
    };

    AnimationState.prototype.setEmptyAnimation = function (trackIndex, mixDuration) {
      var entry = this.setAnimationWith(trackIndex, AnimationState.emptyAnimation, false);
      entry.mixDuration = mixDuration;
      entry.trackEnd = mixDuration;
      return entry;
    };

    AnimationState.prototype.addEmptyAnimation = function (trackIndex, mixDuration, delay) {
      if (delay <= 0) delay -= mixDuration;
      var entry = this.addAnimationWith(trackIndex, AnimationState.emptyAnimation, false, delay);
      entry.mixDuration = mixDuration;
      entry.trackEnd = mixDuration;
      return entry;
    };

    AnimationState.prototype.setEmptyAnimations = function (mixDuration) {
      var oldDrainDisabled = this.queue.drainDisabled;
      this.queue.drainDisabled = true;

      for (var i = 0, n = this.tracks.length; i < n; i++) {
        var current = this.tracks[i];
        if (current != null) this.setEmptyAnimation(current.trackIndex, mixDuration);
      }

      this.queue.drainDisabled = oldDrainDisabled;
      this.queue.drain();
    };

    AnimationState.prototype.expandToIndex = function (index) {
      if (index < this.tracks.length) return this.tracks[index];
      spine.Utils.ensureArrayCapacity(this.tracks, index + 1, null);
      this.tracks.length = index + 1;
      return null;
    };

    AnimationState.prototype.trackEntry = function (trackIndex, animation, loop, last) {
      var entry = this.trackEntryPool.obtain();
      entry.trackIndex = trackIndex;
      entry.animation = animation;
      entry.loop = loop;
      entry.holdPrevious = false;
      entry.eventThreshold = 0;
      entry.attachmentThreshold = 0;
      entry.drawOrderThreshold = 0;
      entry.animationStart = 0;
      entry.animationEnd = animation.duration;
      entry.animationLast = -1;
      entry.nextAnimationLast = -1;
      entry.delay = 0;
      entry.trackTime = 0;
      entry.trackLast = -1;
      entry.nextTrackLast = -1;
      entry.trackEnd = Number.MAX_VALUE;
      entry.timeScale = 1;
      entry.alpha = 1;
      entry.interruptAlpha = 1;
      entry.mixTime = 0;
      entry.mixDuration = last == null ? 0 : this.data.getMix(last.animation, animation);
      entry.mixBlend = spine.MixBlend.replace;
      return entry;
    };

    AnimationState.prototype.disposeNext = function (entry) {
      var next = entry.next;

      while (next != null) {
        this.queue.dispose(next);
        next = next.next;
      }

      entry.next = null;
    };

    AnimationState.prototype._animationsChanged = function () {
      this.animationsChanged = false;
      this.propertyIDs.clear();

      for (var i = 0, n = this.tracks.length; i < n; i++) {
        var entry = this.tracks[i];
        if (entry == null) continue;

        while (entry.mixingFrom != null) {
          entry = entry.mixingFrom;
        }

        do {
          if (entry.mixingFrom == null || entry.mixBlend != spine.MixBlend.add) this.computeHold(entry);
          entry = entry.mixingTo;
        } while (entry != null);
      }
    };

    AnimationState.prototype.computeHold = function (entry) {
      var to = entry.mixingTo;
      var timelines = entry.animation.timelines;
      var timelinesCount = entry.animation.timelines.length;
      var timelineMode = spine.Utils.setArraySize(entry.timelineMode, timelinesCount);
      entry.timelineHoldMix.length = 0;
      var timelineDipMix = spine.Utils.setArraySize(entry.timelineHoldMix, timelinesCount);
      var propertyIDs = this.propertyIDs;

      if (to != null && to.holdPrevious) {
        for (var i = 0; i < timelinesCount; i++) {
          propertyIDs.add(timelines[i].getPropertyId());
          timelineMode[i] = AnimationState.HOLD;
        }

        return;
      }

      outer: for (var i = 0; i < timelinesCount; i++) {
        var timeline = timelines[i];
        var id = timeline.getPropertyId();
        if (!propertyIDs.add(id)) timelineMode[i] = AnimationState.SUBSEQUENT;else if (to == null || timeline instanceof spine.AttachmentTimeline || timeline instanceof spine.DrawOrderTimeline || timeline instanceof spine.EventTimeline || !to.animation.hasTimeline(id)) {
          timelineMode[i] = AnimationState.FIRST;
        } else {
          for (var next = to.mixingTo; next != null; next = next.mixingTo) {
            if (next.animation.hasTimeline(id)) continue;

            if (entry.mixDuration > 0) {
              timelineMode[i] = AnimationState.HOLD_MIX;
              timelineDipMix[i] = next;
              continue outer;
            }

            break;
          }

          timelineMode[i] = AnimationState.HOLD;
        }
      }
    };

    AnimationState.prototype.getCurrent = function (trackIndex) {
      if (trackIndex >= this.tracks.length) return null;
      return this.tracks[trackIndex];
    };

    AnimationState.prototype.addListener = function (listener) {
      if (listener == null) throw new Error("listener cannot be null.");
      this.listeners.push(listener);
    };

    AnimationState.prototype.removeListener = function (listener) {
      var index = this.listeners.indexOf(listener);
      if (index >= 0) this.listeners.splice(index, 1);
    };

    AnimationState.prototype.clearListeners = function () {
      this.listeners.length = 0;
    };

    AnimationState.prototype.clearListenerNotifications = function () {
      this.queue.clear();
    };

    AnimationState.emptyAnimation = new spine.Animation("<empty>", [], 0);
    AnimationState.SUBSEQUENT = 0;
    AnimationState.FIRST = 1;
    AnimationState.HOLD = 2;
    AnimationState.HOLD_MIX = 3;
    AnimationState.SETUP = 1;
    AnimationState.CURRENT = 2;
    return AnimationState;
  }();

  spine.AnimationState = AnimationState;

  var TrackEntry = function () {
    function TrackEntry() {
      this.mixBlend = spine.MixBlend.replace;
      this.timelineMode = new Array();
      this.timelineHoldMix = new Array();
      this.timelinesRotation = new Array();
    }

    TrackEntry.prototype.reset = function () {
      this.next = null;
      this.mixingFrom = null;
      this.mixingTo = null;
      this.animation = null;
      this.listener = null;
      this.timelineMode.length = 0;
      this.timelineHoldMix.length = 0;
      this.timelinesRotation.length = 0;
    };

    TrackEntry.prototype.getAnimationTime = function () {
      if (this.loop) {
        var duration = this.animationEnd - this.animationStart;
        if (duration == 0) return this.animationStart;
        return this.trackTime % duration + this.animationStart;
      }

      return Math.min(this.trackTime + this.animationStart, this.animationEnd);
    };

    TrackEntry.prototype.setAnimationLast = function (animationLast) {
      this.animationLast = animationLast;
      this.nextAnimationLast = animationLast;
    };

    TrackEntry.prototype.isComplete = function () {
      return this.trackTime >= this.animationEnd - this.animationStart;
    };

    TrackEntry.prototype.resetRotationDirections = function () {
      this.timelinesRotation.length = 0;
    };

    return TrackEntry;
  }();

  spine.TrackEntry = TrackEntry;

  var EventQueue = function () {
    function EventQueue(animState) {
      this.objects = [];
      this.drainDisabled = false;
      this.animState = animState;
    }

    EventQueue.prototype.start = function (entry) {
      this.objects.push(EventType.start);
      this.objects.push(entry);
      this.animState.animationsChanged = true;
    };

    EventQueue.prototype.interrupt = function (entry) {
      this.objects.push(EventType.interrupt);
      this.objects.push(entry);
    };

    EventQueue.prototype.end = function (entry) {
      this.objects.push(EventType.end);
      this.objects.push(entry);
      this.animState.animationsChanged = true;
    };

    EventQueue.prototype.dispose = function (entry) {
      this.objects.push(EventType.dispose);
      this.objects.push(entry);
    };

    EventQueue.prototype.complete = function (entry) {
      this.objects.push(EventType.complete);
      this.objects.push(entry);
    };

    EventQueue.prototype.event = function (entry, event) {
      this.objects.push(EventType.event);
      this.objects.push(entry);
      this.objects.push(event);
    };

    EventQueue.prototype.drain = function () {
      if (this.drainDisabled) return;
      this.drainDisabled = true;
      var objects = this.objects;
      var listeners = this.animState.listeners;

      for (var i = 0; i < objects.length; i += 2) {
        var type = objects[i];
        var entry = objects[i + 1];

        switch (type) {
          case EventType.start:
            if (entry.listener != null && entry.listener.start) entry.listener.start(entry);

            for (var ii = 0; ii < listeners.length; ii++) {
              if (listeners[ii].start) listeners[ii].start(entry);
            }

            break;

          case EventType.interrupt:
            if (entry.listener != null && entry.listener.interrupt) entry.listener.interrupt(entry);

            for (var ii = 0; ii < listeners.length; ii++) {
              if (listeners[ii].interrupt) listeners[ii].interrupt(entry);
            }

            break;

          case EventType.end:
            if (entry.listener != null && entry.listener.end) entry.listener.end(entry);

            for (var ii = 0; ii < listeners.length; ii++) {
              if (listeners[ii].end) listeners[ii].end(entry);
            }

          case EventType.dispose:
            if (entry.listener != null && entry.listener.dispose) entry.listener.dispose(entry);

            for (var ii = 0; ii < listeners.length; ii++) {
              if (listeners[ii].dispose) listeners[ii].dispose(entry);
            }

            this.animState.trackEntryPool.free(entry);
            break;

          case EventType.complete:
            if (entry.listener != null && entry.listener.complete) entry.listener.complete(entry);

            for (var ii = 0; ii < listeners.length; ii++) {
              if (listeners[ii].complete) listeners[ii].complete(entry);
            }

            break;

          case EventType.event:
            var event_3 = objects[i++ + 2];
            if (entry.listener != null && entry.listener.event) entry.listener.event(entry, event_3);

            for (var ii = 0; ii < listeners.length; ii++) {
              if (listeners[ii].event) listeners[ii].event(entry, event_3);
            }

            break;
        }
      }

      this.clear();
      this.drainDisabled = false;
    };

    EventQueue.prototype.clear = function () {
      this.objects.length = 0;
    };

    return EventQueue;
  }();

  spine.EventQueue = EventQueue;
  var EventType;

  (function (EventType) {
    EventType[EventType["start"] = 0] = "start";
    EventType[EventType["interrupt"] = 1] = "interrupt";
    EventType[EventType["end"] = 2] = "end";
    EventType[EventType["dispose"] = 3] = "dispose";
    EventType[EventType["complete"] = 4] = "complete";
    EventType[EventType["event"] = 5] = "event";
  })(EventType = spine.EventType || (spine.EventType = {}));

  var AnimationStateAdapter = function () {
    function AnimationStateAdapter() {}

    AnimationStateAdapter.prototype.start = function (entry) {};

    AnimationStateAdapter.prototype.interrupt = function (entry) {};

    AnimationStateAdapter.prototype.end = function (entry) {};

    AnimationStateAdapter.prototype.dispose = function (entry) {};

    AnimationStateAdapter.prototype.complete = function (entry) {};

    AnimationStateAdapter.prototype.event = function (entry, event) {};

    return AnimationStateAdapter;
  }();

  spine.AnimationStateAdapter = AnimationStateAdapter;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var AnimationStateData = function () {
    function AnimationStateData(skeletonData) {
      this.animationToMixTime = {};
      this.defaultMix = 0;
      if (skeletonData == null) throw new Error("skeletonData cannot be null.");
      this.skeletonData = skeletonData;
    }

    AnimationStateData.prototype.setMix = function (fromName, toName, duration) {
      var from = this.skeletonData.findAnimation(fromName);
      if (from == null) throw new Error("Animation not found: " + fromName);
      var to = this.skeletonData.findAnimation(toName);
      if (to == null) throw new Error("Animation not found: " + toName);
      this.setMixWith(from, to, duration);
    };

    AnimationStateData.prototype.setMixWith = function (from, to, duration) {
      if (from == null) throw new Error("from cannot be null.");
      if (to == null) throw new Error("to cannot be null.");
      var key = from.name + "." + to.name;
      this.animationToMixTime[key] = duration;
    };

    AnimationStateData.prototype.getMix = function (from, to) {
      var key = from.name + "." + to.name;
      var value = this.animationToMixTime[key];
      return value === undefined ? this.defaultMix : value;
    };

    return AnimationStateData;
  }();

  spine.AnimationStateData = AnimationStateData;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var AssetManager = function () {
    function AssetManager(textureLoader, pathPrefix) {
      if (pathPrefix === void 0) {
        pathPrefix = "";
      }

      this.assets = {};
      this.errors = {};
      this.toLoad = 0;
      this.loaded = 0;
      this.rawDataUris = {};
      this.textureLoader = textureLoader;
      this.pathPrefix = pathPrefix;
    }

    AssetManager.prototype.downloadText = function (url, success, error) {
      var request = new XMLHttpRequest();
      request.overrideMimeType("text/html");
      if (this.rawDataUris[url]) url = this.rawDataUris[url];
      request.open("GET", url, true);

      request.onload = function () {
        if (request.status == 200) {
          success(request.responseText);
        } else {
          error(request.status, request.responseText);
        }
      };

      request.onerror = function () {
        error(request.status, request.responseText);
      };

      request.send();
    };

    AssetManager.prototype.downloadBinary = function (url, success, error) {
      var request = new XMLHttpRequest();
      if (this.rawDataUris[url]) url = this.rawDataUris[url];
      request.open("GET", url, true);
      request.responseType = "arraybuffer";

      request.onload = function () {
        if (request.status == 200) {
          success(new Uint8Array(request.response));
        } else {
          error(request.status, request.responseText);
        }
      };

      request.onerror = function () {
        error(request.status, request.responseText);
      };

      request.send();
    };

    AssetManager.prototype.setRawDataURI = function (path, data) {
      this.rawDataUris[this.pathPrefix + path] = data;
    };

    AssetManager.prototype.loadBinary = function (path, success, error) {
      var _this = this;

      if (success === void 0) {
        success = null;
      }

      if (error === void 0) {
        error = null;
      }

      path = this.pathPrefix + path;
      this.toLoad++;
      this.downloadBinary(path, function (data) {
        _this.assets[path] = data;
        if (success) success(path, data);
        _this.toLoad--;
        _this.loaded++;
      }, function (state, responseText) {
        _this.errors[path] = "Couldn't load binary " + path + ": status " + status + ", " + responseText;
        if (error) error(path, "Couldn't load binary " + path + ": status " + status + ", " + responseText);
        _this.toLoad--;
        _this.loaded++;
      });
    };

    AssetManager.prototype.loadText = function (path, success, error) {
      var _this = this;

      if (success === void 0) {
        success = null;
      }

      if (error === void 0) {
        error = null;
      }

      path = this.pathPrefix + path;
      this.toLoad++;
      this.downloadText(path, function (data) {
        _this.assets[path] = data;
        if (success) success(path, data);
        _this.toLoad--;
        _this.loaded++;
      }, function (state, responseText) {
        _this.errors[path] = "Couldn't load text " + path + ": status " + status + ", " + responseText;
        if (error) error(path, "Couldn't load text " + path + ": status " + status + ", " + responseText);
        _this.toLoad--;
        _this.loaded++;
      });
    };

    AssetManager.prototype.loadTexture = function (path, success, error) {
      var _this = this;

      if (success === void 0) {
        success = null;
      }

      if (error === void 0) {
        error = null;
      }

      path = this.pathPrefix + path;
      var storagePath = path;
      this.toLoad++;
      var img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = function (ev) {
        var texture = _this.textureLoader(img);

        _this.assets[storagePath] = texture;
        _this.toLoad--;
        _this.loaded++;
        if (success) success(path, img);
      };

      img.onerror = function (ev) {
        _this.errors[path] = "Couldn't load image " + path;
        _this.toLoad--;
        _this.loaded++;
        if (error) error(path, "Couldn't load image " + path);
      };

      if (this.rawDataUris[path]) path = this.rawDataUris[path];
      img.src = path;
    };

    AssetManager.prototype.loadTextureAtlas = function (path, success, error) {
      var _this = this;

      if (success === void 0) {
        success = null;
      }

      if (error === void 0) {
        error = null;
      }

      var parent = path.lastIndexOf("/") >= 0 ? path.substring(0, path.lastIndexOf("/")) : "";
      path = this.pathPrefix + path;
      this.toLoad++;
      this.downloadText(path, function (atlasData) {
        var pagesLoaded = {
          count: 0
        };
        var atlasPages = new Array();

        try {
          var atlas = new spine.TextureAtlas(atlasData, function (path) {
            atlasPages.push(parent == "" ? path : parent + "/" + path);
            var image = document.createElement("img");
            image.width = 16;
            image.height = 16;
            return new spine.FakeTexture(image);
          });
        } catch (e) {
          var ex = e;
          _this.errors[path] = "Couldn't load texture atlas " + path + ": " + ex.message;
          if (error) error(path, "Couldn't load texture atlas " + path + ": " + ex.message);
          _this.toLoad--;
          _this.loaded++;
          return;
        }

        var _loop_1 = function _loop_1(atlasPage) {
          var pageLoadError = false;

          _this.loadTexture(atlasPage, function (imagePath, image) {
            pagesLoaded.count++;

            if (pagesLoaded.count == atlasPages.length) {
              if (!pageLoadError) {
                try {
                  var atlas = new spine.TextureAtlas(atlasData, function (path) {
                    return _this.get(parent == "" ? path : parent + "/" + path);
                  });
                  _this.assets[path] = atlas;
                  if (success) success(path, atlas);
                  _this.toLoad--;
                  _this.loaded++;
                } catch (e) {
                  var ex = e;
                  _this.errors[path] = "Couldn't load texture atlas " + path + ": " + ex.message;
                  if (error) error(path, "Couldn't load texture atlas " + path + ": " + ex.message);
                  _this.toLoad--;
                  _this.loaded++;
                }
              } else {
                _this.errors[path] = "Couldn't load texture atlas page " + imagePath + "} of atlas " + path;
                if (error) error(path, "Couldn't load texture atlas page " + imagePath + " of atlas " + path);
                _this.toLoad--;
                _this.loaded++;
              }
            }
          }, function (imagePath, errorMessage) {
            pageLoadError = true;
            pagesLoaded.count++;

            if (pagesLoaded.count == atlasPages.length) {
              _this.errors[path] = "Couldn't load texture atlas page " + imagePath + "} of atlas " + path;
              if (error) error(path, "Couldn't load texture atlas page " + imagePath + " of atlas " + path);
              _this.toLoad--;
              _this.loaded++;
            }
          });
        };

        for (var _i = 0, atlasPages_1 = atlasPages; _i < atlasPages_1.length; _i++) {
          var atlasPage = atlasPages_1[_i];

          _loop_1(atlasPage);
        }
      }, function (state, responseText) {
        _this.errors[path] = "Couldn't load texture atlas " + path + ": status " + status + ", " + responseText;
        if (error) error(path, "Couldn't load texture atlas " + path + ": status " + status + ", " + responseText);
        _this.toLoad--;
        _this.loaded++;
      });
    };

    AssetManager.prototype.get = function (path) {
      path = this.pathPrefix + path;
      return this.assets[path];
    };

    AssetManager.prototype.remove = function (path) {
      path = this.pathPrefix + path;
      var asset = this.assets[path];
      if (asset.dispose) asset.dispose();
      this.assets[path] = null;
    };

    AssetManager.prototype.removeAll = function () {
      for (var key in this.assets) {
        var asset = this.assets[key];
        if (asset.dispose) asset.dispose();
      }

      this.assets = {};
    };

    AssetManager.prototype.isLoadingComplete = function () {
      return this.toLoad == 0;
    };

    AssetManager.prototype.getToLoad = function () {
      return this.toLoad;
    };

    AssetManager.prototype.getLoaded = function () {
      return this.loaded;
    };

    AssetManager.prototype.dispose = function () {
      this.removeAll();
    };

    AssetManager.prototype.hasErrors = function () {
      return Object.keys(this.errors).length > 0;
    };

    AssetManager.prototype.getErrors = function () {
      return this.errors;
    };

    return AssetManager;
  }();

  spine.AssetManager = AssetManager;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var AtlasAttachmentLoader = function () {
    function AtlasAttachmentLoader(atlas) {
      this.atlas = atlas;
    }

    AtlasAttachmentLoader.prototype.newRegionAttachment = function (skin, name, path) {
      var region = this.atlas.findRegion(path);
      if (region == null) throw new Error("Region not found in atlas: " + path + " (region attachment: " + name + ")");
      region.renderObject = region;
      var attachment = new spine.RegionAttachment(name);
      attachment.setRegion(region);
      return attachment;
    };

    AtlasAttachmentLoader.prototype.newMeshAttachment = function (skin, name, path) {
      var region = this.atlas.findRegion(path);
      if (region == null) throw new Error("Region not found in atlas: " + path + " (mesh attachment: " + name + ")");
      region.renderObject = region;
      var attachment = new spine.MeshAttachment(name);
      attachment.region = region;
      return attachment;
    };

    AtlasAttachmentLoader.prototype.newBoundingBoxAttachment = function (skin, name) {
      return new spine.BoundingBoxAttachment(name);
    };

    AtlasAttachmentLoader.prototype.newPathAttachment = function (skin, name) {
      return new spine.PathAttachment(name);
    };

    AtlasAttachmentLoader.prototype.newPointAttachment = function (skin, name) {
      return new spine.PointAttachment(name);
    };

    AtlasAttachmentLoader.prototype.newClippingAttachment = function (skin, name) {
      return new spine.ClippingAttachment(name);
    };

    return AtlasAttachmentLoader;
  }();

  spine.AtlasAttachmentLoader = AtlasAttachmentLoader;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var BlendMode;

  (function (BlendMode) {
    BlendMode[BlendMode["Normal"] = 0] = "Normal";
    BlendMode[BlendMode["Additive"] = 1] = "Additive";
    BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
    BlendMode[BlendMode["Screen"] = 3] = "Screen";
  })(BlendMode = spine.BlendMode || (spine.BlendMode = {}));
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var Bone = function () {
    function Bone(data, skeleton, parent) {
      this.children = new Array();
      this.x = 0;
      this.y = 0;
      this.rotation = 0;
      this.scaleX = 0;
      this.scaleY = 0;
      this.shearX = 0;
      this.shearY = 0;
      this.ax = 0;
      this.ay = 0;
      this.arotation = 0;
      this.ascaleX = 0;
      this.ascaleY = 0;
      this.ashearX = 0;
      this.ashearY = 0;
      this.appliedValid = false;
      this.a = 0;
      this.b = 0;
      this.c = 0;
      this.d = 0;
      this.worldY = 0;
      this.worldX = 0;
      this.sorted = false;
      this.active = false;
      if (data == null) throw new Error("data cannot be null.");
      if (skeleton == null) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.skeleton = skeleton;
      this.parent = parent;
      this.setToSetupPose();
    }

    Bone.prototype.isActive = function () {
      return this.active;
    };

    Bone.prototype.update = function () {
      this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
    };

    Bone.prototype.updateWorldTransform = function () {
      this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
    };

    Bone.prototype.updateWorldTransformWith = function (x, y, rotation, scaleX, scaleY, shearX, shearY) {
      this.ax = x;
      this.ay = y;
      this.arotation = rotation;
      this.ascaleX = scaleX;
      this.ascaleY = scaleY;
      this.ashearX = shearX;
      this.ashearY = shearY;
      this.appliedValid = true;
      var parent = this.parent;

      if (parent == null) {
        var skeleton = this.skeleton;
        var rotationY = rotation + 90 + shearY;
        var sx = skeleton.scaleX;
        var sy = skeleton.scaleY;
        this.a = spine.MathUtils.cosDeg(rotation + shearX) * scaleX * sx;
        this.b = spine.MathUtils.cosDeg(rotationY) * scaleY * sx;
        this.c = spine.MathUtils.sinDeg(rotation + shearX) * scaleX * sy;
        this.d = spine.MathUtils.sinDeg(rotationY) * scaleY * sy;
        this.worldX = x * sx + skeleton.x;
        this.worldY = y * sy + skeleton.y;
        return;
      }

      var pa = parent.a,
          pb = parent.b,
          pc = parent.c,
          pd = parent.d;
      this.worldX = pa * x + pb * y + parent.worldX;
      this.worldY = pc * x + pd * y + parent.worldY;

      switch (this.data.transformMode) {
        case spine.TransformMode.Normal:
          {
            var rotationY = rotation + 90 + shearY;
            var la = spine.MathUtils.cosDeg(rotation + shearX) * scaleX;
            var lb = spine.MathUtils.cosDeg(rotationY) * scaleY;
            var lc = spine.MathUtils.sinDeg(rotation + shearX) * scaleX;
            var ld = spine.MathUtils.sinDeg(rotationY) * scaleY;
            this.a = pa * la + pb * lc;
            this.b = pa * lb + pb * ld;
            this.c = pc * la + pd * lc;
            this.d = pc * lb + pd * ld;
            return;
          }

        case spine.TransformMode.OnlyTranslation:
          {
            var rotationY = rotation + 90 + shearY;
            this.a = spine.MathUtils.cosDeg(rotation + shearX) * scaleX;
            this.b = spine.MathUtils.cosDeg(rotationY) * scaleY;
            this.c = spine.MathUtils.sinDeg(rotation + shearX) * scaleX;
            this.d = spine.MathUtils.sinDeg(rotationY) * scaleY;
            break;
          }

        case spine.TransformMode.NoRotationOrReflection:
          {
            var s = pa * pa + pc * pc;
            var prx = 0;

            if (s > 0.0001) {
              s = Math.abs(pa * pd - pb * pc) / s;
              pb = pc * s;
              pd = pa * s;
              prx = Math.atan2(pc, pa) * spine.MathUtils.radDeg;
            } else {
              pa = 0;
              pc = 0;
              prx = 90 - Math.atan2(pd, pb) * spine.MathUtils.radDeg;
            }

            var rx = rotation + shearX - prx;
            var ry = rotation + shearY - prx + 90;
            var la = spine.MathUtils.cosDeg(rx) * scaleX;
            var lb = spine.MathUtils.cosDeg(ry) * scaleY;
            var lc = spine.MathUtils.sinDeg(rx) * scaleX;
            var ld = spine.MathUtils.sinDeg(ry) * scaleY;
            this.a = pa * la - pb * lc;
            this.b = pa * lb - pb * ld;
            this.c = pc * la + pd * lc;
            this.d = pc * lb + pd * ld;
            return;
          }

        case spine.TransformMode.NoScale:
        case spine.TransformMode.NoScaleOrReflection:
          {
            var cos = spine.MathUtils.cosDeg(rotation);
            var sin = spine.MathUtils.sinDeg(rotation);
            var za = (pa * cos + pb * sin) / this.skeleton.scaleX;
            var zc = (pc * cos + pd * sin) / this.skeleton.scaleY;
            var s = Math.sqrt(za * za + zc * zc);
            if (s > 0.00001) s = 1 / s;
            za *= s;
            zc *= s;
            s = Math.sqrt(za * za + zc * zc);
            if (this.data.transformMode == spine.TransformMode.NoScale && pa * pd - pb * pc < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0)) s = -s;
            var r = Math.PI / 2 + Math.atan2(zc, za);
            var zb = Math.cos(r) * s;
            var zd = Math.sin(r) * s;
            var la = spine.MathUtils.cosDeg(shearX) * scaleX;
            var lb = spine.MathUtils.cosDeg(90 + shearY) * scaleY;
            var lc = spine.MathUtils.sinDeg(shearX) * scaleX;
            var ld = spine.MathUtils.sinDeg(90 + shearY) * scaleY;
            this.a = za * la + zb * lc;
            this.b = za * lb + zb * ld;
            this.c = zc * la + zd * lc;
            this.d = zc * lb + zd * ld;
            break;
          }
      }

      this.a *= this.skeleton.scaleX;
      this.b *= this.skeleton.scaleX;
      this.c *= this.skeleton.scaleY;
      this.d *= this.skeleton.scaleY;
    };

    Bone.prototype.setToSetupPose = function () {
      var data = this.data;
      this.x = data.x;
      this.y = data.y;
      this.rotation = data.rotation;
      this.scaleX = data.scaleX;
      this.scaleY = data.scaleY;
      this.shearX = data.shearX;
      this.shearY = data.shearY;
    };

    Bone.prototype.getWorldRotationX = function () {
      return Math.atan2(this.c, this.a) * spine.MathUtils.radDeg;
    };

    Bone.prototype.getWorldRotationY = function () {
      return Math.atan2(this.d, this.b) * spine.MathUtils.radDeg;
    };

    Bone.prototype.getWorldScaleX = function () {
      return Math.sqrt(this.a * this.a + this.c * this.c);
    };

    Bone.prototype.getWorldScaleY = function () {
      return Math.sqrt(this.b * this.b + this.d * this.d);
    };

    Bone.prototype.updateAppliedTransform = function () {
      this.appliedValid = true;
      var parent = this.parent;

      if (parent == null) {
        this.ax = this.worldX;
        this.ay = this.worldY;
        this.arotation = Math.atan2(this.c, this.a) * spine.MathUtils.radDeg;
        this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c);
        this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d);
        this.ashearX = 0;
        this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * spine.MathUtils.radDeg;
        return;
      }

      var pa = parent.a,
          pb = parent.b,
          pc = parent.c,
          pd = parent.d;
      var pid = 1 / (pa * pd - pb * pc);
      var dx = this.worldX - parent.worldX,
          dy = this.worldY - parent.worldY;
      this.ax = dx * pd * pid - dy * pb * pid;
      this.ay = dy * pa * pid - dx * pc * pid;
      var ia = pid * pd;
      var id = pid * pa;
      var ib = pid * pb;
      var ic = pid * pc;
      var ra = ia * this.a - ib * this.c;
      var rb = ia * this.b - ib * this.d;
      var rc = id * this.c - ic * this.a;
      var rd = id * this.d - ic * this.b;
      this.ashearX = 0;
      this.ascaleX = Math.sqrt(ra * ra + rc * rc);

      if (this.ascaleX > 0.0001) {
        var det = ra * rd - rb * rc;
        this.ascaleY = det / this.ascaleX;
        this.ashearY = Math.atan2(ra * rb + rc * rd, det) * spine.MathUtils.radDeg;
        this.arotation = Math.atan2(rc, ra) * spine.MathUtils.radDeg;
      } else {
        this.ascaleX = 0;
        this.ascaleY = Math.sqrt(rb * rb + rd * rd);
        this.ashearY = 0;
        this.arotation = 90 - Math.atan2(rd, rb) * spine.MathUtils.radDeg;
      }
    };

    Bone.prototype.worldToLocal = function (world) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d;
      var invDet = 1 / (a * d - b * c);
      var x = world.x - this.worldX,
          y = world.y - this.worldY;
      world.x = x * d * invDet - y * b * invDet;
      world.y = y * a * invDet - x * c * invDet;
      return world;
    };

    Bone.prototype.localToWorld = function (local) {
      var x = local.x,
          y = local.y;
      local.x = x * this.a + y * this.b + this.worldX;
      local.y = x * this.c + y * this.d + this.worldY;
      return local;
    };

    Bone.prototype.worldToLocalRotation = function (worldRotation) {
      var sin = spine.MathUtils.sinDeg(worldRotation),
          cos = spine.MathUtils.cosDeg(worldRotation);
      return Math.atan2(this.a * sin - this.c * cos, this.d * cos - this.b * sin) * spine.MathUtils.radDeg + this.rotation - this.shearX;
    };

    Bone.prototype.localToWorldRotation = function (localRotation) {
      localRotation -= this.rotation - this.shearX;
      var sin = spine.MathUtils.sinDeg(localRotation),
          cos = spine.MathUtils.cosDeg(localRotation);
      return Math.atan2(cos * this.c + sin * this.d, cos * this.a + sin * this.b) * spine.MathUtils.radDeg;
    };

    Bone.prototype.rotateWorld = function (degrees) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d;
      var cos = spine.MathUtils.cosDeg(degrees),
          sin = spine.MathUtils.sinDeg(degrees);
      this.a = cos * a - sin * c;
      this.b = cos * b - sin * d;
      this.c = sin * a + cos * c;
      this.d = sin * b + cos * d;
      this.appliedValid = false;
    };

    return Bone;
  }();

  spine.Bone = Bone;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var BoneData = function () {
    function BoneData(index, name, parent) {
      this.x = 0;
      this.y = 0;
      this.rotation = 0;
      this.scaleX = 1;
      this.scaleY = 1;
      this.shearX = 0;
      this.shearY = 0;
      this.transformMode = TransformMode.Normal;
      this.skinRequired = false;
      this.color = new spine.Color();
      if (index < 0) throw new Error("index must be >= 0.");
      if (name == null) throw new Error("name cannot be null.");
      this.index = index;
      this.name = name;
      this.parent = parent;
    }

    return BoneData;
  }();

  spine.BoneData = BoneData;
  var TransformMode;

  (function (TransformMode) {
    TransformMode[TransformMode["Normal"] = 0] = "Normal";
    TransformMode[TransformMode["OnlyTranslation"] = 1] = "OnlyTranslation";
    TransformMode[TransformMode["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
    TransformMode[TransformMode["NoScale"] = 3] = "NoScale";
    TransformMode[TransformMode["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
  })(TransformMode = spine.TransformMode || (spine.TransformMode = {}));
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var ConstraintData = function () {
    function ConstraintData(name, order, skinRequired) {
      this.name = name;
      this.order = order;
      this.skinRequired = skinRequired;
    }

    return ConstraintData;
  }();

  spine.ConstraintData = ConstraintData;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var Event = function () {
    function Event(time, data) {
      if (data == null) throw new Error("data cannot be null.");
      this.time = time;
      this.data = data;
    }

    return Event;
  }();

  spine.Event = Event;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var EventData = function () {
    function EventData(name) {
      this.name = name;
    }

    return EventData;
  }();

  spine.EventData = EventData;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var IkConstraint = function () {
    function IkConstraint(data, skeleton) {
      this.bendDirection = 0;
      this.compress = false;
      this.stretch = false;
      this.mix = 1;
      this.softness = 0;
      this.active = false;
      if (data == null) throw new Error("data cannot be null.");
      if (skeleton == null) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.mix = data.mix;
      this.softness = data.softness;
      this.bendDirection = data.bendDirection;
      this.compress = data.compress;
      this.stretch = data.stretch;
      this.bones = new Array();

      for (var i = 0; i < data.bones.length; i++) {
        this.bones.push(skeleton.findBone(data.bones[i].name));
      }

      this.target = skeleton.findBone(data.target.name);
    }

    IkConstraint.prototype.isActive = function () {
      return this.active;
    };

    IkConstraint.prototype.apply = function () {
      this.update();
    };

    IkConstraint.prototype.update = function () {
      var target = this.target;
      var bones = this.bones;

      switch (bones.length) {
        case 1:
          this.apply1(bones[0], target.worldX, target.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
          break;

        case 2:
          this.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.stretch, this.softness, this.mix);
          break;
      }
    };

    IkConstraint.prototype.apply1 = function (bone, targetX, targetY, compress, stretch, uniform, alpha) {
      if (!bone.appliedValid) bone.updateAppliedTransform();
      var p = bone.parent;
      var pa = p.a,
          pb = p.b,
          pc = p.c,
          pd = p.d;
      var rotationIK = -bone.ashearX - bone.arotation,
          tx = 0,
          ty = 0;

      switch (bone.data.transformMode) {
        case spine.TransformMode.OnlyTranslation:
          tx = targetX - bone.worldX;
          ty = targetY - bone.worldY;
          break;

        case spine.TransformMode.NoRotationOrReflection:
          rotationIK += Math.atan2(pc, pa) * spine.MathUtils.radDeg;
          var ps = Math.abs(pa * pd - pb * pc) / (pa * pa + pc * pc);
          pb = -pc * ps;
          pd = pa * ps;

        default:
          var x = targetX - p.worldX,
              y = targetY - p.worldY;
          var d = pa * pd - pb * pc;
          tx = (x * pd - y * pb) / d - bone.ax;
          ty = (y * pa - x * pc) / d - bone.ay;
      }

      rotationIK += Math.atan2(ty, tx) * spine.MathUtils.radDeg;
      if (bone.ascaleX < 0) rotationIK += 180;
      if (rotationIK > 180) rotationIK -= 360;else if (rotationIK < -180) rotationIK += 360;
      var sx = bone.ascaleX,
          sy = bone.ascaleY;

      if (compress || stretch) {
        switch (bone.data.transformMode) {
          case spine.TransformMode.NoScale:
          case spine.TransformMode.NoScaleOrReflection:
            tx = targetX - bone.worldX;
            ty = targetY - bone.worldY;
        }

        var b = bone.data.length * sx,
            dd = Math.sqrt(tx * tx + ty * ty);

        if (compress && dd < b || stretch && dd > b && b > 0.0001) {
          var s = (dd / b - 1) * alpha + 1;
          sx *= s;
          if (uniform) sy *= s;
        }
      }

      bone.updateWorldTransformWith(bone.ax, bone.ay, bone.arotation + rotationIK * alpha, sx, sy, bone.ashearX, bone.ashearY);
    };

    IkConstraint.prototype.apply2 = function (parent, child, targetX, targetY, bendDir, stretch, softness, alpha) {
      if (alpha == 0) {
        child.updateWorldTransform();
        return;
      }

      if (!parent.appliedValid) parent.updateAppliedTransform();
      if (!child.appliedValid) child.updateAppliedTransform();
      var px = parent.ax,
          py = parent.ay,
          psx = parent.ascaleX,
          sx = psx,
          psy = parent.ascaleY,
          csx = child.ascaleX;
      var os1 = 0,
          os2 = 0,
          s2 = 0;

      if (psx < 0) {
        psx = -psx;
        os1 = 180;
        s2 = -1;
      } else {
        os1 = 0;
        s2 = 1;
      }

      if (psy < 0) {
        psy = -psy;
        s2 = -s2;
      }

      if (csx < 0) {
        csx = -csx;
        os2 = 180;
      } else os2 = 0;

      var cx = child.ax,
          cy = 0,
          cwx = 0,
          cwy = 0,
          a = parent.a,
          b = parent.b,
          c = parent.c,
          d = parent.d;
      var u = Math.abs(psx - psy) <= 0.0001;

      if (!u) {
        cy = 0;
        cwx = a * cx + parent.worldX;
        cwy = c * cx + parent.worldY;
      } else {
        cy = child.ay;
        cwx = a * cx + b * cy + parent.worldX;
        cwy = c * cx + d * cy + parent.worldY;
      }

      var pp = parent.parent;
      a = pp.a;
      b = pp.b;
      c = pp.c;
      d = pp.d;
      var id = 1 / (a * d - b * c),
          x = cwx - pp.worldX,
          y = cwy - pp.worldY;
      var dx = (x * d - y * b) * id - px,
          dy = (y * a - x * c) * id - py;
      var l1 = Math.sqrt(dx * dx + dy * dy),
          l2 = child.data.length * csx,
          a1,
          a2;

      if (l1 < 0.0001) {
        this.apply1(parent, targetX, targetY, false, stretch, false, alpha);
        child.updateWorldTransformWith(cx, cy, 0, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
        return;
      }

      x = targetX - pp.worldX;
      y = targetY - pp.worldY;
      var tx = (x * d - y * b) * id - px,
          ty = (y * a - x * c) * id - py;
      var dd = tx * tx + ty * ty;

      if (softness != 0) {
        softness *= psx * (csx + 1) / 2;
        var td = Math.sqrt(dd),
            sd = td - l1 - l2 * psx + softness;

        if (sd > 0) {
          var p = Math.min(1, sd / (softness * 2)) - 1;
          p = (sd - softness * (1 - p * p)) / td;
          tx -= p * tx;
          ty -= p * ty;
          dd = tx * tx + ty * ty;
        }
      }

      outer: if (u) {
        l2 *= psx;
        var cos = (dd - l1 * l1 - l2 * l2) / (2 * l1 * l2);
        if (cos < -1) cos = -1;else if (cos > 1) {
          cos = 1;
          if (stretch) sx *= (Math.sqrt(dd) / (l1 + l2) - 1) * alpha + 1;
        }
        a2 = Math.acos(cos) * bendDir;
        a = l1 + l2 * cos;
        b = l2 * Math.sin(a2);
        a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
      } else {
        a = psx * l2;
        b = psy * l2;
        var aa = a * a,
            bb = b * b,
            ta = Math.atan2(ty, tx);
        c = bb * l1 * l1 + aa * dd - aa * bb;
        var c1 = -2 * bb * l1,
            c2 = bb - aa;
        d = c1 * c1 - 4 * c2 * c;

        if (d >= 0) {
          var q = Math.sqrt(d);
          if (c1 < 0) q = -q;
          q = -(c1 + q) / 2;
          var r0 = q / c2,
              r1 = c / q;
          var r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;

          if (r * r <= dd) {
            y = Math.sqrt(dd - r * r) * bendDir;
            a1 = ta - Math.atan2(y, r);
            a2 = Math.atan2(y / psy, (r - l1) / psx);
            break outer;
          }
        }

        var minAngle = spine.MathUtils.PI,
            minX = l1 - a,
            minDist = minX * minX,
            minY = 0;
        var maxAngle = 0,
            maxX = l1 + a,
            maxDist = maxX * maxX,
            maxY = 0;
        c = -a * l1 / (aa - bb);

        if (c >= -1 && c <= 1) {
          c = Math.acos(c);
          x = a * Math.cos(c) + l1;
          y = b * Math.sin(c);
          d = x * x + y * y;

          if (d < minDist) {
            minAngle = c;
            minDist = d;
            minX = x;
            minY = y;
          }

          if (d > maxDist) {
            maxAngle = c;
            maxDist = d;
            maxX = x;
            maxY = y;
          }
        }

        if (dd <= (minDist + maxDist) / 2) {
          a1 = ta - Math.atan2(minY * bendDir, minX);
          a2 = minAngle * bendDir;
        } else {
          a1 = ta - Math.atan2(maxY * bendDir, maxX);
          a2 = maxAngle * bendDir;
        }
      }

      var os = Math.atan2(cy, cx) * s2;
      var rotation = parent.arotation;
      a1 = (a1 - os) * spine.MathUtils.radDeg + os1 - rotation;
      if (a1 > 180) a1 -= 360;else if (a1 < -180) a1 += 360;
      parent.updateWorldTransformWith(px, py, rotation + a1 * alpha, sx, parent.ascaleY, 0, 0);
      rotation = child.arotation;
      a2 = ((a2 + os) * spine.MathUtils.radDeg - child.ashearX) * s2 + os2 - rotation;
      if (a2 > 180) a2 -= 360;else if (a2 < -180) a2 += 360;
      child.updateWorldTransformWith(cx, cy, rotation + a2 * alpha, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
    };

    return IkConstraint;
  }();

  spine.IkConstraint = IkConstraint;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var IkConstraintData = function (_super) {
    __extends(IkConstraintData, _super);

    function IkConstraintData(name) {
      var _this = _super.call(this, name, 0, false) || this;

      _this.bones = new Array();
      _this.bendDirection = 1;
      _this.compress = false;
      _this.stretch = false;
      _this.uniform = false;
      _this.mix = 1;
      _this.softness = 0;
      return _this;
    }

    return IkConstraintData;
  }(spine.ConstraintData);

  spine.IkConstraintData = IkConstraintData;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var PathConstraint = function () {
    function PathConstraint(data, skeleton) {
      this.position = 0;
      this.spacing = 0;
      this.rotateMix = 0;
      this.translateMix = 0;
      this.spaces = new Array();
      this.positions = new Array();
      this.world = new Array();
      this.curves = new Array();
      this.lengths = new Array();
      this.segments = new Array();
      this.active = false;
      if (data == null) throw new Error("data cannot be null.");
      if (skeleton == null) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.bones = new Array();

      for (var i = 0, n = data.bones.length; i < n; i++) {
        this.bones.push(skeleton.findBone(data.bones[i].name));
      }

      this.target = skeleton.findSlot(data.target.name);
      this.position = data.position;
      this.spacing = data.spacing;
      this.rotateMix = data.rotateMix;
      this.translateMix = data.translateMix;
    }

    PathConstraint.prototype.isActive = function () {
      return this.active;
    };

    PathConstraint.prototype.apply = function () {
      this.update();
    };

    PathConstraint.prototype.update = function () {
      var attachment = this.target.getAttachment();
      if (!(attachment instanceof spine.PathAttachment)) return;
      var rotateMix = this.rotateMix,
          translateMix = this.translateMix;
      var translate = translateMix > 0,
          rotate = rotateMix > 0;
      if (!translate && !rotate) return;
      var data = this.data;
      var percentSpacing = data.spacingMode == spine.SpacingMode.Percent;
      var rotateMode = data.rotateMode;
      var tangents = rotateMode == spine.RotateMode.Tangent,
          scale = rotateMode == spine.RotateMode.ChainScale;
      var boneCount = this.bones.length,
          spacesCount = tangents ? boneCount : boneCount + 1;
      var bones = this.bones;
      var spaces = spine.Utils.setArraySize(this.spaces, spacesCount),
          lengths = null;
      var spacing = this.spacing;

      if (scale || !percentSpacing) {
        if (scale) lengths = spine.Utils.setArraySize(this.lengths, boneCount);
        var lengthSpacing = data.spacingMode == spine.SpacingMode.Length;

        for (var i = 0, n = spacesCount - 1; i < n;) {
          var bone = bones[i];
          var setupLength = bone.data.length;

          if (setupLength < PathConstraint.epsilon) {
            if (scale) lengths[i] = 0;
            spaces[++i] = 0;
          } else if (percentSpacing) {
            if (scale) {
              var x = setupLength * bone.a,
                  y = setupLength * bone.c;
              var length_1 = Math.sqrt(x * x + y * y);
              lengths[i] = length_1;
            }

            spaces[++i] = spacing;
          } else {
            var x = setupLength * bone.a,
                y = setupLength * bone.c;
            var length_2 = Math.sqrt(x * x + y * y);
            if (scale) lengths[i] = length_2;
            spaces[++i] = (lengthSpacing ? setupLength + spacing : spacing) * length_2 / setupLength;
          }
        }
      } else {
        for (var i = 1; i < spacesCount; i++) {
          spaces[i] = spacing;
        }
      }

      var positions = this.computeWorldPositions(attachment, spacesCount, tangents, data.positionMode == spine.PositionMode.Percent, percentSpacing);
      var boneX = positions[0],
          boneY = positions[1],
          offsetRotation = data.offsetRotation;
      var tip = false;
      if (offsetRotation == 0) tip = rotateMode == spine.RotateMode.Chain;else {
        tip = false;
        var p = this.target.bone;
        offsetRotation *= p.a * p.d - p.b * p.c > 0 ? spine.MathUtils.degRad : -spine.MathUtils.degRad;
      }

      for (var i = 0, p = 3; i < boneCount; i++, p += 3) {
        var bone = bones[i];
        bone.worldX += (boneX - bone.worldX) * translateMix;
        bone.worldY += (boneY - bone.worldY) * translateMix;
        var x = positions[p],
            y = positions[p + 1],
            dx = x - boneX,
            dy = y - boneY;

        if (scale) {
          var length_3 = lengths[i];

          if (length_3 != 0) {
            var s = (Math.sqrt(dx * dx + dy * dy) / length_3 - 1) * rotateMix + 1;
            bone.a *= s;
            bone.c *= s;
          }
        }

        boneX = x;
        boneY = y;

        if (rotate) {
          var a = bone.a,
              b = bone.b,
              c = bone.c,
              d = bone.d,
              r = 0,
              cos = 0,
              sin = 0;
          if (tangents) r = positions[p - 1];else if (spaces[i + 1] == 0) r = positions[p + 2];else r = Math.atan2(dy, dx);
          r -= Math.atan2(c, a);

          if (tip) {
            cos = Math.cos(r);
            sin = Math.sin(r);
            var length_4 = bone.data.length;
            boneX += (length_4 * (cos * a - sin * c) - dx) * rotateMix;
            boneY += (length_4 * (sin * a + cos * c) - dy) * rotateMix;
          } else {
            r += offsetRotation;
          }

          if (r > spine.MathUtils.PI) r -= spine.MathUtils.PI2;else if (r < -spine.MathUtils.PI) r += spine.MathUtils.PI2;
          r *= rotateMix;
          cos = Math.cos(r);
          sin = Math.sin(r);
          bone.a = cos * a - sin * c;
          bone.b = cos * b - sin * d;
          bone.c = sin * a + cos * c;
          bone.d = sin * b + cos * d;
        }

        bone.appliedValid = false;
      }
    };

    PathConstraint.prototype.computeWorldPositions = function (path, spacesCount, tangents, percentPosition, percentSpacing) {
      var target = this.target;
      var position = this.position;
      var spaces = this.spaces,
          out = spine.Utils.setArraySize(this.positions, spacesCount * 3 + 2),
          world = null;
      var closed = path.closed;
      var verticesLength = path.worldVerticesLength,
          curveCount = verticesLength / 6,
          prevCurve = PathConstraint.NONE;

      if (!path.constantSpeed) {
        var lengths = path.lengths;
        curveCount -= closed ? 1 : 2;
        var pathLength_1 = lengths[curveCount];
        if (percentPosition) position *= pathLength_1;

        if (percentSpacing) {
          for (var i = 1; i < spacesCount; i++) {
            spaces[i] *= pathLength_1;
          }
        }

        world = spine.Utils.setArraySize(this.world, 8);

        for (var i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
          var space = spaces[i];
          position += space;
          var p = position;

          if (closed) {
            p %= pathLength_1;
            if (p < 0) p += pathLength_1;
            curve = 0;
          } else if (p < 0) {
            if (prevCurve != PathConstraint.BEFORE) {
              prevCurve = PathConstraint.BEFORE;
              path.computeWorldVertices(target, 2, 4, world, 0, 2);
            }

            this.addBeforePosition(p, world, 0, out, o);
            continue;
          } else if (p > pathLength_1) {
            if (prevCurve != PathConstraint.AFTER) {
              prevCurve = PathConstraint.AFTER;
              path.computeWorldVertices(target, verticesLength - 6, 4, world, 0, 2);
            }

            this.addAfterPosition(p - pathLength_1, world, 0, out, o);
            continue;
          }

          for (;; curve++) {
            var length_5 = lengths[curve];
            if (p > length_5) continue;
            if (curve == 0) p /= length_5;else {
              var prev = lengths[curve - 1];
              p = (p - prev) / (length_5 - prev);
            }
            break;
          }

          if (curve != prevCurve) {
            prevCurve = curve;

            if (closed && curve == curveCount) {
              path.computeWorldVertices(target, verticesLength - 4, 4, world, 0, 2);
              path.computeWorldVertices(target, 0, 4, world, 4, 2);
            } else path.computeWorldVertices(target, curve * 6 + 2, 8, world, 0, 2);
          }

          this.addCurvePosition(p, world[0], world[1], world[2], world[3], world[4], world[5], world[6], world[7], out, o, tangents || i > 0 && space == 0);
        }

        return out;
      }

      if (closed) {
        verticesLength += 2;
        world = spine.Utils.setArraySize(this.world, verticesLength);
        path.computeWorldVertices(target, 2, verticesLength - 4, world, 0, 2);
        path.computeWorldVertices(target, 0, 2, world, verticesLength - 4, 2);
        world[verticesLength - 2] = world[0];
        world[verticesLength - 1] = world[1];
      } else {
        curveCount--;
        verticesLength -= 4;
        world = spine.Utils.setArraySize(this.world, verticesLength);
        path.computeWorldVertices(target, 2, verticesLength, world, 0, 2);
      }

      var curves = spine.Utils.setArraySize(this.curves, curveCount);
      var pathLength = 0;
      var x1 = world[0],
          y1 = world[1],
          cx1 = 0,
          cy1 = 0,
          cx2 = 0,
          cy2 = 0,
          x2 = 0,
          y2 = 0;
      var tmpx = 0,
          tmpy = 0,
          dddfx = 0,
          dddfy = 0,
          ddfx = 0,
          ddfy = 0,
          dfx = 0,
          dfy = 0;

      for (var i = 0, w = 2; i < curveCount; i++, w += 6) {
        cx1 = world[w];
        cy1 = world[w + 1];
        cx2 = world[w + 2];
        cy2 = world[w + 3];
        x2 = world[w + 4];
        y2 = world[w + 5];
        tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
        tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
        dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
        dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
        ddfx = tmpx * 2 + dddfx;
        ddfy = tmpy * 2 + dddfy;
        dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
        dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx;
        dfy += ddfy;
        ddfx += dddfx;
        ddfy += dddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx;
        dfy += ddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx + dddfx;
        dfy += ddfy + dddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        curves[i] = pathLength;
        x1 = x2;
        y1 = y2;
      }

      if (percentPosition) position *= pathLength;else position *= pathLength / path.lengths[curveCount - 1];

      if (percentSpacing) {
        for (var i = 1; i < spacesCount; i++) {
          spaces[i] *= pathLength;
        }
      }

      var segments = this.segments;
      var curveLength = 0;

      for (var i = 0, o = 0, curve = 0, segment = 0; i < spacesCount; i++, o += 3) {
        var space = spaces[i];
        position += space;
        var p = position;

        if (closed) {
          p %= pathLength;
          if (p < 0) p += pathLength;
          curve = 0;
        } else if (p < 0) {
          this.addBeforePosition(p, world, 0, out, o);
          continue;
        } else if (p > pathLength) {
          this.addAfterPosition(p - pathLength, world, verticesLength - 4, out, o);
          continue;
        }

        for (;; curve++) {
          var length_6 = curves[curve];
          if (p > length_6) continue;
          if (curve == 0) p /= length_6;else {
            var prev = curves[curve - 1];
            p = (p - prev) / (length_6 - prev);
          }
          break;
        }

        if (curve != prevCurve) {
          prevCurve = curve;
          var ii = curve * 6;
          x1 = world[ii];
          y1 = world[ii + 1];
          cx1 = world[ii + 2];
          cy1 = world[ii + 3];
          cx2 = world[ii + 4];
          cy2 = world[ii + 5];
          x2 = world[ii + 6];
          y2 = world[ii + 7];
          tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
          tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
          dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
          dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
          ddfx = tmpx * 2 + dddfx;
          ddfy = tmpy * 2 + dddfy;
          dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
          dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
          curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
          segments[0] = curveLength;

          for (ii = 1; ii < 8; ii++) {
            dfx += ddfx;
            dfy += ddfy;
            ddfx += dddfx;
            ddfy += dddfy;
            curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
            segments[ii] = curveLength;
          }

          dfx += ddfx;
          dfy += ddfy;
          curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
          segments[8] = curveLength;
          dfx += ddfx + dddfx;
          dfy += ddfy + dddfy;
          curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
          segments[9] = curveLength;
          segment = 0;
        }

        p *= curveLength;

        for (;; segment++) {
          var length_7 = segments[segment];
          if (p > length_7) continue;
          if (segment == 0) p /= length_7;else {
            var prev = segments[segment - 1];
            p = segment + (p - prev) / (length_7 - prev);
          }
          break;
        }

        this.addCurvePosition(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents || i > 0 && space == 0);
      }

      return out;
    };

    PathConstraint.prototype.addBeforePosition = function (p, temp, i, out, o) {
      var x1 = temp[i],
          y1 = temp[i + 1],
          dx = temp[i + 2] - x1,
          dy = temp[i + 3] - y1,
          r = Math.atan2(dy, dx);
      out[o] = x1 + p * Math.cos(r);
      out[o + 1] = y1 + p * Math.sin(r);
      out[o + 2] = r;
    };

    PathConstraint.prototype.addAfterPosition = function (p, temp, i, out, o) {
      var x1 = temp[i + 2],
          y1 = temp[i + 3],
          dx = x1 - temp[i],
          dy = y1 - temp[i + 1],
          r = Math.atan2(dy, dx);
      out[o] = x1 + p * Math.cos(r);
      out[o + 1] = y1 + p * Math.sin(r);
      out[o + 2] = r;
    };

    PathConstraint.prototype.addCurvePosition = function (p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
      if (p == 0 || isNaN(p)) {
        out[o] = x1;
        out[o + 1] = y1;
        out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
        return;
      }

      var tt = p * p,
          ttt = tt * p,
          u = 1 - p,
          uu = u * u,
          uuu = uu * u;
      var ut = u * p,
          ut3 = ut * 3,
          uut3 = u * ut3,
          utt3 = ut3 * p;
      var x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt,
          y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
      out[o] = x;
      out[o + 1] = y;

      if (tangents) {
        if (p < 0.001) out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);else out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
      }
    };

    PathConstraint.NONE = -1;
    PathConstraint.BEFORE = -2;
    PathConstraint.AFTER = -3;
    PathConstraint.epsilon = 0.00001;
    return PathConstraint;
  }();

  spine.PathConstraint = PathConstraint;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var PathConstraintData = function (_super) {
    __extends(PathConstraintData, _super);

    function PathConstraintData(name) {
      var _this = _super.call(this, name, 0, false) || this;

      _this.bones = new Array();
      return _this;
    }

    return PathConstraintData;
  }(spine.ConstraintData);

  spine.PathConstraintData = PathConstraintData;
  var PositionMode;

  (function (PositionMode) {
    PositionMode[PositionMode["Fixed"] = 0] = "Fixed";
    PositionMode[PositionMode["Percent"] = 1] = "Percent";
  })(PositionMode = spine.PositionMode || (spine.PositionMode = {}));

  var SpacingMode;

  (function (SpacingMode) {
    SpacingMode[SpacingMode["Length"] = 0] = "Length";
    SpacingMode[SpacingMode["Fixed"] = 1] = "Fixed";
    SpacingMode[SpacingMode["Percent"] = 2] = "Percent";
  })(SpacingMode = spine.SpacingMode || (spine.SpacingMode = {}));

  var RotateMode;

  (function (RotateMode) {
    RotateMode[RotateMode["Tangent"] = 0] = "Tangent";
    RotateMode[RotateMode["Chain"] = 1] = "Chain";
    RotateMode[RotateMode["ChainScale"] = 2] = "ChainScale";
  })(RotateMode = spine.RotateMode || (spine.RotateMode = {}));
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var Assets = function () {
    function Assets(clientId) {
      this.toLoad = new Array();
      this.assets = {};
      this.clientId = clientId;
    }

    Assets.prototype.loaded = function () {
      var i = 0;

      for (var v in this.assets) {
        i++;
      }

      return i;
    };

    return Assets;
  }();

  var SharedAssetManager = function () {
    function SharedAssetManager(pathPrefix) {
      if (pathPrefix === void 0) {
        pathPrefix = "";
      }

      this.clientAssets = {};
      this.queuedAssets = {};
      this.rawAssets = {};
      this.errors = {};
      this.pathPrefix = pathPrefix;
    }

    SharedAssetManager.prototype.queueAsset = function (clientId, textureLoader, path) {
      var clientAssets = this.clientAssets[clientId];

      if (clientAssets === null || clientAssets === undefined) {
        clientAssets = new Assets(clientId);
        this.clientAssets[clientId] = clientAssets;
      }

      if (textureLoader !== null) clientAssets.textureLoader = textureLoader;
      clientAssets.toLoad.push(path);

      if (this.queuedAssets[path] === path) {
        return false;
      } else {
        this.queuedAssets[path] = path;
        return true;
      }
    };

    SharedAssetManager.prototype.loadText = function (clientId, path) {
      var _this = this;

      path = this.pathPrefix + path;
      if (!this.queueAsset(clientId, null, path)) return;
      var request = new XMLHttpRequest();
      request.overrideMimeType("text/html");

      request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
          if (request.status >= 200 && request.status < 300) {
            _this.rawAssets[path] = request.responseText;
          } else {
            _this.errors[path] = "Couldn't load text " + path + ": status " + request.status + ", " + request.responseText;
          }
        }
      };

      request.open("GET", path, true);
      request.send();
    };

    SharedAssetManager.prototype.loadJson = function (clientId, path) {
      var _this = this;

      path = this.pathPrefix + path;
      if (!this.queueAsset(clientId, null, path)) return;
      var request = new XMLHttpRequest();
      request.overrideMimeType("text/html");

      request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
          if (request.status >= 200 && request.status < 300) {
            _this.rawAssets[path] = JSON.parse(request.responseText);
          } else {
            _this.errors[path] = "Couldn't load text " + path + ": status " + request.status + ", " + request.responseText;
          }
        }
      };

      request.open("GET", path, true);
      request.send();
    };

    SharedAssetManager.prototype.loadTexture = function (clientId, textureLoader, path) {
      var _this = this;

      path = this.pathPrefix + path;
      if (!this.queueAsset(clientId, textureLoader, path)) return;
      var img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = function (ev) {
        _this.rawAssets[path] = img;
      };

      img.onerror = function (ev) {
        _this.errors[path] = "Couldn't load image " + path;
      };

      img.src = path;
    };

    SharedAssetManager.prototype.get = function (clientId, path) {
      path = this.pathPrefix + path;
      var clientAssets = this.clientAssets[clientId];
      if (clientAssets === null || clientAssets === undefined) return true;
      return clientAssets.assets[path];
    };

    SharedAssetManager.prototype.updateClientAssets = function (clientAssets) {
      for (var i = 0; i < clientAssets.toLoad.length; i++) {
        var path = clientAssets.toLoad[i];
        var asset = clientAssets.assets[path];

        if (asset === null || asset === undefined) {
          var rawAsset = this.rawAssets[path];
          if (rawAsset === null || rawAsset === undefined) continue;

          if (rawAsset instanceof HTMLImageElement) {
            clientAssets.assets[path] = clientAssets.textureLoader(rawAsset);
          } else {
            clientAssets.assets[path] = rawAsset;
          }
        }
      }
    };

    SharedAssetManager.prototype.isLoadingComplete = function (clientId) {
      var clientAssets = this.clientAssets[clientId];
      if (clientAssets === null || clientAssets === undefined) return true;
      this.updateClientAssets(clientAssets);
      return clientAssets.toLoad.length == clientAssets.loaded();
    };

    SharedAssetManager.prototype.dispose = function () {};

    SharedAssetManager.prototype.hasErrors = function () {
      return Object.keys(this.errors).length > 0;
    };

    SharedAssetManager.prototype.getErrors = function () {
      return this.errors;
    };

    return SharedAssetManager;
  }();

  spine.SharedAssetManager = SharedAssetManager;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var Skeleton = function () {
    function Skeleton(data) {
      this._updateCache = new Array();
      this.updateCacheReset = new Array();
      this.time = 0;
      this.scaleX = 1;
      this.scaleY = 1;
      this.x = 0;
      this.y = 0;
      if (data == null) throw new Error("data cannot be null.");
      this.data = data;
      this.bones = new Array();

      for (var i = 0; i < data.bones.length; i++) {
        var boneData = data.bones[i];
        var bone = void 0;
        if (boneData.parent == null) bone = new spine.Bone(boneData, this, null);else {
          var parent_1 = this.bones[boneData.parent.index];
          bone = new spine.Bone(boneData, this, parent_1);
          parent_1.children.push(bone);
        }
        this.bones.push(bone);
      }

      this.slots = new Array();
      this.drawOrder = new Array();

      for (var i = 0; i < data.slots.length; i++) {
        var slotData = data.slots[i];
        var bone = this.bones[slotData.boneData.index];
        var slot = new spine.Slot(slotData, bone);
        this.slots.push(slot);
        this.drawOrder.push(slot);
      }

      this.ikConstraints = new Array();

      for (var i = 0; i < data.ikConstraints.length; i++) {
        var ikConstraintData = data.ikConstraints[i];
        this.ikConstraints.push(new spine.IkConstraint(ikConstraintData, this));
      }

      this.transformConstraints = new Array();

      for (var i = 0; i < data.transformConstraints.length; i++) {
        var transformConstraintData = data.transformConstraints[i];
        this.transformConstraints.push(new spine.TransformConstraint(transformConstraintData, this));
      }

      this.pathConstraints = new Array();

      for (var i = 0; i < data.pathConstraints.length; i++) {
        var pathConstraintData = data.pathConstraints[i];
        this.pathConstraints.push(new spine.PathConstraint(pathConstraintData, this));
      }

      this.color = new spine.Color(1, 1, 1, 1);
      this.updateCache();
    }

    Skeleton.prototype.updateCache = function () {
      var updateCache = this._updateCache;
      updateCache.length = 0;
      this.updateCacheReset.length = 0;
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        var bone = bones[i];
        bone.sorted = bone.data.skinRequired;
        bone.active = !bone.sorted;
      }

      if (this.skin != null) {
        var skinBones = this.skin.bones;

        for (var i = 0, n = this.skin.bones.length; i < n; i++) {
          var bone = this.bones[skinBones[i].index];

          do {
            bone.sorted = false;
            bone.active = true;
            bone = bone.parent;
          } while (bone != null);
        }
      }

      var ikConstraints = this.ikConstraints;
      var transformConstraints = this.transformConstraints;
      var pathConstraints = this.pathConstraints;
      var ikCount = ikConstraints.length,
          transformCount = transformConstraints.length,
          pathCount = pathConstraints.length;
      var constraintCount = ikCount + transformCount + pathCount;

      outer: for (var i = 0; i < constraintCount; i++) {
        for (var ii = 0; ii < ikCount; ii++) {
          var constraint = ikConstraints[ii];

          if (constraint.data.order == i) {
            this.sortIkConstraint(constraint);
            continue outer;
          }
        }

        for (var ii = 0; ii < transformCount; ii++) {
          var constraint = transformConstraints[ii];

          if (constraint.data.order == i) {
            this.sortTransformConstraint(constraint);
            continue outer;
          }
        }

        for (var ii = 0; ii < pathCount; ii++) {
          var constraint = pathConstraints[ii];

          if (constraint.data.order == i) {
            this.sortPathConstraint(constraint);
            continue outer;
          }
        }
      }

      for (var i = 0, n = bones.length; i < n; i++) {
        this.sortBone(bones[i]);
      }
    };

    Skeleton.prototype.sortIkConstraint = function (constraint) {
      constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || this.skin != null && spine.Utils.contains(this.skin.constraints, constraint.data, true));
      if (!constraint.active) return;
      var target = constraint.target;
      this.sortBone(target);
      var constrained = constraint.bones;
      var parent = constrained[0];
      this.sortBone(parent);

      if (constrained.length > 1) {
        var child = constrained[constrained.length - 1];
        if (!(this._updateCache.indexOf(child) > -1)) this.updateCacheReset.push(child);
      }

      this._updateCache.push(constraint);

      this.sortReset(parent.children);
      constrained[constrained.length - 1].sorted = true;
    };

    Skeleton.prototype.sortPathConstraint = function (constraint) {
      constraint.active = constraint.target.bone.isActive() && (!constraint.data.skinRequired || this.skin != null && spine.Utils.contains(this.skin.constraints, constraint.data, true));
      if (!constraint.active) return;
      var slot = constraint.target;
      var slotIndex = slot.data.index;
      var slotBone = slot.bone;
      if (this.skin != null) this.sortPathConstraintAttachment(this.skin, slotIndex, slotBone);
      if (this.data.defaultSkin != null && this.data.defaultSkin != this.skin) this.sortPathConstraintAttachment(this.data.defaultSkin, slotIndex, slotBone);

      for (var i = 0, n = this.data.skins.length; i < n; i++) {
        this.sortPathConstraintAttachment(this.data.skins[i], slotIndex, slotBone);
      }

      var attachment = slot.getAttachment();
      if (attachment instanceof spine.PathAttachment) this.sortPathConstraintAttachmentWith(attachment, slotBone);
      var constrained = constraint.bones;
      var boneCount = constrained.length;

      for (var i = 0; i < boneCount; i++) {
        this.sortBone(constrained[i]);
      }

      this._updateCache.push(constraint);

      for (var i = 0; i < boneCount; i++) {
        this.sortReset(constrained[i].children);
      }

      for (var i = 0; i < boneCount; i++) {
        constrained[i].sorted = true;
      }
    };

    Skeleton.prototype.sortTransformConstraint = function (constraint) {
      constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || this.skin != null && spine.Utils.contains(this.skin.constraints, constraint.data, true));
      if (!constraint.active) return;
      this.sortBone(constraint.target);
      var constrained = constraint.bones;
      var boneCount = constrained.length;

      if (constraint.data.local) {
        for (var i = 0; i < boneCount; i++) {
          var child = constrained[i];
          this.sortBone(child.parent);
          if (!(this._updateCache.indexOf(child) > -1)) this.updateCacheReset.push(child);
        }
      } else {
        for (var i = 0; i < boneCount; i++) {
          this.sortBone(constrained[i]);
        }
      }

      this._updateCache.push(constraint);

      for (var ii = 0; ii < boneCount; ii++) {
        this.sortReset(constrained[ii].children);
      }

      for (var ii = 0; ii < boneCount; ii++) {
        constrained[ii].sorted = true;
      }
    };

    Skeleton.prototype.sortPathConstraintAttachment = function (skin, slotIndex, slotBone) {
      var attachments = skin.attachments[slotIndex];
      if (!attachments) return;

      for (var key in attachments) {
        this.sortPathConstraintAttachmentWith(attachments[key], slotBone);
      }
    };

    Skeleton.prototype.sortPathConstraintAttachmentWith = function (attachment, slotBone) {
      if (!(attachment instanceof spine.PathAttachment)) return;
      var pathBones = attachment.bones;
      if (pathBones == null) this.sortBone(slotBone);else {
        var bones = this.bones;
        var i = 0;

        while (i < pathBones.length) {
          var boneCount = pathBones[i++];

          for (var n = i + boneCount; i < n; i++) {
            var boneIndex = pathBones[i];
            this.sortBone(bones[boneIndex]);
          }
        }
      }
    };

    Skeleton.prototype.sortBone = function (bone) {
      if (bone.sorted) return;
      var parent = bone.parent;
      if (parent != null) this.sortBone(parent);
      bone.sorted = true;

      this._updateCache.push(bone);
    };

    Skeleton.prototype.sortReset = function (bones) {
      for (var i = 0, n = bones.length; i < n; i++) {
        var bone = bones[i];
        if (!bone.active) continue;
        if (bone.sorted) this.sortReset(bone.children);
        bone.sorted = false;
      }
    };

    Skeleton.prototype.updateWorldTransform = function () {
      var updateCacheReset = this.updateCacheReset;

      for (var i = 0, n = updateCacheReset.length; i < n; i++) {
        var bone = updateCacheReset[i];
        bone.ax = bone.x;
        bone.ay = bone.y;
        bone.arotation = bone.rotation;
        bone.ascaleX = bone.scaleX;
        bone.ascaleY = bone.scaleY;
        bone.ashearX = bone.shearX;
        bone.ashearY = bone.shearY;
        bone.appliedValid = true;
      }

      var updateCache = this._updateCache;

      for (var i = 0, n = updateCache.length; i < n; i++) {
        updateCache[i].update();
      }
    };

    Skeleton.prototype.setToSetupPose = function () {
      this.setBonesToSetupPose();
      this.setSlotsToSetupPose();
    };

    Skeleton.prototype.setBonesToSetupPose = function () {
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        bones[i].setToSetupPose();
      }

      var ikConstraints = this.ikConstraints;

      for (var i = 0, n = ikConstraints.length; i < n; i++) {
        var constraint = ikConstraints[i];
        constraint.mix = constraint.data.mix;
        constraint.softness = constraint.data.softness;
        constraint.bendDirection = constraint.data.bendDirection;
        constraint.compress = constraint.data.compress;
        constraint.stretch = constraint.data.stretch;
      }

      var transformConstraints = this.transformConstraints;

      for (var i = 0, n = transformConstraints.length; i < n; i++) {
        var constraint = transformConstraints[i];
        var data = constraint.data;
        constraint.rotateMix = data.rotateMix;
        constraint.translateMix = data.translateMix;
        constraint.scaleMix = data.scaleMix;
        constraint.shearMix = data.shearMix;
      }

      var pathConstraints = this.pathConstraints;

      for (var i = 0, n = pathConstraints.length; i < n; i++) {
        var constraint = pathConstraints[i];
        var data = constraint.data;
        constraint.position = data.position;
        constraint.spacing = data.spacing;
        constraint.rotateMix = data.rotateMix;
        constraint.translateMix = data.translateMix;
      }
    };

    Skeleton.prototype.setSlotsToSetupPose = function () {
      var slots = this.slots;
      spine.Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);

      for (var i = 0, n = slots.length; i < n; i++) {
        slots[i].setToSetupPose();
      }
    };

    Skeleton.prototype.getRootBone = function () {
      if (this.bones.length == 0) return null;
      return this.bones[0];
    };

    Skeleton.prototype.findBone = function (boneName) {
      if (boneName == null) throw new Error("boneName cannot be null.");
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        var bone = bones[i];
        if (bone.data.name == boneName) return bone;
      }

      return null;
    };

    Skeleton.prototype.findBoneIndex = function (boneName) {
      if (boneName == null) throw new Error("boneName cannot be null.");
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        if (bones[i].data.name == boneName) return i;
      }

      return -1;
    };

    Skeleton.prototype.findSlot = function (slotName) {
      if (slotName == null) throw new Error("slotName cannot be null.");
      var slots = this.slots;

      for (var i = 0, n = slots.length; i < n; i++) {
        var slot = slots[i];
        if (slot.data.name == slotName) return slot;
      }

      return null;
    };

    Skeleton.prototype.findSlotIndex = function (slotName) {
      if (slotName == null) throw new Error("slotName cannot be null.");
      var slots = this.slots;

      for (var i = 0, n = slots.length; i < n; i++) {
        if (slots[i].data.name == slotName) return i;
      }

      return -1;
    };

    Skeleton.prototype.setSkinByName = function (skinName) {
      var skin = this.data.findSkin(skinName);
      if (skin == null) throw new Error("Skin not found: " + skinName);
      this.setSkin(skin);
    };

    Skeleton.prototype.setSkin = function (newSkin) {
      if (newSkin == this.skin) return;

      if (newSkin != null) {
        if (this.skin != null) newSkin.attachAll(this, this.skin);else {
          var slots = this.slots;

          for (var i = 0, n = slots.length; i < n; i++) {
            var slot = slots[i];
            var name_1 = slot.data.attachmentName;

            if (name_1 != null) {
              var attachment = newSkin.getAttachment(i, name_1);
              if (attachment != null) slot.setAttachment(attachment);
            }
          }
        }
      }

      this.skin = newSkin;
      this.updateCache();
    };

    Skeleton.prototype.getAttachmentByName = function (slotName, attachmentName) {
      return this.getAttachment(this.data.findSlotIndex(slotName), attachmentName);
    };

    Skeleton.prototype.getAttachment = function (slotIndex, attachmentName) {
      if (attachmentName == null) throw new Error("attachmentName cannot be null.");

      if (this.skin != null) {
        var attachment = this.skin.getAttachment(slotIndex, attachmentName);
        if (attachment != null) return attachment;
      }

      if (this.data.defaultSkin != null) return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
      return null;
    };

    Skeleton.prototype.setAttachment = function (slotName, attachmentName) {
      if (slotName == null) throw new Error("slotName cannot be null.");
      var slots = this.slots;

      for (var i = 0, n = slots.length; i < n; i++) {
        var slot = slots[i];

        if (slot.data.name == slotName) {
          var attachment = null;

          if (attachmentName != null) {
            attachment = this.getAttachment(i, attachmentName);
            if (attachment == null) throw new Error("Attachment not found: " + attachmentName + ", for slot: " + slotName);
          }

          slot.setAttachment(attachment);
          return;
        }
      }

      throw new Error("Slot not found: " + slotName);
    };

    Skeleton.prototype.findIkConstraint = function (constraintName) {
      if (constraintName == null) throw new Error("constraintName cannot be null.");
      var ikConstraints = this.ikConstraints;

      for (var i = 0, n = ikConstraints.length; i < n; i++) {
        var ikConstraint = ikConstraints[i];
        if (ikConstraint.data.name == constraintName) return ikConstraint;
      }

      return null;
    };

    Skeleton.prototype.findTransformConstraint = function (constraintName) {
      if (constraintName == null) throw new Error("constraintName cannot be null.");
      var transformConstraints = this.transformConstraints;

      for (var i = 0, n = transformConstraints.length; i < n; i++) {
        var constraint = transformConstraints[i];
        if (constraint.data.name == constraintName) return constraint;
      }

      return null;
    };

    Skeleton.prototype.findPathConstraint = function (constraintName) {
      if (constraintName == null) throw new Error("constraintName cannot be null.");
      var pathConstraints = this.pathConstraints;

      for (var i = 0, n = pathConstraints.length; i < n; i++) {
        var constraint = pathConstraints[i];
        if (constraint.data.name == constraintName) return constraint;
      }

      return null;
    };

    Skeleton.prototype.getBounds = function (offset, size, temp) {
      if (temp === void 0) {
        temp = new Array(2);
      }

      if (offset == null) throw new Error("offset cannot be null.");
      if (size == null) throw new Error("size cannot be null.");
      var drawOrder = this.drawOrder;
      var minX = Number.POSITIVE_INFINITY,
          minY = Number.POSITIVE_INFINITY,
          maxX = Number.NEGATIVE_INFINITY,
          maxY = Number.NEGATIVE_INFINITY;

      for (var i = 0, n = drawOrder.length; i < n; i++) {
        var slot = drawOrder[i];
        if (!slot.bone.active) continue;
        var verticesLength = 0;
        var vertices = null;
        var attachment = slot.getAttachment();

        if (attachment instanceof spine.RegionAttachment) {
          verticesLength = 8;
          vertices = spine.Utils.setArraySize(temp, verticesLength, 0);
          attachment.computeWorldVertices(slot.bone, vertices, 0, 2);
        } else if (attachment instanceof spine.MeshAttachment) {
          var mesh = attachment;
          verticesLength = mesh.worldVerticesLength;
          vertices = spine.Utils.setArraySize(temp, verticesLength, 0);
          mesh.computeWorldVertices(slot, 0, verticesLength, vertices, 0, 2);
        }

        if (vertices != null) {
          for (var ii = 0, nn = vertices.length; ii < nn; ii += 2) {
            var x = vertices[ii],
                y = vertices[ii + 1];
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      offset.set(minX, minY);
      size.set(maxX - minX, maxY - minY);
    };

    Skeleton.prototype.update = function (delta) {
      this.time += delta;
    };

    return Skeleton;
  }();

  spine.Skeleton = Skeleton;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var SkeletonBinary = function () {
    function SkeletonBinary(attachmentLoader) {
      this.scale = 1;
      this.linkedMeshes = new Array();
      this.attachmentLoader = attachmentLoader;
    }

    SkeletonBinary.prototype.readSkeletonData = function (binary) {
      var scale = this.scale;
      var skeletonData = new spine.SkeletonData();
      skeletonData.name = "";
      var input = new BinaryInput(binary);
      skeletonData.hash = input.readString();
      skeletonData.version = input.readString();
      skeletonData.x = input.readFloat();
      skeletonData.y = input.readFloat();
      skeletonData.width = input.readFloat();
      skeletonData.height = input.readFloat();
      var nonessential = input.readBoolean();

      if (nonessential) {
        skeletonData.fps = input.readFloat();
        skeletonData.imagesPath = input.readString();
        skeletonData.audioPath = input.readString();
      }

      var n = 0;
      n = input.readInt(true);

      for (var i = 0; i < n; i++) {
        input.strings.push(input.readString());
      }

      n = input.readInt(true);

      for (var i = 0; i < n; i++) {
        var name_2 = input.readString();
        var parent_2 = i == 0 ? null : skeletonData.bones[input.readInt(true)];
        var data = new spine.BoneData(i, name_2, parent_2);
        data.rotation = input.readFloat();
        data.x = input.readFloat() * scale;
        data.y = input.readFloat() * scale;
        data.scaleX = input.readFloat();
        data.scaleY = input.readFloat();
        data.shearX = input.readFloat();
        data.shearY = input.readFloat();
        data.length = input.readFloat() * scale;
        data.transformMode = SkeletonBinary.TransformModeValues[input.readInt(true)];
        data.skinRequired = input.readBoolean();
        if (nonessential) spine.Color.rgba8888ToColor(data.color, input.readInt32());
        skeletonData.bones.push(data);
      }

      n = input.readInt(true);

      for (var i = 0; i < n; i++) {
        var slotName = input.readString();
        var boneData = skeletonData.bones[input.readInt(true)];
        var data = new spine.SlotData(i, slotName, boneData);
        spine.Color.rgba8888ToColor(data.color, input.readInt32());
        var darkColor = input.readInt32();
        if (darkColor != -1) spine.Color.rgb888ToColor(data.darkColor = new spine.Color(), darkColor);
        data.attachmentName = input.readStringRef();
        data.blendMode = SkeletonBinary.BlendModeValues[input.readInt(true)];
        skeletonData.slots.push(data);
      }

      n = input.readInt(true);

      for (var i = 0, nn = void 0; i < n; i++) {
        var data = new spine.IkConstraintData(input.readString());
        data.order = input.readInt(true);
        data.skinRequired = input.readBoolean();
        nn = input.readInt(true);

        for (var ii = 0; ii < nn; ii++) {
          data.bones.push(skeletonData.bones[input.readInt(true)]);
        }

        data.target = skeletonData.bones[input.readInt(true)];
        data.mix = input.readFloat();
        data.softness = input.readFloat() * scale;
        data.bendDirection = input.readByte();
        data.compress = input.readBoolean();
        data.stretch = input.readBoolean();
        data.uniform = input.readBoolean();
        skeletonData.ikConstraints.push(data);
      }

      n = input.readInt(true);

      for (var i = 0, nn = void 0; i < n; i++) {
        var data = new spine.TransformConstraintData(input.readString());
        data.order = input.readInt(true);
        data.skinRequired = input.readBoolean();
        nn = input.readInt(true);

        for (var ii = 0; ii < nn; ii++) {
          data.bones.push(skeletonData.bones[input.readInt(true)]);
        }

        data.target = skeletonData.bones[input.readInt(true)];
        data.local = input.readBoolean();
        data.relative = input.readBoolean();
        data.offsetRotation = input.readFloat();
        data.offsetX = input.readFloat() * scale;
        data.offsetY = input.readFloat() * scale;
        data.offsetScaleX = input.readFloat();
        data.offsetScaleY = input.readFloat();
        data.offsetShearY = input.readFloat();
        data.rotateMix = input.readFloat();
        data.translateMix = input.readFloat();
        data.scaleMix = input.readFloat();
        data.shearMix = input.readFloat();
        skeletonData.transformConstraints.push(data);
      }

      n = input.readInt(true);

      for (var i = 0, nn = void 0; i < n; i++) {
        var data = new spine.PathConstraintData(input.readString());
        data.order = input.readInt(true);
        data.skinRequired = input.readBoolean();
        nn = input.readInt(true);

        for (var ii = 0; ii < nn; ii++) {
          data.bones.push(skeletonData.bones[input.readInt(true)]);
        }

        data.target = skeletonData.slots[input.readInt(true)];
        data.positionMode = SkeletonBinary.PositionModeValues[input.readInt(true)];
        data.spacingMode = SkeletonBinary.SpacingModeValues[input.readInt(true)];
        data.rotateMode = SkeletonBinary.RotateModeValues[input.readInt(true)];
        data.offsetRotation = input.readFloat();
        data.position = input.readFloat();
        if (data.positionMode == spine.PositionMode.Fixed) data.position *= scale;
        data.spacing = input.readFloat();
        if (data.spacingMode == spine.SpacingMode.Length || data.spacingMode == spine.SpacingMode.Fixed) data.spacing *= scale;
        data.rotateMix = input.readFloat();
        data.translateMix = input.readFloat();
        skeletonData.pathConstraints.push(data);
      }

      var defaultSkin = this.readSkin(input, skeletonData, true, nonessential);

      if (defaultSkin != null) {
        skeletonData.defaultSkin = defaultSkin;
        skeletonData.skins.push(defaultSkin);
      }

      {
        var i = skeletonData.skins.length;
        spine.Utils.setArraySize(skeletonData.skins, n = i + input.readInt(true));

        for (; i < n; i++) {
          skeletonData.skins[i] = this.readSkin(input, skeletonData, false, nonessential);
        }
      }
      n = this.linkedMeshes.length;

      for (var i = 0; i < n; i++) {
        var linkedMesh = this.linkedMeshes[i];
        var skin = linkedMesh.skin == null ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
        if (skin == null) throw new Error("Skin not found: " + linkedMesh.skin);
        var parent_3 = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
        if (parent_3 == null) throw new Error("Parent mesh not found: " + linkedMesh.parent);
        linkedMesh.mesh.deformAttachment = linkedMesh.inheritDeform ? parent_3 : linkedMesh.mesh;
        linkedMesh.mesh.setParentMesh(parent_3);
        linkedMesh.mesh.updateUVs();
      }

      this.linkedMeshes.length = 0;
      n = input.readInt(true);

      for (var i = 0; i < n; i++) {
        var data = new spine.EventData(input.readStringRef());
        data.intValue = input.readInt(false);
        data.floatValue = input.readFloat();
        data.stringValue = input.readString();
        data.audioPath = input.readString();

        if (data.audioPath != null) {
          data.volume = input.readFloat();
          data.balance = input.readFloat();
        }

        skeletonData.events.push(data);
      }

      n = input.readInt(true);

      for (var i = 0; i < n; i++) {
        skeletonData.animations.push(this.readAnimation(input, input.readString(), skeletonData));
      }

      return skeletonData;
    };

    SkeletonBinary.prototype.readSkin = function (input, skeletonData, defaultSkin, nonessential) {
      var skin = null;
      var slotCount = 0;

      if (defaultSkin) {
        slotCount = input.readInt(true);
        if (slotCount == 0) return null;
        skin = new spine.Skin("default");
      } else {
        skin = new spine.Skin(input.readStringRef());
        skin.bones.length = input.readInt(true);

        for (var i = 0, n = skin.bones.length; i < n; i++) {
          skin.bones[i] = skeletonData.bones[input.readInt(true)];
        }

        for (var i = 0, n = input.readInt(true); i < n; i++) {
          skin.constraints.push(skeletonData.ikConstraints[input.readInt(true)]);
        }

        for (var i = 0, n = input.readInt(true); i < n; i++) {
          skin.constraints.push(skeletonData.transformConstraints[input.readInt(true)]);
        }

        for (var i = 0, n = input.readInt(true); i < n; i++) {
          skin.constraints.push(skeletonData.pathConstraints[input.readInt(true)]);
        }

        slotCount = input.readInt(true);
      }

      for (var i = 0; i < slotCount; i++) {
        var slotIndex = input.readInt(true);

        for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          var name_3 = input.readStringRef();
          var attachment = this.readAttachment(input, skeletonData, skin, slotIndex, name_3, nonessential);
          if (attachment != null) skin.setAttachment(slotIndex, name_3, attachment);
        }
      }

      return skin;
    };

    SkeletonBinary.prototype.readAttachment = function (input, skeletonData, skin, slotIndex, attachmentName, nonessential) {
      var scale = this.scale;
      var name = input.readStringRef();
      if (name == null) name = attachmentName;
      var typeIndex = input.readByte();
      var type = SkeletonBinary.AttachmentTypeValues[typeIndex];

      switch (type) {
        case spine.AttachmentType.Region:
          {
            var path = input.readStringRef();
            var rotation = input.readFloat();
            var x = input.readFloat();
            var y = input.readFloat();
            var scaleX = input.readFloat();
            var scaleY = input.readFloat();
            var width = input.readFloat();
            var height = input.readFloat();
            var color = input.readInt32();
            if (path == null) path = name;
            var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
            if (region == null) return null;
            region.path = path;
            region.x = x * scale;
            region.y = y * scale;
            region.scaleX = scaleX;
            region.scaleY = scaleY;
            region.rotation = rotation;
            region.width = width * scale;
            region.height = height * scale;
            spine.Color.rgba8888ToColor(region.color, color);
            region.updateOffset();
            return region;
          }

        case spine.AttachmentType.BoundingBox:
          {
            var vertexCount = input.readInt(true);
            var vertices = this.readVertices(input, vertexCount);
            var color = nonessential ? input.readInt32() : 0;
            var box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
            if (box == null) return null;
            box.worldVerticesLength = vertexCount << 1;
            box.vertices = vertices.vertices;
            box.bones = vertices.bones;
            if (nonessential) spine.Color.rgba8888ToColor(box.color, color);
            return box;
          }

        case spine.AttachmentType.Mesh:
          {
            var path = input.readStringRef();
            var color = input.readInt32();
            var vertexCount = input.readInt(true);
            var uvs = this.readFloatArray(input, vertexCount << 1, 1);
            var triangles = this.readShortArray(input);
            var vertices = this.readVertices(input, vertexCount);
            var hullLength = input.readInt(true);
            var edges = null;
            var width = 0,
                height = 0;

            if (nonessential) {
              edges = this.readShortArray(input);
              width = input.readFloat();
              height = input.readFloat();
            }

            if (path == null) path = name;
            var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
            if (mesh == null) return null;
            mesh.path = path;
            spine.Color.rgba8888ToColor(mesh.color, color);
            mesh.bones = vertices.bones;
            mesh.vertices = vertices.vertices;
            mesh.worldVerticesLength = vertexCount << 1;
            mesh.triangles = triangles;
            mesh.regionUVs = uvs;
            mesh.updateUVs();
            mesh.hullLength = hullLength << 1;

            if (nonessential) {
              mesh.edges = edges;
              mesh.width = width * scale;
              mesh.height = height * scale;
            }

            return mesh;
          }

        case spine.AttachmentType.LinkedMesh:
          {
            var path = input.readStringRef();
            var color = input.readInt32();
            var skinName = input.readStringRef();
            var parent_4 = input.readStringRef();
            var inheritDeform = input.readBoolean();
            var width = 0,
                height = 0;

            if (nonessential) {
              width = input.readFloat();
              height = input.readFloat();
            }

            if (path == null) path = name;
            var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
            if (mesh == null) return null;
            mesh.path = path;
            spine.Color.rgba8888ToColor(mesh.color, color);

            if (nonessential) {
              mesh.width = width * scale;
              mesh.height = height * scale;
            }

            this.linkedMeshes.push(new LinkedMesh(mesh, skinName, slotIndex, parent_4, inheritDeform));
            return mesh;
          }

        case spine.AttachmentType.Path:
          {
            var closed_1 = input.readBoolean();
            var constantSpeed = input.readBoolean();
            var vertexCount = input.readInt(true);
            var vertices = this.readVertices(input, vertexCount);
            var lengths = spine.Utils.newArray(vertexCount / 3, 0);

            for (var i = 0, n = lengths.length; i < n; i++) {
              lengths[i] = input.readFloat() * scale;
            }

            var color = nonessential ? input.readInt32() : 0;
            var path = this.attachmentLoader.newPathAttachment(skin, name);
            if (path == null) return null;
            path.closed = closed_1;
            path.constantSpeed = constantSpeed;
            path.worldVerticesLength = vertexCount << 1;
            path.vertices = vertices.vertices;
            path.bones = vertices.bones;
            path.lengths = lengths;
            if (nonessential) spine.Color.rgba8888ToColor(path.color, color);
            return path;
          }

        case spine.AttachmentType.Point:
          {
            var rotation = input.readFloat();
            var x = input.readFloat();
            var y = input.readFloat();
            var color = nonessential ? input.readInt32() : 0;
            var point = this.attachmentLoader.newPointAttachment(skin, name);
            if (point == null) return null;
            point.x = x * scale;
            point.y = y * scale;
            point.rotation = rotation;
            if (nonessential) spine.Color.rgba8888ToColor(point.color, color);
            return point;
          }

        case spine.AttachmentType.Clipping:
          {
            var endSlotIndex = input.readInt(true);
            var vertexCount = input.readInt(true);
            var vertices = this.readVertices(input, vertexCount);
            var color = nonessential ? input.readInt32() : 0;
            var clip = this.attachmentLoader.newClippingAttachment(skin, name);
            if (clip == null) return null;
            clip.endSlot = skeletonData.slots[endSlotIndex];
            clip.worldVerticesLength = vertexCount << 1;
            clip.vertices = vertices.vertices;
            clip.bones = vertices.bones;
            if (nonessential) spine.Color.rgba8888ToColor(clip.color, color);
            return clip;
          }
      }

      return null;
    };

    SkeletonBinary.prototype.readVertices = function (input, vertexCount) {
      var verticesLength = vertexCount << 1;
      var vertices = new Vertices();
      var scale = this.scale;

      if (!input.readBoolean()) {
        vertices.vertices = this.readFloatArray(input, verticesLength, scale);
        return vertices;
      }

      var weights = new Array();
      var bonesArray = new Array();

      for (var i = 0; i < vertexCount; i++) {
        var boneCount = input.readInt(true);
        bonesArray.push(boneCount);

        for (var ii = 0; ii < boneCount; ii++) {
          bonesArray.push(input.readInt(true));
          weights.push(input.readFloat() * scale);
          weights.push(input.readFloat() * scale);
          weights.push(input.readFloat());
        }
      }

      vertices.vertices = spine.Utils.toFloatArray(weights);
      vertices.bones = bonesArray;
      return vertices;
    };

    SkeletonBinary.prototype.readFloatArray = function (input, n, scale) {
      var array = new Array(n);

      if (scale == 1) {
        for (var i = 0; i < n; i++) {
          array[i] = input.readFloat();
        }
      } else {
        for (var i = 0; i < n; i++) {
          array[i] = input.readFloat() * scale;
        }
      }

      return array;
    };

    SkeletonBinary.prototype.readShortArray = function (input) {
      var n = input.readInt(true);
      var array = new Array(n);

      for (var i = 0; i < n; i++) {
        array[i] = input.readShort();
      }

      return array;
    };

    SkeletonBinary.prototype.readAnimation = function (input, name, skeletonData) {
      var timelines = new Array();
      var scale = this.scale;
      var duration = 0;
      var tempColor1 = new spine.Color();
      var tempColor2 = new spine.Color();

      for (var i = 0, n = input.readInt(true); i < n; i++) {
        var slotIndex = input.readInt(true);

        for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          var timelineType = input.readByte();
          var frameCount = input.readInt(true);

          switch (timelineType) {
            case SkeletonBinary.SLOT_ATTACHMENT:
              {
                var timeline = new spine.AttachmentTimeline(frameCount);
                timeline.slotIndex = slotIndex;

                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                  timeline.setFrame(frameIndex, input.readFloat(), input.readStringRef());
                }

                timelines.push(timeline);
                duration = Math.max(duration, timeline.frames[frameCount - 1]);
                break;
              }

            case SkeletonBinary.SLOT_COLOR:
              {
                var timeline = new spine.ColorTimeline(frameCount);
                timeline.slotIndex = slotIndex;

                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                  var time = input.readFloat();
                  spine.Color.rgba8888ToColor(tempColor1, input.readInt32());
                  timeline.setFrame(frameIndex, time, tempColor1.r, tempColor1.g, tempColor1.b, tempColor1.a);
                  if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
                }

                timelines.push(timeline);
                duration = Math.max(duration, timeline.frames[(frameCount - 1) * spine.ColorTimeline.ENTRIES]);
                break;
              }

            case SkeletonBinary.SLOT_TWO_COLOR:
              {
                var timeline = new spine.TwoColorTimeline(frameCount);
                timeline.slotIndex = slotIndex;

                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                  var time = input.readFloat();
                  spine.Color.rgba8888ToColor(tempColor1, input.readInt32());
                  spine.Color.rgb888ToColor(tempColor2, input.readInt32());
                  timeline.setFrame(frameIndex, time, tempColor1.r, tempColor1.g, tempColor1.b, tempColor1.a, tempColor2.r, tempColor2.g, tempColor2.b);
                  if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
                }

                timelines.push(timeline);
                duration = Math.max(duration, timeline.frames[(frameCount - 1) * spine.TwoColorTimeline.ENTRIES]);
                break;
              }
          }
        }
      }

      for (var i = 0, n = input.readInt(true); i < n; i++) {
        var boneIndex = input.readInt(true);

        for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          var timelineType = input.readByte();
          var frameCount = input.readInt(true);

          switch (timelineType) {
            case SkeletonBinary.BONE_ROTATE:
              {
                var timeline = new spine.RotateTimeline(frameCount);
                timeline.boneIndex = boneIndex;

                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                  timeline.setFrame(frameIndex, input.readFloat(), input.readFloat());
                  if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
                }

                timelines.push(timeline);
                duration = Math.max(duration, timeline.frames[(frameCount - 1) * spine.RotateTimeline.ENTRIES]);
                break;
              }

            case SkeletonBinary.BONE_TRANSLATE:
            case SkeletonBinary.BONE_SCALE:
            case SkeletonBinary.BONE_SHEAR:
              {
                var timeline = void 0;
                var timelineScale = 1;
                if (timelineType == SkeletonBinary.BONE_SCALE) timeline = new spine.ScaleTimeline(frameCount);else if (timelineType == SkeletonBinary.BONE_SHEAR) timeline = new spine.ShearTimeline(frameCount);else {
                  timeline = new spine.TranslateTimeline(frameCount);
                  timelineScale = scale;
                }
                timeline.boneIndex = boneIndex;

                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                  timeline.setFrame(frameIndex, input.readFloat(), input.readFloat() * timelineScale, input.readFloat() * timelineScale);
                  if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
                }

                timelines.push(timeline);
                duration = Math.max(duration, timeline.frames[(frameCount - 1) * spine.TranslateTimeline.ENTRIES]);
                break;
              }
          }
        }
      }

      for (var i = 0, n = input.readInt(true); i < n; i++) {
        var index = input.readInt(true);
        var frameCount = input.readInt(true);
        var timeline = new spine.IkConstraintTimeline(frameCount);
        timeline.ikConstraintIndex = index;

        for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
          timeline.setFrame(frameIndex, input.readFloat(), input.readFloat(), input.readFloat() * scale, input.readByte(), input.readBoolean(), input.readBoolean());
          if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
        }

        timelines.push(timeline);
        duration = Math.max(duration, timeline.frames[(frameCount - 1) * spine.IkConstraintTimeline.ENTRIES]);
      }

      for (var i = 0, n = input.readInt(true); i < n; i++) {
        var index = input.readInt(true);
        var frameCount = input.readInt(true);
        var timeline = new spine.TransformConstraintTimeline(frameCount);
        timeline.transformConstraintIndex = index;

        for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
          timeline.setFrame(frameIndex, input.readFloat(), input.readFloat(), input.readFloat(), input.readFloat(), input.readFloat());
          if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
        }

        timelines.push(timeline);
        duration = Math.max(duration, timeline.frames[(frameCount - 1) * spine.TransformConstraintTimeline.ENTRIES]);
      }

      for (var i = 0, n = input.readInt(true); i < n; i++) {
        var index = input.readInt(true);
        var data = skeletonData.pathConstraints[index];

        for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          var timelineType = input.readByte();
          var frameCount = input.readInt(true);

          switch (timelineType) {
            case SkeletonBinary.PATH_POSITION:
            case SkeletonBinary.PATH_SPACING:
              {
                var timeline = void 0;
                var timelineScale = 1;

                if (timelineType == SkeletonBinary.PATH_SPACING) {
                  timeline = new spine.PathConstraintSpacingTimeline(frameCount);
                  if (data.spacingMode == spine.SpacingMode.Length || data.spacingMode == spine.SpacingMode.Fixed) timelineScale = scale;
                } else {
                  timeline = new spine.PathConstraintPositionTimeline(frameCount);
                  if (data.positionMode == spine.PositionMode.Fixed) timelineScale = scale;
                }

                timeline.pathConstraintIndex = index;

                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                  timeline.setFrame(frameIndex, input.readFloat(), input.readFloat() * timelineScale);
                  if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
                }

                timelines.push(timeline);
                duration = Math.max(duration, timeline.frames[(frameCount - 1) * spine.PathConstraintPositionTimeline.ENTRIES]);
                break;
              }

            case SkeletonBinary.PATH_MIX:
              {
                var timeline = new spine.PathConstraintMixTimeline(frameCount);
                timeline.pathConstraintIndex = index;

                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                  timeline.setFrame(frameIndex, input.readFloat(), input.readFloat(), input.readFloat());
                  if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
                }

                timelines.push(timeline);
                duration = Math.max(duration, timeline.frames[(frameCount - 1) * spine.PathConstraintMixTimeline.ENTRIES]);
                break;
              }
          }
        }
      }

      for (var i = 0, n = input.readInt(true); i < n; i++) {
        var skin = skeletonData.skins[input.readInt(true)];

        for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          var slotIndex = input.readInt(true);

          for (var iii = 0, nnn = input.readInt(true); iii < nnn; iii++) {
            var attachment = skin.getAttachment(slotIndex, input.readStringRef());
            var weighted = attachment.bones != null;
            var vertices = attachment.vertices;
            var deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
            var frameCount = input.readInt(true);
            var timeline = new spine.DeformTimeline(frameCount);
            timeline.slotIndex = slotIndex;
            timeline.attachment = attachment;

            for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
              var time = input.readFloat();
              var deform = void 0;
              var end = input.readInt(true);
              if (end == 0) deform = weighted ? spine.Utils.newFloatArray(deformLength) : vertices;else {
                deform = spine.Utils.newFloatArray(deformLength);
                var start = input.readInt(true);
                end += start;

                if (scale == 1) {
                  for (var v = start; v < end; v++) {
                    deform[v] = input.readFloat();
                  }
                } else {
                  for (var v = start; v < end; v++) {
                    deform[v] = input.readFloat() * scale;
                  }
                }

                if (!weighted) {
                  for (var v = 0, vn = deform.length; v < vn; v++) {
                    deform[v] += vertices[v];
                  }
                }
              }
              timeline.setFrame(frameIndex, time, deform);
              if (frameIndex < frameCount - 1) this.readCurve(input, frameIndex, timeline);
            }

            timelines.push(timeline);
            duration = Math.max(duration, timeline.frames[frameCount - 1]);
          }
        }
      }

      var drawOrderCount = input.readInt(true);

      if (drawOrderCount > 0) {
        var timeline = new spine.DrawOrderTimeline(drawOrderCount);
        var slotCount = skeletonData.slots.length;

        for (var i = 0; i < drawOrderCount; i++) {
          var time = input.readFloat();
          var offsetCount = input.readInt(true);
          var drawOrder = spine.Utils.newArray(slotCount, 0);

          for (var ii = slotCount - 1; ii >= 0; ii--) {
            drawOrder[ii] = -1;
          }

          var unchanged = spine.Utils.newArray(slotCount - offsetCount, 0);
          var originalIndex = 0,
              unchangedIndex = 0;

          for (var ii = 0; ii < offsetCount; ii++) {
            var slotIndex = input.readInt(true);

            while (originalIndex != slotIndex) {
              unchanged[unchangedIndex++] = originalIndex++;
            }

            drawOrder[originalIndex + input.readInt(true)] = originalIndex++;
          }

          while (originalIndex < slotCount) {
            unchanged[unchangedIndex++] = originalIndex++;
          }

          for (var ii = slotCount - 1; ii >= 0; ii--) {
            if (drawOrder[ii] == -1) drawOrder[ii] = unchanged[--unchangedIndex];
          }

          timeline.setFrame(i, time, drawOrder);
        }

        timelines.push(timeline);
        duration = Math.max(duration, timeline.frames[drawOrderCount - 1]);
      }

      var eventCount = input.readInt(true);

      if (eventCount > 0) {
        var timeline = new spine.EventTimeline(eventCount);

        for (var i = 0; i < eventCount; i++) {
          var time = input.readFloat();
          var eventData = skeletonData.events[input.readInt(true)];
          var event_4 = new spine.Event(time, eventData);
          event_4.intValue = input.readInt(false);
          event_4.floatValue = input.readFloat();
          event_4.stringValue = input.readBoolean() ? input.readString() : eventData.stringValue;

          if (event_4.data.audioPath != null) {
            event_4.volume = input.readFloat();
            event_4.balance = input.readFloat();
          }

          timeline.setFrame(i, event_4);
        }

        timelines.push(timeline);
        duration = Math.max(duration, timeline.frames[eventCount - 1]);
      }

      return new spine.Animation(name, timelines, duration);
    };

    SkeletonBinary.prototype.readCurve = function (input, frameIndex, timeline) {
      switch (input.readByte()) {
        case SkeletonBinary.CURVE_STEPPED:
          timeline.setStepped(frameIndex);
          break;

        case SkeletonBinary.CURVE_BEZIER:
          this.setCurve(timeline, frameIndex, input.readFloat(), input.readFloat(), input.readFloat(), input.readFloat());
          break;
      }
    };

    SkeletonBinary.prototype.setCurve = function (timeline, frameIndex, cx1, cy1, cx2, cy2) {
      timeline.setCurve(frameIndex, cx1, cy1, cx2, cy2);
    };

    SkeletonBinary.AttachmentTypeValues = [0, 1, 2, 3, 4, 5, 6];
    SkeletonBinary.TransformModeValues = [spine.TransformMode.Normal, spine.TransformMode.OnlyTranslation, spine.TransformMode.NoRotationOrReflection, spine.TransformMode.NoScale, spine.TransformMode.NoScaleOrReflection];
    SkeletonBinary.PositionModeValues = [spine.PositionMode.Fixed, spine.PositionMode.Percent];
    SkeletonBinary.SpacingModeValues = [spine.SpacingMode.Length, spine.SpacingMode.Fixed, spine.SpacingMode.Percent];
    SkeletonBinary.RotateModeValues = [spine.RotateMode.Tangent, spine.RotateMode.Chain, spine.RotateMode.ChainScale];
    SkeletonBinary.BlendModeValues = [spine.BlendMode.Normal, spine.BlendMode.Additive, spine.BlendMode.Multiply, spine.BlendMode.Screen];
    SkeletonBinary.BONE_ROTATE = 0;
    SkeletonBinary.BONE_TRANSLATE = 1;
    SkeletonBinary.BONE_SCALE = 2;
    SkeletonBinary.BONE_SHEAR = 3;
    SkeletonBinary.SLOT_ATTACHMENT = 0;
    SkeletonBinary.SLOT_COLOR = 1;
    SkeletonBinary.SLOT_TWO_COLOR = 2;
    SkeletonBinary.PATH_POSITION = 0;
    SkeletonBinary.PATH_SPACING = 1;
    SkeletonBinary.PATH_MIX = 2;
    SkeletonBinary.CURVE_LINEAR = 0;
    SkeletonBinary.CURVE_STEPPED = 1;
    SkeletonBinary.CURVE_BEZIER = 2;
    return SkeletonBinary;
  }();

  spine.SkeletonBinary = SkeletonBinary;

  var BinaryInput = function () {
    function BinaryInput(data, strings, index, buffer) {
      if (strings === void 0) {
        strings = new Array();
      }

      if (index === void 0) {
        index = 0;
      }

      if (buffer === void 0) {
        buffer = new DataView(data.buffer);
      }

      this.strings = strings;
      this.index = index;
      this.buffer = buffer;
    }

    BinaryInput.prototype.readByte = function () {
      return this.buffer.getInt8(this.index++);
    };

    BinaryInput.prototype.readShort = function () {
      var value = this.buffer.getInt16(this.index);
      this.index += 2;
      return value;
    };

    BinaryInput.prototype.readInt32 = function () {
      var value = this.buffer.getInt32(this.index);
      this.index += 4;
      return value;
    };

    BinaryInput.prototype.readInt = function (optimizePositive) {
      var b = this.readByte();
      var result = b & 0x7F;

      if ((b & 0x80) != 0) {
        b = this.readByte();
        result |= (b & 0x7F) << 7;

        if ((b & 0x80) != 0) {
          b = this.readByte();
          result |= (b & 0x7F) << 14;

          if ((b & 0x80) != 0) {
            b = this.readByte();
            result |= (b & 0x7F) << 21;

            if ((b & 0x80) != 0) {
              b = this.readByte();
              result |= (b & 0x7F) << 28;
            }
          }
        }
      }

      return optimizePositive ? result : result >>> 1 ^ -(result & 1);
    };

    BinaryInput.prototype.readStringRef = function () {
      var index = this.readInt(true);
      return index == 0 ? null : this.strings[index - 1];
    };

    BinaryInput.prototype.readString = function () {
      var byteCount = this.readInt(true);

      switch (byteCount) {
        case 0:
          return null;

        case 1:
          return "";
      }

      byteCount--;
      var chars = "";
      var charCount = 0;

      for (var i = 0; i < byteCount;) {
        var b = this.readByte();

        switch (b >> 4) {
          case 12:
          case 13:
            chars += String.fromCharCode((b & 0x1F) << 6 | this.readByte() & 0x3F);
            i += 2;
            break;

          case 14:
            chars += String.fromCharCode((b & 0x0F) << 12 | (this.readByte() & 0x3F) << 6 | this.readByte() & 0x3F);
            i += 3;
            break;

          default:
            chars += String.fromCharCode(b);
            i++;
        }
      }

      return chars;
    };

    BinaryInput.prototype.readFloat = function () {
      var value = this.buffer.getFloat32(this.index);
      this.index += 4;
      return value;
    };

    BinaryInput.prototype.readBoolean = function () {
      return this.readByte() != 0;
    };

    return BinaryInput;
  }();

  var LinkedMesh = function () {
    function LinkedMesh(mesh, skin, slotIndex, parent, inheritDeform) {
      this.mesh = mesh;
      this.skin = skin;
      this.slotIndex = slotIndex;
      this.parent = parent;
      this.inheritDeform = inheritDeform;
    }

    return LinkedMesh;
  }();

  var Vertices = function () {
    function Vertices(bones, vertices) {
      if (bones === void 0) {
        bones = null;
      }

      if (vertices === void 0) {
        vertices = null;
      }

      this.bones = bones;
      this.vertices = vertices;
    }

    return Vertices;
  }();
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var SkeletonBounds = function () {
    function SkeletonBounds() {
      this.minX = 0;
      this.minY = 0;
      this.maxX = 0;
      this.maxY = 0;
      this.boundingBoxes = new Array();
      this.polygons = new Array();
      this.polygonPool = new spine.Pool(function () {
        return spine.Utils.newFloatArray(16);
      });
    }

    SkeletonBounds.prototype.update = function (skeleton, updateAabb) {
      if (skeleton == null) throw new Error("skeleton cannot be null.");
      var boundingBoxes = this.boundingBoxes;
      var polygons = this.polygons;
      var polygonPool = this.polygonPool;
      var slots = skeleton.slots;
      var slotCount = slots.length;
      boundingBoxes.length = 0;
      polygonPool.freeAll(polygons);
      polygons.length = 0;

      for (var i = 0; i < slotCount; i++) {
        var slot = slots[i];
        if (!slot.bone.active) continue;
        var attachment = slot.getAttachment();

        if (attachment instanceof spine.BoundingBoxAttachment) {
          var boundingBox = attachment;
          boundingBoxes.push(boundingBox);
          var polygon = polygonPool.obtain();

          if (polygon.length != boundingBox.worldVerticesLength) {
            polygon = spine.Utils.newFloatArray(boundingBox.worldVerticesLength);
          }

          polygons.push(polygon);
          boundingBox.computeWorldVertices(slot, 0, boundingBox.worldVerticesLength, polygon, 0, 2);
        }
      }

      if (updateAabb) {
        this.aabbCompute();
      } else {
        this.minX = Number.POSITIVE_INFINITY;
        this.minY = Number.POSITIVE_INFINITY;
        this.maxX = Number.NEGATIVE_INFINITY;
        this.maxY = Number.NEGATIVE_INFINITY;
      }
    };

    SkeletonBounds.prototype.aabbCompute = function () {
      var minX = Number.POSITIVE_INFINITY,
          minY = Number.POSITIVE_INFINITY,
          maxX = Number.NEGATIVE_INFINITY,
          maxY = Number.NEGATIVE_INFINITY;
      var polygons = this.polygons;

      for (var i = 0, n = polygons.length; i < n; i++) {
        var polygon = polygons[i];
        var vertices = polygon;

        for (var ii = 0, nn = polygon.length; ii < nn; ii += 2) {
          var x = vertices[ii];
          var y = vertices[ii + 1];
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }

      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    };

    SkeletonBounds.prototype.aabbContainsPoint = function (x, y) {
      return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
    };

    SkeletonBounds.prototype.aabbIntersectsSegment = function (x1, y1, x2, y2) {
      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;
      if (x1 <= minX && x2 <= minX || y1 <= minY && y2 <= minY || x1 >= maxX && x2 >= maxX || y1 >= maxY && y2 >= maxY) return false;
      var m = (y2 - y1) / (x2 - x1);
      var y = m * (minX - x1) + y1;
      if (y > minY && y < maxY) return true;
      y = m * (maxX - x1) + y1;
      if (y > minY && y < maxY) return true;
      var x = (minY - y1) / m + x1;
      if (x > minX && x < maxX) return true;
      x = (maxY - y1) / m + x1;
      if (x > minX && x < maxX) return true;
      return false;
    };

    SkeletonBounds.prototype.aabbIntersectsSkeleton = function (bounds) {
      return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
    };

    SkeletonBounds.prototype.containsPoint = function (x, y) {
      var polygons = this.polygons;

      for (var i = 0, n = polygons.length; i < n; i++) {
        if (this.containsPointPolygon(polygons[i], x, y)) return this.boundingBoxes[i];
      }

      return null;
    };

    SkeletonBounds.prototype.containsPointPolygon = function (polygon, x, y) {
      var vertices = polygon;
      var nn = polygon.length;
      var prevIndex = nn - 2;
      var inside = false;

      for (var ii = 0; ii < nn; ii += 2) {
        var vertexY = vertices[ii + 1];
        var prevY = vertices[prevIndex + 1];

        if (vertexY < y && prevY >= y || prevY < y && vertexY >= y) {
          var vertexX = vertices[ii];
          if (vertexX + (y - vertexY) / (prevY - vertexY) * (vertices[prevIndex] - vertexX) < x) inside = !inside;
        }

        prevIndex = ii;
      }

      return inside;
    };

    SkeletonBounds.prototype.intersectsSegment = function (x1, y1, x2, y2) {
      var polygons = this.polygons;

      for (var i = 0, n = polygons.length; i < n; i++) {
        if (this.intersectsSegmentPolygon(polygons[i], x1, y1, x2, y2)) return this.boundingBoxes[i];
      }

      return null;
    };

    SkeletonBounds.prototype.intersectsSegmentPolygon = function (polygon, x1, y1, x2, y2) {
      var vertices = polygon;
      var nn = polygon.length;
      var width12 = x1 - x2,
          height12 = y1 - y2;
      var det1 = x1 * y2 - y1 * x2;
      var x3 = vertices[nn - 2],
          y3 = vertices[nn - 1];

      for (var ii = 0; ii < nn; ii += 2) {
        var x4 = vertices[ii],
            y4 = vertices[ii + 1];
        var det2 = x3 * y4 - y3 * x4;
        var width34 = x3 - x4,
            height34 = y3 - y4;
        var det3 = width12 * height34 - height12 * width34;
        var x = (det1 * width34 - width12 * det2) / det3;

        if ((x >= x3 && x <= x4 || x >= x4 && x <= x3) && (x >= x1 && x <= x2 || x >= x2 && x <= x1)) {
          var y = (det1 * height34 - height12 * det2) / det3;
          if ((y >= y3 && y <= y4 || y >= y4 && y <= y3) && (y >= y1 && y <= y2 || y >= y2 && y <= y1)) return true;
        }

        x3 = x4;
        y3 = y4;
      }

      return false;
    };

    SkeletonBounds.prototype.getPolygon = function (boundingBox) {
      if (boundingBox == null) throw new Error("boundingBox cannot be null.");
      var index = this.boundingBoxes.indexOf(boundingBox);
      return index == -1 ? null : this.polygons[index];
    };

    SkeletonBounds.prototype.getWidth = function () {
      return this.maxX - this.minX;
    };

    SkeletonBounds.prototype.getHeight = function () {
      return this.maxY - this.minY;
    };

    return SkeletonBounds;
  }();

  spine.SkeletonBounds = SkeletonBounds;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var SkeletonClipping = function () {
    function SkeletonClipping() {
      this.triangulator = new spine.Triangulator();
      this.clippingPolygon = new Array();
      this.clipOutput = new Array();
      this.clippedVertices = new Array();
      this.clippedTriangles = new Array();
      this.scratch = new Array();
    }

    SkeletonClipping.prototype.clipStart = function (slot, clip) {
      if (this.clipAttachment != null) return 0;
      this.clipAttachment = clip;
      var n = clip.worldVerticesLength;
      var vertices = spine.Utils.setArraySize(this.clippingPolygon, n);
      clip.computeWorldVertices(slot, 0, n, vertices, 0, 2);
      var clippingPolygon = this.clippingPolygon;
      SkeletonClipping.makeClockwise(clippingPolygon);
      var clippingPolygons = this.clippingPolygons = this.triangulator.decompose(clippingPolygon, this.triangulator.triangulate(clippingPolygon));

      for (var i = 0, n_2 = clippingPolygons.length; i < n_2; i++) {
        var polygon = clippingPolygons[i];
        SkeletonClipping.makeClockwise(polygon);
        polygon.push(polygon[0]);
        polygon.push(polygon[1]);
      }

      return clippingPolygons.length;
    };

    SkeletonClipping.prototype.clipEndWithSlot = function (slot) {
      if (this.clipAttachment != null && this.clipAttachment.endSlot == slot.data) this.clipEnd();
    };

    SkeletonClipping.prototype.clipEnd = function () {
      if (this.clipAttachment == null) return;
      this.clipAttachment = null;
      this.clippingPolygons = null;
      this.clippedVertices.length = 0;
      this.clippedTriangles.length = 0;
      this.clippingPolygon.length = 0;
    };

    SkeletonClipping.prototype.isClipping = function () {
      return this.clipAttachment != null;
    };

    SkeletonClipping.prototype.clipTriangles = function (vertices, verticesLength, triangles, trianglesLength, uvs, light, dark, twoColor) {
      var clipOutput = this.clipOutput,
          clippedVertices = this.clippedVertices;
      var clippedTriangles = this.clippedTriangles;
      var polygons = this.clippingPolygons;
      var polygonsCount = this.clippingPolygons.length;
      var vertexSize = twoColor ? 12 : 8;
      var index = 0;
      clippedVertices.length = 0;
      clippedTriangles.length = 0;

      outer: for (var i = 0; i < trianglesLength; i += 3) {
        var vertexOffset = triangles[i] << 1;
        var x1 = vertices[vertexOffset],
            y1 = vertices[vertexOffset + 1];
        var u1 = uvs[vertexOffset],
            v1 = uvs[vertexOffset + 1];
        vertexOffset = triangles[i + 1] << 1;
        var x2 = vertices[vertexOffset],
            y2 = vertices[vertexOffset + 1];
        var u2 = uvs[vertexOffset],
            v2 = uvs[vertexOffset + 1];
        vertexOffset = triangles[i + 2] << 1;
        var x3 = vertices[vertexOffset],
            y3 = vertices[vertexOffset + 1];
        var u3 = uvs[vertexOffset],
            v3 = uvs[vertexOffset + 1];

        for (var p = 0; p < polygonsCount; p++) {
          var s = clippedVertices.length;

          if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
            var clipOutputLength = clipOutput.length;
            if (clipOutputLength == 0) continue;
            var d0 = y2 - y3,
                d1 = x3 - x2,
                d2 = x1 - x3,
                d4 = y3 - y1;
            var d = 1 / (d0 * d2 + d1 * (y1 - y3));
            var clipOutputCount = clipOutputLength >> 1;
            var clipOutputItems = this.clipOutput;
            var clippedVerticesItems = spine.Utils.setArraySize(clippedVertices, s + clipOutputCount * vertexSize);

            for (var ii = 0; ii < clipOutputLength; ii += 2) {
              var x = clipOutputItems[ii],
                  y = clipOutputItems[ii + 1];
              clippedVerticesItems[s] = x;
              clippedVerticesItems[s + 1] = y;
              clippedVerticesItems[s + 2] = light.r;
              clippedVerticesItems[s + 3] = light.g;
              clippedVerticesItems[s + 4] = light.b;
              clippedVerticesItems[s + 5] = light.a;
              var c0 = x - x3,
                  c1 = y - y3;
              var a = (d0 * c0 + d1 * c1) * d;
              var b = (d4 * c0 + d2 * c1) * d;
              var c = 1 - a - b;
              clippedVerticesItems[s + 6] = u1 * a + u2 * b + u3 * c;
              clippedVerticesItems[s + 7] = v1 * a + v2 * b + v3 * c;

              if (twoColor) {
                clippedVerticesItems[s + 8] = dark.r;
                clippedVerticesItems[s + 9] = dark.g;
                clippedVerticesItems[s + 10] = dark.b;
                clippedVerticesItems[s + 11] = dark.a;
              }

              s += vertexSize;
            }

            s = clippedTriangles.length;
            var clippedTrianglesItems = spine.Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
            clipOutputCount--;

            for (var ii = 1; ii < clipOutputCount; ii++) {
              clippedTrianglesItems[s] = index;
              clippedTrianglesItems[s + 1] = index + ii;
              clippedTrianglesItems[s + 2] = index + ii + 1;
              s += 3;
            }

            index += clipOutputCount + 1;
          } else {
            var clippedVerticesItems = spine.Utils.setArraySize(clippedVertices, s + 3 * vertexSize);
            clippedVerticesItems[s] = x1;
            clippedVerticesItems[s + 1] = y1;
            clippedVerticesItems[s + 2] = light.r;
            clippedVerticesItems[s + 3] = light.g;
            clippedVerticesItems[s + 4] = light.b;
            clippedVerticesItems[s + 5] = light.a;

            if (!twoColor) {
              clippedVerticesItems[s + 6] = u1;
              clippedVerticesItems[s + 7] = v1;
              clippedVerticesItems[s + 8] = x2;
              clippedVerticesItems[s + 9] = y2;
              clippedVerticesItems[s + 10] = light.r;
              clippedVerticesItems[s + 11] = light.g;
              clippedVerticesItems[s + 12] = light.b;
              clippedVerticesItems[s + 13] = light.a;
              clippedVerticesItems[s + 14] = u2;
              clippedVerticesItems[s + 15] = v2;
              clippedVerticesItems[s + 16] = x3;
              clippedVerticesItems[s + 17] = y3;
              clippedVerticesItems[s + 18] = light.r;
              clippedVerticesItems[s + 19] = light.g;
              clippedVerticesItems[s + 20] = light.b;
              clippedVerticesItems[s + 21] = light.a;
              clippedVerticesItems[s + 22] = u3;
              clippedVerticesItems[s + 23] = v3;
            } else {
              clippedVerticesItems[s + 6] = u1;
              clippedVerticesItems[s + 7] = v1;
              clippedVerticesItems[s + 8] = dark.r;
              clippedVerticesItems[s + 9] = dark.g;
              clippedVerticesItems[s + 10] = dark.b;
              clippedVerticesItems[s + 11] = dark.a;
              clippedVerticesItems[s + 12] = x2;
              clippedVerticesItems[s + 13] = y2;
              clippedVerticesItems[s + 14] = light.r;
              clippedVerticesItems[s + 15] = light.g;
              clippedVerticesItems[s + 16] = light.b;
              clippedVerticesItems[s + 17] = light.a;
              clippedVerticesItems[s + 18] = u2;
              clippedVerticesItems[s + 19] = v2;
              clippedVerticesItems[s + 20] = dark.r;
              clippedVerticesItems[s + 21] = dark.g;
              clippedVerticesItems[s + 22] = dark.b;
              clippedVerticesItems[s + 23] = dark.a;
              clippedVerticesItems[s + 24] = x3;
              clippedVerticesItems[s + 25] = y3;
              clippedVerticesItems[s + 26] = light.r;
              clippedVerticesItems[s + 27] = light.g;
              clippedVerticesItems[s + 28] = light.b;
              clippedVerticesItems[s + 29] = light.a;
              clippedVerticesItems[s + 30] = u3;
              clippedVerticesItems[s + 31] = v3;
              clippedVerticesItems[s + 32] = dark.r;
              clippedVerticesItems[s + 33] = dark.g;
              clippedVerticesItems[s + 34] = dark.b;
              clippedVerticesItems[s + 35] = dark.a;
            }

            s = clippedTriangles.length;
            var clippedTrianglesItems = spine.Utils.setArraySize(clippedTriangles, s + 3);
            clippedTrianglesItems[s] = index;
            clippedTrianglesItems[s + 1] = index + 1;
            clippedTrianglesItems[s + 2] = index + 2;
            index += 3;
            continue outer;
          }
        }
      }
    };

    SkeletonClipping.prototype.clip = function (x1, y1, x2, y2, x3, y3, clippingArea, output) {
      var originalOutput = output;
      var clipped = false;
      var input = null;

      if (clippingArea.length % 4 >= 2) {
        input = output;
        output = this.scratch;
      } else input = this.scratch;

      input.length = 0;
      input.push(x1);
      input.push(y1);
      input.push(x2);
      input.push(y2);
      input.push(x3);
      input.push(y3);
      input.push(x1);
      input.push(y1);
      output.length = 0;
      var clippingVertices = clippingArea;
      var clippingVerticesLast = clippingArea.length - 4;

      for (var i = 0;; i += 2) {
        var edgeX = clippingVertices[i],
            edgeY = clippingVertices[i + 1];
        var edgeX2 = clippingVertices[i + 2],
            edgeY2 = clippingVertices[i + 3];
        var deltaX = edgeX - edgeX2,
            deltaY = edgeY - edgeY2;
        var inputVertices = input;
        var inputVerticesLength = input.length - 2,
            outputStart = output.length;

        for (var ii = 0; ii < inputVerticesLength; ii += 2) {
          var inputX = inputVertices[ii],
              inputY = inputVertices[ii + 1];
          var inputX2 = inputVertices[ii + 2],
              inputY2 = inputVertices[ii + 3];
          var side2 = deltaX * (inputY2 - edgeY2) - deltaY * (inputX2 - edgeX2) > 0;

          if (deltaX * (inputY - edgeY2) - deltaY * (inputX - edgeX2) > 0) {
            if (side2) {
              output.push(inputX2);
              output.push(inputY2);
              continue;
            }

            var c0 = inputY2 - inputY,
                c2 = inputX2 - inputX;
            var s = c0 * (edgeX2 - edgeX) - c2 * (edgeY2 - edgeY);

            if (Math.abs(s) > 0.000001) {
              var ua = (c2 * (edgeY - inputY) - c0 * (edgeX - inputX)) / s;
              output.push(edgeX + (edgeX2 - edgeX) * ua);
              output.push(edgeY + (edgeY2 - edgeY) * ua);
            } else {
              output.push(edgeX);
              output.push(edgeY);
            }
          } else if (side2) {
            var c0 = inputY2 - inputY,
                c2 = inputX2 - inputX;
            var s = c0 * (edgeX2 - edgeX) - c2 * (edgeY2 - edgeY);

            if (Math.abs(s) > 0.000001) {
              var ua = (c2 * (edgeY - inputY) - c0 * (edgeX - inputX)) / s;
              output.push(edgeX + (edgeX2 - edgeX) * ua);
              output.push(edgeY + (edgeY2 - edgeY) * ua);
            } else {
              output.push(edgeX);
              output.push(edgeY);
            }

            output.push(inputX2);
            output.push(inputY2);
          }

          clipped = true;
        }

        if (outputStart == output.length) {
          originalOutput.length = 0;
          return true;
        }

        output.push(output[0]);
        output.push(output[1]);
        if (i == clippingVerticesLast) break;
        var temp = output;
        output = input;
        output.length = 0;
        input = temp;
      }

      if (originalOutput != output) {
        originalOutput.length = 0;

        for (var i = 0, n = output.length - 2; i < n; i++) {
          originalOutput[i] = output[i];
        }
      } else originalOutput.length = originalOutput.length - 2;

      return clipped;
    };

    SkeletonClipping.makeClockwise = function (polygon) {
      var vertices = polygon;
      var verticeslength = polygon.length;
      var area = vertices[verticeslength - 2] * vertices[1] - vertices[0] * vertices[verticeslength - 1],
          p1x = 0,
          p1y = 0,
          p2x = 0,
          p2y = 0;

      for (var i = 0, n = verticeslength - 3; i < n; i += 2) {
        p1x = vertices[i];
        p1y = vertices[i + 1];
        p2x = vertices[i + 2];
        p2y = vertices[i + 3];
        area += p1x * p2y - p2x * p1y;
      }

      if (area < 0) return;

      for (var i = 0, lastX = verticeslength - 2, n = verticeslength >> 1; i < n; i += 2) {
        var x = vertices[i],
            y = vertices[i + 1];
        var other = lastX - i;
        vertices[i] = vertices[other];
        vertices[i + 1] = vertices[other + 1];
        vertices[other] = x;
        vertices[other + 1] = y;
      }
    };

    return SkeletonClipping;
  }();

  spine.SkeletonClipping = SkeletonClipping;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var SkeletonData = function () {
    function SkeletonData() {
      this.bones = new Array();
      this.slots = new Array();
      this.skins = new Array();
      this.events = new Array();
      this.animations = new Array();
      this.ikConstraints = new Array();
      this.transformConstraints = new Array();
      this.pathConstraints = new Array();
      this.fps = 0;
    }

    SkeletonData.prototype.findBone = function (boneName) {
      if (boneName == null) throw new Error("boneName cannot be null.");
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        var bone = bones[i];
        if (bone.name == boneName) return bone;
      }

      return null;
    };

    SkeletonData.prototype.findBoneIndex = function (boneName) {
      if (boneName == null) throw new Error("boneName cannot be null.");
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        if (bones[i].name == boneName) return i;
      }

      return -1;
    };

    SkeletonData.prototype.findSlot = function (slotName) {
      if (slotName == null) throw new Error("slotName cannot be null.");
      var slots = this.slots;

      for (var i = 0, n = slots.length; i < n; i++) {
        var slot = slots[i];
        if (slot.name == slotName) return slot;
      }

      return null;
    };

    SkeletonData.prototype.findSlotIndex = function (slotName) {
      if (slotName == null) throw new Error("slotName cannot be null.");
      var slots = this.slots;

      for (var i = 0, n = slots.length; i < n; i++) {
        if (slots[i].name == slotName) return i;
      }

      return -1;
    };

    SkeletonData.prototype.findSkin = function (skinName) {
      if (skinName == null) throw new Error("skinName cannot be null.");
      var skins = this.skins;

      for (var i = 0, n = skins.length; i < n; i++) {
        var skin = skins[i];
        if (skin.name == skinName) return skin;
      }

      return null;
    };

    SkeletonData.prototype.findEvent = function (eventDataName) {
      if (eventDataName == null) throw new Error("eventDataName cannot be null.");
      var events = this.events;

      for (var i = 0, n = events.length; i < n; i++) {
        var event_5 = events[i];
        if (event_5.name == eventDataName) return event_5;
      }

      return null;
    };

    SkeletonData.prototype.findAnimation = function (animationName) {
      if (animationName == null) throw new Error("animationName cannot be null.");
      var animations = this.animations;

      for (var i = 0, n = animations.length; i < n; i++) {
        var animation = animations[i];
        if (animation.name == animationName) return animation;
      }

      return null;
    };

    SkeletonData.prototype.findIkConstraint = function (constraintName) {
      if (constraintName == null) throw new Error("constraintName cannot be null.");
      var ikConstraints = this.ikConstraints;

      for (var i = 0, n = ikConstraints.length; i < n; i++) {
        var constraint = ikConstraints[i];
        if (constraint.name == constraintName) return constraint;
      }

      return null;
    };

    SkeletonData.prototype.findTransformConstraint = function (constraintName) {
      if (constraintName == null) throw new Error("constraintName cannot be null.");
      var transformConstraints = this.transformConstraints;

      for (var i = 0, n = transformConstraints.length; i < n; i++) {
        var constraint = transformConstraints[i];
        if (constraint.name == constraintName) return constraint;
      }

      return null;
    };

    SkeletonData.prototype.findPathConstraint = function (constraintName) {
      if (constraintName == null) throw new Error("constraintName cannot be null.");
      var pathConstraints = this.pathConstraints;

      for (var i = 0, n = pathConstraints.length; i < n; i++) {
        var constraint = pathConstraints[i];
        if (constraint.name == constraintName) return constraint;
      }

      return null;
    };

    SkeletonData.prototype.findPathConstraintIndex = function (pathConstraintName) {
      if (pathConstraintName == null) throw new Error("pathConstraintName cannot be null.");
      var pathConstraints = this.pathConstraints;

      for (var i = 0, n = pathConstraints.length; i < n; i++) {
        if (pathConstraints[i].name == pathConstraintName) return i;
      }

      return -1;
    };

    return SkeletonData;
  }();

  spine.SkeletonData = SkeletonData;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var SkeletonJson = function () {
    function SkeletonJson(attachmentLoader) {
      this.scale = 1;
      this.linkedMeshes = new Array();
      this.attachmentLoader = attachmentLoader;
    }

    SkeletonJson.prototype.readSkeletonData = function (json) {
      var scale = this.scale;
      var skeletonData = new spine.SkeletonData();
      var root = typeof json === "string" ? JSON.parse(json) : json;
      var skeletonMap = root.skeleton;

      if (skeletonMap != null) {
        skeletonData.hash = skeletonMap.hash;
        skeletonData.version = skeletonMap.spine;
        skeletonData.x = skeletonMap.x;
        skeletonData.y = skeletonMap.y;
        skeletonData.width = skeletonMap.width;
        skeletonData.height = skeletonMap.height;
        skeletonData.fps = skeletonMap.fps;
        skeletonData.imagesPath = skeletonMap.images;
      }

      if (root.bones) {
        for (var i = 0; i < root.bones.length; i++) {
          var boneMap = root.bones[i];
          var parent_5 = null;
          var parentName = this.getValue(boneMap, "parent", null);

          if (parentName != null) {
            parent_5 = skeletonData.findBone(parentName);
            if (parent_5 == null) throw new Error("Parent bone not found: " + parentName);
          }

          var data = new spine.BoneData(skeletonData.bones.length, boneMap.name, parent_5);
          data.length = this.getValue(boneMap, "length", 0) * scale;
          data.x = this.getValue(boneMap, "x", 0) * scale;
          data.y = this.getValue(boneMap, "y", 0) * scale;
          data.rotation = this.getValue(boneMap, "rotation", 0);
          data.scaleX = this.getValue(boneMap, "scaleX", 1);
          data.scaleY = this.getValue(boneMap, "scaleY", 1);
          data.shearX = this.getValue(boneMap, "shearX", 0);
          data.shearY = this.getValue(boneMap, "shearY", 0);
          data.transformMode = SkeletonJson.transformModeFromString(this.getValue(boneMap, "transform", "normal"));
          data.skinRequired = this.getValue(boneMap, "skin", false);
          skeletonData.bones.push(data);
        }
      }

      if (root.slots) {
        for (var i = 0; i < root.slots.length; i++) {
          var slotMap = root.slots[i];
          var slotName = slotMap.name;
          var boneName = slotMap.bone;
          var boneData = skeletonData.findBone(boneName);
          if (boneData == null) throw new Error("Slot bone not found: " + boneName);
          var data = new spine.SlotData(skeletonData.slots.length, slotName, boneData);
          var color = this.getValue(slotMap, "color", null);
          if (color != null) data.color.setFromString(color);
          var dark = this.getValue(slotMap, "dark", null);

          if (dark != null) {
            data.darkColor = new spine.Color(1, 1, 1, 1);
            data.darkColor.setFromString(dark);
          }

          data.attachmentName = this.getValue(slotMap, "attachment", null);
          data.blendMode = SkeletonJson.blendModeFromString(this.getValue(slotMap, "blend", "normal"));
          skeletonData.slots.push(data);
        }
      }

      if (root.ik) {
        for (var i = 0; i < root.ik.length; i++) {
          var constraintMap = root.ik[i];
          var data = new spine.IkConstraintData(constraintMap.name);
          data.order = this.getValue(constraintMap, "order", 0);
          data.skinRequired = this.getValue(constraintMap, "skin", false);

          for (var j = 0; j < constraintMap.bones.length; j++) {
            var boneName = constraintMap.bones[j];
            var bone = skeletonData.findBone(boneName);
            if (bone == null) throw new Error("IK bone not found: " + boneName);
            data.bones.push(bone);
          }

          var targetName = constraintMap.target;
          data.target = skeletonData.findBone(targetName);
          if (data.target == null) throw new Error("IK target bone not found: " + targetName);
          data.mix = this.getValue(constraintMap, "mix", 1);
          data.softness = this.getValue(constraintMap, "softness", 0) * scale;
          data.bendDirection = this.getValue(constraintMap, "bendPositive", true) ? 1 : -1;
          data.compress = this.getValue(constraintMap, "compress", false);
          data.stretch = this.getValue(constraintMap, "stretch", false);
          data.uniform = this.getValue(constraintMap, "uniform", false);
          skeletonData.ikConstraints.push(data);
        }
      }

      if (root.transform) {
        for (var i = 0; i < root.transform.length; i++) {
          var constraintMap = root.transform[i];
          var data = new spine.TransformConstraintData(constraintMap.name);
          data.order = this.getValue(constraintMap, "order", 0);
          data.skinRequired = this.getValue(constraintMap, "skin", false);

          for (var j = 0; j < constraintMap.bones.length; j++) {
            var boneName = constraintMap.bones[j];
            var bone = skeletonData.findBone(boneName);
            if (bone == null) throw new Error("Transform constraint bone not found: " + boneName);
            data.bones.push(bone);
          }

          var targetName = constraintMap.target;
          data.target = skeletonData.findBone(targetName);
          if (data.target == null) throw new Error("Transform constraint target bone not found: " + targetName);
          data.local = this.getValue(constraintMap, "local", false);
          data.relative = this.getValue(constraintMap, "relative", false);
          data.offsetRotation = this.getValue(constraintMap, "rotation", 0);
          data.offsetX = this.getValue(constraintMap, "x", 0) * scale;
          data.offsetY = this.getValue(constraintMap, "y", 0) * scale;
          data.offsetScaleX = this.getValue(constraintMap, "scaleX", 0);
          data.offsetScaleY = this.getValue(constraintMap, "scaleY", 0);
          data.offsetShearY = this.getValue(constraintMap, "shearY", 0);
          data.rotateMix = this.getValue(constraintMap, "rotateMix", 1);
          data.translateMix = this.getValue(constraintMap, "translateMix", 1);
          data.scaleMix = this.getValue(constraintMap, "scaleMix", 1);
          data.shearMix = this.getValue(constraintMap, "shearMix", 1);
          skeletonData.transformConstraints.push(data);
        }
      }

      if (root.path) {
        for (var i = 0; i < root.path.length; i++) {
          var constraintMap = root.path[i];
          var data = new spine.PathConstraintData(constraintMap.name);
          data.order = this.getValue(constraintMap, "order", 0);
          data.skinRequired = this.getValue(constraintMap, "skin", false);

          for (var j = 0; j < constraintMap.bones.length; j++) {
            var boneName = constraintMap.bones[j];
            var bone = skeletonData.findBone(boneName);
            if (bone == null) throw new Error("Transform constraint bone not found: " + boneName);
            data.bones.push(bone);
          }

          var targetName = constraintMap.target;
          data.target = skeletonData.findSlot(targetName);
          if (data.target == null) throw new Error("Path target slot not found: " + targetName);
          data.positionMode = SkeletonJson.positionModeFromString(this.getValue(constraintMap, "positionMode", "percent"));
          data.spacingMode = SkeletonJson.spacingModeFromString(this.getValue(constraintMap, "spacingMode", "length"));
          data.rotateMode = SkeletonJson.rotateModeFromString(this.getValue(constraintMap, "rotateMode", "tangent"));
          data.offsetRotation = this.getValue(constraintMap, "rotation", 0);
          data.position = this.getValue(constraintMap, "position", 0);
          if (data.positionMode == spine.PositionMode.Fixed) data.position *= scale;
          data.spacing = this.getValue(constraintMap, "spacing", 0);
          if (data.spacingMode == spine.SpacingMode.Length || data.spacingMode == spine.SpacingMode.Fixed) data.spacing *= scale;
          data.rotateMix = this.getValue(constraintMap, "rotateMix", 1);
          data.translateMix = this.getValue(constraintMap, "translateMix", 1);
          skeletonData.pathConstraints.push(data);
        }
      }

      if (root.skins) {
        for (var i = 0; i < root.skins.length; i++) {
          var skinMap = root.skins[i];
          var skin = new spine.Skin(skinMap.name);

          if (skinMap.bones) {
            for (var ii = 0; ii < skinMap.bones.length; ii++) {
              var bone = skeletonData.findBone(skinMap.bones[ii]);
              if (bone == null) throw new Error("Skin bone not found: " + skinMap.bones[i]);
              skin.bones.push(bone);
            }
          }

          if (skinMap.ik) {
            for (var ii = 0; ii < skinMap.ik.length; ii++) {
              var constraint = skeletonData.findIkConstraint(skinMap.ik[ii]);
              if (constraint == null) throw new Error("Skin IK constraint not found: " + skinMap.ik[i]);
              skin.constraints.push(constraint);
            }
          }

          if (skinMap.transform) {
            for (var ii = 0; ii < skinMap.transform.length; ii++) {
              var constraint = skeletonData.findTransformConstraint(skinMap.transform[ii]);
              if (constraint == null) throw new Error("Skin transform constraint not found: " + skinMap.transform[i]);
              skin.constraints.push(constraint);
            }
          }

          if (skinMap.path) {
            for (var ii = 0; ii < skinMap.path.length; ii++) {
              var constraint = skeletonData.findPathConstraint(skinMap.path[ii]);
              if (constraint == null) throw new Error("Skin path constraint not found: " + skinMap.path[i]);
              skin.constraints.push(constraint);
            }
          }

          for (var slotName in skinMap.attachments) {
            var slot = skeletonData.findSlot(slotName);
            if (slot == null) throw new Error("Slot not found: " + slotName);
            var slotMap = skinMap.attachments[slotName];

            for (var entryName in slotMap) {
              var attachment = this.readAttachment(slotMap[entryName], skin, slot.index, entryName, skeletonData);
              if (attachment != null) skin.setAttachment(slot.index, entryName, attachment);
            }
          }

          skeletonData.skins.push(skin);
          if (skin.name == "default") skeletonData.defaultSkin = skin;
        }
      }

      for (var i = 0, n = this.linkedMeshes.length; i < n; i++) {
        var linkedMesh = this.linkedMeshes[i];
        var skin = linkedMesh.skin == null ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
        if (skin == null) throw new Error("Skin not found: " + linkedMesh.skin);
        var parent_6 = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
        if (parent_6 == null) throw new Error("Parent mesh not found: " + linkedMesh.parent);
        linkedMesh.mesh.deformAttachment = linkedMesh.inheritDeform ? parent_6 : linkedMesh.mesh;
        linkedMesh.mesh.setParentMesh(parent_6);
        linkedMesh.mesh.updateUVs();
      }

      this.linkedMeshes.length = 0;

      if (root.events) {
        for (var eventName in root.events) {
          var eventMap = root.events[eventName];
          var data = new spine.EventData(eventName);
          data.intValue = this.getValue(eventMap, "int", 0);
          data.floatValue = this.getValue(eventMap, "float", 0);
          data.stringValue = this.getValue(eventMap, "string", "");
          data.audioPath = this.getValue(eventMap, "audio", null);

          if (data.audioPath != null) {
            data.volume = this.getValue(eventMap, "volume", 1);
            data.balance = this.getValue(eventMap, "balance", 0);
          }

          skeletonData.events.push(data);
        }
      }

      if (root.animations) {
        for (var animationName in root.animations) {
          var animationMap = root.animations[animationName];
          this.readAnimation(animationMap, animationName, skeletonData);
        }
      }

      return skeletonData;
    };

    SkeletonJson.prototype.readAttachment = function (map, skin, slotIndex, name, skeletonData) {
      var scale = this.scale;
      name = this.getValue(map, "name", name);
      var type = this.getValue(map, "type", "region");

      switch (type) {
        case "region":
          {
            var path = this.getValue(map, "path", name);
            var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
            if (region == null) return null;
            region.path = path;
            region.x = this.getValue(map, "x", 0) * scale;
            region.y = this.getValue(map, "y", 0) * scale;
            region.scaleX = this.getValue(map, "scaleX", 1);
            region.scaleY = this.getValue(map, "scaleY", 1);
            region.rotation = this.getValue(map, "rotation", 0);
            region.width = map.width * scale;
            region.height = map.height * scale;
            var color = this.getValue(map, "color", null);
            if (color != null) region.color.setFromString(color);
            region.updateOffset();
            return region;
          }

        case "boundingbox":
          {
            var box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
            if (box == null) return null;
            this.readVertices(map, box, map.vertexCount << 1);
            var color = this.getValue(map, "color", null);
            if (color != null) box.color.setFromString(color);
            return box;
          }

        case "mesh":
        case "linkedmesh":
          {
            var path = this.getValue(map, "path", name);
            var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
            if (mesh == null) return null;
            mesh.path = path;
            var color = this.getValue(map, "color", null);
            if (color != null) mesh.color.setFromString(color);
            mesh.width = this.getValue(map, "width", 0) * scale;
            mesh.height = this.getValue(map, "height", 0) * scale;
            var parent_7 = this.getValue(map, "parent", null);

            if (parent_7 != null) {
              this.linkedMeshes.push(new LinkedMesh(mesh, this.getValue(map, "skin", null), slotIndex, parent_7, this.getValue(map, "deform", true)));
              return mesh;
            }

            var uvs = map.uvs;
            this.readVertices(map, mesh, uvs.length);
            mesh.triangles = map.triangles;
            mesh.regionUVs = uvs;
            mesh.updateUVs();
            mesh.edges = this.getValue(map, "edges", null);
            mesh.hullLength = this.getValue(map, "hull", 0) * 2;
            return mesh;
          }

        case "path":
          {
            var path = this.attachmentLoader.newPathAttachment(skin, name);
            if (path == null) return null;
            path.closed = this.getValue(map, "closed", false);
            path.constantSpeed = this.getValue(map, "constantSpeed", true);
            var vertexCount = map.vertexCount;
            this.readVertices(map, path, vertexCount << 1);
            var lengths = spine.Utils.newArray(vertexCount / 3, 0);

            for (var i = 0; i < map.lengths.length; i++) {
              lengths[i] = map.lengths[i] * scale;
            }

            path.lengths = lengths;
            var color = this.getValue(map, "color", null);
            if (color != null) path.color.setFromString(color);
            return path;
          }

        case "point":
          {
            var point = this.attachmentLoader.newPointAttachment(skin, name);
            if (point == null) return null;
            point.x = this.getValue(map, "x", 0) * scale;
            point.y = this.getValue(map, "y", 0) * scale;
            point.rotation = this.getValue(map, "rotation", 0);
            var color = this.getValue(map, "color", null);
            if (color != null) point.color.setFromString(color);
            return point;
          }

        case "clipping":
          {
            var clip = this.attachmentLoader.newClippingAttachment(skin, name);
            if (clip == null) return null;
            var end = this.getValue(map, "end", null);

            if (end != null) {
              var slot = skeletonData.findSlot(end);
              if (slot == null) throw new Error("Clipping end slot not found: " + end);
              clip.endSlot = slot;
            }

            var vertexCount = map.vertexCount;
            this.readVertices(map, clip, vertexCount << 1);
            var color = this.getValue(map, "color", null);
            if (color != null) clip.color.setFromString(color);
            return clip;
          }
      }

      return null;
    };

    SkeletonJson.prototype.readVertices = function (map, attachment, verticesLength) {
      var scale = this.scale;
      attachment.worldVerticesLength = verticesLength;
      var vertices = map.vertices;

      if (verticesLength == vertices.length) {
        var scaledVertices = spine.Utils.toFloatArray(vertices);

        if (scale != 1) {
          for (var i = 0, n = vertices.length; i < n; i++) {
            scaledVertices[i] *= scale;
          }
        }

        attachment.vertices = scaledVertices;
        return;
      }

      var weights = new Array();
      var bones = new Array();

      for (var i = 0, n = vertices.length; i < n;) {
        var boneCount = vertices[i++];
        bones.push(boneCount);

        for (var nn = i + boneCount * 4; i < nn; i += 4) {
          bones.push(vertices[i]);
          weights.push(vertices[i + 1] * scale);
          weights.push(vertices[i + 2] * scale);
          weights.push(vertices[i + 3]);
        }
      }

      attachment.bones = bones;
      attachment.vertices = spine.Utils.toFloatArray(weights);
    };

    SkeletonJson.prototype.readAnimation = function (map, name, skeletonData) {
      var scale = this.scale;
      var timelines = new Array();
      var duration = 0;

      if (map.slots) {
        for (var slotName in map.slots) {
          var slotMap = map.slots[slotName];
          var slotIndex = skeletonData.findSlotIndex(slotName);
          if (slotIndex == -1) throw new Error("Slot not found: " + slotName);

          for (var timelineName in slotMap) {
            var timelineMap = slotMap[timelineName];

            if (timelineName == "attachment") {
              var timeline = new spine.AttachmentTimeline(timelineMap.length);
              timeline.slotIndex = slotIndex;
              var frameIndex = 0;

              for (var i = 0; i < timelineMap.length; i++) {
                var valueMap = timelineMap[i];
                timeline.setFrame(frameIndex++, this.getValue(valueMap, "time", 0), valueMap.name);
              }

              timelines.push(timeline);
              duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
            } else if (timelineName == "color") {
              var timeline = new spine.ColorTimeline(timelineMap.length);
              timeline.slotIndex = slotIndex;
              var frameIndex = 0;

              for (var i = 0; i < timelineMap.length; i++) {
                var valueMap = timelineMap[i];
                var color = new spine.Color();
                color.setFromString(valueMap.color);
                timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), color.r, color.g, color.b, color.a);
                this.readCurve(valueMap, timeline, frameIndex);
                frameIndex++;
              }

              timelines.push(timeline);
              duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.ColorTimeline.ENTRIES]);
            } else if (timelineName == "twoColor") {
              var timeline = new spine.TwoColorTimeline(timelineMap.length);
              timeline.slotIndex = slotIndex;
              var frameIndex = 0;

              for (var i = 0; i < timelineMap.length; i++) {
                var valueMap = timelineMap[i];
                var light = new spine.Color();
                var dark = new spine.Color();
                light.setFromString(valueMap.light);
                dark.setFromString(valueMap.dark);
                timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), light.r, light.g, light.b, light.a, dark.r, dark.g, dark.b);
                this.readCurve(valueMap, timeline, frameIndex);
                frameIndex++;
              }

              timelines.push(timeline);
              duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.TwoColorTimeline.ENTRIES]);
            } else throw new Error("Invalid timeline type for a slot: " + timelineName + " (" + slotName + ")");
          }
        }
      }

      if (map.bones) {
        for (var boneName in map.bones) {
          var boneMap = map.bones[boneName];
          var boneIndex = skeletonData.findBoneIndex(boneName);
          if (boneIndex == -1) throw new Error("Bone not found: " + boneName);

          for (var timelineName in boneMap) {
            var timelineMap = boneMap[timelineName];

            if (timelineName === "rotate") {
              var timeline = new spine.RotateTimeline(timelineMap.length);
              timeline.boneIndex = boneIndex;
              var frameIndex = 0;

              for (var i = 0; i < timelineMap.length; i++) {
                var valueMap = timelineMap[i];
                timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, "angle", 0));
                this.readCurve(valueMap, timeline, frameIndex);
                frameIndex++;
              }

              timelines.push(timeline);
              duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.RotateTimeline.ENTRIES]);
            } else if (timelineName === "translate" || timelineName === "scale" || timelineName === "shear") {
              var timeline = null;
              var timelineScale = 1,
                  defaultValue = 0;

              if (timelineName === "scale") {
                timeline = new spine.ScaleTimeline(timelineMap.length);
                defaultValue = 1;
              } else if (timelineName === "shear") timeline = new spine.ShearTimeline(timelineMap.length);else {
                timeline = new spine.TranslateTimeline(timelineMap.length);
                timelineScale = scale;
              }

              timeline.boneIndex = boneIndex;
              var frameIndex = 0;

              for (var i = 0; i < timelineMap.length; i++) {
                var valueMap = timelineMap[i];
                var x = this.getValue(valueMap, "x", defaultValue),
                    y = this.getValue(valueMap, "y", defaultValue);
                timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), x * timelineScale, y * timelineScale);
                this.readCurve(valueMap, timeline, frameIndex);
                frameIndex++;
              }

              timelines.push(timeline);
              duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.TranslateTimeline.ENTRIES]);
            } else throw new Error("Invalid timeline type for a bone: " + timelineName + " (" + boneName + ")");
          }
        }
      }

      if (map.ik) {
        for (var constraintName in map.ik) {
          var constraintMap = map.ik[constraintName];
          var constraint = skeletonData.findIkConstraint(constraintName);
          var timeline = new spine.IkConstraintTimeline(constraintMap.length);
          timeline.ikConstraintIndex = skeletonData.ikConstraints.indexOf(constraint);
          var frameIndex = 0;

          for (var i = 0; i < constraintMap.length; i++) {
            var valueMap = constraintMap[i];
            timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, "mix", 1), this.getValue(valueMap, "softness", 0) * scale, this.getValue(valueMap, "bendPositive", true) ? 1 : -1, this.getValue(valueMap, "compress", false), this.getValue(valueMap, "stretch", false));
            this.readCurve(valueMap, timeline, frameIndex);
            frameIndex++;
          }

          timelines.push(timeline);
          duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.IkConstraintTimeline.ENTRIES]);
        }
      }

      if (map.transform) {
        for (var constraintName in map.transform) {
          var constraintMap = map.transform[constraintName];
          var constraint = skeletonData.findTransformConstraint(constraintName);
          var timeline = new spine.TransformConstraintTimeline(constraintMap.length);
          timeline.transformConstraintIndex = skeletonData.transformConstraints.indexOf(constraint);
          var frameIndex = 0;

          for (var i = 0; i < constraintMap.length; i++) {
            var valueMap = constraintMap[i];
            timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, "rotateMix", 1), this.getValue(valueMap, "translateMix", 1), this.getValue(valueMap, "scaleMix", 1), this.getValue(valueMap, "shearMix", 1));
            this.readCurve(valueMap, timeline, frameIndex);
            frameIndex++;
          }

          timelines.push(timeline);
          duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.TransformConstraintTimeline.ENTRIES]);
        }
      }

      if (map.path) {
        for (var constraintName in map.path) {
          var constraintMap = map.path[constraintName];
          var index = skeletonData.findPathConstraintIndex(constraintName);
          if (index == -1) throw new Error("Path constraint not found: " + constraintName);
          var data = skeletonData.pathConstraints[index];

          for (var timelineName in constraintMap) {
            var timelineMap = constraintMap[timelineName];

            if (timelineName === "position" || timelineName === "spacing") {
              var timeline = null;
              var timelineScale = 1;

              if (timelineName === "spacing") {
                timeline = new spine.PathConstraintSpacingTimeline(timelineMap.length);
                if (data.spacingMode == spine.SpacingMode.Length || data.spacingMode == spine.SpacingMode.Fixed) timelineScale = scale;
              } else {
                timeline = new spine.PathConstraintPositionTimeline(timelineMap.length);
                if (data.positionMode == spine.PositionMode.Fixed) timelineScale = scale;
              }

              timeline.pathConstraintIndex = index;
              var frameIndex = 0;

              for (var i = 0; i < timelineMap.length; i++) {
                var valueMap = timelineMap[i];
                timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, timelineName, 0) * timelineScale);
                this.readCurve(valueMap, timeline, frameIndex);
                frameIndex++;
              }

              timelines.push(timeline);
              duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.PathConstraintPositionTimeline.ENTRIES]);
            } else if (timelineName === "mix") {
              var timeline = new spine.PathConstraintMixTimeline(timelineMap.length);
              timeline.pathConstraintIndex = index;
              var frameIndex = 0;

              for (var i = 0; i < timelineMap.length; i++) {
                var valueMap = timelineMap[i];
                timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, "rotateMix", 1), this.getValue(valueMap, "translateMix", 1));
                this.readCurve(valueMap, timeline, frameIndex);
                frameIndex++;
              }

              timelines.push(timeline);
              duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * spine.PathConstraintMixTimeline.ENTRIES]);
            }
          }
        }
      }

      if (map.deform) {
        for (var deformName in map.deform) {
          var deformMap = map.deform[deformName];
          var skin = skeletonData.findSkin(deformName);
          if (skin == null) throw new Error("Skin not found: " + deformName);

          for (var slotName in deformMap) {
            var slotMap = deformMap[slotName];
            var slotIndex = skeletonData.findSlotIndex(slotName);
            if (slotIndex == -1) throw new Error("Slot not found: " + slotMap.name);

            for (var timelineName in slotMap) {
              var timelineMap = slotMap[timelineName];
              var attachment = skin.getAttachment(slotIndex, timelineName);
              if (attachment == null) throw new Error("Deform attachment not found: " + timelineMap.name);
              var weighted = attachment.bones != null;
              var vertices = attachment.vertices;
              var deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
              var timeline = new spine.DeformTimeline(timelineMap.length);
              timeline.slotIndex = slotIndex;
              timeline.attachment = attachment;
              var frameIndex = 0;

              for (var j = 0; j < timelineMap.length; j++) {
                var valueMap = timelineMap[j];
                var deform = void 0;
                var verticesValue = this.getValue(valueMap, "vertices", null);
                if (verticesValue == null) deform = weighted ? spine.Utils.newFloatArray(deformLength) : vertices;else {
                  deform = spine.Utils.newFloatArray(deformLength);
                  var start = this.getValue(valueMap, "offset", 0);
                  spine.Utils.arrayCopy(verticesValue, 0, deform, start, verticesValue.length);

                  if (scale != 1) {
                    for (var i = start, n = i + verticesValue.length; i < n; i++) {
                      deform[i] *= scale;
                    }
                  }

                  if (!weighted) {
                    for (var i = 0; i < deformLength; i++) {
                      deform[i] += vertices[i];
                    }
                  }
                }
                timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), deform);
                this.readCurve(valueMap, timeline, frameIndex);
                frameIndex++;
              }

              timelines.push(timeline);
              duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
            }
          }
        }
      }

      var drawOrderNode = map.drawOrder;
      if (drawOrderNode == null) drawOrderNode = map.draworder;

      if (drawOrderNode != null) {
        var timeline = new spine.DrawOrderTimeline(drawOrderNode.length);
        var slotCount = skeletonData.slots.length;
        var frameIndex = 0;

        for (var j = 0; j < drawOrderNode.length; j++) {
          var drawOrderMap = drawOrderNode[j];
          var drawOrder = null;
          var offsets = this.getValue(drawOrderMap, "offsets", null);

          if (offsets != null) {
            drawOrder = spine.Utils.newArray(slotCount, -1);
            var unchanged = spine.Utils.newArray(slotCount - offsets.length, 0);
            var originalIndex = 0,
                unchangedIndex = 0;

            for (var i = 0; i < offsets.length; i++) {
              var offsetMap = offsets[i];
              var slotIndex = skeletonData.findSlotIndex(offsetMap.slot);
              if (slotIndex == -1) throw new Error("Slot not found: " + offsetMap.slot);

              while (originalIndex != slotIndex) {
                unchanged[unchangedIndex++] = originalIndex++;
              }

              drawOrder[originalIndex + offsetMap.offset] = originalIndex++;
            }

            while (originalIndex < slotCount) {
              unchanged[unchangedIndex++] = originalIndex++;
            }

            for (var i = slotCount - 1; i >= 0; i--) {
              if (drawOrder[i] == -1) drawOrder[i] = unchanged[--unchangedIndex];
            }
          }

          timeline.setFrame(frameIndex++, this.getValue(drawOrderMap, "time", 0), drawOrder);
        }

        timelines.push(timeline);
        duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
      }

      if (map.events) {
        var timeline = new spine.EventTimeline(map.events.length);
        var frameIndex = 0;

        for (var i = 0; i < map.events.length; i++) {
          var eventMap = map.events[i];
          var eventData = skeletonData.findEvent(eventMap.name);
          if (eventData == null) throw new Error("Event not found: " + eventMap.name);
          var event_6 = new spine.Event(spine.Utils.toSinglePrecision(this.getValue(eventMap, "time", 0)), eventData);
          event_6.intValue = this.getValue(eventMap, "int", eventData.intValue);
          event_6.floatValue = this.getValue(eventMap, "float", eventData.floatValue);
          event_6.stringValue = this.getValue(eventMap, "string", eventData.stringValue);

          if (event_6.data.audioPath != null) {
            event_6.volume = this.getValue(eventMap, "volume", 1);
            event_6.balance = this.getValue(eventMap, "balance", 0);
          }

          timeline.setFrame(frameIndex++, event_6);
        }

        timelines.push(timeline);
        duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
      }

      if (isNaN(duration)) {
        throw new Error("Error while parsing animation, duration is NaN");
      }

      skeletonData.animations.push(new spine.Animation(name, timelines, duration));
    };

    SkeletonJson.prototype.readCurve = function (map, timeline, frameIndex) {
      if (!map.hasOwnProperty("curve")) return;
      if (map.curve == "stepped") timeline.setStepped(frameIndex);else {
        var curve = map.curve;
        timeline.setCurve(frameIndex, curve, this.getValue(map, "c2", 0), this.getValue(map, "c3", 1), this.getValue(map, "c4", 1));
      }
    };

    SkeletonJson.prototype.getValue = function (map, prop, defaultValue) {
      return map[prop] !== undefined ? map[prop] : defaultValue;
    };

    SkeletonJson.blendModeFromString = function (str) {
      str = str.toLowerCase();
      if (str == "normal") return spine.BlendMode.Normal;
      if (str == "additive") return spine.BlendMode.Additive;
      if (str == "multiply") return spine.BlendMode.Multiply;
      if (str == "screen") return spine.BlendMode.Screen;
      throw new Error("Unknown blend mode: " + str);
    };

    SkeletonJson.positionModeFromString = function (str) {
      str = str.toLowerCase();
      if (str == "fixed") return spine.PositionMode.Fixed;
      if (str == "percent") return spine.PositionMode.Percent;
      throw new Error("Unknown position mode: " + str);
    };

    SkeletonJson.spacingModeFromString = function (str) {
      str = str.toLowerCase();
      if (str == "length") return spine.SpacingMode.Length;
      if (str == "fixed") return spine.SpacingMode.Fixed;
      if (str == "percent") return spine.SpacingMode.Percent;
      throw new Error("Unknown position mode: " + str);
    };

    SkeletonJson.rotateModeFromString = function (str) {
      str = str.toLowerCase();
      if (str == "tangent") return spine.RotateMode.Tangent;
      if (str == "chain") return spine.RotateMode.Chain;
      if (str == "chainscale") return spine.RotateMode.ChainScale;
      throw new Error("Unknown rotate mode: " + str);
    };

    SkeletonJson.transformModeFromString = function (str) {
      str = str.toLowerCase();
      if (str == "normal") return spine.TransformMode.Normal;
      if (str == "onlytranslation") return spine.TransformMode.OnlyTranslation;
      if (str == "norotationorreflection") return spine.TransformMode.NoRotationOrReflection;
      if (str == "noscale") return spine.TransformMode.NoScale;
      if (str == "noscaleorreflection") return spine.TransformMode.NoScaleOrReflection;
      throw new Error("Unknown transform mode: " + str);
    };

    return SkeletonJson;
  }();

  spine.SkeletonJson = SkeletonJson;

  var LinkedMesh = function () {
    function LinkedMesh(mesh, skin, slotIndex, parent, inheritDeform) {
      this.mesh = mesh;
      this.skin = skin;
      this.slotIndex = slotIndex;
      this.parent = parent;
      this.inheritDeform = inheritDeform;
    }

    return LinkedMesh;
  }();
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var SkinEntry = function () {
    function SkinEntry(slotIndex, name, attachment) {
      this.slotIndex = slotIndex;
      this.name = name;
      this.attachment = attachment;
    }

    return SkinEntry;
  }();

  spine.SkinEntry = SkinEntry;

  var Skin = function () {
    function Skin(name) {
      this.attachments = new Array();
      this.bones = Array();
      this.constraints = new Array();
      if (name == null) throw new Error("name cannot be null.");
      this.name = name;
    }

    Skin.prototype.setAttachment = function (slotIndex, name, attachment) {
      if (attachment == null) throw new Error("attachment cannot be null.");
      var attachments = this.attachments;
      if (slotIndex >= attachments.length) attachments.length = slotIndex + 1;
      if (!attachments[slotIndex]) attachments[slotIndex] = {};
      attachments[slotIndex][name] = attachment;
    };

    Skin.prototype.addSkin = function (skin) {
      for (var i = 0; i < skin.bones.length; i++) {
        var bone = skin.bones[i];
        var contained = false;

        for (var j = 0; j < this.bones.length; j++) {
          if (this.bones[j] == bone) {
            contained = true;
            break;
          }
        }

        if (!contained) this.bones.push(bone);
      }

      for (var i = 0; i < skin.constraints.length; i++) {
        var constraint = skin.constraints[i];
        var contained = false;

        for (var j = 0; j < this.constraints.length; j++) {
          if (this.constraints[j] == constraint) {
            contained = true;
            break;
          }
        }

        if (!contained) this.constraints.push(constraint);
      }

      var attachments = skin.getAttachments();

      for (var i = 0; i < attachments.length; i++) {
        var attachment = attachments[i];
        this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
      }
    };

    Skin.prototype.copySkin = function (skin) {
      for (var i = 0; i < skin.bones.length; i++) {
        var bone = skin.bones[i];
        var contained = false;

        for (var j = 0; j < this.bones.length; j++) {
          if (this.bones[j] == bone) {
            contained = true;
            break;
          }
        }

        if (!contained) this.bones.push(bone);
      }

      for (var i = 0; i < skin.constraints.length; i++) {
        var constraint = skin.constraints[i];
        var contained = false;

        for (var j = 0; j < this.constraints.length; j++) {
          if (this.constraints[j] == constraint) {
            contained = true;
            break;
          }
        }

        if (!contained) this.constraints.push(constraint);
      }

      var attachments = skin.getAttachments();

      for (var i = 0; i < attachments.length; i++) {
        var attachment = attachments[i];
        if (attachment.attachment == null) continue;

        if (attachment.attachment instanceof spine.MeshAttachment) {
          attachment.attachment = attachment.attachment.newLinkedMesh();
          this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
        } else {
          attachment.attachment = attachment.attachment.copy();
          this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
        }
      }
    };

    Skin.prototype.getAttachment = function (slotIndex, name) {
      var dictionary = this.attachments[slotIndex];
      return dictionary ? dictionary[name] : null;
    };

    Skin.prototype.removeAttachment = function (slotIndex, name) {
      var dictionary = this.attachments[slotIndex];
      if (dictionary) dictionary[name] = null;
    };

    Skin.prototype.getAttachments = function () {
      var entries = new Array();

      for (var i = 0; i < this.attachments.length; i++) {
        var slotAttachments = this.attachments[i];

        if (slotAttachments) {
          for (var name_4 in slotAttachments) {
            var attachment = slotAttachments[name_4];
            if (attachment) entries.push(new SkinEntry(i, name_4, attachment));
          }
        }
      }

      return entries;
    };

    Skin.prototype.getAttachmentsForSlot = function (slotIndex, attachments) {
      var slotAttachments = this.attachments[slotIndex];

      if (slotAttachments) {
        for (var name_5 in slotAttachments) {
          var attachment = slotAttachments[name_5];
          if (attachment) attachments.push(new SkinEntry(slotIndex, name_5, attachment));
        }
      }
    };

    Skin.prototype.clear = function () {
      this.attachments.length = 0;
      this.bones.length = 0;
      this.constraints.length = 0;
    };

    Skin.prototype.attachAll = function (skeleton, oldSkin) {
      var slotIndex = 0;

      for (var i = 0; i < skeleton.slots.length; i++) {
        var slot = skeleton.slots[i];
        var slotAttachment = slot.getAttachment();

        if (slotAttachment && slotIndex < oldSkin.attachments.length) {
          var dictionary = oldSkin.attachments[slotIndex];

          for (var key in dictionary) {
            var skinAttachment = dictionary[key];

            if (slotAttachment == skinAttachment) {
              var attachment = this.getAttachment(slotIndex, key);
              if (attachment != null) slot.setAttachment(attachment);
              break;
            }
          }
        }

        slotIndex++;
      }
    };

    return Skin;
  }();

  spine.Skin = Skin;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var Slot = function () {
    function Slot(data, bone) {
      this.deform = new Array();
      if (data == null) throw new Error("data cannot be null.");
      if (bone == null) throw new Error("bone cannot be null.");
      this.data = data;
      this.bone = bone;
      this.color = new spine.Color();
      this.darkColor = data.darkColor == null ? null : new spine.Color();
      this.setToSetupPose();
    }

    Slot.prototype.getSkeleton = function () {
      return this.bone.skeleton;
    };

    Slot.prototype.getAttachment = function () {
      return this.attachment;
    };

    Slot.prototype.setAttachment = function (attachment) {
      if (this.attachment == attachment) return;
      this.attachment = attachment;
      this.attachmentTime = this.bone.skeleton.time;
      this.deform.length = 0;
    };

    Slot.prototype.setAttachmentTime = function (time) {
      this.attachmentTime = this.bone.skeleton.time - time;
    };

    Slot.prototype.getAttachmentTime = function () {
      return this.bone.skeleton.time - this.attachmentTime;
    };

    Slot.prototype.setToSetupPose = function () {
      this.color.setFromColor(this.data.color);
      if (this.darkColor != null) this.darkColor.setFromColor(this.data.darkColor);
      if (this.data.attachmentName == null) this.attachment = null;else {
        this.attachment = null;
        this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
      }
    };

    return Slot;
  }();

  spine.Slot = Slot;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var SlotData = function () {
    function SlotData(index, name, boneData) {
      this.color = new spine.Color(1, 1, 1, 1);
      if (index < 0) throw new Error("index must be >= 0.");
      if (name == null) throw new Error("name cannot be null.");
      if (boneData == null) throw new Error("boneData cannot be null.");
      this.index = index;
      this.name = name;
      this.boneData = boneData;
    }

    return SlotData;
  }();

  spine.SlotData = SlotData;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var Texture = function () {
    function Texture(image) {
      this._image = image;
    }

    Texture.prototype.getImage = function () {
      return this._image;
    };

    Texture.filterFromString = function (text) {
      switch (text.toLowerCase()) {
        case "nearest":
          return TextureFilter.Nearest;

        case "linear":
          return TextureFilter.Linear;

        case "mipmap":
          return TextureFilter.MipMap;

        case "mipmapnearestnearest":
          return TextureFilter.MipMapNearestNearest;

        case "mipmaplinearnearest":
          return TextureFilter.MipMapLinearNearest;

        case "mipmapnearestlinear":
          return TextureFilter.MipMapNearestLinear;

        case "mipmaplinearlinear":
          return TextureFilter.MipMapLinearLinear;

        default:
          throw new Error("Unknown texture filter " + text);
      }
    };

    Texture.wrapFromString = function (text) {
      switch (text.toLowerCase()) {
        case "mirroredtepeat":
          return TextureWrap.MirroredRepeat;

        case "clamptoedge":
          return TextureWrap.ClampToEdge;

        case "repeat":
          return TextureWrap.Repeat;

        default:
          throw new Error("Unknown texture wrap " + text);
      }
    };

    return Texture;
  }();

  spine.Texture = Texture;
  var TextureFilter;

  (function (TextureFilter) {
    TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
    TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
    TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
    TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
    TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
    TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
    TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear";
  })(TextureFilter = spine.TextureFilter || (spine.TextureFilter = {}));

  var TextureWrap;

  (function (TextureWrap) {
    TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
    TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
    TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat";
  })(TextureWrap = spine.TextureWrap || (spine.TextureWrap = {}));

  var TextureRegion = function () {
    function TextureRegion() {
      this.u = 0;
      this.v = 0;
      this.u2 = 0;
      this.v2 = 0;
      this.width = 0;
      this.height = 0;
      this.rotate = false;
      this.offsetX = 0;
      this.offsetY = 0;
      this.originalWidth = 0;
      this.originalHeight = 0;
    }

    return TextureRegion;
  }();

  spine.TextureRegion = TextureRegion;

  var FakeTexture = function (_super) {
    __extends(FakeTexture, _super);

    function FakeTexture() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    FakeTexture.prototype.setFilters = function (minFilter, magFilter) {};

    FakeTexture.prototype.setWraps = function (uWrap, vWrap) {};

    FakeTexture.prototype.dispose = function () {};

    return FakeTexture;
  }(Texture);

  spine.FakeTexture = FakeTexture;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var TextureAtlas = function () {
    function TextureAtlas(atlasText, textureLoader) {
      this.pages = new Array();
      this.regions = new Array();
      this.load(atlasText, textureLoader);
    }

    TextureAtlas.prototype.load = function (atlasText, textureLoader) {
      if (textureLoader == null) throw new Error("textureLoader cannot be null.");
      var reader = new TextureAtlasReader(atlasText);
      var tuple = new Array(4);
      var page = null;

      while (true) {
        var line = reader.readLine();
        if (line == null) break;
        line = line.trim();
        if (line.length == 0) page = null;else if (!page) {
          page = new TextureAtlasPage();
          page.name = line;

          if (reader.readTuple(tuple) == 2) {
            page.width = parseInt(tuple[0]);
            page.height = parseInt(tuple[1]);
            reader.readTuple(tuple);
          }

          reader.readTuple(tuple);
          page.minFilter = spine.Texture.filterFromString(tuple[0]);
          page.magFilter = spine.Texture.filterFromString(tuple[1]);
          var direction = reader.readValue();
          page.uWrap = spine.TextureWrap.ClampToEdge;
          page.vWrap = spine.TextureWrap.ClampToEdge;
          if (direction == "x") page.uWrap = spine.TextureWrap.Repeat;else if (direction == "y") page.vWrap = spine.TextureWrap.Repeat;else if (direction == "xy") page.uWrap = page.vWrap = spine.TextureWrap.Repeat;
          page.texture = textureLoader(line);
          page.texture.setFilters(page.minFilter, page.magFilter);
          page.texture.setWraps(page.uWrap, page.vWrap);
          page.width = page.texture.getImage().width;
          page.height = page.texture.getImage().height;
          this.pages.push(page);
        } else {
          var region = new TextureAtlasRegion();
          region.name = line;
          region.page = page;
          var rotateValue = reader.readValue();

          if (rotateValue.toLocaleLowerCase() == "true") {
            region.degrees = 90;
          } else if (rotateValue.toLocaleLowerCase() == "false") {
            region.degrees = 0;
          } else {
            region.degrees = parseFloat(rotateValue);
          }

          region.rotate = region.degrees == 90;
          reader.readTuple(tuple);
          var x = parseInt(tuple[0]);
          var y = parseInt(tuple[1]);
          reader.readTuple(tuple);
          var width = parseInt(tuple[0]);
          var height = parseInt(tuple[1]);
          region.u = x / page.width;
          region.v = y / page.height;

          if (region.rotate) {
            region.u2 = (x + height) / page.width;
            region.v2 = (y + width) / page.height;
          } else {
            region.u2 = (x + width) / page.width;
            region.v2 = (y + height) / page.height;
          }

          region.x = x;
          region.y = y;
          region.width = Math.abs(width);
          region.height = Math.abs(height);

          if (reader.readTuple(tuple) == 4) {
            if (reader.readTuple(tuple) == 4) {
              reader.readTuple(tuple);
            }
          }

          region.originalWidth = parseInt(tuple[0]);
          region.originalHeight = parseInt(tuple[1]);
          reader.readTuple(tuple);
          region.offsetX = parseInt(tuple[0]);
          region.offsetY = parseInt(tuple[1]);
          region.index = parseInt(reader.readValue());
          region.texture = page.texture;
          this.regions.push(region);
        }
      }
    };

    TextureAtlas.prototype.findRegion = function (name) {
      for (var i = 0; i < this.regions.length; i++) {
        if (this.regions[i].name == name) {
          return this.regions[i];
        }
      }

      return null;
    };

    TextureAtlas.prototype.dispose = function () {
      for (var i = 0; i < this.pages.length; i++) {
        this.pages[i].texture.dispose();
      }
    };

    return TextureAtlas;
  }();

  spine.TextureAtlas = TextureAtlas;

  var TextureAtlasReader = function () {
    function TextureAtlasReader(text) {
      this.index = 0;
      this.lines = text.split(/\r\n|\r|\n/);
    }

    TextureAtlasReader.prototype.readLine = function () {
      if (this.index >= this.lines.length) return null;
      return this.lines[this.index++];
    };

    TextureAtlasReader.prototype.readValue = function () {
      var line = this.readLine();
      var colon = line.indexOf(":");
      if (colon == -1) throw new Error("Invalid line: " + line);
      return line.substring(colon + 1).trim();
    };

    TextureAtlasReader.prototype.readTuple = function (tuple) {
      var line = this.readLine();
      var colon = line.indexOf(":");
      if (colon == -1) throw new Error("Invalid line: " + line);
      var i = 0,
          lastMatch = colon + 1;

      for (; i < 3; i++) {
        var comma = line.indexOf(",", lastMatch);
        if (comma == -1) break;
        tuple[i] = line.substr(lastMatch, comma - lastMatch).trim();
        lastMatch = comma + 1;
      }

      tuple[i] = line.substring(lastMatch).trim();
      return i + 1;
    };

    return TextureAtlasReader;
  }();

  var TextureAtlasPage = function () {
    function TextureAtlasPage() {}

    return TextureAtlasPage;
  }();

  spine.TextureAtlasPage = TextureAtlasPage;

  var TextureAtlasRegion = function (_super) {
    __extends(TextureAtlasRegion, _super);

    function TextureAtlasRegion() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return TextureAtlasRegion;
  }(spine.TextureRegion);

  spine.TextureAtlasRegion = TextureAtlasRegion;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var TransformConstraint = function () {
    function TransformConstraint(data, skeleton) {
      this.rotateMix = 0;
      this.translateMix = 0;
      this.scaleMix = 0;
      this.shearMix = 0;
      this.temp = new spine.Vector2();
      this.active = false;
      if (data == null) throw new Error("data cannot be null.");
      if (skeleton == null) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.rotateMix = data.rotateMix;
      this.translateMix = data.translateMix;
      this.scaleMix = data.scaleMix;
      this.shearMix = data.shearMix;
      this.bones = new Array();

      for (var i = 0; i < data.bones.length; i++) {
        this.bones.push(skeleton.findBone(data.bones[i].name));
      }

      this.target = skeleton.findBone(data.target.name);
    }

    TransformConstraint.prototype.isActive = function () {
      return this.active;
    };

    TransformConstraint.prototype.apply = function () {
      this.update();
    };

    TransformConstraint.prototype.update = function () {
      if (this.data.local) {
        if (this.data.relative) this.applyRelativeLocal();else this.applyAbsoluteLocal();
      } else {
        if (this.data.relative) this.applyRelativeWorld();else this.applyAbsoluteWorld();
      }
    };

    TransformConstraint.prototype.applyAbsoluteWorld = function () {
      var rotateMix = this.rotateMix,
          translateMix = this.translateMix,
          scaleMix = this.scaleMix,
          shearMix = this.shearMix;
      var target = this.target;
      var ta = target.a,
          tb = target.b,
          tc = target.c,
          td = target.d;
      var degRadReflect = ta * td - tb * tc > 0 ? spine.MathUtils.degRad : -spine.MathUtils.degRad;
      var offsetRotation = this.data.offsetRotation * degRadReflect;
      var offsetShearY = this.data.offsetShearY * degRadReflect;
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        var bone = bones[i];
        var modified = false;

        if (rotateMix != 0) {
          var a = bone.a,
              b = bone.b,
              c = bone.c,
              d = bone.d;
          var r = Math.atan2(tc, ta) - Math.atan2(c, a) + offsetRotation;
          if (r > spine.MathUtils.PI) r -= spine.MathUtils.PI2;else if (r < -spine.MathUtils.PI) r += spine.MathUtils.PI2;
          r *= rotateMix;
          var cos = Math.cos(r),
              sin = Math.sin(r);
          bone.a = cos * a - sin * c;
          bone.b = cos * b - sin * d;
          bone.c = sin * a + cos * c;
          bone.d = sin * b + cos * d;
          modified = true;
        }

        if (translateMix != 0) {
          var temp = this.temp;
          target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
          bone.worldX += (temp.x - bone.worldX) * translateMix;
          bone.worldY += (temp.y - bone.worldY) * translateMix;
          modified = true;
        }

        if (scaleMix > 0) {
          var s = Math.sqrt(bone.a * bone.a + bone.c * bone.c);
          var ts = Math.sqrt(ta * ta + tc * tc);
          if (s > 0.00001) s = (s + (ts - s + this.data.offsetScaleX) * scaleMix) / s;
          bone.a *= s;
          bone.c *= s;
          s = Math.sqrt(bone.b * bone.b + bone.d * bone.d);
          ts = Math.sqrt(tb * tb + td * td);
          if (s > 0.00001) s = (s + (ts - s + this.data.offsetScaleY) * scaleMix) / s;
          bone.b *= s;
          bone.d *= s;
          modified = true;
        }

        if (shearMix > 0) {
          var b = bone.b,
              d = bone.d;
          var by = Math.atan2(d, b);
          var r = Math.atan2(td, tb) - Math.atan2(tc, ta) - (by - Math.atan2(bone.c, bone.a));
          if (r > spine.MathUtils.PI) r -= spine.MathUtils.PI2;else if (r < -spine.MathUtils.PI) r += spine.MathUtils.PI2;
          r = by + (r + offsetShearY) * shearMix;
          var s = Math.sqrt(b * b + d * d);
          bone.b = Math.cos(r) * s;
          bone.d = Math.sin(r) * s;
          modified = true;
        }

        if (modified) bone.appliedValid = false;
      }
    };

    TransformConstraint.prototype.applyRelativeWorld = function () {
      var rotateMix = this.rotateMix,
          translateMix = this.translateMix,
          scaleMix = this.scaleMix,
          shearMix = this.shearMix;
      var target = this.target;
      var ta = target.a,
          tb = target.b,
          tc = target.c,
          td = target.d;
      var degRadReflect = ta * td - tb * tc > 0 ? spine.MathUtils.degRad : -spine.MathUtils.degRad;
      var offsetRotation = this.data.offsetRotation * degRadReflect,
          offsetShearY = this.data.offsetShearY * degRadReflect;
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        var bone = bones[i];
        var modified = false;

        if (rotateMix != 0) {
          var a = bone.a,
              b = bone.b,
              c = bone.c,
              d = bone.d;
          var r = Math.atan2(tc, ta) + offsetRotation;
          if (r > spine.MathUtils.PI) r -= spine.MathUtils.PI2;else if (r < -spine.MathUtils.PI) r += spine.MathUtils.PI2;
          r *= rotateMix;
          var cos = Math.cos(r),
              sin = Math.sin(r);
          bone.a = cos * a - sin * c;
          bone.b = cos * b - sin * d;
          bone.c = sin * a + cos * c;
          bone.d = sin * b + cos * d;
          modified = true;
        }

        if (translateMix != 0) {
          var temp = this.temp;
          target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
          bone.worldX += temp.x * translateMix;
          bone.worldY += temp.y * translateMix;
          modified = true;
        }

        if (scaleMix > 0) {
          var s = (Math.sqrt(ta * ta + tc * tc) - 1 + this.data.offsetScaleX) * scaleMix + 1;
          bone.a *= s;
          bone.c *= s;
          s = (Math.sqrt(tb * tb + td * td) - 1 + this.data.offsetScaleY) * scaleMix + 1;
          bone.b *= s;
          bone.d *= s;
          modified = true;
        }

        if (shearMix > 0) {
          var r = Math.atan2(td, tb) - Math.atan2(tc, ta);
          if (r > spine.MathUtils.PI) r -= spine.MathUtils.PI2;else if (r < -spine.MathUtils.PI) r += spine.MathUtils.PI2;
          var b = bone.b,
              d = bone.d;
          r = Math.atan2(d, b) + (r - spine.MathUtils.PI / 2 + offsetShearY) * shearMix;
          var s = Math.sqrt(b * b + d * d);
          bone.b = Math.cos(r) * s;
          bone.d = Math.sin(r) * s;
          modified = true;
        }

        if (modified) bone.appliedValid = false;
      }
    };

    TransformConstraint.prototype.applyAbsoluteLocal = function () {
      var rotateMix = this.rotateMix,
          translateMix = this.translateMix,
          scaleMix = this.scaleMix,
          shearMix = this.shearMix;
      var target = this.target;
      if (!target.appliedValid) target.updateAppliedTransform();
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        var bone = bones[i];
        if (!bone.appliedValid) bone.updateAppliedTransform();
        var rotation = bone.arotation;

        if (rotateMix != 0) {
          var r = target.arotation - rotation + this.data.offsetRotation;
          r -= (16384 - (16384.499999999996 - r / 360 | 0)) * 360;
          rotation += r * rotateMix;
        }

        var x = bone.ax,
            y = bone.ay;

        if (translateMix != 0) {
          x += (target.ax - x + this.data.offsetX) * translateMix;
          y += (target.ay - y + this.data.offsetY) * translateMix;
        }

        var scaleX = bone.ascaleX,
            scaleY = bone.ascaleY;

        if (scaleMix != 0) {
          if (scaleX > 0.00001) scaleX = (scaleX + (target.ascaleX - scaleX + this.data.offsetScaleX) * scaleMix) / scaleX;
          if (scaleY > 0.00001) scaleY = (scaleY + (target.ascaleY - scaleY + this.data.offsetScaleY) * scaleMix) / scaleY;
        }

        var shearY = bone.ashearY;

        if (shearMix != 0) {
          var r = target.ashearY - shearY + this.data.offsetShearY;
          r -= (16384 - (16384.499999999996 - r / 360 | 0)) * 360;
          bone.shearY += r * shearMix;
        }

        bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
      }
    };

    TransformConstraint.prototype.applyRelativeLocal = function () {
      var rotateMix = this.rotateMix,
          translateMix = this.translateMix,
          scaleMix = this.scaleMix,
          shearMix = this.shearMix;
      var target = this.target;
      if (!target.appliedValid) target.updateAppliedTransform();
      var bones = this.bones;

      for (var i = 0, n = bones.length; i < n; i++) {
        var bone = bones[i];
        if (!bone.appliedValid) bone.updateAppliedTransform();
        var rotation = bone.arotation;
        if (rotateMix != 0) rotation += (target.arotation + this.data.offsetRotation) * rotateMix;
        var x = bone.ax,
            y = bone.ay;

        if (translateMix != 0) {
          x += (target.ax + this.data.offsetX) * translateMix;
          y += (target.ay + this.data.offsetY) * translateMix;
        }

        var scaleX = bone.ascaleX,
            scaleY = bone.ascaleY;

        if (scaleMix != 0) {
          if (scaleX > 0.00001) scaleX *= (target.ascaleX - 1 + this.data.offsetScaleX) * scaleMix + 1;
          if (scaleY > 0.00001) scaleY *= (target.ascaleY - 1 + this.data.offsetScaleY) * scaleMix + 1;
        }

        var shearY = bone.ashearY;
        if (shearMix != 0) shearY += (target.ashearY + this.data.offsetShearY) * shearMix;
        bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
      }
    };

    return TransformConstraint;
  }();

  spine.TransformConstraint = TransformConstraint;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var TransformConstraintData = function (_super) {
    __extends(TransformConstraintData, _super);

    function TransformConstraintData(name) {
      var _this = _super.call(this, name, 0, false) || this;

      _this.bones = new Array();
      _this.rotateMix = 0;
      _this.translateMix = 0;
      _this.scaleMix = 0;
      _this.shearMix = 0;
      _this.offsetRotation = 0;
      _this.offsetX = 0;
      _this.offsetY = 0;
      _this.offsetScaleX = 0;
      _this.offsetScaleY = 0;
      _this.offsetShearY = 0;
      _this.relative = false;
      _this.local = false;
      return _this;
    }

    return TransformConstraintData;
  }(spine.ConstraintData);

  spine.TransformConstraintData = TransformConstraintData;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var Triangulator = function () {
    function Triangulator() {
      this.convexPolygons = new Array();
      this.convexPolygonsIndices = new Array();
      this.indicesArray = new Array();
      this.isConcaveArray = new Array();
      this.triangles = new Array();
      this.polygonPool = new spine.Pool(function () {
        return new Array();
      });
      this.polygonIndicesPool = new spine.Pool(function () {
        return new Array();
      });
    }

    Triangulator.prototype.triangulate = function (verticesArray) {
      var vertices = verticesArray;
      var vertexCount = verticesArray.length >> 1;
      var indices = this.indicesArray;
      indices.length = 0;

      for (var i = 0; i < vertexCount; i++) {
        indices[i] = i;
      }

      var isConcave = this.isConcaveArray;
      isConcave.length = 0;

      for (var i = 0, n = vertexCount; i < n; ++i) {
        isConcave[i] = Triangulator.isConcave(i, vertexCount, vertices, indices);
      }

      var triangles = this.triangles;
      triangles.length = 0;

      while (vertexCount > 3) {
        var previous = vertexCount - 1,
            i = 0,
            next = 1;

        while (true) {
          outer: if (!isConcave[i]) {
            var p1 = indices[previous] << 1,
                p2 = indices[i] << 1,
                p3 = indices[next] << 1;
            var p1x = vertices[p1],
                p1y = vertices[p1 + 1];
            var p2x = vertices[p2],
                p2y = vertices[p2 + 1];
            var p3x = vertices[p3],
                p3y = vertices[p3 + 1];

            for (var ii = (next + 1) % vertexCount; ii != previous; ii = (ii + 1) % vertexCount) {
              if (!isConcave[ii]) continue;
              var v = indices[ii] << 1;
              var vx = vertices[v],
                  vy = vertices[v + 1];

              if (Triangulator.positiveArea(p3x, p3y, p1x, p1y, vx, vy)) {
                if (Triangulator.positiveArea(p1x, p1y, p2x, p2y, vx, vy)) {
                  if (Triangulator.positiveArea(p2x, p2y, p3x, p3y, vx, vy)) break outer;
                }
              }
            }

            break;
          }

          if (next == 0) {
            do {
              if (!isConcave[i]) break;
              i--;
            } while (i > 0);

            break;
          }

          previous = i;
          i = next;
          next = (next + 1) % vertexCount;
        }

        triangles.push(indices[(vertexCount + i - 1) % vertexCount]);
        triangles.push(indices[i]);
        triangles.push(indices[(i + 1) % vertexCount]);
        indices.splice(i, 1);
        isConcave.splice(i, 1);
        vertexCount--;
        var previousIndex = (vertexCount + i - 1) % vertexCount;
        var nextIndex = i == vertexCount ? 0 : i;
        isConcave[previousIndex] = Triangulator.isConcave(previousIndex, vertexCount, vertices, indices);
        isConcave[nextIndex] = Triangulator.isConcave(nextIndex, vertexCount, vertices, indices);
      }

      if (vertexCount == 3) {
        triangles.push(indices[2]);
        triangles.push(indices[0]);
        triangles.push(indices[1]);
      }

      return triangles;
    };

    Triangulator.prototype.decompose = function (verticesArray, triangles) {
      var vertices = verticesArray;
      var convexPolygons = this.convexPolygons;
      this.polygonPool.freeAll(convexPolygons);
      convexPolygons.length = 0;
      var convexPolygonsIndices = this.convexPolygonsIndices;
      this.polygonIndicesPool.freeAll(convexPolygonsIndices);
      convexPolygonsIndices.length = 0;
      var polygonIndices = this.polygonIndicesPool.obtain();
      polygonIndices.length = 0;
      var polygon = this.polygonPool.obtain();
      polygon.length = 0;
      var fanBaseIndex = -1,
          lastWinding = 0;

      for (var i = 0, n = triangles.length; i < n; i += 3) {
        var t1 = triangles[i] << 1,
            t2 = triangles[i + 1] << 1,
            t3 = triangles[i + 2] << 1;
        var x1 = vertices[t1],
            y1 = vertices[t1 + 1];
        var x2 = vertices[t2],
            y2 = vertices[t2 + 1];
        var x3 = vertices[t3],
            y3 = vertices[t3 + 1];
        var merged = false;

        if (fanBaseIndex == t1) {
          var o = polygon.length - 4;
          var winding1 = Triangulator.winding(polygon[o], polygon[o + 1], polygon[o + 2], polygon[o + 3], x3, y3);
          var winding2 = Triangulator.winding(x3, y3, polygon[0], polygon[1], polygon[2], polygon[3]);

          if (winding1 == lastWinding && winding2 == lastWinding) {
            polygon.push(x3);
            polygon.push(y3);
            polygonIndices.push(t3);
            merged = true;
          }
        }

        if (!merged) {
          if (polygon.length > 0) {
            convexPolygons.push(polygon);
            convexPolygonsIndices.push(polygonIndices);
          } else {
            this.polygonPool.free(polygon);
            this.polygonIndicesPool.free(polygonIndices);
          }

          polygon = this.polygonPool.obtain();
          polygon.length = 0;
          polygon.push(x1);
          polygon.push(y1);
          polygon.push(x2);
          polygon.push(y2);
          polygon.push(x3);
          polygon.push(y3);
          polygonIndices = this.polygonIndicesPool.obtain();
          polygonIndices.length = 0;
          polygonIndices.push(t1);
          polygonIndices.push(t2);
          polygonIndices.push(t3);
          lastWinding = Triangulator.winding(x1, y1, x2, y2, x3, y3);
          fanBaseIndex = t1;
        }
      }

      if (polygon.length > 0) {
        convexPolygons.push(polygon);
        convexPolygonsIndices.push(polygonIndices);
      }

      for (var i = 0, n = convexPolygons.length; i < n; i++) {
        polygonIndices = convexPolygonsIndices[i];
        if (polygonIndices.length == 0) continue;
        var firstIndex = polygonIndices[0];
        var lastIndex = polygonIndices[polygonIndices.length - 1];
        polygon = convexPolygons[i];
        var o = polygon.length - 4;
        var prevPrevX = polygon[o],
            prevPrevY = polygon[o + 1];
        var prevX = polygon[o + 2],
            prevY = polygon[o + 3];
        var firstX = polygon[0],
            firstY = polygon[1];
        var secondX = polygon[2],
            secondY = polygon[3];
        var winding = Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, firstX, firstY);

        for (var ii = 0; ii < n; ii++) {
          if (ii == i) continue;
          var otherIndices = convexPolygonsIndices[ii];
          if (otherIndices.length != 3) continue;
          var otherFirstIndex = otherIndices[0];
          var otherSecondIndex = otherIndices[1];
          var otherLastIndex = otherIndices[2];
          var otherPoly = convexPolygons[ii];
          var x3 = otherPoly[otherPoly.length - 2],
              y3 = otherPoly[otherPoly.length - 1];
          if (otherFirstIndex != firstIndex || otherSecondIndex != lastIndex) continue;
          var winding1 = Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, x3, y3);
          var winding2 = Triangulator.winding(x3, y3, firstX, firstY, secondX, secondY);

          if (winding1 == winding && winding2 == winding) {
            otherPoly.length = 0;
            otherIndices.length = 0;
            polygon.push(x3);
            polygon.push(y3);
            polygonIndices.push(otherLastIndex);
            prevPrevX = prevX;
            prevPrevY = prevY;
            prevX = x3;
            prevY = y3;
            ii = 0;
          }
        }
      }

      for (var i = convexPolygons.length - 1; i >= 0; i--) {
        polygon = convexPolygons[i];

        if (polygon.length == 0) {
          convexPolygons.splice(i, 1);
          this.polygonPool.free(polygon);
          polygonIndices = convexPolygonsIndices[i];
          convexPolygonsIndices.splice(i, 1);
          this.polygonIndicesPool.free(polygonIndices);
        }
      }

      return convexPolygons;
    };

    Triangulator.isConcave = function (index, vertexCount, vertices, indices) {
      var previous = indices[(vertexCount + index - 1) % vertexCount] << 1;
      var current = indices[index] << 1;
      var next = indices[(index + 1) % vertexCount] << 1;
      return !this.positiveArea(vertices[previous], vertices[previous + 1], vertices[current], vertices[current + 1], vertices[next], vertices[next + 1]);
    };

    Triangulator.positiveArea = function (p1x, p1y, p2x, p2y, p3x, p3y) {
      return p1x * (p3y - p2y) + p2x * (p1y - p3y) + p3x * (p2y - p1y) >= 0;
    };

    Triangulator.winding = function (p1x, p1y, p2x, p2y, p3x, p3y) {
      var px = p2x - p1x,
          py = p2y - p1y;
      return p3x * py - p3y * px + px * p1y - p1x * py >= 0 ? 1 : -1;
    };

    return Triangulator;
  }();

  spine.Triangulator = Triangulator;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var IntSet = function () {
    function IntSet() {
      this.array = new Array();
    }

    IntSet.prototype.add = function (value) {
      var contains = this.contains(value);
      this.array[value | 0] = value | 0;
      return !contains;
    };

    IntSet.prototype.contains = function (value) {
      return this.array[value | 0] != undefined;
    };

    IntSet.prototype.remove = function (value) {
      this.array[value | 0] = undefined;
    };

    IntSet.prototype.clear = function () {
      this.array.length = 0;
    };

    return IntSet;
  }();

  spine.IntSet = IntSet;

  var Color = function () {
    function Color(r, g, b, a) {
      if (r === void 0) {
        r = 0;
      }

      if (g === void 0) {
        g = 0;
      }

      if (b === void 0) {
        b = 0;
      }

      if (a === void 0) {
        a = 0;
      }

      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }

    Color.prototype.set = function (r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
      this.clamp();
      return this;
    };

    Color.prototype.setFromColor = function (c) {
      this.r = c.r;
      this.g = c.g;
      this.b = c.b;
      this.a = c.a;
      return this;
    };

    Color.prototype.setFromString = function (hex) {
      hex = hex.charAt(0) == '#' ? hex.substr(1) : hex;
      this.r = parseInt(hex.substr(0, 2), 16) / 255.0;
      this.g = parseInt(hex.substr(2, 2), 16) / 255.0;
      this.b = parseInt(hex.substr(4, 2), 16) / 255.0;
      this.a = (hex.length != 8 ? 255 : parseInt(hex.substr(6, 2), 16)) / 255.0;
      return this;
    };

    Color.prototype.add = function (r, g, b, a) {
      this.r += r;
      this.g += g;
      this.b += b;
      this.a += a;
      this.clamp();
      return this;
    };

    Color.prototype.clamp = function () {
      if (this.r < 0) this.r = 0;else if (this.r > 1) this.r = 1;
      if (this.g < 0) this.g = 0;else if (this.g > 1) this.g = 1;
      if (this.b < 0) this.b = 0;else if (this.b > 1) this.b = 1;
      if (this.a < 0) this.a = 0;else if (this.a > 1) this.a = 1;
      return this;
    };

    Color.rgba8888ToColor = function (color, value) {
      color.r = ((value & 0xff000000) >>> 24) / 255;
      color.g = ((value & 0x00ff0000) >>> 16) / 255;
      color.b = ((value & 0x0000ff00) >>> 8) / 255;
      color.a = (value & 0x000000ff) / 255;
    };

    Color.rgb888ToColor = function (color, value) {
      color.r = ((value & 0x00ff0000) >>> 16) / 255;
      color.g = ((value & 0x0000ff00) >>> 8) / 255;
      color.b = (value & 0x000000ff) / 255;
    };

    Color.WHITE = new Color(1, 1, 1, 1);
    Color.RED = new Color(1, 0, 0, 1);
    Color.GREEN = new Color(0, 1, 0, 1);
    Color.BLUE = new Color(0, 0, 1, 1);
    Color.MAGENTA = new Color(1, 0, 1, 1);
    return Color;
  }();

  spine.Color = Color;

  var MathUtils = function () {
    function MathUtils() {}

    MathUtils.clamp = function (value, min, max) {
      if (value < min) return min;
      if (value > max) return max;
      return value;
    };

    MathUtils.cosDeg = function (degrees) {
      return Math.cos(degrees * MathUtils.degRad);
    };

    MathUtils.sinDeg = function (degrees) {
      return Math.sin(degrees * MathUtils.degRad);
    };

    MathUtils.signum = function (value) {
      return value > 0 ? 1 : value < 0 ? -1 : 0;
    };

    MathUtils.toInt = function (x) {
      return x > 0 ? Math.floor(x) : Math.ceil(x);
    };

    MathUtils.cbrt = function (x) {
      var y = Math.pow(Math.abs(x), 1 / 3);
      return x < 0 ? -y : y;
    };

    MathUtils.randomTriangular = function (min, max) {
      return MathUtils.randomTriangularWith(min, max, (min + max) * 0.5);
    };

    MathUtils.randomTriangularWith = function (min, max, mode) {
      var u = Math.random();
      var d = max - min;
      if (u <= (mode - min) / d) return min + Math.sqrt(u * d * (mode - min));
      return max - Math.sqrt((1 - u) * d * (max - mode));
    };

    MathUtils.PI = 3.1415927;
    MathUtils.PI2 = MathUtils.PI * 2;
    MathUtils.radiansToDegrees = 180 / MathUtils.PI;
    MathUtils.radDeg = MathUtils.radiansToDegrees;
    MathUtils.degreesToRadians = MathUtils.PI / 180;
    MathUtils.degRad = MathUtils.degreesToRadians;
    return MathUtils;
  }();

  spine.MathUtils = MathUtils;

  var Interpolation = function () {
    function Interpolation() {}

    Interpolation.prototype.apply = function (start, end, a) {
      return start + (end - start) * this.applyInternal(a);
    };

    return Interpolation;
  }();

  spine.Interpolation = Interpolation;

  var Pow = function (_super) {
    __extends(Pow, _super);

    function Pow(power) {
      var _this = _super.call(this) || this;

      _this.power = 2;
      _this.power = power;
      return _this;
    }

    Pow.prototype.applyInternal = function (a) {
      if (a <= 0.5) return Math.pow(a * 2, this.power) / 2;
      return Math.pow((a - 1) * 2, this.power) / (this.power % 2 == 0 ? -2 : 2) + 1;
    };

    return Pow;
  }(Interpolation);

  spine.Pow = Pow;

  var PowOut = function (_super) {
    __extends(PowOut, _super);

    function PowOut(power) {
      return _super.call(this, power) || this;
    }

    PowOut.prototype.applyInternal = function (a) {
      return Math.pow(a - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1;
    };

    return PowOut;
  }(Pow);

  spine.PowOut = PowOut;

  var Utils = function () {
    function Utils() {}

    Utils.arrayCopy = function (source, sourceStart, dest, destStart, numElements) {
      for (var i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
        dest[j] = source[i];
      }
    };

    Utils.setArraySize = function (array, size, value) {
      if (value === void 0) {
        value = 0;
      }

      var oldSize = array.length;
      if (oldSize == size) return array;
      array.length = size;

      if (oldSize < size) {
        for (var i = oldSize; i < size; i++) {
          array[i] = value;
        }
      }

      return array;
    };

    Utils.ensureArrayCapacity = function (array, size, value) {
      if (value === void 0) {
        value = 0;
      }

      if (array.length >= size) return array;
      return Utils.setArraySize(array, size, value);
    };

    Utils.newArray = function (size, defaultValue) {
      var array = new Array(size);

      for (var i = 0; i < size; i++) {
        array[i] = defaultValue;
      }

      return array;
    };

    Utils.newFloatArray = function (size) {
      if (Utils.SUPPORTS_TYPED_ARRAYS) {
        return new Float32Array(size);
      } else {
        var array = new Array(size);

        for (var i = 0; i < array.length; i++) {
          array[i] = 0;
        }

        return array;
      }
    };

    Utils.newShortArray = function (size) {
      if (Utils.SUPPORTS_TYPED_ARRAYS) {
        return new Int16Array(size);
      } else {
        var array = new Array(size);

        for (var i = 0; i < array.length; i++) {
          array[i] = 0;
        }

        return array;
      }
    };

    Utils.toFloatArray = function (array) {
      return Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
    };

    Utils.toSinglePrecision = function (value) {
      return Utils.SUPPORTS_TYPED_ARRAYS ? Math.fround(value) : value;
    };

    Utils.webkit602BugfixHelper = function (alpha, blend) {};

    Utils.contains = function (array, element, identity) {
      if (identity === void 0) {
        identity = true;
      }

      for (var i = 0; i < array.length; i++) {
        if (array[i] == element) return true;
      }

      return false;
    };

    Utils.SUPPORTS_TYPED_ARRAYS = typeof Float32Array !== "undefined";
    return Utils;
  }();

  spine.Utils = Utils;

  var DebugUtils = function () {
    function DebugUtils() {}

    DebugUtils.logBones = function (skeleton) {
      for (var i = 0; i < skeleton.bones.length; i++) {
        var bone = skeleton.bones[i];
        console.log(bone.data.name + ", " + bone.a + ", " + bone.b + ", " + bone.c + ", " + bone.d + ", " + bone.worldX + ", " + bone.worldY);
      }
    };

    return DebugUtils;
  }();

  spine.DebugUtils = DebugUtils;

  var Pool = function () {
    function Pool(instantiator) {
      this.items = new Array();
      this.instantiator = instantiator;
    }

    Pool.prototype.obtain = function () {
      return this.items.length > 0 ? this.items.pop() : this.instantiator();
    };

    Pool.prototype.free = function (item) {
      if (item.reset) item.reset();
      this.items.push(item);
    };

    Pool.prototype.freeAll = function (items) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].reset) items[i].reset();
        this.items[i] = items[i];
      }
    };

    Pool.prototype.clear = function () {
      this.items.length = 0;
    };

    return Pool;
  }();

  spine.Pool = Pool;

  var Vector2 = function () {
    function Vector2(x, y) {
      if (x === void 0) {
        x = 0;
      }

      if (y === void 0) {
        y = 0;
      }

      this.x = x;
      this.y = y;
    }

    Vector2.prototype.set = function (x, y) {
      this.x = x;
      this.y = y;
      return this;
    };

    Vector2.prototype.length = function () {
      var x = this.x;
      var y = this.y;
      return Math.sqrt(x * x + y * y);
    };

    Vector2.prototype.normalize = function () {
      var len = this.length();

      if (len != 0) {
        this.x /= len;
        this.y /= len;
      }

      return this;
    };

    return Vector2;
  }();

  spine.Vector2 = Vector2;

  var TimeKeeper = function () {
    function TimeKeeper() {
      this.maxDelta = 0.064;
      this.framesPerSecond = 0;
      this.delta = 0;
      this.totalTime = 0;
      this.lastTime = Date.now() / 1000;
      this.frameCount = 0;
      this.frameTime = 0;
    }

    TimeKeeper.prototype.update = function () {
      var now = Date.now() / 1000;
      this.delta = now - this.lastTime;
      this.frameTime += this.delta;
      this.totalTime += this.delta;
      if (this.delta > this.maxDelta) this.delta = this.maxDelta;
      this.lastTime = now;
      this.frameCount++;

      if (this.frameTime > 1) {
        this.framesPerSecond = this.frameCount / this.frameTime;
        this.frameTime = 0;
        this.frameCount = 0;
      }
    };

    return TimeKeeper;
  }();

  spine.TimeKeeper = TimeKeeper;

  var WindowedMean = function () {
    function WindowedMean(windowSize) {
      if (windowSize === void 0) {
        windowSize = 32;
      }

      this.addedValues = 0;
      this.lastValue = 0;
      this.mean = 0;
      this.dirty = true;
      this.values = new Array(windowSize);
    }

    WindowedMean.prototype.hasEnoughData = function () {
      return this.addedValues >= this.values.length;
    };

    WindowedMean.prototype.addValue = function (value) {
      if (this.addedValues < this.values.length) this.addedValues++;
      this.values[this.lastValue++] = value;
      if (this.lastValue > this.values.length - 1) this.lastValue = 0;
      this.dirty = true;
    };

    WindowedMean.prototype.getMean = function () {
      if (this.hasEnoughData()) {
        if (this.dirty) {
          var mean = 0;

          for (var i = 0; i < this.values.length; i++) {
            mean += this.values[i];
          }

          this.mean = mean / this.values.length;
          this.dirty = false;
        }

        return this.mean;
      } else {
        return 0;
      }
    };

    return WindowedMean;
  }();

  spine.WindowedMean = WindowedMean;
})(spine_threejs_spine || (spine_threejs_spine = {}));

(function () {
  if (!Math.fround) {
    Math.fround = function (array) {
      return function (x) {
        return array[0] = x, array[0];
      };
    }(new Float32Array(1));
  }
})();

var spine_threejs_spine;

(function (spine) {
  var Attachment = function () {
    function Attachment(name) {
      if (name == null) throw new Error("name cannot be null.");
      this.name = name;
    }

    return Attachment;
  }();

  spine.Attachment = Attachment;

  var VertexAttachment = function (_super) {
    __extends(VertexAttachment, _super);

    function VertexAttachment(name) {
      var _this = _super.call(this, name) || this;

      _this.id = (VertexAttachment.nextID++ & 65535) << 11;
      _this.worldVerticesLength = 0;
      _this.deformAttachment = _this;
      return _this;
    }

    VertexAttachment.prototype.computeWorldVertices = function (slot, start, count, worldVertices, offset, stride) {
      count = offset + (count >> 1) * stride;
      var skeleton = slot.bone.skeleton;
      var deformArray = slot.deform;
      var vertices = this.vertices;
      var bones = this.bones;

      if (bones == null) {
        if (deformArray.length > 0) vertices = deformArray;
        var bone = slot.bone;
        var x = bone.worldX;
        var y = bone.worldY;
        var a = bone.a,
            b = bone.b,
            c = bone.c,
            d = bone.d;

        for (var v_1 = start, w = offset; w < count; v_1 += 2, w += stride) {
          var vx = vertices[v_1],
              vy = vertices[v_1 + 1];
          worldVertices[w] = vx * a + vy * b + x;
          worldVertices[w + 1] = vx * c + vy * d + y;
        }

        return;
      }

      var v = 0,
          skip = 0;

      for (var i = 0; i < start; i += 2) {
        var n = bones[v];
        v += n + 1;
        skip += n;
      }

      var skeletonBones = skeleton.bones;

      if (deformArray.length == 0) {
        for (var w = offset, b = skip * 3; w < count; w += stride) {
          var wx = 0,
              wy = 0;
          var n = bones[v++];
          n += v;

          for (; v < n; v++, b += 3) {
            var bone = skeletonBones[bones[v]];
            var vx = vertices[b],
                vy = vertices[b + 1],
                weight = vertices[b + 2];
            wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
            wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
          }

          worldVertices[w] = wx;
          worldVertices[w + 1] = wy;
        }
      } else {
        var deform = deformArray;

        for (var w = offset, b = skip * 3, f = skip << 1; w < count; w += stride) {
          var wx = 0,
              wy = 0;
          var n = bones[v++];
          n += v;

          for (; v < n; v++, b += 3, f += 2) {
            var bone = skeletonBones[bones[v]];
            var vx = vertices[b] + deform[f],
                vy = vertices[b + 1] + deform[f + 1],
                weight = vertices[b + 2];
            wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
            wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
          }

          worldVertices[w] = wx;
          worldVertices[w + 1] = wy;
        }
      }
    };

    VertexAttachment.prototype.copyTo = function (attachment) {
      if (this.bones != null) {
        attachment.bones = new Array(this.bones.length);
        spine.Utils.arrayCopy(this.bones, 0, attachment.bones, 0, this.bones.length);
      } else attachment.bones = null;

      if (this.vertices != null) {
        attachment.vertices = spine.Utils.newFloatArray(this.vertices.length);
        spine.Utils.arrayCopy(this.vertices, 0, attachment.vertices, 0, this.vertices.length);
      } else attachment.vertices = null;

      attachment.worldVerticesLength = this.worldVerticesLength;
      attachment.deformAttachment = this.deformAttachment;
    };

    VertexAttachment.nextID = 0;
    return VertexAttachment;
  }(Attachment);

  spine.VertexAttachment = VertexAttachment;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var AttachmentType;

  (function (AttachmentType) {
    AttachmentType[AttachmentType["Region"] = 0] = "Region";
    AttachmentType[AttachmentType["BoundingBox"] = 1] = "BoundingBox";
    AttachmentType[AttachmentType["Mesh"] = 2] = "Mesh";
    AttachmentType[AttachmentType["LinkedMesh"] = 3] = "LinkedMesh";
    AttachmentType[AttachmentType["Path"] = 4] = "Path";
    AttachmentType[AttachmentType["Point"] = 5] = "Point";
    AttachmentType[AttachmentType["Clipping"] = 6] = "Clipping";
  })(AttachmentType = spine.AttachmentType || (spine.AttachmentType = {}));
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var BoundingBoxAttachment = function (_super) {
    __extends(BoundingBoxAttachment, _super);

    function BoundingBoxAttachment(name) {
      var _this = _super.call(this, name) || this;

      _this.color = new spine.Color(1, 1, 1, 1);
      return _this;
    }

    BoundingBoxAttachment.prototype.copy = function () {
      var copy = new BoundingBoxAttachment(name);
      this.copyTo(copy);
      copy.color.setFromColor(this.color);
      return copy;
    };

    return BoundingBoxAttachment;
  }(spine.VertexAttachment);

  spine.BoundingBoxAttachment = BoundingBoxAttachment;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var ClippingAttachment = function (_super) {
    __extends(ClippingAttachment, _super);

    function ClippingAttachment(name) {
      var _this = _super.call(this, name) || this;

      _this.color = new spine.Color(0.2275, 0.2275, 0.8078, 1);
      return _this;
    }

    ClippingAttachment.prototype.copy = function () {
      var copy = new ClippingAttachment(name);
      this.copyTo(copy);
      copy.endSlot = this.endSlot;
      copy.color.setFromColor(this.color);
      return copy;
    };

    return ClippingAttachment;
  }(spine.VertexAttachment);

  spine.ClippingAttachment = ClippingAttachment;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var MeshAttachment = function (_super) {
    __extends(MeshAttachment, _super);

    function MeshAttachment(name) {
      var _this = _super.call(this, name) || this;

      _this.color = new spine.Color(1, 1, 1, 1);
      _this.tempColor = new spine.Color(0, 0, 0, 0);
      return _this;
    }

    MeshAttachment.prototype.updateUVs = function () {
      var regionUVs = this.regionUVs;
      if (this.uvs == null || this.uvs.length != regionUVs.length) this.uvs = spine.Utils.newFloatArray(regionUVs.length);
      var uvs = this.uvs;
      var n = this.uvs.length;
      var u = this.region.u,
          v = this.region.v,
          width = 0,
          height = 0;

      if (this.region instanceof spine.TextureAtlasRegion) {
        var region = this.region;
        var textureWidth = region.texture.getImage().width,
            textureHeight = region.texture.getImage().height;

        switch (region.degrees) {
          case 90:
            u -= (region.originalHeight - region.offsetY - region.height) / textureWidth;
            v -= (region.originalWidth - region.offsetX - region.width) / textureHeight;
            width = region.originalHeight / textureWidth;
            height = region.originalWidth / textureHeight;

            for (var i = 0; i < n; i += 2) {
              uvs[i] = u + regionUVs[i + 1] * width;
              uvs[i + 1] = v + (1 - regionUVs[i]) * height;
            }

            return;

          case 180:
            u -= (region.originalWidth - region.offsetX - region.width) / textureWidth;
            v -= region.offsetY / textureHeight;
            width = region.originalWidth / textureWidth;
            height = region.originalHeight / textureHeight;

            for (var i = 0; i < n; i += 2) {
              uvs[i] = u + (1 - regionUVs[i]) * width;
              uvs[i + 1] = v + (1 - regionUVs[i + 1]) * height;
            }

            return;

          case 270:
            u -= region.offsetY / textureWidth;
            v -= region.offsetX / textureHeight;
            width = region.originalHeight / textureWidth;
            height = region.originalWidth / textureHeight;

            for (var i = 0; i < n; i += 2) {
              uvs[i] = u + (1 - regionUVs[i + 1]) * width;
              uvs[i + 1] = v + regionUVs[i] * height;
            }

            return;
        }

        u -= region.offsetX / textureWidth;
        v -= (region.originalHeight - region.offsetY - region.height) / textureHeight;
        width = region.originalWidth / textureWidth;
        height = region.originalHeight / textureHeight;
      } else if (this.region == null) {
        u = v = 0;
        width = height = 1;
      } else {
        width = this.region.u2 - u;
        height = this.region.v2 - v;
      }

      for (var i = 0; i < n; i += 2) {
        uvs[i] = u + regionUVs[i] * width;
        uvs[i + 1] = v + regionUVs[i + 1] * height;
      }
    };

    MeshAttachment.prototype.getParentMesh = function () {
      return this.parentMesh;
    };

    MeshAttachment.prototype.setParentMesh = function (parentMesh) {
      this.parentMesh = parentMesh;

      if (parentMesh != null) {
        this.bones = parentMesh.bones;
        this.vertices = parentMesh.vertices;
        this.worldVerticesLength = parentMesh.worldVerticesLength;
        this.regionUVs = parentMesh.regionUVs;
        this.triangles = parentMesh.triangles;
        this.hullLength = parentMesh.hullLength;
        this.worldVerticesLength = parentMesh.worldVerticesLength;
      }
    };

    MeshAttachment.prototype.copy = function () {
      if (this.parentMesh != null) return this.newLinkedMesh();
      var copy = new MeshAttachment(this.name);
      copy.region = this.region;
      copy.path = this.path;
      copy.color.setFromColor(this.color);
      this.copyTo(copy);
      copy.regionUVs = new Array(this.regionUVs.length);
      spine.Utils.arrayCopy(this.regionUVs, 0, copy.regionUVs, 0, this.regionUVs.length);
      copy.uvs = new Array(this.uvs.length);
      spine.Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, this.uvs.length);
      copy.triangles = new Array(this.triangles.length);
      spine.Utils.arrayCopy(this.triangles, 0, copy.triangles, 0, this.triangles.length);
      copy.hullLength = this.hullLength;

      if (this.edges != null) {
        copy.edges = new Array(this.edges.length);
        spine.Utils.arrayCopy(this.edges, 0, copy.edges, 0, this.edges.length);
      }

      copy.width = this.width;
      copy.height = this.height;
      return copy;
    };

    MeshAttachment.prototype.newLinkedMesh = function () {
      var copy = new MeshAttachment(this.name);
      copy.region = this.region;
      copy.path = this.path;
      copy.color.setFromColor(this.color);
      copy.deformAttachment = this.deformAttachment;
      copy.setParentMesh(this.parentMesh != null ? this.parentMesh : this);
      copy.updateUVs();
      return copy;
    };

    return MeshAttachment;
  }(spine.VertexAttachment);

  spine.MeshAttachment = MeshAttachment;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var PathAttachment = function (_super) {
    __extends(PathAttachment, _super);

    function PathAttachment(name) {
      var _this = _super.call(this, name) || this;

      _this.closed = false;
      _this.constantSpeed = false;
      _this.color = new spine.Color(1, 1, 1, 1);
      return _this;
    }

    PathAttachment.prototype.copy = function () {
      var copy = new PathAttachment(name);
      this.copyTo(copy);
      copy.lengths = new Array(this.lengths.length);
      spine.Utils.arrayCopy(this.lengths, 0, copy.lengths, 0, this.lengths.length);
      copy.closed = closed;
      copy.constantSpeed = this.constantSpeed;
      copy.color.setFromColor(this.color);
      return copy;
    };

    return PathAttachment;
  }(spine.VertexAttachment);

  spine.PathAttachment = PathAttachment;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var PointAttachment = function (_super) {
    __extends(PointAttachment, _super);

    function PointAttachment(name) {
      var _this = _super.call(this, name) || this;

      _this.color = new spine.Color(0.38, 0.94, 0, 1);
      return _this;
    }

    PointAttachment.prototype.computeWorldPosition = function (bone, point) {
      point.x = this.x * bone.a + this.y * bone.b + bone.worldX;
      point.y = this.x * bone.c + this.y * bone.d + bone.worldY;
      return point;
    };

    PointAttachment.prototype.computeWorldRotation = function (bone) {
      var cos = spine.MathUtils.cosDeg(this.rotation),
          sin = spine.MathUtils.sinDeg(this.rotation);
      var x = cos * bone.a + sin * bone.b;
      var y = cos * bone.c + sin * bone.d;
      return Math.atan2(y, x) * spine.MathUtils.radDeg;
    };

    PointAttachment.prototype.copy = function () {
      var copy = new PointAttachment(name);
      copy.x = this.x;
      copy.y = this.y;
      copy.rotation = this.rotation;
      copy.color.setFromColor(this.color);
      return copy;
    };

    return PointAttachment;
  }(spine.VertexAttachment);

  spine.PointAttachment = PointAttachment;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var RegionAttachment = function (_super) {
    __extends(RegionAttachment, _super);

    function RegionAttachment(name) {
      var _this = _super.call(this, name) || this;

      _this.x = 0;
      _this.y = 0;
      _this.scaleX = 1;
      _this.scaleY = 1;
      _this.rotation = 0;
      _this.width = 0;
      _this.height = 0;
      _this.color = new spine.Color(1, 1, 1, 1);
      _this.offset = spine.Utils.newFloatArray(8);
      _this.uvs = spine.Utils.newFloatArray(8);
      _this.tempColor = new spine.Color(1, 1, 1, 1);
      return _this;
    }

    RegionAttachment.prototype.updateOffset = function () {
      var regionScaleX = this.width / this.region.originalWidth * this.scaleX;
      var regionScaleY = this.height / this.region.originalHeight * this.scaleY;
      var localX = -this.width / 2 * this.scaleX + this.region.offsetX * regionScaleX;
      var localY = -this.height / 2 * this.scaleY + this.region.offsetY * regionScaleY;
      var localX2 = localX + this.region.width * regionScaleX;
      var localY2 = localY + this.region.height * regionScaleY;
      var radians = this.rotation * Math.PI / 180;
      var cos = Math.cos(radians);
      var sin = Math.sin(radians);
      var localXCos = localX * cos + this.x;
      var localXSin = localX * sin;
      var localYCos = localY * cos + this.y;
      var localYSin = localY * sin;
      var localX2Cos = localX2 * cos + this.x;
      var localX2Sin = localX2 * sin;
      var localY2Cos = localY2 * cos + this.y;
      var localY2Sin = localY2 * sin;
      var offset = this.offset;
      offset[RegionAttachment.OX1] = localXCos - localYSin;
      offset[RegionAttachment.OY1] = localYCos + localXSin;
      offset[RegionAttachment.OX2] = localXCos - localY2Sin;
      offset[RegionAttachment.OY2] = localY2Cos + localXSin;
      offset[RegionAttachment.OX3] = localX2Cos - localY2Sin;
      offset[RegionAttachment.OY3] = localY2Cos + localX2Sin;
      offset[RegionAttachment.OX4] = localX2Cos - localYSin;
      offset[RegionAttachment.OY4] = localYCos + localX2Sin;
    };

    RegionAttachment.prototype.setRegion = function (region) {
      this.region = region;
      var uvs = this.uvs;

      if (region.rotate) {
        uvs[2] = region.u;
        uvs[3] = region.v2;
        uvs[4] = region.u;
        uvs[5] = region.v;
        uvs[6] = region.u2;
        uvs[7] = region.v;
        uvs[0] = region.u2;
        uvs[1] = region.v2;
      } else {
        uvs[0] = region.u;
        uvs[1] = region.v2;
        uvs[2] = region.u;
        uvs[3] = region.v;
        uvs[4] = region.u2;
        uvs[5] = region.v;
        uvs[6] = region.u2;
        uvs[7] = region.v2;
      }
    };

    RegionAttachment.prototype.computeWorldVertices = function (bone, worldVertices, offset, stride) {
      var vertexOffset = this.offset;
      var x = bone.worldX,
          y = bone.worldY;
      var a = bone.a,
          b = bone.b,
          c = bone.c,
          d = bone.d;
      var offsetX = 0,
          offsetY = 0;
      offsetX = vertexOffset[RegionAttachment.OX1];
      offsetY = vertexOffset[RegionAttachment.OY1];
      worldVertices[offset] = offsetX * a + offsetY * b + x;
      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[RegionAttachment.OX2];
      offsetY = vertexOffset[RegionAttachment.OY2];
      worldVertices[offset] = offsetX * a + offsetY * b + x;
      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[RegionAttachment.OX3];
      offsetY = vertexOffset[RegionAttachment.OY3];
      worldVertices[offset] = offsetX * a + offsetY * b + x;
      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[RegionAttachment.OX4];
      offsetY = vertexOffset[RegionAttachment.OY4];
      worldVertices[offset] = offsetX * a + offsetY * b + x;
      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
    };

    RegionAttachment.prototype.copy = function () {
      var copy = new RegionAttachment(name);
      copy.region = this.region;
      copy.rendererObject = this.rendererObject;
      copy.path = this.path;
      copy.x = this.x;
      copy.y = this.y;
      copy.scaleX = this.scaleX;
      copy.scaleY = this.scaleY;
      copy.rotation = this.rotation;
      copy.width = this.width;
      copy.height = this.height;
      spine.Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, 8);
      spine.Utils.arrayCopy(this.offset, 0, copy.offset, 0, 8);
      copy.color.setFromColor(this.color);
      return copy;
    };

    RegionAttachment.OX1 = 0;
    RegionAttachment.OY1 = 1;
    RegionAttachment.OX2 = 2;
    RegionAttachment.OY2 = 3;
    RegionAttachment.OX3 = 4;
    RegionAttachment.OY3 = 5;
    RegionAttachment.OX4 = 6;
    RegionAttachment.OY4 = 7;
    RegionAttachment.X1 = 0;
    RegionAttachment.Y1 = 1;
    RegionAttachment.C1R = 2;
    RegionAttachment.C1G = 3;
    RegionAttachment.C1B = 4;
    RegionAttachment.C1A = 5;
    RegionAttachment.U1 = 6;
    RegionAttachment.V1 = 7;
    RegionAttachment.X2 = 8;
    RegionAttachment.Y2 = 9;
    RegionAttachment.C2R = 10;
    RegionAttachment.C2G = 11;
    RegionAttachment.C2B = 12;
    RegionAttachment.C2A = 13;
    RegionAttachment.U2 = 14;
    RegionAttachment.V2 = 15;
    RegionAttachment.X3 = 16;
    RegionAttachment.Y3 = 17;
    RegionAttachment.C3R = 18;
    RegionAttachment.C3G = 19;
    RegionAttachment.C3B = 20;
    RegionAttachment.C3A = 21;
    RegionAttachment.U3 = 22;
    RegionAttachment.V3 = 23;
    RegionAttachment.X4 = 24;
    RegionAttachment.Y4 = 25;
    RegionAttachment.C4R = 26;
    RegionAttachment.C4G = 27;
    RegionAttachment.C4B = 28;
    RegionAttachment.C4A = 29;
    RegionAttachment.U4 = 30;
    RegionAttachment.V4 = 31;
    return RegionAttachment;
  }(spine.Attachment);

  spine.RegionAttachment = RegionAttachment;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var JitterEffect = function () {
    function JitterEffect(jitterX, jitterY) {
      this.jitterX = 0;
      this.jitterY = 0;
      this.jitterX = jitterX;
      this.jitterY = jitterY;
    }

    JitterEffect.prototype.begin = function (skeleton) {};

    JitterEffect.prototype.transform = function (position, uv, light, dark) {
      position.x += spine.MathUtils.randomTriangular(-this.jitterX, this.jitterY);
      position.y += spine.MathUtils.randomTriangular(-this.jitterX, this.jitterY);
    };

    JitterEffect.prototype.end = function () {};

    return JitterEffect;
  }();

  spine.JitterEffect = JitterEffect;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var SwirlEffect = function () {
    function SwirlEffect(radius) {
      this.centerX = 0;
      this.centerY = 0;
      this.radius = 0;
      this.angle = 0;
      this.worldX = 0;
      this.worldY = 0;
      this.radius = radius;
    }

    SwirlEffect.prototype.begin = function (skeleton) {
      this.worldX = skeleton.x + this.centerX;
      this.worldY = skeleton.y + this.centerY;
    };

    SwirlEffect.prototype.transform = function (position, uv, light, dark) {
      var radAngle = this.angle * spine.MathUtils.degreesToRadians;
      var x = position.x - this.worldX;
      var y = position.y - this.worldY;
      var dist = Math.sqrt(x * x + y * y);

      if (dist < this.radius) {
        var theta = SwirlEffect.interpolation.apply(0, radAngle, (this.radius - dist) / this.radius);
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        position.x = cos * x - sin * y + this.worldX;
        position.y = sin * x + cos * y + this.worldY;
      }
    };

    SwirlEffect.prototype.end = function () {};

    SwirlEffect.interpolation = new spine.PowOut(2);
    return SwirlEffect;
  }();

  spine.SwirlEffect = SwirlEffect;
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var threejs;

  (function (threejs) {
    var AssetManager = function (_super) {
      __extends(AssetManager, _super);

      function AssetManager(pathPrefix) {
        if (pathPrefix === void 0) {
          pathPrefix = "";
        }

        return _super.call(this, function (image) {
          return new threejs.ThreeJsTexture(image);
        }, pathPrefix) || this;
      }

      return AssetManager;
    }(spine.AssetManager);

    threejs.AssetManager = AssetManager;
  })(threejs = spine.threejs || (spine.threejs = {}));
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var threejs;

  (function (threejs) {
    var MeshBatcher = function (_super) {
      __extends(MeshBatcher, _super);

      function MeshBatcher(maxVertices, materialCustomizer) {
        if (maxVertices === void 0) {
          maxVertices = 10920;
        }

        if (materialCustomizer === void 0) {
          materialCustomizer = function materialCustomizer(parameters) {};
        }

        var _this = _super.call(this) || this;

        _this.verticesLength = 0;
        _this.indicesLength = 0;
        if (maxVertices > 10920) throw new Error("Can't have more than 10920 triangles per batch: " + maxVertices);
        var vertices = _this.vertices = new Float32Array(maxVertices * MeshBatcher.VERTEX_SIZE);
        var indices = _this.indices = new Uint16Array(maxVertices * 3);
        var geo = new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["BufferGeometry"]();
        var vertexBuffer = _this.vertexBuffer = new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["InterleavedBuffer"](vertices, MeshBatcher.VERTEX_SIZE);
        vertexBuffer.usage = WebGLRenderingContext.DYNAMIC_DRAW;
        geo.setAttribute("position", new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["InterleavedBufferAttribute"](vertexBuffer, 3, 0, false));
        geo.setAttribute("color", new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["InterleavedBufferAttribute"](vertexBuffer, 4, 3, false));
        geo.setAttribute("uv", new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["InterleavedBufferAttribute"](vertexBuffer, 2, 7, false));
        geo.setIndex(new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["BufferAttribute"](indices, 1));
        geo.getIndex().usage = WebGLRenderingContext.DYNAMIC_DRAW;
        ;
        geo.drawRange.start = 0;
        geo.drawRange.count = 0;
        _this.geometry = geo;
        _this.material = new threejs.SkeletonMeshMaterial(materialCustomizer);
        return _this;
      }

      MeshBatcher.prototype.dispose = function () {
        this.geometry.dispose();
        if (this.material instanceof external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Material"]) this.material.dispose();else if (this.material) {
          for (var i = 0; i < this.material.length; i++) {
            var material = this.material[i];
            if (material instanceof external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Material"]) material.dispose();
          }
        }
      };

      MeshBatcher.prototype.clear = function () {
        var geo = this.geometry;
        geo.drawRange.start = 0;
        geo.drawRange.count = 0;
        this.material.uniforms.map.value = null;
      };

      MeshBatcher.prototype.begin = function () {
        this.verticesLength = 0;
        this.indicesLength = 0;
      };

      MeshBatcher.prototype.canBatch = function (verticesLength, indicesLength) {
        if (this.indicesLength + indicesLength >= this.indices.byteLength / 2) return false;
        if (this.verticesLength + verticesLength >= this.vertices.byteLength / 2) return false;
        return true;
      };

      MeshBatcher.prototype.batch = function (vertices, verticesLength, indices, indicesLength, z) {
        if (z === void 0) {
          z = 0;
        }

        var indexStart = this.verticesLength / MeshBatcher.VERTEX_SIZE;
        var vertexBuffer = this.vertices;
        var i = this.verticesLength;
        var j = 0;

        for (; j < verticesLength;) {
          vertexBuffer[i++] = vertices[j++];
          vertexBuffer[i++] = vertices[j++];
          vertexBuffer[i++] = z;
          vertexBuffer[i++] = vertices[j++];
          vertexBuffer[i++] = vertices[j++];
          vertexBuffer[i++] = vertices[j++];
          vertexBuffer[i++] = vertices[j++];
          vertexBuffer[i++] = vertices[j++];
          vertexBuffer[i++] = vertices[j++];
        }

        this.verticesLength = i;
        var indicesArray = this.indices;

        for (i = this.indicesLength, j = 0; j < indicesLength; i++, j++) {
          indicesArray[i] = indices[j] + indexStart;
        }

        this.indicesLength += indicesLength;
      };

      MeshBatcher.prototype.end = function () {
        this.vertexBuffer.needsUpdate = this.verticesLength > 0;
        this.vertexBuffer.updateRange.offset = 0;
        this.vertexBuffer.updateRange.count = this.verticesLength;
        var geo = this.geometry;
        geo.getIndex().needsUpdate = this.indicesLength > 0;
        geo.getIndex().updateRange.offset = 0;
        geo.getIndex().updateRange.count = this.indicesLength;
        geo.drawRange.start = 0;
        geo.drawRange.count = this.indicesLength;
      };

      MeshBatcher.VERTEX_SIZE = 9;
      return MeshBatcher;
    }(external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Mesh"]);

    threejs.MeshBatcher = MeshBatcher;
  })(threejs = spine.threejs || (spine.threejs = {}));
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var threejs;

  (function (threejs) {
    var SkeletonMeshMaterial = function (_super) {
      __extends(SkeletonMeshMaterial, _super);

      function SkeletonMeshMaterial(customizer) {
        var _this = this;

        var vertexShader = "\n\t\t\t\tattribute vec4 color;\n\t\t\t\tvarying vec2 vUv;\n\t\t\t\tvarying vec4 vColor;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tvColor = color;\n\t\t\t\t\tgl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);\n\t\t\t\t}\n\t\t\t";
        var fragmentShader = "\n\t\t\t\tuniform sampler2D map;\n\t\t\t\tvarying vec2 vUv;\n\t\t\t\tvarying vec4 vColor;\n\t\t\t\tvoid main(void) {\n\t\t\t\t\tgl_FragColor = texture2D(map, vUv)*vColor;\n\t\t\t\t}\n\t\t\t";
        var parameters = {
          uniforms: {
            map: {
              type: "t",
              value: null
            }
          },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          side: external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["DoubleSide"],
          transparent: true,
          alphaTest: 0.5
        };
        customizer(parameters);
        _this = _super.call(this, parameters) || this;
        return _this;
      }

      ;
      return SkeletonMeshMaterial;
    }(external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["ShaderMaterial"]);

    threejs.SkeletonMeshMaterial = SkeletonMeshMaterial;

    var SkeletonMesh = function (_super) {
      __extends(SkeletonMesh, _super);

      function SkeletonMesh(skeletonData, materialCustomizer) {
        if (materialCustomizer === void 0) {
          materialCustomizer = function materialCustomizer(parameters) {};
        }

        var _this = _super.call(this) || this;

        _this.tempPos = new spine.Vector2();
        _this.tempUv = new spine.Vector2();
        _this.tempLight = new spine.Color();
        _this.tempDark = new spine.Color();
        _this.zOffset = 0.1;
        _this.batches = new Array();
        _this.nextBatchIndex = 0;
        _this.clipper = new spine.SkeletonClipping();
        _this.vertices = spine.Utils.newFloatArray(1024);
        _this.tempColor = new spine.Color();
        _this.materialCustomizer = materialCustomizer;
        _this.skeleton = new spine.Skeleton(skeletonData);
        var animData = new spine.AnimationStateData(skeletonData);
        _this.state = new spine.AnimationState(animData);
        return _this;
      }

      SkeletonMesh.prototype.update = function (deltaTime) {
        var state = this.state;
        var skeleton = this.skeleton;
        state.update(deltaTime);
        state.apply(skeleton);
        skeleton.updateWorldTransform();
        this.updateGeometry();
      };

      SkeletonMesh.prototype.dispose = function () {
        for (var i = 0; i < this.batches.length; i++) {
          this.batches[i].dispose();
        }
      };

      SkeletonMesh.prototype.clearBatches = function () {
        for (var i = 0; i < this.batches.length; i++) {
          this.batches[i].clear();
          this.batches[i].visible = false;
        }

        this.nextBatchIndex = 0;
      };

      SkeletonMesh.prototype.nextBatch = function () {
        if (this.batches.length == this.nextBatchIndex) {
          var batch_1 = new threejs.MeshBatcher(10920, this.materialCustomizer);
          this.add(batch_1);
          this.batches.push(batch_1);
        }

        var batch = this.batches[this.nextBatchIndex++];
        batch.visible = true;
        return batch;
      };

      SkeletonMesh.prototype.updateGeometry = function () {
        this.clearBatches();
        var tempPos = this.tempPos;
        var tempUv = this.tempUv;
        var tempLight = this.tempLight;
        var tempDark = this.tempDark;
        var numVertices = 0;
        var verticesLength = 0;
        var indicesLength = 0;
        var blendMode = null;
        var clipper = this.clipper;
        var vertices = this.vertices;
        var triangles = null;
        var uvs = null;
        var drawOrder = this.skeleton.drawOrder;
        var batch = this.nextBatch();
        batch.begin();
        var z = 0;
        var zOffset = this.zOffset;

        for (var i = 0, n = drawOrder.length; i < n; i++) {
          var vertexSize = clipper.isClipping() ? 2 : SkeletonMesh.VERTEX_SIZE;
          var slot = drawOrder[i];
          if (!slot.bone.active) continue;
          var attachment = slot.getAttachment();
          var attachmentColor = null;
          var texture = null;
          var numFloats = 0;

          if (attachment instanceof spine.RegionAttachment) {
            var region = attachment;
            attachmentColor = region.color;
            vertices = this.vertices;
            numFloats = vertexSize * 4;
            region.computeWorldVertices(slot.bone, vertices, 0, vertexSize);
            triangles = SkeletonMesh.QUAD_TRIANGLES;
            uvs = region.uvs;
            texture = region.region.renderObject.texture;
          } else if (attachment instanceof spine.MeshAttachment) {
            var mesh = attachment;
            attachmentColor = mesh.color;
            vertices = this.vertices;
            numFloats = (mesh.worldVerticesLength >> 1) * vertexSize;

            if (numFloats > vertices.length) {
              vertices = this.vertices = spine.Utils.newFloatArray(numFloats);
            }

            mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, vertices, 0, vertexSize);
            triangles = mesh.triangles;
            uvs = mesh.uvs;
            texture = mesh.region.renderObject.texture;
          } else if (attachment instanceof spine.ClippingAttachment) {
            var clip = attachment;
            clipper.clipStart(slot, clip);
            continue;
          } else continue;

          if (texture != null) {
            var skeleton = slot.bone.skeleton;
            var skeletonColor = skeleton.color;
            var slotColor = slot.color;
            var alpha = skeletonColor.a * slotColor.a * attachmentColor.a;
            var color = this.tempColor;
            color.set(skeletonColor.r * slotColor.r * attachmentColor.r, skeletonColor.g * slotColor.g * attachmentColor.g, skeletonColor.b * slotColor.b * attachmentColor.b, alpha);
            var finalVertices = void 0;
            var finalVerticesLength = void 0;
            var finalIndices = void 0;
            var finalIndicesLength = void 0;

            if (clipper.isClipping()) {
              clipper.clipTriangles(vertices, numFloats, triangles, triangles.length, uvs, color, null, false);
              var clippedVertices = clipper.clippedVertices;
              var clippedTriangles = clipper.clippedTriangles;

              if (this.vertexEffect != null) {
                var vertexEffect = this.vertexEffect;
                var verts = clippedVertices;

                for (var v = 0, n_3 = clippedVertices.length; v < n_3; v += vertexSize) {
                  tempPos.x = verts[v];
                  tempPos.y = verts[v + 1];
                  tempLight.setFromColor(color);
                  tempDark.set(0, 0, 0, 0);
                  tempUv.x = verts[v + 6];
                  tempUv.y = verts[v + 7];
                  vertexEffect.transform(tempPos, tempUv, tempLight, tempDark);
                  verts[v] = tempPos.x;
                  verts[v + 1] = tempPos.y;
                  verts[v + 2] = tempLight.r;
                  verts[v + 3] = tempLight.g;
                  verts[v + 4] = tempLight.b;
                  verts[v + 5] = tempLight.a;
                  verts[v + 6] = tempUv.x;
                  verts[v + 7] = tempUv.y;
                }
              }

              finalVertices = clippedVertices;
              finalVerticesLength = clippedVertices.length;
              finalIndices = clippedTriangles;
              finalIndicesLength = clippedTriangles.length;
            } else {
              var verts = vertices;

              if (this.vertexEffect != null) {
                var vertexEffect = this.vertexEffect;

                for (var v = 0, u = 0, n_4 = numFloats; v < n_4; v += vertexSize, u += 2) {
                  tempPos.x = verts[v];
                  tempPos.y = verts[v + 1];
                  tempLight.setFromColor(color);
                  tempDark.set(0, 0, 0, 0);
                  tempUv.x = uvs[u];
                  tempUv.y = uvs[u + 1];
                  vertexEffect.transform(tempPos, tempUv, tempLight, tempDark);
                  verts[v] = tempPos.x;
                  verts[v + 1] = tempPos.y;
                  verts[v + 2] = tempLight.r;
                  verts[v + 3] = tempLight.g;
                  verts[v + 4] = tempLight.b;
                  verts[v + 5] = tempLight.a;
                  verts[v + 6] = tempUv.x;
                  verts[v + 7] = tempUv.y;
                }
              } else {
                for (var v = 2, u = 0, n_5 = numFloats; v < n_5; v += vertexSize, u += 2) {
                  verts[v] = color.r;
                  verts[v + 1] = color.g;
                  verts[v + 2] = color.b;
                  verts[v + 3] = color.a;
                  verts[v + 4] = uvs[u];
                  verts[v + 5] = uvs[u + 1];
                }
              }

              finalVertices = vertices;
              finalVerticesLength = numFloats;
              finalIndices = triangles;
              finalIndicesLength = triangles.length;
            }

            if (finalVerticesLength == 0 || finalIndicesLength == 0) continue;

            if (!batch.canBatch(finalVerticesLength, finalIndicesLength)) {
              batch.end();
              batch = this.nextBatch();
              batch.begin();
            }

            var batchMaterial = batch.material;

            if (batchMaterial.uniforms.map.value == null) {
              batchMaterial.uniforms.map.value = texture.texture;
            }

            if (batchMaterial.uniforms.map.value != texture.texture) {
              batch.end();
              batch = this.nextBatch();
              batch.begin();
              batchMaterial = batch.material;
              batchMaterial.uniforms.map.value = texture.texture;
            }

            batchMaterial.needsUpdate = true;
            batch.batch(finalVertices, finalVerticesLength, finalIndices, finalIndicesLength, z);
            z += zOffset;
          }

          clipper.clipEndWithSlot(slot);
        }

        clipper.clipEnd();
        batch.end();
      };

      SkeletonMesh.QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
      SkeletonMesh.VERTEX_SIZE = 2 + 2 + 4;
      return SkeletonMesh;
    }(external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Object3D"]);

    threejs.SkeletonMesh = SkeletonMesh;
  })(threejs = spine.threejs || (spine.threejs = {}));
})(spine_threejs_spine || (spine_threejs_spine = {}));

var spine_threejs_spine;

(function (spine) {
  var threejs;

  (function (threejs) {
    var ThreeJsTexture = function (_super) {
      __extends(ThreeJsTexture, _super);

      function ThreeJsTexture(image) {
        var _this = _super.call(this, image) || this;

        _this.texture = new external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["Texture"](image);
        _this.texture.flipY = false;
        _this.texture.needsUpdate = true;
        return _this;
      }

      ThreeJsTexture.prototype.setFilters = function (minFilter, magFilter) {
        this.texture.minFilter = ThreeJsTexture.toThreeJsTextureFilter(minFilter);
        this.texture.magFilter = ThreeJsTexture.toThreeJsTextureFilter(magFilter);
      };

      ThreeJsTexture.prototype.setWraps = function (uWrap, vWrap) {
        this.texture.wrapS = ThreeJsTexture.toThreeJsTextureWrap(uWrap);
        this.texture.wrapT = ThreeJsTexture.toThreeJsTextureWrap(vWrap);
      };

      ThreeJsTexture.prototype.dispose = function () {
        this.texture.dispose();
      };

      ThreeJsTexture.toThreeJsTextureFilter = function (filter) {
        if (filter === spine.TextureFilter.Linear) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["LinearFilter"];else if (filter === spine.TextureFilter.MipMap) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["LinearMipMapLinearFilter"];else if (filter === spine.TextureFilter.MipMapLinearNearest) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["LinearMipMapNearestFilter"];else if (filter === spine.TextureFilter.MipMapNearestLinear) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["NearestMipMapLinearFilter"];else if (filter === spine.TextureFilter.MipMapNearestNearest) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["NearestMipMapNearestFilter"];else if (filter === spine.TextureFilter.Nearest) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["NearestFilter"];else throw new Error("Unknown texture filter: " + filter);
      };

      ThreeJsTexture.toThreeJsTextureWrap = function (wrap) {
        if (wrap === spine.TextureWrap.ClampToEdge) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["ClampToEdgeWrapping"];else if (wrap === spine.TextureWrap.MirroredRepeat) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["MirroredRepeatWrapping"];else if (wrap === spine.TextureWrap.Repeat) return external_commonjs_three_commonjs2_three_amd_THREE_umd_THREE_["RepeatWrapping"];else throw new Error("Unknown texture wrap: " + wrap);
      };

      return ThreeJsTexture;
    }(spine.Texture);

    threejs.ThreeJsTexture = ThreeJsTexture;
  })(threejs = spine.threejs || (spine.threejs = {}));
})(spine_threejs_spine || (spine_threejs_spine = {}));

/* harmony default export */ var spine_threejs = (spine_threejs_spine);
// CONCATENATED MODULE: ./src/VglSpine.js



var VglSpine_spine = spine_threejs;
/**
 * A component of vue-gl for Spine,
 *
 * Properties of [VglObject3d](vue-gl/src/core/vgl-object3d.js) are also available as mixin.
 */

/* harmony default export */ var VglSpine = ({
  name: "VglSpine",
  mixins: [vgl_object3d],
  props: {
    materialCustomizer: {
      type: Function,
      default: function _default(parameters) {
        parameters.depthTest = false;
      }
    },
    skel: {
      type: Object,
      required: true
    },
    skelScale: {
      type: Number,
      default: 1
    },
    atlas: {
      type: String,
      required: true
    },
    texture: {
      required: true
    },
    animationTrack: {
      type: Number,
      default: 0
    },
    animation: {
      type: String,
      required: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    skin: {
      type: String,
      default: "default"
    }
  },
  data: function data() {
    return {
      tick: Date.now() / 1000,
      destroyed: false
    };
  },
  computed: {
    inst: function inst() {
      /** The spine.threejs.skeletonMesh instance. */
      return new VglSpine_spine.threejs.SkeletonMesh(this.getSpineData(this.skel, this.atlas, this.texture), this.materialCustomizer);
    }
  },
  watch: {
    inst: function inst(_inst, oldInst) {
      if (_inst != oldInst) {
        this.setSkin();
        this.setAnimation();
      }
    }
  },
  methods: {
    getSpineData: function getSpineData(skel, atlas, texture) {
      var atlasObj = new VglSpine_spine.TextureAtlas(atlas, function (filename) {
        if (typeof texture === "function") {
          return new VglSpine_spine.threejs.ThreeJsTexture(texture(filename));
        }

        return new VglSpine_spine.threejs.ThreeJsTexture(texture);
      });
      var SkeletonJson = new VglSpine_spine.SkeletonJson(new VglSpine_spine.AtlasAttachmentLoader(atlasObj));
      SkeletonJson.scale = this.skelScale;
      return SkeletonJson.readSkeletonData(skel);
    },
    update: function update() {
      if (this.destroyed) return; // calculate delta time for animation purposes

      var now = Date.now() / 1000;
      var delta = now - this.tick;
      this.tick = now; // update the animation

      this.inst.update(delta); // render the scene

      this.vglObject3d.emit();
      requestAnimationFrame(this._update);
    },
    setAnimation: function setAnimation() {
      this.inst.state.setAnimation(this.animationTrack, this.animation, this.loop);
    },
    setSkin: function setSkin() {
      this.inst.skeleton.setSkinByName(this.skin);
    }
  },
  mounted: function mounted() {
    this.destroyed = false;

    if (this.inst) {
      this.setSkin();
      this.setAnimation();
      this.$watch("skin", this.setSkin);
      this.$watch("loop", this.setAnimation);
      this.$watch("animation", this.setAnimation);
      this.$watch("animationTrack", this.setAnimation);
      this._update = this.update.bind(this);
      requestAnimationFrame(this._update);
    }
  },
  unmounted: function unmounted() {
    this.destroyed = true;
    cancelAnimationFrame(this._update);
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VglSpine);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});