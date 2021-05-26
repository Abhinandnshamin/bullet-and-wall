var bullet,wall;
var speed,weight,thickness
var damage

function setup() {
  createCanvas(1600,400);
  
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(400, 200, 100, 30);
  wall=createSprite(1500, 200, thickness, 200);
  damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
  

function draw() {
  background(80,80,80);
  speed=random(223,321)
  bullet.velocityX=speed;
  console.log(bullet.velocityX)
  if(damage < 10 && hasCollided() ){
    wall.shapeColour="green"
  
    return true
  }
  else if(damage > 10 && hasCollided() ){
    wall.shapeColor="red"
  
    return true
  }
  else {
    wall.shapecolor="yellow"
  
  }
  console.log(console.error())
}
drawSprites();

}
function hasCollided(){
 if(wall.x-bullet.x<bullet.width+wall.width &&
  bullet.x-wall.x < (bullet.width+wall.width)/2){
    bullet.velocity=0
  }
}
