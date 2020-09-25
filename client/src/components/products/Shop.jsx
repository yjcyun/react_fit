import React from 'react'
import Banner from '../layout/Banner'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/action/productAction'
import ShopItem from './ShopItem'
import styled from 'styled-components'
import Spinner from '../layout/Spinner'

// GET UNIQUES VALUES OF CATEGORY
// const onlyUnique = (products) => {
//   const unique = [...new Set(products.map(item => item.category))];
//   console.log(unique)

//   return unique.map(category => (
//     <Link key={category} to={`/shop?category=${category}`}>
//       <span className='hover-slide'>
//         {category}
//       </span>
//     </Link>
//   ))
// }
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Shop = ({ getProducts, product: { loading, products } }) => {
  let query = useQuery();
  let category = query.get('category');

  useEffect(() => {
    getProducts(category);
  }, [getProducts, category]);

  return (
    <>
      {loading
        ? <Spinner />
        : (
          <div>
            <Banner dark>
              <Category>
                <Link to='/shop'><span className='hover-slide'>all</span></Link>
                <Link to='/shop?category=women'><span className='hover-slide'>women</span></Link>
                <Link to='/shop?category=men'><span className='hover-slide'>men</span></Link>
                <Link to='/shop?category=bags'><span className='hover-slide'>bags</span></Link>
                <Link to='/shop?category=shoes'><span className='hover-slide'>shoes</span></Link>
              </Category>
            </Banner>
            <ProductsList className='container'>
              {products.map(product => (
                <ShopItem key={product.id} product={product} />
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
  grid-gap: 4rem 1rem;
  padding: 0 1rem;
  margin: 2rem auto 7rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 0 2rem;
    margin: 2rem auto 8rem;
    grid-gap: 4rem 2rem;
  }
`

const Category = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: var(--light-clr);
    margin: 0 0.5rem;
    text-transform: uppercase;
    .hover-slide{
      position:relative;
      transition: all 0.2s ease-in-out;
      &:before, 
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        width: 0px;
        height: 1px;
        transition: all 0.2s ease-in-out;
        transition-duration: 0.2s;
        opacity: 0;
        background-color: var(--light-clr);
      }
      &:before{
        left: 50%;
      }
      &:after{
        right: 50%;
      }
    }
  }
  a:hover {
    .hover-slide{
      ::before, ::after {
        width: 50%;
        opacity: 1;
      }
    }
  }
`


const mapStateToProps = state => ({
  product: state.product
})

export default connect(mapStateToProps, { getProducts })(Shop)
