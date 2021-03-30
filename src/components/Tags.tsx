import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@mozartfinance/uikit'

const CoreTag = (props) => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon color="secondary" />} {...props}>
    Core
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon color="secondary" />} {...props}>
    Community
  </Tag>
)

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<BinanceIcon color="secondary" />} {...props}>
    Binance
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

const NoFeeTag = () => (
    <Tag variant="success" outline startIcon={<VerifiedIcon />}>
        No Fees
    </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, DualTag, NoFeeTag }
