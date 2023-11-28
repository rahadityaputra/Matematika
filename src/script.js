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
const kalimat = [`Berusahalah untuk tidak menjadi manusia yang berhasil tapi berusahalah menjadi manusia yang berguna.`,
                `Nalar hanya akan membawa anda dari A menuju B, namun imajinasi mampu membawa anda dari A ke manapun.`,
                `Seseorang yang tidak pernah membuat kesalahan sebenarnya tak pernah mencoba sesuatu yang baru.`,
                `Di tengah kesulitan terdapat kesempatan.`,
                `Janganlah mencoba menjadi orang sukses. Jadilah orang yang bernilai.`,
                `Hidup itu seperti bersepeda. Kalau kamu ingin menjaga keseimbanganmu, kamu harus terus bergerak maju.`,
                `Jika A adalah kesuksesan hidup, maka A = x + y + z. x adalah bekerja; y adalah bermain; dan z adalah tutup mulutmu.`,
                `Sumber pengetahuan utama adalah pengalaman.`];


// membuat angka random untuk kmengacak kalimat quote
let angka_random = parseInt(Math.random() * 100) % kalimat.length;  
//menangkap element html untuk wadah kalimat quote 
const quote = document.querySelector('.container .main .quote span');


// jalankan function nya setiap 0,1 detik
let count= 0;
const animasi = setInterval(() => {
    quote.innerHTML += kalimat[angka_random][count];
    count++;
    if (count == kalimat[angka_random].length) {
        clearInterval(animasi);
    }

}, 100);

