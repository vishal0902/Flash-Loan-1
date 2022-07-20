import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({path:".env"});

/** @type import('hardhat/config').HardhatUserConfig */
export const solidity = "0.8.10";
export const networks = {
  hardhat: {
    forking: {
      url: process.env.ALCHEMY_API_KEY_URL,
    },
  },
};
