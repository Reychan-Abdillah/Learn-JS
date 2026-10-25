# JavaScript Learning Notes

<aside>
📅

*D: 25-10-2026*

</aside>

## 1. Function dan Parameter

Function adalah sekumpulan instruksi yang dibuat untuk menjalankan tugas tertentu dan dapat digunakan kembali dengan cara dipanggil.

Function dapat menerima data melalui **parameter**, sedangkan nilai yang diberikan saat function dipanggil disebut **argumen**.

### Contoh

```
function tambahAngka(a, b) {
    return a + b;
}

tambahAngka(5, 3);
```

- `a` dan `b` = parameter.
- `5` dan `3` = argumen.

**Penulisan nama function:** umumnya menggunakan `camelCase`, diawali huruf kecil, tanpa spasi.

Contoh: `tambahAngka()`, `hitungTotal()`, `tampilkanHarga()`.

## 2. Return dalam Function

`return` berfungsi untuk mengembalikan nilai dari function agar dapat disimpan ke variabel atau digunakan kembali.

### Contoh

```
function tambah(a, b) {
    return a + b;
}

const hasil = tambah(5, 3);
console.log(hasil); // 8
```

Tanpa `return`, function yang tidak mengembalikan nilai secara eksplisit akan menghasilkan `undefined`.

```
function tambah(a, b) {
    console.log(a + b);
}

const hasil = tambah(5, 3);

console.log(hasil);
// 8
// undefined
```

<aside>
💡

**Ingat:** `console.log()` menampilkan nilai di console, sedangkan `return` mengembalikan nilai dari function. Keduanya memiliki fungsi berbeda.

</aside>

## 3. Scope

Scope adalah aturan yang menentukan di mana suatu variabel dapat diakses.

Scope membantu membatasi akses variabel dan menghindari konflik nama variabel.

### Global / Scope Luar

Variabel yang dideklarasikan di luar function dapat diakses dari dalam function jika berada dalam cakupan yang sesuai.

### Local Scope

Variabel yang dideklarasikan di dalam function hanya dapat diakses dari dalam function tersebut.

Variabel yang dideklarasikan menggunakan `let` atau `const` di dalam block `{}` juga terbatas pada block tersebut.

### Contoh

```
let angka = 10;

function tesScope() {
    let angka = 20;
    return angka;
}

console.log(tesScope()); // 20
console.log(angka);      // 10
```

Kedua variabel bernama `angka` berbeda karena berada di scope berbeda. Variabel lokal tidak mengubah variabel di luar function.

## 4. Callback Function

Callback function adalah function yang diberikan sebagai argumen kepada function lain, lalu dipanggil oleh function penerima.

### Contoh

```
function sapa(nama) {
    console.log(`Halo ${nama}`);
}

function prosesUser(callback, nama) {
    return callback(nama);
}

prosesUser(sapa, "Reyhan");
```

### Output

```
Halo Reyhan
```

### Penjelasan

- `sapa` adalah function yang dikirim sebagai callback.
- `callback` adalah parameter yang menerima function tersebut.
- `callback(nama)` menjalankan callback dengan argumen `nama`.

**Mengapa `sapa` tidak menggunakan tanda kurung?**

```
prosesUser(sapa, "Reyhan");
```

Karena kita mengirim function-nya, bukan menjalankannya terlebih dahulu.

- `sapa` = referensi ke function.
- `sapa()` = menjalankan function.

### Kapan Callback Digunakan?

- **Array methods:** seperti `forEach()`, `map()`, dan `filter()`.
- **Asynchronous programming:** seperti `setTimeout()` dan callback dalam proses pengambilan data.

<aside>
📝

Catatan: callback tidak selalu asynchronous. Callback pada `forEach()` dan `map()` dijalankan secara synchronous.

</aside>

## 5. `map()` dan `forEach()`

### `map()`

`map()` digunakan untuk mengolah setiap elemen array dan menghasilkan **array baru** dari nilai yang dikembalikan callback. Array asli tidak diubah oleh `map()` itu sendiri.

```
const angka = [1, 2, 3];

const hasil = angka.map(item => {
    return item * 2;
});

console.log(hasil); // [2, 4, 6]
console.log(angka); // [1, 2, 3]
```

### `forEach()`

`forEach()` digunakan untuk menjalankan callback pada setiap elemen array. Method ini tidak menghasilkan array baru dari nilai yang dikembalikan callback.

```
const harga = [10000, 20000, 30000];

function tampilkanHarga(item) {
    console.log(item);
}

harga.forEach(tampilkanHarga);
```

`forEach()` otomatis mengirimkan setiap elemen array sebagai argumen ke callback.

### Output

```
10000
20000
30000
```

**Perbedaan utama:**

- `map()` = mengolah elemen dan menghasilkan array baru.
- `forEach()` = menjalankan callback untuk setiap elemen, biasanya untuk melakukan suatu tindakan.

## 6. Array Methods: `find`, `findIndex`, `findLast`, `findLastIndex`

Keempat method digunakan untuk mencari elemen array berdasarkan kondisi yang ditentukan oleh callback.

- **`find()`**: mengembalikan nilai elemen pertama yang cocok, dari kiri ke kanan.
- **`findIndex()`**: mengembalikan index elemen pertama yang cocok, dari kiri ke kanan.
- **`findLast()`**: mengembalikan nilai elemen pertama yang cocok saat pencarian dari kanan ke kiri.
- **`findLastIndex()`**: mengembalikan index elemen pertama yang cocok saat pencarian dari kanan ke kiri.

### Contoh

```
const angka = [10, 20, 30, 20];

console.log(angka.find(n => n === 20));          // 20
console.log(angka.findIndex(n => n === 20));     // 1
console.log(angka.findLast(n => n === 20));      // 20
console.log(angka.findLastIndex(n => n === 20)); // 3
```

### Perbedaan Penting

- `find()` dan `findLast()` mengembalikan **nilai elemen**.
- `findIndex()` dan `findLastIndex()` mengembalikan **index elemen**.
- Jika tidak ada elemen yang cocok:
    - `find()` dan `findLast()` mengembalikan `undefined`.
    - `findIndex()` dan `findLastIndex()` mengembalikan `1`.

### Cara Mudah Mengingat

- `find` = cari nilai dari kiri.
- `findIndex` = cari index dari kiri.
- `findLast` = cari nilai dari kanan.
- `findLastIndex` = cari index dari kanan.

<aside>
📌

**Catatan:** index array dimulai dari `0`, bukan `1`.

</aside>