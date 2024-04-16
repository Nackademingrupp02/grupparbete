import { useEffect, useState } from "react";

const Cart = () => {
  let [Quantity, setQuantity] = useState(2);
  let [endPrice, setEndPrice] = useState(0);

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

  useEffect(() => {
    dummydatas.map(async(data) => {
      console.log(data.price);
      return  setEndPrice(endPrice+ await parseInt(data.price))
    });
    console.log("end price", endPrice);

  }, 2);

  //Problem- all having the same Quantity
  return (
    <div className="CartContainer">
      {dummydatas &&
        dummydatas.map((dummydata, index) => {
          return (
            <div key={index} className="Item">
              {dummydata.name}
              <p>{dummydata.price}</p>
              <button onClick={() => setQuantity(Quantity - 1)}>-</button>
              <span>{Quantity}</span>
              <button onClick={() => setQuantity(Quantity + 1)}>+</button>
            </div>
          );
        })}

      <br />

      <p>Pris</p>
    </div>
  );
};
export default Cart;
