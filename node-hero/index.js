require("./app/index");

// index.js
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const rp = require("request-promise");

const app = express();
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts")
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/aw", (req, res) => {
  rp({
    uri:
      "http://apidev.accuweather.com/currentconditions/v1/2-273125_1_AL.json",
    qs: {
      language: en,
      apiKey: "hoArfRosT1215"
    },
    json: true
  })
    .then(data => {
      console.log(data);
      res.render("index", data);
    })
    .catch(err => {
      console.log(err);
      res.render("error");
    });
});

app.get("/", (request, response) => {
  response.render("home", {
    name: "John"
  });
});

app.listen(3000);
