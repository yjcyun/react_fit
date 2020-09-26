import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../../redux/action/productAction'
import styled from 'styled-components'
import ProductImages from './ProductImages';
import ProductContent from './ProductContent';
import Description from './Description'
import Spinner from '../layout/Spinner'
import Reviews from './Reviews'

const Product = ({ match, getProduct, auth: { loading }, product }) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct, match.params.id]);

  return (
    loading || product === null
      ? <Spinner />
      : (<>
        <Main>
          <ProductInfo className='container'>
            <ProductImages product={product} />
            <ProductContent product={product} />
          </ProductInfo>
          <Description product={product} />
          <Reviews product={product}/>
        </Main>
      </>)
  )
}

const Main = styled.div`
  margin: 10rem auto;
`

const ProductInfo = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  margin-bottom: 5rem;
`



const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product.product
});

export default connect(mapStateToProps, { getProduct })(Product)