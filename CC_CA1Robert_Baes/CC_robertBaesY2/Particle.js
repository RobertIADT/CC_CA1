class Particle{

    constructor() { //position of prticle
        this.x =350; 
        this.y =490;
        this.vx = random(-3, 3);    //width of spread, velocity of ellipse is moving at 3 pixels a frame right or left
        this.vy = random(-5, -1); //random velocity upwards
        this.opacity = 255; //base colour
        this.flame = 230;

    }

    update() {
        this.x += this.vx;
        this.y += this.vy; //changes the location by random amount between -5 and -1
        this.opacity -= 5;
    }

    show() {
        // stroke(255); //strength
        noStroke()
        fill(255, this.flame,0,this.opacity); //color
        ellipse(this.x, this.y, 16)
    }

    over(){
        return this.opacity <0;
    }

  

}

class Particle2{

    constructor() { //position of prticle
        this.x =350; 
        this.y =490;
        this.vx = random(-3, 3);    //width of
        this.vy = random(-5, -1); //random velocity upwards
        this.opacity = 255; //base colour
        

    }

    update() {
        this.x += this.vx;
        this.y += this.vy; //changes the location by random amount between -5 and -1
        this.opacity -= 2.5;
    }

    show() {
        // stroke(255); //strength
        noStroke()
        fill(255, 0,0,this.opacity); //color
        ellipse(this.x, this.y, 16)
    }

    over(){
        return this.opacity <0;
    }

  

}