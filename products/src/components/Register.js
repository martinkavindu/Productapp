import React, { useState } from 'react';
import validation from './Registervalidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) => {
        const newdata = { ...values };
        newdata[e.target.name] = e.target.value;
        setValues(newdata);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));

        let config = {
            method: 'post',
            url: 'http://localhost:3003/register/user',
            headers: {
                'Content-Type': 'application/json'
            },
            data: values
        };

        axios
            .request(config)
            .then((response) => {
                navigate('/');
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    // Check if the error response has a specific structure from your server
                    const serverError = error.response.data.error || error.response.data.message;
                    if (serverError) {
                        setErrors({ server: serverError });
                    } else {
                        console.error(error);
                    }
                } else {
                    console.error(error);
                }
            });
    };

    return (
        <div className="login">
            <h3>Register account</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" onChange={handleInput} name="email" value={values.email} className="form-control" id="email" />
                </div>
                {errors.email && <span className="text-danger">{errors.email} </span>}
                <div className="form-group">
                    <label htmlFor="email">Full Name:</label>
                    <input type="text" onChange={handleInput} name="name" value={values.name} className="form-control" id="email" />
                </div>
                {errors.name && <span className="text-danger">{errors.name} </span>}
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" onChange={handleInput} value={values.password} name="password" className="form-control" id="pwd" />
                </div>
                {errors.password && <span className="text-danger"> {errors.password}</span>}
                {errors.server && <span className="text-danger"> {errors.server}</span>}
                <div className="mt-5">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </div>
                <div>
                    <p>
                        Already have an account <a href="">Login</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
