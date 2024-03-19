let btnChange = document.querySelector(".btnChange");
let overlay = document.querySelector(".overlay");
let xMark = document.querySelector(".fa-x");
let sideBar = document.querySelector(".sideBar");
let container = document.querySelector(".container");

btnChange.onclick = function() {
    overlay.style.display = "block";
    sideBar.style.right = "0";
    container.style.width = "80%";
};

xMark.onclick = function() {
    overlay.style.display = "none";
    sideBar.style.right = "-20%";
    container.style.width = "100%";
};