import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Banner from '../layout/Banner'
import Button from '../layout/Button'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import PaymentOptions from './PaymentOptions'

const Cart = ({cart:{cartItems}}) => {
  console.log(cartItems)
  return (
    <>
      <Banner dark>
        <h1>cart</h1>
      </Banner>
      <CartStyled className='container'>
        <ShoppingBag>
          <CartHeader />
          
          <CartItem />
        </ShoppingBag>
        <PaymentOptions />
      </CartStyled>
    </>
  )
}

const CartStyled = styled.div`
  margin: 2rem auto 7rem;
  @media (min-width: 768px) {
    margin: 2rem auto 8rem;
  }
`

const ShoppingBag = styled.div`
  margin-bottom: 2rem;
`

const mapStateTopProps = state => ({
  cart: state.cart
});

export default connect(mapStateTopProps)(Cart)