import { log } from './logger/logger';

function loadScript(url, loadedScript) {
  const script = document.createElement('script')
  script.type = 'text/javascript';
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);

  if (script.readyState) {
    script.onreadystatechange = () => {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        loadedScript();
      }
    };
  } else {  //Others
    const callbackTimer = setInterval(function () {
      let call = false;
      try {
        call = window._walkMe.getBrowser();
      } catch (e) { }

      if (call) {
        clearInterval(callbackTimer);
        loadedScript();
      }
    }, 100);
  }
}


export default function (walkMeID, testEnv, mainCallback) {
  const TEST_ENV = testEnv ? 'test/' : '';
  const scriptPath = `https://cdn.walkme.com/users/${walkMeID}/${TEST_ENV}walkme_${walkMeID}_https.js`;

  loadScript(scriptPath, () => {
    log(testEnv, `WalkMe loaded on ${window._walkMe.getBrowser()}`);

    if (mainCallback) {
      mainCallback();
    }
    return window._walkMe;
  });
}
