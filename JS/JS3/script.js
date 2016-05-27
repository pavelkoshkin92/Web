var mark = prompt("Enter your mark");
var a = (mark >= 0 && mark <= 100);
var b = (mark == "A" || mark == "B" || mark == "C" || mark == "D" || mark == "E" || mark == "F" || mark == "FX");
//var c = (mark == ["A","B","C","D","E","F","FX"]);
if (a || b) {
    if (mark <= 100 && mark >= 95) {
        console.log("Your mark is A");
        alert("Your mark is A")
    }
    else if (mark <= 94 && mark >= 85) {
        console.log("Your mark is B");
        alert("Your mark is B")
    }
    else if (mark <= 84 && mark >= 75) {
        console.log("Your mark is C");
        alert("Your mark is C")
    }
    else if (mark <= 74 && mark >= 65) {
        console.log("Your mark is D");
        alert("Your mark is D")
    }
    else if (mark <= 64 && mark >= 60) {
        console.log("Your mark is E");
        alert("Your mark is E")
    }
    else if (mark <= 59 && mark >= 0) {
        console.log("Your mark is FX");
        alert("Your mark is FX")
    }
    ;
    if (mark == "A") {
        console.log("Your mark is 95-100");
        alert("Your mark is 95-100")
    }
    else if (mark == "B") {
        console.log("Your mark is 85-94");
        alert("Your mark is 85-94")
    }
    else if (mark == "C") {
        console.log("Your mark is 75-84");
        alert("Your mark is 75-84")
    }
    else if (mark == "D") {
        console.log("Your mark is 65-74");
        alert("Your mark is 65-74")
    }
    else if (mark == "E") {
        console.log("Your mark is 60-64");
        alert("Your mark is 60-64")
    }
    else if (mark == "FX") {
        console.log("Your mark is 0-59");
        alert("Your mark is 0-59")
    }
    else if (mark == "F") {
        console.log("Your mark is 0-59");
        alert("Your mark is 0-59")
    }
}
else {
    alert("Wrong mark")
};