require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware para procesar datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para servir tu portafolio
app.use(express.static("Public")); // Asegúrate de que tu carpeta con los archivos HTML, CSS, etc., se llame Public.

// Ruta para manejar el formulario de contacto
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Configuración de nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // Cambia según tu proveedor de correo
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portafolio" <${process.env.GMAIL_USER}>`,
    to: "blancoalberto.r@gmail.com",
    subject: `Mensaje de ${name} (${email})`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo enviado con éxito");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al enviar el correo");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
