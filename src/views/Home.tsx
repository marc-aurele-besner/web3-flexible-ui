import React from 'react'
// import ReactDom from 'react-dom'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'

import NetworkPanel from '../components/NetworkPanel'
import WalletPanel from '../components/WalletPanel'
import AddressBook from '../components/AddressBook'

const StyledGrid = styled(Grid)`
  margin-left: 2vh;
  margin-right: 2vh;
`;

const Home: React.FC = () => {
    return (
        <StyledGrid container spacing={2}>
            <Grid xs={4}>
                <WalletPanel />
            </Grid>
            <Grid xs={4}>
                <NetworkPanel />
            </Grid>
            <Grid xs={4}>
                <AddressBook />
            </Grid>
        </StyledGrid>
    )
}

export default Home