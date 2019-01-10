window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    console.log("loader");
    loader.className += " fade_out"
    sidenVises();
    fadeInBanner();
});



function sidenVises() {
    console.log("siden vises");

}


document.querySelector('#x').addEventListener('click', function () {
    if (this.classList.contains('clicked')) {
        this.classList.remove('clicked');
        document.querySelector(".sidebar").classList.add("hide");
    } else {
        this.classList.add('clicked');
        document.querySelector(".sidebar").classList.remove("hide");
    }

});


function fadeInBanner() {
    document.querySelector(".banner_inside").classList.add("fade_in");
    document.querySelector(".arrow").classList.add("pulse");
}
