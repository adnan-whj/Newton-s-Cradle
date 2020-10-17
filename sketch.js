
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var world;
var bobDiameter;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	bobDiameter=40;
	
	startBobPositionX=width/2;
	startBobPositionY=height/4+500


	roof = new Roof(width/2-500,height/2-200,width/7,20);

		
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY-400,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY-400,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY-400,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY-400,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY-400,bobDiameter);
	
	rope1=new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2=new Rope(bob2.body, roof.body,-bobDiameter*1, 0);
	rope3=new Rope(bob3.body,roof.body,0, 0);
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0);
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2, 0);

	//rope1 = new Rope(bob1.body,roof.body,-20,0);


	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  textSize(40);
  text("NEWTON'S CRADLE",700,height/2);

  roof.display();
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();


  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position;
	roofBodyPosition=constraint.bodyB.position;

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}


