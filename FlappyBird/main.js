' use strict ';
var canvas,
    ctx,
    width = 350,
    height = 580,
    frames = 0,
    fps = 60,
    currentstate,
    states = {
        preGame: 1,
        game: 2,
        endGame: 3
    };

function main() {
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    var img = new Image();
    img.onload = function(){
        initSprites(this);
        drawLoop();
        currentstate = states.preGame;
    };
    img.src = 'img/sprite.png';
}

function drawBackgroundMain(){
    bg_m.draw(ctx,0,80);
    bg_m.draw(ctx,275,80);

}
function drawLoop() {
    setTimeout(function() {
        window.requestAnimationFrame(drawLoop);
        ctx.clearRect(0,0,width,height);
        drawBackgroundMain();
        
        frames ++;

        console.log("jump frame "+bird.jump_frame);

        switch(currentstate){
            case states.preGame:
                bird.bird_wait();
                break;
            case states.game:

                bird.jump_frame++;
                if(bird.jump_frame > 0 && Math.floor(bird.jump_frame / 10) <= 0.8){
                    bird.bird_jump();
                    bird.bird_fly();

                }

                else if(bird.jump_frame > 0 && Math.floor(bird.jump_frame / 10) > 0.8){
                    bird.bird_fall();

                }

                console.log("fall_speed "+bird.fall_speed);
                bird.gravity();
                bird.top_stop();
                if(bird.y >= height - bg_s.h - bird_st.h){
                    bird.bottom_stop();

                    pipes.pipe_frame = 0;
                }

                pipes.pipe_frame++;

                if(pipes.pipe_frame === 1){
                    pipes.pipeTop.y = pipes.pipeTop.random(pipes.pipeTop.yMax, pipes.pipeTop.yMin);
                    pipes.pipeBottom.y = pipes.pipeTop.y + pipe_t.h + 90
                }
                pipes.pipesDraw();
                break;
            case states.endGame:
                console.log("TODO: make endGame")
        }
        backgroundSecondary.drawBackgroundSecondary();
        backgroundSecondary.x1 -= 2;
        backgroundSecondary.x2 -= 2;
        if(frames % 70 == 0){
            backgroundSecondary.x1 = 0;
            backgroundSecondary.x2 = 295;
        }
        window.addEventListener('keydown', function(event){
            if(event.keyCode === 32){
                currentstate = states.game;
                bird.jump_frame = 0;
                bird.fall_speed = 0;


            }
        })

    }, 1000 / fps);
}


var backgroundSecondary = {
    x1:0,
    x2:295,
    y:470,
    drawBackgroundSecondary: function(){
    bg_s.draw(ctx,this.x1,this.y);
    bg_s.draw(ctx,this.x2,this.y);

    }   
};

var bird = {
    x:width/4,
    y:height/2,
    frame: 0,
    jump_frame:0,
    grav: 0.15,
    fall_speed: 0,
    max_speed: 8,

    bird_straight: function(){
        bird_st.draw(ctx,this.x,this.y);
    },
    bird_down: function(){
        bird_d.draw(ctx,this.x,this.y);

    },
    bird_up: function(){
        bird_u.draw(ctx,this.x,this.y);

    },
    bird_fly: function(){

        this.frame = Math.floor(this.jump_frame / 10);
        if(this.frame % 2 === 0){
            bird.bird_down()
        }
        
        else if(this.frame % 2 !== 0){
            bird.bird_up()
        }
    },
    bird_wait: function() {
        this.y = height/2 + 5*Math.cos(frames/10);
        bird.bird_straight();
    },
    bird_jump: function(){
        this.y -= 7 ;
    },
    bird_fall: function(){
        this.bird_straight();

    },
    gravity: function(){
        if(this.fall_speed < this.max_speed){
            this.fall_speed += this.grav;
        }
        else if(this.fall_speed > this.max_speed){
            this.fall_speed += 0;
        }

        this.y += this.fall_speed;
    },
    top_stop: function(){
        if (this.y <= 0){
            this.y += 20
        }
    },
    bottom_stop: function () {
        this.fall_speed /= 2;
        this.fall_speed *= -1;
        this.y = height - bg_s.h - bird_st.h
    }
};

pipes = {
    pipe_frame: 0,
    pipeTop: {
        yMax: 0,
        yMin: - 240,
        random: function(max, min){return Math.floor(Math.random() * (max - min + 1)) + min},
        x: width + 30,
        y: 0
    },
    pipeBottom: {
        x: width + 30,
        y:0
    },

    pipesDraw: function(){
        pipe_t.draw(ctx, this.pipeTop.x, this.pipeTop.y);
        this.pipeTop.x -= 2;

        pipe_b.draw(ctx, this.pipeBottom.x, this.pipeBottom.y);
        pipe_b_add.draw(ctx, this.pipeBottom.x,  this.pipeBottom.y + pipe_b.h);
        pipe_t_add.draw(ctx, this.pipeTop.x, this.pipeTop.y - pipe_t_add.h);
        this.pipeBottom.x -= 2;
        if(this.pipeTop.x <= -50){
            this.pipeTop.x = width + 30;
            this.pipeBottom.x = width + 30 ;
            this.pipeTop.y = this.pipeTop.random(this.pipeTop.yMax, this.pipeTop.yMin);
            this.pipeBottom.y = this.pipeTop.y + pipe_t.h + 90
        }

    }

};

main();
// function draw_bg(){
//     var bg_s = new Image();
//
//     bg_s.onload = function(){
//         ctx.drawImage(bg_s, 0,0,290,500, 0,80,290,500);
//         ctx.drawImage(bg_s, 0,0,290,500, 275,80,290,500);
//         ctx.drawImage(bg_s, 295,0,300,110, 0,470,300,110);
//         ctx.drawImage(bg_s, 295,0,300,110, 295,470,300,110);
//
//         ctx.drawImage(bg_s, 525,175,37,29, 150,200,37,29);
//         ctx.drawImage(bg_s, 525,125,37,29, 150,250,37,29);
//         ctx.drawImage(bg_s, 445,245,37,29, 150,300,37,29);
//
//         ctx.drawImage(bg_s, 605,0,50,270, 250,0,50,270);
//         ctx.drawImage(bg_s, 661,0,50,140, 250,330,50,140);
//     };
//     bg_s.src = 'img/sprite.png';
// }









// function Sprite(x, y, width, height){
//
//     this.x = x;
//     this.y = y;
//     this.w = width;
//     this.h = height;
// }
// var bg = new Sprite(0, 0, 290, 500);
//
// var canvas = document.createElement("canvas");
// var ctx = canvas.getContext("2d");
// document.body.appendChild(canvas);
// canvas.width = 320 ;
// canvas.height = 580;
//
//
//
//
//
// var img = new Image();
// img.src = 'img/sprite.png';
//
//
//
//
//
//
// img.onload = function(){ctx.drawImage(img, bg.x,bg.y,bg.w,bg.h, 0,80,bg.w,bg.h)};


// var background = new Image();
//
// background.onload = function(){ctx.drawImage(background, 0,0,270,225,  0,0,270,225)};
// background.src = 'img/sheet.png';
// ctx.drawImage(background, 0,0,270,225,  0,0,270,225 );



/*var imageObj = new Image();

 imageObj.onload = function() {
 ctx.drawImage(imageObj, 0, 0);
 };
 imageObj.src = 'img/sheet.png';
 */
