const obstaclesArray = [];

class Pylon{
    constructor(){
        this.top = 450;
        this.bottom = 580;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'blue'
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom)
    }

    update(){
        this.x -= gameSpeed
        this.draw()
    }
}