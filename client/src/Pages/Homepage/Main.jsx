import React from "react";
import Product from "../../Components/Product.jsx";
import ErrorMessage from "../../Components/NoProductError.jsx";
import Sp1 from "../../Components/Sp.jsx";

const Main = ({ products }) => {
  if (!Array.isArray(products)) {
    return (
      <main className="main">
        <ErrorMessage message="Failed to fetch products." />
      </main>
    );
  } else if (products.length === 0) {
    return (
      <main className="main">
        <ErrorMessage message="No products found." />
      </main>
    );
  } else {
    return (
      
      <main className="main">
        <Sp1/>
        <div className="products">
          {products.map((product, index) => (
            <div key={index} className="product">
              <Product
                {...{
                  product: {
                    ...product,
                    name:
                      product.name.charAt(0).toUpperCase() +
                      product.name.slice(1),
                    category:
                      product.category.charAt(0).toUpperCase() +
                      product.category.slice(1),
                  },
                }}
              />
            </div>
          ))}
        </div>
      </main>
    );
  }
};

export default Main;
