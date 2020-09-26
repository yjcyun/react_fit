import React from 'react'
import styled from 'styled-components'
import { FiUser, FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import StarRatings from 'react-star-ratings'

const ReviewList = ({reviews}) => {
  return (
    <ReviewListStyled>
    {reviews.map(review => (
      <div key={review.id} className='each-review'>
        <div className='user'>
          <div className='user-name'>
            <FiUser className='icon' />
            <span>Review by {review.user.name}</span>
          </div>
          <div className='review-actions'>
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
        <div>
          <StarRatings
            rating={review.rating}
            starDimension='17px'
            starSpacing='0px'
            starRatedColor='#FDCC0D'
          />
          <span className='ratings'>{review.rating.toFixed(1)}</span>
        </div>
        <div className='review-text'>
          <h4 className='review-title'>{review.title}</h4>
          <p>{review.review}</p>
        </div>
        <div className='like'>
          <p>Was this review helpful to you?</p>
          <button><FiThumbsUp className='icon' />1</button>
          <button><FiThumbsDown className='icon' />0</button>
        </div>
      </div>
    ))}
  </ReviewListStyled>
  )
}

const ReviewListStyled = styled.div`
  .each-review{
    border-bottom: var(--input-border);
    padding: 1.5rem 0;
  }
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
  .ratings {
    margin-left: 0.5rem;
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
`

export default ReviewList
