import React from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'

const AdminPage = ({products}) => {
  return (
    <>
        <Header />
        <Main {...{products}} />
    </>
  )
}

export default AdminPage