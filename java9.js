let weight=parseInt(prompt('nhập số cân nặng của bạn:'));
let height=parseInt(prompt('nhập số chiều cao của bạn:'));
let bmi=weight/height*height;
if (bmi < 18)
    alert("Underweight");
else if (bmi < 25.0)
    alert("Normal");
else if (bmi < 30.0)
    alert("Overweight");
else
   alert("Obese");
