var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function Circle(x, y, velocityX, velocityY, radius) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radius = radius;

    this.draw = function () {

        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        let a = Math.random()

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.strokeStyle = `rgba(${r},${g},${b},${a})`;
        c.fillStyle = `rgba(${r},${g},${b},${a})`;
        c.fill();
        c.stroke();

    }

    this.update = function () {
        if (this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
            this.velocityX = -this.velocityX;
        }
        if (this.y + this.radius >= innerHeight || this.y - this.radius <= 0) {
            this.velocityY = -this.velocityY;
        }

        this.x += this.velocityX;
        this.y += this.velocityY;

        this.draw();
    }
}

var circleArray = [];

for (let index = 0; index < 100; index++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var velocityX = (Math.random() - 0.5) * 6;
    var velocityY = (Math.random() - 0.5) * 6;
    var radius = 69;

    circleArray.push(new Circle(x, y, velocityX, velocityY, radius));
}

//create a loop
function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let index = 0; index < circleArray.length; index++) {

        circleArray[index].update();

    }

}

animate();

canvas.onmousedown = function(){

console.log('42');

    for (var i = 0; i < circleArray.length; i++) {
//x
        if (circleArray[i].x > window.event.clientX) {
            if (circleArray[i].velocityX > 0) {
                circleArray[i].velocityX = -circleArray[i].velocityX;
            } else if (circleArray[i].velocityX == 0) {
                circleArray[i].velocityX = -2;
            }//lower than 0 is fine

        } else if (circleArray[i].x == window.event.clientX) {
            circleArray[i].velocityX = 0;
        }
        
        else if (circleArray[i].x < window.event.clientX) {
            if (circleArray[i].velocityX < 0) {
                circleArray[i].velocityX = -circleArray[i].velocityX;
            } else if (circleArray[i].velocityX == 0) {
                circleArray[i].velocityX = 2;
            }//greater than 0 is fine
        }
//y
        if (circleArray[i].y > window.event.clientY) {
            if (circleArray[i].velocityY > 0) {
                circleArray[i].velocityY = -circleArray[i].velocityY;
            } else if (circleArray[i].velocityY == 0) {
                circleArray[i].velocityY = -2;
            }//lower than 0 is fine

        } else if (circleArray[i].y == window.event.clientY) {
            circleArray[i].velocityY = 0;
        }
        
        else if (circleArray[i].y < window.event.clientY) {
            if (circleArray[i].velocityY < 0) {
                circleArray[i].velocityY = -circleArray[i].velocityY;
            } else if (circleArray[i].velocityY == 0) {
                circleArray[i].velocityY = 2;
            }//greater than 0 is fine
        }

    }

};

// for(var i = 0; i < 100; i++){

//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     var r = Math.random() * 255;
//     var g = Math.random() * 255;
//     var b = Math.random() * 255;
//     var a = Math.random();

//     c.beginPath();
//     c.arc(x,y,69,0,Math.PI * 2);
//     c.strokeStyle = `rgba(${r},${g},${b},${a})`;
//     c.stroke();


// }