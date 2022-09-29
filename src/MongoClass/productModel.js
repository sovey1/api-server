import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    especification: { type: Object, required: true },

    precio: { type: Number, required: true },
    vendido: { type: Number, required: true },
    stock: { type: Number, required: true },
    discount: { type: Number, required: true },
    img: { type: String, required: true },
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
