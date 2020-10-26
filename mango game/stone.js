class stone {
    constructor(x, y) {
      var options = {
          'isStartic':false,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("images/stone.png")
      World.add(world, this.body);
    }
     display() {
        var stonepos=this.body.position;
         push() 
         translate(stonepos.x, stonepos.y); 
         rectMode(CENTER) ;
         rotate(this.body.angle);
          fill(255,0,255);
           imageMode(CENTER); 
           ellipseMode(RADIUS) ;
           image(this.image, 0,0,this.r*2, this.r*2);
            pop() }
           }