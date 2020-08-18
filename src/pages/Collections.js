import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shopSelectors';
import CollectionItem from '../components/shop/CollectionItem';

const Collections = ({ collection }) => {
  console.log(collection)
  return (
    <div>
      Collections Page
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collections);
