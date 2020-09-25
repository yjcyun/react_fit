import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import styled from 'styled-components'

const CartItem = () => {
  return (
    <CartItemStyled>
    <div className='product'>
      <div className='img-container'>
        <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914370/ReactFitDB/men-1-cover_upfreq.jpg' alt='' />
      </div>
      <div className='product-desc'>
        <span>Product Name</span>
        <span>Color:</span>
        <span>Size:</span>
      </div>
    </div>
    <div className='price'>$12.00</div>
    <div className='quantity-selector'>
      <button
        className='minus'
      >
        <FiMinus className='icon' />
      </button>
      <input
        type='text'
        className='amount'
      />
      <button
        className='plus'
      >
        <FiPlus className='icon' />
      </button>
    </div>

    <div className='total'>
      $140.00
    </div>
    <div className='remove icon'>
      <IoIosClose />
    </div>
  </CartItemStyled>
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
    button, input {
      border: none;
      border: 1px solid rgba(136,136,136,.12);
      height: 43px;
    }
    input {
      width: 40px;
      text-align: center;
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