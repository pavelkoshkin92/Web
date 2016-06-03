for (var counter = 0; counter < 10; counter+=2) {
    console.log(counter)

}

console.log("======");
for (var counter = 10; counter >=0; counter--) {
    console.log(counter)
}

var list = {
    test: "123123",
    age: 31,
    cost: 31.2
};
for(var name in list) {
    console.log(name);
};

console.log("======");

for(var i = 1000; i<= 9999 && i >=1000; i++) {
    var string = String(i),
        sum = 0,
        mult = 1;

    for(var j = 0; j<string.length; j++) {
        sum += +string[j];
        mult *= string[j];
    }
    if(sum === mult) {
        console.log("sum=mult", i);
    }

    if((+string[0] + +string[1]) === (+string[2] * +string[3])) {
        console.log("pair_1_sum=pair_2_mult", i);
    }
}
