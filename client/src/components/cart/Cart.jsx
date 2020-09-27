import React from 'react'
import { connect } from 'react-redux'
import { addItem, clearItem, removeItem } from '../../redux/action/cartAction'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { processPayment } from '../../redux/action/checkoutAction';

import Banner from '../layout/Banner'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import PaymentOptions from './PaymentOptions'
import styled from 'styled-components'
import EmptyCart from './EmptyCart'

const stripePromise = loadStripe('pk_test_51HRLnVLvko24kY0Nr99KNbtMFmDxl640uBpsdgKwEVgZXb7Evf0kVOo3RZrWdXCmyYPZziPE3S5HeyExG2eAPooL00Z62Uw8nQ');

const Cart = ({ cart: { cartItems }, removeItem, addItem, clearItem, processPayment }) => {

  const handlePayment = async () => {
    // if (!isAuthenticated) {
    //   return <Redirect to='/my-account/login' />
    // } else {
    // }
    processPayment(cartItems[0].id)
  }

  return (
    <Elements stripe={stripePromise}>
      <Banner dark>
        <h1>cart</h1>
      </Banner>
      <CartStyled className='container'>
        {cartItems.length === 0
          ? <EmptyCart />
          : <>
            <ShoppingBag>
              <CartHeader />
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  removeItem={removeItem}
                  clearItem={clearItem}
                />
              ))}
            </ShoppingBag>
            <PaymentOptions item={cartItems} processPayment={processPayment} />
          </>
        }
      </CartStyled>
    </Elements>
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


export default connect(mapStateTopProps, { addItem, removeItem, clearItem, processPayment })(Cart)