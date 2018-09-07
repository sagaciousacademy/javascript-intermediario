function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    var setcolor = Math.floor(Math.random()*16777215).toString(16);
    bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px; background-color:#"+setcolor+";");
    bola.setAttribute("onclick","estourar(this)");

    document.body.appendChild(bola);
}
function estourar(elemento) {
    /*Audio ao estourar uma bolinha*/
	var s = document.createElement("audio");
	if(s.canPlayType("audio/mp3")){
		s.setAttribute("src", "Cat-sound-effect.mp3");
	}else {
		s.setAttribute("src", "bumm.ogg");
	}
	s.setAttribute("autoplay", "autoplay");
	document.body.appendChild(s);
    document.body.removeChild(elemento);
}
function iniciar() {
    setInterval(addBola,1000)
}
