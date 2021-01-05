class Bob
{
    constructor(x, y,r) 
    {
        var options = 
        {
            isStatic:false,
            'restitution':1.0,
            'friction':0,
            'density':0.8
        }
        
          this.body=Bodies.circle(x, y, 25, options)
          this.r=25;
          World.add(world, this.body);
    }
      display()
      {
         var paperpos=this.body.position;
         var angle=this.body.angle
         push()
         translate(paperpos.x, paperpos.y);
         rotate(angle)
         fill("yellow")
         ellipseMode(RADIUS) 
         strokeWeight(3);
         ellipse(0,0,this.r);
         pop()
       }
}