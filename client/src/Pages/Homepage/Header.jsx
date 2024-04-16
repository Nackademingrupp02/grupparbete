import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'


const Header = () => {
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand><Link to='/'><h1 className='headerLinks'>Hakim livs</h1></Link></Navbar.Brand>
            <Link to='/adminpage'>Admin page</Link>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header