import { useDroppable } from '@dnd-kit/core';
import TaskCard from './Taskcard';


export default function Column({ id, title, tasks, color }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 rounded-lg shadow-md border-2 ${color}`}
    >
      <h2 className="text-xl font-semibold text-slate-700 mb-3">{title}</h2>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
