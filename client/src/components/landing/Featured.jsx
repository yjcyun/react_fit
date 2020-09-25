import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { getProducts } from '../../redux/action/productAction'
import 'pure-react-carousel/dist/react-carousel.es.css'
import styled from 'styled-components'
import Spinner from '../layout/Spinner'

const Featured = ({ products: { products, loading }, getProducts }) => {
  useEffect(() => {
    getProducts(null);
  }, [getProducts]);

  const renderFeatured = () => {

    return products
      .filter(product => product.featured)
      .map((product, index) => (
        <div className='featured' key={product.id}>
          <Slide index={index}>
            <Link to={`/shop/${product.id}`}>
              <img src={product.imageCover} alt={product.name} />
              <div className='slide-caption'>
                <span>{(product.name).toUpperCase()}</span>
                <span>{(product.price).toFixed(2)}</span>
              </div>
            </Link>
          </Slide>
        </div>
      ))
  }

  return (
    <>
      {loading
        ? <Spinner />
        : <FeaturedStyled className='container'>
          <h2>Featured products</h2>
          {/* FIXME: NOT MOBILE RESPONSIVE */}
          <CarouselProvider
            className='carousel'
            naturalSlideWidth={100}
            naturalSlideHeight={124}
            totalSlides={6}
            visibleSlides={3}
            infinite={true}
          >
            <Slider className='slide-container'>
              {renderFeatured()}
            </Slider>
            <ButtonBack className='nav-btn back-btn'>
              <FiChevronLeft />
            </ButtonBack>
            <ButtonNext className='nav-btn next-btn'>
              <FiChevronRight />
            </ButtonNext>
          </CarouselProvider>
        </FeaturedStyled>
      }
    </>
  )
}

const FeaturedStyled = styled.div`
  padding: 0 2rem;
  margin: 2rem auto 8rem;
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .carousel__inner-slide {
    width: calc(100% - 20px);
    height: 100%;
    left: 10px;
    top: 10px;
    .slide-caption{
      display: flex;
      justify-content: space-between;
    }
  }
  .nav-btn {
    font-size: 1.5rem;
    background-color: var(--dark-clr);
  }
  .back-btn{
    left: -3rem;
  }
  .next-btn{
    right: -3rem;
  }
  @media(min-width: 850px){
    img {
      height: 85%;
    }
  }
`
const mapStateToProps = state => ({
  products: state.product
});

export default connect(mapStateToProps, { getProducts })(Featured)
