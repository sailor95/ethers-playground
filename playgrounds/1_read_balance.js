import { ethers } from 'ethers'
import { ENV_VAR } from './constants.js'

const { infura_endpoint, my_wallet } = ENV_VAR
const provider = new ethers.providers.JsonRpcProvider(infura_endpoint)

const main = async () => {
  const balance = await provider.getBalance(my_wallet)
  const formattedBalance = ethers.utils.formatEther(balance)
  console.log(`Balance of\n${my_wallet}:\n${formattedBalance} ETH`)
}

main()
