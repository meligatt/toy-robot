# toy-robot
* Project: toy robot Grid
* author: Melissa Gattoni https://github.com/meligatt (meligatt@gmail.com)

* preview:
![Image of Robot app](https://github.com/meligatt/toy-robot/blob/master/help/robot-preview.png)

* Problems that are currently work in progress:
- Tests are not 100% passing.
- I'm trying to figure out what's better, run the test in the browser, or in node terminal.
- how to mock the DOM (with JSDOM module or similar) in browser based tests.

* Prerequisites:
- to have NodeJs installed in your machine.
- to have npm for node packages management.
- Chrome browser (or any modern one).

* Instructions:
- open your terminal and cd toy-robot.
- in your terminal, run "npm install" to install all the npm packages described in package.json.
- from toy-robot folder run httpster or any software you use to serve the files. (npm install httpster)
- the terminal will be used, so duplicate that tab and from the root toy-robot run npm test to run the tests (WIP)
- to see the robot working, open your browser on: localhost:3333 (or the port assigned) and open the Chrome console.
- in this console follow the instructions that are printed in here, and start playing around with R2D2! :)

* Technologies used:
- ES6 for logic
- Npm packages (babel for translating from es6 to es5)
- Flexbox for frontend
- CSS for fornt-end styles
- Mocha test framework and  Chai library for the tests.
- Git (sourcetree ui) for versioning system.

* Robot Movement Description:

The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. There are no other obstructions on the table surface.
The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

* Create an application that can read in commands of the following form:

- PLACE X,Y,F
- MOVE  
- LEFT
- RIGHT
- REPORT

* Commands Description:
- Where PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) can be considered to be the SOUTH WEST most corner.
- It is required that the first command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the  sequence until a valid PLACE command has been executed.
- Where MOVE will move the toy robot one unit forward in the direction it is currently facing.
- Where LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- Where REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.
- A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands. Input can be from a file, or from standard input, as the developer chooses.

* Constraints:
The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Any move that would cause the robot to fall must be ignored.

* Example Input and Output:
a) instructions:
- PLACE 0,0,NORTH
- MOVE
- REPORT
- Output: 0,1,NORTH

b) instructions:
- PLACE 0,0,NORTH
- LEFT
- REPORT
- Output: 0,0,WEST

c) instructions:
- PLACE 1,2,EAST
- MOVE
- MOVE
- LEFT
- MOVE
- REPORT
- Output: 3,3,NORTH

# Sources used:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
* https://developer.mozilla.org/en-US/docs/Web/API/Element
* https://css-tricks.com/dont-overthink-flexbox-grids/
* https://docs.npmjs.com/files/package.json
* http://chaijs.com/
