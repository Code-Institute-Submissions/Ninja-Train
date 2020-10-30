class Ninja {
    constructor(){
    this.x = 200;
    this.y = 200;
    this.width = 50;
    this.height = 50;
    };
 
update(){

}

draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

};
const ninja = new Ninja();