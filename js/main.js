//-----Base Declarations-----//

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 568;
canvas.height = 320;
let upPressed = false;
let downPressed = false;
let gameSpeed = 1.8;
let frame = 0;
let score = 0;
document.getElementById('up-button').style.display = "none";
document.getElementById('down-button').style.display = "none";
let playerName = "Player";
document.getElementById('game-over-screen').style.display = "none";
let gamePlay = false


//-----Image Declarations-----//

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

//-----Name Input Handler-----//

function storeName(){
    if(document.getElementById('player-name').value.length == 0){
        playerName = "Player"
        console.log(playerName);
    }
    else{
        playerName = document.getElementById('player-name').value;
    }
};

//-----Image Handlers-----//

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

//-----Collision Detection-----//

function handleCollisions(){
    for(let i = 0; i < obstaclesArray.length; i++){
        if (ninja.x + 40 < obstaclesArray[i].x + obstaclesArray[i].width &&
        ninja.x + ninja.width - 28 > obstaclesArray[i].x &&
        ninja.y < obstaclesArray[i].y + obstaclesArray[i].height &&
        ninja.y + ninja.height > obstaclesArray[i].y){
            obstaclesArray.pop(obstaclesArray[i]);
            gamePlay = false;
            document.getElementById('game-over-screen').style.display = "block";
            ctx.font ="25px Georgia";
            ctx.fillStyle = 'black';
            ctx.fillText('Game Over ' + playerName + ' ' + score, 160, canvas.height/2 - 10);
            clearObstacles();
            frame = 0;
        }
    }
}

//-----Game Animation-----//

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
        ctx.font = '32px Goldman';
        ctx.fillText(score, 500, 40, 40);
        handleCollisions();
        if (gamePlay === true){
            requestAnimationFrame(animate);
            frame++;
            }
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

//-----Game Controls-----//

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

document.getElementById('up-button').addEventListener('click', function () {
            upPressed = true;
            downPressed = false;
});

document.getElementById('down-button').addEventListener('click', function () {
            upPressed = false;
            downPressed = true;
});

//-----Game Start/Try Again----//

document.getElementById('play-button').addEventListener('click', function () {
        storeName();
        document.getElementById('title-screen').style.display = "none";
        document.getElementById('up-button').style.display = "block";
        document.getElementById('down-button').style.display = "block";
        gamePlay = true;
        requestAnimationFrame(animate);
        animate(); 
});

document.getElementById('reset-button').addEventListener('click', function () {
        document.getElementById('game-over-screen').style.display = "none";
        document.getElementById('up-button').style.display = "block";
        document.getElementById('down-button').style.display = "block";
        gamePlay = true;
        score = 0;
        frame = 0;
        gameSpeed = 1.8;
        requestAnimationFrame(animate);
        animate(); 
});
