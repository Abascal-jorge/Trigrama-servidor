const nodemailer = require("nodemailer");

async function enviarCorreoPop(req, res){
    
    let datos = req.body;
    console.log(datos);
    const {nombre, apellido, telefono, correo, mensaje, tipoServicio} = datos;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "mx20.hostgator.mx",
        port: 465,
        auth:{
            user:"jabascal@trigrama.com.mx",
            pass: "1ng3.tr1gr4m4#"
        }
    });

    const correosEmpresa = ["jabascal@trigrama.com.mx", "jcoboj@trigrama.com.mx", "nmarin@trigrama.com.mx", "vgonzalez@trigrama.com.mx"];

    const htmlMensaje = `
        <h1>Datos cliente servicio</h1>
        <p style="padding: 10px 0;">
            Solicitud de servicio por: <span>${nombre}</span>
        </p>
        <table style="border: 1px solid black;
                    border-collapse: collapse;
                    margin: 20px 0;">
            <tr>
                <th style="padding: 10px;
                    border: 1px solid black;">Nombre</th>
                <th style="padding: 10px;
                    border: 1px solid black;">Telefono</th>
                <th style="padding: 10px;
                    border: 1px solid black;">Correo</th>
                <th style="padding: 10px;
                    border: 1px solid black;">Mensaje</th>
            </tr>
            <tr>
                <td style="padding: 10px;
                    border: 1px solid black;">${nombre} ${apellido}</td>
                <td style="padding: 10px;
                    border: 1px solid black;">${telefono}</td>
                <td style="padding: 10px;
                    border: 1px solid black;">${correo}</td>
                <td style="padding: 10px;
                    border: 1px solid black;">${mensaje}</td>
            </tr>
        </table>
        <p style="padding: 2px 0;">Solicitud generada desde la pagina web.</p>
        <p style="padding: 2px 0;">Trigrama</p>
        <a style="text-decoration: none; padding: 2px 0; display: block; color: blue; width: 100px;" href="https://trigrama.com.mx">trigrama.com.mx</a>
        <p style="padding: 2px 0;">Correo: jabascal@trigrama.com.mx</p>
    `;

    let message = {
        from: "Trigrama WEB",
        to: correosEmpresa,
        subject: "Trigrama servicios",
        text: "",
        html: htmlMensaje
    };


   transporter.sendMail(message, (err, info) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json(info);
   });
}

module.exports = enviarCorreoPop;