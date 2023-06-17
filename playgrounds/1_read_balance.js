
require("dotenv").config()
const { ethers } = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(process.env.ETH_MAINNET_ENDPOINT)

const main = async () => {
  const balance = await provider.getBalance(process.env.MY_ADDRESS)
  const formattedBalance = ethers.utils.formatEther(balance)
  console.log(`Balance of\n${process.env.MY_ADDRESS}:\n${formattedBalance} ETH`)
}

main()
