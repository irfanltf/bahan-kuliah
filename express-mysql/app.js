const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_express"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    connection.query("SELECT * FROM biodata", (err, rows) => {
        if(err) throw err;
        res.render('index', {
            biodata: rows
        });
    });
})
app.get('/add', (req, res) => {
    connection.query("SELECT * FROM biodata", (err, rows) => {
        if(err) throw err;
        res.render('index', {
            biodata: rows
        });
    });
})

app.listen('3000', ()=>{
    console.log('Server is listening on port 3000');
})