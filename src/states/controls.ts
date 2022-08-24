import create from 'zustand'

interface IControlsState {
  viewType: string
  contractSelected: string | null
  contractAddressSelected: string | null
  typeSelected: string | null
  functionSelected: string | null
  functionInputNeeded: boolean
  action: string
  leftBarOpen: boolean
  // eslint-disable-next-line
  callArguments: any
  setViewType: (viewType: string) => void
  setContractSelected: (contractSelected: string | null) => void
  setContractAddressSelected: (contractAddressSelected: string | null) => void
  setTypeSelected: (holderBalance: string | null) => void
  setFunctionSelected: (accountBalance: string | null) => void
  setFunctionInputNeeded: (functionInputNeeded: boolean) => void
  setAction: (action: string) => void
  setLeftBarOpen: (leftBarOpen: boolean) => void
  // eslint-disable-next-line
  setCallArguments: (callArguments: any) => void
}

const useControls = create<IControlsState>(set => ({
  viewType: '',
  contractSelected: null,
  contractAddressSelected: null,
  typeSelected: null,
  functionSelected: '',
  functionInputNeeded: false,
  action: '',
  leftBarOpen: false,
  callArguments: {},
  setViewType: (viewType: string) => set(() => ({ viewType })),
  setContractSelected: (contractSelected: string | null) => set(() => ({ contractSelected })),
  setContractAddressSelected: (contractAddressSelected: string | null) => set(() => ({ contractAddressSelected })),
  setTypeSelected: (typeSelected: string | null) => set(() => ({ typeSelected })),
  setFunctionSelected: (functionSelected: string | null) => set(() => ({ functionSelected })),
  setFunctionInputNeeded: (functionInputNeeded: boolean) => set(() => ({ functionInputNeeded })),
  setAction: (action: string) => set(() => ({ action })),
  setLeftBarOpen: (leftBarOpen: boolean) => set(() => ({ leftBarOpen })),
  // eslint-disable-next-line
  setCallArguments: (callArguments: any) => set(() => ({ callArguments })),
}))

export default useControls