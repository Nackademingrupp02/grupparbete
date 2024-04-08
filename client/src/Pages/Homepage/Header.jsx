import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <nav className='navHeader'>
          <h1>Hakim livs</h1>
          <Link to='/adminpage'>Admin page</Link>
        </nav>
      </header>
    </>
  )
}

export default Header