import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background: black;
`;

const DrawerToggleButton = (props) => {
  return (
    <ToggleButton onClick={props.click}>
      <Line/>
      <Line/>
      <Line/>
    </ToggleButton>
  );
};

export default DrawerToggleButton;