import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import { ethers } from 'ethers';
import { 
    StyledSelector
 } from '../components/styles'
// import { callFunction } from '../hooks/callFunction'
import { buildSignature } from '../utils/buildFunctionSignature' // , buildRawSignature
// import useAccounts from '../states/accounts'
import useControls from '../states/controls'
import useAddressBook, { IAbisMatchAddressBook } from '../states/addressBook'

// eslint-disable-next-line 
declare let window: any

interface IFunctionsAndEventsList {
  // eslint-disable-next-line 
  contractDetail: any[]
}

const StyledButton = styled(Button)`
    margin: 10px;
`

// const handleCallFunction = async (provider, contractAddress, abiRow, contractAbi) => {
//     // const callReturn = await callFunction(
//     //   provider,
//     //   abiRow,
//     //   buildRawSignature(abiRow.name, abiRow.inputs), 
//     //   [],
//     //   contractAddress, 
//     //   contractAbi.abi
//     // )
//     // if (!callReturn)
//     //     setFunctionInputNeeded(true)
//     // else
//     //     setFunctionInputNeeded(true)
// }

const FunctionsAndEventsList: React.FC<IFunctionsAndEventsList> = ({
    contractDetail
}) => {
  // const walletType = useAccounts(state => state.walletType)
  // const randomProvider = useAccounts(state => state.randomProvider)
  const typeSelected = useControls(state => state.typeSelected)
  const setTypeSelected = useControls(state => state.setTypeSelected)
  const setFunctionSelected = useControls(state => state.setFunctionSelected)
  const setFunctionInputNeeded = useControls(state => state.setFunctionInputNeeded)
  const setContractAddressSelected = useControls(state => state.setContractAddressSelected)
  const abisMatchAddressBook = useAddressBook(state => state.abisMatchAddressBook)

  // eslint-disable-next-line 
  const contractDetailEvents = contractDetail.length > 0 ? contractDetail[0].abi.length >0 && contractDetail[0].abi.filter((abiRow: any) => abiRow.type == "event") : []
  // eslint-disable-next-line 
  const contractDetailFunctions = contractDetail.length > 0 ? contractDetail[0].abi.length >0 && contractDetail[0].abi.filter((abiRow: any) => abiRow.type == "function") : []

  // const provider = walletType == "Random" ? randomProvider : new ethers.providers.Web3Provider(window.ethereum, 'any')

  return (
    <StyledSelector>
      {/* eslint-disable-next-line */}
      {contractDetail !== undefined && contractDetail.map((contractAbi: any, i: number) => {
        return (
          <div key={`${contractAbi.contractName}-${i}`}>
            <h1>{contractAbi.contractName}</h1>
            <StyledButton variant="contained" onClick={() => setTypeSelected("function")}>Function</StyledButton>
            <StyledButton variant="contained" onClick={() => setTypeSelected("events")}>Events</StyledButton>
            <StyledButton variant="contained" onClick={() => setTypeSelected("address")}>Contract address</StyledButton>
            {typeSelected == "events" && (
              <>
                {contractDetailEvents !== undefined && contractDetailEvents.length > 0 && <h2>Events:</h2>}
                {/* eslint-disable-next-line */}
                {contractDetailEvents !== undefined && contractDetailEvents.length > 0 && contractDetailEvents.map((abiRow: any) => {
                  return (
                    <div key={`events-${abiRow.name}`}>
                      <h3>{abiRow.name}</h3>
                      <p>
                        {abiRow.name}
                        {buildSignature(abiRow.name, abiRow.inputs)}
                      </p>
                    </div>
                  )}
                )}
              </>
            )}
            {typeSelected == "function" && (
              <>
                {contractDetailFunctions !== undefined && contractDetailFunctions.length > 0 && <h2>Function:</h2>}
                {/* eslint-disable-next-line */}
                {contractDetailFunctions !== undefined && contractDetailFunctions.length > 0 && contractDetailFunctions.filter((abiRow: any) => abiRow.inputs === undefined || abiRow.inputs.length == 0).map((abiRow: any) => {
                    return (
                      <div key={`function-${abiRow.name}-${i}`}>
                        <p>
                          <b>{buildSignature(abiRow.name, abiRow.inputs)}</b>
                          <StyledButton onClick={async () => {
                              setFunctionSelected(abiRow.name)
                              if (abiRow.inputs !== undefined && abiRow.inputs.length > 0) {
                                setFunctionInputNeeded(true)
                              }
                              // await handleCallFunction(provider, contractAddress, abiRow, contractAbi)
                              }}>{abiRow.inputs.length > 0 ? "Build call for" : "Call"} {abiRow.name}</StyledButton>
                        </p>
                      </div>
                    )
                    })}
                {/* eslint-disable-next-line */}
                {contractDetailFunctions !== undefined && contractDetailFunctions.length > 0 && contractDetailFunctions.filter((abiRow: any) => abiRow.inputs !== undefined && abiRow.inputs.length > 0).map((abiRow: any) => {
                return (
                  <div key={`${abiRow.name}-${i}`}>
                    <p>
                      <b>{buildSignature(abiRow.name, abiRow.inputs)}</b>
                      <StyledButton onClick={async () => {
                          setFunctionSelected(abiRow.name)
                          if (abiRow.inputs !== undefined && abiRow.inputs.length > 0) {
                            setFunctionInputNeeded(true)
                          }
                          // await handleCallFunction(provider, contractAddress, abiRow, contractAbi)
                          }}>{abiRow.inputs.length > 0 ? "Build call for" : "Call"} {abiRow.name}</StyledButton>
                    </p>
                  </div>
                )
                })}
              </>
            )}
            {typeSelected == "address" && (
              <>
                {abisMatchAddressBook !== undefined && abisMatchAddressBook.length > 0 && <h2>Contract Address:</h2>}
                {abisMatchAddressBook !== undefined && abisMatchAddressBook.length > 0 && abisMatchAddressBook.map((abisMatchAddress: IAbisMatchAddressBook) => {
                  return (
                    <div
                      key={`${abisMatchAddress.contractName}-${abisMatchAddress.contractName}`}
                      onClick={() => setContractAddressSelected(abisMatchAddress.contractAddress)}>
                      <h3>{abisMatchAddress.contractName}</h3>
                      <p>
                        {abisMatchAddress.contractName}: {abisMatchAddress.contractAddress}
                      </p>
                    </div>
                  )})}
              </>
            )}
          </div>
        )})}
    </StyledSelector>
  )
}

export default FunctionsAndEventsList