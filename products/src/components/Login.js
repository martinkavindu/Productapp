import React, { useState } from 'react';
import validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        navigate('/allproducts');
      }

      console.log(JSON.stringify(response.data));
    } catch (error) {
      setLoginMessage('Invalid email or password');
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <h3>Welcome back! Login</h3>
      <form action='' onSubmit={handleSubmit}>
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
        <div>
          <p>Don't have an account? <a href='/register'>Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
