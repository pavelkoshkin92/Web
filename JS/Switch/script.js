/*
var op = "+";
if(op == "+") {
    console.log("Ya-hu+")
}
else if(op = "-"){
    console.log("Ya-hu-")
}
else if(op = "*"){
    console.log("Ya-hu*")
}
else if(op = "/"){
    console.log("Ya-hu/")
} else {
    console.log("life is pain")
}
//-----
switch (op) {
    case "+":
        console.log("Ya-hu!+");
        break;
    case "-":
        console.log("Ya-hu-");
        break;
    case "*":
        console.log("Ya-hu*!");
        break;
    case "/":
        console.log("Ya-hu/");
        break;
    default:
        console.log("life is pain");
}
    */
/*var weekMap = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
};


var input = +prompt("Enter"),
    result = weekMap[input];

if(!result){
    result = "Wrong index"
}
console.log(result);
    */
var weekMap_obj = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
};

var weekMap_arr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];


var input = +prompt("Enter"),
    result_obj = weekMap_obj[input];
    result_arr = weekMap_arr[input-1];

if(!result_obj){
    result_obj = "Wrong index"
}
console.log(result_obj);
console.log(result_arr);