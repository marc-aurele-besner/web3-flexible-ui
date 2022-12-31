
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, GridItem, Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { useLocation } from 'wouter'

import useControls from '../states/controls'
import useAccounts from '../states/accounts'

const StyledButton = styled(Button)`
  margin: 10px;
  color: white;
`

const StyledRightButton = styled(Button)`
  position: absolute;
  right: 0px;
  margin: 10px;
  color: white;
`
// eslint-disable-next-line 
declare let window: any

const AppBar: React.FC = () => {
  const navigate = useNavigate()
  const setAction = useControls(state => state.setAction)
  const chainId = useAccounts(state => state.chainId)
  const wallet = useAccounts(state => state.wallet)
  const setWallet = useAccounts(state => state.setWallet)

  const [, setLocation] = useLocation()

  const requestAccounts = async () => {
    window.ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      console.log('accounts', accounts)
    })
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error('Error-requestAccount: ' + error);
      }
    });
  }

  useEffect(() => {
    if (wallet === "" || wallet == undefined) {
      const accounts = requestAccounts()
      if (accounts !== undefined)
        setWallet(accounts[0])
    }
  }, [wallet])

  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={0}>
      <GridItem h='3rem' bg='blue.500'>
        <StyledButton 
          variant="text" 
          onClick={() => {
            requestAccounts()
            setAction("")
            navigate('/')
          }}>
            Hardhat-Awesome-UI
        </StyledButton>
      </GridItem>
      <GridItem h='3rem' bg='blue.500'>
        <StyledButton 
          variant="text" 
          onClick={() => {
            setAction("network")
            setLocation('/network')
            navigate('/network')
          }}>
            {chainId === "" || chainId == undefined ? "Network" : 'chainId ' + chainId}
        </StyledButton>
      </GridItem>
      <GridItem h='3rem' bg='blue.500'>
        <StyledButton 
          variant="text" 
          onClick={() => {
            setAction("addressBook")
            navigate('/addressBook')
          }}>
            Address Book
        </StyledButton>
      </GridItem>
      <GridItem h='3rem' bg='blue.500'>
        <StyledRightButton 
          variant="text" 
          onClick={() => {
            setAction("wallet")
            navigate('/wallet')
          }}>
            {wallet === "" || wallet == undefined ? "Connect wallet" : "Account " + wallet}
        </StyledRightButton>
      </GridItem>
    </Grid>
  )
}

export default AppBar