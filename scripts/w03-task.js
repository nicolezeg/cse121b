/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {

    return number1 + number2;

}

function addNumbers () {

    let addNumber1 = Number(document.querySelector('#add1').value);

    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2) {

    return subtract1 - subtract2;
}

function subtractNumbers() {

    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {

    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {

    return dividend / divisor;
}

function divideNumbers() {

    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function() {
    
    let subTotal = Number(document.querySelector('#numeric').value);
     
    if (document.getElementById('member').checked) {
        subTotal *= 0.8;
    }

    document.querySelector('#numeric').value = subTotal.toFixed(2);
    
    let totalSpan = document.querySelector('#total'); 
    
    totalSpan.textContent = `Total: $${subTotal.toFixed(2)}`; 
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13];

document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);

document.getElementById('odds').innerHTML = oddNumbers;

/* Output Evens Only Array */
let evens = numbersArray.filter(number => number % 2 === 0);

document.getElementById('evens').innerHTML = evens;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);

document.getElementById('sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedNumbers = numbersArray.map( number => number * 2);

document.getElementById('multiplied').innerHTML = multipliedNumbers;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map( number => number * 2).reduce((acc, curr) => acc + curr, 0);

document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;
