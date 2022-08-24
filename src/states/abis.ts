import create from 'zustand'

interface IAbiInput {
  name: string
  type: string
  indexed: boolean
}

interface IAbi {
  [key: string]: string | number | boolean | object | IAbiInput[]
}

interface IContractsAbis {
  contractName: string
  abi: IAbi[]
}

interface IContractsList {
  contractsCount: number
  contractsNames: string[]
  contractsAbis: IContractsAbis[]
}

interface IABIs {
  abis: IContractsList | undefined
  setAbis: (abis: IContractsList | undefined) => void
  addAbi: (newAbi: IContractsAbis | undefined) => void
}

const useAbis = create<IABIs>(set => ({
  abis: null,
  setAbis: (abis: IContractsList | undefined) => set(() => ({ abis })),
  addAbi: (newAbi: IContractsAbis | undefined) => set((state) => ({ abis: { ...state.abis, ...newAbi } })),
}))

export default useAbis