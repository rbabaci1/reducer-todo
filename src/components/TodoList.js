import React, { useReducer, useState } from 'react';
import { v4 as id } from 'uuid';

import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo';

export default function TodoList() {
  const [todoList, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    dispatch({
      type: 'addTodo',
      payload: { todo }
    });
  };

  return (
    <div className='todo-list'>
      <h1>todo list</h1>

      <form onSubmit={addTodo}>
        <label>
          Enter a Todo:
          <input type='text' onChange={e => setTodo(e.target.value)} />
        </label>

        <button>Add</button>
      </form>

      <ol>
        {todoList.map(todo => (
          <Todo todo={todo} key={id()} />
        ))}
      </ol>
    </div>
  );
}
