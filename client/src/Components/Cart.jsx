import { useEffect, useState } from "react";

const Cart = (props) => {
  const { buying, setBuying, setShow, show, cart } = props;
  const [price, setPrice] = useState(0);

  const updateSessionStorage = (items) => {
    sessionStorage.setItem("Items", JSON.stringify(items));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    buying.forEach((item) => {
      totalPrice += item.price * item.amount;
    });
    setPrice(totalPrice);
  };

  const handleChange = (item, action) => {
    const updatedBuying = buying.map((cartItem) => {
      if (cartItem._id === item._id) {
        const updatedAmount =
          action === "+" ? cartItem.amount + 1 : cartItem.amount - 1;
        return { ...cartItem, amount: updatedAmount };
      }
      return cartItem;
    });

    setBuying(updatedBuying);
    calculateTotalPrice();
    updateSessionStorage(updatedBuying);
  };

  const handleRemove = (id) => {
    const updatedBuying = buying.filter((item) => item._id !== id);
    setBuying(updatedBuying);
    calculateTotalPrice();
    updateSessionStorage(updatedBuying);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [buying]);

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
        }}
      >
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
                if (buying.length > 0) {
                  checkoutLS(buying);
                } else {
                  alert("Din varukorg är tom");
                }
              }}
            >
              Till kassan
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
