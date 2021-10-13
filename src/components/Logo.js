import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SiteContext } from '../context'

const Logo = () => {
  const { siteLogoSrc, siteLogoAlt } = useContext(SiteContext)

  return (
    <LogoContainer>
      <Link to="/">
        <LogoImg src={siteLogoSrc} alt={siteLogoAlt} />
      </Link>
    </LogoContainer>
  )
}

export default Logo

const LogoContainer = styled.div`
  width: 100%;
  height: 125px;
  padding: 1rem 0;
  text-align: center;
`

const LogoImg = styled.img`
  width: auto;
  height: 100%;
  display: inline-block;
`
