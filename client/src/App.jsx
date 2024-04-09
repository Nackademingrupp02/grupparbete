import './App.css'
import HomePage from './Pages/Homepage/HomePage'
import AdminPage from './Pages/AdminPage/AdminPage'
import useProductFetcher from './Components/ProductFilter'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'


function App() {
  const [categories, setCategories] = useState([]);
  const [filterButton, setFilterButton] = useState('Alla');
  const [products, setProducts] = useState([])
  const filterProducts = useProductFetcher(filterButton);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://grupparbete.onrender.com/category/all");
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories: ', error);
      }
    };
    fetchCategories();
  }, []);

  function filterHandler(string){
    setFilterButton(string)
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://grupparbete.onrender.com/product/all");
      const json = await response.json();
      setProducts(json);
    }
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage {...{filterHandler, categories, filterProducts}} />} />
        <Route path={'/adminpage'} element={<AdminPage {...{products}}/>} />
        <Route path="kategori/:category" element={<HomePage {...{filterHandler, categories, filterProducts}}/>} />
        <Route path="/produkter/alla" element={<HomePage filterProducts={filterProducts} categories={categories} filterHandler={() => filterHandler('Alla')} />} />
      </Routes>
    </>
  );
}

export default App;
