const { expect } = require('chai')
const { ethers } = require('hardhat')

let owner, addr1, addr2, addr3
let Token
let token

let provider = ethers.getDefaultProvider()

function getInfo(transaction) {
  return {
    hash: transaction.hash,
    from: transaction.from,
    to: transaction.to,
    "value(eth)": ethers.utils.formatUnits(transaction.value, 18),
    "gasPrice(eth)": ethers.utils.formatUnits(transaction.gasPrice, 18),
    "gasLimit": ethers.utils.formatUnits(transaction.gasLimit, 0),
    "fee(eth)": ethers.utils.formatUnits(transaction.gasPrice.mul(transaction.gasLimit), 18),
  }

  /*
  {
    hash: '0xd54c7626293bc951746bfc57f495d48d118d93cf17f05050ef9ea38db1ea02bf',
    type: 2,
    accessList: [],
    blockHash: '0x8794072eadf39419e47c2a4c1179f5cb72f4181c0b4e68bbe266fde0cda6eb6b',
    blockNumber: 2,
    transactionIndex: 0,
    confirmations: 1,
    from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    gasPrice: BigNumber { value: "1784801245" },
    maxPriorityFeePerGas: BigNumber { value: "1000000000" },
    maxFeePerGas: BigNumber { value: "2569602490" },
    gasLimit: BigNumber { value: "29021464" },
    to: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    value: BigNumber { value: "80000000000000000" },
    nonce: 1,
    data: '0xa0712d680000000000000000000000000000000000000000000000000000000000000001',
    r: '0x928456afaab88e3c72e7be4d354ad35d7339c8b065ccfe7efd95531f7ee46dd8',
    s: '0x6d45d0f1a4b54145ad2ea5b94c303104c3ac519aa249d515075485b0088a2531',
    v: 1,
    creates: null,
    chainId: 31337,
    wait: [Function (anonymous)]
  }
  */

}

beforeEach(async function() {
  ;[owner, addr1, addr2, addr3] = await ethers.getSigners()
  Token = await ethers.getContractFactory('MPH')

  const baseUri = process.env.BASE_URI
  console.log('baseUri: ', baseUri)
  token = await Token.deploy(baseUri)
})

describe('Token contract', function() {
  it('MPHNft token test', async function() {
    const ret = await token.mint(1, {
      value: ethers.utils.parseEther('0.08'),
    })
    console.log("base info: ", ret)
    console.log("calculated: ",getInfo(ret))
  })
})
