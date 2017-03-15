// create the instances of baord and robot classes.
console.log("*****************************");
console.log("Welcome to Tatooine, to start using this app, use the instance 'droid' and its methods: .move, .place, .left, .right");
console.log(" examples: \n "  +
            "droid.place(0,0,'EAST') \n " +
            "droid.left() \n "  +
            "droid.move() \n "  +
            "droid.right() \n "  +
            "droid.report()");
console.log("*****************************");
const boardGame = new Board(5);
const droid = new Robot("R2D2", 0, 0, "NORTH", boardGame);
/*
droid.left()
droid.move()
droid.right()
droid.report()
*/
