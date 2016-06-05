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

var transformStyles = [];


function jump(){
	if(isJumpState){
		return;
	}

	var transforms = turtle.style.transform;

	transformStyles[1] += 'scale(1.3, 1.3)';
	isJumpState = true;
	changeTransform();

	setTimeout(function(){
		delete transformStyles[1];
		isJumpState = false;
		changeTransform();
	},
		1000);

}
 	

function right(){
	
	var a;
	turtle.style.left = turtle.offsetLeft;
	a = turtle.offsetLeft;
	turtle.style.left=(a+10)+"px";
	transformStyles[0]='rotateZ(90deg)';
	changeTransform();
	
	
}

function left(){
	
	var a;
	turtle.style.right = turtle.offsetLeft;
	a = turtle.offsetLeft;
	turtle.style.left=(a-10)+"px";
	transformStyles[0]='rotateZ(-90deg)';
	changeTransform();
	
}
function bottom(){
	
	var a;
	turtle.style.top = turtle.offsetTop;
	a = turtle.offsetTop;
	turtle.style.top=(a+10)+"px";
	transformStyles[0]='rotateZ(180deg)';
	changeTransform();
	
}
function up(){
	
	var a;
	turtle.style.top = turtle.offsetTop;
	a = turtle.offsetTop;
	turtle.style.top=(a-10)+"px";
	transformStyles[0] ='rotateZ(0)';
	changeTransform();
	
}
function changeTransform(){
	turtle.style.stransform = transformStyles.join('');
}