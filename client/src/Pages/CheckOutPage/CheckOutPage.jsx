import "../../App.css"
import React, { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', phone: '', email: '' });

  useEffect(() => {
    const storedItems = sessionStorage.getItem('Items');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setCartItems(parsedItems);

      const totalPrice = parsedItems.reduce((acc, item) => acc + (item.price * item.amount), 0);
      setTotalPrice(totalPrice);
    }
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const productsData = cartItems.map(item => ({
        name: item.name,
        amount : item.amount,
        price: item.price
      }));

      const orderData = {
        products: productsData,
        price: totalPrice,
        fullName: formData.name,
        address: formData.address,
        phone: formData.phone,
        email: formData.email
      };
  
      console.log('Order data:', orderData);

      const response = await fetch('https://grupparbete.onrender.com/order/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      window.location.href = '/confirmation';

      console.log('Order submitted successfully');
    } catch (error) {
      console.error('Error submitting order:', error.message);
    }
  };
  return (
    <div>
      <h1>Checkout Page</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <img
                src={item.picture}
                style={{
                  maxwidth: "10rem",
                  maxHeight: "10rem",
                  objectFit: "cover",
                }}
              />
            <p>Pris: {item.price}</p>
            <p>Antal: {item.amount}</p>
            <p>Total: {item.price * item.amount} kr</p>
          </li>
        ))}
      </ul>
      <h2>Totala Pris: {totalPrice}</h2>
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Fortsätt</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength={50}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Adress:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              maxLength={50}
              required
            />
          </div>
            <div>
            <label htmlFor="phone">Telefon:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              />

          </div>
            <div>
            <label htmlFor="email">E-post:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
export default CheckoutPage;
