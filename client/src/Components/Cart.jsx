import { useEffect, useState } from "react";

const Cart = (props) => {
  const { buying, setBuying, setCheckout, setShow, show , cart} = props;
  const [price, setPrice] = useState(0);

  //adding sum of the carts item
  const handlePrice = () => {
    let ans = 0;
    buying.map((item) => {
      ans += item.price * item.amount;
    });
    setPrice(ans);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    buying.forEach((data, index) => {
      if (data._id === item._id) {
        console.log("its working");
        return (ind = index);
      }
    });

    const tempArr = buying;
    if (d === "+") {
      console.log(tempArr);
      console.log("add one amount");
      tempArr[ind].amount += 1;
    } else if (d === "-") {
      console.log(tempArr);
      console.log("remove one amount");

      tempArr[ind].amount -= 1;
    } else {
      console.log("Something went wrong in handlechange(cart)");
    }

    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setBuying([...tempArr]);
  };

  //remove cart item
  const handleRemove = (id) => {
    const arr = buying.filter((item) => item._id !== id);
    setBuying(arr);
    // handlePrice()
  };
  useEffect(() => {
    handlePrice();
  });
  //cart to checkout useing localstorage

  function checkoutLS(buying) {
    sessionStorage.setItem("Items", JSON.stringify(buying));
    const storedItems = sessionStorage.getItem("Items");
    console.log("Stored Items: ", storedItems);
    window.location.href = "/checkout";
  }

  return (
    <div>
      <div
        className="cartHolder"
        onClick={() => {
          setShow(!show);
        }}>
        <span className="cartItems">{cart}</span>
        <span className="CartIcon"> Varukorg </span>
      </div>

      {show && (
        <div className="CartContainer">
          <p>{buying.length}</p>
          {buying.map((bought, index) => {
            return (
              <div key={index} className="Item">
                <p>{bought.name}</p>
                <p>{bought.price.toFixed(2)} Kr</p>

                <button onClick={() => handleChange(bought, "-")}>-</button>
                <span>Antal: {bought.amount}</span>
                <button onClick={() => handleChange(bought, "+")}>+</button>

                <button onClick={() => handleRemove(bought._id)}>
                  ta bort
                </button>
              </div>
            );
          })}

          <span>Total pris av din varukorg </span>
          <span>pris: {price.toFixed(2)} kr</span>
          <div className="cartBtn">
            <button
            
              
              onClick={() => {
                if(buying.length > 0){
                  return checkoutLS(buying)
                }
                else{
                  alert('Din varukorg är tom')
                }
              }}>
              Till kassan
            </button>
            <button
           
              onClick={() => {
                setShow(false);
              }}>
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
