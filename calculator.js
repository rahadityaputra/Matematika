// memanipulasi nomor di layar
const number = document.querySelector('.container .screen span.number');
number.innerHTML = '';

const one = document.querySelector('.container .button  .one');
const two = document.querySelector('.container .button  .two');
const tree = document.querySelector('.container .button  .tree');
const four = document.querySelector('.container .button  .four');
const five = document.querySelector('.container .button  .five');
const six = document.querySelector('.container .button  .six');
const seven = document.querySelector('.container .button  .seven');
const eight = document.querySelector('.container .button  .eight');
const nine = document.querySelector('.container .button  .nine');
const zero = document.querySelector('.container .button  .zero');
const clear = document.querySelector('.container .button  .clear');

one.addEventListener('click', function () {
    number.innerHTML += '1';
})
two.addEventListener('click', function () {
    number.innerHTML += '2';
})
tree.addEventListener('click', function () {
    number.innerHTML += '3';
})
four.addEventListener('click', function () {
    number.innerHTML += '4';
})
five.addEventListener('click', function () {
    number.innerHTML += '5';
})
six.addEventListener('click', function () {
    number.innerHTML += '6';
})
seven.addEventListener('click', function () {
    number.innerHTML += '7';
})

zero.addEventListener('click', function () {
    number.innerHTML += '0';
})
eight.addEventListener('click', function () {
    number.innerHTML += '8';
})
nine.addEventListener('click', function () {
    number.innerHTML += '9';
})
clear.addEventListener('click', function () {
    number.innerHTML = '';
})