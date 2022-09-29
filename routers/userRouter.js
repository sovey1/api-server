import express from "express";
import data from "../src/template/data.js";
import bcrypt from "bcryptjs";
import User from "../src/MongoClass/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../src/utilities/token.js";
const userRouter = express.Router();

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const creatdUser = await User.insertMany(data.users);
    if (creatdUser) {
      res.send({ creatdUser });
    } else {
      res.send({ statusId: 400, message: "Usuario no creado" });
    }
  })
);
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          last_name: user.last_name,
          email: user.email,
          isAdmin: user.isAdmin,
          phone: user.phone,
          age: user.age,
          token: generateToken(user),
        });

        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);
userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      isAdmin: req.body.isAdmin,
      phone: req.body.phone,
      age: req.body.age,
    });
    const createdUser = await user.save();
    if (createdUser) {
      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        last_name: createdUser.last_name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        phone: createdUser.phone,
        age: createdUser.age,
        token: generateToken(createdUser),
      });
    } else {
      res.status(401).send({ message: "Invalid user data" });
    }
  })
);

export default userRouter;
