import React from 'react';
import styled from 'styled-components';
import cs from 'classnames';
import './SideDrawer.css'


const SideDrawer = (props) => {
  const display = cs('side-drawer',{'open':props.show});
  return (
    <nav className={display}>
      <ul>
        <li><a href='/'>Login</a></li>
        <li><a href='/'>Signup</a></li>
      </ul>
    </nav>
  );
};

export default SideDrawer;