import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyled>
      <div className='logo'>React Fit & Co.</div>
      <p>Made by <a href='https://christinayun.ca'>Christina Yun</a></p>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-clr);
  color: var(--light-clr);
  padding: 1rem;
  .logo {
    font-size: 2.5rem;
    font-weight: bold;
  }
  a{
    color: var(--primary-clr);
  }
  
  @media(max-width: 768px) {
    .logo{
      font-size: 2rem;
    }
  }
  @media(max-width: 576px) {
    .logo{
      font-size: 1.4rem;
    }
  }
  /* @media(max-width: 996px) {
    margin-bottom: 4rem;
  } */
`

export default Footer
