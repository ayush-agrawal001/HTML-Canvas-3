var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx; 
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "Black";
        c.stroke();
        c.fillStyle = "rgba(200,0,0,0.5)"
        c.fill();        
    }
    this.update = function(){
        
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];
for (let i = 0; i < 100; i++) {

    var x = Math.random() * (innerWidth - 2*radius) + radius ;
    var dx = (Math.random()- 0.5) * 10 ;
    var radius = 50;
    var y = Math.random() * (innerHeight - 2*radius) + radius ;
    var dy = (Math.random() - 0.5) * 10 ;

    circleArray.push(new Circle(x,y,dx,dy,radius));
    
}

function anima_circle(){
    requestAnimationFrame(anima_circle);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for (let i = 0; i < circleArray.length ; i++) {
        circleArray[i].update();
    }
    circle.update();
}


anima_circle();