// for main page loading screen...
var loader = document.querySelector(".loader")
window.addEventListener("load", fade);
function fade(){
    loader.classList.add("dissappear");
}