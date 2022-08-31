// Framework Imports
import React, { FC } from 'react'

// Library Imports
import { Routes, Route, Link } from 'react-router-dom'

// Component Imports
import Header from 'modules/Header/Header'

// CSS Imports
import './globalConfig/GlobalStyles.less'

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={
        <section>
          <Header />
          <h1>Welcome to React App thats build using Webpack and Babel separately</h1>
        </section>
      } />
    </Routes>
  )
}

export default App
