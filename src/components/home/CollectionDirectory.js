import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectHomeSections } from '../../redux/home/homeSelectors';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CustomButton from '../CustomButton';

const CollectionDirectory = ({ history, match, sections }) => {
  return (
    <StyledDirectory>
      <h1 className="title-font title">WOMEN'S ACTIVE CLOTHING & GEAR</h1>
      <div className="directory">
        {sections.map(({ id, imageUrl, button, linkUrl}) => {
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

const mapStateToProps = createStructuredSelector({
  sections: selectHomeSections
})
export default withRouter(connect(mapStateToProps)(CollectionDirectory));