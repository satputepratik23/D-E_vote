import jtoken from "jsonwebtoken";
import User from "../model/userSchema.js";

import SECRET_KEY from "../jwtSecret.js";

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyToken = jtoken.verify(token, SECRET_KEY);
    console.log(verifyToken);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not Found!!");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("Unauthorised:No token provided!");
    console.log(error);
  }
};
export default Authenticate;
