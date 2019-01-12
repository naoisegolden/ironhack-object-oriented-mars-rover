/**
 * Creates a MarsRover
 * @class
 *
 * @property {String} name - The name
 * @property {Area} area - Area containing the matrix that the rover needs to explore
 * @property {String} direction - The direction the rover is facing (N, S, E, W)
 * @property {Object} position - The position at which the rover is (latitude, longitude)
 *
 * On instantiating a new MarsRover, the position should be random; just like a landing.
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
 * (BONUS) If the rover is are out of bounds, it should say so and NOT advance.
 */
MarsRover.prototype.move;

/**
 * Creates an Area
 * @class
 *
 * @property {Number} width - The area width
 * @property {Number} height - The area height
 * @property {Array} matrix - A matrix (array of arrays) of width x height
 *
 * @param {Array} things - Array of Things (Finding or Obstacle instances).
 *
 * The constructor must create a matrix and put each Finding or Obstacle in random coordinates.
 * The result should be a matrix with either undefined values or a Thing instance.
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
var rover = new MarsRover("Mars Rover 1", area);

/* 
// BONUS
var things = [
    new Finding("Alien artifact"),
    new Finding("Gold"),
    new Finding("Water"),
    new Obstacle("Rock"),
    new Obstacle("Alien ship")
];
var area = new Area(10, 10, things);
var rover = new MarsRover("Mars Rover", area);
*/

// rover.move();
// rover.moveLeft();
// rover.moveRight();
// etc…
