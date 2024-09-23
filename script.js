// Navbar - Scroll
var nav = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        nav.classList.add("bgColor");
    }
    else{
        nav.classList.remove("bgColor");
    }
});
