class Asteroid {

  constructor (w, h, ASTEROID_COLOR, ASTEROID_SIZE) {
    this.pos = createVector(random(w), random(h))
    this.color = ASTEROID_COLOR
    this.size = ASTEROID_SIZE
    this._shapeDetail = random(5, 15)
  }

  draw() {
    noFill()
    strokeWeight(2)
    stroke(this.color)
    translate(this.pos.x, this.pos.y)

    beginShape()
    for (let i = 0; i < this._shapeDetail; i++) {
      let angle = map(i, 0, this._shapeDetail, 0, TWO_PI)
      vertex(this.size / 2 * cos(angle), this.size / 2 * sin(angle))
    } 
    endShape(CLOSE)
  }

}

// /**
//  * Return random value from 0 to 'n'
//  * @param {number} n End value
//  */
// const random = (n) => Math.floor(Math.random() * n)