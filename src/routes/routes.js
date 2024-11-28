const express = require("express");
const chatControllers = require("../controllers/chatControllers");
const router = express.Router();

router.get('/',chatControllers.listar)
router.get('/perqunta',chatControllers.perqunta)
router.get('/mensagem/:tipo/:id',chatControllers.mensagem)
router.post('/pedido',chatControllers.pedido)

module.exports = router;