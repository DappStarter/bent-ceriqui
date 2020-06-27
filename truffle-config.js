require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food curve rice place concert hard light army genuine'; 
let testAccounts = [
"0x137d325cb3b8838e97cdbd0b3a8d411195607959197b23226821a4effd4891f0",
"0xdc71e0a2cc610cabeb34d70674e933240dcd7cebfff3b96b6e63393d92884acd",
"0x8533432a3729fd8da7935ea29c00d9347425a82579cc032616903bc634b03b67",
"0xcdee08668c7bd3a4352cdf6bb20883ee85bdc34f1574235ba8438372734c99cf",
"0x47d4215fef222f27ded7648ff4be7276997648f2db704ad08061d25d95050793",
"0x8998faa5366741e6f32144959636c4034fc5bd644b4fd5c07827c1d77f52771c",
"0x0eea34bcd46cad6353195ecf1bc0c02b80ecf648018dc8328649d62801a13ee2",
"0xbe323a5c5c19a67d19ca97f13f41bdf0d919dec9028a60a5932ac534a4bfd1e1",
"0x5ab6d1c2065b31cb13e3017b11bb50080bff0fbcb9fc0e87d63aff142a314f5f",
"0x8242a2047e1e7abc96f8c5269063fddb3a083296d0042e32fca3c79310b5f6ac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
