// JS

//Generate the 2d array that is the game board
//Draw the board from the 2d array
// position robot on the board
// move the robot X,Y
// make the robot face north south east west (pivot)
// warning when there is no board to move

class Robot {
  constructor (name, x, y, f){
    this.name = name;
    this.x = x;
    this.y = y;
    this.facing = f;
    this.placed= false;
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    this.init("hello", this.x, this.y, this.facing);
    return this;
  }

  init (greeting, x, y, f){
    console.log(`${greeting}, a droid called ${this.name} has been created!`);
    this.place(x,y,f);
  }

  place (x, y, f){
    this.x = x;
    this.y = y;
    this.facing = f;
    return (this.placed = true);
  }

  move() {
    switch (this.facing) {
      case 'NORTH':
      this.y += 1;
      // y++
      break;
      case 'SOUTH':
      // y--
      this.y -= 1;
      break;
      case 'WEST':
      // x--
      this.x -= 1
      break;
      case 'EAST':
      // x++
      this.x += 1
      break;
      default:
      return false;
    }
  }

  left (){
    this._turn('LEFT');
  }

  right (){
    this._turn('RIGHT');
  }

  _turn(turnDirection){
    let index, newDirectionIndex;

    if (turnDirection === 'LEFT'){
      index = this.directions.findIndex(this._isEqualToDirection.bind(this));
      newDirectionIndex = index + 1;
    } else {
      // RIGHT
      index = this.directions.findIndex(this._isEqualToDirection.bind(this));
      newDirectionIndex = index - 1;
    }
    this.facing = this.directions[newDirectionIndex];
  }

  _isEqualToDirection(element){
    return element === this.facing;
  }

  report () {
    console.log(`[${this.name}] is placed: [${this.placed}], at [${this.x},${this.y}] facing [${this.facing}]`);
  }

}
//creating an instance of the Robot class:
const droid = new Robot("BB8", 2, 3, "NORTH");
droid.report();
droid.move();
droid.move();
droid.report();
droid.left();
droid.left();
droid.left();
droid.right();
droid.report();
// robot.render();
