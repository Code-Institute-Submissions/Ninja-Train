//-----Obstacle Array-----//
//The Obstacle array handles how many obstacles are present.//
//Using pop and unshift obstacles are pushed through the array.//

var obstaclesArray = [];

//-----Obstacle Image Handlers-----//
//pylonReady and birdReady determine if the sprite is ready for the game to start.//
//Image sources are here.//

let pylonReady = false;
const pylonImage = new Image();
pylonImage.onload = function () {
    pylonReady = true;
};
pylonImage.src = "images/lamp.png";

let birdReady = false;
const birdImage = new Image();
birdImage.onload = function () {
	birdReady = true;
};
birdImage.src = "images/bird.png";

//-----Obstacle Classes-----//
//The class defines the size and location of the obstacle.//
//The update function contains the state of the obstacle position//
//The draw function draws the obstacle image at the coordinates declared// 

class Pylon{
    constructor(){
        this.y = 200;
        this.x = canvas.width;
        this.height = 141;
        this.width = 45;
        this.color = 'blue';
        this.counted = false;
    }
    draw(){
        ctx.drawImage(pylonImage, this.x, this.y, this.width, this.height);
    }
    update(){
       if(gamePlay === true){ 
        this.x -= gameSpeed;
        if(!this.counted && this.x < ninja.x){
            score++;
            this.counted = true;
            gameSpeed += 0.1;
        }
        this.draw();
        }
        else{
            obstaclesArray.pop(this);
        }
    }
}

class Bird{
    constructor(){
        this.x = canvas.width;
        this.y = 90;
        this.height = 60;
        this.width = 80;
        this.color = 'yellow';
        this.counted = false;
    }
    draw(){
        ctx.drawImage(birdImage, this.x, this.y, this.width, this.height);
    }
    update(){
        if(gamePlay === true){
        this.x -= gameSpeed;
        if(!this.counted && this.x < ninja.x){
            score++;
            this.counted = true;
            gameSpeed += 0.1;
        }
        this.draw();
        }
        else{ 
        obstaclesArray.pop(this);
        }
    }
}

//-----Obstacle Functionality-----//
//The random boolean operator determines which obstacle will appear next.//
//The obtacle is then pushed into the array at the frequency of "frame%200 === 0".//

function handleObstacles(){
    if (frame%200 === 0){
        var randomBoolean = Math.random() >= 0.5;
        if(randomBoolean === true){obstaclesArray.unshift(new Pylon());}
        else{obstaclesArray.unshift(new Bird());}
        }
    for(let i = 0; i < obstaclesArray.length; i++){
    obstaclesArray[i].update();
    if (obstaclesArray.length > 5){
        obstaclesArray.pop(obstaclesArray[0]);
        }
    }
}

//-----Clear Obstacles-----//
//this function will empty the obstacle array when the game is reset//
//It is called in main.js//
function clearObstacles(){
    obstaclesArray.pop(obstaclesArray[0]);
}