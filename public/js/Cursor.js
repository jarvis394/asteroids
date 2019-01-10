class Cursor {

  draw() {
    push()

    stroke(50)
    strokeWeight(3)
    fill(255, 0, 0)

    ellipse(mouseX, mouseY, 10)

    pop()
  }

}