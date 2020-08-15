import React from 'react'
import styled from 'styled-components';

const CustomButton = ({children, ...otherProps}) => {
  return (
    <StyledButton {...otherProps}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  min-width: 13rem;
  width: auto;
  height: 2.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
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
