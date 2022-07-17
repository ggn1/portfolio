const express = require('express');
const body_parser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'contact'
});

// app.get('/', (req, res) => {
//     const sql_insert = "INSERT INTO contacts (name, email, message) VALUES ('John', 'jc1@gmail.com', 'hey! mail me. you got a selected for a job at pixar!');";
//     db.query(sql_insert, (err, result) => {
//         res.send("Hello World");
//     });
// })

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({ extended:true }));

app.post("/api/insert", (req, res) => {
    const [name, email, message] = [req.body.name, req.body.email, req.body.message]; 
    const sql_insert = "INSERT INTO contacts (name, email, message) VALUES (?,?,?);";
    db.query(sql_insert, [name, email, message], (err, result) => {
        // res.send("operation successful :)");
    });
})

app.listen(3001, () => {
    console.log("running on port 3001");
});