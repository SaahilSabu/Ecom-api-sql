// import controllers review, products
const authController = require("../controllers/authController.js");
const cartController = require("../controllers/cartController.js");
// router
const router = require("express").Router();

// use routers
router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/allCarts", cartController.getAllCarts);
router.post("/addCart/:id", cartController.addCart);
router.get("/cart/:user_id", cartController.getUserCart);

module.exports = router;
