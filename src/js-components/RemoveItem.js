import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css-components/AppStyles.css'; 

const RemoveItem = ({ removeItem, items }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRemoveItem = (e) => {
    e.preventDefault();

    // Find the item based on the ID
    const targetItem = items.find(item => item.id === id);

    if (targetItem) {
      const itemName = targetItem.name; // Assuming each item has a 'name' property

      // Attempt to remove the item
      const result = removeItem(id);
      if (result) {
        setMessage(`Item ${itemName} has been removed from the inventory.`);
      } else {
        setMessage('Remove operation failed!');
      }
    } else {
      setMessage('Item not found!');
    }

    // Reset 
    setId('');
  };

  return (
    <div className="container">
      <h2>Remove Item</h2>
      <form onSubmit={handleRemoveItem} className="form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
          className="input"
        />
        <button type="submit" className="button">
          Remove Item
        </button>
      </form>
      {message && <p className="message">{message}</p>}


    </div>
  );
};

export default RemoveItem;
