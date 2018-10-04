(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.groupLog = groupLog;
function log(testEnv, message) {
  var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var type = arguments[3];

  if (testEnv === false) {
    return null;
  }

  switch (type) {
    case 'info':
      console.log('[react-walkme] ' + message, obj);
      break;
    case 'warn':
      console.warn('[react-walkme] ' + message, obj);
      break;
    default:
      console.log('[react-walkme] ' + message, obj);
  }
}

function groupLog(testEnv, groupMessage, groupArray) {
  if (testEnv === false) {
    return null;
  }

  console.group('[react-walkme] ' + groupMessage);

  groupArray.forEach(function (el) {
    console.log(el.message + ' ', el.obj);
  });

  console.groupEnd();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ERROR_CODES = {
  WINDOW: 1,
  WALK_ME: 2,
  WALK_ME_ID: 3,
  ENVIRONMENT: 4,
  UNKNOWN: -1
};

exports.default = ERROR_CODES;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;
exports.walkme = walkme;
exports.getWalkMeAPI = getWalkMeAPI;

var _loadScript = __webpack_require__(3);

var _loadScript2 = _interopRequireDefault(_loadScript);

var _errorBuilder = __webpack_require__(4);

var _errorBuilder2 = _interopRequireDefault(_errorBuilder);

var _errorCodes = __webpack_require__(1);

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _logger = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React WalkMe Module
 *
 * @package react-walkme
 * @author NRCCUA
 */

var _walkMeID = '';
var _testEnv = null;
var _debug = false;

/**
 * errorValidation:
 * Validates if all conditions are met
 * 
 * @param {boolean} isInitializing
 * @returns {integer} errorCode
 */
function _errorValidation() {
  var isInitializing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var logArray = [{
    message: 'Instance - WalkMe ID :',
    obj: _walkMeID
  }, {
    message: 'Instance - Test Environment:',
    obj: _testEnv
  }];

  (0, _logger.groupLog)(_debug, 'Error validation data', logArray);

  if (typeof _walkMeID === 'undefined' || _walkMeID === '') {
    (0, _logger.log)(_debug, '[_errorValidation] Failed >> WalkMe ID variable not available', null, 'warn');
    return _errorCodes2.default.WALK_ME_ID;
  }

  if (typeof _testEnv === 'undefined' || _testEnv === null) {
    (0, _logger.log)(_debug, '[_errorValidation] Failed >> testEnv variable not available', null, 'warn');
    return _errorCodes2.default.ENVIRONMENT;
  }

  if (typeof window === 'undefined') {
    (0, _logger.log)(_debug, '[_errorValidation] Failed >> window is undefined', null, 'warn');
    return _errorCodes2.default.WINDOW;
  }

  if (isInitializing === false && !window._walkMe) {
    (0, _logger.log)(_debug, '[_errorValidation] Failed >> _walkMe is not available.', null, 'warn');
    return _errorCodes2.default.WALK_ME;
  }

  (0, _logger.log)(_debug, '[_errorValidation] Success >> Validations passed!');
  // TODO: do something with unknown error type
  return _errorCodes2.default.UNKNOWN;
}

/**
 * initialize:
 * Creates new instance of WalkMe.
 * 
 * @param {string} walkMeID
 * @param {boolean} testEnv
 * @param {boolean} debug
 * @param {function} callback
 * @returns {object}
 */
function initialize(walkMeID, testEnv, debug) {
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var logArray = [{
    message: 'Parameter - WalkMe ID:',
    obj: walkMeID
  }, {
    message: 'Parameter - Test Env:',
    obj: testEnv
  }];

  (0, _logger.groupLog)(debug, 'WalkMe Initialization data', logArray);

  _walkMeID = walkMeID;
  _testEnv = testEnv;
  _debug = debug;

  var errorCode = _errorValidation(true);

  if (errorCode !== _errorCodes2.default.UNKNOWN) {
    return { error: _errorBuilder2.default.getErrorMessage(errorCode) };
  }

  return (0, _loadScript2.default)(walkMeID, testEnv, callback);
}

/**
 * walkme:
 * Gets WalkMe instance from window
 * 
 * @returns {object} walkme instance
 */
function walkme() {
  var errorCode = _errorValidation();

  if (errorCode !== _errorCodes2.default.UNKNOWN) {
    return { error: _errorBuilder2.default.getErrorMessage(errorCode) };
  }

  return window._walkMe;
}

/**
 * get WalkMeAPI:
 * Gets WalkMeAPI instance from window
 * @returns {object} 
 */
function getWalkMeAPI() {
  var errorCode = _errorValidation();

  if (errorCode !== _errorCodes2.default.UNKNOWN) {
    return { error: _errorBuilder2.default.getErrorMessage(errorCode) };
  }

  return window.WalkMeAPI;
}

exports.default = {
  initialize: initialize,
  walkme: walkme,
  getWalkMeAPI: getWalkMeAPI
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (walkMeID, testEnv, mainCallback) {
  var TEST_ENV = testEnv ? 'test/' : '';
  var scriptPath = 'https://cdn.walkme.com/users/' + walkMeID + '/' + TEST_ENV + 'walkme_' + walkMeID + '_https.js';

  loadScript(scriptPath, function () {
    (0, _logger.log)(testEnv, 'WalkMe loaded on ' + window._walkMe.getBrowser());

    if (mainCallback) {
      mainCallback();
    }
    return window._walkMe;
  });
};

var _logger = __webpack_require__(0);

function loadScript(url, loadedScript) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        loadedScript();
      }
    };
  } else {
    //Others
    var callbackTimer = setInterval(function () {
      var call = false;
      try {
        call = window._walkMe.getBrowser();
      } catch (e) {}

      if (call) {
        clearInterval(callbackTimer);
        loadedScript();
      }
    }, 100);
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorMessage = getErrorMessage;

var _errorCodes = __webpack_require__(1);

var _errorCodes2 = _interopRequireDefault(_errorCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Error messages
var WINDOW_MESSAGE = '`window` not available';
var WALK_ME_MESSAGE = 'WalkMe not loaded';
var WALK_ME_ID_MESSAGE = 'WalkMe ID not available';
var ENVIRONMENT_MESSAGE = 'Test env not defined';
var UNKNOWN_MESSAGE = 'Unmapped error';

function getErrorMessage(errorCode) {
  switch (errorCode) {
    case _errorCodes2.default.WINDOW:
      return WINDOW_MESSAGE;
    case _errorCodes2.default.WALK_ME:
      return WALK_ME_MESSAGE;
    case _errorCodes2.default.WALK_ME_ID:
      return WALK_ME_ID_MESSAGE;
    case _errorCodes2.default.ENVIRONMENT:
      return ENVIRONMENT_MESSAGE;
    default:
      return UNKNOWN_MESSAGE;
  }
}

exports.default = {
  getErrorMessage: getErrorMessage
};

/***/ })
/******/ ]);
});