


let imgg=null;

function inti(){
    imgg=document.getElementById('myImage');
    imgg.style.position='relative';
    imgg.style.left='10px';

}
function moveRight(){
    imgg.style.left=parseInt(imgg.style.left)+100+'px';
}
window.onload=inti();
