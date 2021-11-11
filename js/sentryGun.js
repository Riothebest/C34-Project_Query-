class Sentry
{

    constructor(x,y,w,h,angle)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;

    }

    display()
    {
      this.angle = Math.random(-0.5,2.1);
        

        fill("grey");
        push();
        //shooter -> rect
        translate(this.x+10, this.y)
        rotate(this.angle);
        rect(-5,-0, this.w, this.h)
        pop();
        //cannon base -> arc
        arc(this.x-10, this.y+10, 10, 20, PI, TWO_PI);

    
    }
}