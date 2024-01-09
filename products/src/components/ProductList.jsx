import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProductList = () => {

const [products,setProducts] = useState([]);

useEffect(()=>{

async function requestData() {
    const request  = await  axios.get('http://localhost:3003/products/read')
    console.log(request.data)

    setProducts(request.data);
    return request;
}
   
  requestData()  
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