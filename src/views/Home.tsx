import React from 'react'
// import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';
// import Button from '@mui/material/Button';

import NetworkPanel from '../components/NetworkPanel'

const markdown = `
<h2>1. Connect a wallet of create a signer</h2>
<br />
<h2>2. Select a network</h2>
<br />
<h2>3. Select and/or import contracts</h2>`


const Home: React.FC = () => {
    return (
        <>
        <ReactMarkdown children={markdown} />
        <Grid container spacing={2}>
            <Grid xs={8}>
                <NetworkPanel />
            </Grid>
            <Grid xs={4}>
                <NetworkPanel />
            </Grid>
            <Grid xs={4}>
                <NetworkPanel />
            </Grid>
            <Grid xs={8}>
                <NetworkPanel />
            </Grid>
        </Grid>
        </>
    )
}

export default Home