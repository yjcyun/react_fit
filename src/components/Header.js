import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="nav-links">
        <Link className="nav-item" to="/shop">SHOP</Link>
        <Link className="nav-item" to="/contact">CONTACT</Link>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.nav`
  height: 5rem;
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .nav-item{
    margin: 0 1rem;
  }
`;

export default Header
