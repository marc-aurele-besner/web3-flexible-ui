import { IChains, IChainsGroup } from './types'

const chains: IChains[] = [
    {
        chainId: 31337,
        chainGroup: 'Localhost',
        chainName: 'Hardhat Local',
        hardhatChainName: 'hardhat',
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH-TEST',
            decimals: 18
        },
        rpcUrls: ['http://localhost:8545'],
        blockExplorerUrls: ['']
    },
    {
        chainId: 137,
        chainGroup: 'Polygon',
        chainName: 'Polygon Mainnet',
        hardhatChainName: 'polygon',
        nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18
        },
        rpcUrls: ['https://polygon-rpc.com', 'https://rpc-mainnet.matic.network', 'https://matic-mainnet.chainstacklabs.com'],
        blockExplorerUrls: ['https://polygonscan.com']
    },
    {
        chainId: 80001,
        chainGroup: 'Polygon',
        chainName: 'Polygon Mumbai',
        hardhatChainName: 'mumbai',
        nativeCurrency: {
            name: 'Test Matic',
            symbol: 'MATIC',
            decimals: 18
        },
        rpcUrls: ['https://rpc-mumbai.matic.today', 'https://matic-mumbai.chainstacklabs.com'],
        blockExplorerUrls: ['https://mumbai.polygonscan.com']
    },
    {
        chainId: 1,
        chainGroup: 'Ethereum',
        chainName: 'Ethereum Mainnet',
        hardhatChainName: 'mainnet',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: [''],
        blockExplorerUrls: ['']
    },
    {
        chainId: 3,
        chainGroup: 'Ethereum',
        chainName: 'Ethereum Ropsten',
        hardhatChainName: 'ropsten',
        nativeCurrency: {
            name: 'Test Ethereum',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: [''],
        blockExplorerUrls: ['']
    },
    {
        chainId: 4,
        chainGroup: 'Ethereum',
        chainName: 'Ethereum Rinkeby',
        hardhatChainName: 'rinkeby',
        nativeCurrency: {
            name: 'Test Ethereum',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: [''],
        blockExplorerUrls: ['']
    },
    {
        chainId: 5,
        chainGroup: 'Ethereum',
        chainName: 'Ethereum Goerli',
        hardhatChainName: 'goerli',
        nativeCurrency: {
            name: 'Test Ethereum',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: [''],
        blockExplorerUrls: ['']
    },
    {
        chainId: 42,
        chainGroup: 'Ethereum',
        chainName: 'Ethereum Kovan',
        hardhatChainName: 'kovan',
        nativeCurrency: {
            name: 'Test Ethereum',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: [''],
        blockExplorerUrls: ['']
    },
    {
        chainId: 56,
        chainGroup: 'BNB',
        chainName: 'Binance Chain Mainnet',
        hardhatChainName: 'binance',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18
        },
        rpcUrls: [''],
        blockExplorerUrls: ['']
    },
    {
        chainId: 97,
        chainGroup: 'BNB',
        chainName: 'Binance Chain Testnet',
        hardhatChainName: 'binanceTestnet',
        nativeCurrency: {
            name: 'Test BNB',
            symbol: 'BNB',
            decimals: 18
        },
        rpcUrls: [''],
        blockExplorerUrls: ['']
    }
]

export const chainsGroup: IChainsGroup[]= [
    {
        name: 'Localhost'
    },
    {
        name: 'Polygon'
    },
    {
        name: 'Ethereum'
    },  
    {
        name: 'BNB'
    }
]

export default chains