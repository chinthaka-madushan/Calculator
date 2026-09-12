let number1 = 0;
let number2 = 0;
let finalNumber = 0;
let action = "";

function getDisplay() {
    return document.getElementById("display");
}

function addNumber(number) {
    let display = getDisplay();

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += number;
}

function btnAc() {
    let display = getDisplay();

    display.value = "";
    number1 = 0;
    number2 = 0;
    finalNumber = 0;
    action = "";
}

function btnDel() {
    let display = getDisplay();

    if (display.value === "Error") {
        display.value = "";
        return;
    }

    display.value = display.value.slice(0, -1);
}

function btnDivision() {
    addOperator("/");
}

function btnMultiplication() {
    addOperator("*");
}

function btnAddition() {
    addOperator("+");
}

function btnSubtraction() {
    addOperator("-");
}

function addOperator(operator) {
    let display = getDisplay();
    let value = display.value.trim();

    if (value === "" || value === "Error") {
        return;
    }

    if (/[+\-*/]$/.test(value)) {
        display.value = value.slice(0, -1) + operator;
        return;
    }

    display.value = value + " " + operator + " ";
}

function setDot() {
    let display = getDisplay();
    let value = display.value;

    if (value === "Error") {
        display.value = "";
        return;
    }

    let parts = value.split(/[+\-*/]/);
    let currentNumber = parts[parts.length - 1].trim();

    if (currentNumber.includes(".")) {
        return;
    }

    if (currentNumber === "" || currentNumber === "!") {
        display.value += "0.";
    } else {
        display.value += ".";
    }
}

function setNumpi() {
    let display = getDisplay();

    if (display.value === "Error") {
        display.value = "";
    }

    let value = display.value;

    if (value !== "" && /[\dπ!)]$/.test(value)) {
        display.value += " * π";
    } else {
        display.value += "π";
    }
}

function setFac() {
    let display = getDisplay();
    let value = display.value.trim();

    if (value === "" || value === "Error") {
        return;
    }

    if (/[+\-*/]\s*$/.test(value)) {
        return;
    }

    if (!value.endsWith("!")) {
        display.value = value + "!";
    }
}

function btnEnter() {
    let display = getDisplay();
    let expression = display.value.trim();

    if (expression === "" || expression === "Error") {
        return;
    }

    try {
        finalNumber = evaluateExpression(expression);

        if (!Number.isFinite(finalNumber)) {
            throw new Error();
        }

        finalNumber = formatNumber(finalNumber);
        display.value = finalNumber;

        number1 = finalNumber;
        number2 = 0;
        action = "";
    } catch (error) {
        display.value = "Error";
        number1 = 0;
        number2 = 0;
        finalNumber = 0;
        action = "";
    }
}

function evaluateExpression(expression) {
    expression = expression.replace(/π/g, Math.PI.toString());
    expression = expression.replace(/\s+/g, "");

    let tokens = tokenize(expression);
    let values = [];
    let operators = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        if (!isNaN(token)) {
            values.push(Number(token));
        } else if (token === "!") {
            if (values.length === 0) {
                throw new Error();
            }

            let value = values.pop();

            if (value < 0 || !Number.isInteger(value)) {
                throw new Error();
            }

            values.push(factorial(value));
        } else if (isOperator(token)) {
            while (
                operators.length > 0 &&
                precedence(operators[operators.length - 1]) >= precedence(token)
            ) {
                applyOperator(values, operators.pop());
            }

            operators.push(token);
        } else {
            throw new Error();
        }
    }

    while (operators.length > 0) {
        applyOperator(values, operators.pop());
    }

    if (values.length !== 1) {
        throw new Error();
    }

    return values[0];
}

function tokenize(expression) {
    let tokens = [];
    let number = "";

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if ((char >= "0" && char <= "9") || char === ".") {
            number += char;
        } else if (isOperator(char) || char === "!") {
            if (number !== "") {
                if ((number.match(/\./g) || []).length > 1) {
                    throw new Error();
                }

                tokens.push(number);
                number = "";
            }

            tokens.push(char);
        } else {
            throw new Error();
        }
    }

    if (number !== "") {
        if ((number.match(/\./g) || []).length > 1) {
            throw new Error();
        }

        tokens.push(number);
    }

    return tokens;
}

function isOperator(value) {
    return value === "+" ||
           value === "-" ||
           value === "*" ||
           value === "/";
}

function precedence(operator) {
    if (operator === "+" || operator === "-") {
        return 1;
    }

    if (operator === "*" || operator === "/") {
        return 2;
    }

    return 0;
}

function applyOperator(values, operator) {
    if (values.length < 2) {
        throw new Error();
    }

    let number2 = values.pop();
    let number1 = values.pop();
    let result;

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;

        case "-":
            result = number1 - number2;
            break;

        case "*":
            result = number1 * number2;
            break;

        case "/":
            if (number2 === 0) {
                throw new Error();
            }

            result = number1 / number2;
            break;

        default:
            throw new Error();
    }

    values.push(result);
}

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;

        if (!Number.isFinite(result)) {
            throw new Error();
        }
    }

    return result;
}

function formatNumber(number) {
    if (Number.isInteger(number)) {
        return number;
    }

    return Number(number.toFixed(10));
}

function setNum9() {
    addNumber("9");
}

function setNum8() {
    addNumber("8");
}

function setNum7() {
    addNumber("7");
}

function setNum6() {
    addNumber("6");
}

function setNum5() {
    addNumber("5");
}

function setNum4() {
    addNumber("4");
}

function setNum3() {
    addNumber("3");
}

function setNum2() {
    addNumber("2");
}

function setNum1() {
    addNumber("1");
}

function setNum0() {
    addNumber("0");
}

function setNum00() {
    addNumber("00");
}