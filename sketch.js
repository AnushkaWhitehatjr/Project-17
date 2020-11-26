
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananasGroup, obstacleGroup;
var ground;
var survivalTime = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(90,400,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(250,450,500,15);
  ground.velocityX = -5;
  ground.shapeColor = "rgb(41, 16, 0)";

  
}


function draw() {
  
  createEdgeSprites();
  
  background("lightblue");
  
  textSize(20);
  stroke("black");
  fill("black");
  text("Survival Time: "+survivalTime, 330,35);
  survivalTime = Math.ceil(frameCount/frameRate());
  
  ground.x=ground.width/2;
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  //monkey.collide(edge3);
  
  if(keyDown("space"))
  {
    monkey.velocityY = -10;
  }
  
  Bananas();
  Obstacles();

  drawSprites();
}

function Bananas()
{
  if(frameCount % 80 === 0)
  {
    banana = createSprite(500,10,10,10);
    banana.velocityX = -10;
    banana.addImage(bananaImage);
    banana.scale = 0.12;
    banana.y = Math.round(random(100,400));
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}

function Obstacles()
{
  if(frameCount % 300 === 0)
  {
    obstacle = createSprite(500,402,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -10;
    obstacle.scale = 0.2;
  }
}
