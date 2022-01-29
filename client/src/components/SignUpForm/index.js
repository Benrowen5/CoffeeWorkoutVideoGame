import React, { useState } from 'react';
import api from '../../utils/api';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const signUpFormSubmit = async event => {
      event.preventDefault();
      
    // console.log(formState);
    try {
        const response = await api.addUser(formState);
        
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
      email: '',
      password: '',
    });
  };

  return (
    <section>
          <h1>Sign Up</h1>
          <div>
            <form className='signup-form' onSubmit={signUpFormSubmit}>
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
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
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
            <Link className='login-link' to='/login'>Login</Link>
          </div>
    </section>
  );
};

export default SignupForm;