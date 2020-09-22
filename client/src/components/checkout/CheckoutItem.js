import React from 'react'
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cartActions';
import styled from 'styled-components';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <StyledCheckoutItem>
      <div className="item">
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="item-desc">
          <p className="name">{name}</p>
          <span>item: #{id}</span>
          <span>color: </span>
          <span>size: </span>
        </div>
      </div>

      <div className="order-det">
        <div className="quantity">
          <span className="quantity-number">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
          </span>
          <span className="remove" onClick={() => clearItem(cartItem)}>remove</span>
        </div>
        <div className="prices">
          <div className="price"><span className="hide">PRICE EACH: </span><span >${price}</span></div>
          <div className="item-total"><span className="hide">TOTAL PRICE: </span><span>${price * quantity}</span></div>
        </div>
      </div>

    </StyledCheckoutItem>
  )
}

const StyledCheckoutItem = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 80%;
  
  .item {
    display:flex;
    width: 100%;
  }

  .image-container{
    width: 50%;
    max-width: 5rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  img{
    width: 100%;
  }

  .name {
    font-size: 1rem;
    font-weight: bold;
  }

  .item-desc span {
    display:block;
    text-transform: uppercase;
    color: #333;
  }

  .order-det {
    width: 100%;
    display:flex;
    justify-content: space-between;
  }

  .quantity {
    display:flex;
    flex-direction:column;
    width: 50%;
    max-width: 5rem;
  }

  .quantity-number {
    display:flex;
    justify-content:center;
    font-size: 1rem;
  }

  .remove {
    text-align: center;
    margin-top: 0.7rem;
    cursor: pointer;
  }

  .prices {
    display:block;
    text-align:right;
  }

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction:row;
    font-size: 100%;

    .item {
      width: 45%;
    }

    .order-det{
      width: 55%;
    }

    .quantity {
      width: 45%;
      max-width: 20rem;
      align-items:center;
    }

    .prices {
      display:flex;
      width: 55%;
    }

    .price, .item-total {
      display:flex;
      width: 50%;
      justify-content:flex-end;
    }

    .hide {
      display:none;
    }
  }
`;

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem)