import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeneratePDF from './GeneratePDF.jsx';
import './AdminPage.css';
import HeaderAdmin from './HeaderAdmin.jsx';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  axios.defaults.baseURL = "https://grupparbete.onrender.com";

  useEffect(() => {
    axios.get('/order/all')
      .then(response => {
        setOrders(response.data);
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

  return (
    <>
    <HeaderAdmin/>
    <div className="admin-page">

      <table>
        <thead>
          <tr>
            <th>Namn</th>
            <th>Adress</th>
            <th>Produkter</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
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
                  <option value="waiting">Waiting</option>
                  <option value="packed">Packed</option>
                  <option value="delivered">Delivered</option>
                  <option value="declined">Declined</option>
                </select>
                </td>
                <td><GeneratePDF order={order} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminPage;
