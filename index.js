var express = require("express");
var path = require("path");

var content = require("./data/application.json");
var port = 3000;
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"))

app.get("/", function(request, response) {
    response.render("login", {
        boodschap: "online!"
    });
app.get('/home', (req, res) => {
    res.render('home');
    });
app.get('/leaflet', (req, res) => {
    res.render('leaflet');
    });
app.get('/chat', (req, res) => {
    res.render('chat');
    });
app.get('/detailpark', (req, res) => {
    res.render('detailpark');
    });
app.get('/lost', (req, res) => {
    res.render('lost');
    });
app.get('/parken', (req, res) => {
    res.render('parken');
    });
app.get('/profiel', (req, res) => {
    res.render('profiel');
    });
});

app.listen(3000);
