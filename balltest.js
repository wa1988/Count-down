/**
 * Created by wangchao on 16/6/22.
 */

var ball = {x: 512 , y: 100, r: 20, g: 2, vx: -4, vy: -10, color: "red"};

window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = 1024;
    canvas.height = 768;

    setInterval(function () {


        render( context )
        update();
    }, 50)

};

function update(){
    ball.x += ball.vx
    ball.y += ball.vy;
    ball.vy += ball.g;

    if(ball.y >= canvas.height - ball.r ){
        ball.y = canvas.height - ball.r;
        ball.vy = - ball.vy * .6;
    }
}

function render( ctx ){

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc( ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.closePath();

    ctx.fill();
}
