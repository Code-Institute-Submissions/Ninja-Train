const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let upPressed = false;
let downPressed = false;

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(200, 200, 50, 50);
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('keydown', function(e){
    if(e.code === ArrowUp) upPressed = true;
})
window.addEventListener('keyup', function(e){
    if(e.code === ArrowUp) upPressed = false;
})
window.addEventListener('keydown', function(e){
    if(e.code === ArrowDown) upPressed = true;
})
window.addEventListener('keyup', function(e){
    if(e.code === ArrowDown) upPressed = false;
})