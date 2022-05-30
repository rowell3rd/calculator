
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const num3 = document.querySelector('.num3')
const num4 = document.querySelector('.num4')
const num5 = document.querySelector('.num5')
const num6 = document.querySelector('.num6')
const num7 = document.querySelector('.num7')
const num8 = document.querySelector('.num8')
const num9 = document.querySelector('.num9')
const displayValue = document.querySelector('.display-value')

//FUNCTION BUTTON

const addBtn =  document.querySelector('.operation-add')
const subtractBtn =  document.querySelector('.operation-subtract')
const multiplyBtn =  document.querySelector('.operation-multiply')
const divideBtn =  document.querySelector('.operation-divide')
const equalsBtn =  document.querySelector('.operation-equals')
const clearBtn =  document.querySelector('.operation-clear')


function add(a,b){
    displayValue.value = a + b 
}

function subtract(a,b){
    displayValue.value= a-b 
}

function multiply(a,b){
    displayValue.value= a*b
}

function divide(a,b){
    displayValue.value= a/b
}



function operate(symbol, num1, num2){
    if(symbol === "+"){
        return add(num1,num2)
    }else if(symbol === "-"){
        return subtract(num1,num2)
    }else if(symbol === "*"){
        return multiply(num1,num2)
    }else if(symbol === "/"){
        return divide(num1,num2)
    }
}

//BUTTONS

num1.addEventListener('click',() => displayNumber(1))
num2.addEventListener('click',() => displayNumber(2))
num3.addEventListener('click',() => displayNumber(3))
num4.addEventListener('click',() => displayNumber(4))
num5.addEventListener('click',() => displayNumber(5))
num6.addEventListener('click',() => displayNumber(6))
num7.addEventListener('click',() => displayNumber(7))
num8.addEventListener('click',() => displayNumber(8))
num9.addEventListener('click',() => displayNumber(9))


// SAVE VALUE AND DISPLAY
let firstValue 
let nowValue 
let operator

function displayNumber(num){
    displayValue.value = num
    nowValue = num
    return nowValue
}

// OPERATIONS FUNCTION
addBtn.addEventListener('click', () => {
    firstValue = nowValue
    nowValue = ''
    operator = '+'
})
subtractBtn.addEventListener('click', () => {
    firstValue = nowValue
    nowValue = ''
    operator = '-'
})
multiplyBtn.addEventListener('click', () => {
    firstValue = nowValue
    nowValue = ''
    operator = '*'
})
divideBtn.addEventListener('click', () => {
    firstValue = nowValue
    nowValue = ''
    operator = '/'
})

equalsBtn.addEventListener('click', () =>{

    operate(operator,firstValue,nowValue)
})

clearBtn.addEventListener('click', () => {

    firstValue = ''
    nowValue = ''
    displayValue.value = ''
})

// displayValue.textContent = '343'