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
