import react, { useEffect, useState } from "react";

const dummydatas = [
  { name: "dummy1", price: 1 },
  { name: "dummy2", price: 2 },
  { name: "dummy3", price: 3 },
  { name: "dummy4", price: 4 },
  { name: "dummy5", price: 5 },
  { name: "dummy1", price: 1 },
  { name: "dummy2", price: 2 },
  { name: "dummy3", price: 3 },
  { name: "dummy4", price: 4 },
  { name: "dummy5", price: 5 },
];

const Cart = () => {
  return (
    <div className="CartContainer">
      test
      {dummydatas &&
        dummydatas.map((dummydata, index) => {
          return <div key={index} className="Item">
            
            
            {dummydata.name}
          <p>{dummydata.price}</p>
          
          
          </div>;
        })}
    </div>
  );
};
export default Cart;
