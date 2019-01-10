class Score {

  constructor() {
    this.points = 0
    this._color = 255
  }

  add(val) {
    this.points += val
  }

  draw() {
    fill(255)
    noStroke()

    textAlign(CENTER)
    textSize(48)
    text(this.points, w / 2, 64)
    textSize(12)
    text("POINTS", w / 2, 84)
  }

  showHint() {
    fill(255)
    noStroke()

    textAlign(CENTER)
    textSize(48)
    text("Click to add new asteroid!", w / 2, h / 2)
  }

  startup(state) {
    if (state) this._color--

    fill(this._color)
    noStroke()

    textAlign(CENTER)
    textSize(48)
    text("Use arrows and space to move and shoot!", w / 2, h / 2)
  }

}