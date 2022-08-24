// eslint-disable-next-line 
declare let window: any

const disconnectWallet = async () => {
  window.ethereum.on('disconnect', () => {
    console.log('MetaMask disconnected')
  })
}

export default disconnectWallet