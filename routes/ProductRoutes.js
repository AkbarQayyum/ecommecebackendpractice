const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductControllers/ProductController");
router.get("/", ProductController.GetAllProducts);
router.post("/add", ProductController.AddProduct);
router.get("/get/:id", ProductController.GetSingleProducts);

router.delete("/delete/:id", ProductController.RemoveProducts);

module.exports = router;
