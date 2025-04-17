import { useEffect, useState } from 'react';
import { fetchTasks, addTask, updateTask } from '../api/tasks';
import AddTaskModal from '../components/AddTaskModal';
import Column from '../components/Column';
import { DndContext } from '@dnd-kit/core';

const COLUMN_COLORS = {
  'To Do': 'bg-purple-100 border-purple-500',
  'In Progress': 'bg-yellow-100 border-yellow-500',
  'Done': 'bg-green-100 border-green-500',
};

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks().then((res) => setTasks(res.data));
  }, []);

  const handleAddTask = async (task) => {
    const res = await addTask(task);
    setTasks([...tasks, res.data]);
    setIsModalOpen(false);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.data.current.status === over.id) return;

    const updatedTask = { ...active.data.current, status: over.id };
    await updateTask(active.id, updatedTask);
    setTasks(tasks.map((t) => (t.id === active.id ? updatedTask : t)));
  };

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
          🧠 Task Management Dashboard
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto"
        >
          ➕ Add New Task
        </button>
      </div>

      {/* Kanban Columns */}
      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['To Do', 'In Progress', 'Done'].map((status) => (
            <Column
              key={status}
              id={status}
              title={status}
              tasks={tasks.filter((t) => t.status === status)}
              color={COLUMN_COLORS[status]}
            />
          ))}
        </div>
      </DndContext>

      {isModalOpen && (
        <AddTaskModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddTask} />
      )}
    </div>
  );
}
