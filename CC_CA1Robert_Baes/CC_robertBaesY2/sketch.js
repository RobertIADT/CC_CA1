let particles = []; //an array of particles
let smokes = []; 



function setup() {
    createCanvas (700, 500);
    eye = new Eye(width/2,height/2,0)
    console.log(eye);

}

function draw() {
  
   
    background(0);
    // eye.drawEye();
    // eye.drawEye2();
    // eye.drawEye3();
    // eye.drawEye4();
    
    // if (this.y < -490){
    //     this.flame = 0;
    // }
    for (let i = 0; i < 1; i++) {
        smokes.push(new Smoke);
    }

    for (let i = 0; i < smokes.length; i++) {

        smokes[i].move();
        smokes[i].render();

    }

    for (let i = 0; i<100; i++){
        let p = new Particle();
    particles.push(new Particle); //adds an object into the array
    }
    // for (let i =this.flame; i<= 0; i--){}

    for (let i = 0; i<30; i++){
        let p = new Particle2();
    particles.push(new Particle2); //adds an object into the array
    }
    
    for (let i =particles.length-1; i >=0 ; i--){   //iterate particle into the array, loop starts backwards to delete particles in the array that reach 0 without skipping particles in the count
        particles[i].show();
        particles[i].update();
        
        if (particles[i].over()) 
        particles.splice(i, 1); //removes element from the array at the (i) position
    }
    
    eyes();
    // p.show();//call particle only one
}

function eyes ()
{
    let e_x1 = map(mouseX, 0, 255, 299, 301); //sets paramenters of where the elipses can follow mouse
    let e_x2 = map(mouseX, 0, 255, 399, 401); 
    let e_y = map(mouseY , 0, 255, 365, 368);

    noStroke();
    strokeWeight(1);
    fill(255)
    ellipse(300 , 370, 40);
    ellipse(400 , 370, 40);

    fill(255,100,200)
    ellipse(e_x1 , e_y, 10, 20);
    ellipse(e_x2, e_y, 10, 20);
}

