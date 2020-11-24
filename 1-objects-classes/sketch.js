//create a variable called b to hold one ball

let b;
let anotherBall;
let ballAgain

let balls = [];

function setup() {

  createCanvas(800, 400);

  // construct the ball using the 'new' keyword
  b = new Ball (100, 100,"pink");
  ball2 = new Ball(200, 200, "orange");
}


function draw(){
	background("blue");
  b.moveBall();
  b.drawBall();

  for (let i = 0; i < balls.length; i++){
  	 balls[i].drawBall();
        balls[i].moveBall();
        
  	}

	  }


 //draw the ball called b (go look in the Ball class for the drawBall function)
 //move the ball called b (go look in the Ball class for the moveBall function)



//ball class from which to create new balls with similar properties.
class Ball {

  constructor(x,y,color){
		this.x = x;
    		this.y = y;
           this.color = color;
	  }
    drawBall(){
        	   stroke(0);
        	   fill(this.color);
             ellipse(this.x,this.y,10,10);
    	}

    moveBall(){
    	   this.x = this.x+2;
    	   this.y = this.y+.5;
    	}

      drawanotherBall(){
        stroke(0);
        fill(this.color);
        ellipse(this.x,this.y,10,10);

      }


  // here is where you'll put the instructions for making balls

}

function keyPressed(){
  let  b = new Ball(100, 100, "pink");
  balls.push(b);
  print(balls);
}
