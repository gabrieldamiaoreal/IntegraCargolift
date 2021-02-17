var express = require("express");
var dom = require('express-dom');
let ejs = require('ejs');
var app = express();
var port = 8000;
var fs = require('fs')
var path = require('path')


app.get('*.ejs', dom().load());

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use('/', express.static(__dirname + '/'));


app.get('/', function(req, res) {
    res.render("./home/base");
});
app.get('/home', function(req, res) {
    res.render("./home/base");
});
app.get('/beneficios', function(req, res) {
    const pathFile = path.join(__dirname, "public", "contents", "videos", "Alimentacao")
    const files = fs.readdirSync(pathFile)
    files.forEach(file => {
        videoSrc = path.join("public", "contents", "videos", "Alimentacao",
            file)
    })
    res.render("./home/pages/beneficioAli", { name: videoSrc });
});
app.get('/minVideo', function(req, res) {
    res.render("./home/public/js/video.min.js");
});

app.listen(8000, () => { console.log(`app running in http://127.0.0.1:${port}/`) })