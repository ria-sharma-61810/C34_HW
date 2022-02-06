
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var bg;
var ball, ball_img;
var rightButton;
var leftButton;
var upButton;
var downButton;
function preload(){
  bg_img = loadImage("maze.png")
  ball_img = loadImage("ball.png")
}


function setup() {
  createCanvas(400,400);
  ball = createSprite(40,30,20,20);
  rightButton = createImg('rightbtn.png')
  rightButton.position(180,0)
  rightButton.size(40,40)
  rightButton.mouseClicked(ballRight)

  leftButton = createImg('leftbtn.png')
  leftButton.position(90,0)
  leftButton.size(60,45)
  leftButton.mouseClicked(ballLeft)

  upButton = createImg('upbtn.png')
  upButton.position(230,0)
  upButton.size(40,40)
  upButton.mouseClicked(ballUp)

  downButton = createImg('downbtn.png')
  downButton.position(280,0)
  downButton.size(60,40)
  downButton.mouseClicked(ballDown)

  ball.addImage("ball_img",ball_img)
  ball.scale = 0.045
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(460);
  image(bg_img,0,0,width,height)
  
  Engine.update(engine);
  drawSprites();
  
}

function ballRight(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0})
}

function ballLeft(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.1,y:0})
}

function ballUp(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1})
}

function ballDown(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.1})
}
