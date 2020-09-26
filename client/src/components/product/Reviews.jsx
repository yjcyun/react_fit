import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import Button from '../layout/Button'

const Reviews = ({product}) => {
  return (
    <ReviewsStyled className='container'>
      <h2>Reviews</h2>
      <span className='stars'>
        <StarRatings
          rating={product.ratingsAverage}
          starDimension='17px'
          starSpacing='0px'
          starRatedColor='#FDCC0D'
        />
        <span>{product.ratingsAverage}</span>
      </span>
      <span>(based on {product.ratingsQuantity} reviews)</span>
      <Button dark>write a review</Button>
      <div className='reviews'>
        <span>Review by Someone</span>
        <StarRatings
          rating={product.ratingsAverage}
          starDimension='17px'
          starSpacing='0px'
          starRatedColor='#FDCC0D'
        />
        <span>r5.0</span>
        <h4>review title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore autem odit deleniti eos sapiente, minus iste itaque numquam ut!</p>
        <span>Edit</span>
        <span>Delete</span>
      </div>
    </ReviewsStyled>
  )
}

const ReviewsStyled = styled.section`
  margin: 2rem auto 7rem;
  padding: 0 1rem;
  @media (min-width: 768px) {
    padding: 0 2rem;
    margin: 2rem auto 8rem;
  }
`
export default Reviews
