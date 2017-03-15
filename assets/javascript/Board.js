class Board {
  constructor(size){
    this.MAX_SIZE = 5;
    if(size > this.MAX_SIZE || size == null || size < this.MAX_SIZE ){
      this.size = this.MAX_SIZE;
    } else {
        this.size = size;
    }
  }

  validatePosition(x, y){
    if ( !(x >= 0 && x < this.size) ) {
      return false;
    }

    if ( !(y >= 0 && y < this.size) ) {
      return false;
    }

    return true;
  }

}
module.exports = Board;
