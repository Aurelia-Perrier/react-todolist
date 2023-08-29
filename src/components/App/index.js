import './styles.scss';
import { useState } from 'react';
import CounterTasks from '../CounterTasks';
import Form from '../Form';
import TasksList from '../TasksList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskLabel, setTaskLabel] = useState('');

  const generateNewId = () => {
    if (tasks.length === 0) {
      return 1;
    }
    const idList = tasks.map((task) => task.id);
    return Math.max(...idList) + 1;
  };

  const handleNewLabel = (event) => {
    setTaskLabel(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: generateNewId(),
      label: taskLabel,
      done: false,
    };

    const tasksCopy = [...tasks];
    tasksCopy.push(newTask);

    setTasks(tasksCopy);
    setTaskLabel('');
  };

  const handleTaskDone = (id) => {
    const tasksCopy = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(tasksCopy);
  };

  const handleDeleteTask = (id) => {
    const newArrayTasks = tasks.filter((task) => task.id !== id);
    setTasks(newArrayTasks);
  };

  const toDoTasks = tasks.filter((task) => task.done === false);
  return (
    <div className="app">
      <Form addTask={addTask} handleNewLabel={handleNewLabel} taskLabel={taskLabel} />
      <CounterTasks toDoTasks={toDoTasks.length} />
      <TasksList tasks={tasks} handleTaskDone={handleTaskDone} handleDeleteTask={handleDeleteTask} />
    </div>

  );
}

export default App;
