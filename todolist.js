const button_tambah_list = document.querySelector('button'); 
const input = document.querySelector('input'); 
const daftar_list = document.querySelector('.container .daftar-list');
const list = document.getElementsByTagName('li');

 function buatTombol(list_baru) {
   // membuat tombol hapus
   const tombol_hapus = document.createElement('button');
   tombol_hapus.textContent = 'Hapus';
   list_baru.appendChild(tombol_hapus);
   tombol_hapus.addEventListener('click', () => hapusList(list_baru));
   
   // membuat tombol selesai
   const tombol_selesai = document.createElement('button');
   tombol_selesai.textContent = 'Selesai';
   list_baru.appendChild(tombol_selesai);
   tombol_selesai.addEventListener('click', () => selesaiList(list_baru));  
 }

function tambahList() {
         if (input.value != '' && cekList() ) {
             const list_baru = document.createElement('li');
             list_baru.textContent = input.value;
             daftar_list.appendChild(list_baru);
             buatTombol(list_baru);
            } 
            input.value = '';
 }

 // funtion untuk menandai list sudah selesai
 function selesaiList(list) {
    list.style.textDecoration = 'line-through';
 }

 // function untuk hapus list 
 function hapusList(list) {
    daftar_list.removeChild(list);
 }

 function cekList() {
   if (list.length == 0) {
      return true;
   } else {
      let count = 0;
      for (let i = 0; i < list.length; i++) {
         if (list[i].firstChild.textContent == input.value) {
            count++;
         }
      }
      if (count == 0) {
         return true;
      } else {
         return false;
      }
   }
 }
 // jika button diklik maka akan menjalankan function tambahlist
 button_tambah_list.addEventListener('click', tambahList);