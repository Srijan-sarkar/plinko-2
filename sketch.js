var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var plinkos =  [];
var divisions = [];

var score = 0,
    particle=null,
    turn = 0,
    gamestate = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}

function mousePressed(){
  if (gamestate!=="end"){
    turn++
    particle = new Particle(mouseX,0 ,10);
  }
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,100,50);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  if (particle!==null) {
     particle.display();
  
 
  if(particle.body.position.y>760){
    if(particle<300){
      score=score+500;
      
    }
    if(particle.body.position.x>300&&particle.body.position.x<600){
      score=score+200;
      
    }
    if(particle.body.position.x>600){
      score=score+100;
      
    }
  }   
}  
    
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  
}