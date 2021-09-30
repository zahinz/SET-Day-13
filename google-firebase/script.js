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


// ? Variable declaration

let yourName = document.getElementById(`yourName`)
let yourMessage = document.getElementById(`yourMessage`)
let messageContainer = document.getElementById(`messageContainer`)

let timeNow = new Date()
timeNow = timeNow.toTimeString().substring(0, 5)
console.log(timeNow);

let dateNow = new Date()
dateNow = dateNow.toDateString()
// console.log(dateNow);


// ? prompt

let myName = prompt("Hello what is your name?")
console.log(myName);
yourName.value = myName





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
    if (nameVal == "zahin") {
        newName.innerHTML = nameVal
        newDiv.setAttribute("id", "messageRight")
    }
    else if (nameVal == "Zahin") {
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







// ? SEND MESSAGE FUNCTION AND PUSH TO FIREBASE

window.addEventListener("keydown", keyPressed)

function keyPressed(evt) {
    if (evt.code == "Enter") {
    sendMessage()
    }
}

function sendMessage() {

    if (yourMessage.value !== "" && yourName.value !== "") {
        console.log("Name ", yourName.value, "Message ", yourMessage.value);

        // ? PUSH THE DATA AND STORE IN FIREBASE
        // * database() - is the root database
        // * ref() - what folder
        // * child() - what subfolder
        // * push() - push the value 

        firebase.database().ref('chat').child('message').push({
            name: yourName.value,
            msg: yourMessage.value,
            time: timeNow,
            date: dateNow
        })
    }
    else {
        console.log("empty value");
    }

    // newDiv = document.createElement('div')
    // newDiv.setAttribute("id", "messageRight")

    // newName = document.createElement(`span`)
    // newName.setAttribute("id", "idName")
    // newName.innerHTML = yourName.value

    // newMessage = document.createElement(`span`)
    // newMessage.setAttribute("id", "idMessage")
    // newMessage.innerHTML = yourMessage.value

    // newDiv.append(newName, newMessage)
    // messageContainer.append(newDiv)

    // ? clear input fields after sendMessage()
    yourName.value = yourName.value
    yourMessage.value = ""

    // ? back to name field after sendMessage()
    yourMessage.focus()
    yourMessage.select()

}

