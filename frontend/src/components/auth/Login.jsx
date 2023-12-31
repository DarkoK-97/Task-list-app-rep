import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import classes from './AuthForm.module.scss';

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
        toast.success('Login successful!');
        navigate('/');
      } else {
        toast.error('Invalid email or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.authForm} onSubmit={login}>
        <label htmlFor="email">
          email:
          <input name="email" type="email" placeholder="email" required />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?
        {' '}
        <Link to="/auth/register">Register here.</Link>
      </p>
    </div>
  );
}

export default Login;
