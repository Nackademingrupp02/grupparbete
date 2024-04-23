import React from "react";
import { Link } from "react-router-dom";
const Header = ({cart, warning, setShow, show ,onLogout, isLoggedIn }) => {
  return (
    <>
      <header>

      <nav className="navHeader" style={{ minWidth: "100vh" }}>
        <Link to="/">
          <h1 className="headerLinks">Hakim livs</h1>
        </Link>
        <Link to="/adminpage">Admin sida</Link>
        {isLoggedIn ? (
          <button onClick={onLogout}>Logga ut</button>
        ) : null}

      </nav>
       
      </header>
    </>
  )
}

export default Header