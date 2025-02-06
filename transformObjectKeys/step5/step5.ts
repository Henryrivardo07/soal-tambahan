// Ini adalah objek employee yang berisi data tentang karyawan
const employee = {
  empId: 101, // ID karyawan
  fullName: "Alice Johnson", // Nama lengkap karyawan
  department: "Engineering", // Departemen tempat karyawan bekerja
};

// Ini adalah objek keyMap yang berisi pemetaan antara key lama (dari employee) ke key baru
const keyMap = {
  id: "empId", // 'empId' akan diganti menjadi 'id'
  nameDiubah: "fullName", // 'fullName' akan diganti menjadi 'nameDiubah'
  salary: 100000, // Key baru 'salary' dengan nilai default 100000 (tidak ada di employee)
};

// Fungsi ini untuk mengubah key dalam objek berdasarkan pemetaan yang ada di keyMap
function transformObjectKeys<
  S, // Tipe generik untuk objek sumber (source), yang dalam hal ini adalah 'employee'
  T extends Record<string, keyof S> // Tipe generik untuk keyMap, memastikan keyMap hanya berisi key yang ada di 'employee'
>(
  source: S, // Objek sumber, misalnya employee
  keyMap: T // Objek keyMap, yang mendefinisikan bagaimana key akan dipetakan
): {
  [K in keyof S as K extends T[keyof T] ? keyof T : K]: S[K]; // Tipe hasil transformasi objek dengan key yang diubah
} {
  const result = {} as any; // Membuat objek kosong untuk menyimpan hasil transformasi

  // Looping untuk setiap key baru yang ada di keyMap
  for (const newKey in keyMap) {
    const originalKey = keyMap[newKey]; // Ambil key asli yang ada di source berdasarkan keyMap

    if (originalKey in source) {
      // Jika key asli ditemukan di source, pindahkan nilainya ke key baru
      result[newKey] = source[originalKey as keyof S];
    } else {
      // Jika key tidak ditemukan di source (seperti 'salary'), gunakan nilai dari keyMap
      result[newKey] = originalKey;
    }
  }

  return result; // Mengembalikan objek dengan key yang telah diubah
}

// Memanggil fungsi transformObjectKeys dengan 'employee' dan 'keyMap' sebagai argumen
console.log(transformObjectKeys(employee, keyMap));

/*
  Penjelasan tentang tipe di TypeScript:
  - `Record<K, V>` adalah tipe bawaan TypeScript yang digunakan untuk membuat objek dengan key bertipe K dan value bertipe V.
  - `keyof S` memastikan bahwa nilai dari keyMap (value-nya) hanya bisa merujuk pada key yang ada di objek sumber (source).
  - `T extends Record<string, keyof S>` memastikan bahwa keyMap hanya dapat memetakan key baru ke key yang ada dalam objek sumber, jadi lebih aman dan tidak akan ada salah ketik. 🚀
  */

/*
Penjelasan singkat:
Objek employee berisi data tentang karyawan seperti empId, fullName, dan department.
Objek keyMap berisi pemetaan key baru yang ingin kamu terapkan ke objek employee, seperti mengganti empId menjadi id, dan fullName menjadi nameDiubah. Ada juga key salary yang tidak ada di employee, dan ini akan ditambahkan dengan nilai 100000.
Fungsi transformObjectKeys:
Menerima objek source (dalam hal ini employee) dan objek keyMap yang berisi pemetaan key.
Memetakan key lama ke key baru sesuai dengan yang ada di keyMap.
Jika ada key yang tidak ditemukan di employee, maka nilai default dari keyMap akan digunakan.
Hasilnya adalah objek baru dengan key yang sudah diubah sesuai dengan pemetaan.
Apa yang perlu diperhatikan di sini:
Tipe Generik (S dan T): Tipe generik digunakan agar fungsi ini lebih fleksibel. S adalah tipe objek sumber (source), dan T adalah tipe objek keyMap. T harus berisi key yang ada di objek sumber agar pemetaan tidak salah.
Record<string, keyof S> memastikan bahwa keyMap hanya berisi key yang sudah ada di objek sumber, yang meningkatkan keamanan kode agar tidak ada typo atau key yang tidak ada.

SEMANGATTT TERUS, Berdoa dijamin pasti bisa Gess🔥🔥🔥
*/
