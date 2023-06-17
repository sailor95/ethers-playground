import { ethers } from 'ethers'
import { ENV_VAR } from './constants.js'

const { infura_endpoint } = ENV_VAR
const provider = new ethers.providers.JsonRpcProvider(infura_endpoint)

const account1 = '' // sender
const account2 = '' // recipient
const privateKey1 = '' // Sender's private key
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
  // Show account1's balance before
  const senderBalanceBefore = await provider.getBalance(account1)
  // Show account2's balance before
  const receiverBalanceBefore = await provider.getBalance(account2)
  console.log(`Sender balance: ${senderBalanceBefore}, Receiver balance: ${receiverBalanceBefore}`)

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.025")
  })

  // Wait for transaction to be mined
  await tx.wait()
  console.log(tx)

  // Show account1's balance after
  const senderBalanceAfter = await provider.getBalance(account1)
  // Show account2's balance after
  const receiverBalanceAfter = await provider.getBalance(account2)
  console.log(`Sender balance: ${senderBalanceAfter}, Receiver balance: ${receiverBalanceAfter}`)
}

main()
