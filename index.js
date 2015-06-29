var deepEqual = require('deep-equal');

function shallowEqual(objA, objB, type) {
  if (objA === objB) { return true; }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    console.warn('pure-render-debug(' + type + '): next' + type + ' keys ' + keysA +
        'vs prev' + type + ' keys ' + keysB);
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      if (deepEqual(objA[i], objB[i])) {
          console.warn('pure-render-debug(' + type + '): ' + keysA[i] + ' differs. Objects are deep-equal but not same instance.');
      } else {
          console.warn('pure-render-debug(' + type + '): ' + keysA[i] + ' differs');
      }
      return false;
    }
  }

  return true;
}

module.exports = {
    shouldComponentUpdate: function(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps, 'Props') ||
            !shallowEqual(this.state, nextState, 'State');
    }
};
