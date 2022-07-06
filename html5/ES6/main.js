
// html에 그림 그리기 => canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight-100;

var dino = {
    x:10,
    y:200,
    width:50,
    height:50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
var img1 = new Image();
img1.src ='cactus.png';


class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img1, this.x, this.y);
    }
}


var timer =0;
var jumpTimer =0;
var cactuses =[];

function framrunfn(){
    anitmation=requestAnimationFrame(framrunfn);
    timer++;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    if(timer %120 === 0){
        var cactus = new Cactus();
        cactuses.push(cactus);  
    }
    cactuses.forEach((a, i, o)=>{
        if(a.x<-5){
            o.splice(i,1)
        }

        a.x-=2;
        collapse(dino,a);

        a.draw();
    });

    if( jumping == true){
        dino.y-=2;
        jumpTimer++;
    }
    if(jumping==false){
        if(dino.y<200){
            dino.y+=2;
        }
    }
    if(jumpTimer>100){
        jumping=false;
        jumpTimer=0;
    }

    dino.draw();
}

framrunfn();

function collapse(dino, cactus){
    var xdiff = cactus.x - (dino.x+dino.width);
    var ydiff = cactus.y - (dino.y+dino.height);
    
    if(xdiff <0 && ydiff<0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(anitmation);
    }

}





var jumping =false;
document.addEventListener('keydown', function(e){
    if (e.code ==='Space'){
        e.preventDefault();
        jumping =true;
        
    }
})