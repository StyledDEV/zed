import { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <ErrorContainer>
      <ErrorSign />
      <ErrorText>Error 404, the resource doesn't exist.</ErrorText>
      <Link to="/">
        <Button style={{ marginTop: '2rem' }}>Back home</Button>
      </Link>
    </ErrorContainer>
  )
}

export default memo(NotFound)

const ErrorContainer = styled.div`
  width: 300px;
  height: auto;
  margin: 1rem auto;
`

const ErrorSign = styled.div.attrs((props) => ({
  children: '404',
  ...props,
}))`
  color: #8caaaf;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(150deg, #1d1f2b 30%, #8caaaf 60%);
  -webkit-background-clip: text;
  font-size: 10rem;
  font-weight: 700;
  text-align: center;
`

const ErrorText = styled.p`
  color: #eee;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`
