import React from 'react'
import styled from 'styled-components'
import { BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <LoginRegisterStyled>
      <ActiveColumn>
        <h2><BsPerson className='icon' />Register</h2>
        <form>
          <FormControl>
            <label>Username <span>*</span></label>
            <input
              type='text'
              required
            />
          </FormControl>
          <FormControl>
            <label>Email address <span>*</span></label>
            <input
              type='text'
              required
            />
          </FormControl>
          <FormControl>
            <label>Password <span>*</span></label>
            <input
              type='text'
              required
            />
          </FormControl>
          <Button flex>Register</Button>
        </form>
      </ActiveColumn>
      <InactiveColumn>
        <h2>Login</h2>
        <p>Login here by filling you're username and password or use your favorite social network account to enter to the site. Site login will simplify the purchase process and allows you to manage your personal account.</p>
        <Link to='/my-account/login'><Button type='button' dark>login</Button></Link>
      </InactiveColumn>
    </LoginRegisterStyled>
  )
}

const LoginRegisterStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  h2 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const ActiveColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 3rem;
  border-right: 1px solid rgba(0,0,0,0.1);
  .icon {
    vertical-align: middle;
  }
`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    margin-bottom: 10px;
    span {
      color: var(--red-clr);
    }
  }

  input {
    border-radius: none;
    border: var(--input-border);
    height: 2.5rem;
    padding: 0 10px;
    font-family: var(--primary-ff);
  }
`

const InactiveColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 2.5rem 3rem;
`

const Button = styled.button`
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

export default Register