import ERROR_CODES from './errorCodes';

// Error messages
const WINDOW_MESSAGE = '`window` not available';
const WALK_ME_MESSAGE = 'WalkMe not loaded';
const WALK_ME_ID_MESSAGE = 'WalkMe ID not available';
const ENVIRONMENT_MESSAGE = 'Test env not defined';
const UNKNOWN_MESSAGE = 'Unmapped error';

export function getErrorMessage(errorCode) {
  switch(errorCode) {
    case ERROR_CODES.WINDOW:
      return WINDOW_MESSAGE;
    case ERROR_CODES.WALK_ME:
      return WALK_ME_MESSAGE;
    case ERROR_CODES.WALK_ME_ID:
      return WALK_ME_ID_MESSAGE;
    case ERROR_CODES.ENVIRONMENT:
      return ENVIRONMENT_MESSAGE;
    default:
      return UNKNOWN_MESSAGE;
  }
}

export default {
  getErrorMessage,
};
