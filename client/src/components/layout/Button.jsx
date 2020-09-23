import React from 'react'
import styled from 'styled-components'

const Button = ({ children, type, dark, flex }) =>
  <ButtonStyled
    type={type}
    dark={dark}
    flex={flex}
  >
    {children}
  </ButtonStyled>

const ButtonStyled = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.dark ? 'var(--dark-clr)' : 'var(--light-clr)'};
  color: ${props => props.dark ? 'var(--light-clr)' : 'var(--dark-clr)'};
  padding: 0.9rem 1.4rem;
  border: ${props => props.dark ? 'none' : '2px solid var(--dark-clr)'};
  cursor: pointer;
  letter-spacing: 1px;
  width: ${props => props.flex ? '100%' : 'auto'};
  margin-top: 1.5rem;
  transition: all 0.2s;

  :hover {
    background-color: #222;
    border: ${props => props.dark ? 'none' : '2px solid #222'};
    color: var(--light-clr);
  };
`

export default Button