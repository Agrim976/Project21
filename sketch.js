var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(windowWidth,windowHeight);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  wall = createSprite(windowWidth - 100, windowHeight/2, thickness, height/2);
  bullet = createSprite(0, windowHeight/2, 30, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;



}

function draw() {
  background(0); 
  
  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
  }

  drawSprites();
}

