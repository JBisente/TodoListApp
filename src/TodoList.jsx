import { Plus } from 'lucide-react';

const TodoList = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning!';
    if (hour < 18) return 'Good afternoon!';
    return 'Good evening!';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-800">{getGreeting()}</h1>
            <p className="text-sm text-gray-500">Start scheduling your daily task.</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-violet-800/50 text-white flex items-center justify-center">
            <Plus />
          </button>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Today's tasks</h2>
      </div>
    </div>
  );
};

export default TodoList;
