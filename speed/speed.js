
let Startbutton = document.querySelector ("input[type='button']")



Startbutton
.addEventListener("click",startGame)

function startGame() {
    Startbutton
    .classList.add("hidden")



}


function randomNumber (max){ 
    return Math.floor(Math.random() * (max+1))
 }    


// genereaza litera aleatorie
 function randomLetter () {
     let randomCode =  return 65 + randomNumber(25)
     return String.fromCharCode(randomCode)
 
 }