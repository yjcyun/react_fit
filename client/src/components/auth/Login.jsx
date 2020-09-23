import React from 'react'
import styled from 'styled-components'
import { IoIosLogIn } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <LoginRegisterStyled>
      <ActiveColumn>
        <h2><IoIosLogIn className='icon' />Login</h2>
        <form>
          <FormControl>
            <label>Email <span>*</span></label>
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
          <Button flex>Login</Button>
        </form>
      </ActiveColumn>
      <InactiveColumn>
        <h2>Register</h2>
        <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
        <Link to='/my-account/register'><Button type='button' dark>register</Button></Link>
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

export default Login