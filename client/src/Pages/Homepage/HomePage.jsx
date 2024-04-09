import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import useProductFetcher from '../../Components/ProductFilter';
import { useNavigate, useParams } from 'react-router-dom';

const HomePage = ({ categories }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { category } = params;
  const [filterButton, setFilterButton] = useState('Alla');

  useEffect(() => {
    setFilterButton(category || 'Alla');
  }, [category]);

  const { products } = useProductFetcher(filterButton, categories);

  function filterHandler(string) {
    setFilterButton(string);
    if (string === 'Alla') {
      navigate('/produkter/alla');
    } else {
    navigate(`/kategori/${string.toLowerCase()}`);
  }
}

  return (
    <>
      <Header />
      <div className="category-buttons">
        <button onClick={() => filterHandler("Alla")}>Alla Produkter</button>
        {categories.map((category, index) => (
          <button key={index} onClick={() => filterHandler(category.name)}>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </button>
        ))}
      </div>
      <Main products={products} />
      <Footer />
    </>
  );
};

export default HomePage;
