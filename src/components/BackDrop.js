import React from 'react';
import styled from 'style-components';

const StyledBackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  
`;

export default (props) => <StyledBackDrop onClick={props.click}/>;

