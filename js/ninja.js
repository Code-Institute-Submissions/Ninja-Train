var ninjaReady = false;
var ninjaSprite = new Image();
ninjaSprite.onload = function () {
	ninjaReady = true;
};
ninjaSprite.src = 'images/ninja.png'

class Ninja {
    constructor(){
    this.x = 180;
    this.y = 140;
    this.originalWidth = 84;
    this.originalHeight = 128;
    this.width = this.originalWidth/3;
    this.height = this.originalHeight/3;
    };
 
update(){
    if(upPressed) this.jump();
    if(downPressed) this.drop();
}

draw(){
    
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(ninjaSprite, 0, 0, this.originalWidth, this.originalHeight, this.x, this.y - 10, this.width * 1.2, this.height * 1.2)
    }


jump(){
    this.y = 140;
}

drop(){
    this.y = 220;
}
};

const ninja = new Ninja();