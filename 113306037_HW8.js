document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;

    let result;

    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                result = 'Error (division by zero)';
            } else {
                result = number1 / number2;
            }
            break;
        default:
            result = 'Invalid Operation';
    }

    document.getElementById('result').textContent = `Result = ${result.toFixed(2)}`;
});
