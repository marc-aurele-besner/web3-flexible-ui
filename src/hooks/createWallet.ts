import { ethers } from 'ethers'

// eslint-disable-next-line 
declare let window: any

const createRandomWallet = async () => {
  const randomWallet = await ethers.Wallet.createRandom()
  return randomWallet
}

export default createRandomWallet