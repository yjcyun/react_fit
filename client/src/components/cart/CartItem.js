import React from 'react';
import styled from 'styled-components';

const CartItem = ({item: {imageUrl, price, name,quantity}}) => {
  return (
    <StyledCartItem>
      <img src={imageUrl} alt="item"/>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </StyledCartItem>
  )
}

const StyledCartItem = styled.div`
  width: 100%;
  display:flex;
  height: 5rem;
  margin-bottom: 1rem;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.6rem 1.1rem;
  }
`
export default CartItem
