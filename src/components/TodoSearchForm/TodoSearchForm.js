import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './TodoSearchForm.module.css';
import { sortListAction, searchTodoAction } from '../../store/actions';

const TodoSearchForm = ({ sortList, searchTodo }) => {
  const {
    form, formInput, formBtnGroup, formBtnGroupItem
  } = styles;

  const buttons = [
    { nameBtn: 'All' },
    { nameBtn: 'Active' },
    { nameBtn: 'Done' }
  ];

  const btns = buttons.map(({ nameBtn }) => (
    <button
      key={nameBtn}
      className={formBtnGroupItem}
      type="button"
      onClick={() => sortList(nameBtn)}
    >
      {nameBtn}
    </button>
  ));

  return (
    <form className={form}>
      <input
        className={formInput}
        type="text"
        placeholder="Enter..."
        onChange={(e) => searchTodo(e.target.value)}
      />
      <div className={formBtnGroup}>
        {btns}
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  sortList: (nameBtn) => sortListAction(nameBtn),
  searchTodo: (label) => searchTodoAction(label)
};

export default connect(null, mapDispatchToProps)(TodoSearchForm);

TodoSearchForm.propTypes = {
  sortList: PropTypes.func.isRequired,
  searchTodo: PropTypes.func.isRequired
};
