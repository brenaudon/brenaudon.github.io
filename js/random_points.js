    class WebWorker {
        constructor() {
            this.w = new Worker("js/worker.js");
            this.color = this.getRandomColor();
            this.x = 0;
            this.y = 0;

            this.w.onmessage= (event) => { this.draw(event.data[0], event.data[1]);}
        }

        draw(new_x,new_y){
            var canvas = document.getElementById('MonCanvas');
            var ctx = canvas.getContext('2d');

            ctx.clearRect(this.x-5,this.y-5,10,10);
            ctx.beginPath();
            ctx.fillStyle=this.color;
            ctx.arc(new_x, new_y, 5, 0, 2 * Math.PI);
            ctx.fill();

            this.x = new_x;
            this.y = new_y;
        }
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        stop(){
            this.w.terminate();
        }
    }


    var workers = [];

    for(var i=0; i<10; i++){  
        workers.push(new WebWorker());
    }

    const nume = document.querySelector('#num');

    var canvas = document.getElementById('MonCanvas');
    var ctx = canvas.getContext('2d');

           
    nume.onchange = function() {
        for (var i = 0; i < workers.length; i++) {
            workers[i].stop();
        }
        workers = [];
        ctx.clearRect(0,0,600,600);
        for(var i=0; i<nume.value; i++){
            workers.push(new WebWorker());
        }
    }


    