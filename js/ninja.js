//-----Ninja Image Handling-----//

var ninjaReady = false;
var ninjaSprite = new Image();
ninjaSprite.onload = function () {
	ninjaReady = true;
};
ninjaSprite.src = 'images/ninja.png';

//-----Initialize Ninja State-----//

var up = true;
var down = false;

//-----Ninja Class-----//

class Ninja {
    constructor(){
    this.x = 100;
    this.y = 100;
    this.originalWidth = 96;
    this.originalHeight = 96;
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    }
    update(){
        if(upPressed) {
            this.jump();
        }
        if(downPressed) {
            this.drop();
        }
    }
    draw(){
        if(up === true){
        ctx.drawImage(ninjaSprite, 0, 0, this.originalWidth, this.originalHeight, this.x, this.y, this.width, this.height);
        }
        if(down === true){
        ctx.drawImage(ninjaSprite, 192, 0, this.originalWidth, this.originalHeight, this.x, this.y, this.width, this.height);
        }
    }
    jump(){
        this.y = 100;
        up = true;
        down = false;
    }
    drop(){
        this.y = 200;
        down = true;
        up = false;
    }
}

//-----New Instance of Ninja-----//

const ninja = new Ninja();