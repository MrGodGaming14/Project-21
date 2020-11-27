var wall, thickness;
var bullet, speed, weight;
var deformation = 0;
var triplethickness


function setup() {
  createCanvas(1600, 400);


	speed=Math.round(random(223,321))
	weight=Math.round(random(30,52))

    thickness = random(22,83) 

	bullet = createSprite(50, 200, 50, 5);
	bullet.veloctiyX = speed;
	bullet.shapeColor = color(255);


  
  	wall=createSprite( 1200, 200, thickness, height/2)
	  wall.shapeColor=color(80,80,80)
	  
	triplethickness = thickness* thickness *thickness;
}


function draw() {
  background(0);
  bullet.velocityX=speed;

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
	  deformation=0.5 * weight * speed* speed / triplethickness;
	  
	  bullet.velocityX = 0;
	if(deformation<10)
	{
		wall.shapeColor=color("green");
	}else if(deformation>10)
	{
		wall.shapeColor=color("red");
	}


 console.log(deformation);
  } 
 
  
  drawSprites();
 
}