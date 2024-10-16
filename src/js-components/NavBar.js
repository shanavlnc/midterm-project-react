import React from 'react';
import { Link } from 'react-router-dom';
import '../css-components/NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Inventory Management</h2>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add">Add Item</Link></li>
        <li><Link to="/display">Display Items</Link></li>
        <li><Link to="/category">Items by Category</Link></li>
        <li><Link to="/low-stock">Low Stock</Link></li>
        <li><Link to="/remove">Remove Item</Link></li>
        <li><Link to="/search">Search Item</Link></li>
        <li><Link to="/sort">Sort Items</Link></li>
        <li><Link to="/update">Update Item</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
