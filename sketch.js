var rabbit;
var background;
var carrot;
var carrotGroup;
var score=0;
var InvisibleGround;
var gameState = "tutorial";
var gameOver;
var welcome;
var background1;

function preload(){
backgroundImg = loadImage("Images/BACKGROUND.jpg");
treeImg = loadImage("Images/tree.png");
rabbitImg = loadImage("Images/rabit.png")
carrotImg = loadImage("Images/carrot.png");
gameOverImg = loadImage("Images/gameover.png");
welcomeImg = loadImage("Images/welcome.png");
background1Img = loadImage("Images/backgroun.jpg");
}

function setup() {
  createCanvas(1280,720);
  rabbit = createSprite(640,600,50,50);
  carrotGroup = new Group();
  InvisibleGround = createSprite(640,720,1280,1);
  //invisible ground
  InvisibleGround.visible = false;
  welcome = createSprite(600,200);
  welcome.addImage(welcomeImg);

}

function draw() {


 if(gameState === "tutorial"){
  background(background1Img);
  welcome.visible = true;
  textSize(78);
  fill("brown");
  text("CONTROLS",300,400);
  textSize(38);
  fill("white");
  text("press left arrow to move right and left arrow to move left",300,450);
  textSize(50);
  fill("green");
  text("Press up arrow key to start",300,550);

  if(keyDown("UP_ARROW")){

    gameState = "play";
    

  }

  rabbit.visible = false;

 
  drawSprites();
 }


  if(gameState === "play"){ 
  
   
 background(backgroundImg);
 background.depth = 20;
 welcome.depth = 0;
 welcome.visible = false;

 rabbit.visible = true;
 


  rabbit.addImage(rabbitImg);
  rabbit.scale = 0.1;
  

//makes the score
  fill("red");
  textSize(30);
  text("score "+score,1000,100);
  
//controls for rabbit

if(keyDown("LEFT_ARROW")){
  rabbit.x = rabbit.x - 10;
  }

  if(keyDown("RIGHT_ARROW")){
    rabbit.x = rabbit.x + 10;
    }

    if(rabbit.isTouching(carrotGroup)){
      carrotGroup[0].destroy();
      score = score+10;
    }
 
    if(InvisibleGround.isTouching(carrotGroup)){
      score = score - 10;
      carrotGroup[0].destroy();
    }
 
    if(score < -1 ){
       gameState = "end";
    }
   
    
 spawnCarrots();
  


 

 drawSprites();
  }

 if(gameState === "end"){
   
  background("white");
   gameOver = createSprite(650,400);
   gameOver.addImage(gameOverImg);
   gameOver.depth = 500;
   gameOver.scale = 0.28;
   rabbit.visible = false;
   carrotGroup.visible = false;
   welcome.destroy();
   drawSprites();
  
  
 
  }
}


function spawnCarrots(){

if(frameCount % 60 === 0){
  var carrot = createSprite(640,40,50,50)
  carrot.scale = 0.1;
  
  carrot.addImage(carrotImg);
  carrot.velocityY = 5;
  carrot.lifetime = 700;
  carrot.x = Math.round(random(0,1280));
  carrotGroup.add(carrot);

}

}



  


