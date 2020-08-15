import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CollectionItem = ({ title, imageUrl, desc, history, linkUrl, match }) => {
  return (
    <StyledCollectionItem
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <img className="category-img" src={imageUrl} />
      <h2 className="title-font">{title.toUpperCase()}</h2>
      <p className="desc">{desc.toUpperCase()}</p>
    </StyledCollectionItem>
  )
}

const StyledCollectionItem = styled.div`
  width: 100%;
  height: 280px; 
  cursor: pointer;

  .category-img{
    width: 100%;
    height: 100%;
  }

  .desc{
    text-decoration: underline;
    padding-top:0.5rem;
  }
`

export default withRouter(CollectionItem);