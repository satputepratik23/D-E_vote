import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  aadhar: {
    type: Number,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
});

export default mongoose.model("CANDIDATE", candidateSchema);
