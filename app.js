'use stric'
const express = require('express')//requerimos el frame
const app = express()
const path = require('path')//requerimos el path
app.get('/', function (req, res){
    res.sendFile( path.resolve(__dirname, 'services.html'))
})//para cargar un archivo html en nuestro servidor local

app.listen(3000)//llamo al puerto 3000