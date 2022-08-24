export interface IChains {
  chainId: number
  chainGroup: string
  chainName: string
  hardhatChainName: string
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  }
  rpcUrls: string[]
  blockExplorerUrls?: string[]
  iconUrls?: string[]
}

export interface IChainsGroup {
  name: string
}