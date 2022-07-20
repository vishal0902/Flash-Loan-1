require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config({path:".env"});

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_API_KEY_URL,
      },
    },
  },
};
