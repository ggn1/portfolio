const express = require('express');
const body_parser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'portfolio'
});

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({ extended:true }));

app.post("/contact/put", (req, res) => {
    const [name, email, message] = [req.body.name, req.body.email, req.body.message]; 
    const sql_insert = "INSERT INTO contacts (name, email, message) VALUES (?,?,?);";
    db.query(sql_insert, [name, email, message], (err, result) => {
        if (err) console.log("ERROR:", err);
        else console.log("SUCCESS:", result);
    });
});

app.get("/projects/get", (req, res) => {
    let sql_select = "SELECT * FROM projects";

    if (req.query.id) sql_select += (" WHERE id = " + req.query.id);

    sql_select += ";";

    db.query(sql_select, (err, result) => {
        if (err) console.log("SELECT ERROR:", err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});