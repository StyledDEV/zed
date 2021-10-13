import { memo } from 'react'
import styled from 'styled-components'
import ComboItem from './ComboItem'

const ComboList = ({ combos }) => {
  return (
    <ComboContainer>
      {combos.map((combo) => (
        <ComboItem key={combo.id} {...combo} />
      ))}
    </ComboContainer>
  )
}

export default memo(ComboList)

const ComboContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 -1% -1% 0;

  & > * {
    width: 24%;
    margin: 0 1% 1% 0;

    &:last-of-type {
      margin: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    & > * {
      width: 32.33333333%;
    }
  }

  @media screen and (max-width: 700px) {
    & > * {
      width: 49%;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0;

    & > * {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`
