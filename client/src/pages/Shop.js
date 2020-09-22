import React from 'react';
import { Route } from 'react-router-dom';
import Collections from './Collections';

const Shop = ({ match }) => {
  return (
    <div className="layout">
      <Route path={`${match.path}/:collectionId`} component={Collections} />
    </div>
  )
}



export default Shop;