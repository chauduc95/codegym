var vatly=parseInt(prompt("nhập điểm vật lý"));
var hoahoc=parseInt(prompt("nhập điểm hóa học"));
var sinhhoc=parseInt(prompt("nhập điểm sinh học"));
var diemtong=vatly+hoahoc+sinhhoc;
var trungbinh=diemtong/3;
document.write("Điểm tổng là: "+diemtong +" ")
document.write("Điểm trung bình là: "+trungbinh)
