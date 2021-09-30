console.log(`TEST`);


let container = document.getElementById(`container`)

let node = document.createTextNode("This is new input")

let newInput = document.createElement(`input`)

let listHolder = document.getElementById(`listHolder`)

let grandTotal = document.getElementById(`grandTotal`)

let grandTotalPrice = 0




function addNewItem() {

    // ? create new div
    let newDiv = document.createElement(`div`);
    newDiv.classList.add(`row`)
   

    // ? create priceInput
    let priceInput = document.createElement(`input`);
    priceInput.onchange = validation;
    priceInput.setAttribute("type", "number")

    // ? create quantity input
    let qtyInput = document.createElement(`input`);
    qtyInput.onchange = validation;
    qtyInput.setAttribute("type", "number")

    // ? create subtotal para
    let subtotalOutput = document.createElement(`p`)
    subtotalOutput.classList.add(`subtotal`)
    subtotalOutput.innerHTML = "0"


    // ? what to put inside the div which will be created
    newDiv.append(priceInput)
    newDiv.append(qtyInput)
    newDiv.append(subtotalOutput)


    // ? create the dov
    listHolder.append(newDiv);
}

function validation () {
    // ! NEW KNOWLEDGE HERE
    // ? the parent element of the html
    console.log(this.parentNode);

    // declare the parentNode
    let listNode = this.parentNode;

    // get the input element
    // ? querySelectorAll will return as array
    let inputList = listNode.querySelectorAll(`input`)

    // calculate the input value onchange()
    let subTotal = Number(inputList[0].value) * Number (inputList[1].value)

    console.log(subTotal);

    // ? calculate the grand total
    grandTotalPrice += subTotal
    console.log(grandTotalPrice);
    

    // change the p
    // ? querySelector only return the first HTML element
    listNode.querySelector(`p`).innerHTML = subTotal
    grandTotal.innerHTML = grandTotalPrice

    // cache the session storage
    sessionStorage.setItem("savedGrandTotal", grandTotalPrice)
    savedGrandTotal = sessionStorage.getItem("savedGrandTotal")
    console.log("SAVED", savedGrandTotal);

}





