import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddProduct from './components/Addproduct';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import UpdateProduct from './components/UpdateProduct';
import './App.css'

const isAuthenticated = () => localStorage.getItem('accessToken') !== null;

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allproducts" element={<PrivateRoute element={<ProductList />} />} />
          <Route path="/addproduct" element={<PrivateRoute element={<AddProduct />} />} />
          <Route path="/update/:productId" element={<PrivateRoute element={<UpdateProduct />} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
