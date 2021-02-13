var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var staticOption;
var gravityOption;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() 
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);


	gravityOption={
		isStatic:false  
	  }

	 staticOption={
		isStatic:true   
	  }

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30,staticOption);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);
	
  keyPressed();
  
  drawSprites();
  

}

function keyPressed() {
	//write code here
	if(keyDown("left_arrow")&& star.y<470){
		fairy.x=fairy.x-10;
	}

	if(keyDown("right_arrow")&& star.y<470){
		fairy.x=fairy.x+10;
	}

	if(keyDown("down_arrow")){
		star.velocityY=8
		//starBody = Bodies.circle(650 , 100 , 5 , {restitution:0.5, isStatic:false});
		//World.add(world, starBody)
	}

	if(star.position.y>470){
		star.velocityY=0
		fairy.velocityX=0
		fairy.x=519
	}

	if(star.isTouching(fairy)){
		fairy.x=fairy.x;
	}

}
