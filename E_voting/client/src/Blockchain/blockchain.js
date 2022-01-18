import Web3 from "web3";
import Election from "./build/contracts/Election.json";
let selectedAccount;
let electionContract;

export const init = async () => {
  let provider = window.ethereum;
  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(`Selected account is ${selectedAccount}`);
      })
      .catch((err) => {
        console.log(err);
        return;
      });

    window.ethereum.on("accountsChanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const accounts = await web3.eth.getAccounts();
  //console.log(Election.netwoks[networkId].address);
  //  electionContract = new web3.eth.Contract(Election.abi, Election.networks[networkId].address);
  var getWinner;

  if (networkId) {
    electionContract = new web3.eth.Contract(
      Election.abi,
      "0x3a40e17ffec7b02D95959dfc0a634eCeD9DeFe32"
    );
    console.log("ELECTION CONTRACT");
    console.log(electionContract);
    window.electionContract = electionContract;
    getWinner = await electionContract.methods.getWinner().call();
    console.log("Winner is: " + getWinner);

    const winnerN = await electionContract.methods.candidates(getWinner).call();
    console.log("winner nameee" + winnerN);
    const cnd = await electionContract.methods.getNumCandidate().call();
    for (var i = 0; i < cnd; i++) {
      console.log("neww");
      const candidate = await electionContract.methods.candidates(i).call();
      console.log(candidate.name + " " + candidate.voteCount);
    }
    // console.log("Cnd: " + cnd);

    //await electionContract.methods.vote(1).send({ from: selectedAccount });

    // await electionContract.methods
    //   .addCandidate("Cand1", "Pune City", "Party1")
    //   .send({ from: selectedAccount });
    // await electionContract.methods
    //   .addCandidate("Cand2", "Nagpur City", "Party2")
    //   .send({ from: selectedAccount });

    // await electionContract.methods
    //   .authorize("0x902D4308EAfC7043697294c3355053621431dd91")
    //   .send({ from: selectedAccount });
    // await electionContract.methods
    //   .authorize("0x0ce5ea33E9318647B214e4811420380dB786D3DC")
    //   .send({ from: selectedAccount });
  }
};

export const getWinner = async () => {
  console.log("electionContract in getWinner");
  console.log(electionContract);

  const winner = await window.electionContract.methods.getWinner().call();
  console.log("Winner from blockchain" + winner);
  return winner;
};

export const getWinnerName = async () => {
  const winner = await window.electionContract.methods.getWinner().call();
  const winnerName = await window.electionContract.methods
    .candidates(winner)
    .call();

  return winnerName.name;
};

export const isVoted = async (walletId) => {
  const voter = await window.electionContract.methods.voters(walletId).call();

  return voter.voted;
};

export const vote = async (index) => {
  console.log(window.electionContract.methods);
  await window.electionContract.methods
    .vote(index)
    .send({ from: selectedAccount });
  console.log("voting done right");
};

export const getNumCandidate = async () => {
  const cnt = await electionContract.methods.getNumCandidate().call();
  return cnt;
};

export const getCandidates = async (i) => {
  const cnt = await window.electionContract.methods.getNumCandidate().call();
  const candidates = new Array(cnt);
  for (var i = 0; i < cnt; i++) {
    candidates[i] = await window.electionContract.methods.candidates(i).call();
  }
  return candidates;
};

export const authorize = async (walletId) => {
  await electionContract.methods
    .authorize(walletId)
    .send({ from: selectedAccount });
};

export const addCandidate = async (name, constituency, partyName) => {
  await electionContract.methods
    .addCandidate(name, constituency, partyName)
    .send({ from: selectedAccount });
};
