// COLOR CONSTANTS 
const BG_COLOR = "#000000"
const SHIP_SIZE = 48
const SHIP_COLOR = "#FFFFFF"

const ASTEROIDS_NUM = 16
const ASTEROID_COLOR = "#ccc"
const ASTEROID_SIZE = 100

// Window size
const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

let ship
let asteroids = []

function setup() {
  createCanvas(w, h)

  ship = new Ship(w, h, SHIP_SIZE, SHIP_COLOR)
  for (let i = 0; i < ASTEROIDS_NUM; i++) {
    // TODO: Figure out why Array.fill() isn't working for this
    asteroids.push(new Asteroid(w, h, ASTEROID_COLOR, ASTEROID_SIZE))
  }
  
}

function draw() {
  clear()

  ship.draw()
  ship.rotate()
  ship.locate()
  ship.checkEdges()

  asteroids.forEach(asteroid => {
    asteroid.draw()
  })
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) ship.setRotAngle(0.1)
  else if (keyCode === LEFT_ARROW) ship.setRotAngle(-0.1)
  else if (keyCode === UP_ARROW) ship.boosting = true
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW)
    ship.setRotAngle(0)
  else if (keyCode === UP_ARROW)
    ship.boosting = false
}