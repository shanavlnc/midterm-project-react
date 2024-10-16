import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css-components/AppStyles.css'; 

const AddItem = ({ addItem, existingItems = [] }) => { 
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Clothing');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleAddItem = (e) => {
        e.preventDefault();

        // Validations
        if (!id || !name.trim() || quantity < 0 || price < 0) {
            setMessage('Please provide valid inputs!');
            return;
        }

        // Check if item already exists
        const itemExists = existingItems.some(item => item.id === id);

        if (itemExists) {
            setMessage(`Item with ID ${id} has already been added.`);
            return;
        }

        // Add item
        const newItem = {
            id,
            name: name.trim(), // Trim whitespace from name
            quantity: parseInt(quantity, 10),
            price: parseFloat(price),
            category,
        };

        addItem(newItem);
        setMessage(`Item ${newItem.name} added successfully!`); // Use trimmed name in message
        // Reset fields
        setId('');
        setName('');
        setQuantity('');
        setPrice('');
        setCategory('Clothing');
    };

    return (
        <div className="container">
            <h2>Add New Item</h2>
            <form onSubmit={handleAddItem} className="form">
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Item ID"
                    required
                    className="input"
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Item Name"
                    required
                    className="input"
                />
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Quantity"
                    required
                    className="input"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    required
                    className="input"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="select"
                >
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <button type="submit" className="button">
                    Add Item
                </button>
  
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default AddItem;
