import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import HOME_DATA from '../../data/homeData';
import CustomButton from '../CustomButton';

class CollectionDirectory extends Component {
  state = {
    collections: HOME_DATA
  };

  render() {
    const { history, match } = this.props;
    return (
      <StyledDirectory>
        <h1 className="title-font title">WOMEN'S ACTIVE CLOTHING & GEAR</h1>
        <div className="directory">
          {this.state.collections.map(({ id, imageUrl, button, linkUrl, size }) => {
            return (
              <div key={id} className="collection-content"
                onClick={() => history.push(`${match.url}${linkUrl}`)}>
                <img className="category-img" alt="category" src={imageUrl} />
                <div className="button-container">
                  <CustomButton inverse>{button}</CustomButton>
                </div>
              </div>
            )
          })}
        </div>
      </StyledDirectory>
    )
  }
}

const StyledDirectory = styled.section`
  .directory{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 1rem;
    cursor: pointer;
  }

  .collection-content {
    position: relative;
  }

  .button-container {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .title {
    font-size:1.2rem;
  }

  @media (min-width: 768px) {
    .title{
      font-size: 1.5rem;
    }
  }
`;

export default withRouter(CollectionDirectory);