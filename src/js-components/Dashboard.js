import React from 'react';
import '../css-components/DashboardStyles.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2>Welcome to the Inventory Management System</h2>
        <h3>System Overview</h3>
        <p>This system allows you to manage inventory efficiently by adding, updating, removing, and viewing items.</p>
        
        <h3>Functions</h3>
        <ul>
          <li><strong>Add Item:</strong> Add new items to the inventory.</li>
          <li><strong>Display Items:</strong> View all items in the inventory.</li>
          <li><strong>Items by Category:</strong> Filter items based on categories.</li>
          <li><strong>Low Stock:</strong> Identify items that are low in stock.</li>
          <li><strong>Remove Item:</strong> Delete items from the inventory.</li>
          <li><strong>Search Item:</strong> Find specific items in the inventory.</li>
          <li><strong>Sort Items:</strong> Organize items based on various criteria.</li>
          <li><strong>Update Item:</strong> Modify existing items.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
