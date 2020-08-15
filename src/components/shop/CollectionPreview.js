import React from 'react'
import CollectionItem from './CollectionItem';
import styled from 'styled-components';


const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionPreview>
      <h1>{title}</h1>
      <div className="collection-container" >
        {items.filter((item, i) => i < 4).map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
      </div>
    </StyledCollectionPreview>
  )
}

const StyledCollectionPreview = styled.div`
  .collection-container{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 1rem;
    margin-bottom: 5rem;
  }
`;

export default CollectionPreview
