class Laser {

  constructor(ship, LASER_COLOR) {
    this.pos = createVector(ship.pos.x, ship.pos.y)
    this.velocity = p5.Vector.fromAngle(ship.head).mult(10)
    this.LASER_COLOR = LASER_COLOR
  }

  draw() {
    push()
    stroke(this.LASER_COLOR)
    strokeWeight(4)

    point(this.pos.x, this.pos.y)
    pop()
  }

  move() {
    this.pos.add(this.velocity)
  }

  checkCollision(asteroid) {
    let distance = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)

    if (distance < asteroid.size)
      return true
    else
      return false
  }

  offscreen() {
    if (this.pos.x > w || this.pos.x < 0 || this.pos.y > h || this.pos.y < 0)
      return true
    else return false
  }

}