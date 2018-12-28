var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function snake(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;


    this.draw = function(){
    c.fillRect(x,y,size,size);
    c.fillStyle = 'green';
    c.fill();
    }
}

let state = 'east';
let velocityX = 24;
let velocityY = 0;

function sQueue(head,data){
    this.head = head;
    this.data = data;
    
    this.enqueue = function(snake){
        this.data.push(snake);
        this.head ++;
    }
    this.dequeue = function(){
        this.data.shift();
        for(var i = 0; i<data.length; i++){
            data[i] = data[i+1];
        }this.head--;
    }
    this.getData = function(){
        return this.data;
    }

    this.slither = function(){
        if(this.getData().length > 1){
        this.dequeue();
        this.enqueue(new snake(this.getData()[head].x + velocityX,this.getData()[head].y + velocityY,24));
        }else{
            this.enqueue(new snake(255,255,24))
        }
    }
}

var dummy = [];
queue = new sQueue(0,dummy);
queue.enqueue(new snake(255,255,24));
//sQueue.dequeue();

function animate (){
    requestAnimationFrame(animate);
    console.log('oowoo')

    //sQueue.push(new snake(200,200,24));

    queue.slither();

    if(queue.getData().length > 1){
    for(var i = 0; i < queue.getData().length; i++){
        queue.getData()[i].draw();
    }
}
}

animate();

window.onload = function(){
    queue.enqueue(new snake(255+24,255,24));
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        velocityX = 0;
        velocityY = -24;
    }
    else if (e.keyCode == '40') {
        velocityX = 0;
        velocityY = 24;
    }
    else if (e.keyCode == '37') {
        velocityX = -24;
        velocityY = 0;
    }
    else if (e.keyCode == '39') {
        velocityX = 24;
        velocityY = 0;
    }

}