import React from 'react'
import { useState } from 'react'
import validation from './Registervalidation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const[values,setValues] = useState({
        name:'',
        email:'',
        password:''
    
    })

    console.log(values)
    const[errors,setErrors] = useState({})
    const handleInput = (e)=>{
        const newdata = { ...values}
        newdata[e.target.name] = e.target.value
        setValues(newdata)
     
     }
     const navigate = useNavigate()

     const handleSubmit = (e) =>{
        e.preventDefault()
        setErrors(validation(values));
        
        // axios.post('http://localhost:3003/register/user', values)
        // .then(res => {
        //     // Handle the response from the server
        // })
        // .catch(err => console.log(err));
          
          let config = {
            method: 'post',
            url: 'http://localhost:3003/register/user',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : values
          };
          
          console.log(config)
          axios.request(config)
          .then((response) => {
          navigate('/')
        ;
          })
          .catch((error) => {
            console.log(error);
          });
     }

  

  return (
    <div className='login'>
    <h3>Register account</h3>
<form action='' onSubmit={handleSubmit}>

<div class="form-group">
<label for="email">Email address:</label>
<input type="email" onChange={handleInput} name='email' value={values.email} class="form-control" id="email"/>
</div>
{errors.email  && <span className='text-danger'>{errors.email} </span>}
<div class="form-group">
<label for="email">Full Name:</label>
<input type="text" onChange={handleInput} name='name' value={values.name} class="form-control" id="email"/>
</div>
{errors.email  && <span className='text-danger'>{errors.name} </span>}
<div class="form-group">
<label for="pwd">Password:</label>
<input type="password" onChange={handleInput} value={values.password} name='password' class="form-control" id="pwd"/>
</div>
{errors.password && <span className='text-danger'> {errors.password}</span>}
<div className='mt-5'>
<button type="submit" class="btn btn-primary">Register</button>
</div>
<div>
<p>Already have account <a href=''>Login</a></p>
</div>
</form>

</div>
  )
}

export default Register