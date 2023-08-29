import './styles.scss';
import CounterTasks from '../CounterTasks';
import Form from '../Form';
import TasksList from '../TasksList';
import tasks from '../../data/tasks';

function App() {
  const toDoTasks = tasks.filter((task) => task.done === false);
  return (
    <div className="app">
      <Form />
      <CounterTasks toDoTasks={toDoTasks.length} />
      <TasksList tasks={tasks} />
    </div>

  );
}

export default App;
