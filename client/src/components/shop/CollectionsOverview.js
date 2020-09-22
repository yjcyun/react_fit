import React from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';
import SideNav from '../home/SideNav';

const CollectionsOverview = ({ collections: { title, items } }) => {
  return (
    <StyledColOverview className="layout">
      <SideNav />
      <div>
        <h2 className="title-font">{title}</h2>
        <div className="items-container">
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </StyledColOverview>
  )
}

const StyledColOverview = styled.section`
  .items-container {
    display: grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:1rem;
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    .items-container {
      display:grid;
      grid-template-columns:repeat(4,1fr);
    }
  }
`;

export default CollectionsOverview