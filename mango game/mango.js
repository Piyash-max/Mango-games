class Mango {
    constructor(x, y) {
      var options = {
          'isStartic':true,
          'friction':1.0,
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("images/mango.png")
      World.add(world, this.body);
    }
    display() { 
        var mangoPos=this.body.position;
         push()
          translate(mangoPos.x, mangoPos.y); 
           rectMode(CENTER); 
           rotate(this.body.angle) 
           fill(255,0,255)
            imageMode(CENTER); 
            ellipseMode(CENTER); 
            image(this.image, 0,0,this.r*2, this.r*2)
             pop() } 
            }