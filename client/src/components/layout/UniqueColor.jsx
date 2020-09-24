import React from 'react'
import styled from 'styled-components';

export const UniqueColor = (stock, shop) => {
  const unique = [...new Set(stock.map(item => item.color))];
  return unique.map(color => (
    <ProductColor key={color} className='color' background={color} shop={shop}>
      <div className='label-position'>
        <span className='label'>{color}</span>
      </div>
    </ProductColor>
  ));
}

const ProductColor = styled.div`
  width: ${props => props.shop ? '15px' : '25px'};
  height:  ${props => props.shop ? '15px' : '25px'};
  border-radius: 50%;
  background-color: ${props => props.background ? props.background : 'var(--dark-clr'};
  margin: 0 5px;
  cursor: pointer;
  position: relative;
  .label-position{
    position: absolute;
    top: -2rem;
    left: -1.5rem;
    width: 4rem;
    text-align: center;
  }
  .label {
    position: relative;
    background-color: var(--dark-clr);
    color: var(--light-clr);
    padding: 5px 10px;
    cursor: pointer;
    visibility: hidden;
    text-transform: capitalize;
    font-size: 0.8rem;
  }
  .label:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--dark-clr);
    border-bottom: 0;
    margin-left: -5px;
    margin-bottom: -5px;
  }
  :hover .label {
    visibility: visible;
  }
`