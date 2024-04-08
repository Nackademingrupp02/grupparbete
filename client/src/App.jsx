import './App.css'
import HomePage from './Pages/Homepage/HomePage'
import AdminPage from './Pages/AdminPage/AdminPage'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path={'/'} element={<HomePage />}/>
        <Route path={'/adminpage'} element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App
