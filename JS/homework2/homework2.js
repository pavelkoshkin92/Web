var canvas = document.getElementById("canv");
var x = canvas.getContext("2d");
//1st
x.beginPath();
x.moveTo(10, 10);
x.lineTo(10, 500);

//2nd
x.moveTo(10,10);
x.lineTo(200, 10);

//3rd
x.lineTo(200, 50);


//4th HEAD
x.arc(200,75,25,1.5*Math.PI,4*Math.PI);

//5th BODY
x.moveTo(200, 100);
x.lineTo(200, 280);

//6th LEFT ARM
x.moveTo(200, 120);
x.lineTo(120, 160);

//7th RIGHT ARM
x.moveTo(200, 120);
x.lineTo(280, 160);

//8th LEFT LEG
x.moveTo(200, 280);
x.lineTo(150, 450);

//9th RIGHT LEG
x.moveTo(200, 280);
x.lineTo(250, 450);

x.stroke();