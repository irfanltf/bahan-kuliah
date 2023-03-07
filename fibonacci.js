// definiskan sebuah fungsi bernama fibonacci yang menerima parameter n
// fungsi ini akan menghitung angka dalam deret fibonacci dengan cara rekursif
// rekursif merupakan sebuah fungsi yang memanggil dirinya sendiri
let fibonacci = function (n) {
    // jika n kurang dari 2, maka fungsi akan me-return nilai n yang
    // merupakan angka pertama dan kedua dalam deret fibonacci
    if (n < 2) return n;
    // jika tidak, maka fungsi akan me-return hasil penjumlahan dari hasil pemanggilan diri sendiri
    // yang masing-masing merupakan hasil dari 2 angka sebelumnya dalam deret fibonacci
    return fibonacci(n - 2) + fibonacci(n - 1);
  };
//   perulangan for yang berjalan sebanyak 10 kali
for (let i = 0; i <= 10; i++) {
      // dan fungsi fibonacci akan dipanggil dengan parameter nilai dari perulangan
    console.log(fibonacci(i));
  }
// dengan demikian program akan menampilkan angak dalam deret fibonacci sebanyak 10 angak pertama