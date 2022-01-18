import mongoose from "mongoose";
const conn =
  "mongodb+srv://yash2909:yash123@cluster0.ldomi.mongodb.net/E-voting?retryWrites=true&w=majority";

mongoose
  .connect(conn, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log("Not connected"));
export default conn;
