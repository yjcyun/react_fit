import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shopSelectors';
import CollectionsOverview from '../components/shop/CollectionsOverview';

const Collections = ({ collection }) => {
  return (
    <div>
      <CollectionsOverview collections={collection}/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collections);