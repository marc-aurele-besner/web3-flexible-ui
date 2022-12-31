import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Page from './components/Page'
import NetworkPanel from './components/NetworkPanel'
import WalletPanel from './components/WalletPanel'
import AddressBook from './components/AddressBook'

const Home = lazy(() => import('./views/Home'))
const Contract = lazy(() => import('./views/Contract'))
const NotFound = lazy(() => import('./views/NotFound'))

// eslint-disable-next-line 
declare let window: any

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Page>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />
            {/* workflow */}
            {/* <Route path="/workflow" element={<h2>Create a workflow</h2>} />
            <Route path="/workflow/:workflowId" element={<Home />} /> */}
            {/* routine */}
            {/* <Route path="/routine" element={<h2>Create a routine</h2>} />
            <Route path="/routine/:routineId" element={<Home />} /> */}
            {/* network */}
            <Route path="/network" element={<NetworkPanel />} />
            {/* <Route path="/network/:networkId" element={<Home />} /> */}
            {/* wallet */}
            <Route path="/wallet" element={<WalletPanel />} />
            {/* <Route path="/wallet/:walletId" element={<Home />} /> */}
            {/* addressBook */}
            <Route path="/addressBook" element={<AddressBook />} />
            {/* <Route path="/addressBook/:addressBookId" element={<Home />} /> */}
            {/* deploy */}
            {/* <Route path="/deploy" element={<StyledActionBody><DeployContractsSelector /></StyledActionBody>} />
            <Route path="/deploy/:deployId" element={<Home />} /> */}

            <Route path="/contract/:contractName" element={<Contract />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Page>
      </BrowserRouter>
    </>
  )
}

export default App