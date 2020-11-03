
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  score=0;
  monkey=createSprite(100,290,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.2;
  
  ground=createSprite(400,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
 bananaGroup= new Group();
  obstacleGroup = new Group();
  
}


function draw() {
background('skyblue');
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    
      monkey.velocityY=-12;
    }
  monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
  
  spawnfood();
  spawnobstacle();
  
  var survivalTime
  stroke('white');
  textSize('25');
  fill('white');
  text('Score : '+score,500,50)
  
  stroke('black');
  textSize("25");
  fill('black');
  survivalTime=Math.round(frameCount/frameRate());
  text('Survival time : '+survivalTime,100,50)

  
  drawSprites();
}

function spawnfood()
{
  if(frameCount%80===0){
  var banana=createSprite(500,80,10,20)
  banana.addImage(bananaImage)
  banana.scale=0.1;
  banana.velocityX=-3;
    banana.y=Math.round(random(70,120))
  banana.lifetime=170;
    bananaGroup.add(banana)
  
  }   }
  
function spawnobstacle()
{
  if(frameCount%200===0){
    var obstacle=createSprite(450,310,20,30);
    obstacle.addImage(obstacleImage)
  obstacle.scale=0.2
    obstacle.velocityX=-3
    obstacle.lifetime=170;
  }
  
}




