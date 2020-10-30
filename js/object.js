const obstaclesArray = [];

class Pylon{
    constructor(){
        this.top = 120;
        this.bottom = 100;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'blue'
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, canvas.height - this.top, this.width, this.bottom)
    }

    update(){
        this.x -= gameSpeed
        this.draw()
    }
}

function handleObstacles(){
    if (frame%100 === 0){
        obstaclesArray.unshift(new Pylon);
    }
    for(let i = 0; i < obstaclesArray.length; i++){
    obstaclesArray[i].update();
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}
}
