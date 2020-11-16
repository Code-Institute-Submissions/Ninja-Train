const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 568;
canvas.height = 320;

let upPressed = false;
let downPressed = false;
let gameSpeed = 3;
let frame = 0;
let score = 0;

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/bg-1.png";
const bg = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

var tnReady = false;
var tnImage = new Image();
tnImage.onload = function () {
	tnReady = true;
};
tnImage.src = "images/train.png";
const tn = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

function handleTrain(){
   ctx.drawImage(tnImage, tn.x, tn.y, tn.width, tn.height);
}
function handleBackground(){
    if(bg.x1 <= -bg.width + gameSpeed) bg.x1 = bg.width;
    else bg.x1 -= gameSpeed;
    if(bg.x2 <= -bg.width + gameSpeed) bg.x2 = bg.width;
    else bg.x2 -= gameSpeed;
    ctx.drawImage(bgImage, bg.x1, bg.y, bg.width, bg.height);
    ctx.drawImage(bgImage, bg.x2, bg.y, bg.width, bg.height);
}

function handleCollisions(){
    for(let i = 0; i < obstaclesArray.length; i++){
        if (ninja.x < obstaclesArray[i].x + obstaclesArray[i].width &&
        ninja.x + ninja.width - 24 > obstaclesArray[i].x &&
        ninja.y < obstaclesArray[i].y + obstaclesArray[i].height &&
        ninja.y + ninja.height > obstaclesArray[i].y){
            ctx.font ="25px Georgia";
            ctx.fillStyle = 'black';
            ctx.fillText('Game Over ' + score, 160, canvas.height/2 - 10);
            console.log("collision")
            return true;
        }
    }
}

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

function animate(){
    if (bgReady === true && tnReady === true && bgReady === true && ninjaReady === true && pylonReady === true){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, canvas.width, canvas.height/2)
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 160, canvas.width, canvas.height/2)
        handleBackground();
        handleTrain();
        handleObstacles();
        ninja.update();
        ninja.draw();
        ctx.fillStyle = 'yellow';
        ctx.font = '48px Goldman';
        ctx.fillText(score, 48, 48, 48);
        handleCollisions();
        if(handleCollisions()) return;
        requestAnimationFrame(animate);
        frame++;
    }
else{ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(animate);
        frame++;
        ctx.fillStyle = 'red';
        ctx.font = '90px Georgia';
        ctx.strokeText("loading", 0, 70);
        ctx.fillText("loading", 0, 70);
    }

}

window.addEventListener('keydown', function(e){
    if(e.keyCode === 38) {upPressed = true}
})
window.addEventListener('keyup', function(e){
    if(e.keyCode === 38) {upPressed = false};
})
window.addEventListener('keydown', function(e){
    if(e.keyCode === 40) {downPressed = true};
})
window.addEventListener('keyup', function(e){
    if(e.keyCode === 40) {downPressed = false};
})
document.getElementsByClassName('up-button')[0]
        .addEventListener('click', function (event) {
            upPressed = true;
            downPressed = false;
        });
document.getElementsByClassName('down-button')[0]
        .addEventListener('click', function (event) {
            upPressed = false;
            downPressed = true;
        });

animate();

    

