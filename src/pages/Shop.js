import React from 'react';
import { Route } from 'react-router-dom';
import SideNav from '../components/home/SideNav';
import CollectionsOverview from '../components/home/CollectionsOverview';
import Collections from './Collections';

const Shop = ({ match }) => {
  return (
    <div className="layout">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collections} />
    </div>
  )
}



export default Shop;