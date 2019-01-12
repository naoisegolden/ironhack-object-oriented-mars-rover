/**
 * Creates a MarsRover
 * @class
 * 
 * @property {String} name - The name
 * @property {Area} area - The matrix that the rover needs to explore
 * @property {String} direction - The direction the rover is facing (N, S, E, W)
 * @property {Object} position - The position at which the rover is (latitude, longitude)
 */
function MarsRover(name, area) {
    this.name = name;
    this.area = area;
    this.direction = "N";
    this.position = {
        latitude: Math.floor(Math.random() * area.height),
        longitude: Math.floor(Math.random() * area.width)
    };

    // Print a visualization of the area
    this.printFrame = function () {
        var frame = [];
        for (var latitude = 0; latitude < this.area.width; latitude++) {
            var row = [];

            for (var longitude = 0; longitude < this.area.height; longitude++) {
                var thing = this.area.area[latitude][longitude];

                if (latitude === this.position.latitude && longitude === this.position.longitude) {
                    row.push('\uD83E\uDD16'); // 🤖
                } else if (thing && thing.type === "finding") {
                    row.push('\uD83C\uDF81'); // 🎁
                } else if (thing && thing.type === "obstacle") {
                    row.push('\u26F0\uFE0F'); // ⛰️
                } else {
                    row.push(' ');
                }
            }
            frame.push(row);
        }

        console.clear();
        console.table(frame);
        console.log(`Facing ${this.direction}`);
    }
}

/**
 * Turns the rover to the left
 */
MarsRover.prototype.turnLeft = function() {
    switch (this.direction) {
        case "N":
            this.direction = "W";
            break;
        case "E":
            this.direction = "N";
            break;
        case "S":
            this.direction = "E";
            break;
        case "W":
            this.direction = "S";
            break;
    }
    this.printFrame();
};

/**
 * Turns the rover to the right
 */
MarsRover.prototype.turnRight = function () {
    switch (this.direction) {
        case "N":
            this.direction = "E";
            break;
        case "E":
            this.direction = "S";
            break;
        case "S":
            this.direction = "W";
            break;
        case "W":
            this.direction = "N";
            break;
    }
    this.printFrame();
};

/**
 * Moves the rover forward to where it's facing. 
 * If there is a finding, it should announce it!
 * (BONUS) If there is an obstacle, it should say so and NOT advance.
 * (BONUS) If you are out of bounds, it should say so and NOT advance.
 */
MarsRover.prototype.move = function() {
    var previousPosition = {
        latitude: this.position.latitude,
        longitude: this.position.longitude
    };
    var isOutOfBounds = false;

    // Change position depending on direction
    switch (this.direction) {
        case "N":
            this.position.latitude += 1;
            break;
        case "E":
            this.position.longitude += 1;
            break;
        case "S":
            this.position.latitude -= 1;
            break;
        case "W":
            this.position.longitude -= 1;
            break;
    }

    // Check for out of bounds
    if (
        this.position.latitude < 0 ||
        this.position.latitude >= this.area.height ||
        this.position.longitude < 0 ||
        this.position.longitude >= this.area.width
    ) {
        this.position.latitude = previousPosition.latitude;
        this.position.longitude = previousPosition.longitude;
        isOutOfBounds = true;
    }

    // Check for things at this position
    var thing = this.area.area[this.position.latitude][this.position.longitude];

    // Move back to the previous position if obstacle found
    if (thing && thing.type === "obstacle") {
        this.position.latitude = previousPosition.latitude;
        this.position.longitude = previousPosition.longitude;
    }

    // Update frame
    this.printFrame();

    // Inform of your findings
    if (isOutOfBounds) {
        console.log("%c I can't move because I reached the limit!", 'color: red; font-weight: bold;');
    } else if (!thing) {
        // there is nothing
        console.log(`I haven't found anything at latitude ${this.position.latitude}, longitude ${this.position.longitude}.`);
    } else if (thing.type === "finding") {
        console.log(`%c I found something! ${thing.name}`, 'color: green; font-weight: bold;');
    } else if (thing.type === "obstacle") {
        console.log(`%c I can't move because there is an obstacle! ${thing.name}`, 'color: red; font-weight: bold;');
    } else  {
        console.log(`%c I found something but I don't know what it is: ${thing.name}`, 'color: blue; font-weight: bold;');
    }
};

/**
 * Creates an Area
 * @class
 *
 * @property {Number} width - The area width
 * @property {Number} height - The area height
 * @property {Matrix} area - A matrix (array of arrays) of width x height
 * @property {Array} thingsWithPosition - Array of objects (latitude, longitude, Finding or Obstacle).
 *
 * It has to put each Finding or Obstacle in random coordinates.
 */
function Area(width, height, things) {
    this.thingsWithPosition = [];
    this.area = [];
    this.width = width;
    this.height = height;

    // Create matrix
    for (var i = 0; i < height; i++) {
        this.area.push(new Array(width));
    }

    // Put things in area
    for (var i = 0; i < things.length; i++) {
        var latitude = Math.floor(Math.random() * height);
        var longitude = Math.floor(Math.random() * width);
        this.area[latitude][longitude] = things[i];
    }

    // FIXME: this is not needed
    // Create the array of thingsWithPosition
    // for (var i = 0; i < things.length; i++) {
    //     this.thingsWithPosition.push({
    //         latitude: Math.floor(Math.random() * height),
    //         longitude: Math.floor(Math.random() * width),
    //         thing: things[i]
    //     });
    // }
}

/**
 * Creates a Thing (parent class)
 * @class
 *
 * @property {String} name - Name of the thing
 */
function Thing(name) {
    this.name = name;
}


/**
 * Creates a Finding (inherits from Thing)
 * @class
 *
 * @property {String} name - Name of the finding
 * @property {String} type - has to be "finding"
 */
function Finding(name) {
    Thing.call(this, name);

    this.type = "finding";
}
Finding.prototype = Object.create(Thing.prototype);
Finding.prototype.constructor = Finding;

/**
 * (BONUS) Creates an Obstacle (inherits from Thing)
 * @class
 *
 * @property {String} name - Name of the obstacle
 * @property {String} type - has to be "obstacle"
 */
function Obstacle(name) {
    Thing.call(this, name);

    this.type = "obstacle";
}
Obstacle.prototype = Object.create(Thing.prototype);
Obstacle.prototype.constructor = Obstacle;

/*
var findings = [
    new Finding("Alien artifact"),
    new Finding("Gold"),
    new Finding("Water")
];
var area = new Area(10, 10, findings);
var rover = new MarsRover("Mars Rover 1", area);

rover.printFrame();

// rover.move();
// rover.moveLeft();
// rover.moveRight();
// etc…
*/

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

rover2.printFrame();
