
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var stoneObject1, boy1; 
var rope1;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.sworld;

	

	stoneDiameter=40;
	var boy1 = new boy(200, 100, 50, 70);
	startstonePositionX=width/2;
	startstonePositionY=height/4+500;
	stone1=new stone(startstonePositionX-stoneDiameter*2,startstonePositionY,stoneDiameter);
	//stoneObject2=new stone(startstonePositionX-stoneDiameter,startstonePositionY,stoneDiameter);
	//stoneObject3=new stone(startstonePositionX,startstonePositionY,stoneDiameter);
	//stoneObject4=new stone(startstonePositionX+stoneDiameter,startstonePositionY,stoneDiameter);
	//stoneObject5=new stone(startstonePositionX+stoneDiameter*2,startstonePositionY,stoneDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	rope1=new rope(stoneObject1.body,boyObject.body,-stoneDiameter*2, 0)

//	rope2=new rope(stoneObject2.body,boyObject.body,-stoneDiameter*1, 0)
//	rope3=new rope(stoneObject3.body,boyObject.body,0, 0)
//	rope4=new rope(stoneObject4.body,boyObject.body,stoneDiameter*1, 0)
//	rope5=new rope(stoneObject5.body,boyObject.body,stoneDiameter*2, 0)

	/*constraint1={
		bodyA:stoneObject1.body,
		bodyB:boyObject.body,
		pointB: {x:-stoneDiameter*2, y:0}
	}

	constraint2={
		bodyA:stoneObject2.body,
		bodyB:boyObject.body,		
		pointB: {x:-stoneDiameter, y:0}
	}


	constraint3={
		bodyA:stoneObject3.body,
		bodyB:boyObject.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:stoneObject4.body,
		bodyB:boyObject.body,		
		pointB: {x:stoneDiameter, y:0}	

	}

	constraint5={
		bodyA:stoneObject5.body,
		bodyB:boyObject.body,		
		pointB: {x:stoneDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
//  boyObject.display();

  rope1.display()
  //rope2.display()
 // rope3.display()
 // rope4.display()
//  rope5.display()	
  stone1.display();
 // stoneObject2.display();
  //stoneObject3.display();
  //stoneObject4.display();
  //stoneObject5.display();
 boy1.display();
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(stoneObject1.body,stoneObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	stoneBodyPosition=constraint.bodyA.position
	boyBodyPosition=constraint.bodyB.position

	boyBodyOffset=constraint.pointB;
	
	boyBodyX=boyBodyPosition.x+boyBodyOffset.x
	boyBodyY=boyBodyPosition.y+boyBodyOffset.y
	line(stoneBodyPosition.x, stoneBodyPosition.y, boyBodyX,boyBodyY);
}






