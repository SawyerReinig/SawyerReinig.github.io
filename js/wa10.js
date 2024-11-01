// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

storytext = "Once apon a time 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob Was Passing by at the time, but was not looking for trouble — :insertx: weighs 300 pounds, and it was not a good day to die hard."

const insertX = ["John Cena", "The Rock", "Jonny Heard"];
const insertY = ["China", "Taiwon", "Disney Production Studios"];
const insertZ = ["Said 'Bing Chilling'", "Filed a suit", "Got Really Big"];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
newStory = storytext; 
xItem = randomValueFromArray(insertX); 
yItem = randomValueFromArray(insertY); 
zItem = randomValueFromArray(insertZ); 

newStory = newStory.replace(":insertx:", xItem);
newStory = newStory.replace(":insertx:", xItem);

newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(21.4286) + " stones";
    const temperature =  Math.round(34.4444) + " centigrade";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}