' use strict ';
var bg_m,
    bg_s,
    bird_st,
    bird_d,
    bird_u,
    pipe_t,
    pipe_b,
    pipe_t_add,
    pipe_b_add;


function Sprite(img, x, y, width, height){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    
}

Sprite.prototype.draw = function(ctx,x,y){
    ctx.drawImage(this.img, this.x,this.y,this.w,this.h, x,y,this.w,this.h)
};


function initSprites(img) {
    bg_m = new Sprite(img, 0,0,290,500);
    bg_s = new Sprite(img, 295,0,300,110);
    bird_st = new Sprite(img, 525,175,37,29);
    bird_u  = new Sprite(img, 525,125,37,29);
    bird_d = new Sprite(img, 445,245,37,29);
    pipe_t = new Sprite(img, 605,0,52,270);
    pipe_t_add = new Sprite(img, 605,0,52,180);
    pipe_b = new Sprite(img, 660,0,52,240);
    pipe_b_add = new Sprite(img, 660,60,52,180);

    
}
