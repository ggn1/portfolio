const express = require('express');
const app = express();
const path = require('path');

// Defining static directory to be served.
app.use(express.static(__dirname+'/public'));
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build/three.module.js')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.listen(4000, () => { console.log("visit http://127.0.0.1:4000") });