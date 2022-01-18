import express from "express";
import conn from "./db/connection.js";
import User from "./model/userSchema.js";
import auth from "./router/auth.js";
import cors from "cors";
import authenticate from "../server/middleware/authenticate.js";
const app = express();
app.use(express.json());
app.use(auth);
app.use(cors());
//Middleware

app.get("/", (req, res) => {
  res.send("Hello world from app.js");
});

app.get("/about", authenticate, (req, res) => {
  res.send("Hello world from about");
});

app.get("/information", (req, res) => {
  res.send("Hello world from information page");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
