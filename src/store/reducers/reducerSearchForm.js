import { SORT_LIST, SEARCH_TODO } from '../types';

const initialState = {
  nameBtn: 'All',
  label: ''
};

export const searchFormCases = (state = initialState, action) => {
  switch (action.type) {
    case SORT_LIST:
      return {
        nameBtn: action.nameBtn
      };

    case SEARCH_TODO:
      return {
        label: action.label
      };

    default:
      return state;
  }
};

export default searchFormCases;
