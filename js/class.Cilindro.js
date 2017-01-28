var cont = 1;
var NtoP = false;
var change = 0;

function avance(n) {
    var z = "";
    var y = "";
    var avance = document.getElementById("ruleta" + n);
    var posIMG = document.getElementById("r" + n);
    var pos = parseInt(posIMG.name);

    switch (n) {
        case 1:
            z = document.getElementById("r2");
            y = document.getElementById("r3");
            break;
        case 2:
            z = document.getElementById("r1");
            y = document.getElementById("r3");
            break;
        case 3:
            z = document.getElementById("r1");
            y = document.getElementById("r2");
            break;
    }
    if (advances > 0) {

        if (n != change) { //SI USAMOS OTRA RULETA(r1,r2,r3) SE PONE A FALSE Y SE EMPIEZA CON VALORES NEGATIVOS
            NtoP = false;
        }

        if (pos === 0) {
            NtoP = true;
        }

        if (!NtoP) { //SI EL BOOLEAN ES FALSE SE UTILIZAN VALORES NEGATIVOS DE X a 0
            posN = pos - 100;
            avance.style.backgroundPosition = "0px -" + posN + "px";
            posIMG.name = posN;
            advances--;
            var displayAdvances = document.getElementById('avances');
            displayAdvances.innerHTML = "<p>" + advances + "</p>";
            switch (n) {
                case 1:
                rnd1=rnd1-1;
                    comprobar(rnd1 , rnd2, rnd3);
                    break;
                case 2:
                rnd2=rnd2-1;
                    comprobar(rnd1, rnd2 , rnd3);
                    break;
                case 3:
                    rnd3=rnd3-1;
                    comprobar(rnd1, rnd2, rnd3);
                    break;
            }
        } else { // CUANDO EL BOOLEAN ESTA EN TRUE SE UTILIZAN VALORES POSITIVOS DE 0 a X
            posP = pos + 100;
            avance.style.backgroundPosition = "0px " + posP + "px";
            posIMG.name = posP;
            advances--;
            var displayAdvances = document.getElementById('avances');
            displayAdvances.innerHTML = "<p>" + advances + "</p>";
            switch (n) {
                case 1:
                rnd1=rnd1+1;
                    comprobar(rnd1 , rnd2, rnd3);
                    break;
                case 2:
                rnd2=rnd2+1;
                    comprobar(rnd1, rnd2 , rnd3);
                    break;
                case 3:
                    rnd3=rnd3+1;
                    comprobar(rnd1, rnd2, rnd3);
                    break;
            }
        }
        change = n; //SE ASIGNA lA ULTIMA POSICION DE N (LA ULTIMA RULETA USADA);
    } else {
        var led = document.getElementById('led');
        led.style.color = "red";
        led.innerHTML = "<marquee scrolldelay='-60' behavior='slide' scrollamount='30'> &nbsp SIN AVANCES! </marquee>";
    }
}

function Cilindro() { // CLASE CILINDRO

    this.imagenes = new Array(0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000);
    var cont = 0;


    this.change = function(n) { // METODO CHANGE ASIGNA RANDOM Y POSICION FINAL BUENA
        var roulette = document.getElementById("ruleta" + n);
        var indice = document.getElementById("r" + n);
        //Numero aleatorio entre 0 y 8. Se comprueba que no salga el numero anterior
        do {
            var rnd = parseInt((Math.random() *9));
            //alert(rnd);
        } while (this.imagenes[rnd] == indice.value);
        //cambiamos la imagen
        //roulette.style.backgroundPosition = "0px -" + this.imagenes[rnd] + "px";
        indice.name = this.imagenes[rnd];
        roulette.style.transitionDuration = "1000ms";
        cont = 0;
        this.transition(rnd, roulette, this.callback = function(roulette) {
            roulette.style.backgroundPosition = "0px -" + this.imagenes[rnd] + "px";
        });
        return rnd;
    }

    this.transition = function(rnd, roulette) { // REALIZA EL EFECTO (TRANSICION GIRO)

        if (cont > -1000) {
            cont = cont - 1000;
            roulette.style.backgroundPosition = "0px " + cont + "px";
            setTimeout(this.transition(rnd, roulette), 70);

        } else {
            clearTimeout(this.transition);
            this.callback(roulette);
        }
    }

    this.asignar = function(n) {
        top = document.getElementById('r' + n).value;
        //alert(top);
        return top;
    }




}
