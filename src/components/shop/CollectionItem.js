import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import CustomButton from '../CustomButton';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <StyledCollectionItem>
      <div className="image-container">
        <img className="image" src={imageUrl} />
        <CustomButton onClick={() => addItem(item)} className="custom-button">ADD TO CART</CustomButton>
      </div>
      <div className="collection-text">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
    </StyledCollectionItem>
  )
}

const StyledCollectionItem = styled.div`
text-align:center;

  .image-container{
    position:relative;
    display:flex;
    justify-content:center;
  }

  .image {
    width: 100%;
    margin-bottom:0.5rem;  
  }

  .custom-button{
    width: 80%;
    opacity: 0.7;
    position:absolute;
    bottom: 1.5rem;
    display:none;
  }

  &:hover {
    .image {
      opacity: 0.8
    }

    .custom-button {
      opacity: 0.85;
      display:block
    }
  }  
`


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem)