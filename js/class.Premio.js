function checkPremio(v, text, bet,todo) {

    switch (text) {
        case "top":  //SI TEXT VALE ALGUNO DE LOS CASE LA PANTALLA PREMIO CAMBIA A UNO DE LOS CASOS:
            var led = document.getElementById('led');
            led.innerHTML = "<marquee> PREMIO LINEA DE ARRIBA!! </marquee>";
            break;
        case "mid":
            var led = document.getElementById('led');
            led.innerHTML = "<marquee> PREMIO LINEA CENTRAL!! </marquee>";
            break;
        case "bot":
            var led = document.getElementById('led');
            led.innerHTML = "<marquee> PREMIO LINEA DE ABAJO!! </marquee>";
            break;
        case "lI":
            var led = document.getElementById('led');
            led.innerHTML = "<marquee> PREMIO DIAGONAL IZQUIERDA!! </marquee>";
            break;
        case "lD":
            var led = document.getElementById('led');
            led.innerHTML = "<marquee> PREMIO DIAGONAL DERECHA!! </marquee>";
            break;
    }


    switch (v) {
        case 0: // IMAGEN PENTAKILL
            penta(bet,todo,p=50); // ENVIAR APUESTA, BOOLEAN Y VALOR PREMIO
            break;
        case 1: // IMAGEN ZILEANS
            increaseAdvances(bet,todo);
            break;
        case 2: //IMAGEN SETAS
            penta(todo, bet, p=-10);
            break;
        case 3: //IMAGEN POCION
            penta(bet,todo,p=10);
            break;
        case 4: //IMAGEN MINIONS
            penta(bet,todo,p=3);
            break;
        case 5: //IMAGEN SUPER MINION
            penta(bet,todo,p=5);
            break;
    }

}


function penta(bet,todo,p) {// SI TOCA IMAGEN AZUL ENTRA AQUI
  if (todo) { //PREMIO CON ALLIN
    dineros = (dineros*2)+bet;
    todo=false;
    document.getElementById('Panel').style.color="red";
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp ALL IN !!!!! </marquee>";
    led.style.color="#85c3d3";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premioFULL(); // FUNCION ANIMACION ALLIN
  }else{ //PREMIO SIN ALLIN
    dineros = dineros + (bet * p);
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp" + bet * p + " PUNTOS! </marquee>";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premio();//FUNCION ANIMACION PREMIO NORMAL
}
}

/*
function seta(todo) { // SI TOCA IMAGEN DE LA SETA ENTRA AQUI
    if (todo) { // SI EL PREMIO ES CON ALLIN
      dineros = 0;
      todo=false;
      document.getElementById('Panel').style.color="red";
      var led = document.getElementById('led');
      led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp MALA SUERTE! </marquee>";
      led.style.color="#85c3d3";
      premioFULL(); // FUNCION ANIMACION PREMIO
    }else{ //PREMIO SIN ALLIN
    dineros = dineros - 10; //RESTA DINERO
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp -10 PUNTOS! </marquee>";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premio();//FUNCION ANIMACION PREMIO NORMAL
  }
}


function penta(bet,todo) {// SI TOCA IMAGEN AZUL ENTRA AQUI
  if (todo) { //PREMIO CON ALLIN
    dineros = (dineros*2)+bet;
    todo=false;
    document.getElementById('Panel').style.color="red";
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp ALL IN !!!!! </marquee>";
    led.style.color="#85c3d3";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premioFULL(); // FUNCION ANIMACION ALLIN
  }else{ //PREMIO SIN ALLIN
    dineros = dineros + (bet * 50);
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp" + bet * 50 + " PUNTOS! </marquee>";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premio();//FUNCION ANIMACION PREMIO NORMAL
}
}


function pocion(bet,todo) {// SI TOCA IMAGEN DE LA POCION ENTRA AQUI
  if (todo) {
    dineros = (dineros*2)+bet;
    todo=false;
    document.getElementById('Panel').style.color="red";
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp ALL IN !!!!! </marquee>";
    led.style.color="#85c3d3";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premioFULL();// FUNCION ANIMACION ALLIN
  }else{
    dineros = dineros + (bet * 10);
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp" + bet * 10 + " PUNTOS! </marquee>";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premio();//FUNCION ANIMACION PREMIO NORMAL
}
}


function minion(bet,todo) {// SI TOCA IMAGEN DEL MINION  ENTRA AQUI
  if (todo) {
    dineros = (dineros*2)+bet;
    todo=false;
    document.getElementById('Panel').style.color="red";
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp ALL IN !!!!! </marquee>";
    led.style.color="#85c3d3";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premioFULL();// FUNCION ANIMACION ALLIN
  }else{
    dineros = dineros + (bet * 2);
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp" + bet * 2 + " PUNTOS! </marquee>";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premio();//FUNCION ANIMACION PREMIO NORMAL
}
}

function supminion(bet,todo) {// SI TOCA IMAGEN DEL superMINION  ENTRA AQUI
  if (todo) {
    dineros = (dineros*2)+bet;
    todo=false;
    document.getElementById('Panel').style.color="red";
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp ALL IN !!!!! </marquee>";
    led.style.color="#85c3d3";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premioFULL();// FUNCION ANIMACION ALLIN
  }else{
    dineros = dineros + (bet * 5);
    var led = document.getElementById('led');
    led.innerHTML = "<marquee  scrolldelay='-60' behavior='slide' scrollamount='50'>&nbsp" + bet * 5 + " PUNTOS! </marquee>";
    var cashpanel = document.getElementById('Panel');
    cashpanel.innerHTML = "<p>" + dineros + "</p>";// ACTUALIZA EL CONTADOR DE DINEROS;
    premio();//FUNCION ANIMACION PREMIO NORMAL
}
}
*/
