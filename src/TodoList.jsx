import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import AddModal from "./components/AddModal";

const TodoList = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  };

  // TASKS
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((t) => [...t, newTask]);
  }

  // DELETE A TASK
  function deleteTask(index) {
    const updatedTasks = tasks.filter(
      (_, currentIndex) => currentIndex !== index,
    );
    setTasks(updatedTasks);
  }

  // COMPLETE A
  function handleCheck(index) {
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    );
  }

  // MODAL
  const [open, setOpen] = useState(false);
  return (
    <>
      <AddModal open={open} onClose={() => setOpen(false)} addTask={addTask} />
      <div className="min-h-screen bg-gray-100 pt-8">
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
            {tasks.length !== 0 ? (
              tasks.map((task, index) => {
                return (
                  <li
                    key={index}
                    className="my-2 flex items-center justify-between rounded-lg border border-gray-400 p-2"
                  >
                    <div className="flex gap-4">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCheck(index)}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-xs text-gray-600">{task.time}</p>
                        <p
                          className={`${task.completed ? "line-through" : ""}`}
                        >
                          {task.task}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Trash
                        size={16}
                        onClick={() => deleteTask(index)}
                        className="cursor-pointer text-violet-800/50"
                      />
                    </div>
                  </li>
                );
              })
            ) : (
              <li className="my-2 flex items-center justify-center rounded-lg border border-gray-400 p-2">
                <p className="text-gray-400">You have no tasks listed.</p>
              </li>
            )}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoList;
