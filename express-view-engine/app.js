const express = require('express');
const app = express();
const port = 3000;

// gunakan EJS
app.set('view engine','ejs')

app.get('/', (req, res) =>{
    const biodata = [
        {
            nama: "muhammad irfan lutfi",
            umur: "23",
        },
        {
            nama: "Roni",
            umur: "23",
        },
        {
            nama: "Syafei",
            umur: "23",
        },
    ]
    res.render('index', {
        title : "halaman utama",
        biodata : biodata
    });
})
app.get('/about', (req, res) =>{
    res.render('about');
})
app.get('/contact', (req, res) =>{
    res.render('contact');
})


app.use('/', (req, res)=>{
    res.status(404);
    res.send('selain itu jalankan ini');
})

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
});