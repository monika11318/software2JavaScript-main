const n1 = document.querySelector('#num1');
const n2 = document.querySelector('#num2');
const op = document.querySelector('#operation');
const btn = document.querySelector('#start');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    const val1 = Number(n1.value);
    const val2 = Number(n2.value);
    let calculation;

    if (op.value === 'add') {
        calculation = val1 + val2;
    } else if (op.value === 'sub') {
        calculation = val1 - val2;
    } else if (op.value === 'multi') {
        calculation = val1 * val2;
    } else if (op.value === 'div') {
        calculation = val1 / val2;
    }

    result.innerText = 'Result: ' + calculation;
});
