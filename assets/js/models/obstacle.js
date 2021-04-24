class Obstacle {
  constructor(ctx) {
    this.ctx = ctx

    this.img = new Image()
    this.img.src = './assets/img/obstacle.png'

    this.vx = -2

    this.x = 800
    this.y = 387
    this.w = 50
    this.h = 50
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this.x += this.vx
  }
}