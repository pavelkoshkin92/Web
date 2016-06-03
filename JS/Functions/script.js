var a = +prompt("Enter a");
var b = +prompt("Enter b");
var c = +prompt("Enter c");
var d = +prompt("Enter d");

function sq_1(a,b) {
    return a * b;
};
function sq_2(c,d) {
    return c * d;
}
function diff(d1, d2) {
    if(sq_1>sq_2){
        console.log("The first is bigger, it's " + sq_1)
    }
    else if(sq_2>sq_1){
        console.log("The second bigger, it's " + sq_2)
    }
    else if(sq_1==sq_2){
        console.log("They are equal")
    }
}