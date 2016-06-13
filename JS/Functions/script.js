/*var a = +prompt("Enter a");
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
    */

/////anonym func 1
/*function getResult(){
    return 1;
}
var getAnotherResult = function(){
    return function (){
        return 4;
    };
};
function alertResult(func){
    console.log(func());
}

alertResult(function(){
    return 3;
});
console.log(getAnotherResult()());


/////2
var profile = {
    name: "max",
    age: 24,
    sayHello: function(){
        console.log("Hello");
    },
    actions: [
        function(){
            return 1
        },
        function(){
            return 2
        }
    ]
};
profile.sayHello();
console.log(profile.actions[0]());

////////3 callback
console.log(1);

setTimeout(function(){
    console.log(2);
}, 1000);

console.log(3);
*/

///
/*
 function _1(){
     return function _2(){
         return 2;
     }
 }
var returnedFunc = _1(),
    result = returnedFunc();

console.log(returnedFunc);
console.log(result);
console.log("===================");

///closure

function counter(){
    var i=0;

    return function tick(){
        console.log(i++);
    }
}

var count = counter();
var count_2 = counter();
count();
count();
count();
count();
count();


console.log("--------------");


count_2();
count_2();
count_2();
count_2();
count_2();

console.log("===================");

//examples

function initHelloTimer(){
    var msg = 'Hello';

    setTimeout(function(){
        console.log(msg)
    }, 3000)
}

initHelloTimer();
*/

///recursive function / fibonacci

function fibonacci(prev, current){
    if(prev > 100){
        return;
    }
    console.log(prev);

    return fibonacci(prev + current, prev);
}
fibonacci(1,0);



console.log('+++++++++++');




function loop(i){
    if(i > 10){
        return i;

    }

    return loop(++i)
}
console.log(loop(0));