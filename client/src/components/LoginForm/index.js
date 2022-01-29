import React, { useState } from 'react';
import Auth from '../../utils/auth';
import api from '../../utils/api';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const loginFormSubmit = async event => {
    event.preventDefault();
    
    // console.log(formState);
    try {
        const response = await api.loginUser(formState);
        console.log(response);
        
        if (response.status < 200 || response.status > 299 ) {
          throw new Error('something went wrong!');
        }
  
        let token = response.data.token;
        Auth.login(token);
    } catch (err) {
        console.error(err);
    }
  
    setFormState({
        username: '',
        password: '',
    });
  };

  return (
    <section>
          <h1>Login</h1>
          <div>
            <form className='signup-form' onSubmit={loginFormSubmit}>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button type='submit'>
                Submit
              </button>
            </form>
            <Link className='signup-link' to='/signup'>Sign Up</Link>
          </div>
    </section>
  );
};

export default LoginForm;