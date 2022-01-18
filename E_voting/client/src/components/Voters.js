import axios from "axios";
import React, { useEffect, useState } from "react";
import { authorize } from "../Blockchain/blockchain";

function Voters() {
  const [Voter, setVoter] = useState([]);

  const getvoters = () => {
    try {
      axios
        .get("http://localhost:5000/getVoters", config, {
          withCredentials: true,
        })
        .then((res) => {
          //    console.log(res);
          const data = res.data;
          //console.log(data);
          setVoter(data);
          console.log(Voter);
          console.log("data recievd ");
        })
        .catch(() => {
          alert("Voter not found");
        });
    } catch (err) {
      console.log(err);
    }
  };
  const config = {
    "content-type": "application/json",
  };
  useEffect(() => {
    getvoters();
  }, []);

  const deleteVoter = async (_id) => {
    console.log("Deletevoter ID" + _id);

    await axios({
      method: "DELETE",
      url: "http://localhost:5000/deleteVoter",
      data: {
        _id: _id,
      },
    }).then(alert("Voter Deleted!"));
  };

  return (
    <div>
      <div className="bg-purplebg bg-no-repeat pb-96">
        <table class="shadow-lg   mx-48 h-56  relative top-14 rounded">
          <div class="overflow-y-auto scroll  ">
            <thead class="block md:table-header-group sticky">
              <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th class="bg-black  px-12 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sticky top-0">
                  Name
                </th>

                <th class="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sticky top-0">
                  Email Address
                </th>
                <th class="bg-black p-2 mx-24 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sticky top-0">
                  Aadhar Number
                </th>
                <th class="bg-black p-2 mx-24 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sticky top-0">
                  Wallet ID
                </th>
                <th class="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sticky top-0">
                  Actions
                </th>
                <th class="bg-black p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sticky top-0">
                  Actions
                </th>
              </tr>
            </thead>
            {Voter.map(({ _id, name, email, aadhar, walletId }) => (
              <tbody class="  overflow-y-hidden md:table-row-group" key={_id}>
                <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
                  <td class="w-1/3 px-2  md:border md:border-grey-500 text-left block md:table-cell">
                    {name}
                  </td>

                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    {email}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    {aadhar}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    {walletId}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    {console.log("Voter id Form:" + _id)}

                    <button
                      onClick={() => {
                        deleteVoter(_id);
                        window.location.reload();
                      }}
                      class="bg-gray-500 hover:bg-black text-white font-bold py-1 px-2 border border-red-500 rounded"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        authorize(walletId);
                        window.location.reload();
                      }}
                      class="bg-gray-500 hover:bg-black text-white font-bold py-1 px-2 mx-2 border border-red-500 rounded"
                    >
                      Authorize
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </div>
        </table>
      </div>
    </div>
  );
}

export default Voters;
