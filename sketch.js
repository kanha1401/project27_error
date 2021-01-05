
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5,bob;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofobject=new Roof(400,200,300,20);

bob1=new Bob(400,400);
bob2=new Bob(450,400);
bob3=new Bob(350,400);
bob4=new Bob(500,400);
bob5=new Bob(300,400);

rope1=new Rope(bob1.body,roofobject.body,0,0);
rope2=new Rope(bob2.body,roofobject.body,50,0);
rope3=new Rope(bob3.body,roofobject.body,-50,0);
rope4=new Rope(bob4.body,roofobject.body,100,0);
rope5=new Rope(bob5.body,roofobject.body-100,0);

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY)
  
  //drawSprites();

roofobject.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function KeyPressed(){

if(keyCode===UP_ARROW)
{
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-60})
}
}