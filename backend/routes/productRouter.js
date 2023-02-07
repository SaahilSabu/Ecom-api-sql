// import controllers review, products
const productController = require("../controllers/productController.js");
const reviewController = require("../controllers/reviewController");

// router
const router = require("express").Router();

// use routers
router.post("/addProduct", productController.addProduct);

router.get("/allProducts", productController.getAllProducts);

// Review Url and Controller

router.get("/allReviews", reviewController.getAllReviews);
router.post("/addReview/:id", reviewController.addReview);
router.get("/review/:id", reviewController.review);

// get product Reviews
// router.get('/getProductReviews/:id', productController.getProductReviews)

// Products router
router.get("/:id", productController.getOneProduct);
router.get("/colour/:colour", productController.productsByColour);
// router.get("/price/:range", productController.productsByPrice);
router.get("/shoe/:typeOfShoe", productController.productsByTypeOfShoe);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
