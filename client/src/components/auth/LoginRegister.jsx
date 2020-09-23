import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../layout/Button'

const LoginRegister = ({ children, title, desc }) => {
  return (
    <LoginRegisterStyled>
      <ActiveColumn>
        {children}
      </ActiveColumn>
      <InactiveColumn>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link to={`/my-account/${title}`}>
          <Button type='button' dark>{title}</Button>
        </Link>
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
    text-transform: capitalize;
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

const InactiveColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 2.5rem 3rem;
`

export default LoginRegister