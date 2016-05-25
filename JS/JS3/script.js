var mark = parseInt(prompt("Enter your mark"))
if (mark <= 100 && mark >= 95) {
    console.log("Your mark is A")
}
else if (mark <= 94 && mark >= 85) {
    console.log("Your mark is B")
}
else if (mark <= 84 && mark >= 75) {
    console.log("Your mark is C")
}
else if (mark <= 74 && mark >= 65) {
    console.log("Your mark is D")
}
else if (mark <= 64 && mark >= 60) {
    console.log("Your mark is E")
}
else if (mark <= 59 && mark >= 0) {
    console.log("Your mark is FX")
}
else {
    console.log("You entered wrong mark")
}