
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	paper = new Paper(30,370,20);
	trashside1 = new Trashcan(820,250,50,70);
	trashside2 = new Trashcan(870,250,90,50);
	trashside3 = new Trashcan(960,250,50,70);

    ground = new Ground(500,370,150,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);s
  background(0);
  Engine.update(engine);

  paper.display();
  trashside1.display();
  trashside2.display();
  trashside3.display();

  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



