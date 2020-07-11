function tien(){
    let imgg=document.getElementById('nobita');
    imgg.style.left=parseInt(imgg.style.left)+1000+'px';
}
function move(evt) {
    switch (evt.keyCode) {
        case 39:
            tien();
            break;}
}
function docReady() {
    window.addEventListener('keydown', move);
}
