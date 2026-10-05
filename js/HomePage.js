//Navigation JQuery ->https://github.com/TuxChad/hamburger-menu
const menu = document.querySelector(".menu");
const nav_menu = document.querySelector(".nav-menu");

menu.addEventListener("click",()=>{
  menu.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("active");
  nav_menu.classList.remove("active");
}));


//Image animation JQuery
$(".book-img").hover(
    function() {
        $(this).animate({ 
            marginTop: "-10px"
        }, 200);
    },
    function() {
        $(this).animate({ 
            marginTop: "0px"
        }, 200);
    }
);
//Text animation JQuery
$(".welcome-text").hover(
    function() {
        $(this).animate({ 
            marginTop: "-10px"
        }, 200);
    },
    function() {
        $(this).animate({ 
            marginTop: "0px"
        }, 200);
    }
);





