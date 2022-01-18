import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Registeration() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    aadhar: "",
    password: "",
    walletId: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, aadhar, walletId, password, cpassword } = user;
    console.log(user);
    const reg = {
      name,
      email,
      aadhar,
      walletId,
      password,
      cpassword,
    };
    const config = {
      "content-type": "application/json",
    };
    axios
      .post("http://localhost:5000/register", reg, config)
      .then((res) => {
        console.log("Response received", res);
        alert("Voter added successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Not Added! Try Again!");
      });
    history.push("/signin");
  };
  // const ID = Voter._id;
  // console.log(""+ID);
  //deleteing voter

  return (
    <div>
      <div className="bg-purplebg bg-no-repeat pb-96">
        <div className="flex pt-16   max-w-sm relative -right-2/4 px-2 mx-8">
          <div className="bg-white px-6 py-2 rounded shadow-lg text-black w-full">
            <h1 className="my-4 text-3xl text-center border-b-2">Sign up</h1>
            <form method="POST" onSubmit={postData}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-2"
                name="name"
                placeholder="Name"
                onChange={handleInputs}
                value={user.name}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-2"
                name="email"
                placeholder="Email"
                onChange={handleInputs}
                value={user.email}
              />

              <input
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-2"
                name="aadhar"
                placeholder="Aadhar Number"
                onChange={handleInputs}
                value={user.aadhar}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-2"
                name="walletId"
                placeholder="Wallet ID"
                onChange={handleInputs}
                value={user.walletId}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-2"
                name="password"
                placeholder="Password"
                onChange={handleInputs}
                value={user.password}
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-2"
                name="cpassword"
                placeholder="Confirm Password"
                onChange={handleInputs}
                value={user.cpassword}
              />

              <button
                type="submit"
                className="mx-28 text-center px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600 focus:outline-none my-1"
                onClick={postData}
                value="register"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registeration;
