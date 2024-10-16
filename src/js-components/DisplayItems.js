import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css-components/AppStyles.css'; 

const DisplayItems = ({ items }) => {
  const navigate = useNavigate(); 

  return (
    <div className="container">
      <h2>All Items in Inventory</h2>

      {items.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items available in the inventory.</p>
      )}
    </div>
  );
};

export default DisplayItems;
