// Framework Imports
import React, { FC } from 'react'

// Library Imports
import { NavLink } from 'react-router-dom'

// CSS Imports
import './Header.less'

/**
 * This the Header component.
 */
const Header: FC = () => {
  return (
    <section className="header">
      <nav>
        <NavLink to='/'>Ottawa</NavLink>
        <NavLink to='/moscow'>Moscow</NavLink>
        <NavLink to='/tokyo'>Tokyo</NavLink>
      </nav>
    </section>
  )
}

export default Header
