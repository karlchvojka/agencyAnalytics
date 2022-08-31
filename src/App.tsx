// Framework Imports
import React, { FC } from 'react'

// Library Imports
import { Routes, Route, Link } from 'react-router-dom'

// Component Imports
import Header from 'modules/Header/Header'
import Ottawa from 'pages/Ottawa/Ottawa'

// CSS Imports
import './globalConfig/GlobalStyles.less'
import './App.less'

class App extends React.Component {
  render() {
    return (
      <section className='appWrap'>
        <Header />
        <Routes>
          <Route path='/' element={<Ottawa />} />
        </Routes>
      </section>
    );
  }
}
export default App
