var turtle = document.getElementById("turtle");



  addEventListener("keydown", function(event) {
    if (event.keyCode == 68)
		
	  right();
  });

 
addEventListener("keydown", function(event) {
    if (event.keyCode == 65)
     
	  left();
  });

addEventListener("keydown", function(event) {
    if (event.keyCode == 83)
     
	  bottom();
  });

addEventListener("keydown", function(event) {
    if (event.keyCode == 87)
     
	  up();
  });
 	

function right(){
	
	var a;
	turtle.style.left = turtle.offsetLeft;
	a = turtle.offsetLeft;
	turtle.style.left=(a+10)+"px";
	
	
}

function left(){
	
	var a;
	turtle.style.right = turtle.offsetLeft;
	a = turtle.offsetLeft;
	turtle.style.left=(a-10)+"px";
	
}
function bottom(){
	
	var a;
	turtle.style.top = turtle.offsetTop;
	a = turtle.offsetTop;
	turtle.style.top=(a+10)+"px";
	
}
function up(){
	
	var a;
	turtle.style.top = turtle.offsetTop;
	a = turtle.offsetTop;
	turtle.style.top=(a-10)+"px";
	
}