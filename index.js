module.exports = function circular(options) {
  options = options || {};
  options.ref = options.ref || '[Circular]';
  var seen = [];
  return function (key, val) {
    if(!val || typeof (val) !== 'object') {
      return val;
    }
    if(~seen.indexOf(val)) {
      return options.ref;
    }
    seen.push(val);
    return val;
  };
}
