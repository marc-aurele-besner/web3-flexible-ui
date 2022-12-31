import React, { useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import styled from 'styled-components'
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import MenuList from '@mui/material/MenuList';
// import MenuItem from '@mui/material/MenuItem';
import { 
    StyledContractName
 } from '../components/styles'
 import useAbis from '../states/abis'
import useControls from '../states/controls'

import contractsList from '../artifacts/contractsList.json'

// const StyledPaper = styled(Paper)`
//     margin-left: 200px;
//     width: 30vw;
// `

const ContractsSelector: React.FC = () => {
    const abis = useAbis(state => state.abis)
    const setAbis = useAbis(state => state.setAbis)
    const contractSelected = useControls(state => state.contractSelected)
    const setContractSelected = useControls(state => state.setContractSelected)

    useEffect(() => {
        if (abis === null) {
            setAbis(contractsList)
        }
    }, [abis])

    if (contractSelected === '') {
        if (abis !== null)
            return (
                <>
                    {/* <MenuList>
                        {contractSelected == '' ? <>
                            <h2>Select a contract</h2>
                            {abis.contractsNames.map((contractName: string) => {
                                return (
                                    <MenuItem>
                                        <StyledContractName key={contractName} onClick={() => setContractSelected(contractName)}>{contractName}</StyledContractName>
                                    </MenuItem>
                                )})}
                            </> : <>
                                <h2>{contractSelected} <small>Change contract</small></h2>
                            </>}
                    </MenuList> */}
                </>
            )
    }
}

export default ContractsSelector