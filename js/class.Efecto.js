var x = 0;
var x2 =0;

function premio() { //EFECTO PREMIO SOBRESLATAR RULETAS
    document.getElementById('ruleta1').style.transition = "500ms";
    document.getElementById('ruleta2').style.transition = "500ms";
    document.getElementById('ruleta3').style.transition = "500ms";
    document.getElementById('ruleta1').style.transform = "scale(1.2)";
    document.getElementById('ruleta2').style.transform = "scale(1.2)";
    document.getElementById('ruleta3').style.transform = "scale(1.2)";
    parpadeo = setTimeout(premio, 500);
    if (x % 2 != 0) {
        apagarPremio(); // CUANDO ES UN NUMERO IMPAR CAMBIA LA ANIMACION A NORMAL
    }
    x++;
    if (x === 4) { // A LOS 4 VECES SE APAGA
        clearTimeout(parpadeo);
        x = 0;
    }

}


function apagarPremio() { // APAGAR ANIMACION (PONER VALORES EN NORMAL)
    document.getElementById('ruleta1').style.transition = "500ms";
    document.getElementById('ruleta2').style.transition = "500ms";
    document.getElementById('ruleta3').style.transition = "500ms";
    document.getElementById('ruleta1').style.transform = "scale(1)";
    document.getElementById('ruleta2').style.transform = "scale(1)";
    document.getElementById('ruleta3').style.transform = "scale(1)";
}


function premioAllin() { // PREMIO ALLIN SOBRESLATAR RULETAS
    document.getElementById('led').style.transition = "500ms";
    document.getElementById('led').style.transform = "scale(1.2)";
    parpadeo2 = setTimeout(premioAllin, 500);
    if (x2 % 2 != 0) {
        apagarPremioAllin();// CUANDO ES UN NUMERO IMPAR CAMBIA LA ANIMACION A NORMAL
    }
    x2++;
    if (x2 === 3) {
        clearTimeout(parpadeo2);
        x2 = 0;
    }

}


function apagarPremioAllin() {
    document.getElementById('led').style.transition = "500ms";
    document.getElementById('led').style.transform = "scale(1)";
}



function premioFULL() { // PREMIO ALLIN Y RULETA A LA VEZ
    document.getElementById('ruleta1').style.transition = "500ms";
    document.getElementById('ruleta2').style.transition = "500ms";
    document.getElementById('ruleta3').style.transition = "500ms";
    document.getElementById('ruleta1').style.transform = "scale(1.2)";
    document.getElementById('ruleta2').style.transform = "scale(1.2)";
    document.getElementById('ruleta3').style.transform = "scale(1.2)";
    premioAllin();
    parpadeo3 = setTimeout(premioFULL, 500);
    if (x % 2 != 0) {
        apagarPremioFULL();
    }
    x++;
    if (x === 4) {
        clearTimeout(parpadeo3);
        x = 0;
    }

}


function apagarPremioFULL() {
    document.getElementById('ruleta1').style.transition = "500ms";
    document.getElementById('ruleta2').style.transition = "500ms";
    document.getElementById('ruleta3').style.transition = "500ms";
    document.getElementById('ruleta1').style.transform = "scale(1)";
    document.getElementById('ruleta2').style.transform = "scale(1)";
    document.getElementById('ruleta3').style.transform = "scale(1)";
}


function timear() { //FUNCION APAGAR UNA RULETA DETRAS DE OTRA
    time = time + 1; // CONTADOR EQUIVALE A SEGUNDOS

    if (!detener1) { // SI ESTA EN FALSE SE ACTIVA LA ANIMACION
        document.getElementById('ruleta1').style.webkitAnimationPlayState = "running";
        document.getElementById('ruleta1').style.animationPlayState = "running";
    }

    if (!detener2) {
        document.getElementById('ruleta2').style.webkitAnimationPlayState = "running";
        document.getElementById('ruleta2').style.animationPlayState = "running";
    }

    if (!detener3) {
        document.getElementById('ruleta3').style.webkitAnimationPlayState = "running";
        document.getElementById('ruleta3').style.animationPlayState = "running";
    }

    if (time == 4) { // CUANDO PASEN LOS 4 SEGUNDOS  SE PAUSA
        document.getElementById('ruleta3').style.webkitAnimationPlayState = "paused";
        document.getElementById('ruleta3').style.animationPlayState = "paused";
        detener3 = true; // ACTIVAR DETENCION
        document.getElementById('ruleta2').style.webkitAnimationPlayState = "paused";
        document.getElementById('ruleta2').style.animationPlayState = "paused";
        detener2 = true;
        document.getElementById('ruleta1').style.webkitAnimationPlayState = "paused";
        document.getElementById('ruleta1').style.animationPlayState = "paused";
        detener1 = true;
        continuar = true; //ACTIVAR CONTINUAR CON EL JUEGO (OJO! EVITAR ASINCRONIA DE JAVASCRIPT)
        if (continuar) {
            juego(); // CONTINUAR CON EL JUEGO(ASIGNA POSICIONES FINALES)
            continuar = false;
            time = 0;
            detener1 = false;
            detener2 = false; // DEJAR todo POR DEFECTO
            detener3 = false;
            clearTimeout(eff);
            return;
        }
    }

    eff = setTimeout(timear, 1000);
}
