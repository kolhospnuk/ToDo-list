import { ADD_TODO, DELETED_TODO, DONE_TODO } from '../types';

const initialState = {
  todoListData: []
};

const addFormCases = (state = initialState, action) => {
  const { todoListData } = state;
  let newTodo = {};
  let newTodoListData = [];
  let index = 0;

  switch (action.type) {
    case ADD_TODO:
      newTodo = {
        id: action.name,
        name: action.name,
        done: false
      };
      return {
        todoListData: [newTodo, ...todoListData]
      };

    case DONE_TODO:
      newTodoListData = todoListData.map((item) => {
        const { done, id } = item;
        return id === action.id ? { ...item, done: !done } : item;
      });

      return {
        todoListData: newTodoListData
      };

    case DELETED_TODO:
      index = todoListData.findIndex((elem) => elem.id === action.id);
      newTodoListData = [...todoListData.slice(0, index), ...todoListData.slice(index + 1)];

      return {
        todoListData: newTodoListData
      };

    default:
      return state;
  }
};

export default addFormCases;
