import React, { useState } from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import Button from '../layout/Button'

const ReviewForm = ({ openReview }) => {
  const [rating, setRating] = useState(0);
  // CHANGE RATING
  const changeRating = newRating => setRating(newRating);
  const handleReviewInputs = formData => {

  }
  
  return (
    <ReviewFormStyled open={openReview}>
      <form>
        <div className='form-control'>
          <label>Your rating*</label>
          <StarRatings
            rating={rating}
            starDimension='17px'
            starSpacing='0px'
            starRatedColor='var(--primary-clr)'
            changeRating={changeRating}
            starSelectingHoverColor='var(--primary-clr)'
          />
        </div>
        <div className='form-control'>
          <label>Add a headline*</label>
          <input type='text' required />
        </div>
        <div className='form-control'>
          <label>Write your review *</label>
          <textarea name='' cols='30' rows='5' required />
        </div>
        <Button>Submit</Button>
      </form>
    </ReviewFormStyled>
  )
}

const ReviewFormStyled = styled.div`
 margin-bottom: 3rem;
  background-color: var(--light-bg);
  padding: 2rem;
  display: ${props => props.open ? 'block' : 'none'};
  label {
    margin-right: 0.5rem;
  }
  textarea, input{
    border: var(--input-border);
    width: 100%;
    padding: 0.5rem;
  }
  textarea:focus{
    outline: none;
  }
  .form-control {
    margin-bottom: 0.5rem;
  }
`

export default ReviewForm
