class Bullet
{
    constructor(x,y,w,h)
    {
        var options ={
            isStatic: true,
            friction: 1,
            density: 1,
        }
        this.image = loadImage('assets/laser.png');
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w;
        this.h = h
        

        //flag value
       
        this.speed = 0.05;
        this.animation = [this.image];

        World.add(myWorld, this.body);
    }

    animate()
    {
        this.speed +=0.05;
    }

    remove(index)
    {
         this.isSink = true;
         Matter.Body.setVelocity(this.body, {x:0,y:0});

        
         this.speed = 0.05;
        // this.r =   150;
         
         setTimeout(()=>
         {
             Matter.World.remove(myWorld,this.body);
            // boats.splice(index,1);
            delete bullets[index];
         },1000)



    }

    shoot()
    {
       
       var loc = p5.Vector.fromAngle(sentry.angle);

       loc.mult(38);

       Body.setStatic(this.body, false);
       Body.setVelocity(this.body,{x:loc.x, y:loc.y});

    }

    display()
    {
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
        pop();
    }

       

      
    
}