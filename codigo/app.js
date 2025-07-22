        function repartir(){
            const audio=new audio("sonidos");
            audio.play();
            let tablero=document.getElementById("tablero");
            const TOTAL_CARTAS = 10;
            for (let i = 0; i < TOTAL_CARTAS; i++) {
                let carta=document.createElement("img");
                let indice=Math.floor(Math.random()*52) + 1;
                carta.src="imagenes/cartas/Carta"+indice+".jpg";
                tablero.appendChild(carta);
            }
        }