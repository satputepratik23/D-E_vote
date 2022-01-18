import React from "react";
import { useHistory } from "react-router";

function Homepg() {
  const history = useHistory();
  return (
    <div className="bg-purplebgg ">
      <div className="font-bold text-4xl font-mono text-white flex justify-end relative top-24 right-44  ">
        <p className="">BLOCKCHAIN VOTING</p>
        <img
          src="http://code.benco.io/icon-collection/azure-cds/Blockchain-366-Azure-Blockchain-Service.svg"
          alt="logo"
          className="h-24 w-24 relative top- top-28 border-white animate-bounce "
        />
      </div>
      <div className="  w-1/2  relative top-96 left-72  ">
        <img
          src="https://thumbs.dreamstime.com/b/group-voting-people-ballots-election-vote-concept-vector-illustration-group-voting-people-ballots-election-vote-186822518.jpg"
          alt=""
          className="rounded-full "
        />
      </div>
      <div className="flex justify-center">
        <div className=" m-48 -mr-96 relative bottom-40 space-x-6">
          <button
            className="p-6 shadow-lg text-lg rounded text-white font-mono inline-block  bg-gray-900  hover:bg-black"
            onClick={() => {
              history.push("/signin");
            }}
          >
            Admin Login
          </button>
          <button
            onClick={() => {
              history.push("/signin");
            }}
            className="p-6 shadow-lg rounded text-lg font-mono text-white inline-block  bg-purple-500 hover:bg-purple-600  "
          >
            User Registration/Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepg;
