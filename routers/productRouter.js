import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../src/MongoClass/productModel.js";
import data from "../src/template/data.js";
const productRouter = express.Router();
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    if (createdProducts) {
      res.send({ createdProducts });
    } else {
      res.send({ statusId: 400, message: "Producto no creado" });
    }
  })
);
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(product);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);
export default productRouter;
