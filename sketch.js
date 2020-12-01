
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeObj, stoneObj,groundObj, launcherObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14;
var boy,world
function preload()
{
	boy=loadImage ("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stoneObj = new stone(235,420,30); 
	treeObj = new tree(1050,580);
	groundObj = new ground(width/2,600,width,20);
	launcherObj = new launcher(stoneObj.body,{x:235,y:420});
  
	mango1=new mango(1010,100,30);
	mango2=new mango(1170,150,30);
	mango3=new mango(1010,160,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1200,200,30);
	mango6=new mango(1000,180,30);
	mango7=new mango(900,160,30);
	mango8=new mango(1000,150,35);
	mango9=new mango(1120,180,35);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,100,40);
	mango13=new mango(1000,60,40);
	mango14=new mango(1170,80,40);
   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  textSize(30);
  text("Press Space to get a second Chance!!",50 ,50);
  image(boy ,200,340,200,300);

  drawSprites();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mang11.display();
  mango12.display();
  mango13.display();
  mango14.display();

  stoneObj.display();
  treeObj.display();
  groundObj.display();
  launcherObj.display();

  function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }
}
}

