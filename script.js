let num1=document.getElementById("num1");
let num2=document.getElementById("num2");

document.querySelector(".btn1").addEventListener("click",function(){
    add=Number(num1.value) + Number(num2.value);
    document.getElementById("r").innerHTML=add;
});
document.querySelector(".btn2").addEventListener("click",function(){
    sub=Number(num1.value)-Number(num2.value);
    document.getElementById("r").innerHTML=sub;
});
document.querySelector(".btn3").addEventListener("click",function(){
     mul=Number(num1.value)*Number(num2.value);
    document.getElementById("r").innerHTML=mul;
});
document.querySelector(".btn4").addEventListener("click",function(){
     div=Number(num1.value)/Number(num2.value);
    document.getElementById("r").innerHTML=div;
});