import React from 'react'
import { useState } from 'react'
import validation from './Registervalidation'
const Register = () => {
    const[values,setValues ] =useState({
        name:'',
        email:'',
        password:''
    
    }
    )
    const[errors,setErrors] = useState({})
    const handleInput = (e)=>{
        setValues(prev=>({...prev,[e.target.name]:[e.target.value]}))
     
     }

     const handleSubmit = (e) =>{
        e.preventDefault()
        setErrors(validation(values));
        
     }

  return (
    <div className='login'>
    <h3>Welcome back! Login</h3>
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
{errors.email  && <span className='text-danger'>{errors.email} </span>}
<div class="form-group">
<label for="pwd">Password:</label>
<input type="password" onChange={handleInput} value={values.password} name='password' class="form-control" id="pwd"/>
</div>
{errors.password && <span className='text-danger'> {errors.password}</span>}
<div className='mt-5'>
<button type="submit" class="btn btn-primary">Login</button>
</div>
<div>
<p>Dont have account <a href=''>Register</a></p>
</div>
</form>

</div>
  )
}

export default Register