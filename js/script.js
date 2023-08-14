function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

let num1 = null;
let num2 = null;
let operator = null;

function operate (num1, num2, operator) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
    } 
}

let currentNumber = "";
let previousNumber = "";
const display = document.querySelector("div.display");

const numberKeys = document.querySelectorAll("div.number");
numberKeys.forEach((numberKey) => {
    numberKey.addEventListener("click", (event) => {
        currentNumber += event.target.textContent;
        display.textContent = currentNumber;
    })
})

