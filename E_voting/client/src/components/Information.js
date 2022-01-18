import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { userContext } from "../userContext";
const Information = () => {
  const { user, setUser } = useContext(userContext);

  const callpg = async () => {
    try {
      const config = {
        "content-type": "application/json",
      };
      axios
        .get("http://localhost:5000/info", config, {
          withCredentials: true,
        })
        .then((res) => {
          //console.log("user from info page");
          //console.log(res.data);
          const curruser = res.data._id;
          //console.log(curruser);
          setUser(curruser);
        })
        .catch((err) => {
          console.log(err);
          //alert("NO DATA!!");
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callpg();
  });

  const history = useHistory();
  return (
    <div className="bg-purplebg bg-opacity-20 bg-no-repeat pb-32  ">
      <h1 className="text-center font-extrabold text-purple-500 underline  p-2">
        Blockchain E-voting System
      </h1>
      <p className="text-lg font-bold text-gray-800 mr-20 ml-48 max-w-7xl">
        Electronic voting (e-voting) is an electronic means for casting and
        counting votes. It is an efficient and cost-effective way for conducting
        a voting procedure, which has characteristic of being magnanimous data
        and real time and requesting high safety. However, concerns on security
        of networking and privacy of communication for e-voting have been grown.
        Securing e-voting is very urgent and has becoming a popular topic in the
        area of communications and networking. We present techniques to exploit
        blockchain in P2P network to improve the security of e-voting. First, we
        design a synchronized model of voting records based on distributed
        ledger technology (DLT) to avoid forgery of votes. Second, we design a
        user credential model based on elliptic curve cryptography (ECC) to
        provide authentication and non-repudiation. Third, we design a
        withdrawal model that allows voters to change their vote before a preset
        deadline. By integrating the above designs, a blockchain-based e-voting
        scheme in P2P network is proposed for essential requirements of e-voting
        process. To prove and verify the scheme, a blockchain-based e-voting
        system for multiple candidates has been designed on Linux platforms in
        P2P network. The system involves electronic voting theory, cryptography,
        and software engineering theory. The implementation result shows that it
        is a practical and secure e-voting system, which solves the problem on
        forgery of votes during e-voting. The blockchain-based e-voting system
        can be applied to a variety of networking applications directly.
      </p>
      <h4 className=" underline ml-48 font-extrabold">
        Overview of the blockchain-based e-voting scheme:
      </h4>
      <p className="text-lg text-gray-800 font-bold mr-20 ml-48 max-w-7xl">
        We design a blockchain-based scheme for secure e-voting. First, a
        synchronized model of voting records based on DLT is designed to avoid
        forgery of votes. Second, a user credential model based on ECC is
        designed to provide authentication and non-repudiation. Third, a
        withdrawal model is designed that allows voters to change their vote
        before a preset deadline. We introduce the block definition, user
        credential based on ECC, computing the hash value based on SHA-256 and
        mining and generation of voting blocks in the following.
      </p>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 rounded  text-white   bg-black hover:shadow-xl"
          type="submit"
          onClick={() => {
            user === "61bcc8f16d547254c5604150"
              ? history.push("/voters")
              : history.push("/vote");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Information;
