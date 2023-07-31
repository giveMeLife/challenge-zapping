const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const history = require("connect-history-api-fallback");

// Conexión base de datos
const uri = "mongodb://mongo:27017/auth";
const options = { useNewUrlParser: true };
mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a DB");
  },
  (err) => {
    console.log(err);
  }
);

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./routes/User"));
app.use("/login", require("./routes/Login"));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const port = "4000";

app.set("puerto", process.env.PORT || port);
app.listen(app.get("puerto"), function () {
  console.log("Example app listening on port " + app.get("puerto"));
});

// Middleware para Vue.js router modo history

app.use(history());
app.use(express.static(path.join(__dirname, "public")));
