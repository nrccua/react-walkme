export function log(testEnv, message, obj = '', type) {
  if (testEnv === false) {
    return null;
  }

  switch (type) {
    case 'info':
      console.log(`[react-walkme] ${message}`, obj);
      break;
    case 'warn':
      console.warn(`[react-walkme] ${message}`, obj);
      break;
    default:
      console.log(`[react-walkme] ${message}`, obj);
  }
}

export function groupLog(testEnv, groupMessage, groupArray) {
  if (testEnv === false) {
    return null;
  }

  console.group(`[react-walkme] ${groupMessage}`)

  groupArray.forEach(el => {
    console.log(`${el.message} `, el.obj)
  });

  console.groupEnd();
}
