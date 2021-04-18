var ground, ground_image;
var boy, boy_running;

var invisibleboundary1, invisibleboundary2;

function preload() {
  //pre-load images

  ground_image = loadImage("path.png")
  boy_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG")
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  ground = createSprite(200, 200, 400, 400)
  ground.addImage(ground_image)
  ground.velocityY = 6;
  
  boy = createSprite(200,200,50,50)
  boy.addAnimation("running", boy_running);

  invisibleboundary1 = createSprite(25,200,100,400);
  invisibleboundary1.visible = false;
  
  invisibleboundary2 = createSprite(375,200,100,400);
  invisibleboundary2.visible = false;
}

function draw() {
  background(0);
  if (ground.y > 400) {
    ground.y = width / 2;
    
  }
  
  
        boy.x = World.mouseX;
  boy.collide(invisibleboundary1);
  boy.collide(invisibleboundary2);


  drawSprites();
}