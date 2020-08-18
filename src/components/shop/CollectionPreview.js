import React from 'react'
import CollectionItem from './CollectionItem';
import styled from 'styled-components';


const CollectionPreview = ({ title, items}) => {
  return (
    <StyledCollectionPreview>
      <h1></h1>
      <div className="collection-container" >
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </StyledCollectionPreview>
  )
}

const StyledCollectionPreview = styled.div`
    display:flex;
    flex-direction: column;

    .collection-container {
      display:flex;
    }

`;

export default CollectionPreview
