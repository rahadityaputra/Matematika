 // menangkap element ul.
 const ul = document.querySelector('ul');
 // menangkap element button
 const button = document.querySelector('button'); 
 // menangkap element input
 const input = document.querySelector('input'); 
 // membuat events , jika button diklik maka Daftar List akan bertambah.
 button.addEventListener('click', function(){
     // membuat list baru dengan di dalamnya berisi inputan user
     const liBaru = document.createElement('li');
     liBaru.textContent = input.value + ' ';
     ul.appendChild(liBaru)

     // membuat tombol hapus
     const hapus = document.createElement('button')
     hapus.textContent = 'Hapus';
     liBaru.appendChild(hapus);
     hapus.addEventListener('click', function(){
         ul.removeChild(liBaru);
     })
     
     // membuat tombol selesai
     const selesai = document.createElement('button');
     selesai.textContent = 'Selesai';
     liBaru.appendChild(selesai);
     selesai.addEventListener('click', function(){
         liBaru.style.textDecoration = 'line-through';
     })
     
 })