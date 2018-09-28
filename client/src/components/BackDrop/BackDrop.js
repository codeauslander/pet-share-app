import React from 'react';
import styled from 'styled-components';

const StyledBackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
`;

export default (props) => <StyledBackDrop onClick={props.click}/>;

