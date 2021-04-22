class Mario {

  constructor(ctx) {
    this.ctx = ctx

    this.x = 50
    this.y = 360
    this.y0 = this.y

    this.vx = 0
    this.vy = 0

    this.w = 50
    this.h = 75
    this.h0 = this.h

    this.g = 0.4

    this.jumping = false

    this.img = new Image()
    this.img.drawCount = 0
    this.img.frames = 3
    this.img.frameIndex = 0
    this.img.src = './assets/img/mario.sprite.png'

    this.bullets = []
  }

  fire() {
    const bullet = new Fireball(this.ctx, this.x + this.w, this.y + this.h / 2)

    this.bullets.push(bullet)
  }

  onKeyEvent(event) {
    if (event.type === 'keydown') {
      switch(event.keyCode) {
        case KEY_RIGHT:
          this.vx = 10
          break;
        case KEY_LEFT:
          this.vx = -10
          break;
        case KEY_UP:
          if (!this.isJumping()) {
            this.vy = -10
          }
          break;
        case KEY_FIRE:
          this.fire()
          break;
      }
    } else {
      switch(event.keyCode) {
        case KEY_RIGHT:
          this.vx = 0
          break;
        case KEY_LEFT:
          this.vx = 0
          break;
      }
    }
  }

  isJumping() {
    return this.y < this.y0
  }

  draw() {
    this.img.drawCount++

    if (this.img.drawCount >= 10) {
      this.img.drawCount = 0
      this.animate()
    }

    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames,
      0,
      this.img.width / 3,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.bullets.forEach(b => b.draw())
  }

  move() {
    if (this.isJumping()) {
      this.vy += this.g
    }

    this.x += this.vx
    this.y += this.vy

    if (!this.isJumping()) {
      this.vy = 0
      this.y = this.y0
    }

    this.bullets.forEach(b => b.move())
  }
  
  animate() {
    if (this.y === this.y0) {
      this.img.frameIndex++

      if (this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0
      }
    }
  }
}
