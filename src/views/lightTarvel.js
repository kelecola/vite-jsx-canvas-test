const defaultCfg = {
  path: '',
  lineColor: '',
  lineWidth: '',
  lightColor: '',
  lightWidth: '',
  beginX: '',
  beginY: ''
}

class lightTarvel {
  constructor(config = defaultCfg) {
    this.ctx = config.ctx
    this.x = config.beginX
    this.vx = 0
    this.vy = 0
    this.y = config.beginY
    this.path = config.path
    this.lineColor = config.lineColor
    this.lineWidth = config.lineWidth
    this.lightColor = config.lightColor
    this.lightWidth = config.lightWidth
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "black"
    if (this.x + this.vx < 100) {
      this.vx += 2
      this.ctx.fillRect(this.x + this.vx, this.y, 10, 2)
    }
    if (this.y + this.vy >= 100) {
      this.vx += 2
      this.ctx.fillRect(this.x + this.vx + 10, this.y + this.vy + 10, 10, 2)
    } else {
      if (this.x + this.vx >= 100) {
        this.vy += 2
        this.ctx.fillRect(this.x + this.vx + 10, this.y + this.vy, 2, 10)
      }
    }
  }
  clear() {
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(0, 0, 1400, 200)
  }
  move() {
    this.draw()
  }
}

export default lightTarvel