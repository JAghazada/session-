const loginController = require("../controllers/login.controllers");
const Router = require("express").Router();
Router.get("/login",loginController)
module.exports = Router
