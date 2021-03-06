// Import chai.
let chai = require('chai'),
  path = require('path');
 let jsdom = require('jsdom');

global.document = jsdom.jsdom('<body></body>');
global.window = document.defaultView;


// Tell chai that we'll be using the "should" style assertions.

chai.should();

// Import the Rectangle class.
let Board = require(path.join(__dirname, '../lib/', 'Board'));

describe('Board tests > ', () => {
  describe('validation tests', () => {
    let board;

    beforeEach(() => {
      // Create a new Board object before every test.
      board = new Board(5);
    });

    it('instance of Board should only accept size equal to 5', () => {
      let anotherBoard = new Board(6);
      chai.assert.equal(anotherBoard.size, 5, 'board.size is equal to 5');

    });

    it('returns a boolean', () => {
      chai.expect(board.validatePosition()).to.be.a('boolean');
    });

    it('Calling validatePosition(5,5) should return false', () => {
      chai.expect(board.validatePosition(5,5)).to.be.false;
    });

    it('Calling validatePosition(0,0) should return true', () => {
      chai.expect(board.validatePosition(0,0)).to.be.true;
    });

    });
  });
