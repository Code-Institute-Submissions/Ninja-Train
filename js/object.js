const obstaclesArray = [];

var pylonReady = false;
var pylonImage = new Image();
pylonImage.onload = function () {
	pylonReady = true;
};
pylonImage.src = "images/lamp.png";

var birdReady = false;
var birdImage = new Image();
birdImage.onload = function () {
	birdReady = true;
};
birdImage.src = "images/bird.png";

class Pylon{
    constructor(){
        this.y = 220;
        this.x = canvas.width;
        this.height = 141;
        this.width = 45;
        this.color = 'blue';
        this.counted = false;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(pylonImage, this.x, this.y, this.width, this.height)
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
        this.height = 30;
        this.width = 40;
        this.color = 'yellow';
        this.counted = false;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(birdImage, this.x, this.y, this.width, this.height)
    }

    update(){
        this.x -= gameSpeed
        if(!this.counted && this.x < ninja.x){
            score++
            this.counted = true;
            gameSpeed += .2;
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
