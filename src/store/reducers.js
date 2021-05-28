import { combineReducers } from 'redux';
import addFormCases from './reducers/reducerAddForm';
import searchFormCases from './reducers/reducerSearchForm';

const rootReducer = combineReducers({
  addFormCases, searchFormCases
});

export default rootReducer;
