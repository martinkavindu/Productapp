import React, { useState } from 'react'
import axios from 'axios'
const Addproduct = () => {

    const [newProduct,setNewproduct] = useState({name:'',description:'',price:''})
    
    const handleChange = (e) =>{
        setNewproduct({...newProduct,[e.target.name]:e.target.value});

    }

    const handleCreateProduct = () =>{
        axios.get('http://localhost:3003/products/create',newProduct)
        .then(response =>console.log(response.data))
        .catch(error => console.error('Error creating:',error))
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
       
    </div>
  )
}

export default Addproduct