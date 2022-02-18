# Full stack NFT marketplace built with Ropsten, Solidity, IPFS, & Next.js

Download this repository.(This project is final source code. Please use it as a source reference.)

1. Project setup
 To get started, we'll create a new Next.js app. To do so, open your terminal. Create or change into a new empty directory and run the following command:
  $ npx create-next-app digital-marketplace
 Next, change into the new directory and install the dependencies:
  $ cd digital-marketplace
  $ npm install ethers hardhat @nomiclabs/hardhat-waffle \ ethereum-waffle chai @nomiclabs/hardhat-ethers \ web3modal @openzeppelin/contracts ipfs-http-client@50.1.2 \ axios
  
2. Setting up Tailwind CSS
 We'll be using Tailwind CSS for styling, we we will set that up in this step.
 Tailwind is a utility-first CSS framework that makes it easy to add styling and create good looking websites without a lot of work.
 Next, install the Tailwind dependencies:
  $ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
 Next, we will create the configuration files needed for Tailwind to work with Next.js (tailwind.config.js and postcss.config.js) by running the following command:
  $ npx tailwindcss init -p
 Next, configure your template content paths in tailwind.config.js:
     /* tailwind.config.js */
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
 Finally, delete the code in styles/globals.css and update it with the following:
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
 
3. Configuring Hardhat
 Next, initialize a new Hardhat development environment from the root of your project:
  $ npx hardhat
   ? What do you want to do? Create a sample project
   ? Hardhat project root: <Choose default path>
 Now you should see the following files and folders created for you in your root directory:
  hardhat.config.js - The entirety of your Hardhat setup (i.e. your config, plugins, and custom tasks) is contained in this file.
  scripts - A folder containing a script named sample-script.js that will deploy your smart contract when executed
  test - A folder containing an example testing script
  contracts - A folder holding an example Solidity smart contract
 Next, update the configuration at hardhat.config.js with the following:
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
                                                                                     
 In this configuration, we've configured the local Hardhat development environment as well as the Ropsten testnet.
 Next, create a file named .secret at the root of your project. For now, we will leave this file empty. Later on, we will populate it with a test wallet private key that will hold some Matic tokens that we will get from the Matic testnet faucet.

4.Smart Contracts
 Next, we'll create our smart contracts! We'll start with the NFT contract for the unique digital assets.
 Create a new file in the contracts directory named NFT.sol. Here, add the following code:
            // contracts/NFT.sol
            // contracts/Market.sol
            
            
            
  
