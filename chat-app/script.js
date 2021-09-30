// ! FIREBASE DATABASE

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA-wm0nrB9T4aahSUHkcN586kb5xC8ueYg",
authDomain: "chat-room-b9325.firebaseapp.com",
databaseURL: "https://chat-room-b9325-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "chat-room-b9325",
storageBucket: "chat-room-b9325.appspot.com",
messagingSenderId: "1029087111351",
appId: "1:1029087111351:web:98606be1f0b324e5000532"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("FIREBASE APP", firebase);
console.log(" ");
    

// ! END OF FIREBASE DATABASE


// ? declare variable
// page 1
let username = document.getElementById(`username`)
let yourName = sessionStorage.getItem("savedUsername")



// ? set event listener
// page 1
window.addEventListener("keypress", keyPressed)

function keyPressed(evt) {
    if (evt.code == "Enter") {
        if (username.value !== "") {
            console.log(username.value);
            // ? saved to session storage
            sessionStorage.setItem("savedUsername", username.value)
            yourName = sessionStorage.getItem("savedUsername")
            // ? execute submitUsername()
            submitUsername()
            // ? clear the username input
            username.value = ""
        }
        else {
            console.log(username.value);
            alert("Oppsie, anon is not allowed 🙅🏻‍♀️")
        }

        
    }
}

// page 1
function submitUsername() {
    console.log(`SUBMITED`);
    window.location.href = "chat.html"
}

