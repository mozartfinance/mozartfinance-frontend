import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PIANO',
    lpAddresses: {
      56: '0xd46936677B2C1Bb696F2b67c55239331E2b7Cd42',
      97: '',
    },
    token: tokens.foam,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PIANO-BNB LP',
    lpAddresses: {
      56: '0xb40AE531Da43F7D114F2E6D9c331171Ef4130f5F',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'PIANO-BUSD LP',
    lpAddresses: {
      56: '0xd8D201CeBC25c39AD3E05536F94ECc3B6Bc8cAcc',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'PIANO-CAKE LP',
    lpAddresses: {
      56: '0x0E7197386A37c0D792D9D357D59f89b679cf1b06',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.cake,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      97: ''
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
      97: ''
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
  {
    pid: 6,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
      97: ''
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'PIANO-ADA LP',
    lpAddresses: {
      56: '0xfFeb22c6143B982699E2dcBafBb0EAC51d0F408E',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.ada,
  },
  {
    pid: 9,
    lpSymbol: 'PIANO-DOT LP',
    lpAddresses: {
      56: '0xe3905652c879d9df7319b5756350dd2bb5e052e9',
      97: ''
    },
    token: tokens.piano,
    quoteToken: tokens.dot,
  },
  {
    pid: 10,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
      97: ''
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 11,
    lpSymbol: 'DOT-ETH LP',
    lpAddresses: {
      56: '0x84cd882a0abaf8ad69b85fef0a8d5a36f5c0ecc1',
      97: ''
    },
    token: tokens.dot,
    quoteToken: tokens.eth,
  },


]

export default farms
