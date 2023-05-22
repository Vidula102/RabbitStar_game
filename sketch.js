
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rabbit; 
var star = []; 
var starcount;
var score = 0;
var music_btn;
var ground;

var bgImg;
var rabbit_jumpleft, rabbit_jumpright;

function preload(){
  bgImg = loadImage("background.jpg");
  
  rabbit_jumpleft = loadAnimation("00reversed.png","01reversed.png","02reversed.png","03reversed.png","04reversed.png","05reversed.png","06reversed.png","07reversed.png");
  rabbit_jumpright = loadAnimation("00original.png","01original.png","02original.png","03original.png","04original.png","05original.png","06original.png","07original.png")
  rabbitImg = loadImage("00original.png");

}


function setup() {
  createCanvas(500,700);

  engine = Engine.create();
  world = engine.world;
  
  var ground_options = {
    isStatic:true 
  }
  ground = Bodies.rectangle(450, 0, 500, 10, ground_options);
  World.add(world, ground);

  rabbit = createSprite(460, 350, 10, 10);
  rabbit.addImage(rabbitImg);


}


function draw() 
{
  background(51);
  image(bgImg, 0, 0, 500, 700);

  Engine.update(engine);
  
  drawSprites();
}

