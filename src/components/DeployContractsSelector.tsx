import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { 
    StyledSelector
 } from '../components/styles'
import useAbis from '../states/abis'

import contractsList from '../artifacts/contractsList.json'

const StyledButton = styled(Button)`
    margin: 10px;
`

const DeployContractsSelector: React.FC = () => {
    const abis = useAbis(state => state.abis)
    const setAbis = useAbis(state => state.setAbis)

    useEffect(() => {
        if (abis === null) {
            setAbis(contractsList)
        }
    }, [abis])

    if (abis !== null)
    return (
        <StyledSelector>
            <h2>Deploy contracts</h2>
            {abis.contractsNames.map((contractName: string) => {
                return (
                    
                    <StyledButton 
                        variant="contained" 
                        key={contractName}
                        // color={parseInt(chainId, 10) === chain.chainId ? "success" : "primary"}
                        // onClick={async () => {
                        // await handleSwitchChain(chain.chainId, setChainId, setWallet)
                        // }}
                        >
                            {contractName}
                        </StyledButton>
                )})}
        </StyledSelector>
    )
}

export default DeployContractsSelector