const fs = require('fs');

// Membuat folder baru
if (!fs.existsSync('fs_latihan')) {
fs.mkdirSync('fs_latihan');
}

// Membuat file baru jika belum ada
if (!fs.existsSync('./fs_latihan/data.json')) {
fs.writeFileSync('./fs_latihan/data.json', '[]');
}

// Method untuk menambah informasi mahasiswa baru
function tambahMahasiswa(nama, NIM, jurusan, IPK) {
fs.readFile('./fs_latihan/data.json', 'utf8', (err, data) => {
if (err) throw err;
let mahasiswa = JSON.parse(data);
mahasiswa.push({
nama: nama,
NIM: NIM,
jurusan: jurusan,
IPK: IPK
});
fs.writeFile('./fs_latihan/data.json', JSON.stringify(mahasiswa), (err) => {
if (err) throw err;
console.log('Data mahasiswa berhasil ditambahkan!');
});
});
}

// Method untuk mengubah informasi mahasiswa
function ubahMahasiswa(NIM, namaBaru, jurusanBaru, IPKBaru) {
fs.readFile('./fs_latihan/data.json', 'utf8', (err, data) => {
if (err) throw err;
let mahasiswa = JSON.parse(data);
let index = mahasiswa.findIndex(mahasiswa => mahasiswa.NIM === NIM);
if (index === -1) {
console.log('Mahasiswa tidak ditemukan!');
return;
}
mahasiswa[index].nama = namaBaru;
mahasiswa[index].jurusan = jurusanBaru;
mahasiswa[index].IPK = IPKBaru;
fs.writeFile('./fs_latihan/data.json', JSON.stringify(mahasiswa), (err) => {
if (err) throw err;
console.log('Data mahasiswa berhasil diubah!');
});
});
}

// Method untuk menghapus informasi mahasiswa
function hapusMahasiswa(NIM) {
fs.readFile('./fs_latihan/data.json', 'utf8', (err, data) => {
if (err) throw err;
let mahasiswa = JSON.parse(data);
let index = mahasiswa.findIndex(mahasiswa => mahasiswa.NIM === NIM);
if (index === -1) {
console.log('Mahasiswa tidak ditemukan!');
return;
}
mahasiswa.splice(index, 1);
fs.writeFile('./fs_latihan/data.json', JSON.stringify(mahasiswa), (err) => {
if (err) throw err;
console.log('Data mahasiswa berhasil dihapus!');
});
});
}

tambahMahasiswa("irfan", "20753001", "Ekonomi dan bisnis", "3.69");
