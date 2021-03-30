import React from 'react'
import styled from 'styled-components'
import Page from './layout/Page'


const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
        <StyledImage src="/images/mozart-flying.png" alt="Mozart illustration" width={300} height={300} />
    </Wrapper>
  )
}

export default PageLoader
