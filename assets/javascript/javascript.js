// JS
//Generate the 2d array that is the game board
//Draw the board from the 2d array
// position robot on the board
// move the robot X,Y
// make the robot face north south east west (pivot)
// warning when there is no board to move

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
    console.log(`[${greeting}], a droid called [${this.name}] has been created and placed at [${this.x}, ${this.y}] facing [${this.facing}]!`);
    this.place(x,y,f);
  }

  place (x, y, f){
    this.x = x;
    this.y = y;
    this.facing = f;
    return (this.placed = true);
  }

  move() {
    if ( this.board.validatePosition(this.x, this.y) && this._validateDirection(this.facing) ) {
      switch (this.facing) {
        case 'NORTH':
        this.y += 1;
        break;
        case 'SOUTH':
        this.y -= 1;
        break;
        case 'WEST':
        this.x -= 1
        break;
        case 'EAST':
        console.log('case EAST');
        this.x += 1
        break;
        default:
        return false;
      }
    } else {
      console.log(`position: [${this.x},${this.y + 1}] and facing: [${this.facing}] is not valid!`);
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
    console.log("_turn: ", this.facing);
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

  report () {
    console.log(`[${this.name}] is placed: [${this.placed}], at [${this.x},${this.y}] facing [${this.facing}]`);
  }

}

class Board {
  constructor(size){
    this.size = size;
  }

  validatePosition(x, y){
    console.log("validatePosition", x, y);
    if (!(x <= this.size && y <= this.size)) {
      return false;
    }
    return true;
  }
}

//creating an instance of the Robot class:
const boardGame = new Board(5);
const droid = new Robot("BB8", 2, 3, "NORTH", boardGame);
droid.move();
droid.move();
droid.right();
droid.report();
droid.move();
droid.report();
