// catfact.ninja/fact
const paragraph = document.getElementById('ResponseParagraph');


let Catfact = {}; 
let Joke = {}; 

function catfact(){
fetch('https://catfact.ninja/fact')
  .then(res =>{ 
    if(res.ok){
      return res.json(); 
      // Catfact = res.json(); 
    }else{
      console.log(res);
      throw new error('Bad response or network error')
    }
    }).then(data => {
      Catfact = data; 
      console.log(Catfact.fact);
      setParagraphText(Catfact.fact); 
      return(Catfact); 
    })
    .catch(error => {console.log(error)})

  // console.log(Catfact); 
  }



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

  function setParagraphText(text){
    paragraph.textContent = text; 
  }

  // catfact(); 
  GetJoke(); 
