// create the instances of baord and robot classes.
const boardGame = new Board(5);
const droid = new Robot("BB8", 0, 0, "WEST", boardGame);

// invoke robot methods:
droid.left();
droid.right();
droid.right();
droid.right();
droid.place(0,0,'EAST');
droid.left();
droid.left();
droid.move();
droid.place(1,0,'NORTH');
droid.right();
droid.right();
droid.right();
droid.right();
droid.left();
droid.place(2,2,'NORTH');

// report:
droid.report();
