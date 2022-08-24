
import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import useAccounts from '../states/accounts'
import useControls from '../states/controls'
import useAddressBook from '../states/addressBook'

import chains from '../constants/chains'
import contractsList from '../artifacts/contractsList.json'
import contractsDeployed from '../artifacts/contractsAddressDeployed.json'
import contractsDeployedHistory from '../artifacts/contractsAddressDeployedHistory.json'

const AddressBook: React.FC = () => {
  const wallet = useAccounts(state => state.wallet)
  const chainId = useAccounts(state => state.chainId)
  const setAction = useControls(state => state.setAction)

  const addressBook = useAddressBook(state => state.addressBook)
  const abisMatchAddressBook = useAddressBook(state => state.abisMatchAddressBook)
  const setAddressBook = useAddressBook(state => state.setAddressBook)
  const setAbisMatchAddressBook = useAddressBook(state => state.setAbisMatchAddressBook)

  useEffect(() => {
    if (addressBook === undefined && contractsList.contractsNames.length > 0) {
      setAddressBook(contractsDeployed)
      const newAbisMatchAddressBook = []
      contractsList.contractsNames.map(contractName => {
        contractsDeployed.filter(contract => contract.name === contractName).map(contract => {
          newAbisMatchAddressBook.push({
            contractName: contract.name,
            chainId: chains.find((chain) => chain.hardhatChainName == contract.network).chainId,
            contractAddress: contract.address
          })
        })
      })
      setAbisMatchAddressBook(newAbisMatchAddressBook)
    }
  }, [chainId, addressBook, contractsList, contractsDeployed, abisMatchAddressBook, setAbisMatchAddressBook])

  return (
    <>
      <h2>Address Book</h2>
      {wallet !== '' && wallet !== undefined && <h4>Current wallet: {wallet}</h4>}
      {contractsDeployed !== undefined && contractsDeployed.length > 0 && <h4>Contracts deployed (from contractsAddressDeployed.json):</h4>}
      {contractsDeployed !== undefined && contractsDeployed.length > 0 && contractsDeployed.map((contractDeployed: any, i: number) => {
        return (
          <div key={`contractsDeployed-${contractDeployed.name}-${i}`}>
            <h3>{contractDeployed.name}</h3>
            <p>
              {contractDeployed.address} <br />
              {contractDeployed.network} {contractDeployed.chainId} <br />
              deployer: {contractDeployed.deployer} <br />
              deployment date: {contractDeployed.deploymentDate}
            </p>
          </div>
        )
      }
      )}
      <Button variant="contained" color="secondary" onClick={() => setAction("")}>Go back</Button>
      {contractsDeployed !== undefined && contractsDeployedHistory.length > 0 && <h4>Contracts deployed (from contractsAddressDeployedHistory.json):</h4>}
      {contractsDeployed !== undefined && contractsDeployedHistory.length > 0 && contractsDeployedHistory.map((contractDeployed: any, i: number) => {
        return (
          <div key={`contractsDeployedHistory-${contractDeployed.name}-${i}`}>
            <h3>{contractDeployed.name}</h3>
            <p>
              {contractDeployed.address} <br />
              {contractDeployed.network} {contractDeployed.chainId} <br />
              deployer: {contractDeployed.deployer} <br />
              deployment date: {contractDeployed.deploymentDate}
            </p>
          </div>
        )
      }
      )}
    </>
  )
}

export default AddressBook