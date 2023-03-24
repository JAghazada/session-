const basketController = require("../controllers/basket.controllers")

const router = require("express").Router()
router.post("/updateBasket",basketController.addBasketController)
router.get("/getBasket",basketController.getBasketProductsController)
module.exports = router
