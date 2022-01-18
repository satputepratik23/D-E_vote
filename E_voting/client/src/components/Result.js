import React, { useEffect, useState } from "react";
const { getWinnerName, getCandidates } = require("../Blockchain/blockchain.js");
// const { getCandidates } = require("../Blockchain/blockchain.js");

function Result() {
  const [candidate, setCandidate] = useState([]);
  const getCandidate = async () => {
    setCandidate(await getCandidates());
  };
  useEffect(() => {
    getCandidate();
  }, []);
  //console.log(candidate);
  const [winnerName, setwinnerName] = useState("");
  return (
    <div className="bg-purplebg bg-no-repeat pb-96 pt-24">
      <div className="mx-28">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-black text-white">
              <tr>
                <th className="w-1/2 text-center py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>

                <th class="text-center py-3 px-4 uppercase font-semibold text-sm">
                  Vote Count
                </th>
              </tr>
            </thead>
            {candidate.map(({ name, voteCount }) => (
              <tbody class="text-gray-700" key={name}>
                <tr>
                  <td class="w-1/3 text-center py-3 px-4">
                    <b>{name}</b>
                  </td>
                  <td class="text-center py-3 px-4">
                    <b>{voteCount}</b>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="flex justify-center p-7">
          <button
            className="px-4 py-2 rounded  text-white   bg-black hover:shadow-xl"
            type="submit"
            onClick={async () => setwinnerName(await getWinnerName())}
          >
            Get Winner
          </button>
        </div>
        <div>
          <h3 className="flex justify-center">
            Winner is :&nbsp; <b>{winnerName}</b>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Result;
