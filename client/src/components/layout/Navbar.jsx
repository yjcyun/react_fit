import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FiShoppingCart, FiGrid, FiHeart, FiUser } from 'react-icons/fi'
import styled from 'styled-components'
import { logout } from '../../redux/action/authAction'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <>
      <li className='login-register'><Link to='/my-account'>My Account</Link>/</li>
      <li className='login-register' onClick={() => logout()}>Logout</li>
      <li><FiShoppingCart />0</li>
    </>
  );

  const guestLinks = (
    <>
      <li className='login-register'><Link to='/my-account/login'>Login</Link>/</li>
      <li className='login-register'><Link to='/my-account/register'>Register</Link></li>
      <li><FiShoppingCart />0</li>
    </>
  );

  const mobileNav = (
    <>
      <li><Link to='/shop' className='mobile-nav-item'>
        <FiGrid className='icon' /><span>Shop</span></Link>
      </li>
      <li><Link to='/' className='mobile-nav-item'>
        <FiHeart className='icon' /><span>Wishlist</span></Link>
      </li>
      <li><Link to='/' className='mobile-nav-item'>
        <FiShoppingCart className='icon' /><span>Cart</span></Link>
      </li>
      <li><Link to='/my-account' className='mobile-nav-item'>
        <FiUser className='icon' /><span>My Account</span></Link>
      </li>
    </>
  )

  return (
    <>
      <NavbarStyled>
        <NavStyled>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
        </NavStyled>
        <LogoStyled>
          <Link to='/'>React Fit & Co.</Link>
        </LogoStyled>
        <LogInAndCart>
          {!loading && isAuthenticated ? authLinks : guestLinks}
        </LogInAndCart>
      </NavbarStyled>
      <MobileNav>
        {mobileNav}
      </MobileNav>
    </>
  )
}

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--light-clr);
  overflow-x: auto;
  padding: 5px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: 4rem;
  box-shadow: 0 0 9px rgba(0,0,0,.12);
  z-index:100;
  li {
    flex: 1 0 20%;
  }
  .mobile-nav-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  span {
    font-size: 0.8rem;
    display: block;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .icon {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    span{
      width: 3.5rem;
    }
  }
  @media (min-width: 996px) {
    display: none;
  }
`

const NavbarStyled = styled.nav`
  height: 7rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--light-clr);
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  z-index:100;
  li{
    margin: 0 1rem;
    cursor: pointer;
  }
  @media (max-width: 996px) {
    height: 5rem;
    padding: 0 2rem;
  }
  @media (max-width: 576px) {
    padding: 0 1rem;
  }

`

const NavStyled = styled.ul`
  display: flex;
  text-transform: uppercase;

  @media (max-width: 996px) {
    display: none;
  }
`

const LogoStyled = styled.div`
  font-family: var(--title-ff);
  font-weight: 700;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }

`

const LogInAndCart = styled.ul`
    display: flex;
  .login-register {
    margin: 0;
  }
 @media (max-width: 768px) {
    .login-register {
      display: none;
    }
  }
`

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar)