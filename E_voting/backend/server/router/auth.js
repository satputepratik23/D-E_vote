import express from "express";
import "../db/connection.js";
import User from "../model/userSchema.js";
import bcrypt from "bcryptjs";
import Cors from "cors";
import cookieParser from "cookie-parser";
import Candidate from "../model/candidateSchema.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.use(Cors({ credentials: true, origin: "http://localhost:3000" }));
router.use(cookieParser());
router.get("/", (req, res) => {
  res.send("Hello world from router.js");
});
//register route
router.post("/register", async (req, res) => {
  const { name, email, aadhar, password, cpassword } = req.body;

  if (!name || !email || !aadhar || !password || !cpassword) {
    return res.status(422).json({ error: "Fields not filled properly" });
  }

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    return res.status(422).json({ error: "User already exists" });
  } else if (password != cpassword) {
    return res.status(422).json({ error: "Password does not match" });
  } else {
    const user = new User({ name, email, aadhar, password, cpassword });
    await user.save();
    res.status(201).send("User registered successfully");
  }
});

router.post("/cadreg", async (req, res) => {
  const { name, email, aadhar } = req.body;

  if (!name || !email || !aadhar) {
    return res.status(422).json({ error: "Fields not filled properly" });
  }

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    return res.status(422).json({ error: "User already exists" });
  } else {
    const user = new Candidate({ name, email, aadhar });
    await user.save();
    res.status(201).send("User registered successfully");
  }
});
router.get("/info", authenticate, (req, res) => {
  //console.log(req.rootUser);
  res.send(req.rootUser);
});
router.get("/getVoters", async (req, res) => {
  const voters = await User.find();
  res.send(voters);
});
router.get("/candidates", async (req, res) => {
  const candidate = await Candidate.find();
  res.send(candidate);
  // console.log("from route");
  // console.log(candidate);
});
//login route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      //console.log("Please enter valid details");
      alert("Enter Valid Details");
      return res.status(400).send("Please enter valid details");
    }
    const userLogin = await User.findOne({ email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      //generating token
      const token = await userLogin.getAuthToken();
      console.log(token);
      //storing token in cookies
      // const tok = JSON.stringify(token);
      res.status(202).cookie("jwt", token, {
        sameSite: "strict",

        expires: new Date(new Date().getTime() + 8640000),
        httpOnly: true,
      });
      if (!isMatch) {
        return res.status(400).send("Invalid Credentials !!");
      } else {
        return res.status(200).send("User logged in successfully!!");
      }
    } else {
      return res.status(400).send("Invalid Credentials !!");
    }
    //console.log(userLogin);
  } catch (err) {
    console.log0("Enter Valid Details!");
    console.error(err);
  }
});

export default router;
