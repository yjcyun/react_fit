import React from 'react'
import styled from 'styled-components'
import { FiShoppingCart, FiHeart, FiZoomIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';

// GET UNIQUES VALUES OF COLORS
const onlyUnique = (stock) => {
  const unique = [...new Set(stock.map(item => item.color))];
  return unique.map(color => (
    <ProductColor key={color} className='color' background={color}>
      <div className='label-position'>
        <span className='label'>{color}</span>
      </div>
    </ProductColor>
  ));
}

const ShopItem = ({ product }) => {
  return (
    <ProductItem>
      <div className='product-cover'>
        <img src={product.imageCover} alt={product.name} className='img-cover' />
        <div className='img-hover'>
          <img src={product.images[0]} alt={product.name} />
          <div className='hover-footer'>
            <div className='footer-icon-wrapper'>
              <FiShoppingCart className='footer-icon' />
              <FiZoomIn className='footer-icon' />
              <FiHeart className='footer-icon' />
            </div>
          </div>
        </div>
      </div>
      <div className='product-detail'>
        <Link to='/' className='product-name'>
          {product.name}
        </Link>
        <div className='product-footer'>
          <div className='product-price'>
            ${product.price}
          </div>
          <div className='product-colors'>
            {onlyUnique(product.stock)}
          </div>
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
  .product-footer{
    display: flex;
    justify-content: space-between;
    margin: 0.7rem 0;
  }
  .product-colors{
    display: flex;
    justify-content: center;
  }
`

const ProductColor = styled.div`
  width: 15px;
  height:15px;
  border-radius: 50%;
  background-color: ${props => props.background ? props.background : 'var(--dark-clr'};
  margin: 0 5px;
  cursor: pointer;
  position: relative;
  .label-position{
    position: absolute;
    top: -2rem;
    left: -1.5rem;
    width: 4rem;
    text-align: center;
  }
  .label {
    position: relative;
    background-color: var(--dark-clr);
    color: var(--light-clr);
    padding: 5px 10px;
    cursor: pointer;
    visibility: hidden;
    text-transform: capitalize;
    font-size: 0.8rem;
  }
  .label:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--dark-clr);
    border-bottom: 0;
    margin-left: -5px;
    margin-bottom: -5px;
  }
  :hover .label {
    visibility: visible;
  }
`

export default ShopItem