let button = document.getElementById("check")
button.addEventListener("click", function () {


    let planet = document.getElementById("RedPlanet")

    planet.innerText = "Alien Invasion"
    planet.classList.add("alert")


    // planet.style.color = "red"
    // planet.style.fontWeight = "bold"
    // planet.remove ()


})



document.getElementById("reset")
    .addEventListener("click", function () {


        let planet = document.getElementById("RedPlanet")
        planet.innerText = "Nothing to report"
        planet.classList.remove("alert")
    })


    document.getElementById ("GreenPlanet")
    .addEventListener("click", function(){
       document.getElementById ("GreenPlanet").classList.add("alert")
    })