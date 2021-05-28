import {
  ADD_TODO, DONE_TODO, DELETED_TODO, SORT_LIST, SEARCH_TODO
} from './types';

export const addTodoAction = (name) => {
  return {
    type: ADD_TODO,
    done: false,
    name
  };
};

export const doneTodoAction = (id) => {
  return {
    type: DONE_TODO,
    id
  };
};

export const deletedTodoAction = (id) => {
  return {
    type: DELETED_TODO,
    id
  };
};

export const searchTodoAction = (label) => {
  return {
    type: SEARCH_TODO,
    label
  };
};

export const sortListAction = (nameBtn) => {
  return {
    type: SORT_LIST,
    nameBtn
  };
};
