function addBoll() {
  var boll = document.createElement("div");
  boll.setAttribute("class", "boll");

  var p1 = Math.floor(Math.random() * 500);
  var p2 = Math.floor(Math.random() * 400);

  boll.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
  boll.setAttribute("onclick", "pop(this)");

  document.body.appendChild(boll);
}
function pop(element) {
  document.body.removeChild(element);
}
function start() {
    setInterval(addBoll, 1000);
}
