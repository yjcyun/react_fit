import React from 'react'
import { IoIosClose } from 'react-icons/io'
import styled from 'styled-components'

const Cart = ({ setOpenCart }) => {
  return (
    <CartOverlay onClick={() => setOpenCart(false)}>
      <CartStyled>
        <Header>
          <h2>shopping cart</h2>
          <span onClick={() => setOpenCart(false)}>close<IoIosClose className='icon' /></span>
        </Header>
        <Main>
          <ul>
            <li>
              <div className='img-container'>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914370/ReactFitDB/men-1-3_tmbxes.jpg' alt='' />
              </div>
              <div className='content'>
                <p>backpack double - black</p>
                <p className='qty'>1 x <span className='price'>$12.00</span></p>
                <span className='close-btn'><IoIosClose className='icon' /></span>
              </div>
            </li>
            <li>
              <div className='img-container'>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914370/ReactFitDB/men-1-3_tmbxes.jpg' alt='' />
              </div>
              <div className='content'>
                <p>backpack double - black</p>
                <p className='qty'>1 x <span className='price'>$12.00</span></p>
                <span className='close-btn'><IoIosClose className='icon' /></span>
              </div>
            </li>
          </ul>
        </Main>
        <Footer>
          <div className='subtotal'>
            <p>subtotal:</p>
            <p className='price'>$12.00</p>
          </div>
          <div className='buttons'>
            <button>view cart</button>
            <button className='checkout-btn'>checkout</button>
          </div>
        </Footer>
      </CartStyled>
    </CartOverlay>
  )
}

const CartOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.8);
  left: 0;
  top: 0;
  z-index: 100;
`

const CartStyled = styled.aside`
  position: absolute;
  max-width: 330px;
  width: 100%;
  height: 100%;
  top:0;
  right: 0;
  bottom: 0;
  background: var(--light-clr);
  z-index: 101;
  overflow: auto;
`

const Header = styled.div`
  background-color: var(--dark-clr);
  color: var(--light-clr);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  text-transform: uppercase;
  h2{
    color: var(--light-clr);  
    letter-spacing: 1.5px;
  }
  span{
    font-size: 0.9rem;
    cursor: pointer;
    .icon {
      font-size: 1.1rem;
      vertical-align: middle;
      margin-bottom: 3px;
    }
  }
`

const Main = styled.div`
  ul {
    margin: 1rem;
  }
  li{
    display: flex;
    border-top: 1px solid rgba(136,136,136,.12);
    padding-top: 10px;
    .img-container{
      width: 20%;
      margin-right: 1rem;
    }
    .content {
      width: 75%;
      font-size: 0.9rem;
      text-transform: uppercase;
      position: relative;
      .close-btn{
        position: absolute;
        top: -4px; 
        right: 0;
        font-size: 1.5rem;
        color: var(--text-clr);
      }
      .qty{
        margin: 0.5rem 0;
      }
      .price{
        color: var(--primary-clr);
      }
    }
  }
`

const Footer = styled.div`
  margin: 2rem 1rem;
  .subtotal {
    font-size: 1.3rem;
    font-weight: bold;
    padding: 5px;
    border-top: 1px solid rgba(136,136,136,.12);
    border-bottom: 1px solid rgba(136,136,136,.12);
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    .price {
      color: var(--primary-clr);
    }
  }
  .buttons{
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    button {
      width: 100%;
      border: none;
      padding: 1rem;
      margin: 0.3rem 0;
      text-transform: uppercase;
      font-family: var(--primary-ff);
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .checkout-btn {
      background-color: var(--primary-clr);
      color: var(--light-clr);
    }
    button:hover {
      background-color: #3e3e3e;
      color: var(--light-clr);
    }
    .checkout-btn:hover {
      background-color: #71c1c2;
    }
  }
`

export default Cart