import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => {
  const [count, setCount] = useState(todos.filter(todo => !todo.completed).length);
  const [items, setItems] = useState(todos);

  const handleCheckbox = (id) => {
    const updated= items.map(item => {
      if (item.id === id) {
        return {
          ...item, completed: !item.completed,
        }
      }
      return item;
    });
    setItems(updated);
    setCount(updated.filter(todo => !todo.completed).length);
  }

  const handleDelete = () => {
    const updated = items.filter(item => !item.completed);
    setItems(updated);
    setCount(updated.filter(todo => !todo.completed).length);
  }

  return (
    <div>
      <h2>To do List yang Harus dikerjakan: {count}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={item.completed} onChange={() => handleCheckbox(item.id)} />
            <span>{item.title} - {item.description}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleDelete} disabled={count <= 0}>Hapus</button>
    </div>
  );
};

TodoList.propTypes = {todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TodoList;
