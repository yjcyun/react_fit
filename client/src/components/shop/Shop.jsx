import React from 'react'
import Banner from '../layout/Banner'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/action/productAction'
import styled from 'styled-components'

const Shop = ({ getProducts, product: { loading, products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {loading
        ? <div>Loading...</div>
        : (
          <div>
            <Banner dark>
              categories
            </Banner>
            <ProductsList className='container'>
              {products.map(product => (
                <ProductItem key={product.id}>
                <img src={product.imageCover} alt={product.name}/>
                
                </ProductItem>
              ))}
            </ProductsList>
          </div>
        )
      }
    </>
  )
}

const ProductsList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.7rem;
  padding: 0 1rem;
  margin: 2rem auto 7rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 0 2rem;
    margin: 2rem auto 8rem;
  }
`

const ProductItem = styled.div`

`

const mapStateToProps = state => ({
  product: state.product
})

export default connect(mapStateToProps, { getProducts })(Shop)
