require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = ""; //private key of ropsten network address

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat:{
      chainId:1337
    },
    ropsten: {
      url: "", //https://ropsten.infura.io/v3/... infura project link <= ENDPOINTS = ROPSTEN
      accounts: [privateKey]
    }
  }
};

