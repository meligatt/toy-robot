// Import chai.
let chai = require('chai'),
path = require('path');
let jsdom = require('jsdom');

global.document = jsdom.jsdom('<body><div>1</div></body>');
global.window = document.defaultView;

chai.should();

let Robot = require(path.join(__dirname, '../lib/', 'Robot'));
let Board = require(path.join(__dirname, '../lib/', 'Board'));

describe('Robot tests > ', () => {
  describe('validation tests', () => {
    let robot;
    let myBoard;

    beforeEach(() => {
      // Create a new Robot object before every test.
      myBoard = new Board(5);
      robot = new Robot("BB8", 0, 0, "NORTH", myBoard);

    });

    // it('Robot constructor arguments are not null', () => {
    //   chai.assert.isNotNull(robot.name, "name is not null");
    // });
    it('should start with 1', function () {
      //  chai.expect($('div').text()).equal('1');
       chai.expect(global.document.querySelect(`div`).textContent).equal('1');

   });


  });
});
