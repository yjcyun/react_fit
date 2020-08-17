import React, { Component } from 'react';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems }) => {
  return (
    <StyledCartMenu>
      <div className="cart-items">
        {
          cartItems.map(cartItem =>
            <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>

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
`;

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})
export default connect(mapStateToProps)(CartDropdown)