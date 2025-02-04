function transformObjectKeys(// Fungsi ini menerima dua parameter:
source, // `source` adalah objek yang ingin kita ubah key-nya
keyMap // `keyMap` adalah objek yang menentukan perubahan nama key
) {
    var result = {}; // Inisialisasi objek hasil akhir
    var _loop_1 = function (key) {
        // Mencari apakah key ini ada di `keyMap` sebagai value
        var newKey = Object.keys(keyMap).find(function (mappedKey) { return keyMap[mappedKey] === key; });
        if (newKey) {
            // Jika ditemukan key baru di `keyMap`, gunakan key yang baru
            result[newKey] = source[key];
        }
        else {
            // Jika tidak ada di `keyMap`, gunakan key yang asli
            result[key] = source[key];
        }
    };
    // Loop melalui setiap key dalam `source`
    for (var key in source) {
        _loop_1(key);
    }
    return result; // Mengembalikan objek yang sudah diubah key-nya
}
// ------- don't change the code below -------
var employee = {
    empId: 101,
    fullName: "Alice Johnson",
    department: "Engineering",
    umur: "umur",
    gaji: 100000000,
    //   postion kaga ada
};
// data dummy
var keyMap1 = {
    id: "empId", // Mengubah `empId` menjadi `id`
    name: "fullName", // Mengubah `fullName` menjadi `name`
};
var keyMap2 = {
    id: "empId",
    name: "fullName",
    position: "doesNotExist", // ❌ Error karena `doesNotExist` tidak ada di `employee`
};
var keyMap3 = {
    id: "empId", // Hanya mengubah `empId` menjadi `id`
    umur: "umur",
    gaji: "gaji",
};
var transformedEmployee1 = transformObjectKeys(employee, keyMap1);
console.log("Transformed Employee 1:", transformedEmployee1);
// Output yang diharapkan:
// { id: 101, name: 'Alice Johnson', department: 'Engineering' }
var transformedEmployee2 = transformObjectKeys(employee, keyMap3);
console.log("Transformed Employee 2:", transformedEmployee2);
// Output yang diharapkan:
// { id: 101, fullName: 'Alice Johnson', department: 'Engineering' }
var transformedEmployee3 = transformObjectKeys(employee, keyMap2); // ❌ Error karena 'doesNotExist' tidak ada di `employee
