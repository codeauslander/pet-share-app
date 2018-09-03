import React from 'react';
import styled from 'styled-components';

const Toolbar = styled.header`
  position: fixed;
  width: 100%;
  background-color: #f8f8f8;
  height: 54px;
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
    color: #999;
    text-decoration: none;
    font-size: 1.5rem;
  }
  @media (min-with: 769px) {
    margin-left: 0;
  }
`;

const List = styled.div`
  color: #999;
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


const Footer = (props) => {
  return (
    <Toolbar>
      <Navigation>
        <Logo><a href='/'>Logo</a></Logo>
        <Spacer />
        <List>
          <ul>
            <li href='/'><a>Login</a></li>
            <li href='/'><a>Signup</a></li>
          </ul>
        </List>
      </Navigation>
    </Toolbar>
  );
};

export default Footer;
