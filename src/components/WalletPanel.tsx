
import React from 'react'
import { Text, Button } from '@chakra-ui/react'
import { getConnected, handleAccountsChanged } from '../hooks/connectWallet'
import disconnectWallet from '../hooks/disconnectWallet'
import createRandomWallet from '../hooks/createWallet'
import useAccounts from '../states/accounts'

const WalletPanel: React.FC = () => {
  const wallet = useAccounts(state => state.wallet)
  const walletType = useAccounts(state => state.walletType)
  // const randomWalletDetails = useAccounts(state => state.randomWalletDetails)
  const setChainId = useAccounts(state => state.setChainId)
  const setWallet = useAccounts(state => state.setWallet)
  const setWalletType = useAccounts(state => state.setWalletType)
  const setRandomWalletDetails = useAccounts(state => state.setRandomWalletDetails)

  const handleConnectWallet = async (setChainId) => {
    await getConnected()
    const { accounts, chainId } = await handleAccountsChanged()
    setWallet(accounts)
    setChainId(chainId)
    setWalletType('Metamask')
  }

  const handleCreateRandomWallet = async () => {
    const randomWallet = await createRandomWallet()
    setWallet(randomWallet.address)
    setRandomWalletDetails(randomWallet)
    setWalletType('Random')
  }

  const handleDisconnectWallet = async () => {
    await disconnectWallet()
    setWallet(null)
    setWalletType(null)
    setChainId(null)
  }

  return (
    <>
      <Text fontSize='2xl'>Connect your wallet</Text>
        <br />
        {wallet !== '' && wallet !== undefined && <h4>Current wallet: {walletType} {wallet}</h4>}
        <Button variant="outline" colorScheme="blue" onClick={async () => {
          await handleConnectWallet(setChainId)
        }}>{walletType !== 'Metamask' ? "Connect Metamask wallet" : "Account " + wallet}</Button>
        <br /><br />
        <Button variant="outline" colorScheme="blue" onClick={async () => {
          await handleCreateRandomWallet()
        }}>{walletType !== 'Random' ? "Create Random wallet" : "Account " + wallet}</Button>
        <br /><br />
        {wallet && (
          <Button variant="outline" colorScheme="blue" onClick={async () => {
            await handleDisconnectWallet()
          }}>Disconnect wallet</Button>
        )}
        <br />
    </>
  )
}

export default WalletPanel