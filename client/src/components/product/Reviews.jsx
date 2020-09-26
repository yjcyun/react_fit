import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import Button from '../layout/Button'
import { FiUser, FiThumbsUp, FiThumbsDown } from 'react-icons/fi'

const Reviews = ({ product }) => {
  return (
    <ReviewsStyled className='container'>
      <h2>Reviews</h2>
      <div className='stars-container'>
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
        <Button dark>write a review</Button>
      </div>
      <div className='reviews'>
        <div className='user'>
          <div className='user-name'>
            <FiUser className='icon' />
            <span>Review by Someone</span>
          </div>
          <div className='review-actions'>
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
        <div>
          <StarRatings
            rating={product.ratingsAverage}
            starDimension='17px'
            starSpacing='0px'
            starRatedColor='#FDCC0D'
          />
          <span className='ratings-avg'>5.0</span>
        </div>
        <div className='review-text'>
          <h4 className='review-title'>review title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore autem odit deleniti eos sapiente, minus iste itaque numquam ut!</p>
        </div>
        <div className='like'>
          <p>Was this review helpful to you?</p>
          <button><FiThumbsUp className='icon' />1</button>
          <button><FiThumbsDown className='icon' />0</button>
        </div>
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
  .stars-container {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 2rem;
  }
  .star-container {
    margin-top: 2px;
  }
  .ratings-avg {
    margin: 0 0.5rem;
  }
  .reviews {
    padding-bottom: 1.5rem;
    border-bottom: var(--input-border);
    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      .user-name{
        display: flex;
        align-items: center;
      }
      .icon {
        background-color: #444;
        color: white;
        font-size: 2rem;
        padding: 0.5rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
      .review-actions {
        span{
          margin-left: 0.5rem;
          cursor: pointer;
        }
        span:hover{
          color: tomato;
        }
      }
    }
    .review-title{
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .like{
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
      p{
        margin-right: 0.7rem;
      }
      button {
        border: var(--input-border);
        padding: 0.5rem 1rem;
        background-color: var(--light-clr);
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.2s all;
        .icon {
          font-size: 1.3rem;
          margin-right: 0.5rem;
        }
      }
      button:hover {
        background-color: var(--faint-grey)
      }
    }
  }
`

export default Reviews