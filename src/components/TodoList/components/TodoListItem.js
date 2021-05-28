import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../scss/TodoListItem.module.css';
import { doneTodoAction, deletedTodoAction } from '../../../store/actions';

const TodoListItem = ({ item, doneTodo, deletedTodo }) => {
  const {
    todoName, todoBtns, todoBtnsDone, todoBtnsDelete
  } = styles;
  const { id, name, done } = item;

  return (
    <>
      <span className={todoName}>{name}</span>
      <div className={todoBtns}>
        <button
          type="button"
          className={done ? `${todoBtnsDone} done` : todoBtnsDone}
          onClick={() => doneTodo(id)}
        >
          Done
        </button>
        <button
          type="button"
          className={todoBtnsDelete}
          onClick={() => deletedTodo(id)}
        >
          Del
        </button>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  doneTodo: (id) => doneTodoAction(id),
  deletedTodo: (id) => deletedTodoAction(id)
};

export default connect(null, mapDispatchToProps)(TodoListItem);

TodoListItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object).isRequired,
  doneTodo: PropTypes.func.isRequired,
  deletedTodo: PropTypes.func.isRequired
};
