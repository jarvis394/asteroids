class Touch {

  check(ship) {
    // If there is 2 touches
    if (touches.length == 2) {
      ship.boosting = true
      ship.setRotAngle(0)
      this.borderAt("right")
      this.borderAt("left")
    } 
    // If there is no touches AND no key pressed
    else if (touches.length == 0 && keyIsPressed == false) {
      ship.setRotAngle(0)
      ship.boosting = false
    } 
    // If there is a touch and its X on right side
    else if (touches[0] && touches[0].x > w - w / 4) {
      this.borderAt("right")
      ship.setRotAngle(0.1)
    } 
    // If there is a touch and its X on left side
    else if (touches[0] && touches[0].x < w / 4) {
      this.borderAt("left")
      ship.setRotAngle(-0.1)
    } 
    // If there is a touch and its X on center
    else if (touches[0] && touches[0].x > w / 4 && touches[0].x < w - w / 4) {
      ship.shoot()
    }
  }

  borderAt(side) {
    let offset = 16
    strokeWeight(4)
    stroke(255, 100)

    switch (side) {
      case "right":
        line(w - offset, 8, w - offset, h - 8)
        break;
      case "left":
        line(offset, 8, offset, h - 8)
        break;
    }
  }

}