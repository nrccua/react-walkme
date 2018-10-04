/**
 * React WalkMe Module
 *
 * @package react-walkme
 * @author NRCCUA
 */

import loadScript from './utils/loadScript';
import errorBuilder from './utils/errorBuilder';
import ERROR_CODES from './utils/errorCodes';
import { log, groupLog } from './utils/logger/logger';

let _walkMeID = '';
let _testEnv = null;
let _debug = false;

/**
 * errorValidation:
 * Validates if all conditions are met
 * 
 * @param {boolean} isInitializing
 * @returns {integer} errorCode
 */
function _errorValidation(isInitializing = false) {
  const logArray = [
    {
      message: 'Instance - WalkMe ID :',
      obj: _walkMeID,
    },
    {
      message: 'Instance - Test Environment:',
      obj: _testEnv,
    },
  ];

  groupLog(_debug, 'Error validation data', logArray);

  if (typeof _walkMeID === 'undefined' || _walkMeID === '') {
    log(_debug, '[_errorValidation] Failed >> WalkMe ID variable not available', null, 'warn');
    return ERROR_CODES.WALK_ME_ID;
  }

  if (typeof _testEnv === 'undefined' || _testEnv === null) {
    log(_debug, '[_errorValidation] Failed >> testEnv variable not available', null, 'warn');
    return ERROR_CODES.ENVIRONMENT;
  }

  if (typeof window === 'undefined') {
    log(_debug, '[_errorValidation] Failed >> window is undefined', null, 'warn');
    return ERROR_CODES.WINDOW;
  }

  if (isInitializing === false && !window._walkMe) {
    log(_debug, '[_errorValidation] Failed >> _walkMe is not available.', null, 'warn');
    return ERROR_CODES.WALK_ME;
  }

  log(_debug, '[_errorValidation] Success >> Validations passed!');
  // TODO: do something with unknown error type
  return ERROR_CODES.UNKNOWN;
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
export function initialize(walkMeID, testEnv, debug, callback = null) {
  const logArray = [
    {
      message: 'Parameter - WalkMe ID:',
      obj: walkMeID,
    },
    {
      message: 'Parameter - Test Env:',
      obj: testEnv,
    },
  ];

  groupLog(debug, 'WalkMe Initialization data', logArray);

  _walkMeID = walkMeID;
  _testEnv = testEnv;
  _debug = debug;

  const errorCode = _errorValidation(true);

  if (errorCode !== ERROR_CODES.UNKNOWN) {
    return { error: errorBuilder.getErrorMessage(errorCode) };
  }

  return loadScript(walkMeID, testEnv, callback);
}

/**
 * walkme:
 * Gets WalkMe instance from window
 * 
 * @returns {object} walkme instance
 */
export function walkme() {
  const errorCode = _errorValidation();

  if (errorCode !== ERROR_CODES.UNKNOWN) {
    return { error: errorBuilder.getErrorMessage(errorCode) };
  }

  return window._walkMe;
}

/**
 * get WalkMeAPI:
 * Gets WalkMeAPI instance from window
 * @returns {object} 
 */
export function getWalkMeAPI() {
  const errorCode = _errorValidation();

  if (errorCode !== ERROR_CODES.UNKNOWN) {
    return { error: errorBuilder.getErrorMessage(errorCode) };
  }

  return window.WalkMeAPI;
}

export default {
  initialize,
  walkme,
  getWalkMeAPI,
};