import React from 'react'
import styled from 'styled-components';

const CustomButton = ({ children, inverse }) => {
  return (
    <StyledButton inverse={inverse}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  min-width: 15rem;
  width: auto;
  padding: 1rem 3rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background-color: ${props => props.inverse ? '#fff' : '#000'};
  color: ${props => props.inverse ? '#000' : '#fff'};
  font-weight:bold;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`
export default CustomButton
