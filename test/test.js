var expect = chai.expect;
var should = chai.should();


  // beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };




// examples of test (hardcoded)
describe('Compare Numbers', function() {

  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });

  it('2 should be greater than 1', function() {
    expect(2).to.be.greaterThan(1);
  });

  it('fooo should be a string', function() {
    expect(fooo).to.be.a('string');
  });

  it('isEven should return a boolean', function() {
    expect(isEven(2)).to.be.a('boolean');
  });

});

// umbrella of test:
// describe('Is even tests', function(){
//   it('Should always return a boolean', function() {
//     // expect(isEven(2)).to.be.a('boolean');
//     expect(foo).to.be.a('string');
//     // expect(foo).to.equal('bar');
//     // expect(foo).to.have.lengthOf(3);
//     // expect(beverages).to.have.property('tea').with.lengthOf(3);
//
//
//   });
//
//
//
//
//
// });
