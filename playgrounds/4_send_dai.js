import { ethers } from 'ethers'
import { ENV_VAR } from './constants.js'

const { infura_endpoint } = ENV_VAR
const provider = new ethers.providers.JsonRpcProvider(infura_endpoint)

const account1 = '' // sender
const account2 = '' // recipient
const privateKey1 = '' // Sender's private key
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = ''
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
  const balance = await contract.balanceOf(account1)

  console.log(`Reading from ${account1}, balance: ${balance}`)

  const contractWithWallet = contract.connect(wallet)
  const tx = await contractWithWallet.transfer(account2, balance)
  await tx.wait()

  console.log(tx)

  const balanceOfSender = await contract.balanceOf(account1)
  const balanceOfReceiver = await contract.balanceOf(account2)

  console.log(`Balance of sender: ${balanceOfSender}`)
  console.log(`Balance of receiver: ${balanceOfReceiver}`)
}

main()
