import { useDraggable } from '@dnd-kit/core';

export default function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: { ...task },
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition border-l-4 border-indigo-400"
    >
      <h3 className="text-lg font-bold text-slate-800">{task.title}</h3>
      {task.description && <p className="text-sm text-slate-600 mt-1">{task.description}</p>}
    </div>
  );
}
