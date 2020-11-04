const ninjaSprite = new Image();
ninjaSprite.src = '../images/ninja.png'

class Ninja {
    constructor(){
    this.x = 200;
    this.y = 200;
    this.originalWidth = 84;
    this.originalHeight = 128;
    this.width = this.originalWidth/2;
    this.height = this.originalHeight/2;
    };
 
update(){
    if(upPressed) this.jump();
    if(downPressed) this.drop();
}

draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(ninjaSprite, 0, 0, ninja.width, ninja.height, ninja.x, ninja.y, ninja.width, ninja.height)
}

jump(){
    this.y = 200;
}

drop(){
    this.y = 300;
}
};
const ninja = new Ninja();