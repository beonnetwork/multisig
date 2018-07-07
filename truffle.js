require("dotenv").config();
const LedgerWalletProvider = require("truffle-ledger-provider");

module.exports = {
  networks: {
    mainnet: {
      provider: new LedgerWalletProvider({
          path: "44'/60'/0'/0", // ledger default derivation path
          askConfirm: false,
          accountsLength: 1,
          networkId: 1, // ropsten testnet
          accountsOffset: 0 // we use the first address
        },
        `https://mainnet.infura.io/${process.env.INFURA_APIKEY}`
      ),
      network_id: 3,
      gas: 4700000,
    },
    ropsten: {
      provider: new LedgerWalletProvider({
          path: "44'/60'/0'/0", // ledger default derivation path
          askConfirm: false,
          accountsLength: 1,
          networkId: 3, // ropsten testnet
          accountsOffset: 0 // we use the first address
        },
        `https://ropsten.infura.io/${process.env.INFURA_APIKEY}`
      ),
      network_id: 3,
      gas: 4700000,
    },
    development: {
      host: "localhost",
      port: 7545,
      network_id: 6777,
      gas: 8000000,
    },
  }
};