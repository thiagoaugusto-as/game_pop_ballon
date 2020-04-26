var count=0;
function addBoll() {
  var boll = document.createElement("div");
  boll.setAttribute("class", "boll");

  var p1 = Math.floor(Math.random() * 500);
  var p2 = Math.floor(Math.random() * 400);

  boll.setAttribute("style", "left:"+p1+"px;top:"+p2+"px; background-color:"+gera_cor()+";");
  boll.setAttribute("onclick", "pop(this)");

  document.body.appendChild(boll);
  }
function pop(element) {
  count++;
  document.body.removeChild(element);
}
function start() {
    setInterval(addBoll, 1000);
    var p = parseInt(document.getElementById("pontos").innerHTML);
    p+=1;
    document.getElementById("pontos").innerHTML = p;
    if (p > 20) {
      alert ("VC GANHOU");
      window.location.href = window.location.href;
  }
}

// gera uma cor aleatória em hexadecimal
function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';

    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}
