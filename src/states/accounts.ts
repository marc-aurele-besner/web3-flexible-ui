import create from 'zustand'

interface IAccountsState {
  wallet: string | null
  walletType: string | null
  chainId: string | null
  accountBalance: string | null
  // eslint-disable-next-line
  randomWalletDetails: any
  // eslint-disable-next-line
  randomProvider: any
  setWallet: (wallet: string | null) => void
  setWalletType: (walletType: string | null) => void
  setChainId: (holderBalance: string | null) => void
  setAccountBalance: (accountBalance: string | null) => void
  // eslint-disable-next-line
  setRandomWalletDetails: (randomWalletDetails: any) => void
  // eslint-disable-next-line
  setRandomProvider: (randomProvider: any) => void
}

const useAccounts = create<IAccountsState>(set => ({
  wallet: null,
  walletType: null,
  chainId: null,
  accountBalance: '',
  randomWalletDetails: {},
  randomProvider: {},
  setWallet: (wallet: string | null) => set(() => ({ wallet })),
  setWalletType: (walletType: string | null) => set(() => ({ walletType })),
  setChainId: (chainId: string | null) => set(() => ({ chainId })),
  setAccountBalance: (accountBalance: string | null) => set(() => ({ accountBalance })),
  // eslint-disable-next-line
  setRandomWalletDetails: (randomWalletDetails: any) => set(() => ({ randomWalletDetails })),
  // eslint-disable-next-line
  setRandomProvider: (randomProvider: any) => set(() => ({ randomProvider }))
}))

export default useAccounts