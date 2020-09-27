import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import { logout } from '../../redux/action/authAction'
import { toggleSideCart } from '../../redux/action/cartAction'
import SideCart from '../cart/SideCart'
import styled from 'styled-components'
import MobileNavbar from './MobileNavbar'

const Navbar = ({
  auth: { isAuthenticated, loading },
  cart: { hidden, cartItems }, logout, toggleSideCart }) => {
  // CALCULATE SUM OF ITEM QTY
  const cartItemQty = cartItems.reduce((accumulatedQnt, cartItem) => accumulatedQnt + cartItem.quantity, 0);

  const authLinks = (
    <>
      <li className='login-register'><Link to='/my-account'>My Account</Link>/</li>
      <li className='login-register' onClick={() => logout()}>Logout</li>
      <li onClick={toggleSideCart} className='cart-div'>
        <FiShoppingCart className='icon' /><span className='qty'>{cartItemQty}</span>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className='login-register'><Link to='/my-account/login'>Login</Link>/</li>
      <li className='login-register'><Link to='/my-account/register'>Register</Link></li>
      <li onClick={toggleSideCart} className='cart-div'>
        <FiShoppingCart className='icon' /><span className='qty'>{cartItemQty}</span>
      </li>
    </>
  );

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
      <MobileNavbar />
      {hidden ? null : <SideCart close={toggleSideCart} />}
    </>
  )
}

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
  box-shadow:0 10px 30px -10px rgba(0,0,0,0.1);

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
  font-size: 2.5rem;
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
  .cart-div{
    position: relative;
    .qty{
      position: absolute;
      top: -10px;
      right: -10px;
      border-radius: 50%;
      background-color: var(--primary-clr);
      color: var(--light-clr);
      width: 20px;
      height: 20px;
      text-align: center;
    }
    .icon{
      font-size: 1.3rem;
      vertical-align: middle;
      margin-bottom: 5px;
    }
  }
 @media (max-width: 768px) {
    .login-register {
      display: none;
    }
  }
`

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
});

export default connect(mapStateToProps, { logout, toggleSideCart })(Navbar)