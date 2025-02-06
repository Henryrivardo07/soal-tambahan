// Fungsi untuk mengubah key dalam objek berdasarkan pemetaan keyMap
function transformObjectKeys1<S, T extends Record<string, keyof S>>(
  source: S, // `source` adalah objek yang ingin kita ubah key-nya
  keyMap: T // `keyMap` adalah objek yang menentukan perubahan nama key
): { [K in keyof S as K extends T[keyof T] ? keyof T : K]: S[K] } {
  const result = {} as any; // Inisialisasi objek kosong untuk hasil akhir

  // Loop untuk setiap key dalam `source` (objek yang akan diubah)
  for (const key in source) {
    // Mencari apakah key ini ada di `keyMap` sebagai value
    const newKey = (Object.keys(keyMap) as Array<keyof T>).find((mappedKey) => keyMap[mappedKey] === key);

    if (newKey) {
      // Jika ditemukan key baru di `keyMap`, gunakan key yang baru
      result[newKey] = source[key];
    } else {
      // Jika tidak ada key yang ditemukan di `keyMap`, gunakan key yang asli
      result[key] = source[key];
    }
  }

  return result; // Mengembalikan objek yang sudah diubah key-nya
}

// Data dummy objek employee
const employee1 = {
  empId: 101, // ID karyawan
  fullName: "Alice Johnson", // Nama lengkap karyawan
  department: "Engineering", // Departemen karyawan
  umur: "umur", // Usia
  gaji: 100000000, // Gaji karyawan
};

// Contoh keyMap yang mendefinisikan perubahan nama key
const keyMap1 = {
  id: "empId", // Mengubah `empId` menjadi `id`
  name: "fullName", // Mengubah `fullName` menjadi `name`
} as const;

const keyMap2 = {
  id: "empId", // Mengubah `empId` menjadi `id`
  name: "fullName", // Mengubah `fullName` menjadi `name`
  position: "doesNotExist", // ❌ Error karena `doesNotExist` tidak ada di `employee`
} as const;

const keyMap3 = {
  id: "empId", // Mengubah `empId` menjadi `id`
  umur: "umur", // Menjaga key `umur` tetap sama
  gaji: "gaji", // Menjaga key `gaji` tetap sama
} as const;

// Mengubah key objek employee sesuai keyMap yang diberikan
const transformedEmployee1 = transformObjectKeys1(employee1, keyMap1);
console.log("Transformed Employee 1:", transformedEmployee1);
// Output yang diharapkan:
// { id: 101, name: 'Alice Johnson', department: 'Engineering' }

const transformedEmployee2 = transformObjectKeys1(employee1, keyMap3);
console.log("Transformed Employee 2:", transformedEmployee2);
// Output yang diharapkan:
// { id: 101, fullName: 'Alice Johnson', department: 'Engineering' }

// Menangani error ketika keyMap memiliki key yang tidak ada di `employee`
const transformedEmployee3 = transformObjectKeys1(employee1, keyMap2); // ❌ Error karena 'doesNotExist' tidak ada di `employee`
/*

Penjelasan mengenai kode ini:
Fungsi transformObjectKeys:

Fungsi ini mengubah nama key dalam objek berdasarkan pemetaan yang diberikan di keyMap.
Tipe generik S adalah tipe objek sumber (source), sedangkan T adalah tipe untuk keyMap yang berisi key lama yang akan dipetakan ke key baru.
Fungsi ini memeriksa setiap key di objek source. Jika key tersebut ada dalam keyMap, maka key tersebut akan diganti dengan key baru sesuai yang ditentukan di keyMap.
Penjelasan mengenai parameter:

source: Objek yang key-nya akan diubah.
keyMap: Objek yang berisi pemetaan antara key lama dan key baru. Pemetaan ini hanya berlaku untuk key yang ada dalam objek source.
Detail tipe generik dan transformasi:

T extends Record<string, keyof S> memastikan bahwa keyMap hanya bisa memiliki key yang valid, yaitu key yang ada dalam objek source.
Pada bagian return type { [K in keyof S as K extends T[keyof T] ? keyof T : K]: S[K] }, kita menggunakan teknik mapped types untuk mengganti nama key yang ada sesuai dengan pemetaan di keyMap, dan mempertahankan key yang tidak ada dalam keyMap dengan nama yang asli.
Contoh keyMap:

keyMap1: Mengubah key empId menjadi id, dan fullName menjadi name. Key lain seperti department tetap.
keyMap2: Memiliki key position yang tidak ada dalam objek employee. Ini akan menyebabkan error karena TypeScript memeriksa tipe keyMap dan mendeteksi ketidaksesuaian.
keyMap3: Mengubah empId menjadi id, dan mempertahankan umur dan gaji seperti aslinya.
Output:

transformedEmployee1: Hasilnya adalah objek dengan key empId diubah menjadi id dan fullName diubah menjadi name.
transformedEmployee2: Sama dengan transformedEmployee1, tetapi umur dan gaji tetap ada.
transformedEmployee3: Akan error karena key position yang ada di keyMap2 tidak ditemukan di objek employee.
Error Penanganan:
Pada keyMap2 ada key position yang tidak ada di objek employee. TypeScript akan menangani hal ini dengan memberi error, karena key yang dipetakan harus valid sesuai dengan key yang ada di objek employee. Hal ini adalah fitur dari TypeScript untuk memastikan tipe data aman dan tidak ada kesalahan penulisan.
Semoga penjelasan ini bermanfaat dan membantu kamu lebih memahami kode ini! Semangattttt Gesss🔥🔥🔥
*/
