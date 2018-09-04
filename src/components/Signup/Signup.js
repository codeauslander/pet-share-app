import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <form className='signup'>
      <ul className="flex-outer">
        <li>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter a password" />
        </li>
        <li>
          <label htmlFor="confirmation">Confirmation</label>
          <input type="password" id="confirmation" placeholder="Enter your password again" />
        </li>
        <li>
          <fieldset>
            <legend>User</legend>
            <ul className="flex-inner">
            
              <li>
                <input type="radio" id="sitter" />
                <label htmlFor="sitter">Sitter</label>
              </li>
              <li>
                <input type="radio" id="owner" />
                <label htmlFor="owner">Owner</label>
              </li>
            </ul>
          </fieldset>
        </li>
        <li>
          <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  );
};

export default Signup;
