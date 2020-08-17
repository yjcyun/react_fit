import React from 'react';
import styled from 'styled-components';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <StyledFormInput>
      <input type="text" onChange={handleChange}{...otherProps} className="form-input" placeholder={label}/>
    </StyledFormInput>
  )
}

const StyledFormInput = styled.div`
  .form-input {
    color:grey;
    font-size: 1.1rem;
    padding: 0.5rem;
    display:block;
    width: 100%;
    border: none;
    border-bottom: 1px solid grey;
    margin: 1.5rem 0;
  }

  .form-input:focus{
    outline: none;
  }

  .form-input::placeholder {
    color: grey;
    font-family: 'Ubuntu', sans-serif; 
  }
`

export default FormInput