import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../Components/Cart"

const Header = (props) => {
  const {cart, warning, setShow, show ,onLogout, isLoggedIn ,setBuying, buying} = props
  return (
    <>
      <header>

      <nav className="navHeader" style={{ minWidth: "100vh" }}>
        <Link to="/">
          <h1 className="headerLinks">Hakim livs</h1>
        </Link>
        {isLoggedIn ? (
          <button onClick={onLogout}>Logga ut</button>
        ) : null}
        <Cart buying={buying} setBuying={setBuying} cart={cart} setShow={setShow} show={show}/>
      </nav>
       
      </header>
    </>
  )
}

export default Header