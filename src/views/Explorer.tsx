import React from 'react'
import styled from 'styled-components'
import { ContractInterface, useInputs } from 'web3-chakra-uikit'

const StyledExplorer = styled(ContractInterface)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Explorer: React.FC = () => {
  const queryAbi = useInputs(state => state.queryAbi)

  if (queryAbi === null) return null
  
  return <StyledExplorer
      contractAbi={queryAbi}
  />
}

export default Explorer