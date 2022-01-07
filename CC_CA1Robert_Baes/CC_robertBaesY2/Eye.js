class Eye{

    constructor(){
        this.x= 300;
        this.y= 100;
        this.iris = 0;
        // this.a= a;
        // this.b = b;
    }

    follow(){
		this.a = mouseX-this.a;
		this.b= mouseY-this.b;
		// this.angle= atan2(this.dy, this.dx);
	}

    drawEye(){
        stroke(255);
        fill(255,255,255);
        ellipse(this.x, this.y, 40)
    }

    drawEye2(){
        stroke(255);
        fill(255,255,255);
        ellipse(this.x + 100, this.y, 40)
    }

    drawEye3(){
        stroke(255);
        fill(0,0,0);
        ellipse(this.x + 100, this.y, 15)
    }
    drawEye4(){
        stroke(255);
        fill(0,0,0);
        ellipse(this.x , this.y, 15)
    }
}