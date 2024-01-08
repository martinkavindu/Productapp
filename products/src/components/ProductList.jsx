import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProductList = () => {

const [products,setProducts] = useState([]);

useEffect(()=>{
    axios.get('http://localhost:3003/products/all')
    .then(response=>setProducts(response.data)
 )
 .catch(error =>console.error('error occures',error))
},[]);
  return (
    <div> 
        <h1> All products</h1>

        <ul>
            {
                products.map(products=>(
                    <li key={products.id} >{products.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ProductList