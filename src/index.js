import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import Loader from './components/Loader'
import Routes from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
