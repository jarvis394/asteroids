// Window size
const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

// COLOR CONSTANTS 
const BG_COLOR = "#000000"
const SHIP_SIZE = 48
const SHIP_COLOR = "#FFFFFF"

const ASTEROIDS_NUM = Math.floor(w / 256)
const ASTEROID_COLOR = "#ccc"

const LASER_COLOR = "#FFFFFF"

let ship, touch
let asteroids = []
let lasers = []
let counter = 0

function setup() {
  createCanvas(w, h)
  noCursor()

  ship = new Ship(w, h, SHIP_SIZE, SHIP_COLOR)
  for (let i = 0; i < ASTEROIDS_NUM; i++) {
    // TODO: Figure out why Array.fill() isn't working for this
    asteroids.push(new Asteroid(w, h, ASTEROID_COLOR))
    asteroids[i].makeShape()
  }
  touch = new Touch()
  cursor = new Cursor()
}

function draw() {
  clear()

  touch.check(ship)

  if (keyIsDown(32) && counter < 6) {
    lasers.push(new Laser(ship, LASER_COLOR))
    counter++
  } else if (counter >= 6 && !keyIsDown(32)) {
    counter = 0
  }

  for (let j = lasers.length - 1; j > 0; j--) {
    lasers[j].draw()
    lasers[j].move()

    for (let i = asteroids.length - 1; i >= 0; i--) {
      let state = lasers[j].checkCollision(asteroids[i])
      if (state) {
        let splitted = asteroids[i].break()
        asteroids.splice(i, 1)
        asteroids = asteroids.concat(splitted)

        lasers.splice(j, 1)

        break;
      }
    }
  }

  asteroids.forEach(asteroid => {
    asteroid.draw()
    asteroid.move()
  })

  cursor.draw()

  ship.draw()
  ship.rotate()
  ship.locate()
  ship.checkEdges()
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) ship.setRotAngle(0.1)
  else if (keyCode === LEFT_ARROW) ship.setRotAngle(-0.1)
  else if (keyCode === UP_ARROW) ship.boosting = true, ship.backwards = false
  else if (keyCode === DOWN_ARROW) ship.boosting = true, ship.backwards = true
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW)
    ship.setRotAngle(0)
  else if (keyCode === UP_ARROW)
    ship.boosting = false
}

function mouseClicked() {
  asteroids.push(new Asteroid(w, h, ASTEROID_COLOR))
  asteroids[asteroids.length - 1].pos = createVector(mouseX, mouseY)
  asteroids[asteroids.length - 1].makeShape()
}