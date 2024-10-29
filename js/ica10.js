let counter = 0;


//Grab the button object
const button = document.getElementById('colorButton');
const Riotbutton = document.getElementById('AlertButton');
const counterDisplay = document.getElementById('counter');

function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

function EnsueRiot() {
    counter++; // Increment the counter
    counterDisplay.textContent = counter; // Update the displayed count
}

// Assign function to button
button.addEventListener('click', changeBackgroundColor);
Riotbutton.addEventListener('click', EnsueRiot); 