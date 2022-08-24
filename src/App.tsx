import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button';

import AppBar from './components/AppBar'
import LeftBar from './components/LeftBar'
import { 
  StyledView,
  StyledActionBody
 } from './components/styles'
 import NetworkPanel from './components/NetworkPanel'
 import WalletPanel from './components/WalletPanel'
 import AddressBook from './components/AddressBook'
 import FunctionsAndEventsList from './components/FunctionsAndEventsList'
 import DeployContractsSelector from './components/DeployContractsSelector'
 import RightPanel from './components/RightPanel'
 
 import useControls from './states/controls'
 
 import contractsList from './artifacts/contractsList.json'

// eslint-disable-next-line 
declare let window: any

interface IAbiInput {
  name: string
  type: string
  indexed: boolean
}

interface IAbi {
  [key: string]: string | number | boolean | object | IAbiInput[]
}

interface IContractsAbis {
  contractName: string
  abi: IAbi[]
}

const uiTheme = createTheme();

const App: React.FC = () => {
  const viewType = useControls(state => state.viewType)
  const contractSelected = useControls(state => state.contractSelected)
  const action = useControls(state => state.action)
  const setAction = useControls(state => state.setAction)

  // eslint-disable-next-line
  const contractDetail = contractSelected !== "" ? contractsList.contractsAbis.filter((contractAbi: IContractsAbis) => contractAbi.contractName === contractSelected) : []
  // const contractAddress = ''

  return (
    <ThemeProvider theme={uiTheme}>
      <AppBar />
      <LeftBar />

      <StyledView>
        {viewType === ""  && <>
          {contractSelected !== "" && action === "" ? <>
              <FunctionsAndEventsList 
                // contractAddress={contractAddress}
                contractDetail={contractDetail}
              />
              <RightPanel 
                contractDetail={contractDetail}
              />
            </> : contractSelected !== "" ? <StyledActionBody>
              {action == "workflow" && <h2>Create a workflow</h2>}
              {action == "routine" && <h2>Create a routine</h2>}
              {action == "network" && <NetworkPanel />}
              {action == "wallet" && <WalletPanel />}
              {action == "addressBook" && <AddressBook />}
              {action == "deploy" && <DeployContractsSelector />}
              <br />
              <Button variant="contained" color="secondary" onClick={() => setAction("")}>Go back</Button>
            </StyledActionBody> : <></>}
          </>}
      </StyledView>
    </ThemeProvider>
  )
}

export default App