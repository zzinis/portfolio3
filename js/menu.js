var btnCall = document.querySelector(".btnCall"); 

var menuMo = document.querySelector(".menuMo"); 

btnCall.onclick = function(e){
    e.preventDefault(); 
    
    btnCall.classList.toggle("on"); 
    menuMo.classList.toggle("on"); 
};