# react-pure-render-debug

A diagnostic tool for PureRenderMixin optimization. This behaves the same
as [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html),
but reports _why_ a component re-renders:

    pure-render-debug(State): value differs

## install

    npm install --save-dev react-pure-render-debug

## usage

```js
var PureRenderDebug = require('react-pure-render-debug');

// ... in your component:
mixins: [PureRenderDebug]
```
