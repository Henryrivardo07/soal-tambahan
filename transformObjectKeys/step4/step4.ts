// Ini adalah objek employee yang berisi data karyawan
const employee = {
  empId: 101, // ID karyawan
  fullName: "Alice Johnson", // Nama lengkap karyawan
  department: "Engineering", // Departemen tempat karyawan bekerja
};

// Ini adalah objek keyMap yang berfungsi untuk memetakan nama properti lama ke nama properti baru
const keyMap = {
  id: "empId", // Nama properti baru 'id' akan menggantikan 'empId'
  name: "fullName", // Nama properti baru 'name' akan menggantikan 'fullName'
};

// Fungsi ini digunakan untuk mengganti nama properti pada objek berdasarkan keyMap
function transformKeys(obj: any, keyMap: any) {
  const newObj: any = {}; // Membuat objek kosong baru untuk menampung hasil perubahan

  // Looping untuk setiap properti pada objek 'obj' (misalnya 'employee')
  for (const key in obj) {
    // Mencari apakah ada properti yang ada di keyMap yang sesuai dengan nama properti 'key' pada objek 'obj'
    const newKey = Object.keys(keyMap).find((mappedKey) => keyMap[mappedKey] === key);

    // Jika ditemukan key yang sesuai, kita ubah nama properti
    if (newKey) {
      newObj[newKey] = obj[key]; // Menyimpan nilai dengan nama properti baru
    } else {
      // Jika tidak ada perubahan nama, tetap simpan dengan nama properti lama
      newObj[key] = obj[key];
    }
  }

  return newObj; // Mengembalikan objek yang sudah diubah
}

// Menjalankan fungsi dan mencetak hasilnya
console.log(transformKeys(employee, keyMap));
// Output yang diharapkan: { id: 101, name: "Alice Johnson", department: "Engineering" }

/*
Penjelasan singkat:
Objek employee berisi informasi karyawan dengan properti empId, fullName, dan department.
Objek keyMap memberikan petunjuk bahwa empId harus diganti menjadi id dan fullName menjadi name.
Fungsi transformKeys mengambil objek employee dan keyMap, lalu mengganti properti sesuai dengan yang tertera di keyMap. Jika tidak ada perubahan, properti tersebut tetap dipertahankan.
Hasil dari fungsi ini adalah objek baru dengan nama properti yang sudah diubah sesuai dengan keyMap.
Semoga penjelasan ini bermanfaat dan membantu kamu lebih memahami kode ini! Semangattttt Gesss🔥🔥🔥
*/
