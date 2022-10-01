import { ethers } from 'ethers';
import abi from "../components/abi.json";
export var nowallet;
var provider;
try {
  provider = new ethers.providers.Web3Provider(window.ethereum);

} catch (err) {
  nowallet = true;
  console.log("No wallet found")
}
var signer;
var contract;

export var voter_id;

export function detect_provider() {
  let provider;
  if (window.ethereum) {
    provider = window.ethereum
  }
  else if (window.web3) {
    provider = window.web3.currentProvider;
  }
  else {
    // console.log("none");
  }
  return provider
}

// export var isWalletConnected =

export async function connect_wallet() {
  let provider = detect_provider();

  if (provider) {
    if (provider !== window.ethereum) {
      console.log("no wallet")
      // return false;
    }

    if (window.ethereum) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        })
        voter_id = accounts[0];
        return accounts;
      }
      catch (error) {
        console.log("error..connecting");
        return false;
      }
    }

  }
}


export async function all_elections() {
  try {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner()

    contract = new ethers.Contract(
      "0x5aa6f60a9eb2cbb96a6d246c6e25829c965052d1",
      abi,
      signer
    )
    // await contract.getAllElections()
    contract.increment().then((res) => {
      return resolve(res);
    }).catch((e) => {  })

  }
  catch (err) {
    console.log(err);
  }
}







