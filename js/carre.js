		var myTimer = setInterval(progress_all, 100);
		var x = 0;
		var sens = 0;
		var array = [];

		//Declarer un object carré 
			class Carre {
  					constructor(x, y, sens2, verti, couleur) {
    					this.x = x;
    					this.y = y;
							this.sens2 = sens2; //0 gauche à droite de base, 1 sinon
							this.verti = verti; //0 horizontal, 1 vertical
							this.couleur = couleur;	
  					}
						progress(){
							if(this.verti==0){
								if((sens==0 && this.sens2==0 && this.x<=550) || (sens==1 && this.sens2==1 && this.x<=550)){
									this.x = this.x+10;
								}else if((sens==0 && this.sens2==1 && this.x>=0) || (sens==1 && this.sens2==0 && this.x>=0)){
									this.x = this.x-10;
								}
							}else if(this.verti==1){
								if((sens==0 && this.sens2==0 && this.y<=550) || (sens==1 && this.sens2==1 && this.y<=550)){
									this.y = this.y+10;
								}else if((sens==0 && this.sens2==1 && this.x>=0) || (sens==1 && this.sens2==0 && this.y>=0)){
									this.y = this.y-10;
								}
							}
						}
						getCouleur(){
							return this.couleur;
						}
						getX(){
							return this.x;
						}
						getY(){
							return this.y;
						}
				}

		//Créer une liste de carré correctement initialisé
		
			var carre1 = new Carre(0, 100, 0, 0, 'rgb(200, 0, 0)');
			var carre2 = new Carre(550, 450, 1, 0,'rgb(0, 0, 200)');
			var carre3 = new Carre(450, 0, 0, 1, 'rgb(0, 200, 0)');
			var carre4 = new Carre(100, 550, 1, 1,'rgb(200, 200, 0)');
			array.push(carre1);
			array.push(carre2);
			array.push(carre3);
			array.push(carre4);
		
		//Methode progress -> Je change l'emplacement de chaque carré par un appel sur chacun

			function progress_all(){
				for(var i=array.length-1; i>=0; i--){
					array[i].progress();
					if(i==0 && array[i].getX()==0){
						sens=0;
					}else if(i==0 && array[i].getX()==550){
						sens=1;
					}
				}
				render();
			}

		//Methode render -> En utilisant une méthode par carré je les affiche

		function render(){
			var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
				ctx.clearRect(0,0,600,600);
				for(var i=0; i<array.length; i++){
					ctx.fillStyle = array[i].getCouleur();
        	ctx.fillRect(array[i].getX(), array[i].getY(), 50, 50);
				}
			}
		}