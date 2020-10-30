class Ninja {
    constructor(){
    this.x = 200;
    this.y = 200;
    this.width = 50;
    this.height = 50;
    };
 
update(){
    if(upPressed) this.jump();
    if(downPressed) this.drop();
}

draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

jump(){
    this.y = 200;
}

drop(){
    this.y = 300;
}
};
const ninja = new Ninja();