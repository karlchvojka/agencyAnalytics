// Framework Imports
import React, { FC } from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// CSS Imports
import GlobalStyle from 'globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App: FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <h1>Welcome to React App thats build using Webpack and Babel separately</h1>
    </StyledApp>
  )
}

export default App
