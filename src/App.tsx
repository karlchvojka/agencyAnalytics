// Framework Imports
import React, { FC } from 'react'

// Library Imports
import { Routes, Route, Link } from 'react-router-dom'

// Component Imports
import Header from 'modules/Header/Header'
import Moscow from 'pages/Moscow/Moscow'
import Ottawa from 'pages/Ottawa/Ottawa'
import Tokyo from 'pages/Tokyo/Tokyo'

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
          <Route path='/moscow' element={<Moscow />} />
          <Route path='/tokyo' element={<Tokyo />} />
        </Routes>
      </section>
    );
  }
}
export default App
