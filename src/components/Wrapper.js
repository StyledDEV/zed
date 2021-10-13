import styled from 'styled-components'
import { memo } from 'react'

const Wrapper = ({ children }) => {
  return <Layout>{children}</Layout>
}

const Layout = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 2rem;
`

export default memo(Wrapper)
