var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
   fixedRect.velocityY = 5;
   movingRect.velocityY = -5;
}

function draw() {
  background(0);  
 
  if ( movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2&& 
    fixedRect.x - movingRect.x<fixedRect.width/2 + movingRect.width/2) {
      fixedRect.velocityX = fixedRect.velocityX *-1;
      movingRect.velocityX = movingRect.velocityX*-1;

  }
  if (fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2&&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.velocityY = fixedRect.velocityY*-1;
    movingRect.velocityY = movingRect.velocityY*-1;
  }
  
  

  drawSprites(); 
}