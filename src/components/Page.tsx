import React from 'react';

import AppBar from './AppBar'
import LeftBar from './LeftBar'
import { 
  StyledView,
  StyledActionBody
} from './styles'
import NetworkPanel from './NetworkPanel'
import WalletPanel from './WalletPanel'
import AddressBook from './AddressBook'
import FunctionsAndEventsList from './FunctionsAndEventsList'
import DeployContractsSelector from './DeployContractsSelector'
import RightPanel from './RightPanel'
 

import Home from '../views/Home'

export const Page: React.VFC = () => {

  return (
    <article>
      <AppBar />
      <LeftBar />

      <StyledView>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={(
              <StyledActionBody>
                <Home />
              </StyledActionBody>
            )} />

            <Route path="/home" element={<Home />} />

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
         
            <Route path="/workflow" element={<h2>Create a workflow</h2>} />
            <Route path="/workflow/:workflowId" element={<Home />} />
            
            <Route path="/routine" element={<h2>Create a routine</h2>} />
            <Route path="/routine/:routineId" element={<Home />} />
          
            <Route path="/network" element={<StyledActionBody><NetworkPanel /></StyledActionBody>} />
            <Route path="/network/:networkId" element={<Home />} />
         
            <Route path="/wallet" element={<StyledActionBody><WalletPanel /></StyledActionBody>} />
            <Route path="/wallet/:walletId" element={<Home />} />
         
            <Route path="/addressBook" element={<StyledActionBody><AddressBook /></StyledActionBody>} />
            <Route path="/addressBook/:addressBookId" element={<Home />} />
       
            <Route path="/deploy" element={<StyledActionBody><DeployContractsSelector /></StyledActionBody>} />
            <Route path="/deploy/:deployId" element={<Home />} />

         
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter> */}
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
      </StyledView>
    </article>
  );
};
