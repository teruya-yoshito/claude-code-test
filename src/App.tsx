import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import type { Filter } from './types';
import './App.css';

export default function App() {
  const { todos, add, toggle, remove, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<Filter>('all');

  const visible = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="app">
      <h1>TODO</h1>
      <TodoInput onAdd={add} />
      <ul className="todo-list">
        {visible.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggle} onRemove={remove} />
        ))}
        {visible.length === 0 && (
          <li className="empty">タスクはありません</li>
        )}
      </ul>
      {todos.length > 0 && (
        <TodoFilter
          current={filter}
          onChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />
      )}
    </div>
  );
}
