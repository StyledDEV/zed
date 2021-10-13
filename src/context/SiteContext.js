import { createContext } from 'react'

const SiteContext = createContext('Combos App')

const siteValues = {
  siteName: 'Zed Combos',
  siteLogoSrc: '../img/logos/logo.png',
  siteLogoAlt: 'Zed Combos Logo',
}

const SiteProvider = ({ children }) => {
  return (
    <SiteContext.Provider value={siteValues}>{children}</SiteContext.Provider>
  )
}

export { SiteContext, SiteProvider }
