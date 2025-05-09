import { X } from "lucide-react";
import { useState } from "react";

function AddModal({ open, onClose, addTask }) {
  const [task, setTask] = useState({
    time: "",
    task: "",
    completed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    // Add a new task in the list
    addTask(task);

    // Clears the task form
    setTask({ id: ``, time: "", task: "", completed: false });
    onClose();
  }

  return (
    // MODAL
    <div
      className={`fixed flex h-full w-full items-center justify-center bg-gray-500/30 ${open ? "visible" : "invisible"}`}
    >
      <div className="h-fit w-full max-w-sm rounded-lg bg-gray-100 p-4">
        <form className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="font-bold">Add Task</p>
            <X onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="flex flex-col">
            <label>Name</label>
            <input
              onChange={(e) => setTask({ ...task, task: e.target.value })}
              value={task.task}
              type="text"
              className="rounded-lg border border-gray-400 bg-transparent px-2 py-4"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Time</label>
            <input
              onChange={(e) => setTask({ ...task, time: e.target.value })}
              value={task.time}
              type="time"
              className="rounded-lg border border-gray-400 bg-transparent px-2 py-4"
              required
            />
          </div>
          <div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="float-right rounded-full bg-violet-800/50 px-8 py-2 text-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
