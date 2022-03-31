const calculatorScreen = document.querySelector('.calculator-screen');
const updateSreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateSreen(currentNumber);
    })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}


const operator = document.querySelectorAll(".operator");

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', () => {
    inputPercentage(event.target.value);
})

const inputPercentage = (percentage) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = percentage;
    currentNumber = '0';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
        calculate();
        updateSreen(currentNumber);
        clearAll();        
})

const calculate = () => {
    let result = '';
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber); 
            break;
        default:
            break;    
    }
    currentNumber = result;
    calculationOperator = '';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateSreen(currentNumber);
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateSreen(currentNumber);
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}
