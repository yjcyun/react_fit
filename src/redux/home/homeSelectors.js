import { createSelector } from 'reselect';

const selectHome = state => state.home;

export const selectHomeSections = createSelector(
  [selectHome],
  home => home.sections
)