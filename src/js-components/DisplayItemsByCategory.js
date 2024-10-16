import React, { useState } from 'react';

const DisplayItemsByCategory = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to show all items

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="container">
      <h2>Items by Category</h2>
      
      <select onChange={handleCategoryChange} value={selectedCategory} className="select">
        <option value="All">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      
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
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No items found in this category.</td>
            </tr>
          )}
        </tbody>
      </table>
      
 
    </div>
  );
};

export default DisplayItemsByCategory;
