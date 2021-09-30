console.log(`START`);

// ? declare variable
let username = document.getElementById(`username`)


// ? set event listener
window.addEventListener("keypress", keyPressed)

function keyPressed(evt) {
    if (evt.code == "Enter") {
        console.log(username.value);
        // ? saved to session storage
        sessionStorage.setItem("savedUsername", username.value)
        username.value = ""
        // ? execute submitUsername()
        submitUsername()
    }
}

function submitUsername() {
    console.log(`SUBMITED`);
    window.location.href = "chat.html"
}

