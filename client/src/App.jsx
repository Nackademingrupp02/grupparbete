import './App.css'
import HomePage from './Pages/Homepage/HomePage'
import AdminPage from './Pages/AdminPage/AdminPage'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {

  const [products, setProducts] = useState([])
  const [filterButton, setFilterButton] = useState('Alla')

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://grupparbete.onrender.com/product/all");
      const json = await response.json();
      setProducts(json);
    }
    getData();
  }, []);

  let filteredProducts = products.filter((product) => {
    if(filterButton === 'Alla'){
      return product;
    }
    else if(filterButton === "skafferi"){
      return product.category === "skafferi"
    }
    else if(filterButton === "frukt & grönt"){
      return product.category === "frukt & grönt"
    }
    else if(filterButton === "dryck"){
      return product.category === "dryck"
    }
    else if(filterButton === "godis & snacks"){
      return product.category === "godis & snacks"
    }
  });

  function filterHandler(string){
    setFilterButton(string)
  }

  return (
    <>
      <Routes>
        <Route path={'/'} element={<HomePage {...{filteredProducts, filterHandler}} />}/>
        <Route path={'/adminpage'} element={<AdminPage {...{products}}/>} />
      </Routes>
    </>
  )
}

export default App
