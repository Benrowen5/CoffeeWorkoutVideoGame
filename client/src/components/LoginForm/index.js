import React, { useState } from 'react';
import Auth from '../../utils/auth';
import api from '../../utils/api';

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
  
        let user = response.data.dbUser;
        let token = response.data.token;
        console.log(user);
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
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form onSubmit={loginFormSubmit}>
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
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;