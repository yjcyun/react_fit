import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartSubtotal } from '../redux/cart/cartSelectors';
import CheckoutItem from '../components/checkout/CheckoutItem';

class Checkout extends Component {
  state = {
    discountCode: '',
    discount: null
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.discountCode === 'DISCOUNT') {
      this.setState({ discount: 0.15 });
    } else {
      this.setState({ discount: 0 });
    }
  }

  render() {
    const { cartItems, subtotal } = this.props;
    const { discount } = this.state;

    const tax = (subtotal * 0.13);

    return (
      <>
        <h2 className="title-font">CHECKOUT PAGE</h2>
        <StyledCheckout>
          <div className="checkout-header">
            <div className="header-block">
              <span>ITEM</span>
            </div>
            <div className="header-block">
              <span>QUANTITY</span>
            </div>
            <div className="header-block">
              <span>PRICE EACH</span>
            </div>
            <div className="header-block">
              <span>TOTAL PRICE</span>
            </div>
          </div>
          {cartItems.map(cartItem =>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )}

          <div className="checkout-bottom">
            {/* Promo Code */}
            <div className="discount">
              <span>PROMO CODE</span>- <small>try <strong>DISCOUNT</strong> to get 15% off</small>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Promo Code"
                  name="discountCode"
                  value={this.state.discountCode}
                  onChange={this.handleInputChange} />
                <input type="submit" value="APPLY" />
              </form>
              {discount === 0 ? <span style={{color:'red'}}>Invalid promo code</span> : ''}
            </div>
            {/* End of Promo Code */}
            {/* Subtotal and Total */}
            <div className="charge">
              <div className="total">
                <div>
                  <span>SUBTOTAL:</span>
                  <span> ${subtotal.toFixed(2)}</span>
                </div>
                {
                  discount === 0.15
                    ? (<div>
                      <span>DISCOUNT:</span>
                      <span style={{color:'red'}}>- ${(subtotal * discount).toFixed(2)}</span>
                    </div>)
                    : null
                }
                <div>
                  <span>TAX:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="total">
                <div>
                  <span>ESTIMATED TOTAL:</span>
                  <span>${(subtotal - subtotal * discount + tax).toFixed(2)}</span>
                </div>
              </div>
            </div>
            {/* End of Subtotal and Total */}
          </div>

        </StyledCheckout>
      </>
    )
  }
}

const StyledCheckout = styled.section`
  display:flex;
  flex-direction:column;

  .checkout-header{
    display:flex;
    width: 100%;
    border-top: 1px solid darkgrey;
  }

  .header-block {
    width: 15%;
    text-align:right;
    color: darkgrey;
    display: none;
  }

  .header-block:first-child {
    width: 45%;
    text-align:left;
  }

  .header-block:nth-child(2) {
    width: 25%;
    text-align:center;
  }
  
  .total{
    padding: 1.5rem 0;
  }

  .total:nth-of-type(2) {
    border-top: 1px solid darkgrey;
  }

  .total div {
    display:flex;
    justify-content: flex-end;
  }

  .total span {
    width: 10rem;
    text-align: right;
  }

  .checkout-bottom{
    display:flex;
    flex-direction:column;
    justify-content: space-between;
  }

  .charge {
    width: auto;
  }

  .discount {
    height: auto;
    padding: 1rem;
    margin: 1rem 0;
    background: #F4F3F1;
  }

  .discount form {
    margin-top: 1rem;
  }

  .discount form input {
    border: 1px solid #858585;
    padding: 0.7rem;
  }

  @media (min-width:768px){
    .checkout-header{
      justify-content: space-between;
      padding: 1.2rem 0;
      border-bottom: 1px solid darkgrey;
    }

    .header-block {
      display: block;
    }

    .checkout-bottom{
      flex-direction:row;
    }

    .discount {
      width: auto;
    }
  }
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  subtotal: selectCartSubtotal
});

export default connect(mapStateToProps)(Checkout)