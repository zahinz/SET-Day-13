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
let yourName = sessionStorage.getItem("savedUsername").toLowerCase()

// page2    
let yourMessage = document.getElementById(`yourMessage`)
let messageContainer = document.getElementById(`messageContainer`)
let username = document.getElementById(`username`)
username.innerHTML = yourName

let timeNow = new Date()
timeNow = timeNow.toTimeString().substring(0, 5)
console.log(timeNow);

let dateNow = new Date()
dateNow = dateNow.toDateString()
console.log(dateNow);

console.log(yourName);



// ? set event listener
// page 1
window.addEventListener("keypress", keyPressed)

function keyPressed(evt) {
    if (evt.code == "Enter") {
        sendMessage()
        
        // ? execute sendMessage
        
    }
}


// ? RETRIEVE DATA FORM FIREBASE AND APPEND IN THE HTML
// * on('child_added', function(snapshot) { execute the function })
firebase.database().ref('chat').child('message').on('child_added', function(snapshot) {
    console.log(snapshot.val());
    let nameVal = snapshot.val().name
    let msgVal = snapshot.val().msg
    let timeVal = snapshot.val().time


    // ? create element when firebase got the child
    newDiv = document.createElement('div')

    newName = document.createElement(`span`)
    newName.setAttribute("id", "idName")
    if (nameVal == yourName) {
        newName.innerHTML = nameVal
        newDiv.setAttribute("id", "messageRight")
    }
    else if (nameVal == yourName) {
        newName.innerHTML = nameVal
        newDiv.setAttribute("id", "messageRight")
    }
    else {
        newName.innerHTML = nameVal
        newDiv.setAttribute("id", "messageLeft")
    }
    

    newMessage = document.createElement(`span`)
    newMessage.setAttribute("id", "idMessage")
    newMessage.innerHTML = msgVal

    newTime = document.createElement(`span`)
    newTime.setAttribute("id", "idTime")
    newTime.innerHTML = timeVal

    newDiv.append(newName, newMessage, newTime)
    messageContainer.append(newDiv)

    messageContainer.scrollTo(0,messageContainer.scrollHeight);
})



// ? PUSH DATA TO FIREBASE WHEN EXECUTE FUNCTION SENDMESSAGE()
function sendMessage() {

    if (yourMessage.value !== "") {
        console.log("Message ", yourMessage.value);

        // ? PUSH THE DATA AND STORE IN FIREBASE
        // * database() - is the root database
        // * ref() - what folder
        // * child() - what subfolder
        // * push() - push the value 

        firebase.database().ref('chat').child('message').push({
            name: yourName,
            msg: yourMessage.value,
            time: timeNow,
            date: dateNow
        })
        console.log(yourName);
    }
    else {
        console.log("empty value");
    }

    // ? clear input fields after sendMessage()
    yourMessage.value = ""

    // ? back to name field after sendMessage()
    yourMessage.focus()
    yourMessage.select()

}


// ? TERMINATE SESSION AND BACK TO WELCOME PAGE
function terminateSession() {
    window.location.href = "index.html"
}

