import React from 'react';
import styled from 'styled-components';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
import { Link } from 'react-router-dom';

const Toolbar = styled.header`
  position: fixed;
  width: 100%;
  background-color: #6083ad;
  height: 59px;
  top: 0;
  left: 0;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0.1rem;
`;

const Logo = styled.div`
  margin-left: 1rem;

  a {
    color: #FFF;
    text-decoration: none;
    font-size: 1.5rem;
  }
  @media (min-with: 769px) {
    margin-left: 0;
  }
`;

const List = styled.div`
  color: #FFF;
  text-decoration: none;

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
  }

  li {
    padding: 0 0.5rem;
  }

  a:hover,
  a:active {
    color: black;
  }

  @media(max-width: 768px) {
    display: none;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const ToggleButton = styled.div`

  @media(min-width: 768px) {
    display: none;
  }

`;

const LinkStyle = {color: '#FFF', textDecoration: 'none', marginRight: '1rem'};

const Navbar = (props) => {
  return (
    <Toolbar>
      <Navigation>
        <ToggleButton>
          <DrawerToggleButton click={props.drawerToggleClickHandler} />
        </ToggleButton>
        <Logo>
          <a href="/">Logo</a>
        </Logo>
        <Spacer />
        <List>
          <ul>
            <li>
              <Link style={LinkStyle} to='/carrusel'>
                Carrusel
              </Link>
              <Link style={LinkStyle} to='/users'>
                Users
              </Link>
              <Link style={LinkStyle} to='/login'>
                Login
              </Link>
              <Link style={LinkStyle} to='/signup'>
                Signup
              </Link>
            </li>
          </ul>
        </List>
      </Navigation>
    </Toolbar>
  );
};
          
export default Navbar;