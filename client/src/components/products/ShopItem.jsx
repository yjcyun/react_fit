import React from 'react'
import styled from 'styled-components'
import { FiShoppingCart, FiHeart, FiZoomIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';
const ShopItem = ({ product }) => {
  return (
    <ProductItem>
      <Link to={`/shop/${product.id}`}>
        <div className='product-cover'>
          <img src={product.imageCover} alt={product.name} className='img-cover' />
          <div className='img-hover'>
            <img src={product.images[1]} alt={product.name} />
            <div className='hover-footer'>
              <div className='footer-icon-wrapper'>
                <FiShoppingCart className='footer-icon' />
                <FiZoomIn className='footer-icon' />
                <FiHeart className='footer-icon' />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className='product-detail'>
        <Link to='/' className='product-name'>
          {product.name}
        </Link>
        <div className='product-price'>
          ${product.price}
        </div>
      </div>
    </ProductItem>
  )
}

const ProductItem = styled.div`
  .product-cover{
    cursor: pointer;
    position: relative;
    transition: all 0.5s;
  }
  .img-hover {
    opacity: 0;
    position: absolute;
    top:0;
    left: 0;
    z-index:80;
    transition: all 0.4s ease-in-out;
  }
  .product-cover:hover .img-hover{
    opacity: 1;
  }
  .hover-footer {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.5rem;
    color: var(--dark-clr);
    .footer-icon-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      .footer-icon {
        font-size: 1.3rem;
        transition: all 0.3s;
        margin: 7px 0;
      }
      .footer-icon:hover {
        color: grey;
      }
    } 
  }
  .product-name{
    text-transform: capitalize;
    font-family: var(--product-ff);
    color: var(--text-clr);
    font-size: 0.9rem;
    font-weight: 500;
    padding-bottom:2px;
    border-bottom: 1px solid rgba(129, 129, 129, 0.25);
  }
  .product-detail{
    display: flex;
    justify-content: space-between;
  }
`

export default ShopItem