var bgImg;  
var cat, catimg1, catimg2, catimg3;
var mouse, mouseimg1, mouseimg2, mouseimg3;

function preload() {

    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png")
    mouseimg1 = loadAnimation("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800,600,)
    cat.addAnimation("catseting",catimg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600,)
    mouse.addAnimation("mouseabc",mouseimg1);
    mouse.scale = 0.15;


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("tomsin",catimg3);
        cat.changeAnimation("tomsin");
        cat.x = 300;
        cat.scale = 0.2;

        mouse.addAnimation("mousesin",mouseimg3);
        mouse.changeAnimation("mousesin");
        mouse.scale = 0.15;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("tomimgs", catimg2);
      cat.changeAnimation("tomimgs");
      
      mouse.addAnimation("mouseTeashing", mouseimg2);
      mouse.changeAnimation("mouseTeashing");
      mouse.frameDelay = 25;  
    }


}
