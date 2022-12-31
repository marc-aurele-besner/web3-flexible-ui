import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ethers } from 'ethers'
import { ChakraProvider } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'

import './styles.css'
import App from './App'

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = 8000 // frequency provider is polling
  return library
}

const rootElement = document.getElementById('root') as HTMLDivElement
// @ts-ignore
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Suspense fallback={null}>
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </ChakraProvider>
  </Suspense>,
);