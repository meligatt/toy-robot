class Robot {
  constructor (name, x, y, f, board){
    this.name = name;
    this.x = x;
    this.y = y;
    this.facing = f;
    this.board = board;

    this.placed= false;
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    this.FIRST_INDEX = 0;
    this.LAST_INDEX = this.directions.length - 1;
    this.init("hello", this.x, this.y, this.facing);
    this._validateDirection = this._validateDirection.bind(this);
    this._cleanDOMPosition = this._cleanDOMPosition.bind(this);
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
    return this;
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
    this._cleanDOMPosition(false);
    this.render();
  }

  _isEqualToDirection(element){
    return element === this.facing;
  }

  _validateDirection(f){
    // if (!(this.directions.includes(f))){
    //   return false;
    // }
    if (!(this.directions.indexOf(f) >= 0)){
      return false;
    }
    return true;
  }

  render() {
    const row = document.querySelector(`.row${this.y}`);
    const cell = row.querySelector(`.col${this.x}`);
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", "assets/images/r2.png");
    imgElement.style.transform = null;

    switch (this.facing) {
      case 'NORTH':
      imgElement.style.transform = null;
      break;
      case 'EAST':
      imgElement.style.transform = `rotate(90deg)`;
      break;
      case 'SOUTH':
      imgElement.style.transform = `rotate(180deg)`;
      break;
      case 'WEST':
      imgElement.style.transform = `rotate(270deg)`;
      break;
      default:
    }
    cell.appendChild(imgElement);
  }

  _cleanDOMPosition(replaced){
    if (replaced === false) {
      const row = document.querySelector(`.row${this.y}`);
      const cell = row.querySelector(`.col${this.x}`);
      cell.textContent = '';
    } else {
      const row = document.querySelector(`.row${this.lastY}`);
      const cell = row.querySelector(`.col${this.lastX}`);
      cell.textContent = '';
    }
  }

  report () {
    console.log(`Output: [${this.name}] is placed: [${this.placed}], at [${this.x},${this.y}] facing [${this.facing}]`);
  }

}
module.exports = Robot;
