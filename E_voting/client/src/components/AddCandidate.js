import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addCandidate } from "../Blockchain/blockchain";
const AddCandidate = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    age: "",
    aadhar: "",
    constituency: "",
    partyName: "",
    candidateIndex: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCandidate({ ...candidate, [name]: value });
  };
  const history = useHistory();

  const postData = async (e) => {
    e.preventDefault();
    const { name, age, aadhar, constituency, partyName, candidateIndex } =
      candidate;
    console.log(candidate);
    await addCandidate(name, partyName, constituency);
    const reg = {
      name,
      age,
      aadhar,
      constituency,
      partyName,
      candidateIndex,
    };
    const config = {
      "content-type": "application/json",
    };
    axios
      .post("http://localhost:5000/cadreg", reg, config)
      .then((res) => {
        console.log("Response received", res);
        alert("Candidate added successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Not Added! Try Again!");
      });
    history.push("/managecand");
    window.location.reload();
  };

  console.log(candidate);
  return (
    <div className="bg-purplebg bg-no-repeat pb-96">
      <div className="flex pt-12 relative left-96 max-w-md  px-2 mx-8 ">
        <div className="bg-white p-6 rounded shadow-lg text-black w-full">
          <h1 className="my-4 text-3xl text-center border-b-2">
            Enter the Candidate Details
          </h1>
          <form method="POST" onSubmit={postData}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-2"
              onChange={handleInputs}
              name="name"
              value={candidate.name}
              placeholder="Candidate Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-2"
              name="age"
              value={candidate.age}
              onChange={handleInputs}
              placeholder="Age"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-2"
              name="candidateIndex"
              value={candidate.candidateIndex}
              onChange={handleInputs}
              placeholder="Index"
            />

            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-2"
              name="aadhar"
              value={candidate.aadhar}
              onChange={handleInputs}
              placeholder="Aadhar"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-2"
              name="constituency"
              onChange={handleInputs}
              value={candidate.constituency}
              placeholder="Constituency"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-2"
              name="partyName"
              onChange={handleInputs}
              value={candidate.partyName}
              placeholder="Party Name"
            />
            <button
              type="submit"
              onClick={postData}
              className="mx-28 text-center px-4  py-2 rounded bg-purple-500 text-white hover:bg-purple-600 focus:outline-none my-1"
            >
              Add Candidate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCandidate;
