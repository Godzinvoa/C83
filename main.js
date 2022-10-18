Canvas = document.getElementById("cnvs");
Caneta = Canvas.getContext("2d");
Cor = "indianRed";

var UpoX,UpoY
var eveeMOU = "supamonkee";
var largura = screen.width;
var Nlargura = screen.width-70;
var Naltura = screen.height-300;

if(largura<992){
    document.getElementById("cnvs").width = Nlargura;
    document.getElementById("cnvs").height = Naltura;
    document.body.style.overflow ="hidden";
}

Canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e) {
    Cor = document.getElementById("cor").value;
    eveeMOU = "mousedown";
}
Canvas.addEventListener("mousemove",Dehenhá);
function Dehenhá(e) {

    MouseX = e.clientX - Canvas.offsetLeft;
    MouseY = e.clientY - Canvas.offsetTop;
    if(eveeMOU == "mousedown"){
        Caneta.beginPath();
        Caneta.strokeStyle = Cor;
        Caneta.lineWidth = 4;
        Caneta.moveTo (UpoX,UpoY);
        Caneta.lineTo (MouseX,MouseY);
        Caneta.stroke();

    }
    UpoX= MouseX;
    UpoY= MouseY;
}
Canvas.addEventListener("mouseup",MouseUp);
function MouseUp(e) {
    eveeMOU = "mouseup";
}

Canvas.addEventListener("mouseleave",MouseLeave);
function MouseLeave(e) {
    eveeMOU = "mouseleave";
}

//novo código

Canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e) {
    Cor = document.getElementById("cor").value;
    UpoX = e.touches[0].clientX - Canvas.offsetLeft;
    UpoY = e.touches[0].clientY - Canvas.offsetTop;  
    
}
Canvas.addEventListener("touchmove",tocá);
function tocá(e) {

    MouseX = e.touches[0].clientX - Canvas.offsetLeft;
    MouseY = e.touches[0].clientY - Canvas.offsetTop;
    Caneta.beginPath();
    Caneta.strokeStyle = Cor;
    Caneta.lineWidth = 4;
        Caneta.moveTo (UpoX,UpoY);
        Caneta.lineTo (MouseX,MouseY);
    Caneta.stroke();

    UpoX= MouseX;
    UpoY= MouseY;
}
        console.log("oláaa");