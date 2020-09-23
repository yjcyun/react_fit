import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavStyled>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Shop</Link></li>
      </NavStyled>
      <LogoStyled>
        <Link to='/'>React Fit & Co.</Link>
      </LogoStyled>
      <LogInAndCart>
        <li><Link to='/my-account'>Login/Register</Link></li>
        <li><FiShoppingCart />0</li>
      </LogInAndCart>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  li{
    margin: 0 1rem;
  }
`

const NavStyled = styled.ul`
  display: flex;
  text-transform: uppercase;
`

const LogoStyled = styled.div`
  font-family: var(--title-ff);
  font-weight: 700;
  font-size: 3rem;

`
const LogInAndCart = styled.ul`
  display: flex;
`

export default Navbar