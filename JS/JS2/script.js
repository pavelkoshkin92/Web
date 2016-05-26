/**
 * Created by Paul on 25.05.16.
 */
var first = parseInt(prompt("Enter first number"));
var operator = prompt("Input operator");
var second = parseInt(prompt("Enter second number"));


    if (operator == "*") {
        console.log(first * second)
    }
    else if (operator == "/") {
        console.log(first / second)
    }
    else if (operator == "+") {
        console.log(first + second)
    }
    else if (operator == "-") {
        console.log(first - second)
    }
    else if (operator == "^") {
        console.log(Math.pow(first, second))
    }
    else {
        console.log("ERROR")
    };

    if (operator == "/" && second == 0) {
        alert("You can't divide by zero")
    }


