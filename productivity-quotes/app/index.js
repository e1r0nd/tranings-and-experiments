"use strict";

const express = require("express");
const helmet = require("helmet");
const quotes = require("./quotes");

const app = express();

app.use(helmet());

app.get("/", (request, response) => {
  const max = quotes.length - 1;
  const randomIndex = Math.floor(Math.random() * max);
  const quote = quotes[randomIndex];

  response.json(quotes[randomIndex]);
});

module.exports = app;
