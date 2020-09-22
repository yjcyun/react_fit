import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <StyledCartIcon onClick={(toggleCartHidden)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </StyledCartIcon>
  )
}

const StyledCartIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position:relative;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 1.8rem;
    height: 1.8rem;
  }

  .item-count {
    position:absolute;
    font-size: 0.8rem;
    font-weight: bold;
    bottom: 0.6rem;
  }
`

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)