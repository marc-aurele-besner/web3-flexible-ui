import React from 'react' // , { useEffect }
import { useNavigate } from 'react-router-dom'
import { Text, Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { useInputs, useTransactions } from 'web3-chakra-uikit'

import contractsList from '../artifacts/contractsList.json'
import useAccounts from '../states/accounts'
import useControls from '../states/controls'
// import useAddressBook from '../states/addressBook'
// import chains from '../constants/chains'
import contractsDeployed from '../artifacts/contractsAddressDeployed.json'
import contractsDeployedHistory from '../artifacts/contractsAddressDeployedHistory.json'

export const StyledAddressBook = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow:scroll;
`

export const StyledAddress = styled.p`
font-size: 0.8rem;
`

interface IAddressDetails {
  name: string
  address: string
  network: string
  deployer: string
  deploymentDate: string
  blockHash?: string
  blockHah?: string
  blockNumber?: number
  chainId?
  tag?: string
  // eslint-disable-next-line 
  extra?: any
}

const AddressBook: React.FC = () => {
  const navigate = useNavigate()
  const wallet = useAccounts(state => state.wallet)
  // const chainId = useAccounts(state => state.chainId)
  const setAction = useControls(state => state.setAction)

  // const addressBook = useAddressBook(state => state.addressBook)
  // const abisMatchAddressBook = useAddressBook(state => state.abisMatchAddressBook)
  // const setAddressBook = useAddressBook(state => state.setAddressBook)
  // const setAbisMatchAddressBook = useAddressBook(state => state.setAbisMatchAddressBook)

  const setQueryAbi = useInputs(state => state.setQueryAbi)
  const setSelectedContract = useTransactions((state) => state.setSelectedContract)

  // useEffect(() => {
  //   if (addressBook === undefined && contractsList.contractsNames.length > 0) {
  //     setAddressBook(contractsDeployed)
  //     const newAbisMatchAddressBook = []
  //     contractsList.contractsNames.map(contractName => {
  //       contractsDeployed.filter(contract => contract.name === contractName).map(contract => {
  //         newAbisMatchAddressBook.push({
  //           contractName: contract.name,
  //           chainId: chains.find((chain) => chain.hardhatChainName == contract.network).chainId,
  //           contractAddress: contract.address
  //         })
  //       })
  //     })
  //     setAbisMatchAddressBook(newAbisMatchAddressBook)
  //   }
  // }, [chainId, addressBook, contractsList, contractsDeployed, abisMatchAddressBook, setAbisMatchAddressBook])

  return (
    <StyledAddressBook>
      <Text fontSize='2xl'>Address Book</Text>
      {wallet !== '' && wallet !== undefined && <h4>Current wallet: {wallet}</h4>}
      {contractsDeployed !== undefined && contractsDeployed.length > 0 && <Text as='b'>Contracts deployed (from contractsAddressDeployed.json):</Text>}
      {contractsDeployed !== undefined && contractsDeployed.length > 0 && contractsDeployed.map((contractDeployed: IAddressDetails, i: number) => {
        return (
          <div key={`contractsDeployed-${contractDeployed.name}-${i}`}>
            <Button
              variant="outline"
              colorScheme="blue"
              onClick={() => {
                setAction("")
                navigate(`/contract/${contractDeployed.name}`)
                const contractAbi = contractsList.contracts.find(contract => contract.contractName === contractDeployed.name).abi
                setQueryAbi(contractAbi)
                setSelectedContract(contractDeployed.name)
              }}>
                {contractDeployed.name}
              </Button>
            <StyledAddress>
              {contractDeployed.address} <br />
              {contractDeployed.network} {contractDeployed.chainId && `(ChainId: ${contractDeployed.chainId})`}<br />
              deployer: {contractDeployed.deployer} <br />
              deployment date: {contractDeployed.deploymentDate}
            </StyledAddress>
          </div>
        )
      }
      )}
      {contractsDeployed !== undefined && contractsDeployedHistory.length > 0 && <h4>Contracts deployed (from contractsAddressDeployedHistory.json):</h4>}
      {contractsDeployed !== undefined && contractsDeployedHistory.length > 0 && contractsDeployedHistory.map((contractDeployed: IAddressDetails, i: number) => {
        return (
          <div key={`contractsDeployedHistory-${contractDeployed.name}-${i}`}>
            <Button
              variant="outline"
              colorScheme="blue"
              onClick={() => {
                setAction("")
                navigate(`/contract/${contractDeployed.name}`)
                const contractAbi = contractsList.contracts.find(contract => contract.contractName === contractDeployed.name).abi
                setQueryAbi(contractAbi)
                setSelectedContract(contractDeployed.name)
              }}>
                {contractDeployed.name}
              </Button>
            <StyledAddress>
              {contractDeployed.address} <br />
              {contractDeployed.network} {contractDeployed.chainId && `(ChainId: ${contractDeployed.chainId})`}<br />
              deployer: {contractDeployed.deployer} <br />
              deployment date: {contractDeployed.deploymentDate}
            </StyledAddress>
          </div>
        )
      }
      )}
    </StyledAddressBook>
  )
}

export default AddressBook