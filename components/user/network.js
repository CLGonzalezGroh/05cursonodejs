const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.get("/", function (req, res) {
  const filterUser = req.query.name || null;
  controller
    .listUsers(filterUser)
    .then((userList) => {
      response.success(req, res, userList);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addUser(req.body.name)
    .then((fullUser) => {
      response.success(req, res, fullUser, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Informacion invalida",
        400,
        "Error en el controlador"
      );
    });
});

module.exports = router;
