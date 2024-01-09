import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }

    const handleCreateProduct = () => {
        axios.post('http://localhost:3003/products/create', newProduct)
            .then(response => {
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

            <form>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} />

                <label>Description:</label>
                <input type="text" name="description" onChange={handleChange} />

                <label>Price:</label>
                <input type="text" name="price" onChange={handleChange} />

                <button type="button" onClick={handleCreateProduct}>Create Product</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default AddProduct;
