import { ethers } from 'ethers'

// eslint-disable-next-line 
declare let window: any
// eslint-disable-next-line 
let provider: any
if (window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum, "any")
}

export const callFunction = async (
    provider: any,
    functionDetail: any, 
    functionSignature: string, 
    callArguments: any,
    contractAddress: string, 
    abi: any
  ) => {
    console.log('functionDetail', functionDetail)
    console.log('functionName', functionDetail[0].name)
    console.log('functionSignature', functionSignature)
    console.log('callArguments', callArguments)
    console.log('contractAddress', contractAddress)
    console.log('abi', abi)
    
    if (window.ethereum && provider !== undefined && provider !== "") {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer)
      let txn;
      console.log('contract', contract)
      if (functionDetail[0].inputs.length > 0) {
        // console.log('contract[functionSignature](callArguments)', contract.address, callArguments.length, functionSignature, callArguments, callArguments[0][functionDetail[0].inputs[0].name], callArguments[0][functionDetail[0].inputs[1].name])
        if (functionDetail[0].inputs.length == 1)
          txn = await contract[functionSignature](
            callArguments[0][functionDetail[0].inputs[0].name]
          )
        if (functionDetail[0].inputs.length == 2)
          txn = await contract[functionSignature](
            callArguments[0][functionDetail[0].inputs[0].name], 
            callArguments[0][functionDetail[0].inputs[1].name]
            )
        if (functionDetail[0].inputs.length == 3)
          txn = await contract[functionSignature](
            callArguments[0][functionDetail[0].inputs[0].name], 
            callArguments[0][functionDetail[0].inputs[1].name], 
            callArguments[0][functionDetail[0].inputs[2].name]
            )
        if (functionDetail[0].inputs.length == 4)
          txn = await contract[functionSignature](
            callArguments[0][functionDetail[0].inputs[0].name], 
            callArguments[0][functionDetail[0].inputs[1].name], 
            callArguments[0][functionDetail[0].inputs[2].name], 
            callArguments[0][functionDetail[0].inputs[3].name]
            )
        if (functionDetail[0].inputs.length == 5)
          txn = await contract[functionSignature](
            callArguments[0][functionDetail[0].inputs[0].name], 
            callArguments[0][functionDetail[0].inputs[1].name], 
            callArguments[0][functionDetail[0].inputs[2].name], 
            callArguments[0][functionDetail[0].inputs[3].name], 
            callArguments[0][functionDetail[0].inputs[4].name]
            )
        if (functionDetail[0].inputs.length == 6)
          txn = await contract[functionSignature](
            callArguments[0][functionDetail[0].inputs[0].name], 
            callArguments[0][functionDetail[0].inputs[1].name], 
            callArguments[0][functionDetail[0].inputs[2].name], 
            callArguments[0][functionDetail[0].inputs[3].name], 
            callArguments[0][functionDetail[0].inputs[4].name], 
            callArguments[0][functionDetail[0].inputs[5].name]
            )
        if (functionDetail[0].inputs.length == 7)
          txn = await contract[functionSignature](
            callArguments[0][functionDetail[0].inputs[0].name], 
            callArguments[0][functionDetail[0].inputs[1].name], 
            callArguments[0][functionDetail[0].inputs[2].name], 
            callArguments[0][functionDetail[0].inputs[3].name], 
            callArguments[0][functionDetail[0].inputs[4].name], 
            callArguments[0][functionDetail[0].inputs[5].name], 
            callArguments[0][functionDetail[0].inputs[6].name]
            )
        if (functionDetail[0].inputs.length == 8)
          txn = await contract[functionSignature](
            callArguments[0][functionDetail[0].inputs[0].name], 
            callArguments[0][functionDetail[0].inputs[1].name], 
            callArguments[0][functionDetail[0].inputs[2].name], 
            callArguments[0][functionDetail[0].inputs[3].name], 
            callArguments[0][functionDetail[0].inputs[4].name], 
            callArguments[0][functionDetail[0].inputs[5].name], 
            callArguments[0][functionDetail[0].inputs[6].name], 
            callArguments[0][functionDetail[0].inputs[7].name]
            )
      } else {
        console.log('contract[functionSignature]()', contract.address, functionSignature)
        txn = await contract[functionSignature]()
      }
      console.log('txn', txn)
      // const receipt = await txn.wait()
      // console.log('receipt', receipt)
    }

    if (functionDetail[0].inputs.length > 0) {
      const inputData = []
      functionDetail[0].inputs.map((input: any) => {
        inputData.push(input)
      })
      return false
    }
    return true
  }