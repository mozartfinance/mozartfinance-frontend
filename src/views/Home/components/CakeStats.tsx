import React from 'react'
import BigNumber from 'bignumber.js/bignumber'
import { Card, CardBody, Heading, Text } from '@mozartfinance/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const pianoPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = pianoPrice.times(circSupply);
  const pianoPerBlock = 1;

  return (
      <StyledCakeStats>
        <CardBody>
          <Heading size="xl" mb="24px">
            {TranslateString(534, 'PIANO Stats')}
          </Heading>
          <Row>
            <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
            <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
          </Row>
          <Row>
            <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
            {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
          </Row>
          <Row>
            <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
            <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
          </Row>
          <Row>
            <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
            {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
          </Row>
          <Row>
            <Text fontSize="14px">{TranslateString(540, 'New PIANO/block')}</Text>
            <Text bold fontSize="14px">{pianoPerBlock}</Text>
          </Row>
        </CardBody>
      </StyledCakeStats>
  )
}

export default CakeStats
