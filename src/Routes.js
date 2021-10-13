import { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { SiteProvider } from './context'

// Components
import Logo from './components/Logo'

// Pages
import NotFound from './pages/NotFound'
const Home = lazy(() => import('./pages/Home'))
const ComboSingle = lazy(() => import('./pages/ComboSingle'))

function App() {
  return (
    <SiteProvider>
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/combo/:comboId" component={ComboSingle} />
        <Route path="*" component={NotFound} />
      </Switch>
    </SiteProvider>
  )
}

export default App
