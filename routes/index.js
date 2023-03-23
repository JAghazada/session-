const router = require("express").Router()
const LoginRouter =require("./login.routes")
const RegisterRouter =require("./register.routes");
const NavigationRouter =require("./navigation.routes");

router.use(NavigationRouter)
router.use(LoginRouter)
router.use(RegisterRouter)

module.exports = router