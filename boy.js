class Boy {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y , width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        strokeWeight(8);
        stroke("white");
        fill("white");
        imageMode(CENTER);
        image(this.image);
        rect(pos.x, pos.y, this.width, this.height);
        rectMode(CENTER);
    }
}