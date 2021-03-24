var canvas;

var surface1
 var surface2;
  var surface3;
  var surface4;
  var box;




function setup(){
    canvas = createCanvas(600,600);

    surface1=createSprite(100,600,100,20)
    surface1.shapeColor="green";

    surface2= createSprite(250,600,100,20)
    surface2.shapeColor="blue";

    surface3= createSprite(400,600,100,20)
    surface3.shapeColor="red";

     surface4= createSprite(550,600,100,20)
     surface4.shapeColor="orange";

    //create 4 different surfaces


box= createSprite(300,300,30,30)
box.velocityX = -10;
box.velocityY = 8;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges);

if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "green"
}

if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "blue"
}

if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "red"
}

if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "orange"
}


    //add condition to check if box touching surface and make it box
    drawSprites();
}
