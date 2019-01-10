
/**
 * Describes player's ship that could rotate and shoot
 * @class
 */
class Ship {

  constructor(w, h, SHIP_SIZE, SHIP_COLOR) {
    this.pos = createVector(w / 2, h / 2)
    this.head = 0  // Amgle of the 'head'
    this.size = SHIP_SIZE
    this.color = SHIP_COLOR
    this.rotAngle = 0
    this.velocity = createVector(0, 0)
    this.boosting = false
    this.backwards = false
  }

  /**
   * Draw ship with rotation
   * @function
   */
  draw() {
    push()  // Store current translate()

    fill(0)
    strokeWeight(4)
    stroke(this.color)
    translate(this.pos.x, this.pos.y)
    rotate(this.head + HALF_PI)
    
    triangle(-this.size / 2, this.size / 2, this.size / 2, this.size / 2, 0, -this.size / 2 - 6)

    pop()  // Flush our stored translate() so everything 
           // after drawing ship won't be relative to its position
  }

  /**
   * Rotate by the rotation angle
   * @function
   */
  rotate() {
    this.head += this.rotAngle
  }

  /**
   * Set rotating angle
   * @param {number} deg Angle that should be set
   */
  setRotAngle(deg) {
    this.rotAngle = deg
  }

  /**
   * Update loction of the ship
   * @function
   */
  locate() {
    if (this.boosting) this.boost()
    this.pos.add(this.velocity)
    this.velocity.mult(0.97)
  }

  /**
   * Boost to a specific angle
   * @function
   */
  boost() {
    let force = p5.Vector.fromAngle(this.head)
    if (this.backwards) force.mult(-0.5)
    else force.mult(0.5)
    this.velocity.add(force)
  }

  /**
   * Check that ship have passed the edges and, 
   * if that true, return ship from the other side
   * @function
   */
  checkEdges() {
    // X
    if (this.pos.x > w + this.size) this.pos.x = -this.size
    else if (this.pos.x < -this.size) this.pos.x = w + this.size

    // Y
    else if (this.pos.y > h + this.size) this.pos.y = -this.size
    else if (this.pos.y < -this.size) this.pos.y = h + this.size
  }

  checkCollision(asteroid) {
    let distance = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)

    if (distance < asteroid.size)
      return true
    else
      return false
  }

}