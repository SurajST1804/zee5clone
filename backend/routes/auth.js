const { Router } = require("express");
const { SignUp, SignIn, getMe, Logout } = require("../controllers/auth");
const { Protected } = require("../middlewares/auth");
const router = Router();

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);
router.route("/me").get(Protected, getMe);
router.route("/logout").delete(Logout);

module.exports = router;
