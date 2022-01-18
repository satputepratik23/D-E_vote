import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
axios.defaults.withCredentials = true;

const Home = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    const config = {
      "content-type": "application/json",
    };
    const reg = {
      email,
      password,
    };

    console.log(email);
    console.log(password);

    axios
      .post("http://localhost:5000/signin", reg, config, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        alert("Logged in Succesfuly!!");
        history.push("/info");
      }).catch = (err) => {
      console.log(err);
      alert("Invalid Credentials!");
    };
  };

  const img =
    "https://aetsoft.net/wp-content/uploads/2020/03/voting_animated.svg";
  return (
    <div className="bg-purplebg bg-no-repeat pb-28  ">
      <div className="flex justify-between items-center flex-row-reverse  p-5 ml-96 ">
        <div>
          <div className=" relative top-16 left-4 ">
            <img src={`${img}?${global.Date.now()}`} alt="" />
          </div>
        </div>
        <div className="w-full max-w-lg pt-5 ">
          <form
            method="POST"
            onSubmit={loginUser}
            className="bg-white shadow-lg rounded  px-12 pt-4 pb-12"
          >
            <div className="text-black text-2xl font-bold flex justify-center border-b-2 py-2 mb-4">
              Login
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 ">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="mx-16   px-4 py-2 rounded text-white inline-block  bg-purple-500 hover:bg-purple-600 "
                type="submit"
                onClick={loginUser}
              >
                Sign In
              </button>
            </div>
            <div className="flex items-center px-4 py-2 justify-center">
              <a href="./register" class="no-underline hover:underline">
                Don't have an account? Sign Up here!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
