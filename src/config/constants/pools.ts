import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.piano,
    earningToken: tokens.piano,
    contractAddress: {
      56: '0x2AED73484814e67F8b795Fc38Af71E2CEc429d0f',
      97: ''
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2499779405276626',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
