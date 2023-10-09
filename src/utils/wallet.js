const Wallet = require('ethereumjs-wallet');

// Generate a new Ethereum wallet
function generateWallet() {
  const wallet = Wallet.generate();
  return wallet;
}

// Get the wallet from a private key
function getWalletFromPrivateKey(privateKey) {
  const wallet = Wallet.fromPrivateKey(Buffer.from(privateKey, 'hex'));
  return wallet;
}

// Get public address from the wallet
function getPublicAddress(wallet) {
  return '0x' + wallet.getAddress().toString('hex');
}

module.exports = {
  generateWallet,
  getWalletFromPrivateKey,
  getPublicAddress
};
