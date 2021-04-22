class Fireball {

  constructor(ctx, x, y) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.r = 5

    this.vx = 15
    this.vy = 0
    this.g = 0.4

    this.audio = new Audio('./assets/sound/fireball.wav')
    this.audio.play()
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    this.ctx.fillStyle = 'red'
    this.ctx.fill()
    this.ctx.closePath()
  }

  move() {
    this.vy += this.g
    this.x += this.vx
    this.y += this.vy

    if (this.y >= 420) {
      this.y = 420
      this.vy *= -1
    }
  }
}
