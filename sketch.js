var rect1,rect2;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(200, 200, 50, 80);
  rect1.shapeColor="purple";
  rect2=createSprite(400,200,50,80);
  rect2.shapeColor="purple";
  
}

function draw() {
  background(255,255,255);  
  console.log(rect2.x-rect1.x);
  rect2.x=mouseX;
  rect2.y=mouseY;
  if(rect2.x-rect1.x < rect1.width/2+rect2.width/2 && rect1.x-rect2.x < rect1.width/2+rect2.width/2 &&
    rect2.y-rect1.y < rect1.height/2+rect2.height/2 && rect1.y-rect2.y < rect1.height/2+rect2.height/2)
  {
    rect1.y=50;
    rect1.x=50;
  }
  else
  {
    rect1.shapeColor="purple";
    rect2.shapeColor="purple";
  }

  drawSprites();
}