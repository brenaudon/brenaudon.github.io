var coord;
var x = 0;
var y = 0;
var temps = 500;


function randCoord() {
  coord = [];
  x=Math.floor(Math.random()*600);
  y=Math.floor(Math.random()*600);
  coord.push(x,y);
  postMessage(coord);
  temps=Math.floor(Math.random()*1000);
  setTimeout("randCoord()",temps);
}

randCoord();
