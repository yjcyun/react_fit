import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../../redux/action/productAction'
import styled from 'styled-components'
import Banner from '../layout/Banner'
import ProductImages from './ProductImages';
import ProductContent from './ProductContent';

const Product = ({ match, getProduct, auth: { loading }, product }) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct, match.params.id]);

  return (
    loading || product === null
      ? <div>Loading...</div>
      : (<>
        <Banner>
          <ul>
            <li>breadcrumbs</li>
          </ul>
        </Banner>
        <Main className='container'>
          <ProductInfo>
            <ProductImages product={product} />
            <ProductContent product={product} />
          </ProductInfo>
          <ProductDesc></ProductDesc>
          <BestSeller></BestSeller>
        </Main>
      </>)
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