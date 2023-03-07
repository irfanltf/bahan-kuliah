const fs = require('fs')

// // Synchronous
// // fungsi readfilesync mempunyai 2 parameter, path dan encoding
// const data = fs.readFileSync('./file.txt', 'utf-8');
// console.log(data)

// // Asynchronous
// // fungsi readfile mempunyai 3 parameter yaitu path, encoding, dan juga callback
// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//     if(error) throw error;
//     console.log(data);
// });

// // Synchronous
// fs.writeFileSync('filewriteSync.txt', 'ini adalah file text dengan synchronous');
// console.log('File ini ditulis secara synchronous');

// // Asynchronous
// fs.writeFile('filewrite.txt', 'ini adalah teks file asynchronous', (error) => {
//     if (error) throw error;
//     console.log('File ditulis secara asynchronous');
// });

// Synchronous
// try{

//     fs.mkdirSync('newfolderSync');
//     console.log('folder created successfully.');
// }catch(e){
//     console.log(e)
// }

// // Asynchronous
// fs.mkdir('newfolder', (e)=>{
//     if(e){
//         console.error(e);
//     }else{
//         console.log('Folder created successfully');
//     }
// })