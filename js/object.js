const obstaclesArray = [];

class Pylon{
    constructor(){
        this.y = 260;
        this.x = canvas.width;
        this.height = 100;
        this.width = 20;
        this.color = 'blue'
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.x -= gameSpeed
        this.draw()
    }
}

class Bird{
    constructor(){
        this.x = canvas.width;
        this.y = 200;
        this.height = 20;
        this.width = 20;
        this.color = 'yellow'
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.x -= gameSpeed
        this.draw()
    }
}



function handleObstacles(){
    if (frame%100 === 0){
        var randomBoolean = Math.random() >= 0.5;
        if(randomBoolean === true){obstaclesArray.unshift(new Pylon);}
        else{obstaclesArray.unshift(new Bird);}
    }
    for(let i = 0; i < obstaclesArray.length; i++){
    obstaclesArray[i].update();
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}
}
