import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <nav className='navHeader'>
        <Link to='/'><h1 className='headerLinks'>Hakim livs</h1></Link>
          <Link to='/adminpage'>Admin page</Link>
        </nav>
      </header>
    </>
  )
}

export default Header