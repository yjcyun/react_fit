import React from 'react';
import styled from 'styled-components';

const CollectionItem = ({id, name, imageUrl, price}) => {
  return (
    <StyledCollectionItem>
      <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
      <div className="collection-text">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
    </StyledCollectionItem>
  )
}

const StyledCollectionItem = styled.div`
text-align:center;

  .image {
    width: 100%;
    height: 280px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom:0.5rem;

    .collection-text{
      padding-top: 1rem;
    }
  }
 
`

export default CollectionItem