
var timer = setInterval(signal,1000);


function signal() {
	var str = "";
	var x,y;
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  	if (this.readyState == 4 && this.status == 200) {
    	str = this.responseText;
			const obj = JSON.parse(str);
			draw(obj.x,obj.y);
    }
  };
  xhttp.open("GET", "https://stwom.herokuapp.com/600", true);
  xhttp.send();
}

function draw(x,y){
	var canvas = document.getElementById('MyCanvas');
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0,0,600,600);

	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2 * Math.PI);
	ctx.stroke();
}