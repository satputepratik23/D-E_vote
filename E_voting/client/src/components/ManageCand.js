import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const ManageCand = () => {
  const config = {
    "content-type": "application/json",
  };

  const [cand, setCand] = useState([]);

  useEffect(() => {
    getCandidates();
  }, []);

  const getCandidates = () => {
    try {
      axios
        .get("http://localhost:5000/candidates", config, {
          withCredentials: true,
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
          setCand(data);
        })
        .catch((err) => {
          console.log(err);
          alert("Invalid Credentials!");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="bg-purplebg bg-no-repeat pb-96 ">
      <div className="pt-8">
        <div class=" justify-center  flex">
          <h2 class="text-4xl font-semibold text-black">Candidates</h2>
        </div>
        <div className="">
          <div class="container   relative top-4  p-2">
            <div class="flex  text-center justify-center"></div>
            <div class="flex justify-center text-center">
              <div class="grid grid-cols-2 items-center border-2 bg-white p-8   rounded-lg gap-y-4">
                {cand.map(({ id, name, age, partyName, constituency }) => (
                  <div key={id}>
                    <div class="">
                      {partyName === "BJP" ? (
                        <img
                          className="bg-contain h-20"
                          src="https://cdn2.momjunction.com/wp-content/uploads/2019/01/How-To-Draw-Lotus-Easy-Step-By-Step-Guide-2.jpg"
                          alt="Candidate"
                        />
                      ) : partyName === "Congress" ? (
                        <img
                          className="bg-contain h-20"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPoCSAbGmY8PJsbVBcYjhxSHuU0pOocu6WA&usqp=CAU"
                          alt="Candidate"
                        />
                      ) : partyName === "Cycle" ? (
                        <img
                          className="bg-contain h-20"
                          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Indian_Election_Symbol_Cycle.png"
                          alt="Candidate"
                        />
                      ) : partyName === "Shivsena" ? (
                        <img
                          className="bg-contain h-20"
                          src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Indian_Election_Symbol_Bow_And_Arrow.png"
                          alt="Candidate"
                        />
                      ) : (
                        <img
                          className="bg-contain h-20"
                          src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file74mtnjoehl2o7zpvm5l-1607729839-1553778090.jpg?itok=IV1RTTu7"
                          alt="Candidate"
                        />
                      )}
                    </div>
                    <div class="">
                      <h4 class="font-serif text-black ">{name}</h4>
                      <p>
                        <b>Party: </b> {partyName}
                      </p>
                      <p>
                        <b>Constituency: </b> {constituency}
                      </p>
                    </div>
                    <div class=" relative ">
                      <b>Age: </b>
                      {age}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCand;
