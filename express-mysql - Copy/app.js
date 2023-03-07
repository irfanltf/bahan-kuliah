const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    connection.query('select * from user', (err, rows)=>{
        if (err) throw err;
        res.render('index', {
            users: rows
        });
    })
})

app.listen('3000', ()=>{
    console.log('server is listening on port 3000');
})