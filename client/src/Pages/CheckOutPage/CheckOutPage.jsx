import './CheckOutStyling.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = (props) => {
  const { setShowCart } = props;
  setShowCart(false);

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
        amount: item.amount,
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

      sessionStorage.removeItem('Items');

      window.location.href = '/confirmation';

      console.log('Order submitted successfully');
    } catch (error) {
      console.error('Error submitting order:', error.message);
    }
  };

  return (
    <div className="checkout-container">
      <h1>Din kassa</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Bild</th>
            <th>Pris</th>
            <th>Antal</th>
            <th>Totalt</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>
                <h2 className='productName'>{item.name}</h2>
                </td>
                <td>
                <img src={item.picture} alt={item.name} className="product-image" />
              </td>
              <td>{item.price.toFixed(2)} kr</td>
              <td>{item.amount}</td>
              <td>{(item.price * item.amount).toFixed(2)} kr</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Totala Pris: {totalPrice.toFixed(2)} kr</h2>
      <Link to="/"><button className="btn btn-secondary">Tillbaka</button></Link>
      {!showForm ? (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>Fortsätt</button>
      ) : (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="name" className="label">Namn:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength={50}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label">Adress:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              maxLength={50}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="label">Telefon:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">E-post:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <p>Levereras till dörren och betalas i efterhand med Swish/kontant vid leverans.</p>
          <br/>
          <button type="submit" className="btn btn-primary">Slutför köp</button>
          <div>
            <br></br>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
