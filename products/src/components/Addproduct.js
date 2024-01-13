import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate()
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });
    const [message, setMessage] = useState('');
    const accessToken = localStorage.getItem('accessToken');

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }

    const handleCreateProduct = () => {
        axios.post('http://localhost:3007/products/create', newProduct,{
            headers:{
                'authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                navigate('/allproducts')
                console.log(response.data);
                setMessage('Product added successfully!');
            })
            .catch(error => {
                console.error('Error creating:', error);
                setMessage('Error adding product. Please try again.');
            });
    }

    return (
        <div>
            <h2>Add products</h2>

            <form className=''>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange}className='form-control'/>

                <label>Description:</label>
                <input type="text" name="description" onChange={handleChange} className='form-control' />

                <label>Price:</label>
                <input type="text" name="price" onChange={handleChange} className='form-control'/>

                <button type="button" className='btn btn-primary mt-5' onClick={handleCreateProduct}>Create Product</button>
            </form>

            {message && <p className='text-success'>{message}</p>}
        </div>
    );
}

export default AddProduct;
