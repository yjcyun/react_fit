import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../../redux/action/productAction'
import { FiMinus, FiPlus, FiHeart } from 'react-icons/fi'
import { UniqueColor } from '../layout/UniqueColor';
import StarRatings from 'react-star-ratings';
import Banner from '../layout/Banner'
import styled from 'styled-components'
import Button from '../layout/Button'



const Product = ({ match, getProduct, auth: { loading }, product }) => {

  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct, match.params.id]);

  return (
    loading || product === null
      ? <div>Loading...</div>
      : (
        <>
          <Banner>
            <ul>
              <li>breadcrumbs</li>
            </ul>
          </Banner>
          <Main className='container'>
            <ProductInfo>
              <div className='product-img'>
                <img src={product.imageCover} alt={product.name} />
              </div>
              <div className='product-content'>
                {/* PRODUCT NAME */}
                <h1>{product.name}</h1>
                {/* RATING STARS */}
                <div className='ratings'>
                  <span className='stars'>
                    <StarRatings
                      rating={product.ratingsAverage}
                      starDimension='17px'
                      starSpacing='0px'
                      starRatedColor='#FDCC0D'
                    />
                  </span>
                  <span>({product.ratingsQuantity} customer reviews)</span>
                </div>
                {/* PRODUCT PRICE */}
                <p className='price'>${product.price.toFixed(2)}</p>
                {/* SUMMARY */}
                <div className='summary'>
                  <p>{product.summary}</p>
                </div>
                {/* AVAILABLE COLORS */}
                <div className='color-div'>
                  <strong>Color:</strong>
                  <span className='color-div'>
                    {UniqueColor(product.stock)}
                  </span>
                </div>
                {/* QUANTITY SELECTOR */}
                <div className='quantity'>
                  <div className='quantity-selector'>
                    <button className='minus'><FiMinus className='icon' /></button>
                    <input type='text' className='amount' />
                    <button className='plus'><FiPlus className='icon' /></button>
                  </div>
                  <div className='add-to-cart'>
                    <Button dark type='button'>Add to cart</Button>
                  </div>
                </div>
                {/* OPTIONS */}
                <div className='product-options'>

                </div>
              </div>
            </ProductInfo>
            <ProductDesc></ProductDesc>
            <BestSeller></BestSeller>
          </Main>
        </>
      )
  )
}

const Main = styled.div`
  margin: 2rem auto 7rem;
  padding: 0 1rem;
  @media (min-width: 768px) {
    padding: 0 2rem;
    margin: 2rem auto 8rem;
  }
`
const ProductInfo = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  h1{
    font-family: var(--product-ff);
    font-size: 2.5rem;
    text-transform: capitalize;
    font-weight: 400;
  };
  .ratings{
    margin: 1rem 0;
    .stars {
      margin-right: 1rem;
    }
    .star-container {
      margin-top: 2px;
    }
  }
  .price {
    color: var(--primary-clr);
    font-size: 2rem;
  }
  .summary {
    margin: 1rem 0;
  }
  .color-div{
    display: flex;
    align-items: center;
    margin: 1rem 0;
    strong{
      margin-right: 1rem;
      letter-spacing: 1px;
    }
  }
  .quantity {
    display: flex;
    margin: 2rem 0;
  }
  .quantity-selector{
    display: flex;
    align-items: center;
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
      }
    }
    button:hover {
      background-color: var(--faint-grey)
    }
  }
  .add-to-cart {
    margin-left: 1.5rem;
  }
`







const ProductDesc = styled.section`
`
const BestSeller = styled.section`
`


const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product.product
});

export default connect(mapStateToProps, { getProduct })(Product)