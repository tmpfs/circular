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

  it('should stringify circular reference (ref function)', function(done) {
    function ref(value) {
      return value.toString();
    }
    var a = {undef: undefined, toString: function(){return '#a'}};
    var b = {a: a}
    a.b = b;
    var str = JSON.stringify(a, circular(ref));
    var obj = JSON.parse(str);
    expect(obj.b.a).to.eql('#a');
    done();
  });

  it('should stringify reference to function', function(done) {
    function ref(value) {
      return value.toString();
    }
    var a = {undef: undefined, toString: function(){return '#a'}};
    var b = {a: a, foo: function bar(){}}
    a.b = b;
    var str = JSON.stringify(a, circular(ref, true));
    var obj = JSON.parse(str);
    expect(obj.b.a).to.eql('#a');
    expect(obj.b.foo).to.be.a('string');
    expect(obj.b.foo).to.eql('function bar(){}');
    done();
  });

  it('should stringify helper', function(done) {
    var a = {undef: undefined};
    var b = {a: a}
    a.b = b;
    var str = circular.stringify(a);
    var obj = JSON.parse(str);
    expect(obj.b.a).to.eql('[Circular]');
    done();
  });

})
