import "../../App.css"
import React, { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '' });

  useEffect(() => {
    // Retrieve data from sessionStorage
    const storedItems = sessionStorage.getItem('Items');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setCartItems(parsedItems);

      //calculate price
      const totalPrice = parsedItems.reduce((acc, item) => acc + (item.price * item.amount), 0);
      setTotalPrice(totalPrice);
    }
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., submit to backend)
    console.log('Form submitted:', formData);
    // Optionally, you can redirect the user or perform other actions after form submission
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>Pris: {item.price} kr</p>
            <p>Antal: {item.amount}</p>
            {/* Add other product details */}
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
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
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
