import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Center, Flex, Box, Heading, Text, HStack, Button, Tooltip } from '@chakra-ui/react'
import { ContractInterface, useControls, useInputs, useTransactions } from 'web3-chakra-uikit'
import { SvgIcon } from 'tsx-svg-icons'
import { utils } from 'ethers'

import contractsList from '../artifacts/contractsList.json'
import contractsAddressDeployed from '../artifacts/contractsAddressDeployed.json'

const StyledContractInterface = styled(ContractInterface)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Contract: React.FC = () => {
  const { active, chainId, account, library } = useWeb3React()
  const urlParams = useParams()
  const navigate = useNavigate()
  const action = urlParams.action !== undefined ? urlParams.action : ''
  const functionName = urlParams.functionName !== undefined ? urlParams.functionName : ''
  const contractName = urlParams.contractName !== undefined ? urlParams.contractName : ''
  const eventName = urlParams.eventName !== undefined ? urlParams.eventName : undefined
  const eventRange = urlParams.eventRange !== undefined ? urlParams.eventRange : undefined

  const [contractAddress, setContractAddress] = useState('')
  const [contractVersion, setContractVersion] = useState('')
  const [contractTokenDecimals, setContractTokenDecimals] = useState(0)
  const [contractTokenName, setContractTokenName] = useState('')
  const [contractTokenSymbol, setContractTokenSymbol] = useState('')
  const [contractTotalSupply, setContractTotalSupply] = useState('0')
  const [contractTotalSupplyFormatted, setContractTotalSupplyFormatted] = useState('0')
  const [accountBalanceOf, setAccountBalanceOf] = useState('0')
  const [accountBalanceOfFormatted, setAccountBalanceOfFormatted] = useState('0')

  const setActiveView = useControls((state) => state.setActiveView)
  const setTabIndex = useControls((state) => state.setTabIndex)
  const setActiveModal = useControls((state) => state.setActiveModal)
  const queryAbi = useInputs(state => state.queryAbi)
  const setQueryAbi = useInputs((state) => state.setQueryAbi)
  const setSelectedContract = useTransactions((state) => state.setSelectedContract)

  if (queryAbi === null) return null

  const handleContract = async () => {
    const contract = contractsList.contractsAbis.find(contract => contract.contractName === contractName)
    const contractAddressDeployed = contractsAddressDeployed.find(contract => contract.name === contractName && contract.chainId === chainId) ? contractsAddressDeployed.find(contract => contract.name === contractName && contract.chainId === chainId).address : undefined
    if (contract !== undefined) {
      if (contract !== undefined && contract.abi !== undefined && contractAddressDeployed !== undefined) {
        setQueryAbi(contract.abi)
        const contractInstance = new library.eth.Contract(contract.abi, contractAddressDeployed)
        setContractAddress(contractInstance.address)
        try {
          const version = await contractInstance.version()
          setContractVersion(version)
        } catch (error) { console.log(error) }
        try {
          const decimals = await contractInstance.decimals()
          setContractTokenDecimals(decimals)
        } catch (error) { null }
        try {
          const name = await contractInstance.name()
          setContractTokenName(name)
        } catch (error) { null }
        try {
          const symbol = await contractInstance.symbol()
          setContractTokenSymbol(symbol)
        } catch (error) { null }
        try {
          const totalSupply = await contractInstance.totalSupply()
          setContractTotalSupply(totalSupply)
          setContractTotalSupplyFormatted(utils.formatUnits(totalSupply, contractTokenDecimals))
        } catch (error) { null }
        try {
          const balanceOf = await contractInstance.balanceOf(account)
          setAccountBalanceOf(balanceOf)
          setAccountBalanceOfFormatted(utils.formatUnits(balanceOf, contractTokenDecimals))
        } catch (error) { null }
      }
    }
  }

  useEffect(() => {
    setActiveView('contractSelected')
    if (active) handleContract()
  }, [active, chainId, contractTokenDecimals])

  useEffect(() => {
    if (active) {
      // setSelectedEnvironment(NETWORKS.find((network) => network.chainId === chainId).value)
      setSelectedContract(contractName)
    }
  }, [active, chainId, contractName])

  useEffect(() => {
    switch (action) {
      case 'staticCall':
        setTabIndex(0)
        break
      case 'readCall':
        setTabIndex(1)
        break
      case 'writeCall':
        setTabIndex(2)
        break
      case 'queryEvents':
        setTabIndex(3)
        break
      default:
        setTabIndex(0)
    }
    if (functionName) setActiveModal(action)
  }, [action, functionName])
  
  return <Center>
    <Flex>
      <Box
        w="100%"
        mb="2%">
        <HStack key="HStack-header">
          <Heading>{`${contractName} Info ${contractTokenName && `- ${contractTokenName}`} ${contractVersion !== '' ? `v${contractVersion}` : ''}`}</Heading>
        </HStack>
        {chainId > 0 && contractAddress !== '' &&
          <HStack key="HStack-options">
            <Tooltip
              key="Tooltip-Home"
              label="Go to Contracts list"
              placement="top"
              bg='blue.500'
              hasArrow
            >
              <Button
                onClick={() => navigate('/')}
              >
                <SvgIcon
                  icon="Home"
                  fill="#3182CE"
                  width = '2vw'
                  height = '2vh'
                />
              </Button>
            </Tooltip>
                {/* <Text as='b'>({chainId > 0 ? NETWORKS.find((network) => network.chainId === chainId).name : ''})<br />{contractAddress}</Text> */}
            <Tooltip
              key="Tooltip-Copy"
              label="Copy contract address"
              placement="top"
              bg='blue.500'
              hasArrow
            >
              <Button
                onClick={() => navigator.clipboard.writeText(contractAddress)}
              >
                <SvgIcon
                  icon="Copy"
                  fill="#3182CE"
                  width = '2vw'
                  height = '2vh'
                />
              </Button>
            </Tooltip>
            <Tooltip
              key="Tooltip-WebBrowser"
              label="Open Block Explorer"
              placement="top"
              bg='blue.500'
              hasArrow
            >
              <Button
                // onClick={() => window.open(getExplorerDomain(NETWORKS.find((network) => network.chainId === chainId).value) + 'address/' + contractAddress, '_blank')}
              >
                <SvgIcon
                  icon="WebBrowser"
                  fill="#3182CE"
                  width = '2vw'
                  height = '2vh'
                />
              </Button>
            </Tooltip>
        </ HStack>}
        {contractAddress === '' && <>
          <HStack key="HStack-noContract">
            <Text color='red' as="b">Error: Contract not found</Text>
          </HStack>
          <HStack key="HStack-errorDetail">
            <Text color='red'>This contract is not available on your current network.</Text>
          </HStack>
        </>}
        {contractTokenSymbol !== '' && <Center>
          <Flex>
            <Text>
              Total Supply: {`${contractTotalSupplyFormatted} ${contractTokenSymbol} (${contractTotalSupply} ${contractTokenSymbol})`}
            </Text>
          </Flex>
          <Flex>
            <Text>
              Your balance: {`${accountBalanceOfFormatted} ${contractTokenSymbol} (${accountBalanceOf} ${contractTokenSymbol})`}
            </Text>
          </Flex>
        </Center>}
        <StyledContractInterface
          contractAbi={queryAbi}
          eventName={eventName}
          eventRange={eventRange}
        />
      </Box>
    </Flex>
  </Center>
}

export default Contract