class Game {
  
  constructor(canvasId) {
    this.intervalId = null
    
    const canvas = document.getElementById(canvasId)
    canvas.height = 480
    canvas.width = 640
    this.ctx = canvas.getContext("2d")

    this.background = new Background(this.ctx)
    this.mario = new Mario(this.ctx)

    this.audio = new Audio('./assets/sound/mw-theme.mp3')
  }

  start() {
    this.audio.play()

    this.intervalId = setInterval(() => {
      this.clear()
      this.move()
      this.draw()
    }, 1000 / 60)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  onKeyEvent(event) {
    this.mario.onKeyEvent(event)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    this.background.draw()
    this.mario.draw()
  }

  move() {
    this.background.move()
    this.mario.move()
  }
}
