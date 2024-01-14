import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddProduct from './components/Addproduct';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import UpdateProduct from './components/UpdateProduct';
import './App.css';
import Home from './components/Home';

const App = () => {
  const isAuthenticated = localStorage.getItem('accessToken') !== null;

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/allproducts"
            element={isAuthenticated ? <ProductList /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/addproduct"
            element={isAuthenticated ? <AddProduct /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/update/:productId"
            element={isAuthenticated ? <UpdateProduct /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
