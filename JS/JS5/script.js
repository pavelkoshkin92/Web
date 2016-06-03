/*"use strict";
var min = 1,
    max = 2;
var savedNumber = Math.round(Math.random()*(max - min) + min);


let previousResult = '';
while(true){

    let number = +prompt(`What is your number? ${previousResult}`);

    if(number === savedNumber){
        break;
    }
    if (number > savedNumber){
        previousResult = 'too much';

    } else {
        previousResult = 'take more';
    }
}
alert("You have won!!!");
    */

var list = [
    {
        name: 'Mercedes',
        volume: 1.6
    },
    {
        name: "VAZ",
        volume: 1.1
    },
    {
        name: "BELAZ",
        volume: 12.4
    },
    {
        name: "Slavuta",
        volume: 0.3
    }
];
var min = list.reduce(function(result, item){
    if(item.volume < result.volume){
        return item;
    }
    return result;
});
console.log(min.name);