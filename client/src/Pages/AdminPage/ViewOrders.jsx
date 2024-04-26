import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeneratePDF from './GeneratePDF.jsx';
import './AdminPage.css';
import HeaderAdmin from './HeaderAdmin.jsx';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0)
  const [selectedStatus, setSelectedStatus] = useState(null)

  axios.defaults.baseURL = "https://grupparbete.onrender.com";

  useEffect(() => {
    axios.get('/order/all')
      .then(response => {
        const sortedOrders = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(sortedOrders);
        setDisplayOrders(sortedOrders.slice(0, 10))
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`/order/update/${orderId}/status`, { status: newStatus });
      if (response.status === 200) {
        setOrders(prevOrders => {
          return prevOrders.map(order => {
            if (order._id === orderId) {
              return { ...order, status: newStatus };
            }
            return order;
          });
        });
      } else {
        console.error('Failed to update orderstatus.');
      }
    } catch (error) {
      console.error('Error updating orderstatus: ', error);
    }
  };
  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'Europe/Stockholm',
    };
    return new Date(date).toLocaleString('en-US', options);
  };
  function loadMoreOrders() {
    const sourceOrders = selectedStatus === null ? orders : displayOrders;
  
    const additionalOrders = sourceOrders.slice(orderCount, orderCount + 10);
    if (additionalOrders.length === 0) {
      return;
    }
    if (selectedStatus === null) {
      setDisplayOrders(prevOrders => [...prevOrders, ...additionalOrders]);
    } else {
      const filteredAdditionalOrders = additionalOrders.filter(order => order.status === selectedStatus);
      setDisplayOrders(prevOrders => [...prevOrders, ...filteredAdditionalOrders]);
    }
    setOrderCount(prevCount => prevCount + 10);
  }

  const filterOrders = (status) => {
    setSelectedStatus(status === 'null' ? null : status);
    setOrderCount(0);
    if (status === null || status === 'null') {
      setDisplayOrders(orders.slice(0, 10));
    } else {
      const filteredOrders = orders.filter(order => order.status === status);
      setDisplayOrders(filteredOrders.slice(0, 10));
    }
  }

  return (
    <>
    <HeaderAdmin isProductPage={false}/>
    <div className="admin-page">
    <div className="filter-buttons">
  <select value={selectedStatus} onChange={(e) => filterOrders(e.target.value)}>
    <option value="null">Alla</option>
    <option value="Väntar">Väntande</option>
    <option value="Packad">Packade</option>
    <option value="Levererad">Levererade</option>
    <option value="Makulerad">Makulerade</option>
    <option value="Betald">Betald</option>
  </select>
</div>

      <table>
        <thead>
          <tr>
            <th>Namn</th>
            <th>Adress</th>
            <th>Produkter</th>
            <th>Status</th>
            <th>Skapad</th>
            <th>Faktura</th>
          </tr>
        </thead>
        <tbody>
          {displayOrders.map(order => (
            <tr key={order.id}>
              <td>{order.fullName}</td>
              <td>{order.address}</td>
              <td>
                <ul>
                  {order.products.map(product => (
                    <li key={product._id}>{product.name} antal: {product.amount}</li>
                  ))}
                </ul>
              </td>
              <td>
                <select value={order.status} onChange={(e) => updateOrderStatus(order._id, e.target.value)}>
                  <option value="Väntar">Väntar</option>
                  <option value="Packad">Packad</option>
                  <option value="Levererad">Levererad</option>
                  <option value="Makulerad">Makulerad</option>
                  <option value="Betald">Betald</option>
                </select>
                </td>
                <td>{formatDate(order.createdAt)}</td>
                <td><GeneratePDF order={order} />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      {orderCount < orders.length && (
        <button onClick={loadMoreOrders}>Ladda mer ordrar</button>
      )}
    </div>
    </>
  );
};

export default AdminPage;
