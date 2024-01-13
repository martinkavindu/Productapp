import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: "",
    // Add other fields as needed
  });

  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    description: '',
    price: "",
    // Add other fields as needed
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3007/products/read/${productId}`, {
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        });

        setProduct(response.data);
        setUpdatedProduct({
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          // Set other fields as needed
        });
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleInputChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://localhost:3007/products/update/${productId}`,
        updatedProduct,
        {
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Show success toast
      toast.success('Product updated successfully');

      // Navigate back to all products
      navigate('/allproducts');
    } catch (error) {
      console.log('Error updating product:', error);
      // Show error toast
      toast.error('Error updating product');
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleFormSubmit} >
        <div>
          <label>Name:</label>
          <input
          className='form-control'
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
          className='form-control'
            name="description"
            value={updatedProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
          className='form-control'
            type="text"
            name="price"
            value={updatedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='btn btn-primary mt-5'>Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
