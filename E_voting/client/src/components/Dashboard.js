import axios from "axios";
import React, { useEffect, useState } from "react";
function Dashboard() {
  const [person, setPerson] = useState({
    id: "",
    name: "",
    email: "",
    aadhar: "",
  });

  useEffect(() => {
    const config = {
      "content-type": "application/json",
    };
    axios
      .get("http://localhost:5000/info", config, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data;
        console.log("data");
        console.log(data);
        console.log("setting person");
        setPerson({
          ...person,
          id: data._id,
          name: data.name,
          email: data.email,
          aadhar: data.aadhar,
        });
        console.log("Person: ");
        console.log(person);
      })
      .catch((err) => {
        alert("NO DATA ON DASH");
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-purplebg bg-no-repeat pb-96 ">
      <div>
        <div class="flex justify-center pt-24  space-x-2 rounded-lg overflow-hidden ">
          <div class="card   ">
            <div class="  card__media--aside "></div>
            <div class="flex items-center p-4">
              <div class="relative flex flex-col items-center w-full">
                <div class="h-24  md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16  bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                  <img
                    class="h-24 w-24 md rounded-full relative"
                    src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                    alt=""
                  />
                  <div class="absolute"></div>
                </div>
                <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span class="text-md whitespace-nowrap text-gray-800 font-semibold"></span>
                  <span class="text-md whitespace-nowrap text-gray-600">
                    <b>Name:</b> {person.name}
                  </span>
                  <span class="text-md text-gray-600">
                    <b>Email:</b>
                    {person.email}
                  </span>

                  <div class="py-2 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                    <span class="text-center px-2">
                      <span class="font-bold text-gray-700">Aadhar:</span>
                      <span class="text-gray-600"> {person.aadhar}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 relative top-24 left-72">
        <img
          src="https://www.aapd.com/wp-content/uploads/2020/10/Voting-Illustration-1-White-Medium-1536x576.png"
          alt=""
          className="rounded-full "
        />
      </div>
    </div>
  );
}

export default Dashboard;
