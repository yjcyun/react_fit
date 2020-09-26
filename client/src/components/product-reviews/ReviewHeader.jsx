import React from 'react'
import styled from 'styled-components'
import Button from '../layout/Button'
import StarRatings from 'react-star-ratings'

const ReviewHeader = ({ toggleReviewForm, product }) => {
  return (
    <AverageStars>
      <div>
        <StarRatings
          rating={product.ratingsAverage}
          starDimension='17px'
          starSpacing='0px'
          starRatedColor='#FDCC0D'
        />
        <span className='ratings-avg'>{product.ratingsAverage}</span>
        <span>(based on {product.ratingsQuantity} reviews)</span>
      </div>
      <div className='btn-container' onClick={() => toggleReviewForm()}>
        <Button dark>write a review</Button>
      </div>
    </AverageStars>
  )
}

const AverageStars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 4rem;
  .ratings-avg {
    margin: 0 0.5rem;
  }
`


export default ReviewHeader
