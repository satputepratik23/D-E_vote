import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Information from "./components/Information";
import Registeration from "./components/Registeration";
import Vote from "./components/Vote";
import Homepg from "./components/Homepg";
import { Route } from "react-router-dom";
import "./App.css";
import Result from "./components/Result";
import AddCandidate from "./components/AddCandidate";
import { userContext, voterContext } from "./userContext";
import Voters from "./components/Voters";
import ManageCand from "./components/ManageCand";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
const { init } = require("./Blockchain/blockchain.js");
const App = () => {
  const [user, setUser] = useState();
  const [voted, setVoted] = useState();
  init();
  console.log("Testing");
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <voterContext.Provider value={{ voted, setVoted }}>
          <Route exact path="/" component={Homepg} />
          <Navbar />
          <Route exact path="/signin" component={Home} />
          <Route exact path="/register" component={Registeration} />
          <Route exact path="/info" component={Information} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/managecand" component={ManageCand} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/voters" component={Voters} />
          <Route exact path="/vote" component={Vote} />
          <Route exact path="/addcandidate" component={AddCandidate} />
        </voterContext.Provider>
      </userContext.Provider>
    </div>
  );
};

export default App;
