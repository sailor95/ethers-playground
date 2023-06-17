import dotenv from 'dotenv'

dotenv.config()

export const ENV_VAR = {
  infura_endpoint: process.env.ETH_MAINNET_ENDPOINT,
  my_wallet: process.env.MY_ADDRESS
}
