let angka1;
let angka2;
let operator;
const angka_layar = document.querySelector('.container .screen span.number');
const button_sama_dengan = document.querySelector('.button .sama-dengan'); 
const button_clear = document.querySelector('.button .clear'); 
const button_angka = Array.from(document.querySelectorAll('.container .button div[name="angka"]'));
const button_operator = Array.from(document.querySelectorAll('.button div[name="operator"]'));

function input_angka() {
    if (angka_layar.textContent.length < 6) {
        if (angka_layar.textContent == operator) {
            angka_layar.innerHTML = '';
        } 
            angka_layar.innerHTML += this.getAttribute('class');         
    }
}

function input_operator() {
    if (this.getAttribute('class') == '-' && angka_layar.textContent == '') {
        angka_layar.innerHTML += '-';
    } else {
        angka1 = Number(angka_layar.textContent);
        angka_layar.innerHTML = this.getAttribute('class');
        operator = this.getAttribute('class');
    }
}

function clear() {
    angka1 = undefined;
    angka2 = undefined;
    operator = undefined;
    angka_layar.innerHTML = '';
}

function hasil(){
    angka2 = Number(angka_layar.textContent);
    if (operator == '+') {
        angka_layar.innerHTML = tambah(angka1,angka2);
    } else if (operator == '-') {
        angka_layar.innerHTML = kurang(angka1, angka2);
    } else if (operator == 'x') {
        angka_layar.innerHTML = kali(angka1, angka2);
    } else if (operator == ':') {
        angka_layar.innerHTML = bagi(angka1, angka2);
    }
}

function tambah(angka1, angka2) {
    return angka1 + angka2;
}

function kurang(angka1, angka2) {
    return angka1 - angka2;
}

function kali(angka1, angka2) {
    return angka1 * angka2;
}

function bagi(angka1, angka2) {
    return (angka1 / angka2).toFixed(4); // karena supaya angka dibelakang koma di batasi
}


for (let i = 0; i < button_angka.length; i++) { button_angka[i].addEventListener('click',input_angka); }
for (let j = 0; j < button_operator.length; j++) { button_operator[j].addEventListener('click', input_operator); }
button_sama_dengan.addEventListener('click', hasil);
button_clear.addEventListener('click', clear);