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

        let r = Math.random()*255
        let g = Math.random()*255
        let b = Math.random()*255
        let a = Math.random()

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.strokeStyle = `rgba(${r},${g},${b},${a})`;
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
    var x = Math.random() * (innerWidth - radius*2) + radius;
    var y = Math.random() * (innerHeight -radius*2) + radius;
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