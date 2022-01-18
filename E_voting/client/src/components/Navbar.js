import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { userContext } from "../userContext";
import { voterContext } from "../userContext";
import axios from "axios";
import { isVoted } from "../Blockchain/blockchain";
function Navbar() {
  const { user, setUser } = useContext(userContext);
  const { voted, setVoted } = useContext(voterContext);
  const [currwallet, setCurrWallet] = useState();
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
          const wallet = res.data.walletId;
          //console.log(curruser);
          setUser(curruser);
          setCurrWallet(wallet);
          console.log(currwallet);
        })
        .catch((err) => {
          console.log(err);
          //alert("NO DATA!!");
        });
    } catch (err) {
      console.log(err);
    }
  };
  console.log("voted??????" + voted);
  useEffect(() => {
    callpg();
  }, []);

  return (
    <header>
      {/*logo */}
      <div className="flex bg-black p-4">
        <div className="flex items-center space-x-5 mx-4 ">
          <div className="border-2 border-black ">
            <img
              src="http://code.benco.io/icon-collection/azure-cds/Blockchain-366-Azure-Blockchain-Service.svg"
              alt=""
              className="h-10 w-10 object-contain"
            />
          </div>
          <h2 className="font-mono text-lg text-white">E-Vote</h2>
        </div>

        {/*right elements */}
        {user ? (
          <div className="flex space-x-5 items-center ml-auto mr-4 font-mono text-lg">
            {user === "61bcc8f16d547254c5604150" ? (
              <div className="flex space-x-5">
                <div className="link">
                  <NavLink className="nav-link text-black" to="/voters">
                    View Voters
                  </NavLink>
                </div>
                <div className="link">
                  <NavLink className="nav-link text-black" to="/addcandidate">
                    Add Candidate
                  </NavLink>
                </div>
                <div className="link">
                  <NavLink className="nav-link text-black" to="/managecand">
                    View Candidates
                  </NavLink>
                </div>
              </div>
            ) : (
              <div className="flex space-x-6">
                <div className="link">
                  <NavLink className="nav-link text-black" to="/dashboard">
                    Dashboard
                  </NavLink>
                </div>

                <div className="link">
                  <NavLink
                    className="nav-link text-black"
                    to="/vote"
                    onClick={async () => setVoted(await isVoted(currwallet))}
                  >
                    Vote
                  </NavLink>
                </div>
              </div>
            )}

            <div className="link">
              <NavLink className="nav-link text-black" to="/result">
                Result
              </NavLink>
            </div>
            <div className="link">
              <NavLink className="nav-link text-black" to="/logout">
                Logout
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="ml-auto mr-4">
            <div className="link">
              <NavLink className=" nav-link text-black " to="/">
                Home
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
export default Navbar;
