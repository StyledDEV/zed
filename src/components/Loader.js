import { memo } from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = () => {
  return (
    <Container>
      <SpinnerContainer>
        <SpinnerCircle />
        <SpinnerCircle />
      </SpinnerContainer>
    </Container>
  )
}

export default memo(Loader)

const rotate = keyframes`
  25% {
    transform: rotate(220deg);
  }

  50% {
    transform: rotate(170deg);
  }

  100% {
    transform: rotate(180deg);
  }
`

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #041014;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpinnerContainer = styled.div`
  width: 40px;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${rotate} 1s ease-in-out infinite;
`

const SpinnerCircle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 4px solid deepskyblue;
`
