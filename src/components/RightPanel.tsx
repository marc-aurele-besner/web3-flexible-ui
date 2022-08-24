
import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ethers } from 'ethers';
import { 
    StyledBody
 } from '../components/styles'
import { callFunction } from '../hooks/callFunction'
import InputsForm from './InputsForm'
import { buildRawSignature } from '../utils/buildFunctionSignature'
import useAccounts from '../states/accounts'
import useControls from '../states/controls'

// eslint-disable-next-line 
declare let window: any

interface IRightPanel {
  // eslint-disable-next-line
  contractDetail: any[]
}

const StyledButton = styled(Button)`
  margin: 10px;
`

const RightPanel: React.FC<IRightPanel> = ({
  contractDetail
}) => {
  const walletType = useAccounts(state => state.walletType)
  const randomProvider = useAccounts(state => state.randomProvider)
  const functionSelected = useControls(state => state.functionSelected)
  const setFunctionSelected = useControls(state => state.setFunctionSelected)
  const functionInputNeeded = useControls(state => state.functionInputNeeded)
  const contractAddressSelected = useControls(state => state.contractAddressSelected)
  const setAction = useControls(state => state.setAction)
  const callArguments = useControls(state => state.callArguments)
  const setCallArguments = useControls(state => state.setCallArguments)

  // eslint-disable-next-line
  const contractDetailFunctions = contractDetail.length > 0 ? contractDetail[0].abi.length >0 && contractDetail[0].abi.filter((abiRow: any) => abiRow.type == "function") : []
  // eslint-disable-next-line
  const specificFunctionDetail = contractDetailFunctions.length > 0 ? contractDetailFunctions.filter((functionAbi: any) => functionAbi.name === functionSelected) : []

  const provider = walletType == "Random" ? randomProvider : new ethers.providers.Web3Provider(window.ethereum, 'any')

  return (
    <StyledBody>
      {contractDetail !== undefined && (
        <>
          {specificFunctionDetail.length > 0 && <StyledButton onClick={() => {
              callFunction(
                provider,
                specificFunctionDetail,
                buildRawSignature(specificFunctionDetail[0].name, specificFunctionDetail[0].inputs), 
                [],
                contractAddressSelected, 
                contractDetail[0].abi
              )
              setFunctionSelected(specificFunctionDetail[0].name)
            }}>Call again</StyledButton>}
          <StyledButton variant="contained" onClick={() => setAction("workflow")}>Create a workflow</StyledButton>
          <StyledButton variant="contained" onClick={() => setAction("routine")}>Create a routine</StyledButton>
        </>
      )}
      {functionSelected !== "" && (
        <>
          <h2>{functionSelected}</h2>
          Contract address: {contractAddressSelected}
          {functionInputNeeded && (
            <InputsForm 
              contractAddress={contractAddressSelected}
              contractDetail={contractDetail}
              functionSelected={functionSelected}
              setFunctionSelected={setFunctionSelected}
              callArguments={callArguments}
              setCallArguments={setCallArguments}
            />
          )}
        </> 
      )}
    </StyledBody>
  )
}

export default RightPanel