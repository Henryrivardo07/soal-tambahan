function transformObjectKeys<S, T extends Record<string, keyof S>>( // Fungsi ini menerima dua parameter:
  source: S, // `source` adalah objek yang ingin kita ubah key-nya
  keyMap: T // `keyMap` adalah objek yang menentukan perubahan nama key
): { [K in keyof S as K extends T[keyof T] ? keyof T : K]: S[K] } {
  const result = {} as any; // Inisialisasi objek hasil akhir
  // Loop melalui setiap key dalam `source`
  for (const key in source) {
    // Mencari apakah key ini ada di `keyMap` sebagai value
    const newKey = (Object.keys(keyMap) as Array<keyof T>).find((mappedKey) => keyMap[mappedKey] === key);
    if (newKey) {
      // Jika ditemukan key baru di `keyMap`, gunakan key yang baru
      result[newKey] = source[key];
    } else {
      // Jika tidak ada di `keyMap`, gunakan key yang asli
      result[key] = source[key];
    }
  }
  return result; // Mengembalikan objek yang sudah diubah key-nya
}
const employee = {
  empId: 101,
  fullName: "Alice Johnson",
  department: "Engineering",
  umur: "umur",
  gaji: 100000000,
  //   postion kaga ada
};
// data dummy

const keyMap1 = {
  id: "empId", // Mengubah `empId` menjadi `id`
  name: "fullName", // Mengubah `fullName` menjadi `name`
} as const;

const keyMap2 = {
  id: "empId",
  name: "fullName",
  position: "doesNotExist", // ❌ Error karena `doesNotExist` tidak ada di `employee`
} as const;

const keyMap3 = {
  id: "empId", // Hanya mengubah `empId` menjadi `id`
  umur: "umur",
  gaji: "gaji",
} as const;

const transformedEmployee1 = transformObjectKeys(employee, keyMap1);
console.log("Transformed Employee 1:", transformedEmployee1);
// Output yang diharapkan:
// { id: 101, name: 'Alice Johnson', department: 'Engineering' }

const transformedEmployee2 = transformObjectKeys(employee, keyMap3);
console.log("Transformed Employee 2:", transformedEmployee2);
// Output yang diharapkan:
// { id: 101, fullName: 'Alice Johnson', department: 'Engineering' }

const transformedEmployee3 = transformObjectKeys(employee, keyMap2); // ❌ Error karena 'doesNotExist' tidak ada di `employee
