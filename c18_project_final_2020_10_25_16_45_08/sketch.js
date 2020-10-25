var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey_1,monkey;
var jungle_1;
var stone_1;
var BananaGroup,RocksGroup;
var banana_1;

var edges;

var count = 0;




function preload(){
  
  monkey_1 = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png",  "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  banana_1 = loadImage("banana.png");
  stone_1 = loadImage("stone.png");
  jungle_1 = loadImage("jungle.jpg");
  
}

function setup(){
  
  createCanvas(800,800)
  
  monkey = createSprite(200,200,20,50);
  monkey.addAnimation("monkey1", monkey_1);
  monkey.setCollider("rectangle",0,0,600,600);
  monkey.scale = 0.15;
  monkey.x = 50;
  monkey.debug = true;
  
  edges = createEdgeSprites();
  
  BananaGroup = new Group();
  RocksGroup = new Group();
  
  
}

function draw() {

  background(jungle_1);
  
  textSize(30);
  textFont("Georgia");
  textStyle(BOLD);
  fill("white");
  text("score: "+ count, 500, 100);
  
  if(gameState === PLAY){
    
    if(keyDown("space") && monkey.y >= 375){
      monkey.velocityY = -21 ;
    }
    
    if(monkey.isTouching(RocksGroup)){
      monkey.scale = 0.2;
      
    }
    if(monkey.isTouching(BananaGroup)){
      count = count+2;    
    }
    
    if(monkey.isTouching(BananaGroup)){
      BananaGroup.destroyEach();
    }
    
    monkey.velocityY = monkey.velocityY + 1.2;
    spawnBanana();
    spawnRocks();
}

  createEdgeSprites();
  monkey.collide(edges[3]);
  
  drawSprites();
}

function spawnRocks() {
  if(World.frameCount % 135 === 0) {
    var rocks = createSprite(800,770,10,40);
    rocks.velocityX = - (6 + 3*count/100);
    
    rocks.addImage("Stone",stone_1);
    
    rocks.scale = 0.15;
    rocks.lifetime = 1000;

    RocksGroup.add(rocks);
}}

function spawnBanana() {

  if (World.frameCount % 60 === 0) {
    var banana = createSprite(800,0,40,10);
    banana.y = random(500 ,600);
    banana.addImage("banana",banana_1);
    banana.scale = 0.07;
    banana.velocityX = -3;
    
    banana.lifetime = 1000;
    
    banana.depth = banana.depth;
    monkey.depth = monkey.depth + 1;
    
    BananaGroup.add(banana);
}}