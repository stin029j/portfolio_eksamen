window.addEventListener("load", sidenVises);

//"use strict";
//var timeLeft;


function sidenVises() {
    console.log("siden vises");
    document.querySelector(".banner_inside").classList.add("fade_in");
    document.querySelector(".arrow").classList.add("pulse");
}

//function clickArrow {
//    console.log("clickArrow");
//    document.querySelector(".arrow").addEventListener("click");
//}
