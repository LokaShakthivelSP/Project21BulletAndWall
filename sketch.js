var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1200,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  wall=createSprite(900,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);

  bullet=createSprite(50,200,40,15);
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);
  
  if(hasCollied(bullet,wall)){
    bullet.velocityX=0;
    
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage>=10){
      bullet.shapeColor=rgb(255,0,0);
    }else{
      bullet.shapeColor=rgb(0,255,0);
    }
  }

  drawSprites();
}

function hasCollied(obj1,obj2){

  bulletRightEdge=bullet.x+bullet.width/2;
  wallLeftEdge=wall.x-wall.width/2;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
}