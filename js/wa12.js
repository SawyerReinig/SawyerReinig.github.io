// catfact.ninja/fact
const jokeTitle = document.getElementById('jokeTitle');
const jokeImg = document.getElementById('jokeImg');
const jokeDate = document.getElementById('jokeDate');
const jokeContent = document.getElementById('jokeContent');

// correctly replace the alt text for the image with the alt text provided by the API
// display the title of the comic above the image
// display the date the comic was published below the image
// all of these elements should change when a button is pressed


let Joke = {}; 

  function XKCDJoke(){
    var comicnumber = Math.floor(Math.random() * 100) +1;
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicnumber}/info.0.json`)
      .then(res =>{ 
        if(res.ok){
          return res.json(); 
        }else{
          console.log(res);
          throw new error('Bad response or network error')
        }
        }).then(data => {
          Joke = data; 
          console.log(Joke); //this is the good stuff
          // here we will set the info for the page based on the json. 
          jokeTitle.textContent = Joke.title; 
          // jokeContent.textContent = Joke.transcript;
          jokeImg.src = Joke.img; 
          jokeImg.alt = Joke.alt; 
          jokeDate.textContent = `This joke was estabolished:${Joke.day}/${Joke.month}/${Joke.year}`;
          return(Joke); 

        })
        .catch(error => {console.log(error)})    
      }

  function setParagraphText(text){
    paragraph.textContent = text; 
  }

  XKCDJoke(); 






  function GetJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single')
      .then(res =>{ 
        if(res.ok){
          return res.json(); 
        }else{
          console.log(res);
          throw new error('Bad response or network error')
        }
        }).then(data => {
          Joke = data; 
          console.log(Joke.joke); //this is the good stuff
          setParagraphText(Joke.joke); 
          return(Joke); 

        })
        .catch(error => {console.log(error)})    
      }
