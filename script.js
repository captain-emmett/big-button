/** 
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
})*/

const draggableButton = document.getElementById("draggableButton");
const canvas = document.getElementById("canvas");

let isDragging = false;
draggableButton.addEventListener("mousedown", function(event) {
    isDragging = true;

    const offsetX = event.clientX - draggableButton.getBoundingClientRect().left;
    const offsetY = event.clientY - draggableButton.getBoundingClientRect().top;

    const onMouseMove = (moveEvent) => {
        if (isDragging) {
            const mouseX = moveEvent.clientX;
            const mouseY = moveEvent.clientY;

            draggableButton.style.left = mouseX - offsetX + "px";
            draggableButton.style.top = mouseY - offsetY + "px";
        }
    }

    const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
})