import { ethers } from "ethers";

export const connectWallet = async () => {
  if (!window.ethereum) {
    alert("MetaMask not found. Please install it.");
    return null;
  }
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    return accounts[0]; // returns wallet address
  } catch (err) {
    console.error(err);
    return null;
  }
};