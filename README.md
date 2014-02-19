# Circular

Tiny utility to safely stringify objects with circular references.

## Usage

Replace all circular references with the string `[Circular]`;

```javascript
var circular = require('circular');
var obj = {}; var child = {parent: obj}; obj.child = child;
var str = JSON.stringify(obj, circular());
// => {"child":{"parent":"[Circular]"}}
```

If you prefer you can pass an alternative string to use:

```javascript
var circular = require('circular');
var str = JSON.stringify(obj, circular('#ref'));
```

Or a function that returns a string:

```javascript
var circular = require('circular');
function ref(value){return '' + value};
var str = JSON.stringify(obj, circular(ref));
```

## License

Everything is [MIT](http://en.wikipedia.org/wiki/MIT_License). Read the [license](/LICENSE) if you feel inclined.
