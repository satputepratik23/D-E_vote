import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { voterContext } from "../userContext.js";
const { vote } = require("../Blockchain/blockchain.js");
const VCard = () => {
  const [cand, setCand] = useState([]);
  const { voted } = useContext(voterContext);
  console.log("voted from cards" + voted);
  const getCandidates = () => {
    const config = { "content-type": "application/json" };
    try {
      axios
        .get("http://localhost:5000/candidates", config, {
          withCredentials: true,
        })
        .then((res) => {
          const data = res.data;
          setCand(data);
          console.log(data);
        });
    } catch (err) {
      console.log("NO DATA on VCARD!!");
      console.log(err);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <div className="flex pt-10 ">
      {cand.map(
        ({ id, name, age, partyName, constituency, candidateIndex }) => (
          <div className="w-40  rounded overflow-hidden shadow-lg m-6   bg-white items-center py-4">
            {partyName === "BJP" ? (
              <center>
                <img
                  className="bg-contain h-24 "
                  src="https://cdn2.momjunction.com/wp-content/uploads/2019/01/How-To-Draw-Lotus-Easy-Step-By-Step-Guide-2.jpg"
                  alt="Candidate"
                />
              </center>
            ) : partyName === "Congress" ? (
              <center>
                <img
                  className="bg-contain h-24"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPoCSAbGmY8PJsbVBcYjhxSHuU0pOocu6WA&usqp=CAU"
                  alt="Candidate"
                />
              </center>
            ) : partyName === "Cycle" ? (
              <center>
                <img
                  className="bg-contain  max-h-20"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Indian_Election_Symbol_Cycle.png"
                  alt="Candidate"
                />
              </center>
            ) : partyName === "Shivsena" ? (
              <center>
                <img
                  className="bg-contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Indian_Election_Symbol_Bow_And_Arrow.png"
                  alt="Candidate"
                />
              </center>
            ) : (
              <center>
                <img
                  className="bg-contain max-h-20 "
                  src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file74mtnjoehl2o7zpvm5l-1607729839-1553778090.jpg?itok=IV1RTTu7"
                  alt="Candidate"
                />
              </center>
            )}
            <div className="p-2">
              <div className="font-bold text-xl mb-0.5 text-center border-b-2 py-2">
                {name}
              </div>
            </div>
            <div className=" text-center">
              {voted === false ? (
                <button
                  type="submit"
                  onClick={() => {
                    vote(candidateIndex);
                  }}
                  className="w-24 py-3 rounded bg-purple-500 text-white hover:bg-purple-600 focus:outline-none "
                >
                  Vote
                </button>
              ) : (
                <p className="text-red-700 ">Already Voted!</p>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default VCard;
