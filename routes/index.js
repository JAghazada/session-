const router = require("express").Router()
// !import routers
const LoginRouter =require("./login.routes")
const RegisterRouter =require("./register.routes");
const NavigationRouter =require("./navigation.routes");
const BasketRouter = require("./basket.routes");

router.use(NavigationRouter)
router.use(BasketRouter)
router.use(LoginRouter)
router.use(RegisterRouter)

module.exports = router