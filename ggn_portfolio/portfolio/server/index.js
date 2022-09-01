const express = require('express');
const body_parser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// Local Server
// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'portfolio'
// });

// Heroku Server
const db = mysql.createPool({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'be34cde083dcfd',
    password: '4dcd711e',
    database: 'heroku_539b1297eb14a84'
});

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({ extended:true }));

app.post("/contact/interested", (req, res) => {
    const [name, email, message] = [req.body.name, req.body.email, req.body.message]; 
    const sql_insert = "INSERT INTO contacts (name, email, message) VALUES (?,?,?);";
    db.query(sql_insert, [name, email, message], (err, result) => {
        if (err) res.send("eoi failed");
        else res.send("eoi successful");
    });
});

app.get("/projects/get", (req, res) => {
    let q;
    if (req.query.id) {
        let result;
        q = "SELECT * FROM projects WHERE id = " + req.query.id + ";";
        db.query(q, (err1, res1) => {
            if (err1) console.log("SELECT ERROR1:", err1);
            else result = res1[0];
            q = "SELECT * FROM files WHERE project_id = " + req.query.id + ";";
            db.query(q, (err2, res2) => {
                if (err2) console.log("SELECT ERROR2:", err2);
                else result.files = res2;
                res.send(result);
            });
        });
    } else {
        q = "SELECT * FROM projects;";
        db.query(q, (err1, res1) => {
            if (err1) console.log("SELECT ERROR:", err1);
            else res.send(res1);
        });
    }
});

// app.listen(3001, () => { // local
//     console.log("server running on port 3001");
// });

app.listen(process.env.PORT || 3001, function() { // heroku
    console.log(`server running on port ${this.address().port}`);
});