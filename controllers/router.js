const express = require("express");
const router = express.Router();

const paisesJSON = require("../models/paises.json")
const planetasJSON = require("../models/planetas.json")
const ciudadesJSON = require("../models/ciudades.json")

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/paises", (req, res) => {
  res.render("paises.ejs", { paises: paisesJSON });
});

router.get("/planetas", (req, res) => {
  res.render("planetas.ejs", { planetas: planetasJSON });
});

router.get("/ciudades", (req, res) => {
  res.render("ciudades.ejs", { ciudades: ciudadesJSON });
});

module.exports = router;
