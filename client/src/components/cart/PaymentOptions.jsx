import React from 'react'
import styled from 'styled-components'
import Button from '../layout/Button'

const PaymentOptions = () => {
  return (
    <PaymentOptionsStyled>
    <div className='coupon'>
      <input type='text' placeholder='Coupon code' />
      <Button dark>Apply coupon</Button>
    </div>
    <div className='cart-totals'>
      <h3>cart totals</h3>
      <div className='receipt'>
        <div className='receipt-content'>
          <span>Subtotal</span>
          <span>$12.00</span>
        </div>
        <div className='receipt-content'>
          <span>Tax</span>
          <span>$4.00</span>
        </div>
        <div className='receipt-content'>
          <strong>Total</strong>
          <strong>$16.00</strong>
        </div>
      </div>
      <div className='btn-container'>
        <Button dark>proceed to checkout</Button>
      </div>
    </div>
  </PaymentOptionsStyled>
  )
}

const PaymentOptionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  .coupon {
    width: 100%;
    input{
      border:var(--input-border);
      height: 43px;
      margin-right: 10px;
      width: 15rem;
      padding: 0 1rem;
    }
  }
  .cart-totals {
    background-color: rgba(136,136,136,.1);
    padding: 1rem;
    width: 70%;
    h3{
      text-transform: uppercase;
      text-align: center;
    }
    .receipt {
      margin-top: 1rem;
      padding: 0.8rem 1rem;
      background-color: var(--light-clr);
      .receipt-content {
        display: flex;
        justify-content: space-between;
        border-bottom: var(--input-border);
        padding: 0.5rem;
        font-size: 0.9rem;
      }
    }
    .btn-container {
      margin-top: 1rem;
      width: 100%;
      button {
        width: 100%;
        background-color: var(--primary-clr);
      }
    }
  }
`

export default PaymentOptions