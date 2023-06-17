import { ethers } from 'ethers'
import { ENV_VAR } from './constants.js'

const { infura_endpoint } = ENV_VAR
const provider = new ethers.providers.JsonRpcProvider(infura_endpoint)

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
]

const DAI_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const contract = new ethers.Contract(DAI_ADDRESS, ERC20_ABI, provider)

const main = async () => {
  const name = await contract.name()
  const symbol = await contract.symbol()
  const totalSupply = await contract.totalSupply()

  console.log(`Reading from ${DAI_ADDRESS}`)
  console.log(`Name: ${name}`)
  console.log(`Symbol: ${symbol}`)
  console.log(`Total supply: ${totalSupply}`)

  const balance = await contract.balanceOf('0x6c6Bc977E13Df9b0de53b251522280BB72383700')
  console.log(`Balance: ${ethers.utils.formatEther(balance)}`)
}

main()
