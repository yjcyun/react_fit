import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import 'pure-react-carousel/dist/react-carousel.es.css'

const TopCarousel = () => {
  return (
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
      <ButtonBack className='nav-btn back-btn'>
        <FiChevronLeft />
      </ButtonBack>
      <ButtonNext className='nav-btn next-btn'>
        <FiChevronRight />
      </ButtonNext>
    </CarouselProvider>
  )
}

export default TopCarousel
