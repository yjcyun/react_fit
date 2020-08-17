import React from 'react'
import styled from 'styled-components';

const CustomButton = ({ children, isGoogleSignIn, inverse, ...otherProps }) => {
  return (
    <StyledButton inverse={inverse} {...otherProps} className={`${isGoogleSignIn ? 'google-sign-in' : ''}`}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
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

  .google-sign-in {
    background-color: #4285f4;
    color: #fff;
  }

  .google-sign-in:hover{
    background-color: #357ae8;
    border:none
  }

  @media (min-width: 800px){
    width: auto;
  }
  
`
export default CustomButton
