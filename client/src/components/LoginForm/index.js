import React, { useState } from 'react';
import Auth from '../../utils/auth';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { TextField,
  IconButton,
  InputAdornment,
  FormControl, 
  Typography} from '@mui/material';

const LoginForm = (props) => {
  const [formState, setFormState] = useState(
    { username: '', 
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setFormState({
      ...formState,
      [prop]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setFormState({
      ...formState,
      showPassword: !formState.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        showPassword: false,
    });
  };

  return (
    <section>
        <h1 className='title'>Login</h1>
        
          <div>
            <form className={styles.form} onSubmit={loginFormSubmit}>
              <FormControl>
                <TextField
                  id='user-email'
                  label='Email'
                  InputLabelProps={{style: {fontSize:13.5}}}
                  OutlinedInputProps={{style: {fontSize:150}}}
                  type='text'
                  value={formState.email}
                  onChange={handleChange("email")}
                  fullWidth={true}
                />
              </FormControl>
              <FormControl>
                <TextField
                id='user-password'
                label="Password"
                InputLabelProps={{style: {fontSize:13.5}}}
                type={formState.showPassword ? 'text' : 'password'}
                value={formState.password}
                onChange={handleChange("password")}
                fullWidth={true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {formState.showPassword ? 
                        <Typography>hide</Typography> : 
                        <Typography>show</Typography>}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                />
              </FormControl>
              <button type='submit'>
                Submit
              </button>
            </form>
            <Link className={styles.link} to='/signup'>Sign Up instead</Link>
          </div>
    </section>
  );
};

export default LoginForm;