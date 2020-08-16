import React, { Component } from 'react';
import SHOP_DATA from '../data/shopData';
import CollectionPreview from '../components/shop/CollectionPreview';
import SideNav from '../components/home/SideNav';

class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    console.log(collections);

    return (
      <div className="layout">
        <SideNav />
        {collections.map(({ id, ...otherProps }) => {
          return (
            <CollectionPreview key={id} {...otherProps} />
          )
        })}
      </div>
    )
  }
}

export default Shop