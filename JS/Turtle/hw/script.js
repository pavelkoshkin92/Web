var turtle = document.getElementById("turtle");



  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 68)
		
	  right();
  });

 
window.addEventListener("keydown", function(event) {
    if (event.keyCode == 65)
     
	  left();
  });

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 83)
     
	  bottom();
  });

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 87)
     
	  up();
  });
window.addEventListener("keydown", function(event) {
	if (event.keyCode == 32)

		jump();
});
var isJumpState = false;


function jump(){
	if(isJumpState){
		return;
	}

	var transforms = turtle.style.transform;

	turtle.style.transform += 'scale(1.3, 1.3)';
	isJumpState = true;

	setTimeout(function(){
		turtle.style.transform = transforms;
		isJumpState = false;
	},
		1000);

}
 	

function right(){
	
	var a;
	turtle.style.left = turtle.offsetLeft;
	a = turtle.offsetLeft;
	turtle.style.left=(a+10)+"px";
	turtle.style.transform='rotateZ(90deg)'
	
	
}

function left(){
	
	var a;
	turtle.style.right = turtle.offsetLeft;
	a = turtle.offsetLeft;
	turtle.style.left=(a-10)+"px";
	turtle.style.transform='rotateZ(-90deg)'
	
}
function bottom(){
	
	var a;
	turtle.style.top = turtle.offsetTop;
	a = turtle.offsetTop;
	turtle.style.top=(a+10)+"px";
	turtle.style.transform='rotateZ(180deg)'
	
}
function up(){
	
	var a;
	turtle.style.top = turtle.offsetTop;
	a = turtle.offsetTop;
	turtle.style.top=(a-10)+"px";
	turtle.style.transform='rotateZ(0)'
	
}