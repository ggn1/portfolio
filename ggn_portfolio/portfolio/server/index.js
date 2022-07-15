const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'contact'
});

app.get('/', (req, res) => {
    const sql_insert = "INSERT INTO contacts (name, email, message) VALUES ('John', 'jc1@gmail.com', 'hey! mail me. you got a selected for a job at pixar!');";
    db.query(sql_insert, (err, result) => {
        res.send("Hello World");
    });
})

app.listen(3001, () => {
    console.log("running on port 3001");
});