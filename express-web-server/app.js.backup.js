const express = require('express');
const app = express();
const port = 3000;
// perbedaan request dan response
// request apa yang dikembalikan dari express
// Response apa yang dikembalikan ke express
app.get('/', (req, res) =>{
    // res.send('Hello World');
    res.sendFile('./index.html', {root: __dirname});
})

app.get('/about', (req, res) =>{
    res.sendFile('./about.html', {root: __dirname});
})
app.get('/contact', (req, res) =>{
    res.sendFile('./contact.html', {root: __dirname});
})


// app.get('/product/:id/category/:idC', (req, res)=>{
//     res.send('Product ID : '+ req.params.id + ' Category : ' + req.params.idC);
// })
app.get('/product/:id', (req, res)=>{
    res.send('Product ID : '+ req.params.id + ' Category : ' + req.query.category);
})


// ketika terdapat endpoint yang tidak terdefinisi (halaman tidak ada) maka akan menjalankan use
// jangan simpan ini dipaling atas
app.use('/', (req, res)=>{
    res.status(404);
    res.send('Test');
})

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
});