' use strict ';
var canvas,
    ctx,
    width = 350,
    height = 580,
    frames = 0,
    fps = 60,
    currentstate,
    score = 0,
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
                tap.draw(ctx,150,180);
                //window.removeEventListener('keydown', listener_preStart);
                window.addEventListener('keydown', listener);
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

                console.log("score: "+score);
                bird.gravity();
                bird.top_stop();
                bird.ground_check();

                pipes.pipe_frame++;

                if(pipes.pipe_frame === 1){
                    pipes.pipeTop.y = pipes.pipeTop.random(pipes.pipeTop.yMax, pipes.pipeTop.yMin);
                    pipes.pipeBottom.y = pipes.pipeTop.y + pipe_t.h + 90;
                    pipes.pipeTop2.y = pipes.pipeTop.random(pipes.pipeTop.yMax, pipes.pipeTop.yMin);
                    pipes.pipeBottom2.y = pipes.pipeTop2.y + pipe_t.h + 90
                }
                pipes.pipesDraw();
                pipes.pipesDraw2();
                pipes.check();
                break;
            case states.endGame:

                pipes.pipe_frame = 0;
                bird.jump_frame = 0;
                bird.gravity();
                bird.bird_straight();
                bird.bottom_stop();
                game_over.draw(ctx, 80, 120);
                //window.addEventListener('keydown', listener_preStart);


                break;
        }
        backgroundSecondary.drawBackgroundSecondary();
        backgroundSecondary.x1 -= 2;
        backgroundSecondary.x2 -= 2;
        if(frames % 70 == 0){
            backgroundSecondary.x1 = 0;
            backgroundSecondary.x2 = 295;
        }


    }, 1000 / fps);
}

var listener = function(event){
    if(event.keyCode === 32){
        currentstate = states.game;
        bird.jump_frame = 0;
        bird.fall_speed = 0;


    }
};
var listener_preStart = function(event){
    if(event.keyCode === 32){
        currentstate = states.preGame;
    }

};
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
    grav: 0.18,
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
        this.y -= 6 ;
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
        this.y = height - bg_s.h - bird_st.h;

    },
    ground_check: function(){
        if(bird.y >= height - bg_s.h - bird_st.h){
            window.removeEventListener("keydown", listener);
            this.bottom_stop();
            setTimeout('currentstate = states.endGame', 1200)



        }

    }
};

pipes = {
    pipe_frame: 0,
    pipeTop: {
        yMax: 50,
        yMin: - 240,
        random: function(max, min){return Math.floor(Math.random() * (max - min + 1)) + min},
        x: width + 30,
        y: 0
    },
    pipeBottom: {
        x: width + 30,
        y:0
    },
    pipeTop2: {
        x: width + 230,
        y: 0
    },
    pipeBottom2: {
        x: width + 230,
        y:0
    },

    pipesDraw: function(){
        pipe_t.draw(ctx, this.pipeTop.x, this.pipeTop.y);
        this.pipeTop.x -= 2;
        this.pipeBottom.x -= 2;
        pipe_b.draw(ctx, this.pipeBottom.x, this.pipeBottom.y);
        pipe_b_add.draw(ctx, this.pipeBottom.x,  this.pipeBottom.y + pipe_b.h);
        pipe_t_add.draw(ctx, this.pipeTop.x+2, this.pipeTop.y - pipe_t_add.h);

        if(this.pipeTop.x <= -50){
            this.pipeTop.x = width + 30;
            this.pipeBottom.x = width + 30 ;
            this.pipeTop.y = this.pipeTop.random(this.pipeTop.yMax, this.pipeTop.yMin);
            this.pipeBottom.y = this.pipeTop.y + pipe_t.h + 90
        }

    },
    pipesDraw2: function(){
        pipe_t.draw(ctx, this.pipeTop2.x, this.pipeTop2.y);
        this.pipeTop2.x -= 2;
        this.pipeBottom2.x -= 2;
        pipe_b.draw(ctx, this.pipeBottom2.x, this.pipeBottom2.y);
        pipe_b_add.draw(ctx, this.pipeBottom2.x,  this.pipeBottom2.y + pipe_b.h);
        pipe_t_add.draw(ctx, this.pipeTop2.x+2, this.pipeTop2.y - pipe_t_add.h);

        if(this.pipeTop2.x <= -50){
            this.pipeTop2.x = width + 30;
            this.pipeBottom2.x = width + 30 ;
            this.pipeTop2.y = this.pipeTop.random(this.pipeTop.yMax, this.pipeTop.yMin);
            this.pipeBottom2.y = this.pipeTop2.y + pipe_t.h + 90
        }

    },
    check: function(){

        if(bird.x + bird_st.w >= this.pipeTop.x && bird.x <= this.pipeTop.x + pipe_t.w) {
            if (bird.y > this.pipeTop.y + pipe_t.h && bird.y + bird_st.h < this.pipeBottom.y) {
                if(bird.x === this.pipeTop.x + pipe_t.w){
                    score++
                }

            }
            if (bird.y <= this.pipeTop.y + pipe_t.h) {
                window.removeEventListener("keydown", listener);
                bird.y += 8;
                setTimeout('currentstate = states.endGame', 1800);


            }
            if (bird.y + bird_st.h >= this.pipeBottom.y) {
                window.removeEventListener("keydown", listener);
                bird.y -= 2;
                setTimeout('currentstate = states.endGame', 1800);


            }
        }




        if(bird.x + bird_st.w >= this.pipeTop2.x && bird.x <= this.pipeTop2.x + pipe_t.w) {
            if (bird.y > this.pipeTop2.y + pipe_t.h && bird.y + bird_st.h < this.pipeBottom2.y) {
                if(bird.x === this.pipeTop2.x + pipe_t.w){
                    score++
                }

            }
            if (bird.y <= this.pipeTop2.y + pipe_t.h) {
                window.removeEventListener("keydown", listener);
                bird.y += 8;
                setTimeout('currentstate = states.endGame', 1800);


            }
            if (bird.y + bird_st.h >= this.pipeBottom2.y) {
                window.removeEventListener("keydown", listener);
                bird.y -= 2;
                setTimeout('currentstate = states.endGame', 1800);


            }
        }

    }

};

main();
