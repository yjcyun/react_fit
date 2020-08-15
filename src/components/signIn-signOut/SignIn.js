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
      <div>
        <h2>Sign In</h2>
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
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} type="submit">Sign In with Google</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
