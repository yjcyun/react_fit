import React from 'react';
import styled from 'styled-components';
import SignIn from '../components/sign-in-register/SignIn'
import Register from '../components/sign-in-register/Register'

const SignInAndRegister = () => {
  return (
    <StyledSignIn>
      <SignIn />
      <Register />
    </StyledSignIn>
  )
}

const StyledSignIn = styled.section`
  display:flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

`;

export default SignInAndRegister
