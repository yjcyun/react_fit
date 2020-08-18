import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  tops: 1,
  shorts: 2,
  dresses: 3,
  jackets: 4
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  )