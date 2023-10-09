const { generateWallet, getWalletFromPrivateKey, getPublicAddress } = require('./utils/wallet');

const newWallet = generateWallet();

console.log('New Wallet:');
console.log('Private Key:', newWallet.getPrivateKeyString());
console.log('Public Address:', getPublicAddress(newWallet));

// Uncomment below lines to get wallet from a private key
// const existingWallet = getWalletFromPrivateKey('YOUR_PRIVATE_KEY_HERE');
// console.log('Existing Wallet Public Address:', getPublicAddress(existingWallet));
