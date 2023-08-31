import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CounterTasks from '../CounterTasks';
import Form from '../Form';
import TasksList from '../TasksList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskLabel, setTaskLabel] = useState('');

  const handleNewLabel = (event) => {
    setTaskLabel(event.target.value);
  };

  const addTask = async (event) => {
    event.preventDefault();

    const result = await axios.post(`http://localhost:3000/tasks`, {
      label: taskLabel,
    });

    setTasks(result.data);
    setTaskLabel('');
  };

  const handleTaskDone = async (id) => {
    const result = await axios.put(`http://localhost:3000/tasks/${id}`);

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

  const handleDeleteTask = async (id) => {
    const result = await axios.delete(`http://localhost:3000/tasks/${id}`);
    setTasks(result.data);
  };

  const loadTasks = async () => {
    const result = await axios.get('http://localhost:3000/tasks');
    setTasks(result.data);
  };

  useEffect( () => {
    loadTasks();
  }, []);

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
