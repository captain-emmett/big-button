var forestButton = document.getElementById("forest"); //create variables for each button
var oceanButton = document.getElementById("ocean");
var cityButton = document.getElementById("city");

var backgroundButtons = [
    forestButton,
    oceanButton,
    cityButton
];

backgroundButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var canvas = document.getElementById("canvas")
        var background = button.querySelector("img").src;
        canvas.style.backgroundImage = `url('${background}')`; //could also use "url(" + background + ")"
    })
})