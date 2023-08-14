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
const allClearKey = document.querySelector("div.all-clear");
const clearKey = document.querySelector("div.clear");
const decimalPointKey = document.querySelector("div.decimal-point");
const plusMinusKey = document.querySelector("div.plus-minus");
const allKeys = document.querySelectorAll("div.key");

numberKeys.forEach((numberKey) => {
    numberKey.addEventListener("click", (event) => {
        if (operator === "=") {
            operator = "";
            previousNumber = "";
        }
        if (currentNumber.length >= 9) return;
        currentNumber += event.target.textContent;
        currentNumber = (+currentNumber).toString();
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
            previousNumber = operate(+previousNumber, +currentNumber, operator).toString();
            operator = event.target.textContent;
            currentNumber = "";
            display.textContent = `${previousNumber}`;
        }       
    })
});

equalKey.addEventListener("click", (event) => { 
    if (["+", "-", "*", "/"].includes(operator)) {
        currentNumber = operate(+previousNumber, +currentNumber, operator).toString();
        operator = "=";
        if (currentNumber.length >= 9) {
            display.textContent = `${(+currentNumber).toExponential(3)}`;
        }
        else {
            display.textContent = `${currentNumber}`;
        }
    }
});

allClearKey.addEventListener("click", (event) => {
    previousNumber = "";
    currentNumber = "0";
    operator = "";
    display.textContent = `${currentNumber}`;
});

clearKey.addEventListener("click", (event) => {
    if (currentNumber.length > 1) {
        currentNumber = currentNumber.slice(0, -1);
    }
    else {
        currentNumber = "0";
    }
    display.textContent = `${currentNumber}`;
});

plusMinusKey.addEventListener("click", (event) => {
    currentNumber = (-(+currentNumber)).toString();
    display.textContent = `${currentNumber}`;
})

decimalPointKey.addEventListener("click", (event) => {
    if (currentNumber.includes(".")) return; 
    if (currentNumber.length === 0) currentNumber = "0.";
    else currentNumber += ".";
    display.textContent = `${currentNumber}`;
})
