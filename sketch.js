var fixedRect,movingRect


function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 100, 80);
  fixedRect.shapeColor="red";
  movingRect= createSprite(100,100,80,60);
  movingRect.shapeColor="orange";
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(  movingRect.x-fixedRect.x <movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y <movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y <movingRect.height/2+fixedRect.height/2)
    {
fixedRect.shapeColor="blue";
movingRect.shapeColor="blue";
  }
else{
  fixedRect.shapeColor="red";
  movingRect.shapeColor="orange";
}

  drawSprites();
}
