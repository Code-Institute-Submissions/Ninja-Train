class Ninja {
    constructor(){
    this.x = 200;
    this.y = 200;
    width = 50;
    height = 50;
    };

draw(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

};