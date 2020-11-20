class Ground {
    constructor (x, y, width, height){
        var a = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, a);
        this.height = height;
        this.width = width;
        World.add (world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill ("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}