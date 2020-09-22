import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from '../CustomButton';


class Register extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    const { email, displayName, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (err) {
      console.log(err);
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, displayName, password, confirmPassword } = this.state;

    return (
      <StyledRegister>
        <h2 className="title-font">Register</h2>
        <span>Register with your email and password</span>
        <form onSubmit={this.handleFormSubmit} className="register-form">
          <FormInput
            onChange={this.handleInputChange}
            label="display name"
            type="text"
            name="displayName"
            value={displayName}
            required
          />
          <FormInput
            onChange={this.handleInputChange}
            label="email"
            type="email"
            name="email"
            value={email}
            required
          />
          <FormInput
            onChange={this.handleInputChange}
            label="password"
            type="password"
            name="password"
            value={password}
            required
          />
          <FormInput
            onChange={this.handleInputChange}
            label="confirm password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </StyledRegister>
    )
  }
}

const StyledRegister = styled.div`
  flex: 1;
  margin: 0;

  @media (min-width: 768px){
    margin: 0 3rem;
  }
`
export default Register;