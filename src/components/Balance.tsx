import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { Text } from '@mozartfinance/uikit'

interface TextProps {
  isDisabled?: boolean
  fontSize?: string
  color?: string
}

interface BalanceProps extends TextProps {
  value?: number
  decimals?: number
  unit?: string
  reverse?: boolean
}

const Balance: React.FC<BalanceProps> = ({ value, fontSize, color, decimals, isDisabled, unit, reverse = false }) => {
  const previousValue = useRef(0)

  useEffect(() => {
    previousValue.current = value
  }, [value])

  return (
    <Text bold color={isDisabled ? 'textDisabled' : color} fontSize={fontSize}>
      {reverse && value && unit
          ? <span>{unit}</span>
          : ''
      }
      <CountUp start={previousValue.current} end={value} decimals={decimals} duration={1} separator="," />
      {!reverse && value && unit
          ? <span>{unit}</span>
          : ''
      }
    </Text>
  )
}

Balance.defaultProps = {
  fontSize: '32px',
  isDisabled: false,
  color: 'text',
  decimals: 3,
}

export default Balance
