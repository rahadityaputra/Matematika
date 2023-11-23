/* menangkap element angka di layar kalkulator agar 
 sesuai dengan keinginan user */
const angka_layar = document.querySelector('.container .screen span.number');

// menangkap element button angka / operator agar bisa di menghasilkan nilai 
// memngubah array button menjadi array 
const button = Array.from(document.querySelectorAll('.container .button div'));


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
    return angka1 / angka2;
}

// membuat vaiabel angka pertama dan angka kedua
let angka1;
let angka2;
let operator;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        if (this.getAttribute('name') != 'operator' && this.getAttribute('name') != 'sama-dengan' && this.getAttribute('name') != 'hapus' ) {
            if (angka_layar.textContent.length <= 5) // untuk membatasi digit kalkulator
                angka_layar.innerHTML += this.getAttribute('class');
            
        }
    } )    
}

// angka2 = parseInt(angka_layar.textContent);

// jika operator diklik
const button_operator = document.querySelectorAll('.button div[name="operator"]');
for (let j = 0; j < button_operator.length; j++) {
    button_operator[j].addEventListener('click', function () {
        if (this.getAttribute('class') == '-' && angka_layar.textContent == '') {
                angka_layar.innerHTML += '-';
        } else {
            angka1 = parseInt(angka_layar.textContent);
            angka_layar.innerHTML = '';
            // angka_layar.innerHTML = this.getAttribute('class');
            operator = this.getAttribute('class');
        }
        
    })
}


// jika tombol sama dengan diklik 
const button_sama_dengan = document.querySelector('.button .sama-dengan'); 
button_sama_dengan.addEventListener('click', function () {
    if (operator == '+') {
        angka_layar.innerHTML = tambah(angka1, parseInt(angka_layar.textContent));
    } else if (operator == '-') {
        angka_layar.innerHTML = kurang(angka1, parseInt(angka_layar.textContent));
    } else if (operator == 'x') {
        angka_layar.innerHTML = kali(angka1, parseInt(angka_layar.textContent));
    } else if (operator == '/') {
        angka_layar.innerHTML = bagi(angka1, parseInt(angka_layar.textContent));
        
    }
})

document.querySelector('.button .clear').addEventListener('click', function () {
    angka1 = undefined;
    angka2 = undefined;
    operator = undefined;
    angka_layar.innerHTML = '';
});