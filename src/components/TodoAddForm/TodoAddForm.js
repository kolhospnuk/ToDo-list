import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './TodoAddForm.module.css';
import { addTodoAction } from '../../store/actions';

const TodoAddForm = ({ addTodo }) => {
  const { form, formInput, formBtn } = styles;

  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (name !== '') addTodo(name);
    setName('');
  };

  return (
    <form
      className={form}
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        className={formInput}
        type="text"
        placeholder="Enter..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className={formBtn}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  addTodo: (name) => addTodoAction(name)
};

export default connect(null, mapDispatchToProps)(TodoAddForm);

TodoAddForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};
