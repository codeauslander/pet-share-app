import React from 'react';
import cs from 'classnames';
import './SideDrawer.css';
import { Link } from 'react-router-dom';


const SideDrawer = (props) => {
  const display = cs('side-drawer',{'open':props.show});
  // const LinkStyle = {color: '#FFF', textDecoration: 'none', marginRight: '1rem'};

  return (
    <nav className={display}>
      <ul>
        <Link className='side-drawer-link' to='/carrusel'>
            Carrusel
        </Link>
  
        <Link className='side-drawer-link' to='/users'>
            Users
        </Link>

        <Link className='side-drawer-link' to='/login'>
            Login
        </Link>
   
        <Link className='side-drawer-link' to='/signup'>
            Signup
        </Link>
      </ul>
    </nav>
  );
};

export default SideDrawer;