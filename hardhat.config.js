// require('@nomiclabs/hardhat-waffle')
// require('dotenv').config()

// module.exports = {
//   defaultNetwork: 'opencampus',
//   networks: {
//     opencampus: {
//       url: process.env.NEXT_APP_RPC_URL,
//       accounts: [process.env.YOUR_PRIVATE_KEY],
//     },
//   },
//   solidity: {
//     version: '0.8.17',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   mocha: {
//     timeout: 40000,
//   },
// }


require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "eduChainTestnet", // Set the default to the testnet
  networks: {
    eduChainTestnet: { // Rename to match the network name you provided
      url: process.env.NEXT_APP_RPC_URL, // Ensure this points to the testnet RPC
      accounts: [process.env.YOUR_PRIVATE_KEY], // Use testnet wallet private key
      chainId: 656476, // Match the chain ID from your input
    },
  },
  solidity: "0.8.19", // Keep the Solidity version as is or update if needed
  etherscan: {
    apiKey: {
      eduChainTestnet: "2TECNS7GKMYVECIKH9WSNJG69G5ABYGTQZ", // Replace with actual API key if needed for Blockscout
    },
    customChains: [
      {
        network: "eduChainTestnet",
        chainId: 656476,
        urls: {
          apiURL: "https://edu-chain-testnet.blockscout.com/api", // Updated block explorer API URL
          browserURL: "https://edu-chain-testnet.blockscout.com", // Updated block explorer URL
        },
      },
    ],
  },
};