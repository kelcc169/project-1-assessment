//variables
var count;

//DOM references
var numberEl;
var inputEl;
var calculator;

//event listeners
document.addEventListener('DOMContentLoaded', function (e) {
    numberEl = document.getElementById('number');
    inputEl = document.getElementById('input');
    calculator = document.getElementById('calculator');

    inputEl.value = '1';

    calculator.addEventListener('click', function (e) {
        var button = e.target.id

        if (button === 'add' || button === 'subtract') {
            calculate(e.target.id);
        };
    });

});

//functions
function calculate(button) {
    var number = parseInt(numberEl.textContent);
    var integer = parseInt(inputEl.value);

    if (button === 'add' ?  count = number + integer : count = number - integer);

    if (count < 0) {
        numberEl.classList.add('redtext');
    } else {
        numberEl.classList.remove('redtext');
    }

    numberEl.textContent = count;
}