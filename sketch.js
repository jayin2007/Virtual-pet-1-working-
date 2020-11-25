var dog, happyDog; 
var database; 
var foodS, foodStock;


function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  foodStock = database.ref('food')
  foodStock.on("value",readStock)

  
 doggy = createSprite(250,300,150,120);
 doggy.scale = 0.15
doggy.addImage(dog);

}


function draw() {  
background (46, 139, 87)

if (keyWentDown(UP_ARROW)){
  writeStock(foodS)
  doggy.addImage(happyDog)
}
  drawSprites();

  textSize(20)
  text("Press Up Arrow To feed Max Milk",100,100)

  //add styles here

}

function readStock(data){

  foodS = data.val()
}

function writeStock(x){

if(x<=0){
x = 0;

}
else{
x= x-1

}

  database.ref('/').update({food : x})
}


