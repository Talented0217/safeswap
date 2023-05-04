const ethers = require("ethers")


export const connectToWallet = async () => {
    let provider;
    if (window.ethereum) {
        provider = new ethers.BrowserProvider(window.ethereum);
        let signer = await provider.getSigner();
        let address = await signer.getAddress();
        return address;

    } else {
        return null;
    }
}

export const getAccountBalance = async (address) => {
    return 0;
}
