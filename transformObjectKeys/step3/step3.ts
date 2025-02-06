/*
Soal:
Buat function renameKey(obj, oldKey, newKey) untuk mengubah nama key dalam objek.
*/

function renameKey(obj: any, oldKey: string, newKey: string) {
  // Membuat salinan objek baru agar objek asli tidak berubah
  const newObj = { ...obj };

  // Mengecek apakah key lama ('oldKey') ada dalam objek
  if (oldKey in newObj) {
    // Jika ada, buat key baru ('newKey') dengan nilai yang sama seperti key lama
    newObj[newKey] = newObj[oldKey];

    // Hapus key lama ('oldKey') dari objek
    delete newObj[oldKey];
  }

  // Mengembalikan objek baru yang sudah dimodifikasi
  return newObj;
}

// Contoh objek user
const user = {
  userId: 123,
  fullName: "Jane Doe", // Nama karyawan
};

// Memanggil function renameKey untuk mengganti 'fullName' menjadi 'namediubah'
console.log(renameKey(user, "fullName", "namediubah"));
// Output yang diharapkan: { userId: 123, namediubah: "Jane Doe" }

/*

Penjelasan tentang kode:
Fungsi renameKey:

Menerima tiga argumen: objek obj, key lama oldKey, dan key baru newKey.
Fungsi ini bekerja dengan cara menyalin objek lama ke objek baru (untuk menghindari perubahan pada objek asli), dan kemudian mengganti key lama dengan key baru.
Setelah key baru ditambahkan dengan nilai yang sama seperti key lama, key lama dihapus dari objek.
Langkah-langkah dalam fungsi:

Copy objek: Menggunakan spread operator ({ ...obj }) untuk menyalin objek, sehingga objek asli tetap aman dan tidak berubah.
Cek keberadaan oldKey: Fungsi memeriksa apakah oldKey ada di objek dengan menggunakan if (oldKey in newObj).
Tambah key baru: Jika oldKey ada, maka nilai dari oldKey dipindahkan ke newKey.
Hapus key lama: Setelah key baru ditambahkan, key lama dihapus dengan delete newObj[oldKey].
Contoh:

Objek user memiliki key fullName. Setelah memanggil fungsi renameKey, key fullName diubah menjadi namediubah.
Output:
Ketika kamu menjalankan kode, hasilnya adalah objek baru yang memiliki key yang sudah diubah:

{ userId: 123, namediubah: "Jane Doe" }🔥🔥🔥🔥🔥

 Semangattttt Gesss🔥🔥🔥
*/
