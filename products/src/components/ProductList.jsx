import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useNavigate } from 'react-router-dom';
import HeaderSection from './Headersection';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3007/products/read', {
        headers: {
          'authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  const handleEdit = (productId) => {
    navigate(`/update/${productId}`);
  
    console.log(`Edit product with id ${productId}`);
  };

  const handleDelete = async (productId) => {
    // Show SweetAlert confirmation dialog
    const result = await Swal.fire({
      title: 'Are you sure to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3007/products/delete/${productId}`, {
          headers: {
            'authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        // After successful deletion, fetch the updated product list
        fetchData();

        // Show toast message for successful deletion
        toast.success('Data deleted successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.error(`Error deleting product with id ${productId}:`, error);

        // Show toast message for deletion failure
        toast.error('Error deleting data. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  const handleLogout = () =>{
    localStorage.removeItem('accessToken');
    navigate('/')
  }
  return (
    <div>
      <HeaderSection/>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p onClick={handleLogout} className='btn btn-success'> Logout</p>
          <h1>All products</h1>
          <a href='/addproduct'><button className='btn btn-primary'>Add new product</button></a>
          <table className='table table-bordered mt-5'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className='btn btn-warning' onClick={() => handleEdit(product.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default ProductList;
