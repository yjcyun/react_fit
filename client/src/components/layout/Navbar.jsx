import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import styled from 'styled-components'
import { logout } from '../../redux/action/authAction'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <>
      <li className='login-register'><Link to='/my-account'>My Account</Link></li> /
      <li className='login-register' onClick={() => logout()}>Logout</li>
      <li><FiShoppingCart />0</li>
    </>
  );

  const guestLinks = (
    <>
      <li className='login-register'><Link to='/my-account/login'>Login</Link></li>/
      <li className='login-register'><Link to='/my-account/register'>Register</Link></li>
      <li><FiShoppingCart />0</li>
    </>
  );

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
        {!loading && isAuthenticated ? authLinks : guestLinks}
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
    cursor: pointer;
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
 .login-register {
   margin: 0;
 }
`

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar)