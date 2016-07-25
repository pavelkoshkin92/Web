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
        backgroundSecondary.drawBackgroundSecondary();
        backgroundSecondary.x1 -= 2;
        backgroundSecondary.x2 -= 2;

        frames ++;

        if(frames % 70 == 0){
            backgroundSecondary.x1 = 0;
            backgroundSecondary.x2 = 295;
        }
        

        //bird.bird_fly();
        //bird.bird_wait();
        switch(currentstate){
            case states.preGame:
                bird.bird_wait();
                break;
            case states.game:
                bird.bird_fly();
                break;
            case states.endGame:
                console.log("TODO: make endGame")
        }

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
        this.frame = Math.floor(frames / 10);
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
