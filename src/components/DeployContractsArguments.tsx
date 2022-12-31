import React, { useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { 
    StyledBody
 } from '../components/styles'
import useAbis from '../states/abis'

import contractsList from '../artifacts/contractsList.json'

const StyledButton = styled(Button)`
    margin: 10px;
`

const DeployContractsArguments: React.FC = () => {
    const abis = useAbis(state => state.abis)
    const setAbis = useAbis(state => state.setAbis)

    useEffect(() => {
        if (abis === null) {
            setAbis(contractsList)
        }
    }, [abis])

    if (abis !== null)
    return (
        <StyledBody>
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
        </StyledBody>
    )
}

export default DeployContractsArguments