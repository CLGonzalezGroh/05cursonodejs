const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const routes = require("./network/routes");

db(
  "mongodb+srv://user:user1234@cluster0.iltyu.mongodb.net/telegrom?retryWrites=true&w=majority"
);
const app = express();

app.use(bodyParser.json());
routes(app);

app.use("/app", express.static("public"));
app.listen(3000);
console.log("La app esta en http://localhost:3000");
