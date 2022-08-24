import create from 'zustand'

interface IAddressBookFile {
  name: string
  address: string
  network: string
  chainId?: number
  deployer: string
  deploymentDate: string
  blockHah?: string
  blockHash?: string
  blockNumber?: number
}

export interface IAbisMatchAddressBook {
  contractName: string
  chainId: string
  contractAddress: string
}

interface IAddressBook {
  addressBook: IAddressBookFile[] | undefined
  abisMatchAddressBook: IAbisMatchAddressBook[] | undefined
  setAddressBook: (addressBook: IAddressBookFile[] | undefined) => void
  addAddressBook: (newAddressBook: IAddressBookFile) => void
  setAbisMatchAddressBook: (abisMatchAddressBook: IAbisMatchAddressBook[] | undefined) => void
  addAbisMatchAddressBook: (newAbisMatchAddressBook: IAbisMatchAddressBook) => void
}

const useAddressBook = create<IAddressBook>(set => ({
  addressBook: undefined,
  abisMatchAddressBook: undefined,
  setAddressBook: (addressBook: IAddressBookFile[] | undefined) => set(() => ({ addressBook })),
  addAddressBook: (newAddressBook: IAddressBookFile) => set((state) => ({ addressBook: { ...state.addressBook, ...newAddressBook } })),
  setAbisMatchAddressBook: (abisMatchAddressBook: IAbisMatchAddressBook[] | undefined) => set(() => ({ abisMatchAddressBook })),
  addAbisMatchAddressBook: (newAbisMatchAddressBook: IAbisMatchAddressBook) => set((state) => ({ abisMatchAddressBook: { ...state.abisMatchAddressBook, ...newAbisMatchAddressBook } })),
}))

export default useAddressBook