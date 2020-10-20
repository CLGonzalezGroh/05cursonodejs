const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./network/routes");
// const router = require("./components/message/network");

const app = express();

app.use(bodyParser.json());
routes(app);

app.use("/app", express.static("public"));
app.listen(3000);
console.log("La app esta en http://localhost:3000");
