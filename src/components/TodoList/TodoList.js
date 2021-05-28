import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './scss/TodoList.module.css';
import TodoListItem from './components/TodoListItem';

const TodoList = ({ todoListData }) => {
  const { todo, todoList, todoListItem } = styles;

  return (
    <div className={todo}>
      <ul className={todoList}>
        {
          todoListData.map((item) => (
            <li className={todoListItem} key={item.id}>
              <TodoListItem item={item} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const searchTodo = (todoListData, label) => {
  if (label.length === 0) {
    return todoListData;
  }
  return todoListData.filter((item) => {
    return item.name.indexOf(label) > -1;
  });
};

const sortList = (todoListData, nameBtn) => {
  switch (nameBtn) {
    case 'Active':
      return todoListData.filter((item) => item.done === false);
    case 'Done':
      return todoListData.filter((item) => item.done === true);
    default:
      return todoListData;
  }
};

const mapStateToProps = ({ addFormCases, searchFormCases }) => {
  const { todoListData } = addFormCases;
  const { label = '', nameBtn } = searchFormCases;
  return {
    todoListData: sortList(searchTodo(todoListData, label), nameBtn)
  };
};

export default connect(mapStateToProps)(TodoList);

TodoList.propTypes = {
  todoListData: PropTypes.arrayOf(PropTypes.object).isRequired
};
