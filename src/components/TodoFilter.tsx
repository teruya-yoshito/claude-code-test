import type { Filter } from '../types';

interface Props {
  current: Filter;
  onChange: (filter: Filter) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了' },
];

export function TodoFilter({ current, onChange, activeCount, completedCount, onClearCompleted }: Props) {
  return (
    <div className="todo-footer">
      <span>{activeCount}件 残り</span>
      <div className="filters">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={current === f.value ? 'active' : ''}
            onClick={() => onChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button onClick={onClearCompleted}>完了をクリア</button>
      )}
    </div>
  );
}
