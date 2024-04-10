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
        <ErrorMessage message={"No products found."} />
      </main>
    );
  } else {
    return (
      <main className="main">
        <Sp1 />
        <div>
          <ul>
            {products.map((product, index) => (
              <div key={index}>
                <Product {...{ product }} />
              </div>
            ))}
          </ul>
        </div>
      </main>
    );
  }
};

export default Main;
