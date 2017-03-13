/* Class Robot */
class Robot {
  constructor (name, x, y, f, board){
    this.name = name;
    this.x = x;
    this.y = y;
    this.facing = f;
    this.placed= false;
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    this.board = board;
    this.FIRST_INDEX = 0;
    this.LAST_INDEX = this.directions.length - 1;
    this.init("hello", this.x, this.y, this.facing);
    return this;
  }

  init (greeting, x, y, f){
    this.place(x,y,f);
    console.log(`[${greeting}], a droid called [${this.name}] has been created and placed at [${x}, ${y}] facing [${f}]!`);
  }

  place (x, y, f){
    if ( this.board.validatePosition(this.x, this.y) && this._validateDirection(this.facing) ) {

      // last x,y, facing
      this.lastX = this.x;
      this.lastY = this.y;
      this.lastFacing = this.facing;

      // new x, y , facing
      this.x = x;
      this.y = y;
      this.facing = f;

      this._cleanDOMPosition(true);
      this.render();
      return (this.placed = true);

    } else {
      return (this.placed = false);
    }
  }

  move() {
    if (this.placed) {
      this._cleanDOMPosition(false);
      if ( this.board.validatePosition(this.x, this.y) && this._validateDirection(this.facing) ) {
        switch (this.facing) {
          case 'NORTH':
          if (!(this.y === 4)) {
            this.y += 1;
          }
          break;
          case 'SOUTH':
          if (!(this.y === 0)) {
            this.y -= 1;
          }
          break;
          case 'WEST':
          if (!(this.x === 0)) {
            this.x -= 1;
          }
          break;
          case 'EAST':
          if (!(this.x === 4)) {
            this.x += 1;
          }
          break;
          default:
          return false;
        }
          this.render();
        } else {
          console.log(`position: [${this.x},${this.y + 1}] and facing: [${this.facing}] is not valid!`);
        }

    } else {
      console.log("A droid needs to be placed first!");
    }
  }

  left (){
    this._turn('LEFT');
  }

  right (){
    this._turn('RIGHT');
  }

  _turn(turnDirection){
    let currentIndex, newDirectionIndex;

    currentIndex = this.directions.findIndex(this._isEqualToDirection.bind(this));

    if (turnDirection === 'RIGHT'){
      if  ((currentIndex + 1) >= this.directions.length)   {
        newDirectionIndex = this.FIRST_INDEX;
      } else {
        newDirectionIndex = currentIndex + 1;
      }
    } else {
      if ((currentIndex - 1) < 0) {
        newDirectionIndex = this.LAST_INDEX;
      } else {
        newDirectionIndex = currentIndex - 1;
      }
    }
    this.facing = this.directions[newDirectionIndex];
  }

  _isEqualToDirection(element){
    return element === this.facing;
  }

  _validateDirection(f){
    if (!(this.directions.includes(f))){
      return false;
    }
    return true;
  }

  render() {
    console.log("render",this.x, this.y);
    const row = document.querySelector(`.row${this.y}`);
    const cell = row.querySelector(`.col${this.x}`);
    cell.textContent = 'ROBOT HERE!';
  }

  _cleanDOMPosition(replaced){
    // getting the class name for row and col element:
    if (replaced === false) {
    const row = document.querySelector(`.row${this.y}`);
    const cell = row.querySelector(`.col${this.x}`);
    cell.textContent = '';
    console.log("replaced false", cell);
  } else {
    const row = document.querySelector(`.row${this.lastY}`);
    const cell = row.querySelector(`.col${this.lastX}`);
    cell.textContent = '';
    console.log("replaced true ", cell);
  }
}

  report () {
    console.log(`Output: [${this.name}] is placed: [${this.placed}], at [${this.x},${this.y}] facing [${this.facing}]`);
  }

}
/* Class Board */
class Board {
  constructor(size){
    this.size = size;
  }

  validatePosition(x, y){
    if ( !(x >= 0 && y >= 0 && x <= this.size && y <= this.size) ) {
      return false;
    }
    return true;
  }
}

// -----------------------------------------------------------------------------
//creating an instance of the Robot class:
const boardGame = new Board(5);
const droid = new Robot("BB8", 0, 0, "SOUTH", boardGame);
droid.move();
droid.left();
droid.left();
droid.move();
droid.place(3,4,'EAST');
droid.move();
droid.move();
droid.right();
droid.move();
droid.place(0,0,'EAST');

droid.report();
