class Pig {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        var option = {
            restitution: 0.9,
            friction: 0.5,

        }
        this.height = 50;
        this.width = 50;
        this.body = Bodies.rectangle(x,y,50,50);
        World.add(world,this.body);
        
    }
    display() {
        fill("green");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}