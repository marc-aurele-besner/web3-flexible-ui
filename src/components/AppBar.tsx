
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import MuAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLocation } from 'wouter'

import ContractsSelector from './ContractsSelector'
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
  const [appBarButtonClicked, setAppBarButtonClicked] = useState('');
  const setAction = useControls(state => state.setAction)
  const leftBarOpen = useControls(state => state.leftBarOpen)
  const setLeftBarOpen = useControls(state => state.setLeftBarOpen)
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
    <>
      <MuAppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon onClick={() => setLeftBarOpen(!leftBarOpen)} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <StyledButton 
              variant="text" 
              onClick={() => {
                requestAccounts()
                setAppBarButtonClicked('')
                setAction("")
                navigate('/')
              }}>
                Hardhat-Awesome-UI
            </StyledButton>
            <StyledButton 
              variant="text" 
              onClick={() => {
                setAppBarButtonClicked('network')
                setAction("network")
                setLocation('/network')
                navigate('/network')
              }}>
                {chainId === "" || chainId == undefined ? "Network" : 'chainId ' + chainId}
            </StyledButton>
            <StyledButton 
              variant="text" 
              onClick={() => {
                setAppBarButtonClicked('addressBook')
                setAction("addressBook")
                navigate('/addressBook')
              }}>
                Address Book
            </StyledButton>
            <StyledRightButton 
              variant="text" 
              onClick={() => {
                setAppBarButtonClicked('wallet')
                setAction("wallet")
                navigate('/wallet')
              }}>
                {wallet === "" || wallet == undefined ? "Connect wallet" : "Account " + wallet}
            </StyledRightButton>
          </Typography>
        </Toolbar>
      </MuAppBar>
      {appBarButtonClicked === 'selectContracts' && <ContractsSelector />}
    </>
  )
}

export default AppBar