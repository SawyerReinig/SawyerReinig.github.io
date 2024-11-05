let counter = 0;


//Grab the button object
const button = document.getElementById('colorButton');
const FortuneButton = document.getElementById('FortuneButton');
const counterDisplay = document.getElementById('counter');
const DogParagraph = document.getElementById('DogAge');
const HumanAgeInput = document.getElementById('HumanAgeInput');


tellFortune(7, "Joe Schmoe", "Bee Hive", "Honey Farmer"); 
tellFortune(5, "Abeeeeeela", "The Brown Hause", "Cat mom"); 
tellFortune(700000000, "Ant Queen", "sand castle", "ant breeder"); 

// WhatTheDog(HumanAgeInput); 
// WhatTheDog(HumanAgeInput); 



function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

function tellFortune(Children, PartnerName, Location, Job) {
    var fortune = "You will be a " + Job + " in " + Location+ ", and married to " + PartnerName + " with "+ Children + " kids."; 
    console.log(fortune); 
    return fortune; 
}

function WhatTheDog() {
    var Years = Number(HumanAgeInput.value); 
    DogParagraph.innerHTML = "Your Dog is " + Years*7 + " in doggie years"; 
}




// Assign function to button
button.addEventListener('click', changeBackgroundColor);
// FortuneButton.addEventListener('click', tellFortune); 