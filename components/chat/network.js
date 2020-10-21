const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.get("/", function (req, res) {
  const filterChat = req.query.id || null;
  controller
    .listChats(filterChat)
    .then((chatList) => {
      response.success(req, res, chatList);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addChat(req.body.users)
    .then((fullChat) => {
      response.success(req, res, fullChat, 201);
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
