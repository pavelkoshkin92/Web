var x = prompt("x"),
    op = prompt("operator"),
    y = prompt("y");

if(!x || !y || !op) {
    console.warn("you canceled some step");
} else {
    x = +x;
    y = +y;

    if(isNaN(x) || isNaN(y)) {
        console.warn("you entered not numbers")
    } else {
        if(!(op == "+" || op =="-") || op == "/"){
            console.warn("your operation is not allowed")
        } else {
            if(op == "+") {
                console.log("x+y=", x+y);
            }
            if(op == "-") {
                console.log("x-y=", x-y);
            }
            if(op == "/"){
                if(!y) {
                    console.warn("y could not be zero");
                } else {
                    console.log("x/y=", x/y)
                }
            }

        }
    }
}