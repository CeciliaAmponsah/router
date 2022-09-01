const router = require("express").Router;
const {
  createProducts,
  deleteProducts,
  getProducts,
  updateProducts,
} = require("../controllers/products.controller");

const productRouter = router();

productRouter.get("/", getProducts);
productRouter.post("/", createProducts);
productRouter.patch("/", updateProducts);
productRouter.delete("/", deleteProducts);

module.exports = productRouter;
