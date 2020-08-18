import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../assets/hoodie.svg';
import { selectCartHidden } from '../redux/cart/cartSelectors';
import { selectCurrentUser } from '../redux/user/userSelectors';
import styled from 'styled-components';
import CartIcon from './cart/CartIcon';
import CartDropdown from './cart/CartDropdown';

const Header = ({ currentUser, hidden }) => {
  return (
    <StyledHeader>
      <Link className="logo-container" to="/">
        <Logo style={{ width: '40px', height: '40px' }} />
      </Link>
      <div className="nav-links">
        <Link className="nav-item" to="/shop">SHOP</Link>
        <Link className="nav-item" to="/contact">CONTACT</Link>
        {
          currentUser
            ? <div className="nav-item" onClick={() => auth.signOut()}>
              SIGN OUT</div>
            : <Link className="nav-item" to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </StyledHeader>
  )
}

const StyledHeader = styled.nav`
  position:relative;
  height: 5rem;
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-item{
    margin: 0 1rem;
    cursor: pointer;
  }
`;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header)