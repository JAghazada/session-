const registerController = require("../controllers/register.controllers");
const Router = require("express").Router();
Router.post("/register",registerController)
module.exports = Router