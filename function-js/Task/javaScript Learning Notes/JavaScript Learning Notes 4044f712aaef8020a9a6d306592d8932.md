# JavaScript Learning Notes

# JavaScript Fundamentals

📅 **D: 25-10-2026**

## 1. Function dan Parameter

Function adalah sekumpulan instruksi untuk menjalankan tugas tertentu dan dapat digunakan kembali dengan cara dipanggil.

- **Parameter:** variabel yang ditentukan saat function dibuat untuk menerima argumen.
- **Argumen:** nilai yang diberikan saat function dipanggil.

```
function tambahAngka(a, b) {
    return a + b;
}

tambahAngka(5, 3);
```

`a` dan `b` adalah parameter, sedangkan `5` dan `3` adalah argumen.

Nama function umumnya menggunakan `camelCase`, diawali huruf kecil, dan tanpa spasi.

Contoh: `tambahAngka()`, `hitungTotal()`.

## 2. Return dalam Function

`return` mengembalikan nilai dari function agar dapat disimpan atau digunakan kembali.

```
function tambah(a, b) {
    return a + b;
}

const hasil = tambah(5, 3);

console.log(hasil); // 8
```

Jika function tidak mengembalikan nilai menggunakan `return`, hasil pemanggilannya adalah `undefined`.

```
function tambah(a, b) {
    console.log(a + b);
}

const hasil = tambah(5, 3);

console.log(hasil);
// 8
// undefined
```

`console.log()` menampilkan nilai di console, sedangkan `return` mengembalikan nilai dari function.

## 3. Scope

Scope adalah aturan yang menentukan di mana suatu variabel dapat diakses.

- **Global scope:** variabel yang dideklarasikan di luar function dapat diakses dari bagian kode yang berada dalam cakupannya.
- **Function scope:** variabel yang dideklarasikan di dalam function menggunakan `var`, `let`, atau `const` hanya dapat diakses di dalam function tersebut.
- **Block scope:** variabel `let` dan `const` yang dideklarasikan di dalam block `{}` hanya dapat diakses di dalam block tersebut.

```
let angka = 10;

function tesScope() {
    let angka = 20;
    return angka;
}

console.log(tesScope()); // 20
console.log(angka);      // 10
```

Kedua variabel `angka` berbeda karena berada di scope yang berbeda.

## 4. Callback Function

Callback adalah function yang diberikan sebagai argumen kepada function lain, kemudian dipanggil oleh function penerima.

```
function sapa(nama) {
    console.log(`Halo ${nama}`);
}

function prosesUser(callback, nama) {
    return callback(nama);
}

prosesUser(sapa, "Reychan");
```

Output:

```
Halo Reychan
```

- `sapa` adalah function yang dikirim sebagai callback.
- `callback` adalah parameter yang menerima function.
- `callback(nama)` menjalankan function tersebut.

**Perbedaan `sapa` dan `sapa()`:**

- `sapa` merujuk pada function tanpa menjalankannya.
- `sapa()` menjalankan function tersebut.

Callback digunakan pada array methods seperti `map()` dan `forEach()`, serta pada proses asynchronous seperti `setTimeout()`.

Callback tidak selalu asynchronous. Callback pada `map()` dan `forEach()` dijalankan secara synchronous pada penggunaan biasa.

## 5. Array Methods

### `map()`

Mengolah setiap elemen array dan menghasilkan array baru dari nilai yang dikembalikan callback.

```
const angka = [1, 2, 3];

const hasil = angka.map(item => {
    return item * 2;
});

console.log(hasil); // [2, 4, 6]
console.log(angka); // [1, 2, 3]
```

### `filter()`

Menghasilkan array baru yang berisi elemen-elemen yang memenuhi kondisi.

```
const angka = [10, 15, 20, 25];

const hasil = angka.filter(item => item >= 20);

console.log(hasil); // [20, 25]
```

### `find()`

Mengembalikan elemen pertama yang memenuhi kondisi. Jika tidak ditemukan, hasilnya `undefined`.

```
const angka = [10, 15, 20, 25];

const hasil = angka.find(item => item >= 20);

console.log(hasil); // 20
```

### `forEach()`

Menjalankan callback untuk setiap elemen array. Tidak menghasilkan array baru dan nilai kembaliannya adalah `undefined`.

```
const harga = [10000, 20000, 30000];

function tampilkanHarga(item) {
    console.log(item);
}

harga.forEach(tampilkanHarga);
```

Output:

```
10000
20000
30000
```

`forEach()` memberikan setiap elemen array sebagai argumen kepada callback.

### `reduce()`

Mengakumulasi elemen array hingga menghasilkan satu nilai akhir. Hasilnya bisa berupa angka, string, object, atau array, tergantung proses akumulasinya.

```
const angka = [1, 2, 3, 4, 5];

const total = angka.reduce((acc, item) => {
    return acc + item;
}, 0);

console.log(total); // 15
```

- `acc` adalah accumulator, yaitu nilai hasil akumulasi sementara.
- `item` adalah elemen yang sedang diproses.
- `0` adalah nilai awal accumulator.

Pada setiap iterasi, nilai yang dikembalikan callback menjadi nilai `acc` untuk iterasi berikutnya.

## 6. Destructuring

Destructuring digunakan untuk mengambil nilai dari array atau properti object langsung ke variabel.

### Array Destructuring

```
const buah = ["Apel", "Mangga", "Jeruk"];

const [buahPertama, buahKedua] = buah;

console.log(buahPertama); // Apel
console.log(buahKedua);   // Mangga
```

Nilai diambil berdasarkan posisi elemen array.

### Object Destructuring

```
const user = {
    nama: "Reychan",
    umur: 19
};

const { nama, umur } = user;

console.log(nama); // Reychan
console.log(umur); // 19
```

Pada object destructuring, nama variabel mengikuti nama properti secara default.

## 7. Spread Operator (`...`)

Spread digunakan untuk membentangkan elemen array atau properti object ke dalam konteks lain.

### Spread pada Array

```
const angkaPertama = [1, 2, 3];
const angkaKedua = [...angkaPertama, 4, 5];

console.log(angkaKedua); // [1, 2, 3, 4, 5]
```

### Spread pada Object

```
const user = {
    nama: "Reychan",
    umur: 19
};

const userBaru = {
    ...user,
    umur: 20
};

console.log(userBaru);
// { nama: "Reychan", umur: 20 }
```

Properti `umur` menjadi `20` karena nilai yang ditulis belakangan menggantikan nilai sebelumnya, sedangkan properti lain disalin dari `user`.

Spread pada array atau object menghasilkan salinan dangkal (*shallow copy*). Jika terdapat object atau array bersarang, referensi di dalamnya masih dapat digunakan bersama oleh salinan dan data asli.

## 8. Rest Parameter (`...`)

Rest parameter digunakan untuk mengumpulkan sejumlah argumen menjadi satu array. Ini berguna ketika jumlah argumen yang diterima function tidak tetap.

```
function perkenalan(nama, ...hobi) {
    console.log("Nama:", nama);
    console.log("Hobi:", hobi);
}

perkenalan("Reychan", "Coding", "Gaming", "Membaca");
```

Output:

```
Nama: Reychan
Hobi: [ 'Coding', 'Gaming', 'Membaca' ]
```

`nama` menerima argumen pertama, sedangkan `...hobi` mengumpulkan argumen sisanya menjadi array.

### Rest dengan `reduce()`

```
function jumlahkan(...angka) {
    return angka.reduce((total, item) => {
        return total + item;
    }, 0);
}

console.log(jumlahkan(10, 20));        // 30
console.log(jumlahkan(10, 20, 30));    // 60
console.log(jumlahkan(5, 10, 15, 20)); // 50
```

Rest parameter harus berada di posisi terakhir dalam daftar parameter function.

## Perbedaan Spread dan Rest

- **Spread:** membentangkan elemen array atau properti object.
- **Rest:** mengumpulkan beberapa argumen menjadi satu array.