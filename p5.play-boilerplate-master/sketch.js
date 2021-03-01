var fixed 
var moving 
var square 
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,50,50);
  square = createSprite(400,300,50,50);  
}

function draw() {
  background(255,255,255);  
  moving.x = mouseX
  moving.y = mouseY
  drawSprites();
  collison(moving,fixed); 
  collison(moving,square); 
    }
function collison(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 
    && object2.x - object1.x <  object1.width/2 + object2.width/2 
    && object1.y - object2.y < object1.height/2 +  object2.height/2 
    && object2.y - object1.y < object1.height/2 + object2.height/2){
      object2.shapeColor = "Red"; 
      object1.shapeColor = "Blue"; 
    }
    else {
      object2.shapeColor = "Black"
      object1.shapeColor = "Black"
    }
}