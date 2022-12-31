import React from 'react'
// import ReactDom from 'react-dom'
import { Grid, GridItem } from '@chakra-ui/react'
import styled from 'styled-components'

import NetworkPanel from '../components/NetworkPanel'
import WalletPanel from '../components/WalletPanel'
import AddressBook from '../components/AddressBook'

const StyledGrid = styled(Grid)`
  margin-left: 2vh;
  margin-right: 2vh;
`;

const Home: React.FC = () => {
    return <StyledGrid templateColumns='repeat(3, 1fr)' gap={4}>
        <GridItem>
            <WalletPanel />
        </GridItem>
        <GridItem>
            <NetworkPanel />
        </GridItem>
        <GridItem>
            <AddressBook />
        </GridItem>
    </StyledGrid>
}

export default Home