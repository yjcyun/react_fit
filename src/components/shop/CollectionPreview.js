import React from 'react'
import CollectionItem from './CollectionItem';
import styled from 'styled-components';


const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionPreview>
      <h1>{title}</h1>
      <div className="collection-container" >
        {items.map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
      </div>
    </StyledCollectionPreview>
  )
}

const StyledCollectionPreview = styled.div`

`;

export default CollectionPreview
