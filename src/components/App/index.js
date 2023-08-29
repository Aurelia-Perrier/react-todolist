import './styles.scss';
import CounterTasks from '../CounterTasks';
import Form from '../Form';
import TasksList from '../TasksList';
import tasks from '../../data/tasks';

function App() {
  return (
    <div className="app">
      <Form />
      <CounterTasks />
      <TasksList tasks={tasks} />
    </div>

  );
}

export default App;
