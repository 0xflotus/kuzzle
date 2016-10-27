var
  BaseType = require('../../../../lib/api/core/validation/baseType'),
  should = require('should');

describe('Test: validation/baseType', () => {
  var baseType;

  beforeEach(() => {
    baseType = new BaseType();
  });

  it('should define the 4 base functions', () => {

    should(typeof baseType.validate).be.eql('function');
    should(typeof baseType.validateFieldSpecification).be.eql('function');
    should(typeof baseType.checkAllowedProperties).be.eql('function');
    should(typeof baseType.getStrictness).be.eql('function');
  });

  it('should define function validate to return always true', () => {
    should(baseType.validate()).be.true();
  });

  it('should define function validateFieldSpecification to return always true', () => {
    should(baseType.validateFieldSpecification()).be.true();
  });

  it('should define function getStrictness to return parent\'s strictness', () => {
    should(baseType.getStrictness({}, true)).be.true();
  });

  it('should define function getStrictness to return parent\'s strictness', () => {
    should(baseType.getStrictness({}, false)).be.false();
  });

  describe('#checkAllowedProperties', () => {
    var
      genericMock = {
        foo: 'bar'
      };

    it('should be true with proper arguments', () => {
      should(baseType.checkAllowedProperties(genericMock, ['foo', 'mod'])).be.true();
    });

    it('should be false if the first argument is not an object', () => {
      should(baseType.checkAllowedProperties('notAnObject', ['foo'])).be.false();
    });

    it('should be false if one of the property is not allowed', () => {
      should(baseType.checkAllowedProperties({foo:'bar', baz: 'bar'}, ['foo'])).be.false();
    });
  });
});
