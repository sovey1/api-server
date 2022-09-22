import express from "express";
import data from "../src/template/data.js";
import User from "../src/MongoClass/userModel.js";
const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
  res.send(data.users);
});

export default userRouter;
