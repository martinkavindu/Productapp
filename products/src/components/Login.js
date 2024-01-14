import React, { useState } from 'react';
import validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HeaderSection from './Headersection';
import image from "../assesets/fruits.jpg"
import '../styles/login.css'
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [loginMessage, setLoginMessage] = useState('');
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(credentials));

    try {
      const response = await axios.post('http://localhost:3007/user/login', credentials, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { message, token } = response.data;

      setLoginMessage(message);

      if (token) {
        localStorage.setItem('accessToken', token);
        navigate('/');
      }

      console.log(JSON.stringify(response.data));
    } catch (error) {
      setLoginMessage('Invalid email or password');
      console.log(error);
    }
  };

  return (
    <>
    <HeaderSection/>
   
    <div className='wrapper'>
      <div className='container main'>
        <div className='row'>
          <div className='col-md-6 side-image'>
<img src={image} alt='' />

          </div>
    <div className='col-md-6 right'>
     
   

    <form action='' onSubmit={handleSubmit}>
    <div className='mb-5'>
      <h2>Login to continue</h2>
      </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" onChange={handleInput} name='email' value={credentials.email} className="form-control" id="email" />
        </div>
        {errors.email && <span className='text-danger'>{errors.email} </span>}
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" onChange={handleInput} name='password' value={credentials.password} className="form-control" id="pwd" />
        </div>
        {errors.password && <span className='text-danger'> {errors.password}</span>}
        <div className='mt-5'>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        {loginMessage && <p className={loginMessage.includes('success') ? 'text-success' : 'text-danger'}>{loginMessage}</p>}
        <div className='signin'>
          <p>Don't have an account? <a href='/register'>Register</a></p>
        </div>
      </form>
    </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Login;
