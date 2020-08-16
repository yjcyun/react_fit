import React from 'react';
import styled from 'styled-components';

const SideNav = () => {
  return (
    <StyledSideNav>
      Side navigation
    </StyledSideNav>
  )
}

const StyledSideNav = styled.nav`
  display:none;

  @media (min-width: 996px){
    display:flex;
    width: 25%
  }
`;

export default SideNav
