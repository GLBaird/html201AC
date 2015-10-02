
var menu = document.getElementById("menu");

function toggleMenu() {
    if (menu.className == "show") {
        menu.className = "";
    } else {
        menu.className = "show";
    }
}