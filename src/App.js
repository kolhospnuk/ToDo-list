import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
import TodoSearchForm from './components/TodoSearchForm/TodoSearchForm';
import TodoAddForm from './components/TodoAddForm/TodoAddForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <TodoSearchForm />
      <TodoAddForm />
      <TodoList />
    </div>
  );
}

export default App;
