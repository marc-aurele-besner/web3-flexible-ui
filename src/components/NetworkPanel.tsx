import React from 'react'
import { Text, Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { ethers } from 'ethers';

import { switchChain, handleAccountsChanged } from '../hooks/connectWallet'
import useAccounts from '../states/accounts'
import chains, { chainsGroup } from '../constants/chains'

const StyledButton = styled(Button)`
    margin: 10px;
`

const handleSwitchChain = async (walletType: string, chain: number, setChainId, setWallet, setRandomProvider) => {
    switch(walletType) {
        case 'Metamask': {
            await switchChain(chain)
            const {
            accounts,
            chainId
            } = await handleAccountsChanged()
            setChainId(chainId)
            setWallet(accounts)
            break
        }
        case 'Random': {
            const rpcUrl = chains.find(c => c.chainId === chain).rpcUrls[0]
            const provider = await new ethers.providers.JsonRpcProvider(rpcUrl)
            setRandomProvider(provider)
            setChainId(chain)
            break
        }
        default:
            break
    }
  }

const NetworkPanel: React.FC = () => {
    const walletType = useAccounts(state => state.walletType)
    const chainId = useAccounts(state => state.chainId)
    const setChainId = useAccounts(state => state.setChainId)
    const setWallet = useAccounts(state => state.setWallet)
    const setRandomProvider = useAccounts(state => state.setRandomProvider)

    return (
        <>
            <Text fontSize='2xl'>Change network</Text>
            {chainId !== '' && chainId !== undefined && <Text as='b'>Current chainId: {chainId}</Text>}
            {chainsGroup.map((group, index) => (
                <div key={index}>
                <h3>{group.name}</h3>
                    {chains.filter((chain) => chain.chainGroup === group.name).map(chain => (
                        <StyledButton 
                            variant={parseInt(chainId, 10) === chain.chainId ? "solid" : "outline"}
                            colorScheme="blue"
                            key={chain.chainId}
                            onClick={async () => {
                            await handleSwitchChain(walletType, chain.chainId, setChainId, setWallet, setRandomProvider)
                            }}>
                    {chain.chainName}
                    </StyledButton>
                    ))}
                </div>
            ))}
        </>
    )
}

export default NetworkPanel