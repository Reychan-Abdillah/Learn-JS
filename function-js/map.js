const angka = [1,2,3,4,5]


// const map = angka.map(e => e)

// const foreach = angka.forEach(e => e )
// console.log(`hasil map ${map}`)
// console.log( `hasil foreach ${foreach}`)
// console.log(angka)


angka.forEach(e => console.log(e))


const hasil = angka.forEach(e => e)
console.log(hasil)


// foreach tidak dapat membuat array baru
// tujuan foreach = melakukan aksi perulangan (side effect)
// map dapat membuat array baru, mengubah setiap nilai dari array, (tapi bukan mengubah array asli) (transormasi data)

// Array Iteration Methods

// map digunakan untuk membuat array baru. map tidak mengubah array lama
// filter digunakan untuk mengambil nilai sesuai kualifikasi
