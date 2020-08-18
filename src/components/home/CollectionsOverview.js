import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../shop/CollectionPreview';

const CollectionsOverview = ({ collections }) => {
  return (
    <div>
      {
        collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
