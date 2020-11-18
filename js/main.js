//-----Base Declarations-----//
//These determine the base values of elements when the page loads//

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 568;
canvas.height = 320;
let upPressed = false;
let downPressed = false;
let gameSpeed = 1.5;
let frame = 0;
let score = 0;
document.getElementById('up-button').style.display = "none";
document.getElementById('down-button').style.display = "none";
let playerName = "Player";
document.getElementById('game-over-screen').style.display = "none";
let gamePlay = false;

//-----Image Declarations-----//
//bgReady and tnReady determine if the background and train are ready for the game to start.//
//Image sources are here.//

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
};

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
};

//-----Name Input Handler-----//
//Stores the value of the name input at the start of the game//

function storeName(){
    if(document.getElementById('player-name').value.length == 0){
        playerName = "Player";
    }
    else{
        playerName = document.getElementById('player-name').value;
    }
}

//-----Image Handlers-----//
//Determine the position and motion of the train and background images.//
//Two instances of the background image are drawn and will scroll right to left after each other//

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
//The handle collision function determines if the coordinates and size of the ninja//
//interact with the coordinates and size of the obstacle.//
//The for loop repeats, if a collision is detected the game will stop//
//The game over screen is shown and the score text is cleared and rewritten using the score variable//

function handleCollisions(){
    for(let i = 0; i < obstaclesArray.length; i++){
        if (ninja.x + 40 < obstaclesArray[i].x + obstaclesArray[i].width &&
        ninja.x + ninja.width - 28 > obstaclesArray[i].x &&
        ninja.y < obstaclesArray[i].y + obstaclesArray[i].height &&
        ninja.y + ninja.height > obstaclesArray[i].y){
            obstaclesArray = [];
            gamePlay = false;
            document.getElementById('game-over-screen').style.display = "block";
            document.getElementById('final-score').innerHTML =  "";
            document.getElementById('final-score').innerHTML += "Congratulations " + playerName + "<br/>" + "You have scored " + score + " points!";
            clearObstacles();
            frame = 0;
        }
    }
}

//-----Game Animation-----//
//The opening if statement will determine if the images are ready//
//If true the game will start, else the loading screen will appear//
//handleBackground moves the background//
//handleTrain draws the train//
//Ninja image is drawn and updated and the handleCollisions function is called//

function animate(){
    if (bgReady === true && tnReady === true && bgReady === true && ninjaReady === true && pylonReady === true){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, canvas.width, canvas.height/2);
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 160, canvas.width, canvas.height/2);
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
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'yellow';
        ctx.font = '90px Goldman';
        ctx.strokeText("loading", 0, 70);
        ctx.fillText("loading", 0, 70);
        requestAnimationFrame(animate);
        frame++;
    }
}

//-----Game Controls-----//
//Event listeners for pressed keys or buttons to determine ninja state for positioning//

window.addEventListener('keydown', function(e){
    if(e.keyCode === 38) {upPressed = true;}
});
window.addEventListener('keyup', function(e){
    if(e.keyCode === 38) {upPressed = false;}
});
window.addEventListener('keydown', function(e){
    if(e.keyCode === 40) {downPressed = true;}
});
window.addEventListener('keyup', function(e){
    if(e.keyCode === 40) {downPressed = false;}
});

document.getElementById('up-button').addEventListener('click', function () {
    upPressed = true;
    downPressed = false;
});

document.getElementById('down-button').addEventListener('click', function () {
            upPressed = false;
            downPressed = true;
});

//-----Game Start/Try Again----//
//Play button captures the name input, determines the screen size for showing control buttons (or not)//
//Sets the gamePlay state to true and runs the animation function.//

document.getElementById('play-button').addEventListener('click', function () {
        storeName();
        document.getElementById('title-screen').style.display = "none";
        if (window.innerWidth < 1367) {
        document.getElementById('up-button').style.display = "block";
        document.getElementById('down-button').style.display = "block";
        }
        gamePlay = true;
        requestAnimationFrame(animate);
        animate(); 
});

//Try again button determines the screen size for showing control buttons (or not)//
//Sets the gamePlay state to true, resets the gamespeed, score and frame//
//runs the animation function.//

document.getElementById('reset-button').addEventListener('click', function () {
        document.getElementById('game-over-screen').style.display = "none";
        if (window.innerWidth < 768) {
        document.getElementById('up-button').style.display = "block";
        document.getElementById('down-button').style.display = "block";
        }
        gamePlay = true;
        score = 0;
        frame = 0;
        gameSpeed = 1.5;
        requestAnimationFrame(animate);
        animate(); 
});
