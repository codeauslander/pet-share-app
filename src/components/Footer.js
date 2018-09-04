import React from 'react';
import styled from 'styled-components';

const Toolbar = styled.header`
  position: fixed;
  bottom: 0;
  width:100%;
  background-color: #24245B;
  height: 54px;
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


const Footer = (props) => {
  return (
    <Toolbar>
      <Navigation>
        <Logo><a href='/'>Footer</a></Logo>
        <Spacer />
        <List>
          <ul>
            <li href='/'><a>Contact</a></li>
            <li href='/'><a>Careers (LOL)</a></li>
          </ul>
        </List>
      </Navigation>
    </Toolbar>
  );
};

export default Footer;
