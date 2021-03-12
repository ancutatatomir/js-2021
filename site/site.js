document.querySelector("#switch")
.addEventListener("click", changeTheme)


var theme = localStorage.getItem("theme")


function setTheme(theme) {
    let css = document.querySelector("#darkcss")
    css.disabled = theme == "light" ? true : false



    // let symbol = css.disabled ? "&#9789;" : "&#9788;"
    // document.querySelector("#switch").innerHTML = symbol

    localStorage.setItem("theme", theme)



}



function changeTheme() {
    theme = them == "light"? "dark": "light"
    setTheme(theme)
}

// inversam valoarea lui disabled
function changeTheme(){
    let css = document.querySelector("#darkcss")
    css.disabled = !css.disabled





// let symbol = css.disabled ? "&#9789;" : "&#9788;"
// document.querySelector("#switch").innerHTML = symbol


let theme = css.disabled ? "light" : "dark"
localStorage.setItem("theme", theme)


}

//css.disabled = css.disabled ? false : true 

// if (css.disabled) {
  //  css.disabled = false
// } else { 
 //   css.disabled = true 
// }

