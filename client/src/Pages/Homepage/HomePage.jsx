import React from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'

const HomePage = ({filteredProducts, filterHandler}) => {
  return (
    <>
        <Header />
        <Main {...{filteredProducts, filterHandler}} />
        <Footer />
    </>
  )
}

export default HomePage