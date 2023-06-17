import { ethers } from 'ethers'
import { ENV_VAR } from './constants.js'

const { infura_endpoint } = ENV_VAR
const provider = new ethers.providers.JsonRpcProvider(infura_endpoint)

const main = async () => {
  const block = await provider.getBlockNumber()

  console.log(`\nBlock Number: ${block}\n`)

  const blockInfo = await provider.getBlock(block)

  console.log(blockInfo)

  const { transactions } = await provider.getBlockWithTransactions(block)

  console.log(`\nLogging first transaction in block:\n`)
  console.log(transactions[0])
}

main()
