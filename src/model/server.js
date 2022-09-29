import express from "express";
import data from "../template/data.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "../../routers/userRouter.js";
import productRouter from "../../routers/productRouter.js";
class server {
  constructor() {
    this.app = express();
    this.dotenv = dotenv.config();
    this.port = process.env.PORT;
    this.cors = cors();
    this.mongoose = mongoose;
  }
  get configureCors() {
    this.app.use(this.cors);
    origin: localhost: 4000;
    http: optionsSuccessStatus: 200;
  }
  get connectDB() {
    this.mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,

        useUnifiedTopology: false,
      })
      .then(() => {
        console.log("Conectado a la base de datos");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get midleware() {
    this.app.use(express.json());

    //mildware user
    this.app.use("/api/users", userRouter);
    //mildware products
    this.app.use("/api/products", productRouter);
    this.app.use((err, req, res, next) => {
      res.status(500).send({ message: err.message });
    });
  }

  get start() {
    this.app.get("/", (req, res) => {
      res.send("Servidor en perfecto estado test ");
    });
    this.app.use(express.urlencoded({ extended: true }));

    this.app.listen(this.port, () => {
      console.log(`Servidor abierto en http://localhost:${this.port}`);
    });
  }
}

export default server;
