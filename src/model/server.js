import express from "express";
import productList from "../template/data.js";
import dotenv from "dotenv";
import cors from "cors";
class server {
  constructor() {
    this.app = express();
    this.dotenv = dotenv.config();
    this.port = process.env.PORT;
    this.cors = cors();
  }
  get configureCors() {
    this.app.use(this.cors);
    origin: localhost: 4000;
    http: optionsSuccessStatus: 200;
  }
  get products() {
    this.app.get("/api/products", cors(), (req, res) => {
      res.send(productList);
    });
    this.app.get("/api/products/:id", cors(), async (req, res) => {
      const id = await req.params;
      if (productList.products) {
        res.send(productList.products[Number(id.id)]);
      } else {
        res.status(404).send("No se encontro el producto");
      }
    });
  }

  get start() {
    this.app.get("/", (req, res) => {
      res.send("Servidor en perfecto estado test ");
    });
    this.app.listen(this.port, () => {
      console.log(`Servidor abierto en http://localhost:${this.port}`);
    });
  }
}

export default server;
