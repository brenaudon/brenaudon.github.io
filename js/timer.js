var myVar = setInterval(myTimer, 1000);
	var time = 10;
	document.getElementById("timer").innerHTML = time;

	function myTimer() {
		if(time>0){
	  		time--;
	 		document.getElementById("timer").innerHTML = time;
			if(time==0){
				document.getElementById("timer").innerHTML = "Fini";
			}
		}else{
			clearInterval(myVar);
		}
	}