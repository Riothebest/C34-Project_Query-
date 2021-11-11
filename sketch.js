const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render= Matter.Render;

var myEngine, myWorld;

var spaceship, spaceshipImg;
var heroPlane, heroPlaneImg;
var backgroundImg;
var sentry;
var laser,laserImg;
var bullets=[];
function preload()
{
  spaceshipImg = loadImage('assets/spaceship.png')
  heroPlaneImg = loadImage('assets/heroplane.png');
  backgroundImg = loadImage('assets/background.png')
  laserImg= loadImage('assets/laser.png');
}

function setup(){
    createCanvas(1500,700);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    
  //spaceship = createSprite(200,200,10,10);
  //spaceship.addImage(spaceshipImg);
  var spaceShip_options={
    isStatic:true,
  }
  spaceship = Bodies.rectangle(20,600,20,20,spaceShip_options)

  var heroPlane_options={
    isStatic:true,
  }
  heroPlane = Bodies.rectangle(1300,200,20,20,heroPlane_options)

  angle = -PI/4
  sentry = new Sentry(185, 590, 10, 10,angle);
  
  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options: {
        width: 1500,
        height: 700,
        wireframes: false
    }
});
Render.run(render);
}

function draw(){
    //background(backgroundImg);
    background(111);
    Engine.update(myEngine);

    imageMode(CENTER);
    image(spaceshipImg,spaceship.position.x,spaceship.position.y,420,190);
    image(heroPlaneImg,heroPlane.position.x,heroPlane.position.y,200,100);
    
    keyReleased();
   //drawSprites();
   sentry.display();

   if(frameCount%50 == 0)
   {
    laser = new Bullet(sentry.x-20,sentry.y-100,100,10)
    bullets.push(laser);
     for(var i =0;i<bullets.length;i++)
     {
      
    bullets[i].shoot();
    bullets[i].display();
      //showBullet(bullets[i],i)
     /* if(collide(bullets,heroPlane)=== true)
      {
        console.log("ded");
      }*/
     }
   }

   if(collide(spaceship,heroPlane)=== true)
   {
     //delete spaceship;
     console.log("lol")
   }
  
}


   
function keyReleased()
{
  if(keyCode ===DOWN_ARROW)
  {
    heroPlane.position.y += 5;
    
  }
  if(keyCode === UP_ARROW)
  {
    heroPlane.position.y += -0.5
  }
  if(keyCode ===RIGHT_ARROW)
  {
    heroPlane.position.x += 0.5;
    
  }
  if(keyCode === LEFT_ARROW)
  {
    heroPlane.position.x += -5
  }
  if(keyCode ===32)
  {
    heroPlane.position.y += 0;
    heroPlane.position.x += 0;
  }
 
}

function showBullet(ball, index)
{
    
        
   // ball.shoot();
  
    /*if(ball.body.position.x >=width || ball.body.position.y >= height -100)
    {     
      ball.remove(index);
         
    }*/
}

function collide(body1,body2)
{
  if(body1!=null)
  {
    var d = dist(body1.position.x,body1.position.y,body2.position.x,body2.position.y);
    if(d<=100)
    {
      return true
    }
    else{
      return false
    }
  }
}