const express = require("express");
const correoControllers = require("../controllers/correoControllers");
const app = express();

app.post("/correo", correoControllers.enviarCorreo);

module.exports = app;