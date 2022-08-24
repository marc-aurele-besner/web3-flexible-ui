
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import MuAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

const AppBar: React.FC = () => {
  const [appBarButtonClicked, setAppBarButtonClicked] = useState('');
  const setAction = useControls(state => state.setAction)
  const leftBarOpen = useControls(state => state.leftBarOpen)
  const setLeftBarOpen = useControls(state => state.setLeftBarOpen)
  const contractSelected = useControls(state => state.contractSelected)
  const setContractSelected = useControls(state => state.setContractSelected)
  const chainId = useAccounts(state => state.chainId)
  const wallet = useAccounts(state => state.wallet)

  return (
    <>
      <MuAppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon onClick={() => setLeftBarOpen(!leftBarOpen)} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Hardhat-Awesome-UI

            <StyledButton 
              variant="text" 
              onClick={() => {
                setAppBarButtonClicked('selectContracts')
                setContractSelected('')
              }}>
                {contractSelected !== '' ? 'Contract: ' + contractSelected : 'Select a contract'}
            </StyledButton>
            <StyledButton 
              variant="text" 
              onClick={() => {
                setAppBarButtonClicked('network')
                setAction("network")
              }}>
                {chainId === "" || chainId == undefined ? "Network" : 'chainId ' + chainId}
            </StyledButton>
            <StyledButton 
              variant="text" 
              onClick={() => {
                setAppBarButtonClicked('addressBook')
                setAction("addressBook")
              }}>
                Address Book
            </StyledButton>
            <StyledRightButton 
              variant="text" 
              onClick={() => {
                setAppBarButtonClicked('wallet')
                setAction("wallet")
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