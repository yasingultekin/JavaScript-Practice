// let operator = prompt("Enter operator(+, -, *, /): ");
// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));

let operator = document.getElementById("operator");

function add(num1, num2, operator) {
    let result;

    if (operator == "+") {
        result = num1 + num2;
        return result;
    } else {
        alert("Please, enter operator(+): ");
    }
}


function minus(num1, num2, operator) {
    let result;

    if (operator == "-") {
        result = num1 - num2;
        return result;
    } else {
        alert("Please, enter operator(-): ");
    }
}


function divide(num1, num2, operator) {
    let result;

    if (operator == "/") {
        result = num1 / num2;
        return result;
    } else {
        alert("Please, enter operator(/): ");
    }
}

function multiple(num1, num2, operator) {
    let result;

    if (operator == "*") {
        result = num1 * num2;
        return result;
    } else {
        alert("Please, enter operator(*): ");
    }
}

// console.log(multiple(num1, num2, operator));
// document.write(multiple(num1, num2, operator));

function process() {
    if (operator === "+") {
    return add(num1, num2, operator);
    }
    else if (operator === "-"){
    return minus(num1, num2, operator);
    }
    else if (operator === "/"){
    return divide(num1, num2, operator);
    }
    else if (operator === "*"){
    return multiple(num1, num2, operator);
    }
    else {
        alert("Please, try again!");
    }
}

console.log(process());
