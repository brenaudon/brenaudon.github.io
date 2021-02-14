window.onscroll = function() {myFunction2()};

// let myVar = $('div').filter('.gen1','.gen2');
let myVar1 = document.getElementByClassName("gen1");
let myVar2 = document.getElementByClassName("gen2");
var sticky2 = 0;

function myFunction2() {
	for(var i = 0; i<myVar1.length; i++){
		sticky = myVar1[i].offsetTop;
		if(window.offsetTop > sticky2){
			myVar1[i].style.marginTop = "200px";
		}
	}
	for(var j = 0; j<myVar2.length; j++){
		sticky = myVar2[j].offsetTop;
		if(window.offsetTop > sticky2){
			myVar2[j].style.marginTop = "200px";
		}
	}
}