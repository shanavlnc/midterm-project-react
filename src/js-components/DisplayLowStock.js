import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css-components/AppStyles.css'; 

const DisplayLowStock = ({ items }) => {
  const navigate = useNavigate(); // Initialize navigate
  const lowStockItems = items.filter(item => item.quantity <= 5); // Filter items with quantity of 5 and below

  return (
    <div className="container">
      <h2>Low Stock Items</h2>

      {lowStockItems.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th> {/* Added Category column */}
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td> {/* Displaying item category */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No low stock items.</p>
      )}
    </div>
  );
};

export default DisplayLowStock;
