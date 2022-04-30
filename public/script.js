//Import db functions

function div(name) { // set active div on click
    var active = Array.from(document.getElementsByClassName("active")) // get collection of active divs
    active.forEach(function (currentdiv) {
        currentdiv.setAttribute("class", "hidden");
    })

    document.getElementById(name).setAttribute("class", "active") // show clicked div
}

function submitSignIn() {
    var username = document.getElementById("username")
    var password = document.getElementById("password")

}

function submitSignUp() {

}