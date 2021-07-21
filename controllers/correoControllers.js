const enviarCorreoPop = require("../middleware/correoEnvios");

exports.enviarCorreo = ( req, res ) => {
    enviarCorreoPop(req, res);
}