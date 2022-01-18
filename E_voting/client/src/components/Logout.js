import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

function Logout() {
  const history = useHistory();
  const config = {
    Headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  //logout code
  useEffect(() => {
    let opt = window.confirm("Do you really want to logout ?");
    if (opt) {
      axios
        .get("http://localhost:5000/logout", config, { withCredentials: true })
        .then(history.push("/", { replace: true }))
        .catch((err) => {
          console.log(err);
        });
      window.location.reload();
    }
  });

  return <div> </div>;
}

export default Logout;
