
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 485, 1200, 20);

	tree = new Tree(1000, 300, 20, 350);

	boy = new Boy(1100, 200, 20, 20);
	

}


function draw() {
	background("black");
	Engine.update(engine);
	
	ground.display();

	tree.display();

	boy.display();
  
}



