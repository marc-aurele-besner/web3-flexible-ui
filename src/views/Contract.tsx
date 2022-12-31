import React from 'react'
import styled from 'styled-components'
import { ContractInterface, useInputs } from 'web3-chakra-uikit'

const StyledContractInterface = styled(ContractInterface)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Home: React.FC = () => {
    const queryAbi = useInputs(state => state.queryAbi)

    return <StyledContractInterface
        contractAbi={queryAbi}
    />
}

export default Home