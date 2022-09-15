import express from "express";
import productList from "../template/data.js";

class server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;
  }
  get products() {
    this.app.get("/api/products", (req, res) => {
      res.send(productList);
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
