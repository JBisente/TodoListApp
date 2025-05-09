import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

const TodoList = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  };

  // TASKS
  const [tasks, setTasks] = useState([
    { time: "08:00", task: "Go to church" },
    { time: "09:00", task: "Cook for Family" },
  ]);

  function addTask(newTask) {
    setTasks((t) => [...t, newTask]);
  }
  function deleteTask(index) {}

  // MODAL
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} addTask={addTask} />
      <div className="min-h-screen bg-gray-100">
        <div className="mx-auto w-full max-w-sm rounded-lg p-4 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {getGreeting()}
              </h1>
              <p className="text-md text-gray-500">
                Start scheduling your daily task.
              </p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-800/50 text-white"
            >
              <Plus />
            </button>
          </div>

          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Today's tasks
          </h2>
          <ol>
            {tasks.map((task, index) => {
              return (
                <li
                  key={index}
                  className="my-2 flex items-center justify-between rounded-lg border border-gray-400 p-2"
                >
                  <div className="flex gap-4">
                    <input type="checkbox" />
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-gray-600">{task.time}</p>
                      <p>{task.task}</p>
                    </div>
                  </div>
                  <div>
                    <Trash size={16} onClick={() => deleteTask(index)} />
                  </div>
                </li>
              );
            })}
          </ol>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Completed Tasks
          </h2>
          <ol>
            {tasks.map((task, index) => {
              return (
                <li className="my-2 flex items-center justify-between rounded-lg border border-gray-400 p-2">
                  <div className="flex gap-4">
                    <input type="checkbox" />
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-gray-600">{task.time}</p>
                      <p>{task.task}</p>
                    </div>
                  </div>
                  <div>
                    <Trash size={16} />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoList;
