import React, { useState } from 'react';
import api from '../../utils/api';
import Auth from '../../utils/auth';

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
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Signup</h4>
          <div className='card-body'>
            <form onSubmit={signUpFormSubmit}>
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

export default SignupForm;