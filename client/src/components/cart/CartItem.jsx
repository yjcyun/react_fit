import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import styled from 'styled-components'

const CartItem = ({ item, removeItem, addItem, clearItem }) => {
  
  return (
    <CartItemStyled>
      <div className='product'>
        <div className='img-container'>
          <img src={item.imageCover} alt={item.name} />
        </div>
        <div className='product-desc'>
          <span>{item.name}</span>
          <span>Color: {item.color}</span>
          <span>Size: {item.size}</span>
        </div>
      </div>
      <div className='price'>${item.price.toFixed(2)}</div>
      <div className='quantity-selector'>
        <button
          className='minus'
          onClick={() => removeItem(item, item.quantity)}
        >
          <FiMinus className='icon' />
        </button>
        <span className='amount'>
          {item.quantity}
        </span>
        <button
          className='plus'
          onClick={() => addItem(item, item.quantity, item.color, item.size)}
        >
          <FiPlus className='icon' />
        </button>
      </div>

      <div className='total'>
        ${(item.quantity * item.price).toFixed(2)}
      </div>
      <div className='remove icon' onClick={() => clearItem(item)}>
        <IoIosClose />
      </div>
    </CartItemStyled >
  )
}

const CartItemStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100px;
  border-bottom: var(--input-border);
  padding: 15px 0;
  .product{
    width: 42%;
    display: flex;
    .product-desc {
      display: flex;
      flex-direction: column;
    }
  }
  .img-container{
    width: 17%;
    padding-right: 10px;
  }
  .price,.quantity-selector,.total{
    width: 16%;
    text-align: center;
  }
  .remove {
    width: 8%;
    text-align: center;
  }
  .quantity-selector{
    display: flex;
    justify-content:center;
    button, .amount {
      border: none;
      border: 1px solid rgba(136,136,136,.12);
      height: 43px;
    }
    .amount {
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      padding: 0 10px;
      cursor: pointer;
      .icon{
        vertical-align: middle;
        font-size: 0.8rem;
      }
    }
    button:hover {
      background-color: var(--faint-grey)
    }
  }
  .icon {
    font-size: 1.5rem;
    margin-top: -3px;
  }
`

export default CartItem