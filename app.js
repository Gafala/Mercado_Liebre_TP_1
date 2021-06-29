const express = require ('express');
const app = express();
const port = 3030;
const path = require('path');

app.listen(3030,() => console.log('Servidor Corriendo...'));
app.use(express.static('public'));

app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','home.html')));