import styled, { keyframes } from 'styled-components'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const ComboItem = ({ id, name, image }) => {
  return (
    <Combo title={`Show combo ${id}`}>
      <Link to={`/combo/${id}`}>
        <ComboImgCon>
          <ComboImg src={`../img/combos/${image}`} alt={name} />
        </ComboImgCon>
      </Link>
    </Combo>
  )
}

export default memo(ComboItem)

const growAndDecrease = keyframes`
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 5px 3px #333;
    outline-offset: 5px;
  }
  
  100% {
    transform: scale(1);
    box-shadow: initial;
    outline-offset: initial;
    outline-width: 3px;
  }
`

const Combo = styled.div`
  outline: 1px solid #333;
  animation: waiting 0.3s 0.1s ease-in-out forwards;

  &:hover {
    animation-name: ${growAndDecrease};
  }
`

const ComboImgCon = styled.div`
  width: 100%;
  height: 100%;
`

const ComboImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
