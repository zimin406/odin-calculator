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


function operate (num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
    } 
}

let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.querySelector("div.display");
const numberKeys = document.querySelectorAll("div.number");
const arithmeticKeys = document.querySelectorAll("div.arithmetic");
const equalKey = document.querySelector("div.equal");


numberKeys.forEach((numberKey) => {
    numberKey.addEventListener("click", (event) => {
        currentNumber += event.target.textContent;
        display.textContent = `${currentNumber}`;
    })
});

arithmeticKeys.forEach((arithmeticKey) => {
    arithmeticKey.addEventListener("click", (event) => {
        if (!previousNumber) {
            operator = event.target.textContent;
            previousNumber = currentNumber;
            currentNumber = "";
            display.textContent = `${operator}`;
        }
        else {
            previousNumber = operate(+previousNumber, +currentNumber, operator);
            operator = event.target.textContent;
            currentNumber = "";
            display.textContent = `${previousNumber}`;
        }       
    })
});

equalKey.addEventListener("click", (event) => {
    if (!!previousNumber) {
        if (!operator) {
            currentNumber = previousNumber;
            previousNumber = "";
        }
        else {
            currentNumber = operate(+previousNumber, +currentNumber, operator);
            previousNumber = "";
            operator = "";
        }
    }
    display.textContent = `${currentNumber}`;
});
