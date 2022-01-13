require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name regret remind proud install hat army giant'; 
let testAccounts = [
"0x8217c9b774606f653874653e82f86336018fdc34b85738c52e456901efadfd8d",
"0x9ba54c7623d713cf1edc83a120e91ab1648f0678c2334bb7d97aab2d93d1fe2c",
"0x7fd3a350265d0a4cfcd0484fc83c6fcec3bcb12903a6ef04a8b3e1567695ab1a",
"0x4fdac4c2313285acfe7863104522a69782381e1b2ff45cd69ebe46820d8b09f4",
"0x089e278cb7d82d3b384e9810072c2b96cb46ecda462aaaacd5cd5546631141ad",
"0x918e2b4b111355ab00dd64e56464c455b59bb543e350417ea9d6c7df542d5ec8",
"0x6190fb51c01e280cb0e78039da1919d014b38236bf5fa604bb9572d27b8261b4",
"0x1944fa45fa39d6018971bfbd1a8792bb1c85f6c294164283d6094eaa27fc0ff9",
"0x32ce0184f9e2ccf5c3600ee764ca36f43da5823b86a98e29c0bcf0be6e6ff828",
"0xfddc1926ad8d052082b7a896ae517f6d80451e633d9d8fdec3e87081f6b688bc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

