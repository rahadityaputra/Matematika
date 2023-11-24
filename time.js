// ini untuk membuat tampilan waktu real time di website.

let day = (new Date().getDay() == 1)? 'Senin' 
            : (new Date().getDay() == 2)? 'Selasa' 
            : (new Date().getDay() == 3)? 'Rabu' 
            : (new Date().getDay() == 4) ? 'Kamis' 
            : (new Date().getDay() == 5) ? 'Jumat' 
            : (new Date().getDay() == 6) ? 'Sabtu' 
            : 'minggu';

const time = document.querySelector('.topbar .time span');

let ucapan = (new Date().getHours() <= 10) ? 'Selamat Pagi' 
            : (new Date().getHours() <= 14) ? 'Selamat Siang'
            : (new Date().getHours() <= 18) ? 'Selamat Sore'
            : 'Selamat Malam';
            
setInterval(function () {
    time.innerHTML = `${ucapan} ${day}, ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
}, 1000);


// animasi quote

let kalimat = `Berusahalah untuk tidak menjadi manusia yang berhasil tapi berusahalah menjadi manusia yang berguna.`
const quote = document.querySelector('.container .main .quote');
let count= 0;
const animasi = setInterval(() => {
    quote.innerHTML += kalimat[count];
    count++;
    if (count == kalimat.length) {
        clearInterval(animasi);
    }
}, 100);