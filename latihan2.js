const readline = require('readline');
const process =  require('process');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let hasil;

input.question("Masukan nilai pertama! : ", (nilai1)=>{
    input.question("Masukan nilai kedua! : ", (nilai2)=>{
        input.question("Masukan operasi matematika (+ , - , * , /) : ", (operasi)=>{
           switch (operasi) {
            case '+':
               hasil = parseFloat(nilai1) + parseFloat(nilai2);
                break;
            case '-':
               hasil = parseFloat(nilai1) - parseFloat(nilai2);
                break;
            case '*':
               hasil = parseFloat(nilai1) * parseFloat(nilai2);
                break;
            case '/':
               hasil = parseFloat(nilai1) / parseFloat(nilai2);
                break;
            default:
                console.log(`Tidak ditemukan operasi matematika ${operasi}`);
                input.close();
                return;
                break;
           }
           console.log(`Hasil dari ${nilai1} ${operasi} ${nilai2} = `,hasil);
           input.close();
        })
    })
});