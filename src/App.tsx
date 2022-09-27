import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
// import Button from '@mui/material/Button';

import Page from './components/Page'
import { StyledActionBody } from './components/styles'
import NetworkPanel from './components/NetworkPanel'
import WalletPanel from './components/WalletPanel'
import AddressBook from './components/AddressBook'
import FunctionsAndEventsList from './components/FunctionsAndEventsList'
import DeployContractsSelector from './components/DeployContractsSelector'
import RightPanel from './components/RightPanel'
 
import useControls from './states/controls'
 
import contractsList from './artifacts/contractsList.json'

import Home from './views/Home'
// const GalleryList = lazy(() => import('./views/GalleryList'))

const NotFound = lazy(() => import('./views/NotFound'))

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
  // const viewType = useControls(state => state.viewType)
  const contractSelected = useControls(state => state.contractSelected)
  // const action = useControls(state => state.action)
  // const setAction = useControls(state => state.setAction)

  // eslint-disable-next-line
  const contractDetail = contractSelected !== "" ? contractsList.contractsAbis.filter((contractAbi: IContractsAbis) => contractAbi.contractName === contractSelected) : []
  // const contractAddress = ''

  return (
    <ThemeProvider theme={uiTheme}>
      <Page>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={(
              <StyledActionBody>
                <Home />
              </StyledActionBody>
            )} />

            <Route path="/home" element={<Home />} />

            {/* call */}
            <Route path="/call" element={(
              <>
                <FunctionsAndEventsList 
                  contractDetail={contractDetail}
                />
                <RightPanel 
                  contractDetail={contractDetail}
                />
              </>
            )} />
            <Route path="/call/:call" element={<Home />} />
            {/* workflow */}
            <Route path="/workflow" element={<h2>Create a workflow</h2>} />
            <Route path="/workflow/:workflowId" element={<Home />} />
            {/* routine */}
            <Route path="/routine" element={<h2>Create a routine</h2>} />
            <Route path="/routine/:routineId" element={<Home />} />
            {/* network */}
            <Route path="/network" element={<StyledActionBody><NetworkPanel /></StyledActionBody>} />
            <Route path="/network/:networkId" element={<Home />} />
            {/* wallet */}
            <Route path="/wallet" element={<StyledActionBody><WalletPanel /></StyledActionBody>} />
            <Route path="/wallet/:walletId" element={<Home />} />
            {/* addressBook */}
            <Route path="/addressBook" element={<StyledActionBody><AddressBook /></StyledActionBody>} />
            <Route path="/addressBook/:addressBookId" element={<Home />} />
            {/* deploy */}
            <Route path="/deploy" element={<StyledActionBody><DeployContractsSelector /></StyledActionBody>} />
            <Route path="/deploy/:deployId" element={<Home />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* viewType === ""  && <>
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
            </> */}
      </Page>
    </ThemeProvider>
  )
}

export default App