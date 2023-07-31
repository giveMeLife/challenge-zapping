var express = require("express");
var router = express.Router();

// Importamos modelo Tarea
const User = require("../models/User");

// Hash Contraseña
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { verificarAuth } = require("../middleware/Authentication");

router.post("/", async (req, res) => {
  const body = {
    nombre: req.body.nombre,
    email: req.body.email,
    role: req.body.role,
  };

  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

  try {
    const userDB = await User.create(body);
    return res.status(200).json(true);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

module.exports = router;
