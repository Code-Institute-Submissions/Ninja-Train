const obstaclesArray = [];

class Pylon{
    constructor(){
        this.y = 220;
        this.x = canvas.width;
        this.height = 120;
        this.width = 20;
        this.color = 'blue';
        this.counted = false;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.x -= gameSpeed
         if(!this.counted && this.x < ninja.x){
            score++
            this.counted = true;
            gameSpeed += .3;
        }
        this.draw()
    }
}

class Bird{
    constructor(){
        this.x = canvas.width;
        this.y = 140;
        this.height = 40;
        this.width = 30;
        this.color = 'yellow';
        this.counted = false;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.x -= gameSpeed
        if(!this.counted && this.x < ninja.x){
            score++
            this.counted = true;
            gameSpeed += .5;
        }
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
    if (obstaclesArray.length > 5){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}
}
