// // // // // Contoh sederhana Function :

// // // // // function tambah(a, b) {
// // // // //     return a + b
// // // // // }
// // // // // console.log(tambah(1,2))


// // // // // menyimpan nilai di dalam variabel 
// // // // // function tambahA(a, b) {
// // // // //     return (a + b)
// // // // // }

// // // // // const hasil = tambahA(10, 5);

// // // // // console.log("Hasil:", hasil);


// // // // // 
// // // // // function kosong() {
// // // // //     return;
// // // // // }

// // // // // kosong()


// // // // // kita juga bisa membuat default parameter untuk meminimalisir  jika parameter tidak di isi
// // // // // function sapa(nama = "Teman") {
// // // // //     return `Halo, ${nama}!`;
// // // // // }

// // // // // console.log(sapa());
// // // // // console.log(sapa("Reyhan"));




// // // // // Tugas C — Logika function
// // // // //     Buat function bernama cekDiskon yang menerima parameter totalBelanja.
// // // // // - Jika total belanja minimal Rp100.000, kembalikan true.
// // // // // - Jika kurang dari Rp100.000, kembalikan false.
// // // // // - Uji dengan nilai 150000 dan 50000.


// // // // // const nama = "Reyhan";

// // // // // function perkenalan() {
// // // // //     const umur = 19;
// // // // //     console.log(nama);
// // // // //     console.log(umur);
// // // // // }

// // // // // perkenalan();
// // // // // console.log(nama);
// // // // // // console.log(umur);


// // // // const tambah = (a, b) => a + b;
// // // // Mengapa bisa tanpa return dan kurung kurawal ?

// // // //  Karena jika arrow function hanya berisi satu ekspresi dan tidak menggunakan { },
// // // //  hasil ekspresi itu otomatis dikembalikan.Ini disebut implicit return.


// // // function sapa(nama) {
// // //     console.log(`halo ${nama}`)
// // // }



// // // function prosesUser(test, nama) {
// // //     return test(nama)
// // // }




// // // console.log(prosesUser(sapa, "Reyhan"))


// // function jalankan(callback) {
// //     callback();
// // }

// // function sapa() {
// //     console.log("Halo!");
// // }

// // jalankan(sapa);

// // function tampilkanHarga(item) {
// //     console.log(item);
// // }

// // const harga = [10000, 20000, 30000];

// // harga.forEach(tampilkanHarga);




// function jalankan(callback) {
//     console.log("Mulai");
//     callback();
//     console.log("Selesai");
// }

// function sapa() {
//     console.log("Halo!");
// }

// jalankan(sapa());

// const angka = [1, 2, 3];

// angka.forEach(function (item) {
//     console.log(item);
// });




