const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.get("/", function (req, res) {
  const filterMessage = req.query.user || null;
  controller
    .listMessages(filterMessage)
    .then((messageList) => {
      response.success(req, res, messageList);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
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

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((e) => {
      response.error(req, res, "Internal error", 500, e);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado`);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});

module.exports = router;
