class Smoke {
    constructor() {
        this.posX = Math.round(Math.random() * 700); //psudo random values
        this.posY = Math.round(Math.random() * 700);
        this.radius = Math.round(Math.random() * 40 + 1);
        this.xSpeed = Math.round(Math.random() * 0 );
        this.ySpeed = Math.round(Math.random() * -2 - 1);
        this.opacity = 255;
        this.col = 200;
    }

    changeColor() {
    this.col -=1;
    }

    render() {
        fill(200,this.col,200,this.opacity);
        ellipse(this.posX, this.posY, this.radius, this.radius)
    }
    move() {
        this.opacity -=1;
        this.posX += this.xSpeed;
        this.posY += this.ySpeed;
        if(this.posX>680){this.xSpeed=-4}
        if(this.posX<20){this.xSpeed=4}
        if(this.posY<0){this.ySpeed=0}

    }
    over(){
        return this.opacity <0;
    }
    
}
