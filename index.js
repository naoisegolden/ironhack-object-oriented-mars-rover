/**
 * Creates a MarsRover
 * @class
 * 
 * @property {String} name - The name
 * @property {Area} area - The matrix that the rover needs to explore
 * @property {String} direction - The direction the rover is facing (N, S, E, W)
 * @property {Object} position - The position at which the rover is (latitude, longitude)
 */
function MarsRover(name, area) {}

/**
 * Turns the rover to the left
 */
MarsRover.prototype.turnLeft;

/**
 * Turns the rover to the right
 */
MarsRover.prototype.turnRight;

/**
 * Moves the rover forward to where it's facing. 
 * If there is a finding, it should announce it!
 * (BONUS) If there is an obstacle, it should say so and NOT advance.
 * (BONUS) If you are out of bounds, it should say so and NOT advance.
 */
MarsRover.prototype.move;

/**
 * Creates an Area
 * @class
 *
 * @property {Number} width - The area width
 * @property {Number} height - The area height
 * @property {Matrix} area - A matrix (array of arrays) of width x height
 * @property {Array} things - Array of objects (latitude, longitude, Finding or Obstacle).
 *
 * It has to put each Finding or Obstacle in random coordinates.
 */
function Area(width, height, things) {}

/**
 * Creates a Thing (parent class)
 * @class
 *
 * @property {String} name - Name of the thing
 */
function Thing(name) {}

/**
 * Creates a Finding (inherits from Thing)
 * @class
 *
 * @property {String} name - Name of the finding
 * @property {String} type - has to be "finding"
 */
function Finding(name) {}

/**
 * (BONUS) Creates an Obstacle (inherits from Thing)
 * @class
 *
 * @property {String} name - Name of the obstacle
 * @property {String} type - has to be "obstacle"
 */
function Obstacle(name) {}

var findings = [
    new Finding("Alien artifact"),
    new Finding("Gold"),
    new Finding("Water")
];
var area = new Area(10, 10, findings);
var rover = new rover("Mars Rover 1", area);

// rover.move();
// rover.moveLeft();
// rover.moveRight();
// etc…

/* 
// BONUS
var things = [
    new Finding("Alien artifact"),
    new Finding("Gold"),
    new Finding("Water"),
    new Obstacle("Rock"),
    new Obstacle("Alien ship")
];
var area2 = new Area(10, 10, things);
var rover2 = new MarsRover("Mars Rover 2", area2);
*/
