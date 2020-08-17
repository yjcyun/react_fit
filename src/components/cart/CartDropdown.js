import React, { Component } from 'react';
import CustomButton from '../CustomButton';
import styled from 'styled-components';

const CartDropdown = () => {
  return (
    <StyledCartMenu>
      <div className="cart-items" />
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

export default CartDropdown