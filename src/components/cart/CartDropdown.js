import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import CustomButton from '../CustomButton';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <StyledCartMenu>
      <div className="cart-items">
        {
          cartItems.length
            ? cartItems.map(cartItem =>
              <CartItem key={cartItem.id} item={cartItem} />)
            : <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </StyledCartMenu>
  )
}

const StyledCartMenu = styled.section`
  position:absolute;
  width: 17rem;
  height: 20rem;
  display:flex;
  flex-direction:column;
  padding: 1rem;
  border: 1px solid #000;
  background-color: #fff;
  top: 5rem;
  right: 0;
  z-index:5;

  .cart-items {
    height: 20rem;
    display:flex;
    flex-direction:column;
    overflow: auto;
  }

  .empty-message {
    margin: 2rem auto;
  }
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));