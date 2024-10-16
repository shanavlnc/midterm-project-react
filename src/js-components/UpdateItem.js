import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css-components/AppStyles.css'; 

const UpdateItem = ({ updateItem, items }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity'); 
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleUpdateItem = (e) => {
    e.preventDefault();

    // Negative validation
    if (newValue < 0) {
      setMessage('New value cannot be negative!');
      return;
    }

    // Decimal validation
    if (!Number.isInteger(Number(newValue))) {
      setMessage('New value must be a whole number!');
      return;
    }

    // Find the item based on ID
    const targetItem = items.find(item => item.id === id);

    if (targetItem) {
      // Copy previous value based on "Field", used later for message
      const previous = targetItem[field.toLowerCase()];
      const itemName = targetItem.name; // Assuming each item has a 'name' property

      // Update value
      const result = updateItem(id, field, Number(newValue)); // Convert newValue to number
      if (result) {
        // Display submission/edit message
        setMessage(`Item ${itemName} ${field} is updated from ${previous} to ${newValue}`);
      } else {
        setMessage('Update failed!');
      }
    } else {
      setMessage('Item not found!');
    }

    // Reset 
    setId('');
    setNewValue('');
  };

  return (
    <div className="container">
      <h2>Update Item</h2>
      <form onSubmit={handleUpdateItem} className="form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
          className="input"
        />
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="select"
        >
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="New Value"
          required
          className="input"
        />
        <button type="submit" className="button">
          Update Item
        </button>
      </form>
      {message && <p className="message">{message}</p>}

    </div>
  );
};

export default UpdateItem;
