var express = require("express");
//request opstarten
var request = require('request');
var path = require("path");

//let toegevoegd
let data_parken;

var content = require("./data/application.json");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
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
app.get('/register', (req, res) => {
    res.render('register');
    });
/*app.get('/leaflet', (req, res) => {
    res.render('leaflet');
  });*/
app.get('/chat', (req, res) => {
    res.render('chat');
    });
app.get('/lost', (req, res) => {
    res.render('lost');
    });
app.get('/parken', (req, res) => {
    res.render('parken');
    });
app.get('/contact', (req, res) => {
    res.render('contact');
    });
app.get('/detail', (req, res) => {
    res.render('detail');
    });
});

app.listen(port);

//aanpassing om data parken te krijgen

//request aanvragen

request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/50/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  function (error,response,body) {
    data_parken = JSON.parse(body);

    data_parken = data_parken.features;

    for(var i=0; i < data_parken.length; i++) {
      console.log("naam: " + data_parken[i].attributes.naam);
    }
  }
);

app.get('/parken', function(req, res) {
  res.render('parken', {
      parken: data_parken
  });
});
app.get('/leaflet', function(req, res) {
  res.render('leaflet', {
      parken: data_parken
  });
});

app.get('/detail', function(req, res) {
  res.render('detail', {
      parken: data_parken
  });
});
