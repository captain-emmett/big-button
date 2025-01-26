var bigbutton = document.getElementById('the-button');
var copycoutner = 1;

bigbutton.addEventListener('click', function addButton() {
    const button = document.createElement('button');
    button.textContent = 'button copy ' + copycoutner;
    copycoutner++;

    button.addEventListener('click', addButton);
    const contentDiv = document.querySelector('.button-box');
    contentDiv.appendChild(button);
});

console.log("Hello");