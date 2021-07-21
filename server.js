const express = require("express");
const app = express();
const cors = require('cors');
require("./config/config");


app.use(cors());

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require("./routes/correo"));

app.listen( process.env.PORT , () => {
    console.log("Estas conectado " + process.env.PORT + " " + process.env.FRONTEND );
});