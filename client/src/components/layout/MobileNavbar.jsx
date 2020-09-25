import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiGrid, FiHeart, FiUser } from 'react-icons/fi'
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

const MobileNavbar = () => {
  return (
    <MobileNav>
      {mobileNav}
    </MobileNav>
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

export default MobileNavbar
