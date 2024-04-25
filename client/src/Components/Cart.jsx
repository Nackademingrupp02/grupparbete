import { useEffect, useState } from "react";

const Cart = (props) => {
  const { buying, setBuying, setShow, show, cart } = props;
  const [price, setPrice] = useState(0);
  const [cartItemAmount, setCartItemAmount] = useState(0);
  const updateSessionStorage = (items) => {
    sessionStorage.setItem("Items", JSON.stringify(items));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    let totalAmount = 0;
    buying.forEach((item) => {
      totalPrice += item.price * item.amount;
      totalAmount += item.amount;
    });
    setPrice(totalPrice);
    setCartItemAmount(totalAmount);
  };

  const handleChange = (item, action) => {
    const updatedBuying = buying.map((cartItem) => {
        if (cartItem._id === item._id) {
            let updatedAmount = action === "+" ? cartItem.amount + 1 : cartItem.amount - 1;
            updatedAmount = Math.max(updatedAmount, 1);
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
      id="cartHolder"
        className="cartHolder"
        onClick={() => {
          setShow(!show);
        }}>
        <span>{cartItemAmount} Varukorg</span>
      </div>

      {show && (
        <div className="CartContainer">
          <div className="cart_Top">
            <div>Varukorg({cartItemAmount} produkter)</div>{" "}
            <button
              className="closeCart"
              onClick={() => {
                setShow(false);
              }}>
              X
            </button>
          </div>
          <div className="itemConianer">
            {buying.map((bought, index) => {
              return (
                <div key={index} className="Item">
                  <div>
                    <p>{bought.name}</p>
                    <p>{bought.price.toFixed(2)} Kr</p>
                  </div>

                  <div className="bottomItem">
                    <div className="cartAmount">
                      <button onClick={() => handleChange(bought, "-")}>
                        -
                      </button>
                      <div className="cartQuantity">{bought.amount}</div>
                      <button onClick={() => handleChange(bought, "+")}>
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(bought._id)}
                      className="itemRemove_Cart">
                      ta bort
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cartBottom">
            <span>
              {" "}
              <p>Total</p> <p>{price.toFixed(2)} kr</p>{" "}
            </span>

            <div className="cartBtn">
              <button
                onClick={() => {
                  if (buying.length > 0) {
                    checkoutLS(buying);
                  } else {
                    alert("Din varukorg är tom");
                  }
                }}>
                Till kassan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
