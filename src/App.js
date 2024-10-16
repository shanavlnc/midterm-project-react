import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItem from './js-components/AddItem';
import Dashboard from './js-components/Dashboard';
import DisplayItems from './js-components/DisplayItems';
import DisplayItemsByCategory from './js-components/DisplayItemsByCategory';
import DisplayLowStock from './js-components/DisplayLowStock';
import RemoveItem from './js-components/RemoveItem';
import SearchItem from './js-components/SearchItem';
import SortItems from './js-components/SortItems';
import UpdateItem from './js-components/UpdateItem';
import NavBar from './js-components/NavBar';

const App = () => {
    const [items, setItems] = useState([]); // State for items in inventory

    const addItem = (newItem) => {
        const existingItem = items.find(item => item.id === newItem.id);
        if (!existingItem) {
            setItems([...items, newItem]);
        } else {
            console.warn("Item with this ID already exists");
        }
    };

    const removeItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        return updatedItems.length < items.length; // Return true if an item was removed
    };

    const updateItem = (id, field, newValue) => {
        const updatedItems = items.map(item => 
            item.id === id ? { ...item, [field]: newValue } : item
        );
        setItems(updatedItems);
        return true; // Return true if update was successful
    };

    return (
        <Router>
            <NavBar /> {}
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/add" element={<AddItem addItem={addItem} existingItems={items} />} />
                    <Route path="/display" element={<DisplayItems items={items} />} />
                    <Route path="/category" element={<DisplayItemsByCategory items={items} />} />
                    <Route path="/low-stock" element={<DisplayLowStock items={items} />} />
                    <Route path="/remove" element={<RemoveItem removeItem={removeItem} items={items} />} />
                    <Route path="/search" element={<SearchItem items={items} />} />
                    <Route path="/sort" element={<SortItems items={items} />} />
                    <Route path="/update" element={<UpdateItem updateItem={updateItem} items={items} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
