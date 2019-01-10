class Asteroid {

  constructor(w, h, ASTEROID_COLOR, pos, size) {
    this.pos = pos ? pos : createVector(random(w), random(h))
    this.color = ASTEROID_COLOR
    this.size = size ? size : random(70, 120)
    this.velocity = createVector(random(-1, 1), random(-1, 1))
    this._shapeDetail = random(5, 15)
    this._shapePoints = []
  }

  makeShape() {
    for (let i = 0; i < this._shapeDetail; i++) {
      this._shapePoints[i] = random(-10, 10)
    }
  }

  draw() {
    push()
    noFill()
    strokeWeight(2)
    stroke(this.color)
    translate(this.pos.x, this.pos.y)

    beginShape()
    for (let i = 0; i < this._shapeDetail; i++) {
      let angle = map(i, 0, this._shapeDetail, 0, TWO_PI)
      let r = this._shapePoints[i]
      let x = this.size / 2 * cos(angle) + r
      let y = this.size / 2 * sin(angle) + r
      vertex(x, y)
    }
    endShape(CLOSE)
    pop()
  }

  move() {
    this.pos.add(this.velocity)

    // X
    if (this.pos.x > w + this.size) this.pos.x = -this.size
    else if (this.pos.x < -this.size) this.pos.x = w + this.size

    // Y
    else if (this.pos.y > h + this.size) this.pos.y = -this.size
    else if (this.pos.y < -this.size) this.pos.y = h + this.size
  }

  break() {
    let splitted = []

    splitted.push(new Asteroid(w, h, ASTEROID_COLOR, this.pos.copy(), this.size / 2))
    splitted.push(new Asteroid(w, h, ASTEROID_COLOR, this.pos.copy(), this.size / 2))

    return splitted
  }

}