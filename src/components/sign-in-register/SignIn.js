import React, { Component } from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from '../CustomButton';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <StyledSignIn>
        <h2 className="title-font">SIGN IN</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            handleChange={this.handleInputChange}
            label="email"
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleInputChange}
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <div className="button-container">
            <CustomButton type="submit">Sign In</CustomButton><br/>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </StyledSignIn>
    )
  }
}

const StyledSignIn = styled.div`
  flex: 1;

  .button-container {
    display:flex; 
    flex-direction:column;
    justify-content: space-between;
  }

  @media (min-width: 768px){
    .button-container{
      flex-direction: row;
    }
  }
`;
export default SignIn
