const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Army;
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score=0;
var life=10;
var gameState = "onSling";
var bg = "sprites/bg.png";
//function preload() {
//    backgroundImg = loadImage("sprites/bg2.png");
   //getBackgroungImg();
//}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,0,1200,20);
    ground2 = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    platform1= new Ground(970, 122, 100, 10);
    platform2= new Ground(961, 230, 100, 10);
     wall1 = new Ground(1200,200,20,1200);
     wall2 = new Ground(0,200,20,1200);
    box1 = new Box(810,320,70,70);
    box2 = new Box(520,320,70,70);
    pig1 = new Pig(810, 350);
 
    pig2 = new Pig(955, 170);
    pig3 = new Pig(960,70);

    pig5 = new Pig(810, 320);
    pig6 = new Pig(810, 320);
    pig7 = new Pig(1110, 350);

 

    bird = new Bird(200,50);


    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   
        background(13,151,110);
   
    textSize(35);
    fill("white");
    text("Score: "+score,width-300,40);
    if(score>700){
        text("WIN Score * Life ="+score*life+score,600,200);
    }
    text("life : "+life ,30,70);

    if(keyCode > 108){
        text ("Cheater",600,400);
    }
    
    
          if(life<1&&score<700){
              text("YOU LOOSE",600,400);
          }
          Engine.update(engine);
   
   
    box1.display();
    box2.display();
    ground1.display();
    ground2.display();
    pig1.display();
   
    wall1.display();
    wall2.display();

    pig2.display();
    pig3.display();

    pig5.display();
    pig6.display();
    pig7.display();
  
    pig1.score();
    pig2.score();
    pig3.score();
   
    box1.score();
    box2.score();
    
    
    pig5.score();
    pig6.score();
    pig7.score();
    
    bird.display();
   platform.display();
   platform1.display();
   platform2.display();
 
    slingshot.display();    
   
    if(keyCode === 108 ){
        life=life+1;
    }
  
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32&& life>0){
        slingshot.attach(bird.body);
        gameState="onSling";
        life=life-1;
    }
   
    
}

   


