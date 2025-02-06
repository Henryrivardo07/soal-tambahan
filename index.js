// Fungsi untuk mengubah key dalam objek berdasarkan pemetaan keyMap
function transformObjectKeys1(source, // `source` adalah objek yang ingin kita ubah key-nya
keyMap // `keyMap` adalah objek yang menentukan perubahan nama key
) {
    var result = {}; // Inisialisasi objek kosong untuk hasil akhir
    var _loop_1 = function (key) {
        // Mencari apakah key ini ada di `keyMap` sebagai value
        var newKey = Object.keys(keyMap).find(function (mappedKey) { return keyMap[mappedKey] === key; });
        if (newKey) {
            // Jika ditemukan key baru di `keyMap`, gunakan key yang baru
            result[newKey] = source[key];
        }
        else {
            // Jika tidak ada key yang ditemukan di `keyMap`, gunakan key yang asli
            result[key] = source[key];
        }
    };
    // Loop untuk setiap key dalam `source` (objek yang akan diubah)
    for (var key in source) {
        _loop_1(key);
    }
    return result; // Mengembalikan objek yang sudah diubah key-nya
}
// Data dummy objek employee
var employee1 = {
    empId: 101, // ID karyawan
    fullName: "Alice Johnson", // Nama lengkap karyawan
    department: "Engineering", // Departemen karyawan
    umur: "umur", // Usia
    gaji: 100000000, // Gaji karyawan
};
// Contoh keyMap yang mendefinisikan perubahan nama key
var keyMap1 = {
    id: "empId", // Mengubah `empId` menjadi `id`
    name: "fullName", // Mengubah `fullName` menjadi `name`
};
var keyMap2 = {
    id: "empId", // Mengubah `empId` menjadi `id`
    name: "fullName", // Mengubah `fullName` menjadi `name`
    position: "doesNotExist", // ❌ Error karena `doesNotExist` tidak ada di `employee`
};
var keyMap3 = {
    id: "empId", // Mengubah `empId` menjadi `id`
    umur: "umur", // Menjaga key `umur` tetap sama
    gaji: "gaji", // Menjaga key `gaji` tetap sama
};
// Mengubah key objek employee sesuai keyMap yang diberikan
var transformedEmployee1 = transformObjectKeys1(employee1, keyMap1);
console.log("Transformed Employee 1:", transformedEmployee1);
// Output yang diharapkan:
// { id: 101, name: 'Alice Johnson', department: 'Engineering' }
var transformedEmployee2 = transformObjectKeys1(employee1, keyMap3);
console.log("Transformed Employee 2:", transformedEmployee2);
// Output yang diharapkan:
// { id: 101, fullName: 'Alice Johnson', department: 'Engineering' }
// Menangani error ketika keyMap memiliki key yang tidak ada di `employee`
var transformedEmployee3 = transformObjectKeys1(employee1, keyMap2); // ❌ Error karena 'doesNotExist' tidak ada di `employee`
