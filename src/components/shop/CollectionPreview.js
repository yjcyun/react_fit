import React from 'react'
import CollectionItem from './CollectionItem';
import styled from 'styled-components';


const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionPreview>
      {/* <h1>{title}</h1> */}
      <div className="collection-container" >
        {items.filter(i => i.id).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </StyledCollectionPreview>
  )
}

const StyledCollectionPreview = styled.div`
   .collection-container{
    display:grid;
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    grid-gap: 1rem;
    cursor: pointer;
  }
`;

export default CollectionPreview
