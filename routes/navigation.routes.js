const navigationController = require("../controllers/navigation.controller");
const Router = require("express").Router();
Router.get("/navigation",navigationController)
module.exports = Router
