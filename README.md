# Circular

Tiny utility to safely stringify objects with circular references.

## Usage

Replace all circular references with the string `[Circular]`;

```javascript
var circular = require('circular');
var a = {}; var b = {a: a}; a.b = b;
var str = JSON.stringify(a, circular());
// => {"b":{"a":"[Circular]"}}
```

## License

Everything is [MIT](http://en.wikipedia.org/wiki/MIT_License). Read the [license](/LICENSE) if you feel inclined.
