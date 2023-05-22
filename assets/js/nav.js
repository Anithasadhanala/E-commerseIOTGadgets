
var menu =document.getElementById("mob-view");
function show_not(){
    menu.classList.toggle("mob-ul-show");
    
}



menu.addEventListener('onclick',show_not);

 

function change_nav(){
    var navbar = document.getElementById('navbar');


    

    var scroll_value = window.scrollY;
    if (scroll_value < 70){
        navbar.classList.remove('bg-color');
        navbar.classList.remove('fixed-top');
    }else{
        navbar.classList.add('bg-color');
        navbar.classList.add('fixed-top');
    }
}
window.addEventListener('scroll',change_nav);