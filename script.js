const waktu = document.querySelector('.container .main .waktu span');
const quote = document.querySelector('.container .main .quote span');
const kataUcapan = document.querySelector('.container .main .ucapan span');

// untuk mengambil waktu dari sistem komputer kita

// ini menggun
let day = (new Date().getDay() == 1)? 'Senin' 
            : (new Date().getDay() == 2)? 'Selasa' 
            : (new Date().getDay() == 3)? 'Rabu' 
            : (new Date().getDay() == 4) ? 'Kamis' 
            : (new Date().getDay() == 5) ? 'Jumat' 
            : (new Date().getDay() == 6) ? 'Sabtu' 
            : 'minggu';


let ucapan = (new Date().getHours() <= 10) ? 'Selamat Pagi' 
            : (new Date().getHours() <= 14) ? 'Selamat Siang'
            : (new Date().getHours() <= 18) ? 'Selamat Sore'
            : 'Selamat Malam';
            
function getRealTime() {
    kataUcapan.innerHTML = `${ucapan}`;
    waktu.innerHTML = `${day}, ${new Date().getHours()}:${new Date().getMinutes()}`;
}

setInterval(getRealTime, 1000);

const kalimat = [`Berusahalah untuk tidak menjadi manusia yang berhasil tapi berusahalah menjadi manusia yang berguna.`,
                `Nalar hanya akan membawa anda dari A menuju B, namun imajinasi mampu membawa anda dari A ke manapun.`,
                `Seseorang yang tidak pernah membuat kesalahan sebenarnya tak pernah mencoba sesuatu yang baru.`,
                `Di tengah kesulitan terdapat kesempatan.`,
                `Janganlah mencoba menjadi orang sukses. Jadilah orang yang bernilai.`,
                `Hidup itu seperti bersepeda. Kalau kamu ingin menjaga keseimbanganmu, kamu harus terus bergerak maju.`,
                `Jika A adalah kesuksesan hidup, maka A = x + y + z. x adalah bekerja; y adalah bermain; dan z adalah tutup mulutmu.`,
                `Sumber pengetahuan utama adalah pengalaman.`];

let angkaRandom = parseInt(Math.random() * 100) % kalimat.length;  // math.random untuk menghasilkan angka acak

let count= 0;
const animasi = setInterval(() => {
    quote.innerHTML += kalimat[angkaRandom][count];
    count++;
    if (count == kalimat[angkaRandom].length) {
        clearInterval(animasi); // untuk menghentikan setInterval
    }
}, 100);

