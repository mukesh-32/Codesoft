let display = document.getElementById('display');
let currentValue = '';

function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

function appendOperator(operator) {
    if (currentValue !== '' && !currentValue.includes(operator)) {
        currentValue += operator;
        display.value = currentValue;
    }
}

function calculateResult() {
    try {
        currentValue = eval(currentValue).toString();
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}
