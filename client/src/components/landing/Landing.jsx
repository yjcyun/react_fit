import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import 'pure-react-carousel/dist/react-carousel.es.css'
import styled from 'styled-components'
import { getProducts } from '../../redux/action/productAction'

const Landing = ({ products: { products, loading }, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const renderFeatured = () => {
    return products
      .filter(product => product.featured)
      .map((product, index) => (
        <div className='featured' key={product.id}>
          <Slide index={index}>
            <img src={product.imageCover} alt={product.name} />
            <div className='slide-caption'>
              <span>{(product.name).toUpperCase()}</span>
              <span>{(product.price).toFixed(2)}</span>
            </div>
          </Slide>
        </div>
      ))
  }
  return (
    <>
      {loading
        ? <div>Loading...</div>
        : <LandingStyled>
          <CarouselProvider
            className='carousel'
            naturalSlideWidth={100}
            naturalSlideHeight={40}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0} className='slide-div'>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1601059643/ReactFitDB/img2_pk5crc.jpg' alt='slider1' />
              </Slide>
              <Slide index={1}>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1601059642/ReactFitDB/img1_nc1qsg.jpg' alt='slider2' />
              </Slide>
              <Slide index={2}>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1601059642/ReactFitDB/img3_nar1wx.jpg' alt='slider3' />
              </Slide>
            </Slider>
            <ButtonBack className='nav-btn back-btn'><FiChevronLeft /></ButtonBack>
            <ButtonNext className='nav-btn next-btn'><FiChevronRight /></ButtonNext>
          </CarouselProvider>
          <Categories>
            <div className='intro'>
              <h1>welcome to React Fit & Co.</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='categories container'>
              <div className='img-container'>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914368/ReactFitDB/women-2-cover_pircqe.jpg' alt='women category' />
                <span>Women</span>
              </div>
              <div className='img-container'>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914367/ReactFitDB/men-2-cover_ldieq1.jpg' alt='men category' />
                <span>Men</span>
              </div>
              <div className='img-container'>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914369/ReactFitDB/bag-3-cover_kslxra.jpg' alt='bag category' />
                <span>Bags</span>
              </div>
              <div className='img-container'>
                <img src='https://res.cloudinary.com/yjcyun/image/upload/v1600914369/ReactFitDB/shoes-2-cover_s6ae0g.jpg' alt='shoes category' />
                <span>Shoes</span>
              </div>
            </div>
          </Categories>

          <Featured className='container'>
            <h2>Featured products</h2>
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

          </Featured>
        </LandingStyled>
      }
    </>
  )
}

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  margin: 2rem auto 8rem;
  .intro {
    text-align: center;
    margin: 5rem 0;
    h1 {
      text-transform: uppercase;
    }
    p{
      color: silver;
    }
  }
  .categories {
    display: grid;
    grid-gap: 1.5rem;
    .img-container{
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    .img-container img{
      transition: all 0.4s ease-in;
    }
    .img-container:hover img{
      transform: scale(1.1);
    }
    .img-container:nth-child(1){
      grid-area: women;
    }
    .img-container:nth-child(2){
      grid-area: men;
    }
    .img-container:nth-child(3){
      grid-area: bags;
    }
    .img-container:nth-child(4){
      grid-area: shoes;
    }
    grid-template-columns: none;
    grid-template-areas:
      'women women bags men men'
      'women women bags men men'
      'women women shoes men men'
      'women women shoes men men';
    span{
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: var(--light-clr);
      padding: 0.5rem 1rem;
    }
  }
`
const LandingStyled = styled.div`
  padding: 0 5rem;
  .carousel {
    position: relative;
  }
  .slide-div{
    position: relative;
  }
  .nav-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    background: none;
    margin: 0 1rem;
    transition: all 0.2s ease-in-out; 
    background-color: rgba(0,0,0,0.1);
    color: var(--light-clr)
  }
  .nav-btn:hover {
    background-color: rgba(0,0,0,0.3);
  }
  .back-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }
`
const Featured = styled.div`
  padding: 0 2rem;
  margin: 2rem auto 8rem;
  .carousel__inner-slide {
    width: calc(100% - 20px);
    height: 100%;
    left: 10px;
    top: 10px;
    img {
      height: 85%;
    }
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
`

const mapStateToProps = state => ({
  products: state.product
})


export default connect(mapStateToProps, { getProducts })(Landing)