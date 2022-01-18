import Election from "./contracts/Election.json";
const Web3 = require("web3");
let selectedAccount;
let electionContract;
let winner;
async function init() {
  // <-- ye export kese karenge ???
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
  // var getWinner;
  if (networkId) {
    const electionContract = new web3.eth.Contract(
      Election.abi,
      "0x54c8F97711D36C64B24FBeB9D720Fb8c90040b3c"
    );
    console.log(electionContract);
    // getWinner = await electionContract.methods.getWinner().call();
    // console.log("Winner is: " + getWinner);
  }
  const getWinner = async () => {
    winner = await electionContract.methods.getWinner().call();
    return winner;
  };
  const vote = async (givenAccount, index) => {
    await electionContract.methods.vote(index).send({ from: givenAccount });
  };

  const authorize = async (givenAccount, walletId) => {
    await electionContract.methods
      .authorize(walletId)
      .send({ from: givenAccount });
  };

  const addCandidate = async (givenAccount, name, constituency, partyName) => {
    await electionContract.methods
      .addCandidate(name, constituency, partyName)
      .send({ from: givenAccount });
  };
}
export default init;
