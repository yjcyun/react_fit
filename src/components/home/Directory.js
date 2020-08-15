import React, { Component } from 'react';
import styled from 'styled-components';
import HOME_DATA from '../../data/homeData';
import CollectionItem from './CollectionItem';

class Directory extends Component {
  state = {
    collections: HOME_DATA
  };

  render() {
    return (
      <>
        <h1>Featured Collections</h1>
        <StyledDirectory>
          {this.state.collections.map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
        </StyledDirectory>
      </>
    )
  }
}

const StyledDirectory = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
grid-gap: 2rem;
`

export default Directory