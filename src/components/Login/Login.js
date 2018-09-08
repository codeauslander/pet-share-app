import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <form className='login'>
      <ul className='flex-outer-login'>
        <li>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email"/>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' placeholder='Enter your password'/>
        </li>
        <li>
          <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  );
};

export default Login;