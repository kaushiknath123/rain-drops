class block{
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'restitution':1,
            'friction':0,
            'density':7.8
        }
        this.body = Bodies.circle(x, y, 30, options);
        World.add(world, this.body);
}
    display () {
        push();
        ellipseMode(RADIUS);
        noFill();
        ellipse(this.body.position.x, this.body.position.y, 80, 200);
        pop();

        

    }
}