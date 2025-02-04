TypeScript Generic Function for Object Key Transformation
Objective
Tujuan dari tugas ini adalah memahami dan mengimplementasikan TypeScript Generics dengan Mapped Types dan Key Constraints. Kamu akan membuat fungsi generic yang mengubah struktur object berdasarkan aturan transformasi key.

Instructions
Kamu diminta untuk mengimplementasikan fungsi transformObjectKeys, yang menerima dua argumen:

Source Object (S) → Objek awal yang ingin ditransformasi.
Key Transformation Object (T) → Objek yang mendefinisikan bagaimana key dari S akan diubah dalam hasil akhir.
Fungsi ini harus:

Mengubah key dari S berdasarkan aturan di T, tetapi tetap mempertahankan nilai dari key yang dipindahkan.
Menghasilkan error jika T mencoba memetakan key yang tidak ada di S.
Mempertahankan key yang tidak disebutkan dalam T.
Example
Misalkan kita punya source object berikut:

const employee = {
empId: 101,
fullName: 'Alice Johnson',
department: 'Engineering',
};
Dan object transformasi key seperti ini:

const keyMap = {
id: 'empId',
name: 'fullName',
} as const;
Maka output yang diharapkan adalah:

const transformedEmployee = {
id: 101,
name: 'Alice Johnson',
department: 'Engineering',
};
Start Coding Here
Implementasikan fungsi transformObjectKeys dengan TypeScript Generic & Keyof Constraints.

// Start coding here:

// ------- don't change the code below -------
const employee = {
empId: 101,
fullName: 'Alice Johnson',
department: 'Engineering',
};

const keyMap1 = {
id: 'empId',
name: 'fullName',
} as const;

const keyMap2 = {
id: 'empId',
name: 'fullName',
position: 'doesNotExist',
} as const;

const keyMap3 = {
id: 'empId',
} as const;

const transformedEmployee1 = transformObjectKeys(employee, keyMap1);
// Expected Type:
// const transformedEmployee1: {
// id: number;
// name: string;
// department: string; // Unmapped keys should remain
// }

const transformedEmployee2 = transformObjectKeys(employee, keyMap3);
// Expected Type:
// const transformedEmployee2: {
// id: number;
// fullName: string;
// department: string;
// }

const transformedEmployee3 = transformObjectKeys(employee, keyMap2); // ❌ Should produce
