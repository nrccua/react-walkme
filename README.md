# React [WalkMe](http://www.walkme.com/) Module &middot; react-walkme

React WalkMe is a library that simplifies the process in helping your developers.

## Instalation

```bash
// TODO
```

## Usage

The WalkMe asks you to add manually the snippet code, that looks something like this:

```js
<script type="text/javascript">
  (function() {
      var walkme = document.createElement('script');
      walkme.type = 'text/javascript';
      walkme.async = true;
      walkme.src = 'https://cdn.walkme.com/users/01010101010101010101010101010101/test/walkme_01010101010101010101010101010101_https.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(walkme, s);
      window._walkmeConfig = {smartLoad:true};
    }
  )();
</script>
```
### WALKME_ID
The `01010101010101010101010101010101` is your WALKME_ID that you can copy that and keep it somewhere safe. (not in your code!)

### WALKME_TEST
`WALKME_TEST` is used to determine if you will look at.
Logs will also be enabled when this is true.

### walkMeCallback
The `walkMeCallback` will be called when the script is finished loading.

```js
const walkMeCallback = () => {
  // Will only be called when script is loaded
};
```

### Initialize WalkMe
This should only be done once, so make sure you don't put it somewhere that creates multiple instances.

```js
  import ReactWalkMe from 'react-walkme';

  ReactWalkMe.initialize(WALKME_ID, WALKME_TEST, [walkMeCallback]);
```

|Value|Notes|
|------|-----|
|WALKME_ID| `String`. Required. WalkMe Tracking ID.|
|WALKME_TEST| `String`. Required. WalkMe Environment to run [Test/Production].|
|walkMeCallback| `Function`. Optional. Function to call when WalkMe is instantiated.|

## Usage

You should put a call to your API on route change. I use the `ReactWalkMe.getWalkMeAPI();` that seems to wake WalkMe and make it available to the page.

##### Example

If you are using [`react-router-redux`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) you can attach it to your history listen function:

```jsx
history.listen(() => {
  ReactWalkMe.getWalkMeAPI();
});

function init() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        /* code */
      </ConnectedRouter>
    </Provider>,
  );
}
```


## API

#### ReactWalkMe.initialize(WALKME_ID, WALKME_TEST, [walkMeCallback]);

#### ReactWalkMe.walkme();

#### ReactWalkMe.getWalkMeAPI();

```bash
More to come
```



