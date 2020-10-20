const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(router);

router.get("/message", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  res.send("Lista de mensajes");
});

router.post("/message", function (req, res) {
  console.log(req.body);
  console.log(req.query);
  res.status(201).send({ Error: "", body: "Creado correctamente" });
});

// app.use("/", function (req, res) {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La app esta en http://localhost:3000");
