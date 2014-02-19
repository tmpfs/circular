module.exports = function circular(ref) {
  ref = ref || '[Circular]';
  var seen = [];
  return function (key, val) {
    if(!val || typeof (val) !== 'object') {
      return val;
    }
    if(~seen.indexOf(val)) {
      if(typeof ref === 'function') return ref(val);
      return ref;
    }
    seen.push(val);
    return val;
  };
}
