import express from "express";
import data from "../src/template/data.js";
import bcrypt from "bcryptjs";
import User from "../src/MongoClass/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../src/utilities/token.js";
const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const creatdUser = await User.insertMany(data.users);
    res.send({ creatdUser });
  })
);
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          id: user.id,
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
export default userRouter;
