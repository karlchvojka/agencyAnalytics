// Framework Imports
import React, { FC } from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// CSS Imports
import './globalConfig/GlobalStyles.less'
const App: FC = () => {
  return (
    <section>
      <Header />
      <h1>Welcome to React App thats build using Webpack and Babel separately</h1>
    </section>
  )
}

export default App
