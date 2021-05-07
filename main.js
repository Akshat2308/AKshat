canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lx,ly;
var mouseevent="";        
colour="black";
widht=3;

new_width=screen.width-100
new_height=screen.height-200
if (screen.width < 992 ){
document.getElementById("myCanvas").widht=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow ="hidden";
}
canvas.addEventListener("touchstart",a);
function a (e){
    colour=document.getElementById("colour").value ;
    widht=document.getElementById("width_of_line").value ;

    lx=e.touches[0].clientX-canvas.offsetLeft;
    
    ly=e.touches[0].clientY-canvas.offsetTop; 
}
canvas.addEventListener("touchmove",b);
function b (e){
    cx=e.touches[0].clientX-canvas.offsetLeft;
    
    cy=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.lineWidth= widht;
        ctx.strokeStyle=colour;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    lx=cx;
    cx=cy;
}
function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}