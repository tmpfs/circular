var expect = require('chai').expect;
var circular = require('../..');

describe('circular:', function() {
  it('should stringify circular reference', function(done) {
    var a = {undef: undefined};
    var b = {a: a}
    a.b = b;
    var str = JSON.stringify(a, circular());
    var obj = JSON.parse(str);
    expect(obj.b.a).to.eql('[Circular]');
    done();
  });
})
