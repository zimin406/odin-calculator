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
            if (num2 === 0) {
                alert("Dividing by 0 is not allowed.");
            }
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

function inputNumber (inputNumber) {
    if (operator === "=") {
        operator = "";
        previousNumber = "";
    }
    if (currentNumber.length >= 9) return;
    currentNumber += inputNumber;
    currentNumber = (+currentNumber).toString();
    display.textContent = `${currentNumber}`;
}

function inputOperator (inputOperator) {
    if (!previousNumber) {
        operator = inputOperator;   
        previousNumber = currentNumber;
        currentNumber = "";
        display.textContent = `${operator}`;
    }
    else {
        previousNumber = operate(+previousNumber, +currentNumber, operator).toString();
        operator = inputOperator;
        currentNumber = "";
        display.textContent = `${previousNumber}`;
    }
}

function equal () {
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
}

function decimalPoint () {
    if (currentNumber.includes(".")) return; 
    if (currentNumber.length === 0) currentNumber = "0.";
    else currentNumber += ".";
    display.textContent = `${currentNumber}`;
}

numberKeys.forEach((numberKey) => {
    numberKey.addEventListener("click", (event) => {
        inputNumber(event.target.textContent);
    })
});

arithmeticKeys.forEach((arithmeticKey) => {
    arithmeticKey.addEventListener("click", (event) => {
        inputOperator(event.target.textContent);
    })
});

equalKey.addEventListener("click", (event) => { 
    equal();
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
    decimalPoint();
})

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(key)) {
        inputNumber(key);
    }
    else if (["+", "-", "*", "/"].includes(key)) {
        inputOperator(key);
    }
    else if (key === ".") {
        decimalPoint();
    }
    else if (key === "Enter") {
        equal();
    }
    else {
        return;
    }
})
