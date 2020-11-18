//-----Ninja Image Handling-----//
//ninjaready determines if the sprite is ready for the game to start.//

let ninjaReady = false;
const ninjaSprite = new Image();
ninjaSprite.onload = function () {
	ninjaReady = true;
};
ninjaSprite.src = 'images/ninja.png';

//-----Initialize Ninja State-----//
//Sets the state of the ninja to determine the position at the beginning of the game//

let up = true;
let down = false;

//-----Ninja Class-----//
//The class defines the size and location of the ninja.//
//The update function contains the state of the ninjas position//
//The draw function draws the ninja image at the coordinates declared// 

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

//-----New Instance of Ninja for the game-----//

const ninja = new Ninja();